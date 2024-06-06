
const SectorDetail = ({sectorDetailData}) => {
    return (
        <>
        <div className="sector_detail w-full relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 " id="web-id" >
            <div className="container">
            {sectorDetailData.title &&
                <h2 className="font-gilroy font-extrabold text-textprimary text-32 4xl:text-96 3xl:text-80  2xl:text-72 md:text-64 mb-18 4xl:mb-64 2xl:mb-48 xl:mb-32 md:mb-24 leading-normal   uppercase">{sectorDetailData.title}</h2>
            }
                <div className="w-full xl:grid grid-cols-12 gap-6">
                    {sectorDetailData.leftText &&
                        <div className="col-span-12 lg:col-span-3 ">
                            <h4 className="text-14 4xl:text-20 3xl:text-18 md:text-16  text-textColorSecondary leading-[1.8]">{sectorDetailData.leftText}</h4>
                        </div>
                    }
                    <div className="col-span-12 lg:col-span-8 xl:pt-0 md:pt-20 pt-20  col-start-0 lg:col-start-5">
                        {sectorDetailData.subTitle &&
                            <h3 className="text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24 text-textprimary   pb-14 4xl:pb-24 xl:pb-20 md:pb-16 ">{sectorDetailData.subTitle}</h3>
                        }
                        {sectorDetailData.description &&
                            <p className=" text-14 4xl:text-20 3xl:text-18 md:text-16   text-textColorSecondary ">{sectorDetailData.description}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SectorDetail;