import Image from "next/image"
import Link from "next/link"

import SquirrelImg from '../../assets/images/squirrel.svg';
import DotBgImg from '../../assets/images/dot-bg--banner.svg';
import SplitText from "../SplitText";

const Banner = ( {bannerData} ) => {

    const videoURL = {
        url : "https://w3n.xyz/projects/w3nuts_v2/wp-content/uploads/2024/04/w3nuts-banner-animation.mp4"
    }

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full img-proparty z-0">
                <Image src={DotBgImg} alt="DotBgImg" /> 
            </div>
            <div className="container z-10 relative">
                <div className="flex lg:flex-row flex-col-reverse h-auto lg:h-screen  min-h-[608px] items-center justify-between pt-[84px]  xl:pt-96 md:pt-[134px] pb-32 ">
                    <div className="w-full lg:w-7/12 pt-5 md:pt-32 lg:pt-0">

                        <span className="font-manrope text-14 4xl:text-16 3xl:text-15 leading-175 text-textColorSecondary font-semibold mb-14 4xl:mb-24 xl:mb-20 md:mb-16 ">{bannerData.bannerSubheading}</span>
                        {bannerData?.bannerHeading &&
                            <h1 className="text-44 4xl:text-128 3xl:text-106 2xl:text-96 xl:text-86 md:text-64 font-light font-gilroy md:pt-24 pt-16 z-10 relative">
                                <SplitText copy={bannerData?.bannerHeading} role="heading" />
                            </h1>
                        }
                        <h6 className="text-14 3xl:text-15 4xl:text-16 leading-175 text-textColorSecondary   pt-16 2xl:pt-32 xl:pt-28 md:pt-20" dangerouslySetInnerHTML={{__html:bannerData.bannerDescription}}></h6>
                    </div>
                    <div className="w-[40vw] absolute top-0 right-0">
                        {videoURL?.url &&
                        <div className="w-[40vw] 2xl:ml-auto h-[100vh] flex items-center justify-center lg:text-left md:text-center relative">
                            {/* <Image className="4xl:max-h-none 3xl:max-h-[498px] 2xl:max-h-[436px] xl:max-h-[376px] max-w-[80%] md:max-w-full"  src={bannerData.bannerImage.sourceUrl} width={610} height={560} alt="UI/UX, WEBDESIGN, WEB DEVELOPMENT, ECOMMERCE" /> */}
                            <video autoPlay muted loop preload className="w-[100vw] h-[100vh]">
                                <source src={videoURL.url} type="video/mp4" />
                            </video>
                            <div className="overlay absolute top-0 left-0 pointer-events-none w-full h-full bg-bgColor mix-blend-lighten"></div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;