import SplitText from "../SplitText";
import ThemeButton from "../layout/ThemeButton";
import LatestInsightBox from "./LatestInsightBox";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"; 

const LatestInsight = (props) => {
    const data = props?.insightsdata

    gsap.registerPlugin(ScrollTrigger);

    const triggerRef = useRef(null)
    const animaRef = useRef(null)

    useEffect(()=> {
        const animationHandler = () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 50%",
                    end: "bottom 30%",
                    scrub: 0.5,
                }
            })
            tl.fromTo(animaRef.current, {
                translateY: 0,
            },{
                translateY: -200,
            })
        }
        
        const fetchData = () => {
            animationHandler();
        };
        const delayTime = 1000;
        setTimeout(fetchData, delayTime);

    },[])

    const middleIndex = Math.floor(data?.insightlist?.length / 2);
    const firstPart = data?.insightlist.slice(0, middleIndex);
    const secondPart = data?.insightlist.slice(middleIndex);

    return (
        <>
        {(data?.insighttitle != '' || data?.insightlist?.length > 0) &&
        <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32  relative">
            <div className="container">
                <div className="titlesub lg:pb-[87px] pb-[40px]">
                    {data?.insighttitle &&
                    <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                        <SplitText copy={data?.insighttitle} />
                    </h1>
                    }
                </div>
                
                {(data?.insightlist?.length > 0) &&
                <div className="max-w-[1336px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 4xl:gap-96 xl:gap-24 md:gap-18" ref={triggerRef}>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 4xl:gap-96 xl:gap-24 md:gap-18">
                    
                    {firstPart.map((el, idx)=>(
                        <div className="w-full p-16" key={idx}>
                            <LatestInsightBox latestData={el} />
                        </div>
                    ))}
                                            
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-16 4xl:gap-96 xl:gap-24 md:gap-18" ref={animaRef}>
                    {secondPart.map((el, idx)=>(
                        <div className="w-full p-16" key={idx}>
                            <LatestInsightBox latestData={el} />
                        </div>
                    ))}
                                            
                    </div>

                    {data?.insightbutton?.title &&
                        <div className="flex justify-center mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36   md:mt-28 w-full">
                            <ThemeButton link={data?.insightbutton?.url} buttontext={data?.insightbutton?.title} className="btnoutline" />
                        </div>
                    }
                </div>
                }

            </div>
        </div>
        }
    </>
    )
}

export default LatestInsight;