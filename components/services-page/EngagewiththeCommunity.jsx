
import SplitText from "../SplitText";

const EngagewiththeCommunity = (props) => {
    const data = props.engagewiththecommunitydata;
    return (
        <>
        {(data?.title != '' || data?.communityData?.length > 0) &&
            <div className="py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28 relative">
                <div className="container">
                    {data.title &&
                        <div className="titlesub">
                            <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                                <SplitText copy={data.title} />
                            </h1>
                        </div>
                    }
                    <div className="contentbox w-full justify-center flex pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28">
                        <div className="w-full xl:w-11/12 2xl:w-10/12  flex flex-col gap-y-16 4xl:gap-y-48 2xl:gap-y-32 xl:gap-y-28 md:gap-y-24">
                            {data?.communityData.map((el, idx)=>(
                                <div className="text-15 4xl:text-24 3xl:text-20 md:text-18 text-textColorSecondary 4xl:leading-175
                                    relative before:content-[''] 4xl:before:top-[16px] 3xl:before:top-[12px]  md:before:top-[12px] before:top-[10px] lg:before:left-[16px] before:left-[10px] before:absolute 2xl:before:w-[10px] 2xl:before:h-[10px] md:before:w-[8px]  before:h-[7px]  before:w-[7px] md:before:h-[8px] before:rounded-full before:bg-textprimary before:block lg:pl-[54px] pl-40
                                " key={idx}>
                                    <div className={`${el.title ? '': 'text-white'}`}>
                                        {el.title &&
                                            <strong className="text-white font-bold">{el.title}</strong>
                                        }
                                        {el.desciption}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default EngagewiththeCommunity;