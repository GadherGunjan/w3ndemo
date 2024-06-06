
import Image from "next/image";
import first from '@/assets/images/first.jpg';
import second from '@/assets/images/second.jpg';
import third from '@/assets/images/third.jpg';


const ThreeImg = ({threeimgdata}) => {
    return (
        <>
           <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                <div className="container">
                    <div className="relative">
                        <div className="flex md:flex-row flex-col mb-16 4xl:mb-30 xl:mb-24 md:mb-18 gap-16 4xl:gap-30 xl:gap-24 md:gap-18 justify-between">
                            {threeimgdata.image1 &&
                                <div className="md:w-6/12 w-full">
                                    <Image src={threeimgdata.image1} alt="first" className="w-full h-auto" width={750} height={550}></Image>
                                </div>
                            }
                            {threeimgdata.image2 &&
                                <div className="md:w-6/12 w-full">
                                    <Image src={threeimgdata.image2} alt="second" className="w-full h-auto" width={750} height={550}></Image>
                                </div>
                            }
                        </div>
                        {threeimgdata.image3 &&
                            <div className="w-full">
                                <Image src={threeimgdata.image3} alt="third" className="w-full h-auto" width={1530} height={900}></Image>
                            </div>
                        }
                    </div>
                </div>
           </div> 
        </>
    )
}

export default ThreeImg;