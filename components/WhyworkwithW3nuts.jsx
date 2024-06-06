import ThemeButton from "./layout/ThemeButton";
import WhyWorkCard from "./layout/WhyWorkCard";
import WhyworkwithW3nutsicon01 from "@/assets/images/svgs/WhyworkwithW3nutsicon01"
import WhyCounterCard from "./layout/WhyCounterCard";
import SplitText from "./SplitText";

const WhyworkwithW3nuts = ( {whyworkData} ) => {

    const data = [];
    if( whyworkData?.whyWorkWithInfo?.length > 0 ){
        whyworkData?.whyWorkWithInfo.map((item, i) => {
            const dataObj = {
                value :  `0${i + 1}`,
                index: i+1,
                title : item?.title || '',
                description: item?.description || '',
                icon : item?.image?.sourceUrl || '',
            }
            data.push(dataObj)
        });
    }


    const countData = [];
    if( whyworkData?.whyCounterInfo?.length > 0 ){
        whyworkData?.whyCounterInfo.map((item, i) => {
            const dataObj = {
                value :  `0${i + 1}`,
                numbertext: item?.number || '',
                description: item?.title || '',
            }
            countData.push(dataObj)
        });
    }

    if(whyworkData?.whyHeading != '' || whyworkData?.whyWorkWithInfo?.length > 0 || whyworkData?.whyCounterInfo?.length > 0){
    return (
        <div className="relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
            <div className="relative block notty-sec">
                <div className="w-full mb-20 4xl:mb-96  2xl:mb-64 xl:mb-36   md:mb-28 md:relative md:top-auto sticky top-[80px]">
                    <h1 className="titleText center-align justify-tile has-block-span md:justify-start justify-center flex md:text-left text-center">
                        <SplitText copy={whyworkData.whyHeading} role="heading" />
                    </h1>
                </div>
                <div className="md:grid-cols-2 3xl:grid-cols-4  grid gap-6 why-work-sec">
                    {data.map(({index, value, title, description, icon}) => (
                        <WhyWorkCard i={index} key={value} title={title} description={description} icon={icon} />
                    ))}
                </div>
                </div>
                <div className="buttonbox flex lg:text-left   md:justify-start justify-center items-center  my-18 4xl:my-64 2xl:my-48 xl:my-32 md:my-24">
                    {(whyworkData.whyButtonOneInfo.hasOwnProperty('url') && whyworkData.whyButtonOneInfo.hasOwnProperty('title'))&&
                        <ThemeButton link={whyworkData.whyButtonOneInfo.url} buttontext={whyworkData.whyButtonOneInfo.title} className="btnoutline" />
                    }

                    {(whyworkData.whyButtonTwoInfo.hasOwnProperty('url') && whyworkData.whyButtonTwoInfo.hasOwnProperty('title'))&&
                        <ThemeButton link={whyworkData.whyButtonTwoInfo.url} buttontext={whyworkData.whyButtonTwoInfo.title} className="btngr" />
                    }
                </div>

                <div className=" md:px-0 px-16  md:grid-cols-3 grid md:gap-6   md:rounded-[0px]  rounded-[16px] md:bg-transparent bg-bgSecondary md:border-0  border-[1px]  border-[#262626]  [&>*:first-child]:border-0">
                    {countData.map(({ value, numbertext, description}) => (
                        <WhyCounterCard key={value} numbertext={`${numbertext}+`} description={description} />
                    ))}
                </div>
                
            </div>
        </div>
    )
    }
}

export default WhyworkwithW3nuts;