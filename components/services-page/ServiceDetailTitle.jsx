
import ThemeButton from "../layout/ThemeButton";
import SplitText from "../SplitText";
const ServiceDetailTitle = ({pagetitledata}) => {
    
    return (
        <div className="
            servicedetailtitle
            pt-88 4xl:pt-196 2xl:pt-144 xl:pt-128 md:pt-130
            pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28
        ">
            <div className="container">
                {/* {pagetitledata.subtitle && pagetitledata.title && (
                    <h1 className="
                        text-18 4xl:text-64 3xl:text-54 2xl:text-48 xl:text-42 md:text-30
                        uppercase font-gilroy font-extrabold titleText servidedetail_title
                    ">
                        <SplitText copy={`${pagetitledata.subtitle} <span className="text-38 4xl:text-196 3xl:text-164 2xl:text-144 xl:text-130 md:text-78">${pagetitledata.title}</span>`} role="heading" />
                    </h1>
                )}
                <div className="bottomrow mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                    <div className="flex flex-col lg:flex lg:flex-row">
                        <div className="lg:w-6/12 w-full pr-16 4xl:pr-30 xl:pr-24 md:pr-18">
                            {pagetitledata.descriptiontitle &&
                                <h2 className="text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24  ">{pagetitledata.descriptiontitle}</h2>
                            }
                                <div className="w-full hidden buttonbox  lg:flex  mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                                    {pagetitledata.servicebutton1 &&
                                        <ThemeButton
                                            buttontext={pagetitledata.servicebutton1.title}
                                            link={pagetitledata.servicebutton1.url}
                                            className="w3btn btngr"
                                        />
                                    }
                                    {pagetitledata.servicebutton2 &&
                                        <ThemeButton
                                            buttontext={pagetitledata.servicebutton2.title}
                                            link={pagetitledata.servicebutton2.url}
                                            className="w3btn btnoutline "
                                        />
                                    }
                                </div>
                        </div>
                        <div className="lg:w-6/12 w-full">
                            {pagetitledata.descriptiontext &&
                                <div className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary lg:pt-0 md:pt-24 pt-18">{pagetitledata.descriptiontext}</div>
                            }
                        </div>
                    </div>
                    <div className="w-full flex  buttonbox  lg:hidden  mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                                    {pagetitledata.servicebutton1 &&
                                        <ThemeButton
                                            buttontext={pagetitledata.servicebutton1.title}
                                            link={pagetitledata.servicebutton1.url}
                                            className="w3btn btngr"
                                        />
                                    }
                                    {pagetitledata.servicebutton2 &&
                                        <ThemeButton
                                            buttontext={pagetitledata.servicebutton2.title}
                                            link={pagetitledata.servicebutton2.url}
                                            className="w3btn btnoutline "
                                        />
                                    }
                                </div>
                    
                </div> */}

                <div className="relative">
                    <h1 className="font-gilroy uppercase font-extrabold pagetitle">
                        {pagetitledata?.subtitle &&
                            <span className=" text-32 md:text-64 text-textprimary ">{pagetitledata.subtitle}</span>
                        }
                        {pagetitledata?.title &&
                            <strong className=" text-38 4xl:text-196 3xl:text-164 2xl:text-144 xl:text-130 md:text-78  leading-none  block">{pagetitledata.title}</strong>
                        }

                    </h1>
                    
                    <div className="flex flex-col mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                    {(pagetitledata?.contentlist?.length > 0) &&
                        <div className="w-full md:w-10/12 lg:w-8/12 ml-auto ptag   text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16 ">
                        {pagetitledata?.contentlist?.map((el, idx)=>(
                            <p className="mt-6" key={idx}>{el.contentSingleText}</p>
                        ))}
                        </div>
                    }
                        <div className="w-full md:w-10/12 lg:w-8/12 hidden buttonbox  lg:flex  mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24 ml-auto">
                            {pagetitledata?.servicebutton1 &&
                                <ThemeButton
                                    buttontext={pagetitledata.servicebutton1.title}
                                    link={pagetitledata.servicebutton1.url}
                                    className="w3btn btngr"
                                />
                            }
                            
                            {pagetitledata?.servicebutton2 &&
                                <ThemeButton
                                    buttontext={pagetitledata.servicebutton2.title}
                                    link={pagetitledata.servicebutton2.url}
                                    className="w3btn btnoutline "
                                />
                            }
                            
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceDetailTitle;