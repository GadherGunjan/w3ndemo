import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "../SplitText";
import ResponsiveDesignCard from "./ResponsiveDesignCard";
import React from "react";
import WebSiteViewBtn from "./WebSiteViewBtn";

const ResponsiveDesign = ({responsivedata}) => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    const caseAnimation = () => {
        const container = document.querySelector('.case-scroll-section-inner');
        const sections = container.querySelector('.case-scroll-section');
        const sectionsAll = container.querySelectorAll('.case-scroll-section');
        const sectionOuter = document.querySelector('.case-scroll-section-inner-outer');
        const translateOffset = (sections.offsetWidth * (sectionsAll.length + 5 )) - sectionOuter.offsetWidth;
        
        container.style.width = `${sections.offsetWidth * sectionsAll.length}px`;
        
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: -translateOffset,
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: `${translateOffset}px top`,
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }
    useEffect(() => {
        const fetchData2 = () => {
            caseAnimation()
        };
        const delayTime = 2000;
        setTimeout(fetchData2, delayTime);
    }, []);

    return (
        <div className="case-scroll-section-main">
            <div className="case-scroll-section-outer case_study_section overflow-hidden xl:block hidden">
                <div ref={triggerRef} className="case-triggerelement flex h-[100vh] items-center justify-center">
                    <div className="case-triggerelement-inside py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                        <div className="container">
                            <div className="case-scroll-section-inner-outer mx-auto relative ">
                                {/* w-[calc(100%+96px)] mx-[calc(-96px/2)] */}
                                <div ref={sectionRef} className="case-scroll-section-inner flex flex-row relative w-[calc(100%+96px)] mx-[calc(-96px/2)]">
                                        <div className="case-scroll-section px-[calc(96px/2)] 4xl:px-[calc(96px/2)]">
                                            <div className="relative flex flex-col h-full justify-center">
                                                {responsivedata.title &&
                                                <h1 className="pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24 uppercase text-textColor text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-gilroy font-extrabold    has-block-span">
                                                    <SplitText copy={responsivedata.title} role="heading" />
                                                </h1>
                                                }
                                                {responsivedata.text &&
                                                <div className="btnbox    flex">
                                                    <p className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-[#ABABAB] font-manrope font-normal">{responsivedata.text}</p>
                                                </div>
                                                }
                                            
                                            </div>
                                        </div>
                                        {responsivedata?.imagelist.map((data,index)=>(
                                            <React.Fragment key={index}>
                                            {data.image &&
                                                <div className="case-scroll-section px-[calc(20px/2)] xl:px-[calc(48px/2)] 4xl:px-[calc(96px/2)] 3xl:px-[calc(30px/2)]">
                                                    <ResponsiveDesignCard imagedata={data.image} />
                                                
                                                </div>
                                            }
                                            </React.Fragment>
                                        ))}
                                        {responsivedata?.websitelink &&
                                        <div className="case-scroll-section px-[calc(20px/2)] xl:px-[calc(48px/2)] 4xl:px-[calc(96px/2)] 3xl:px-[calc(30px/2)]">
                                                <WebSiteViewBtn weburlData={responsivedata?.websitelink} />
                                        </div>
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="case-scroll-section-outer case_study_section overflow-hidden xl:hidden block">
                <div className="case-triggerelement   ">
                    <div className="case-triggerelement-inside py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                        <div className="container">
                        <div className="case-scroll-section ">
                                            <div className="relative flex flex-col h-full justify-center md:pb-32 pb-24">
                                            {responsivedata.title &&
                                                <h1 className="pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24 uppercase text-textColor text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-gilroy font-extrabold    has-block-span">
                                                    <SplitText copy={responsivedata.title} role="heading" />
                                                </h1>
                                            }
                                            {responsivedata.text &&
                                                <div className="btnbox    flex">
                                                    <p className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-[#ABABAB] font-manrope font-normal">{responsivedata.text}</p>
                                                </div>
                                            }
                                            </div>
                                        </div>
                            <div className="responsive-screen-mobile ">
                                {/* w-[calc(100%+96px)] mx-[calc(-96px/2)] */}
                                <ul className="flex">
                                {responsivedata?.imagelist.map((data,index)=>(
                                    <React.Fragment key={index}>
                                    {data.image &&
                                        <li>
                                            <ResponsiveDesignCard imagedata={data.image} />
                                        </li>
                                        }
                                        </React.Fragment>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResponsiveDesign;