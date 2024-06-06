
import Image from "next/image";

const LifeatW3nuts = ({lifeatw3nutsdata}) => {

    const slicedData = lifeatw3nutsdata?.instaimage.slice(0, 6);

    return (
        <div className="lifeatw3nuts_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                <div className="flex lg:flex-row flex-col items-center">
                    {lifeatw3nutsdata?.title &&
                        <div className=" w-full lg:w-4/12 lg:pb-0 md:pb-24 pb-20">
                            <h1 className="titleText" 
                                dangerouslySetInnerHTML={lifeatw3nutsdata.title}
                            ></h1>
                        </div>
                    }
                    {lifeatw3nutsdata?.maindescription &&
                        <div className="w-full lg:pt-0  lg:w-8/12">
                            <div className="ptag text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16 "
                                dangerouslySetInnerHTML={lifeatw3nutsdata.maindescription}
                            ></div>
                        </div>
                    }
                </div>
            </div>
            <div className="md:grid grid-cols-10  mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
                {lifeatw3nutsdata?.instaimage[7]?.url &&
                    <div className="col-span-4">
                        <div className="imagebox relative overflow-hidden before:content-[''] before:block before:pt-[100%]">
                            <Image src={lifeatw3nutsdata?.instaimage[7]?.url || ''} width="880" height="580" alt="" className="object-cover absolute left-0 top-0 w-full h-full" />
                        </div>
                    </div>
                }
                {lifeatw3nutsdata?.instaimage &&
                    <div className="col-span-6 grid grid-cols-6">
                        {slicedData.map((item, index) => (
                            <div className="col-span-3 md:col-span-2" key={index}>
                                <div className="imagebox relative overflow-hidden before:content-[''] before:block before:pt-[100%]">
                                    <Image src={item?.url || ''} alt="" width="382" height="382" className="object-cover absolute left-0 top-0 w-full h-full" />
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default LifeatW3nuts;