import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


import ThemeButton from "./layout/ThemeButton";
import CaseStudyCard from "./layout/CaseStudyCard";
import PortfolioImage1 from "@/assets/images/portfolio-image-1.jpg"
import SplitText from "./SplitText";


const CaseStudySec = ( {caseStudiesData = []} ) => {

    const caseData = [];

    if( caseStudiesData?.caseStudies?.length > 0 ){
        caseStudiesData?.caseStudies?.map((item, i) => {

            const dataObj = {
                value:  `0${i + 1}`,
                link: item.uri,
                // imageURL: PortfolioImage1,
                imageURL: item.featuredImage.node.sourceUrl,
                title: item.title,
                description: item.content,
            }
            caseData.push(dataObj)
        });
    }

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

  
    const caseAnimation = () => {
        const container = document.querySelector('.case-scroll-section-inner');
        const sections = container.querySelector('.case-scroll-section');
        const sectionsAll = container.querySelectorAll('.case-scroll-section');
        const sectionOuter = document.querySelector('.case-scroll-section-inner-outer');
        const translateOffset = (sections.offsetWidth * sectionsAll.length) - sectionOuter.offsetWidth;
        
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
        if( caseStudiesData?.caseStudies?.length > 0 ){
            const fetchData2 = () => {
                caseAnimation()
            };
            const delayTime = 2000;
            setTimeout(fetchData2, delayTime);
        }
    }, [caseStudiesData]);
    
  

    return (
        <>
        {(caseStudiesData?.caseStudiesHeading != '' || caseStudiesData?.caseStudies?.length > 0) &&
            <div className="case-scroll-section-main">
                <div className="case-scroll-section-outer case_study_section overflow-hidden lg:block hidden">
                    <div ref={triggerRef} className="case-triggerelement flex h-[100vh] items-center justify-center">
                        <div className="case-triggerelement-inside pt-64 pb-64">
                            <div className="container">
                                <div className="case-scroll-section-inner-outer mx-auto relative ">
                                    <div ref={sectionRef} className="case-scroll-section-inner flex flex-row relative w-[calc(100%+96px)] mx-[calc(-96px/2)]">
                                        <div className="case-scroll-section px-[calc(96px/2)] 4xl:px-[calc(96px/2)]">
                                            <div className="relative flex flex-col h-full justify-center">
                                            {caseStudiesData?.caseStudiesHeading &&
                                                <h1 className="titleText center-align has-block-span">
                                                    <SplitText copy={caseStudiesData.caseStudiesHeading} role="heading" />
                                                </h1>
                                            }
                                            {caseStudiesData?.caseStudiesButtonInfo &&
                                                <div className="btnbox  mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24 flex">
                                                    <ThemeButton link={caseStudiesData?.caseStudiesButtonInfo?.url || ''} buttontext={caseStudiesData?.caseStudiesButtonInfo?.title || ''} className="btnoutline" />
                                                </div>
                                            }
                                            </div>
                                        </div>
                                        {caseData?.map(({ value, title, description, link, imageURL }) => (
                                            <div className="case-scroll-section px-[calc(20px/2)] xl:px-[calc(48px/2)] 4xl:px-[calc(96px/2)] 3xl:px-[calc(30px/2)]" key={value}>
                                                <CaseStudyCard link={link} imageURL={imageURL} title={title} description={description}  />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-case-study lg:hidden  block md:py-32 py-[24px]">
                    <div className="container">
                        <div className="relative flex md:justify-between justify-center items-center md:mb-48 mb-32       ">
                            {caseStudiesData?.caseStudiesHeading &&
                                <h1 className="titleText center-align  has-block-span">
                                    <SplitText copy={caseStudiesData.caseStudiesHeading} role="heading" />
                                </h1>
                            }
                            {caseStudiesData?.caseStudiesButtonInfo &&
                                <div className="btnbox  hidden md:flex">
                                    <ThemeButton link={caseStudiesData?.caseStudiesButtonInfo?.url || ''} buttontext={caseStudiesData?.caseStudiesButtonInfo?.title || ''} className="btnoutline" />
                                </div>
                            }
                        </div> 
                    </div>
                    <div className="case-study-mobile-slider">
                        <div className="case-study-mobile-inner flex">
                            {caseData?.map(({ value, title, description, link, imageURL }) => (
                                <div className="case-scroll-section md:min-w-[456px]  min-w-[270px]" key={value}>
                                    <CaseStudyCard link={link} imageURL={imageURL} title={title} description={description}  />
                                </div>
                            ))} 
                        </div>  
                        {caseStudiesData?.caseStudiesButtonInfo &&
                            <div className="btnbox  flex md:hidden justify-center mt-20">
                                <ThemeButton link={caseStudiesData?.caseStudiesButtonInfo?.url || ''} buttontext={caseStudiesData?.caseStudiesButtonInfo?.title || ''} className="btnoutline" />
                            </div>
                        } 
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default CaseStudySec;