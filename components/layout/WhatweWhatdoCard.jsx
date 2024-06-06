import Image from "next/image";
import Icon1 from "@/assets/images/we-icon-1.svg";
import Link from "next/link";

const WhatweWhatdoCard = (props) => {
    return (
        <>
            {props.WhatDoWeDoData.map((data,index)=> (
                <div className="whatwewhatdo_card w-full relative lg:sticky top-auto lg:top-[85px]  mt-16 2xl:mt-32 xl:mt-28 md:mt-20 p-16 2xl:p-32 xl:p-28 md:p-20 bg-bgSecondary rounded-[16px] md:rounded-[20px]" key={index}>
                    <div className="top_row flex md:items-start items-center  ">
                        {data.icon &&
                            <div className="iconbox flex-none flex w-48 h-48 4xl:w-100 4xl:h-100 2xl:w-84 2xl:h-84 xl:w-80 xl:h-80 md:w-56 md:h-56 items-center justify-center bg-linecolor rounded-[10px] mr-16 2xl:mr-32 xl:mr-28 md:mr-20">
                                <Image src={data.icon} alt="icon" width="64" height="64" className=" w-30 4xl:w-64  2xl:w-48 xl:w-44 md:w-36"  />
                            </div>
                        }
                        <div className="title_tech grow  ">
                            <h1 className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-semibold text-textprimary">
                                <Link href="/"  className="hover:text-themeRed">{data.title}</Link>
                            </h1>
                            <div className="technology  md:flex flex-wrap hidden gap-x-14 4xl:gap-x-24 xl:gap-x-20 md:gap-x-16 gap-y-16   pt-14 4xl:pt-24 xl:pt-20 md:pt-16 ">
                                {data.techData.map((plainText,index)=> (
                                    <Link href='/' className="flex items-center justify-center text-14 4xl:text-16 3xl:text-15 text-textColorSecondary  h-30 px-14 4xl:px-24 xl:px-20 md:px-16   rounded-[50px] border-solid border-textColorSecondary border leading-[normal] hover:bg-themeRed hover:border-themeRed hover:text-white" key={index}>
                                        {plainText}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="technology  md:hidden flex-wrap flex gap-x-14 gap-y-12   pt-18 ">
                                {data.techData.map((plainText,index)=> (
                                    <div className="flex items-center  justify-center text-14 4xl:text-16 3xl:text-15 text-textColorSecondary  h-26 px-16   rounded-[50px] border-solid border-textColorSecondary border leading-[24px]" key={index}>{plainText}</div>
                                ))}
                            </div>
                    <div className="dicsbox text-14  4xl:text-18  3xl:text-16 md:text-15 text-textColorSecondary pt-18 4xl:pt-64 2xl:pt-48 xl:pt-32 md:pt-24">
                        {data.description}
                    </div>
                </div>
            ))}
        </>
    )
}

export default WhatweWhatdoCard;