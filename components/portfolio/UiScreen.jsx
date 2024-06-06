import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SplitText from "../SplitText";
import UiScreenCard from "../UiScreenCard";

const UiScreen = ({uiscreendata}) => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
        const caseAnimation = () => {
            const container = document.querySelector('.case-scroll-section-inner');
            const sections = container.querySelector('.case-scroll-section');
            const sectionsAll = container.querySelectorAll('.case-scroll-section');
            const sectionOuter = document.querySelector('.case-scroll-section-inner-outer');
            const translateOffset = (sectionsAll[1].offsetWidth * sectionsAll.length) - sectionOuter.offsetWidth;

            const translateOffsetEnd = (sectionsAll[1].offsetWidth * (sectionsAll.length - 0.2)) - sectionOuter.offsetWidth - sections.offsetWidth;
            
            container.style.width = `${sections.offsetWidth * sectionsAll.length}px`;
            
            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: -translateOffsetEnd,
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: `${translateOffsetEnd}px top`,
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
                                                {uiscreendata.title &&
                                                <h1 className="text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 text-textColor font-extrabold font-gilroy uppercase center-align has-block-span">
                                                    <SplitText copy={uiscreendata.title} role="heading" />
                                                </h1>
                                                }
                                                {uiscreendata.text &&
                                                <div className="btnbox  pt-16 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 flex">
                                                    <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  text-[#ABABAB] font-manrope font-normal">{uiscreendata.text}</p>
                                                </div>
                                                }
                                            
                                            </div>
                                        </div>
                                        {uiscreendata?.imagelist.map((data,index)=>(
                                            <div className="case-scroll-section px-[calc(20px/2)] xl:px-[calc(48px/2)] 4xl:px-[calc(96px/2)] 3xl:px-[calc(30px/2)]" key={index}>
                                                <UiScreenCard  dataimage={data.image} />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="case-section-new overflow-hidden xl:hidden block">
                <div  className="case-triggerelement-mobile flex  items-center justify-center">
                    <div className="case-triggerelement-inside w-full py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                        <div className="container">
                            <div className="case-scroll-section-inner-outer mx-auto relative  w-full">
                                {/* w-[calc(100%+96px)] mx-[calc(-96px/2)] */}
                                <div className="relative flex flex-col md:pb-32 pb-24 justify-center">
                                    {uiscreendata.title &&
                                        <h1 className="text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 text-textColor font-extrabold font-gilroy uppercase   has-block-span">
                                            <SplitText copy={uiscreendata.title} role="heading" />
                                        </h1>
                                    }
                                    {uiscreendata.text &&
                                    <div className="btnbox  pt-16 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 flex">
                                        <p className="text-14 4xl:text-20 3xl:text-18 md:text-16  text-[#ABABAB] font-manrope font-normal">{uiscreendata.text}</p>
                                    </div>
                                    }
                                </div>

                                <div className="case-scroll-mb-scroll  ">
                                    <ul className="case-scroll-mb-inner flex">
                                    {uiscreendata?.imagelist.map((data,index)=>(
                                        <li key={index}>
                                            <UiScreenCard dataimage={data.image} />
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UiScreen;