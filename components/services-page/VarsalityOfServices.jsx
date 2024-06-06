import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SplitText from "../SplitText";
import RightArrowiconLong from "@/assets/images/svgs/RightArrowiconLong";
import LeftArrowiconLong from "@/assets/images/svgs/LeftArrowiconLong";

import icon1 from '@/assets/images/shopping-icon.svg'
import icon2 from '@/assets/images/health-icon.svg'
import icon3 from '@/assets/images/eduction-icon.svg'
import icon4 from '@/assets/images/moneybag-icon.svg'
import icon5 from '@/assets/images/entertainment-icon.svg'
import icon6 from '@/assets/images/real-estate-icon.svg'

const VarsalityOfServices = (props) => {
    const data = props?.versatilityacrossdata;

    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    let settings = {
        dots: false,
        arrows : false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow:1,
                slidesToScroll: 1,
               
              
              }
            },
            
            
          ]
    };

    return (
        <>
        {(data?.title != '' || data?.viracrossdata?.length > 0) &&
        <div className="py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28 relative overflow-hidden">
        <div className="container">
            <div className="mb-20 4xl:mb-96 2xl:mb-64 xl:mb-36 md:mb-28">
                {data.title &&
                <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                    <span>{data.title}</span>
                    <SplitText copy={data.subtitle} role="heading" />
                </h1>
                }
            </div>
            <div className="w-full lg:w-10/12">
                <Slider
                    ref={slider => {
                        sliderRef = slider;
                    }}
                    {...settings}
                    className="flexslickslide"
                >
                    {data?.viracrossdata.map((el, idx)=>(
                        <div className="p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24 hoverbox bg-bgSecondary 4xl:rounded-[40px] xl:rounded-[30px] lg:rounded-[26px] md:rounded-[20px] rounded-[20px] h-full" key={idx}>
                            {el.label &&
                            <h3 className="text-textprimary font-bold flex items-center gap-[32px]
                                text-16 4xl:text-32 3xl:text-26 xl:text-24 md:text-20
                                mb-16 2xl:mb-32 xl:mb-28 md:mb-20
                            "> 
                                <div className=" w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[160px] xl:h-[160px] rounded-full iconhover bg-[#262626] flex items-center justify-center">
                                    <Image src={el.icon} className="w-[50px] h-[50px] xl:w-[96px] xl:h-[96px]" width={96} height={96} alt="icon" />    
                                </div> 
                            {el.label}</h3> 
                            }
                            {el.desc &&
                            <div className="text-textColorSecondary h-auto text-14 4xl:text-20 3xl:text-18 md:text-16 ">
                               {el.desc}
                            </div>
                            }
                        </div>
                    ))}

                </Slider>
            </div>
            <div className="w-full flex lg:justify-end justify-center slicknav mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                <div className="flex lg:gap-x-24 gap-x-14  ">
                    <button className=" w-32 h-32  4xl:w-60 4xl:h-60 3xl:w-50 3xl:h-50  md:w-40  md:h-40 flex justify-center items-center bg-bgSecondary rounded-full" onClick={previous}>
                        <LeftArrowiconLong />
                    </button>
                    <button className="w-32 h-32  4xl:w-60 4xl:h-60 3xl:w-50 3xl:h-50  md:w-40  md:h-40 flex justify-center items-center bg-bgSecondary rounded-full" onClick={next}>
                        <RightArrowiconLong />
                    </button>
                </div>
            </div>
        </div>
    </div>
    }
    </>
    )
}

export default VarsalityOfServices;