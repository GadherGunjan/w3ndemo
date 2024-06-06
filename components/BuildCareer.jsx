import ThemeButton from "./layout/ThemeButton";
import W3Big from "@/assets/images/svgs/W3Big";

const BuildCareer = ({buildcareerdata}) => {
    return (
        <>
        {(buildcareerdata?.title?.__html != null || buildcareerdata?.description?.__html != null) &&
        <div className="buildcareer_section relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="z-0 absolute left-0 top-0 w-full h-full flex items-center justify-center">
                <W3Big className="max-w-full max-h-full" />
            </div>
            <div className="container z-10 relative">
                <div className="flex flex-col items-center justify-center">
                    {
                    (buildcareerdata.style == '2') &&
                        <div className="w-full 3xl:w-10/12 md:w-10/12">
                            {buildcareerdata.title &&
                                <h1 className="titleText text-center ver-2 text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 lg:text-30 md:text-30"  dangerouslySetInnerHTML={buildcareerdata.title}></h1>
                            }
                            
                            
                            {buildcareerdata.description &&
                                <div className="ptag text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16  text-center mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24 md:px-0 px-20 2xl:max-w-[50%] md:max-w-[80%]  ml-auto mr-auto"
                                    dangerouslySetInnerHTML={buildcareerdata.description}
                                ></div>
                            }
                            {buildcareerdata.linktext &&
                                <div className="flex justify-center mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36   md:mt-28">
                                    <ThemeButton link={buildcareerdata.link} buttontext={buildcareerdata.linktext} className="btnoutline" />
                                </div>
                            }
                        </div>
                    }

                    {
                    (buildcareerdata.style == '1') &&
                        <div className="w-full 3xl:w-6/12 md:w-10/12">
                            {buildcareerdata.title &&
                                <h1 className="titleText text-center" 
                                    dangerouslySetInnerHTML={buildcareerdata.title}
                                ></h1>
                            }
                            
                            
                            {buildcareerdata.description &&
                                <div className="ptag text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16  text-center mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24 md:px-0 px-20"
                                    dangerouslySetInnerHTML={buildcareerdata.description}
                                ></div>
                            }
                            {buildcareerdata.linktext &&
                                <div className="flex justify-center mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36   md:mt-28">
                                    <ThemeButton link={buildcareerdata.link} buttontext={buildcareerdata.linktext} className="btnoutline" />
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
        }
        </>
    )
}

export default BuildCareer;