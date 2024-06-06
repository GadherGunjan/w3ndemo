
import Image from "next/image";
import imdevice from "@/assets/images/imdevice.jpg";
import imdevice2 from "@/assets/images/imdevice2.jpg";


const ImmersionDevice = ({immersiondata}) => {
    return (
        <>
            <div className=" py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 relative">
            <div className="relative">
                <div className="container">
                    <div className="relative">
                        <div className="w-full h-full">
                            <div className="xl:w-9/12 md:w-10/12 w-10/12" >
                            {immersiondata.image1 &&
                                <Image src={immersiondata.image1} alt="imdevice" width={1140} height={638} className="relative 3xl:border-[8px] 2xl:border-[6px] xl:border-[6px] md:border-[4px] border-[2px] border-[#4C4C4C] 4xl:rounded-[24px]  3xl:rounded-[24px] 2xl:rounded-[18px] xl:rounded-[16px] md:rounded-[16px] rounded-[6px]  w-full 4xl:h-[638px] 3xl:h-[532px]"></Image>
                            }
                            </div>
                        </div>
                        <div className="md:w-6/12 w-full ml-auto pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28  md:mt-0   mt-24">
                        {immersiondata.title &&
                            <h2 className="pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24 uppercase text-textColor text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-gilroy font-extrabold 2xl:w-9/12 3xl:w-8/12 xl:leading-[1.4]">{immersiondata.title}</h2>
                        }
                        {immersiondata.text &&
                            <p className="text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16 font-normal">{immersiondata.text}</p>
                        }
                        </div>
                    </div>
                </div>
                <div className="absolute left-0 4xl:top-[294px] 3xl:top-[210px] 2xl:top-[210px] xl:top-[196px] md:top-[144px]   top-[71px]   right-auto -z-10">
                {immersiondata.image2 &&
                    <div className="w-[42.4479vw]">
                        <Image src={immersiondata.image2} alt="imdevice2" className="w-full h-auto" width={815} height={540} ></Image>       
                    </div>
                }
                </div>
                </div>
            </div>
        </>
    )
}

export default ImmersionDevice;