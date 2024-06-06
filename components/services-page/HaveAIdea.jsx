import ThemeButton from "../layout/ThemeButton";
import SplitText from "../SplitText";

const HaveAIdea = (props) => {
    const data = props.tellusdata

    return (
        <>
        {(data?.tellusHeading != '' || data?.tellusList?.length > 0) &&
        <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32  relative">
            <div className="container">
                <div className="titlesub pb-40 lg:pb-96">
                    {data.tellusHeading &&
                        <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                            <SplitText copy={data.tellusHeading} />
                        </h1>
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 4xl:gap-30 xl:gap-24 md:gap-18 w-full">
                    {data?.tellusList.map((el, idx)=>(
                        <div className="flex flex-col justify-between w-full p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 rounded-[20px] 4xl:rounded-[40px] 2xl:rounded-[30px] xl:rounded-[26px] md:rounded-[20px] bg-bgSecondary lg:sticky lg:top-128 " key={idx}>
                            {el?.titleSingleTellSer &&
                                <h3 class="text-textprimary font-bold   text-16 4xl:text-32 3xl:text-26 xl:text-24 md:text-20   mb-14 4xl:mb-24 xl:mb-20 md:mb-16 flex items-center gap-6 ">{el.titleSingleTellSer}</h3> 
                            }
                            {el?.contentSingleTellSer &&
                                <div class="text-textColorSecondary   text-14 4xl:text-20 3xl:text-18 md:text-16    ">{el.contentSingleTellSer}</div>
                            }
                            {el?.buttonSingleTellSer?.title &&
                                <div className="btnbox pt-24 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 mt-auto">
                                    <ThemeButton link={el?.buttonSingleTellSer?.url} className="btnoutline justify-center group-hover:text-themeRed  group-hover:bg-white" buttontext={el?.buttonSingleTellSer?.title} />
                                </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    }
    </>
    )
}
export default HaveAIdea;