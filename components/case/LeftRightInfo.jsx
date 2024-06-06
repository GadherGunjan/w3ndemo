

const LeftRightInfo = (props) => {
    return (
        <div className="w-full relative">
            <div className="container">
                {props.haseline &&
                    <div className="h-[1px] w-full bg-linecolor"></div>
                }
                <div className="in_infowrap py-32 4xl:py-128 3xl:py-96 2xl:py-96 xl:py-96 lg:py-64 md:py-48  relative">
                    {props.compodata.lightTitle &&
                        <h3 className="linetitle text-bgColor text-32 4xl:text-64   xl:text-48 md:text-36 uppercase pb-3">{props.compodata.lightTitle}</h3>            
                    }
                    <div className="flex items-start lg:flex-row flex-col">
                        <div className="w-full lg:w-6/12 lg:sticky relative lg:top-128 top-0 lg:pr-5 pr-0">
                            {props.compodata.mainTitle &&
                                <h2 className="text-32 4xl:text-64   xl:text-48 md:text-32 leading-normal md:leading-snug text-textprimary uppercase   font-gilroy font-extrabold">{props.compodata.mainTitle}</h2>
                            }
                            {props.compodata.tags && 
                                <div className="flex flex-wrap gap-[16px] pt-32 xl:pt-48 max-w-[510px]">
                                    {props.compodata.tags.map((data, index)=>(
                                        <div className="tagbox uppercase text-textColorSecondary text-14 lg:text-16 py-[8px] px-[24px] border border-solid border-linecolor rounded-[50px]" key={index}>{data}</div>
                                    ))}
                                </div>
                            }
                        </div>
                        <div className="w-full lg:w-6/12  gap-y-4 lg:gap-y-32 flex flex-col lg:mt-0 mt-32" >
                            {props.compodata.bigtext &&
                                <h4 className="text-textprimary text-20 4xl:text-32   lg:text-28 font-medium">{props.compodata.bigtext}</h4>
                            }
                            {props.compodata.rightsubtitle &&
                                <h3 className="text-32 4xl:text-64  xl:text-48 lg:text-36 font-manrope font-extrabold text-textprimary pt-2 xl:pt-32">{props.compodata.rightsubtitle}</h3>
                            }
                            {props.compodata.paragraphs &&
                                <div className="pwrap flex flex-col gap-y-[24px]">
                                    {props.compodata.paragraphs.map((pdata, index)=>(
                                        <div key={index} className="ptag text-16 4xl:text-20 3xl:text-18 leading-[1.8] 3xl:leading-[1.8] text-textColorSecondary ">{pdata}</div>
                                    ))}
                                </div>
                            }
                            {props.compodata.stats &&
                                <div className="grid grid-cols-2 grid-flow-row flex-wrap gap-y-[32px] gap-x-[24px]  xl:gap-y-[64px] xl:gap-x-[40px] mt-32">
                                    {props.compodata.stats.map((statsd, index)=>(
                                        <div className="flex flex-col gap-y-[12px] lg:gap-y-[24px]" key={index}>
                                            <div className="numberitem text-32 4xl:text-64   xl:text-48 md:text-32   md:leading-snug font-extrabold leading-[normal]">{statsd.numabestat}</div>
                                            <div className="numberitem text-textColorSecondary text-16 4xl:text-20 3xl:text-18 leading-[1.8] 3xl:leading-[1.8]">{statsd.textstat}</div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftRightInfo;