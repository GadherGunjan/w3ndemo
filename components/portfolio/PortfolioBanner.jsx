import Image from "next/image";
import { motion , useScroll , useTransform } from 'framer-motion';
import { useRef } from "react";
import portfoliobanner from '@/assets/images/portfoliobanner-large.png';
import { Link } from "react-scroll";


const PortfolioBanner = ({portfoliobannerData}) => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start" , "end start"]
    })

    const backgroundY = useTransform(scrollYProgress, [0, 0.8], ["0%", "150%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-210%"]);

    return (
        <>
            <div className="relative 4xl:h-[1386px] 3xl:h-[1155px] 2xl:h-[1039px] xl:h-[925px] md:h-[1246px]  h-[870px] overflow-hidden">
                    <motion.div style={{ y: backgroundY }} className="absolute w-full h-full top-0 left-0 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gradient-portfolio-detail ">
                        {portfoliobannerData.image &&
                            <Image src={portfoliobannerData.image} alt="portfoliobanner" className="w-full h-full object-cover" width={1920} height={1500}></Image>
                        }
                    </motion.div>
                    <div className="container">
                        <div className="flex items-center 4xl:pt-[599px] 3xl:pt-[493px]  2xl:pt-[489px] xl:pt-[485px] md:pt-[861px] pt-[80vh]">
                            <motion.div style={{ y: textY }} className="w-full">
                                <div className="relative ">
                                    {portfoliobannerData.title &&
                                        <h1 className="text-44 4xl:text-128 3xl:text-106 2xl:text-96 xl:text-86 md:text-64 text-textColor font-extrabold font-gilroy pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24">{portfoliobannerData.title}</h1>
                                    }
                                    {portfoliobannerData.subtitle &&
                                        <p className="text-textprimary font-manrope text-14 4xl:text-20 3xl:text-18 md:text-16  font-normal">{portfoliobannerData.subtitle}</p>
                                    }
                                </div>
                                <div className="flex justify-start 4xl:pt-[256px] 3xl:pt-[192px] 2xl:pt-128 xl:pt-96 md:pt-64 pt-48    relative pb-24 4xl:pb-128 3xl:pb-96 2xl:pb-64 xl:pb-48 lg:pb-32 md:pb-32 gap-x-24 4xl:gap-x-128 3xl:gap-x-96 2xl:gap-x-64 xl:gap-x-48 lg:gap-x-32 md:gap-x-32">
                                    <div className="w-auto">
                                        {portfoliobannerData.servicetitle &&
                                            <h2 className="text-15 4xl:text-24 3xl:text-20 md:text-18 font-bold font-manrope text-textColor pb-14 4xl:pb-24 xl:pb-20 md:pb-16">{portfoliobannerData.servicetitle}</h2>
                                        }
                                        <ul>
                                            {portfoliobannerData?.servicelist.map((data,index)=>(
                                                <li className="text-14 4xl:text-20 3xl:text-18 md:text-16  pb-12 xl:pb-16 md:pb-14 font-manrope text-textprimary font-normal " key={index}>
                                                    <Link href="/" className="hover:underline">
                                                        {data.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-auto">
                                        {portfoliobannerData.industrytitle &&
                                            <h2 className="text-15 4xl:text-24 3xl:text-20 md:text-18 font-bold font-manrope text-textColor pb-14 4xl:pb-24 xl:pb-20 md:pb-16 ">{portfoliobannerData.industrytitle}</h2>
                                        }
                                        <ul>
                                            {portfoliobannerData?.industrylist.map((data,index)=>(
                                                <li className="text-14 4xl:text-20 3xl:text-18 md:text-16  pb-12 xl:pb-16 md:pb-14 font-manrope text-textprimary font-normal  " key={index}>
                                                    <Link href="/" className="hover:underline">
                                                        {data.text}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="w-auto">
                                        <h2 className="text-15 4xl:text-24 3xl:text-20 md:text-18 font-bold font-manrope text-textColor pb-14 4xl:pb-24 xl:pb-20 md:pb-16">Date</h2>
                                        <ul>
                                            <li className="text-14 4xl:text-20 3xl:text-18 md:text-16  pb-12 xl:pb-16 md:pb-14 font-manrope text-textprimary font-normal  ">{portfoliobannerData.date}</li>
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>    
                    </div>   
            </div>
        </>
    )
}

export default PortfolioBanner;