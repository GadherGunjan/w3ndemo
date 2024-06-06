import { Fragment } from "react"
import HiringCard from "./HiringCard";
import SplitText from "./SplitText";
import { useRef , useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const StaffAugmentation = ({ staffData }) => {

    gsap.registerPlugin(ScrollTrigger);

    const stikeyRef = useRef(null)

    useEffect(() => {
        const stickeyAnimationHandler = () => {
         ScrollTrigger.create({
            trigger: stikeyRef.current,
            start: "top 20%",
            end: "bottom 70%",
            pin: true,
            pinSpacing: false,
            markers: false,
        });
        }

        const fetchData1 = () => {
            // stickeyAnimationHandler()
        };
        const delayTime = 3000;
        setTimeout(fetchData1, delayTime);

    }, [stikeyRef.current]);

    if(staffData?.staffHeading != '' || staffData?.staffAugmentationInfo?.length > 0){
        return (
            <div className=" py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 relative" ref={stikeyRef}>
                <div className="container">
                    <div className="relative block staff-aug-out">
                        <div className="w-full  mb-20 4xl:mb-96 2xl:mb-64 xl:mb-36 md:mb-24   md:relative md:top-auto md:flex-none flex md:justify-start justify-center  sticky top-[80px]">
                            <h1 className="titleText center-align    flex md:items-start md:justify-start items-center justify-center md:max-w-none max-w-[260px] " 
                            // dangerouslySetInnerHTML={{ __html: staffData.staffHeading }}
                            >
                                <SplitText copy={staffData.staffHeading} role="heading" />
                            </h1>
                        </div>

                        {(staffData?.staffAugmentationInfo?.length > 0) &&
                            <div className="md:flex block staff-aug-section flex-wrap md:mx-[-15px] mx-0
                                md:[&>*:last-child]:pb-0     gap-y-16  4xl:gap-y-30 xl:gap-y-24   md:gap-y-18 ">
                                {staffData?.staffAugmentationInfo.map((item, i) => {
                                    {/* let topposition = i+1
                                    let number = 20;
                                    let cal1 = number/topposition;
                                    let finalTop = 200 + ((cal1*topposition)*topposition);
                                    let pos = `top-[${finalTop}px]` */}
                                    let pos = `positiontop-${i+1}`
                                    return (
                                        <div className={`4xl:px-15  xl:px-12 md:px-[9px] px-[0px] md:pt-0 pb-16   lg:w-1/2 w-full sticky top-[90px] ${pos}`} key={i}>
                                            <HiringCard
                                                heading={item.heading}
                                                hireInfo={item.hireInfo}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default StaffAugmentation;