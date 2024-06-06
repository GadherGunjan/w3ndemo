import SplitText from "../SplitText";

const HiringDevloper = (props) => {
    const data = props.hiringserdata

    return ( 
        <>
        {(data?.title != '' || data?.hiringRepeater?.length > 0) &&
        <div className="relative py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28">
            <div className="container">
                <div className="titlesub mb-18 4xl:mb-64 2xl:mb-48 xl:mb-32 md:mb-24">
                    {data?.title &&
                    <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                        <SplitText copy={data.title} />
                    </h1>
                    }
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 4xl:gap-30 xl:gap-24 md:gap-18 w-full">
                {data?.hiringRepeater.map((el, idx)=>(
                    <div className="w-full p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 rounded-[20px] 4xl:rounded-[40px] 2xl:rounded-[30px] xl:rounded-[26px] md:rounded-[20px] bg-bgSecondary lg:sticky lg:top-128 " key={idx}>
                        {el?.titleSingleHiring &&
                        <h3 className="text-textprimary font-bold
                            text-16 4xl:text-32 3xl:text-26 xl:text-24 md:text-20
                            mb-14 4xl:mb-24 xl:mb-20 md:mb-16 flex items-center gap-6
                        ">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="15" cy="15" r="13.8" stroke="#E0E0E0" stroke-width="1.6"/>
                                <path d="M19.875 11.75L13.375 18.25L10.125 15" stroke="#E0E0E0" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            {el.titleSingleHiring}
                        </h3>
                        }
                        {el?.contentSingleHiring &&
                        <div className="text-textColorSecondary
                            text-14 4xl:text-20 3xl:text-18 md:text-16 
                        ">
                           {el.contentSingleHiring}
                        </div>
                        }
                    </div>
                ))}
                </div>
            </div>
        </div>
        }
    </>
    );
}

export default HiringDevloper;