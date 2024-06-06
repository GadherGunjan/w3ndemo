import Image from "next/image";
import motionimg from '@/assets/images/port-img-3.jpg';

const ProductMotion = ({productsmotionData}) => {
    return (
        <>
            <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32 relative">
                {/* <div className="w-full h-full overflow-hidden">
                    <Image src={motionimg} alt="motionimg" width={1920} height={980}></Image>
                </div> */}
                <div>
                    <div className="container">
                        <div className="relative">
                            <div className="lg:w-10/12 w-full">
                                {productsmotionData.title &&
                                    <h2 className="font-gilroy text-textprimary text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-extrabold uppercase pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24">{productsmotionData.title}</h2>
                                }
                            </div>
                            <div className="lg:w-9/12 w-full   ml-auto">
                                {productsmotionData.text &&
                                    <p className="text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16    font-manrop ">{productsmotionData.text}</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductMotion;