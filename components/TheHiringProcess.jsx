import { useRef ,useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const TheHiringProcess = (props) => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        // const sections = document.querySelector('.baseline');
        const pin = gsap.fromTo( sectionRef.current, { height: 0, },
            { height: '100%', ease: "none", duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.6,
                    pin: false,
                    // markers: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);

    const refbubble = useRef([]);
    refbubble.current = [];
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        refbubble.current.forEach((el) => {
            const bigBubble = el.querySelector('.bigbubble');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "center-=12 center",
                    end: "center center",
                    toggleActions: "restart none none reverse",
                    // markers: true,
                    // toggleActions: "restart none none reset"
                }
            })
            tl.fromTo(bigBubble, { opacity: 0, scale: 0.1}, { opacity: 1, scale: 1, duration: 0.4 , ease: "power1.inOut",});
        })
    }, [])
    const addtoRefsbubble = (el) => {
        if (el && !refbubble.current.includes(el)) {
            refbubble.current.push(el);
        }
    }

    if(props?.thehiringprocessdata?.title?.__html != '' || props?.thehiringprocessdata?.subtitle?.__html != '' || props?.thehiringprocessdata?.HiringData?.length > 0){
    return (
        <div className='relative'>
            <div className="thehiringprocess_section relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                <div className="container">
                    <div className="flex md:flex-row flex-col items-center pb-24 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28">
                    {props?.thehiringprocessdata?.title &&
                        <div className=" w-full md:w-6/12 pb-4 md:pb-0 ">
                            <h1 className="titleText" 
                                dangerouslySetInnerHTML={props.thehiringprocessdata.title}
                            ></h1>
                        </div>
                    }
                    {props?.thehiringprocessdata?.subtitle &&
                        <div className=" w-full md:w-6/12">
                            <div className="ptag text-14 4xl:text-20 3xl:text-18 md:text-16  text-textColorSecondary  "
                                dangerouslySetInnerHTML={props.thehiringprocessdata.subtitle}
                            ></div>
                        </div>
                    }
                    </div>
                    <div className="wrapprocess relative py-20 4xl:py-96  2xl:py-64 xl:py-36   md:py-28" ref={triggerRef}>
                        <div className="absolute left-1 lg:left-[50%] top-0 bottom-0 w-[4px] bg-linecolor baseline">
                            <div className='innnnnn w-full bg-themeRed' ref={sectionRef}></div>
                        </div>
                        <div className="flex flex-wrap relative processwrap_inside
                            [&>*:nth-child(odd)]:justify-end 
                            lg:[&>*:nth-child(even)]:text-right
                            [&>*:nth-child(even)]:text-left
                        ">
                            {props?.thehiringprocessdata?.HiringData.map((data)=>(
                                <div className="w-full flex py-14 4xl:py-32 2xl:py-24 xl:py-32 md:py-18 lg:pl-0 md:pl-[72px] pl-[54px]" key={data.value} ref={addtoRefsbubble}>
                                    <div className=" w-full lg:w-5/12 relative">
                                        <div className='absolute bubble    top-1/2 h-0 flex items-center justify-center'>
                                            <div className='w-[30px] h-[30px] 4xl:w-[80px] 4xl:h-[80px]  3xl:w-[70px] 3xl:h-[70px] 2xl:w-[60px] 2xl:h-[60px] lg:w-[50px]  lg:h-[50px] md:w-[40px]  md:h-[40px]  relative flex items-center justify-center'>
                                                <div className='bg-bgColor border  border-solid border-themeRed rounded-[100px] flex items-center justify-center absolute left-0 top-0 w-full h-full bigbubble opacity-0'></div>
                                                <div className='block   4xl:w-[24px] 4xl:h-[24px] 3xl:w-[20px] 3xl:h-[20px]  md:w-[18px]  md:h-[18px]  w-[14px]  h-[14px] rounded-[50px] bg-linecolor relative z-10 smallbubble'></div>
                                            </div>
                                        </div>
                                        {data.intitle && 
                                            <h3 className="font-extrabold text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 text-textprimary  ">{data.intitle}</h3>
                                        }
                                        {data.description && 
                                            <div className="ptag text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary  
                                            pt-10 2xl:pt-32 xl:pt-28 lg:pt-20 md:pt-10"
                                                dangerouslySetInnerHTML={data.description}
                                            ></div>
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default TheHiringProcess;