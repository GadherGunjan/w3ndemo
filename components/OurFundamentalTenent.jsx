import CheckBoldIcon from "@/assets/images/svgs/CheckBoldIcon";

const OurFundamentalTenent = ({Ourfundamentaldata}) => {
    if(Ourfundamentaldata?.title != '' || Ourfundamentaldata?.subtitle != '' || Ourfundamentaldata?.FundamentalData?.length > 0){
    return (
        <div className="ourfundamentaltenent_section relative  py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 ">
            <div className="container">
                <div className= " flex lg:flex-row flex-col gap-x-30">
                    <div className=" w-full lg:w-6/12">
                        <div className="titleleft lg:sticky relative top-0  4xl:top-164 2xl:top-128 lg:top-106 lg:pb-0 pb-24">
                            {Ourfundamentaldata?.title &&
                                <h1 className="titleText   pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24" dangerouslySetInnerHTML={Ourfundamentaldata.title}></h1>
                            }
                            {Ourfundamentaldata?.subtitle &&
                                <div className="description_left text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16 " dangerouslySetInnerHTML={Ourfundamentaldata.subtitle}></div>
                            }
                        </div>
                    </div>
                    
                    {Ourfundamentaldata?.FundamentalData &&
                        <div className="w-full lg:w-6/12   
                        

                            [&>*:nth-child(1n+2)]:mt-18 
                            4xl:[&>*:nth-child(1n+2)]:mt-64 
                            2xl:[&>*:nth-child(1n+2)]:mt-48 
                            xl:[&>*:nth-child(1n+2)]:mt-32 
                            md:[&>*:nth-child(1n+2)]:mt-24

                            [&>*:nth-child(1n+2)]:pt-18 
                            4xl:[&>*:nth-child(1n+2)]:pt-64 
                            2xl:[&>*:nth-child(1n+2)]:pt-48 
                            xl:[&>*:nth-child(1n+2)]:pt-32 
                            md:[&>*:nth-child(1n+2)]:pt-24

                            [&>*:nth-child(1n+2)]:border-t
                            [&>*:nth-child(1n+2)]:border-solid
                            [&>*:nth-child(1n+2)]:border-linecolor
                        ">
                            {Ourfundamentaldata.FundamentalData.map((data)=>(
                                <div className="fundatabox" key={data.value}>
                                    <div className="numberbox text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30 font-semibold">
                                        {data.number}
                                    </div>
                                    <div className="titlebox flex items-center mt-14 4xl:mt-24 xl:mt-20 md:mt-16 ">
                                        <div className="iconbox w-20 4xl:w-32 3xl:w-28 2xl:w-24 xl:w-24 md:w-24    mr-12 xl:mr-16 md:mr-14">
                                            <CheckBoldIcon />
                                        </div>
                                        <h2 className="  text-textprimary text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-semibold">{data.title}</h2>
                                    </div>  
                                    <div className="descbox text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16  mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                                        {data.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default OurFundamentalTenent;