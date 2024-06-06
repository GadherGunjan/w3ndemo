import SplitText from "./SplitText";
import ThemeButton from "./layout/ThemeButton";

const WhoWeAre = ({ whoWeAreData }) => {
    if(whoWeAreData?.whoHeading != '' || whoWeAreData?.whoSubheading != '' || whoWeAreData?.whoAboutHeading != ''){
    return (
        <div className="relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 whowearesec">
          <div className="relative">
            <div className="container">
                {whoWeAreData?.whoHeading &&
                    <h4 className="text-15 4xl:text-24 3xl:text-20 md:text-18 font-semibold uppercase text-themeRed  pb-16 2xl:pb-32 xl:pb-28 md:pb-20">{whoWeAreData.whoHeading}</h4>
                }
                {whoWeAreData?.whoSubheading &&
                    <div className="relative flex items-center mb-18 4xl:mb-64 2xl:mb-48 xl:mb-32 md:mb-24">
                        <h2 className=" text-44 4xl:text-128 3xl:text-106 2xl:text-96 xl:text-86 md:text-64 font-gilroy font-extrabold text-white flex-none mr-20 4xl:mr-96  2xl:mr-64 xl:mr-36   md:mr-28 ">{whoWeAreData.whoSubheading}</h2>
                        <div className="h-[1px] flex-auto bg-linecolor"></div>
                    </div>
                }

                {(whoWeAreData?.nutsStandsForInfo?.length > 0) &&
                    <h1 className="  left-align-mobile-title 2xl:pt-0 pt-24    text-48 4xl:text-72  3xl:text-64 2xl:text-54 xl:text-48  lg:text-42 md:text-64     pb-24 4xl:pb-128 3xl:pb-96 2xl:pb-64 xl:pb-48 lg:pb-32 md:pb-32">
                        {whoWeAreData.nutsStandsForInfo.map((item, i) => {
                            let nutsText = item.text;
                            let letter = nutsText.charAt(0);
                            return (
                                <SplitText copy={nutsText} key={i} role="heading" />
                            )
                        })}
                    </h1>
                }
                <div className="w-full 3xl:w-10/12 mx-auto lg:text-center ">
                    {whoWeAreData?.whoAboutHeading &&
                        <h4 className="lg:text-center   text-15 4xl:text-24 3xl:text-20 md:text-18    font-bold text-textprimary  pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24">{whoWeAreData.whoAboutHeading}</h4>
                    }
                    <p className="font-light text-18 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24  text-textColorSecondary">{whoWeAreData.whoDescription}</p>
                    <div className="buttonbox flex md:justify-center mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                        {(whoWeAreData?.whoButtonOneInfo.hasOwnProperty('url') && whoWeAreData.whoButtonOneInfo.hasOwnProperty('title')) &&
                            <ThemeButton link={whoWeAreData.whoButtonOneInfo.url} buttontext={whoWeAreData.whoButtonOneInfo.title} className="btnoutline" />
                        }

                        {(whoWeAreData?.whoButtonTwoInfo.hasOwnProperty('url') && whoWeAreData.whoButtonTwoInfo.hasOwnProperty('title')) &&
                            <ThemeButton link={whoWeAreData.whoButtonTwoInfo.url} buttontext={whoWeAreData.whoButtonTwoInfo.title} className="btngr" />
                        }
                    </div>
                </div>
            </div>
            <div className="bg_gradient bg-gradient-light 4xl:top-[340px] 3xl:top-[290px] 2xl:top-[280px] xl:top-[260px] lg:top-[218px] md:top-[155px] top-[115px]  z-[-1] absolute left-0 right-0 bottom-0 pointer-events-none"></div>
            </div>
        </div>       
    )
    }
}

export default WhoWeAre;