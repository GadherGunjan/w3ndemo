
import CheckArrowBigIcon from "@/assets/images/svgs/CheckArrowBigIcon";

const QuickFacts = ({quickfactsdata}) => {
    if(quickfactsdata?.title != '' || quickfactsdata?.QuickData?.length > 0){
    return (
        <div className="quick_facts_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 ">
            <div className="container">
                {quickfactsdata?.title &&
                    <h1 className="titleText pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28" dangerouslySetInnerHTML={quickfactsdata.title}></h1>
                }

                {quickfactsdata?.QuickData &&
                    <div className="quick_facts_row flex flex-col  lg:grid lg:grid-rows-2 lg:grid-flow-col     gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24 
                        gap-x-24 4xl:gap-x-128 3xl:gap-x-96 2xl:gap-x-64 xl:gap-x-48 lg:gap-x-32 md:gap-x-32
                    ">
                        {quickfactsdata.QuickData.map((data,index)=>(
                            <div className="w-full    flex items-center text-14 4xl:text-20 3xl:text-18 md:text-16 " key={index}>
                                {data?.textfact &&
                                <>
                                    <i className="flex-none w-14 4xl:w-26 3xl:w-24 2xl:w-20 xl:w-18  md:w-16  mr-14 4xl:mr-24 xl:mr-20 md:mr-16  text-themeRed">
                                        <CheckArrowBigIcon />
                                    </i>
                                    <div className="grow text-14 4xl:text-20 3xl:text-18 md:text-16 text-textprimary">
                                        {data.textfact}
                                    </div> 
                                </>
                                } 
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
    }
}

export default QuickFacts;