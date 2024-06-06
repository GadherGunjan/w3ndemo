import Image from "next/image";
import ThemeButton from "./layout/ThemeButton";

const NuttyBunch = ({nuttybunchdata}) => {
    return (
        <div className="nuttybunch_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                <div className="md:grid  md:flex-row flex-col  grid-cols-12 gap-32">
                    {nuttybunchdata?.title &&
                        <div className="row-span-full col-start-1 col-span-6 self-center z-10 md:pb-0 pb-24">
                            <h1 className="titleText xl:w-full md:w-[150%]" 
                                dangerouslySetInnerHTML={nuttybunchdata.title}
                            ></h1>
                        </div>
                    }
                    {nuttybunchdata?.image &&
                        <div className="row-span-full col-span-8 4xl:col-span-8      lg:col-span-8  col-end-13 4xl:col-end-13  lg:col-end-13 self-center  ">
                            <div className="imagebox relative overflow-hidden before:content-[''] before:block before:pt-[50.495%]">
                                <Image src={nuttybunchdata.image} width={1010} height={510} alt={nuttybunchdata.altimage} className="absolute left-0 top-0 w-full h-full object-cover rounded-[20px] 3xl:rounded-[40px] 2xl:rounded-[30px] xl:rounded-[26px] md:rounded-[26px] " />
                            </div>
                        </div>
                    }
                </div>
                {nuttybunchdata?.bunchtext &&
                    <div className="flex flex-col       gap-y-16 2xl:gap-y-32 xl:gap-y-28 md:gap-y-20 mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                        {nuttybunchdata.bunchtext.map((data,index)=>(
                            <div className="ptag text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16 " key={index}>{data.contentSingle}</div>
                        ))}
                    </div>
                }

                {nuttybunchdata?.linktext &&
                    <div className="flex mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                        <ThemeButton link={nuttybunchdata.link} buttontext={nuttybunchdata.linktext} className="btnoutline" />
                    </div>
                }
            </div>
        </div>
    )
}

export default NuttyBunch;