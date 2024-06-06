const TypographyColor = ({typographydata}) => {
    return (
        <>
        <div className="  mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
            <div className="container">
                <div className="relative xl:hidden block pb-24">
                        {typographydata.boldtext &&
                            <div className="relative md:hidden block  pb-16  ">
                                <span className="4xl:text-[400px] 3xl:text-[334px] 2xl:text-[300px] xl:text-[268px] md:text-160 text-78 leading-[1] max-h-[490px] flex font-gilroy font-extrabold text-linecolor">{typographydata.boldtext}</span>
                            </div>
                        }
                        {typographydata.title &&
                            <span className="  text-[#ABABAB] text-14 4xl:text-20 3xl:text-18 md:text-16  font-medium font-manrop ">{typographydata.title}</span>
                        }
                        {typographydata.fontname &&
                            <h2 className="  text-18 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24 text-textColor font-manrope font-bold pt-14 4xl:pt-24 xl:pt-20 md:pt-16 pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24  border-b border-solid border-[#1D1D1D]">{typographydata.fontname}</h2>
                        }
                </div>
                <div className="flex  ">
                    <div className=" md:block hidden  w-full md:w-6/12 2xl:w-5/12 pr-16 4xl:pr-30 xl:pr-24 md:pr-18 relative">
                        {typographydata.title &&
                            <span className="xl:block hidden text-[#ABABAB] text-14 4xl:text-20 3xl:text-18 md:text-16  font-medium font-manrop ">{typographydata.title}</span>
                        }
                        {typographydata.fontname &&
                            <h2 className="xl:block hidden text-18 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24 text-textColor font-manrope font-bold pt-14 4xl:pt-24 xl:pt-20 md:pt-16 pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24  border-b border-solid border-[#1D1D1D]">{typographydata.fontname}</h2>
                        }
                        {typographydata.boldtext &&
                            <div className="absolute  left-0 4xl:bottom-54 xl:bottom-0 top-0 xl:top-auto">
                                <span className="4xl:text-[400px] 3xl:text-[334px] 2xl:text-[300px] xl:text-[268px] md:text-160 text-78 leading-[1] max-h-[490px] flex font-gilroy font-extrabold text-linecolor">{typographydata.boldtext}</span>
                            </div>
                        }
                    </div>
                    <div className="md:w-7/12  w-full">
                        <ul className="flex flex-col gap-y-20 4xl:gap-y-96  2xl:gap-y-64 xl:gap-y-36   md:gap-y-28">
                            {typographydata.h1text &&
                                <li className="flex items-center  ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">H1</span>
                                    <p className="text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 text-textColor font-manrope font-bold">{typographydata.h1text}</p>
                                </li>
                            }
                            {typographydata.h2text &&
                                <li className="flex items-center ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">H2</span>
                                    <p className="text-18 4xl:text-48 3xl:text-40  2xl:text-36 xl:text-32 md:text-26 text-textColor font-manrope font-semibold">{typographydata.h2text}</p>
                                </li>
                            }
                            {typographydata.h3text &&
                                <li className="flex items-center ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">H3</span>
                                    <p className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 text-textColor font-manrope font-medium">{typographydata.h3text}</p>
                                </li>
                            }
                            {typographydata.h4text &&
                                <li className="flex items-center ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">H4</span>
                                    <p className="text-15 4xl:text-24 3xl:text-20 md:text-18 text-textColor font-manrope font-normal">{typographydata.h4text}</p>
                                </li>
                            }
                            {typographydata.h5text &&
                                <li className="flex items-center ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">H5</span>
                                    <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  text-textColor font-manrope font-light">{typographydata.h5text}</p>
                                </li>
                            }
                            {typographydata.smalltext &&
                                <li className="flex items-center ">
                                    <span className="text-14 4xl:text-20 3xl:text-18 md:text-16 4xl:min-w-[136px] 2xl:min-w-[104px] xl:min-w-[58px] md:min-w-[68px] min-w-[55px] w-auto font-manrope text-textColor">Small</span>
                                    <p className="text-14 4xl:text-16 3xl:text-15 text-textColor font-manrope font-light">{typographydata.smalltext}</p>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
                    <div className="relative">
                        {typographydata.colortitle &&
                            <h2 className="text-18 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24 pb-14 4xl:pb-24 xl:pb-20 md:pb-16  font-bold font-manrope text-textColor  ">{typographydata.colortitle}</h2>
                        }
                        {typographydata.colortext &&
                            <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  font-normal text-[#ABABAB]">{typographydata.colortext}</p>
                        }
                    </div>
                    <div className="mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24 gap-16 4xl:gap-30 xl:gap-24 md:gap-18 spacing-30 grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2">
                        {typographydata?.colorlist.map((data,index)=>{
                            let clsColor = data.colorcode;
                            let textColor = data.textcolor;
                            return (
                            <div className={`p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 4xl:rounded-[30px] 3xl:rounded-[26px] 2xl:rounded-[22px]  rounded-[16px] gap-y-14 4xl:gap-y-24 xl:gap-y-20 md:gap-y-16  flex flex-col justify-center items-center`} key={index} style={{backgroundColor: clsColor , color: textColor}}>
                                <span className="text-14 4xl:text-20 3xl:text-18 md:text-16  font-manrope font-medium">{data.colorname}</span>
                                <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  font-medium font-manrope">{data.colorcode}</p>
                            </div>
                        )})}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TypographyColor;