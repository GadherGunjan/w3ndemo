

const PageTitleV2 = ({pageTitleData}) => {
    if(pageTitleData?.subtitle != '' || pageTitleData?.title != '' || pageTitleData?.description != ''){
    return (
        <div className="relative w-full pagetitle pt-128 md:pt-128 lg:pt-196 ">
            <div className="container"> 
                <div className="inside_page border-b border-solid border-linecolor">
                    <h1 className="font-gilroy uppercase font-extrabold md:pb-48 pb-32">
                        {pageTitleData?.subtitle &&
                            <strong className="text-32 4xl:text-96 lg:text-64 text-textprimary">{pageTitleData.subtitle}</strong>
                        }
                        {pageTitleData?.title &&
                            <span className="text-48 4xl:text-128 lg:text-96 block">{pageTitleData.title}</span>
                        }
                    </h1>
                    { pageTitleData?.description &&
                        <div className="flex pb-32 md:pb-48 lg:pb-64 2xl:pb-96 4xl:pb-128 3xl:pb-96 justify-end">
                            <div className="w-full md:w-8/12">
                                <div className="ptag text-16 md:text-18 3xl:text-20 text-textColorSecondary md:leading-[1.8] leading-[1.8]">
                                    {pageTitleData.description}
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
    }
}

export default PageTitleV2;