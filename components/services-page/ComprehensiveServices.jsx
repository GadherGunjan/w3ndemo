
import SplitText from "../SplitText";

const ComprehensiveServices = (props) => {
    const data = props.comprehensiveservicesdata

    return (
        <>
        {(data?.title != '' || data?.contentRepeater?.length > 0) &&
            <div className="relative py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28">
                <div className="container">
                    <div className="titlesub mb-18 4xl:mb-64 2xl:mb-48 xl:mb-32 md:mb-24">
                        {data.title &&
                            <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                                <SplitText copy={data.title} />
                            </h1>
                        }
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 4xl:gap-30 xl:gap-24 md:gap-18 w-full">
                        {data?.contentRepeater.map((el, idx)=>(
                            <div key={idx} className="w-full p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 rounded-[20px] 4xl:rounded-[40px] 2xl:rounded-[30px] xl:rounded-[26px] md:rounded-[20px] bg-bgSecondary lg:sticky lg:top-128 ">
                                <div className="numbers text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48 xl:text-42 md:text-30
                                    pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24
                                ">
                                    {String(idx + 1).padStart(2, '0')}
                                </div>
                                <h3 className="text-textprimary font-bold
                                    text-16 4xl:text-32 3xl:text-26 xl:text-24 md:text-20
                                    mb-14 4xl:mb-24 xl:mb-20 md:mb-16 
                                ">{el.title}</h3>
                                <div className="text-textColorSecondary
                                    text-14 4xl:text-20 3xl:text-18 md:text-16 
                                ">
                                    {el.content}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        }
    </>
    )
}

export default ComprehensiveServices;