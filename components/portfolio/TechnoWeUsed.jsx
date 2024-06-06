import Image from "next/image";

const TechnoWeUsed = (props) => {
    return (
        <div className="technoweused relative my-128">
            <div className="container">
                <div className="flex justify-between flex-row-reverse">
                    <div className="w-5/12 flex flex-col ">
                        {props?.technodata?.title &&
                            <h2 className="titleText ml-[-160px] mt-48"
                                dangerouslySetInnerHTML={props.technodata.title}
                            ></h2>
                        }
                        <div className="grid grid-cols-2 grid-flow-row gap-y-[64px] gap-x-[10px] mt-auto mb-128 pl-128">
                            {props?.technodata?.techdata.map((data, index) => (
                                <div className="flex flex-col gap-y-[24px]" key={index}>
                                    <h6 className="font-semibold text-textprimary uppercase">{data.title}</h6>
                                    <div className="text-textColorSecondary">{data.tech}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-5/12">
                        {props?.technodata?.image1 &&
                            <div className="">
                                <div className="relative before:content-[''] before:block before:pt-[100%]">
                                    <Image src={props.technodata.image1} alt="nothing" width={'620'} height={'600'} className="absolute left-0 top-0 w-full h-full object-cover" />
                                </div>
                            </div>
                        }
                        {props?.technodata?.image2 &&
                            <div className="w-full">
                                <div className="relative before:content-[''] before:block before:pt-[74.19%] mr-[-260px] ml-[260px] mt-[-262px]">
                                    <Image src={props.technodata.image2} alt="nothing" width={'620'} height={'460'} className="absolute left-0 top-0 w-full h-full object-cover" />
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechnoWeUsed;