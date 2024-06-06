
const AdaptableAssociations = (props) => {
    if(props?.adaptableassociationsdata?.title?.__html != '' || props?.adaptableassociationsdata?.subtitle != ''){
    return (
        <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32  relative">
            <div className="container">
                {props?.adaptableassociationsdata?.title && 
                    <h1 className="titleText pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28" 
                        dangerouslySetInnerHTML={props.adaptableassociationsdata.title}
                    ></h1>
                }
                {(props?.adaptableassociationsdata?.subtitle || props?.adaptableassociationsdata?.description) &&
                    <div className=" flex md:flex-row flex-col   items-start">
                        {props?.adaptableassociationsdata?.subtitle && 
                            <div className="w-full md:w-5/12">
                                <h2 className="font-manrope font-normal text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24 md:mb-0 mb-24  lg:pr-30 text-textprimary">
                                    {props.adaptableassociationsdata.subtitle}
                                </h2>
                            </div>
                        }
                        {props?.adaptableassociationsdata?.description && 
                            <div className="w-full md:w-7/12">
                                <div className="ptag text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary ">
                                    {props.adaptableassociationsdata.description}
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    )
    }
}

export default AdaptableAssociations;