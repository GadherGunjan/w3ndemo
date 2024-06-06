import Link from "next/link";
import ThemeButton from "./ThemeButton";
import CheckArrowIcon from "@/assets/images/svgs/CheckArrowIcon";

const PricingBox = ({pricingData}) => {
    return (
        <>
            {pricingData.map((pricedata, index) => (
                <div className="col-span-12 lg:col-span-4  " key={index}>
                    <div className="pricingbox h-full flex flex-col p-24 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 bg-bgSecondary   group hover:bg-gradient-primary transition-all duration-300  rounded-[20px] 2xl:rounded-[40px] xl:rounded-[40px]">
                        { 
                            pricedata.price &&
                            <div className="text-32 4xl:text-64 3xl:text-54 2xl:text-48 xl:text-42 md:text-30 text-textprimary font-bold">      
                                {pricedata.price}
                            </div>
                        }
                        {
                            pricedata.priceTitle &&
                            <div className="font-bold text-textprimary pt-12 text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20">  
                                {pricedata.priceTitle}
                            </div>   
                        }
                        {   
                            pricedata.textRepeater.length > 0 &&
                            <ul className="grid   gap-y-16 4xl:gap-y-32 2xl:gap-y-24 xl:gap-y-24 md:gap-y-20 mt-24 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                                {pricedata.textRepeater.map((planText, index) => (
                                    <li className="flex items-center  text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:leading-normal 3xl:leading-normal 2xl:leading-normal  xl:leading-normal lg:leading-normal md:leading-normal group-hover:text-white" key={index}>
                                        <div className="iconbox flex-none text-tertiary flex w-16 4xl:w-20 xl:w-18 md:w-14 items-center justify-center    mr-14 4xl:mr-24 xl:mr-20 md:mr-16  group-hover:text-white"> 
                                            {CheckArrowIcon()}
                                        </div>
                                        <div className="grow ">{planText.text}</div>
                                    </li>
                                ))}
                            </ul>
                        }
                        {
                            pricedata.button &&
                            <div className="btnbox pt-24 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 mt-auto">
                                <ThemeButton link={pricedata.button.url} className="btnoutline justify-center group-hover:text-themeRed  group-hover:bg-white" buttontext={pricedata.button.title} />
                            </div>
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default PricingBox;