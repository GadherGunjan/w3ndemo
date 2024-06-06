const NotableFeatures = (props) => {
    return (
        <div className="py-32 4xl:py-128 2xl:py-96 lg:py-64 md:py-48">
            <div className="container">
                <h1 className="titleText">
                    {
                        props.notabledata.notabletitle &&
                        <span className="block">{props.notabledata.notabletitle}</span>
                    }
                    {props.notabledata.notabletitle2}
                </h1>
                {   
                    props.notabledata?.notabletitlerep &&
                    <div className="grid grid-cols-12 gap-x-0 gap-y-4 4xl:gap-y-48 2xl:gap-y-6 pt-32 2xl:pt-96">
                        {props.notabledata.notabletitlerep.map((notabletext, index) => (
                            notabletext.content &&  
                            <div className="col-span-12 col-start-0 md:col-span-8 md:col-start-3" key={`K${index}`}>
                                    <div className="keyfeaturerow pl-4 xl:pl-48 text-16 lg:text-18 3xl:text-20 leading-[1.8] md:leading-[1.8]  xl:leading-[1.6] border-linecolor border-l-2 text-textColorSecondary transition-all duration-300  hover:border-themeRed hover:text-textprimary">
                                        {notabletext.content}
                                    </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default NotableFeatures;