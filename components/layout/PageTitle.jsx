import Image from "next/image";
import SplitText from "../SplitText";

const PageTitle = ({pageTitleData}) => {


    const logoClass = pageTitleData.haslogo.sourceUrl ? '2xl:mb-[164px] xl:mb-[146px] md:mb-106 mb-64' : '';
    const descriptionClass = pageTitleData.description ? 'mb-24 4xl:mb-128 3xl:mb-96 2xl:mb-64 xl:mb-48 lg:mb-32 md:mb-32' : '';
    
    return (
        pageTitleData.type ? (
            <div className={`pagetitle pt-88 4xl:pt-196 2xl:pt-144 xl:pt-128 md:pt-130  ${logoClass} ${descriptionClass}`}>
                <div className="container ">
                    <div className="relative">
                    <h1 className="font-gilroy uppercase font-extrabold">
                        {pageTitleData.subtitle &&
                            <span className=" text-32 4xl:text-96 3xl:text-80  2xl:text-72 md:text-64 text-textprimary ">{pageTitleData.subtitle}</span>
                            // <SplitText copy={pageTitleData.subtitle} role="heading" />
                        }
                        {pageTitleData.title &&
                            <strong className=" text-38 4xl:text-196 3xl:text-164 2xl:text-144 xl:text-130 md:text-78  leading-none  block">{pageTitleData.title}</strong>
                        }
                    </h1>
                    {pageTitleData.haslogo &&
                        <div className="logobox absolute max-w-[212px]    left-auto     4xl:max-w-[54%] 3xl:max-w-[53.2%] 2xl:max-w-[57.2%] lg:max-w-[45.2%] md:max-w-[60%] right-0 top-0 xl:top-36 md:top-0">
                            <Image src={pageTitleData.haslogo.sourceUrl} width={807} height={367} alt="w3nuts Digital Agency" />
                        </div>
                    }
                    {pageTitleData.description &&
                        <div className="flex mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                            <div className="w-full md:w-10/12 lg:w-8/12 ml-auto ptag   text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16 ">
                                {pageTitleData.description}
                            </div>
                        </div>

                    }
                    </div>
                </div>
            </div>
        ) : ( 
            <div className="pagetitle pt-196">
                <div className="container">
                    <h1 className="font-gilroy uppercase font-extrabold">
                        {pageTitleData.subtitle &&
                            <span className="text-48 3xl:text-128 2xl:text-96 xl:text-96 md:text-64 text-textprimary">{pageTitleData.title}</span>
                        }
                        {pageTitleData.title &&
                            <strong className="text-36 3xl:text-96 2xl:text-64 xl:text-64 lg:text-48 md:text-48 block">{pageTitleData.subtitle}</strong>
                        }
                    </h1>
                </div>
            </div>
        )
        
    )
}

export default PageTitle;
