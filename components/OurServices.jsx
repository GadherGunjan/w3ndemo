import Link from "next/link";
import Image from "next/image";

import { useRef, useState, useEffect, useCallback } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import ThemeButton from "./layout/ThemeButton";
import W3Big from "@/assets/images/svgs/W3Big";
import SplitText from "./SplitText";
import triangleObject from "@/assets/images/triangle-object.svg";
import layout2shape2 from "@/assets/images/layout2shape2-image.svg";
import layout2shape2Big from "@/assets/images/layout2shape2-image-big.svg";
import laptopbottom from "@/assets/images/laptop-bottom.svg";


gsap.registerPlugin(ScrollTrigger)

const OurServices = ({ servicesData }) => {

    const serviceData = servicesData?.services;

    const mainWrapper = useRef(null)
    const mainWrapperPanel = useRef(null)
    const panelItems = useRef([])
    const currentPanel = useRef(null)
    const [currentPanelIDX, setCurrentPanelIDX] = useState(0)

    panelItems.current = [];

    const dots = useRef([]); 
    dots.current = [];

    const addToDotsRefs = el => {
        if (el && !dots.current.includes(el)) {
            dots.current.push(el);
        }
    };


    const addToRefs = el => {
        if (el && !panelItems.current.includes(el)) {
            panelItems.current.push(el)
        }
    }

    const showNextPanel = (newPanel) => {
        if (newPanel !== currentPanel.current) {
            gsap.to(currentPanel.current, { autoAlpha: 0, duration: 0.5});
            gsap.to(newPanel, { autoAlpha: 1, duration: 0.5});
          
            currentPanel.current = newPanel;
      
            dots.current.forEach((dot, i) => {
                const panelIndex = parseInt(dot.dataset.panelIndex); 
            });
        }
    };


    const addAnimation = useCallback(() => {
        currentPanel.current = panelItems.current[0]
        gsap.set(panelItems.current[0], { autoAlpha: 1 })

        ScrollTrigger.create({
            trigger: mainWrapperPanel.current,
            start: () => "top top",
            end: () => "+=" + (panelItems.current.length - 1) * innerHeight,
            pin: true,
            //markers: true
        });
        
        panelItems.current.forEach((panel, i) => {
            ScrollTrigger.create({
                trigger: mainWrapper.current,
                start: () => "top top-=" + (i - 0.5) * innerHeight,
                end: () => "+=" + innerHeight,
                toggleClass: { targets: panel, className: "active-panel" },
                // toggleClass: { targets: panel, className: i === panelItems.current.length - 1 ? "active-panel last-panel" : "active-panel" },
                onToggle: self => {
                    setCurrentPanelIDX(Number(self.vars.toggleClass.targets.id.split('-')[1]));
                    self.isActive && showNextPanel(panel);
                },
            })
        })

    }, []);

    useEffect(() => {

        const fetchData = () => {
            addAnimation();
        };
        const delayTime = 1000;
        setTimeout(fetchData, delayTime);
        
        const dotsEl = document.getElementById('dot-0')
        

    }, [addAnimation]);

    const dotsData = [0,1,2,3]
    if(servicesData?.serviceHeading != '' || servicesData?.services?.length > 0){
        return (
            <div className="main-wrapper-services">
                <div className="md:block hidden">
                    <div className="main-wrapper  service_sec   " ref={mainWrapper}>
                        <div className="main-wrapper service_sec lg:py-0 md:py-48 py-32" ref={mainWrapper}>
                            <div className="container z-10 relative">
                                <div className="flex items-center justify-between pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32">
                                    <h1 className="titleText"
                                        //dangerouslySetInnerHTML={{__html:servicesData.serviceHeading}}
                                        >
                                        <SplitText copy={servicesData.serviceHeading} role="heading" />
                                    </h1>
                                    <div className="md:block hidden">
                                        <ThemeButton link={servicesData.serviceButtonInfo.url} buttontext={servicesData.serviceButtonInfo.title} className="btnoutline" />
                                    </div>
                                </div>
                            </div>
                            <div className="main-wrapper__panel" ref={mainWrapperPanel}>
                                <div className="z-0 absolute left-0 top-0 w-full h-full flex lg:items-center items-end justify-center w3svg">
                                    <W3Big className="max-w-full max-h-full" />
                                </div>
                                <div className="absolute top-[45%] right-40 z-20">
                                    {dotsData && dotsData.map((dot, index) => (
                                        <div data-panel-index={index}
                                        key={index}
                                        className={`custom_slide_dots w-32 h-32 rounded-full flex items-center justify-center relative border-white ${currentPanelIDX === index ? 'active' : ''} `}
                                        id={`dot-${index}`}
                                        ref={addToDotsRefs}
                                        >
                                            <span className="w-[6px] h-[6px] rounded-full bg-tertiary"></span>
                                        </div>
                                    ))}
                                </div>
                                {serviceData.map((data, i)=>(
                                    //xl:pt-[120px] 2xl:pt-[160px] 4xl:pt-[300px]
                                    <div className={`main-wrapper__panel__item    ${i}`} key={`panel-${i}`} id={`panel-${i}`} ref={addToRefs}>
                                        <div className="container">
                                            <div className="relative flex items-center    h-[100vh]">
                                                <div className=" flex  lg:flex-row flex-col-reverse  lg:justify-between justify-center">
                                                    <div className="lg:w-1/2 w-full">
                                                        <h1 className="
                                                            4xl:text-64 
                                                            3xl:text-54 
                                                            2xl:text-48
                                                            xl:text-42
                                                            md:text-30 
                                                            text-18 
                                                            text-textColor 
                                                            font-bold 
                                                            mb-16 2xl:mb-32 xl:mb-28 md:mb-20
                                                            ">{data.title}</h1>
                                                        <p className="
                                                            4xl:text-20
                                                            3xl:text-18
                                                            md:text-16
                                                            text-14
                                                            text-textColorSecondary
                                                            ">{data.description}</p>
                                                        <div className="
                                                            grid grid-rows-2 grid-flow-col 
                                                            4xl:gap-30
                                                            xl:gap-24
                                                            md:gap-18 
                                                            gap-16
                                                            4xl:mt-64
                                                            2xl:mt-48
                                                            xl:mt-32
                                                            md:mt-24
                                                            mt-18
                                                            auto-cols-max
                                                            ">
                                                            {data.services.map((serv, index)=>(
                                                            <h2 className="font-workSans lg:pl-16 md:pl-14 pl-12 flex items-center text-15 4xl:text-24 3xl:text-20 md:text-18    text-textColor relative after:absolute after:left-0 after:w-[6px] after:h-[6px] after:bg-themeRed after:rounded" key={index}>
                                                            <Link href="#" className="hover:text-themeRed">{serv}</Link>
                                                            </h2>
                                                            ))}
                                                        </div>
                                                        <Link href={data.link} className="btn-withArrow  mt-16 2xl:mt-32 xl:mt-28 md:mt-20 hover:text-themeRed">
                                                        {data.linktext}
                                                        <i>
                                                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                        </i>
                                                        </Link>
                                                    </div>
                                                    {(data?.iconImage) &&
                                                        <div className="lg:w-1/2 w-full lg:mb-0 mb-80 flex justify-center items-center">
                                                            {/* <div className="flex lg:justify-end justify-center">
                                                                <Image src={data?.iconImage}  alt="icon1" width={420} height={420} className="2xl:max-w-[80%]  md:max-w-[352px] "></Image>
                                                            </div> */}
                                                            {data.layout === 'layout1' && (
                                                                <div className="w-[420px] h-[420px] flex items-center justify-center relative">
                                                                    <div className="lay1shape1 w-[200px] h-[200px] rounded-full bg-gradient-primary absolute left-0 top-0 animate-bounce">
                                                                        <div className="animate-ping w-full h-full absolute bg-gradient-primary left-0 top-0 rounded-full"></div>
                                                                    </div>
                                                                    <div className="lay1shape2 animate-spin absolute right-[4px] bottom-[45px] w-[212px] h-[212px] flex items-center justify-center">
                                                                        <Image src={triangleObject} alt="Design" width={100} height={100} className="w-auto h-auto" />
                                                                    </div>
                                                                    <div className="w-[260px] h-[260px] glassyeffectbox flex items-center justify-center rounded-[30px]">
                                                                        <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout2' && (
                                                                <div className="w-[420px] h-[420px] flex items-center justify-center relative">
                                                                    <div className="lay2shape1 animate-spin w-[154px] h-[154px] rounded-[30px] bg-gradient-primary absolute left-20 bottom-20"></div>
                                                                    <div className="lay2shape2 animate-bounce absolute top-[25px] right-[34px]">
                                                                        <Image src={layout2shape2} alt="Design" width={100} height={100} className="w-auto h-auto" />
                                                                        <div className="animate-ping2 w-full h-full absolute left-0 top-0">
                                                                            <Image src={layout2shape2} alt="Design" width={100} height={100} className="w-auto h-auto" />
                                                                        </div>
                                                                    </div>
                                                                    {/* <div className="lay2shape2 animate-bounce absolute top-[25px] right-[34px]">
                                                                        <Image src={layout2shape2} alt="Design" width={100} height={100} className="w-auto h-auto" />
                                                                    </div> */}
                                                                    <div className="w-[260px] h-[260px] glassyeffectbox flex items-center justify-center rounded-[30px]">
                                                                        <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout3' && (
                                                                <div className="w-[420px] h-[420px] flex items-center justify-center relative">
                                                                    <div className="lay1shape1 w-[200px] h-[200px] rounded-full bg-gradient-primary absolute right-0 top-0 animate-bounce">
                                                                        <div className="animate-ping w-full h-full absolute bg-gradient-primary left-0 top-0 rounded-full"></div>
                                                                    </div>
                                                                    <div className="laptopwrap flex flex-col relative z-10 items-center justify-center">
                                                                        <div className="w-[380px] h-[225px] glassyeffectbox flex items-center justify-center rounded-t-[20px] relative">
                                                                            <div className="laptopcamerabox absolute top-[8px] left-0 w-full flex justify-center">
                                                                                <div className="insidecameralaptop w-[30px] h-[5px]"></div>
                                                                            </div>
                                                                            <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                        </div>
                                                                        <div className="laptopbase mt-[8px]">
                                                                            <Image src={laptopbottom}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout4' && (
                                                                <div className="w-[420px] h-[420px] flex items-center justify-center relative">
                                                                    <div className="lay1shape1 w-[200px] h-[200px] rounded-full bg-gradient-primary absolute left-0 top-0 animate-bounce">
                                                                        <div className="animate-ping w-full h-full absolute bg-gradient-primary left-0 top-0 rounded-full"></div>
                                                                    </div>
                                                                    <div className="lay4shape2 w-[136px] h-[136px] rounded-[30px] bg-gradient-primary absolute right-[50px] bottom-[10px] animate-spin"></div>
                                                                    <div className="mobilewrap flex flex-col relative z-10 items-center justify-center">
                                                                        <div className="w-[225px] h-[360px] glassyeffectbox flex items-center justify-center rounded-[30px] relative">
                                                                            <div className="mobilecamerabox absolute top-[14px] left-0 w-full flex justify-center">
                                                                                <div className="insidecameramobile w-[40px] h-[5px] rounded-full bg-white"></div>
                                                                            </div>
                                                                            <div className="mobilebottombar absolute left-0 w-full bottom-[8px] flex justify-center">
                                                                                <span className="block h-[4px] w-[80px] rounded-full bg-white"></span>
                                                                            </div>
                                                                            <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div  className="md:hidden block py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                    <div className="container z-10 relative">
                        <div className="flex items-center text-center justify-between  ">
                            <h1 className="titleText w-full text-center flex items-center justify-center"
                                //dangerouslySetInnerHTML={{__html:servicesData.serviceHeading}}
                                >
                                <SplitText copy={servicesData.serviceHeading} role="heading" />
                            </h1>
                        </div>
                    </div>
                    {serviceData.map((data, i)=>(
                        <div key={i} className={`   pt-0    ${i}`}   
                        >
                            <div className="container">
                                <div className="relative pt-24">
                                    <div className=" flex md:flex-row flex-col-reverse items-center   justify-between">
                                        <div className=" mt-14 md:mt-0 w-full md:w-1/2">
                                            <h1 className="  
                                                text-textColor 
                                                font-bold 
                                                mb-16  text-18
                                                ">{data.title}</h1>
                                            <p className=" text-14  text-textColorSecondary ">{data.description}</p>
                                            <div className=" py-18 flex-wrap md:flex-col  flex gap-y-16 gap-x-18  ">
                                                {data.services.map((serv, index)=>(
                                                <h2 className="font-workSans   md:pl-4 pl-[12px] flex items-center text-[14px] md:text-[16px]  2xl:leading-[24px] xl:text-16 xl:leading-[1.5] text-textColor relative after:absolute after:left-0 md:after:w-[6px] md:after:h-[6px] after:w-[4px] after:h-[4px] after:bg-themeRed after:rounded md:w-auto  "  key={index}>{serv}</h2>
                                                ))}
                                            </div>
                                            <Link href={data.link} className="btn-withArrow 2xl:mt-7 xl:mt-4 md:mt-2 ">
                                            {data.linktext}
                                            <i>
                                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 6H13M13 6L8 1M13 6L8 11" stroke="#818181" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </i>
                                            </Link>
                                        </div>
                                        
                                        {(data?.iconImage) &&
                                                        <div className="lg:w-1/2 w-full lg:mb-0 mt-24 flex justify-center items-center">
                                                            {/* <div className="flex lg:justify-end justify-center">
                                                                <Image src={data?.iconImage}  alt="icon1" width={420} height={420} className="2xl:max-w-[80%]  md:max-w-[352px] "></Image>
                                                            </div> */}
                                                            {data.layout === 'layout1' && (
                                                                <div className="w-[212px] h-[212px] flex items-center justify-center relative">
                                                                    <div className="lay1shape1 w-[100px] h-[100px] rounded-full bg-gradient-primary absolute left-0 top-0 animate-bounce">
                                                                        <div className="animate-ping w-full h-full absolute bg-gradient-primary left-0 top-0 rounded-full"></div>
                                                                    </div>
                                                                    <div className="lay1shape2 animate-spin absolute right-[5px] bottom-[20px] w-[90px] h-[90px] flex items-center justify-center">
                                                                        <Image src={triangleObject} alt="Design" width={100} height={100} className="w-auto h-auto" />
                                                                    </div>
                                                                    <div className="w-[132px] h-[132px] glassyeffectbox flex items-center justify-center rounded-[20px]">
                                                                        <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-[80px] h-[80px]"></Image>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout2' && (
                                                                <div className="w-[212px] h-[212px] flex items-center justify-center relative">
                                                                    <div className="lay2shape1 animate-spin w-[78px] h-[78px] rounded-[30px] bg-gradient-primary absolute left-10 bottom-10"></div>
                                                                    <div className="lay2shape2 animate-spin absolute top-[10px] right-[10px]">
                                                                        <Image src={layout2shape2} alt="Design" width={100} height={100} className="w-[110px] h-auto" />
                                                                    </div>
                                                                    <div className="w-[132px] h-[132px] glassyeffectbox flex items-center justify-center rounded-[20px]">
                                                                        <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-[80px] h-auto"></Image>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout3' && (
                                                                <div className="w-[260px] h-[220px] flex items-center justify-center relative">
                                                                    <div className="lay3shape1 animate-bounce w-[80px] h-[80px] rounded-full bg-gradient-primary absolute -right-16 top-[20px]"></div>
                                                                    <div className="laptopwrap flex flex-col relative z-10 items-center justify-center">
                                                                        <div className="w-[260px] h-[154px] glassyeffectbox flex items-center justify-center rounded-t-[20px] relative">
                                                                            <div className="laptopcamerabox absolute top-[8px] left-0 w-full flex justify-center">
                                                                                <div className="insidecameralaptop w-[30px] h-[5px]"></div>
                                                                            </div>
                                                                            <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-[80px] h-auto"></Image>
                                                                        </div>
                                                                        <div className="laptopbase w-[260px] mt-[8px]">
                                                                            <Image src={laptopbottom}  alt="icon1" width={100} height={100} className="w-auto h-auto"></Image>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                            {data.layout === 'layout4' && (
                                                                <div className="w-[212px] h-[212px] flex items-center justify-center relative">
                                                                    <div className="lay4shape1 w-[60px] h-[60px] rounded-full bg-gradient-primary absolute left-[25px] top-[5px] animate-bounce"></div>
                                                                    <div className="lay4shape2 w-[69px] h-[69px] rounded-[30px] bg-gradient-primary absolute right-[25px] bottom-[5px] animate-spin"></div>
                                                                    <div className="mobilewrap flex flex-col relative z-10 items-center justify-center">
                                                                        <div className="w-[114px] h-[182px] glassyeffectbox flex items-center justify-center rounded-[20px] relative">
                                                                            <div className="mobilecamerabox absolute top-[8px] left-0 w-full flex justify-center">
                                                                                <div className="insidecameramobile w-[25px] h-[2px] rounded-full bg-white"></div>
                                                                            </div>
                                                                            <div className="mobilebottombar absolute left-0 w-full bottom-[4px] flex justify-center">
                                                                                <span className="block h-[2px] w-[40px] rounded-full bg-white"></span>
                                                                            </div>
                                                                            <Image src={data?.iconImage}  alt="icon1" width={100} height={100} className="w-[44px] h-auto"></Image>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    }
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center pt-24">
                        <ThemeButton link={servicesData.serviceButtonInfo.url} buttontext={servicesData.serviceButtonInfo.title} className="btnoutline" />
                    </div>
                </div>
            </div>
        
        )
    }
}
export default OurServices;