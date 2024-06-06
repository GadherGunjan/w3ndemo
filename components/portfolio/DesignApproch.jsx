import Image from "next/image";
import lotz from '@/assets/images/lotz-img.jpg';


const DesignApproch = ({designapprochData}) => {
    return (
        <>
            <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32 relative overflow-hidden">
                {(designapprochData?.videoimage != null && designapprochData?.videourl != null) &&
                    <div className="w-full h-full relative">
                        {designapprochData?.videoimage &&
                            <Image src={designapprochData.videoimage} alt="lotz" width={1920} height={1089} className="w-full h-auto"></Image>
                        }
                        <div className="absolute left-0 top-0 bottom-0 right-0 flex items-center justify-center">
                            <div className="container">
                                {designapprochData?.videourl &&
                                    <div className="w-full h-[833px]">
                                        <video autoPlay loop preload="none" className="w-full h-full" >
                                            <source src={designapprochData.videourl} type="video/mp4" />
                                        </video>
                                    </div>
                                }
                            </div>        
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32">
                        <div className="xl:w-5/12 w-full">
                            {designapprochData.title &&
                                <h2 className="font-gilroy text-textprimary text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-extrabold uppercase pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24">{designapprochData.title}</h2>
                            }
                        </div>    
                        <div className="  xl:w-7/12 w-full ml-auto">
                            {designapprochData.text &&
                                <p className="text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16   font-manrop ">{designapprochData.text}</p>
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DesignApproch;