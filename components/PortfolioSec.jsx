import React, { useEffect , useState, useRef , useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import PortfolioCard from "./layout/PortfolioCard";
import ThemeButton from "./layout/ThemeButton";
import PortfolioImage1 from "@/assets/images/portfolio-image-1.jpg"
import SplitText from "./SplitText";

const PortfolioSec = (props) => {
    
    const portfolioData = props.portfolioData

    const data = [];

    const panelItems = useRef([])
    const currentPanel = useRef(null)
    const scrollBoxRef = useRef(null)
    const [currentPanelIDX, setCurrentPanelIDX] = useState(null)
    const [triggerBounds, setTriggerBounds] = useState({start: 0, end: 0})

    const addToRefs = el => {
        if (el && !panelItems.current.includes(el)) {
            panelItems.current.push(el)
        }
    }

    const addAnimation = useCallback(() => {
        currentPanel.current = panelItems.current[0]
        gsap.set(panelItems.current[0], { autoAlpha: 1 })

    }, []);



    useEffect(() => {

        const fetchData = () => {
            addAnimation();
        };
        const delayTime = 1000;
        setTimeout(fetchData, delayTime);

    }, [addAnimation]);

    if( portfolioData?.portfolios?.length > 0 ){
        portfolioData?.portfolios?.map((item, i) => {
            const dataObj = {
                value: `0${i + 1}`,
                link: item.link,
                imageURL: item.imageURL.sourceUrl,
                title: item.title,
                description: item.description,
            }
            data.push(dataObj)
        });
    }

    const sectionRef = useRef(null);
    const portDtlTxtRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    const [activeSection, setActiveSection] = useState(1);
    const triggerPortTextRef = useRef(null);
    const [ afterActiveClass, setAfterActiveClass ] = useState(1);
    const [ prevActiveClass, setprevActiveClass ] = useState(0);

    useEffect(() => {
        const scrollSection = document.querySelector('.scroll-section-inner .scroll-section');
        const scrollSectionAll = document.querySelectorAll('.scroll-section-inner .scroll-section a');
        const secWidth = scrollSection.offsetWidth;

        // let previousActiveSection = 0;
        
        let thresHold = 0.5;
        let rethresHold = 0.5;

        
        const handleScroll = () => {
            
          if (triggerBounds.start !== 0 && window.scrollY > triggerBounds.start) {
            const diff = window.scrollY - triggerBounds.start;
    
            if (diff >= secWidth * (activeSection - 1) + secWidth * thresHold) {
              setActiveSection((prevSection) => (prevSection === 1 ? prevSection + 1 : Math.floor((diff - secWidth * thresHold) / secWidth) + 2));

            } else {
              setActiveSection((prevSection) => (diff <= secWidth * rethresHold ? 1 : Math.floor((diff - secWidth * rethresHold) / secWidth) + 2));
            }

            if(afterActiveClass === (activeSection.length - 1 )){
                
            }


            if (prevActiveClass !== activeSection && activeSection <= data.length) {
                
                const aport = document.querySelector(`#portfolio_desc-${activeSection}`);
                if (aport) {
                    aport.classList.remove('level-0');
                    aport.classList.remove('level-2');
                    aport.classList.add('level-1');
                }
                
                const previousPort = document.querySelector(`#portfolio_desc-${prevActiveClass}`);
                if (previousPort) {
                    if( activeSection > prevActiveClass ) {
                        previousPort.classList.add('level-2');
                        previousPort.classList.remove('level-1');
                        previousPort.classList.remove('level-0');
                    } else {
                        previousPort.classList.add('level-0');
                        previousPort.classList.remove('level-1');
                        previousPort.classList.remove('level-2');
                    }
                }

                setprevActiveClass(activeSection);
            }
          }

        };

    
        document.addEventListener('scroll', handleScroll);
    
        return () => {
          document.removeEventListener('scroll', handleScroll);
        };
      }, [activeSection, triggerBounds]);


    
    const addAnimation1 = () => {
        
        const container = document.querySelector('.scroll-section-inner');
        const sections = container.querySelector('.scroll-section');
        const sectionsAll = container.querySelectorAll('.scroll-section');
        const containerDtl = document.querySelector('.portfolio_detail_wraper');
        const portfolioDetailText = containerDtl.querySelector('.portfolio_detail_wrap');
        const containerDtlMain = document.querySelector('.portfolio_detail');
    
        
        
        const portfolioDetailTextAll = containerDtl.querySelectorAll('.portfolio_detail_wrap');
        
        containerDtlMain.style.height = `${portfolioDetailText.offsetHeight * portfolioDetailTextAll.length}px`;
        container.style.width = `${sections.offsetWidth * sectionsAll.length}px`;
        
            
            // gsap.fromTo(portDtlTxtRef.current,
            //     {
            //         translateY: 0,
            //     },
            //     {
            //         // -portfolioDetailText.offsetHeight * (portfolioDetailTextAll.length - 1)
            //         translateY: -portfolioDetailText.offsetHeight * (portfolioDetailTextAll.length - 1),
            //         ease: "none",
            //         duration: 1,
            //         scrollTrigger: {
            //             trigger: triggerRef.current,
            //             start: "top top",
            //             end: () => {
            //                 const totalHeight = sections.offsetWidth * (sectionsAll.length - 1);
            //                 return `${totalHeight}px top`;
            //             },
            //             //end: `${sections.offsetWidth * (sectionsAll.length - 1)}px top`,
            //             scrub: 0.6,
            //             markers: true,
            //         },
            //     }
            // )

            const pin = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: -sections.offsetWidth * (sectionsAll.length - 1),
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: `${sections.offsetWidth * (sectionsAll.length - 1)}px top`,
                        scrub: 0.6,
                        pin: true,
                        // markers: true,
                        onToggle: self => { 
                            if (triggerBounds.start == 0) {
                                setTriggerBounds({
                                    start: self.start,
                                    end: self.end,
                                })
                            }
                        },
                    },
                }
            );
        return () => {
            pin.kill();
        };
    }

    
    useEffect(() => {
        if(props.portfolioData){
            const fetchData1 = () => {
                addAnimation1()
            };
            const delayTime = 2000;
            setTimeout(fetchData1, delayTime);
        }
    }, []);

   
    return (
        <div className="relative">
            <div className="scroll-section-outer portfolio-section md:block hidden" ref={triggerRef}>
             <div className="triggerelement ">
                <div className="triggerelement_inside pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32">
                    <div className="container">
                        <div className="w-full">
                            <h1 className="titleText text-center flex justify-center"  
                            //dangerouslySetInnerHTML={{__html:portfolioData.portfolioTitle}}
                            >
                            <SplitText copy={portfolioData.portfolioTitle} role="heading" />
                            </h1>
                        </div>
                        <div className="trigger_inner2"  >
                            <div className="pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28">
                                {/* 
                                    2xl:max-w-[calc(800px+96px)] 
                                    xl:max-w-[calc(800px+40px)]
                                */}
                                <div className="scroll-section-inner-outer max-w-[calc(360px+30px)] lg:max-w-[calc(700px+40px)] md:max-w-[calc(570px+40px)] mx-auto relative">
                                    <div ref={sectionRef} className="scroll-section-inner">
                                        {data.map(({ value, title, description, link, imageURL , index },indxr) => (
                                            <div className={`scroll-section scr-sec-${value} ${indxr === 0 ? `ml-[195px] lg:ml-[370px] md:ml-[305px]` : '' } `} key={indxr} ref={scrollBoxRef}>
                                                <PortfolioCard link={link} imageURL={imageURL} title={title} description={description}  />
                                            </div>
                                            ))}
                                        </div>
                                        
                                    </div>
                                    <div className="portfolio_detail_wraper overflow-hidden h-[140px] mt-12">
                                        <div className="portfolio_detail h-full text-center overflow-hidden relative mt-6 flex justify-center" ref={portDtlTxtRef}>
                                            {data.map(({title, description, index}, idx) => (
                                            <div key={index} id={`portfolio_desc-${idx+1}`} className={`portfolio_detail_wrap ${idx == 0 ? 'level-1' : 'level-0' }  text-center w-full max-w-[700px] mx-auto`}>
                                                <h2 className="text-24 3xl:text-48 2xl:text-48 xl:text-32 font-extrabold text-white">{title}</h2>
                                                <p className="3xl:pt-2 text-16 3xl:text-20 2xl:text-20 text-textColorSecondary">{description}</p>
                                            </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bottom part pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28 pb-24 4xl:pb-128 3xl:pb-96 2xl:pb-64 xl:pb-48 lg:pb-32 md:pb-32">
                        <div className="container flex items-center justify-between">
                            {portfolioData.bottomTitle &&
                                <h2 className="font-manrope font-extrabold 4xl:text-48 3xl:text-40 xl:text-32 leading-[normal] text-textprimary">{portfolioData.bottomTitle}</h2>
                            }
                            {portfolioData.allbutton &&
                                <div className="rightbtn">
                                    <ThemeButton link={portfolioData.allbutton.url || ''} buttontext={portfolioData.allbutton.title || ''} className="btnoutline" />
                                </div>
                            }
                        </div>
                    </div>
                </div>
                </div>
                <div className="scroll-section-outer portfolio-section md:hidden block"  >
                    <div className="triggerelement ">
                        <div className="triggerelement_inside pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32">
                            <div className="container">
                                <div className="w-full">
                                    <h1 className="titleText text-center flex justify-center"  
                                    //dangerouslySetInnerHTML={{__html:portfolioData.portfolioTitle}}
                                    >
                                    <SplitText copy={portfolioData.portfolioTitle} role="heading" />
                                    </h1>
                                </div>
                                <div className="trigger_inner2"  >
                                    <div className="md:pt-48 pt-20 2xl:pt-96">
                                        <div className="scroll-section-inner-outer relative">
                                            <div  className="scroll-section-inner-2 flex">
                                                {data.map(({ value, title, description, link, imageURL },index) => (
                                                    <div className="scroll-section min-w-[270px]" key={index}>
                                                        <PortfolioCard link={link} imageURL={imageURL} title={title} description={description}  />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bottom part pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28 pb-24 4xl:pb-128 3xl:pb-96 2xl:pb-64 xl:pb-48 lg:pb-32 md:pb-32">
                        <div className="container flex items-start  flex-col  justify-between">
                            {portfolioData.bottomTitle &&
                                <h2 className="font-manrope font-extrabold text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24 leading-[normal] text-textprimary">{portfolioData.bottomTitle}</h2>
                            }
                            {portfolioData.allbutton &&
                                <div className="rightbtn mt-16">
                                    <ThemeButton link={portfolioData.allbutton.url || ''} buttontext={portfolioData.allbutton.title || ''} className="btnoutline" />
                                </div>
                            }
                        </div>
                    </div>
                </div>

         
        </div>
    )
}

export default PortfolioSec;