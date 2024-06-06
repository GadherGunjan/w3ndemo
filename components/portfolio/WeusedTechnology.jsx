
import Image from "next/image";
import motionimg from '@/assets/images/port-img-3.jpg';

const WeusedTechnology = ({usetechnologydata}) => {
    return (
        <>
            <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
                {usetechnologydata.bannerimage &&
                    <div className="w-full h-full overflow-hidden">
                        <Image src={usetechnologydata.bannerimage} alt="motionimg" width={1920} height={980} className="w-full"></Image>
                    </div>
                }
                <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
                    <div className="container">
                        <div className="pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28">
                            {usetechnologydata.title &&
                                <h2 className="text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 text-textColor font-extrabold font-gilroy uppercase">{usetechnologydata.title}</h2>
                            }
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-6 md:gap-x-20 4xl:gap-x-[290px] 3xl:gap-x-[260px] 2xl:gap-x-[131px] xl:gap-x-[207px]     gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24   ">
                            {usetechnologydata?.technologylist.map((data,index)=>(
                                <div className=" border-b border-solid border-[#1D1D1D] pb-18 4xl:pb-64 2xl:pb-48 xl:pb-32 md:pb-24" key={index}>
                                    <h2 className="  text-textColor font-manrope font-normal pb-14 4xl:pb-24 xl:pb-20 md:pb-16 text-18 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24">{data.title}</h2>
                                    <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  text-[#ABABAB] font-manrope font-normal">{data.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeusedTechnology;