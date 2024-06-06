import SplitText from "../SplitText";

const WhyDevelopmentWithW3nuts = (props) => {
    const data = props.whydevelopmentwithw3nutsdata;
    return (
        <>
        {(data?.title != '' || data?.whydevelopdata?.length > 0) &&
            <div className="py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28 relative">
                <div className="container">
                    {data.title &&
                        <div className="titlesub">
                            <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                                <SplitText copy={data.title} />
                            </h1>
                        </div>
                    }
                    <div className="w-full flex justify-center mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                        <div className="w-full xl:w-10/12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-30 w-full">
                                {data?.whydevelopdata.map((el, idx)=>(
                                    <div key={idx} className="py-18 4xl:py-64 2xl:py-48 xl:py-32 md:py-24 border-solid border-t border-t-linecolor">
                                        {el.title &&
                                        <h3 className="text-textprimary font-bold
                                            text-15 4xl:text-24 3xl:text-20 md:text-18  
                                            pb-14 4xl:pb-24 xl:pb-20 md:pb-16 
                                        ">{el.title}</h3>
                                        }
                                        {el.description &&
                                        <div className="text-textColorSecondary
                                            text-14 4xl:text-20 3xl:text-18 md:text-16 
                                        ">{el.description}</div>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default WhyDevelopmentWithW3nuts;