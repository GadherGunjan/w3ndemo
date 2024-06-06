const AdvantageDevelopment = ({advantagedata}) => {
    if(advantagedata?.advantageTitle != '' || advantagedata?.advantageTitle2 != '' || advantagedata?.contentRepeater != ''){
    return (
        <div className="advantage_development_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                {
                    ( advantagedata?.advantageTitle || advantagedata?.advantageTitle2 ) &&
                    <h1 className="titleText pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28">
                        {
                            advantagedata.advantageTitle &&
                            <span className="block">{advantagedata.advantageTitle}</span>
                        }
                        {   
                            advantagedata.advantageTitle2
                        }
                    </h1>
                }
                {
                    advantagedata?.contentRepeater?.length > 0 &&
                    <div className="advantage_development_row flex flex-wrap gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24">
                        {advantagedata.contentRepeater.map((data, index) => (
                            <div className="w-full lg:w-5/12 mr-auto border-l border-solid border-linecolor px-16 4xl:px-48 2xl:px-32 xl:px-28 md:px-24 py-1  " key={index}>
                                <div className="numberbox flex-none pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24 text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30  font-semibold">
                                    {`0${ index + 1}`}</div>
                                {
                                    data.title &&
                                    <h3 className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 text-textprimary font-semibold pb-14 4xl:pb-24 xl:pb-20 md:pb-16 ">{data.title}</h3>
                                }
                                {
                                    data.content &&
                                    <p className="text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16">{data.content}</p>
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

export default AdvantageDevelopment;