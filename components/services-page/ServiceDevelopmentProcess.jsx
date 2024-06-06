import Link from "next/link";
import SplitText from "../SplitText";
import { useState, useEffect } from 'react';

const ServiceDevelopmentProcess = (props) => {
    
    const data = props.servicedevelopmentprocessdata;
    
    const [activeSection, setActiveSection] = useState('');
    const [tabNavsScroll, setTabNavsScroll] = useState(0);
    useEffect(() => {

        const observer = new IntersectionObserver(
          ([entry]) => {
            if(entry.isIntersecting === true) {
                
                const activeCon = Number(entry.target.dataset.id)
                const activeTab = document.getElementById(`active-${activeCon}`)
            
                
                setActiveSection(entry.target.id);

                activeTab?.scrollIntoView({ inline: "nearest", block: 'start' })
            }
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.8, // Adjust threshold as needed
          }
        );
        const elements = document.querySelectorAll('.common-section');
        elements.forEach((el)=>{
            observer.observe(el);
        })
        return () => {
            elements.forEach((el)=>{
                observer.unobserve(el);
            })
        };
        
    }, [tabNavsScroll]);

    

    return (
        <>
        {(data?.title != '' || data?.processdedata?.length > 0) &&
            <div className="relative py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28">
                <div className="container">
                    <div className="titlesub relative z-30">
                        {data.title &&
                            <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                                <SplitText copy={data.title} />
                            </h1>
                        }
                    </div>
                
                        <div className="tabnavswrap border-b border-linecolor sticky top-0 z-20 bg-bgColor py-18 4xl:py-64 2xl:py-48 xl:py-32 md:py-24">
                            <ul className="flex items-center md:pr-0   gap-x-14 4xl:gap-x-24 xl:gap-x-20 md:gap-x-16">
                                {data?.processdedata.map((el, idx)=>(
                                    <li className={`flex text-14 4xl:text-16 3xl:text-15`} key={idx}>
                                        {/* <Link href={`#${el.tabtitle.replaceAll(" ", "")}`} className={`4xl:py-12 4xl:px-24 text-textprimary leading-auto border-textprimary border-solid border rounded-full ${activeSection === el.tabtitle.replaceAll(" ", "") ? 'bg-themeRed text-white border-themeRed' : ''}`}>{el.tabtitle}</Link> */}
                                        <div className={` py-12 px-14 4xl:px-24 xl:px-20 md:px-16 text-textprimary leading-auto border-textprimary border-solid border rounded-full transition-all duration-300 whitespace-nowrap ${activeSection === el.tabtitle.replaceAll(" ", "") ? 'bg-gradient-primary text-white border-transparent': ''}`} id={`active-${idx}`} >{el.tabtitle}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    
                    <div className="maincontent flex justify-center">
                        <div className="w-full 2xl:w-6/12 xl:w-7/12 lg:w-8/12">
                            {data?.processdedata.map((el, idx)=>(
                                <div className="py-18 4xl:py-64 2xl:py-48 xl:py-32 md:py-24 border-b border-solid border-b-linecolor bg-bgColor common-section" key={idx} id={`${el.tabtitle.replaceAll(" ", "")}`} data-id={idx}>
                                    <div className="numbersbox text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48 xl:text-42 md:text-30 font-semibold
                                        pb-14 4xl:pb-24 xl:pb-20 md:pb-16 
                                    ">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="text-textprimary font-bold
                                        text-18 4xl:text-40 3xl:text-34 xl:text-30 md:text-24
                                        pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24
                                    ">{el.title}</h3>
                                    <div className="flex flex-col gap-y-16 4xl:gap-y-48 2xl:gap-y-32 xl:gap-y-28 md:gap-y-24 relative">
                                        {el?.tabData.map((data, index)=>(
                                            <div className="relative
                                                pl-16 2xl:pl-32 xl:pl-28 md:pl-20 before:content-['•'] before:absolute before:left-0 before:top-0 before:text-textprimary text-15 4xl:text-24 3xl:text-20 md:text-18
                                            " key={index}>
                                                <h4 className="text-textprimary font-semibold
                                                    text-15 4xl:text-24 3xl:text-20 md:text-18
                                                    pb-12 xl:pb-16 md:pb-14
                                                ">{data.title}</h4>
                                                <div className="text-textColorSecondary font-normal
                                                    text-14 4xl:text-20 3xl:text-18 md:text-16 
                                                ">{data.desciption}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {data.notes &&
                        <div className="text-16 4xl:text-32 3xl:text-26 xl:text-24 md:text-20 text-textprimary
                            pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28
                        ">
                            {data.notes}
                        </div>
                    }
                </div>
            </div>
        }
        </>
    )
}

export default ServiceDevelopmentProcess;