import { useRef, useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import RoundLineAnimation from "./layout/RoundLineAnimation";

const WaysToWorkWithUs = (props) => {

    const ref = useRef([]);
    ref.current = [];
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        ref.current.forEach((el) => {
            const imageWrapper = el.querySelector('.g1');
            const mainimage = el.querySelector('.collimagebox');
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=50",
                    toggleActions: "play none none reset",
                    // markers: true,
                    // toggleActions: "restart none none reset"
                }
            })
            // tl.set([imageWrapper, mainimage], { opacity: 0, scale: 0.4 });
            tl.to(imageWrapper, { opacity: 1, scale: 1, duration: 0.7, ease: "power1.inOut", })
                .to(mainimage, { opacity: 1, scale: 1, duration: 0.7, ease: "power1.inOut", }, "-=1");
            // tl.fromTo(imageWrapper, { opacity: 0,}, { opacity: 1, duration: 1 , ease: "power1.inOut",});
            // tl.fromTo(mainimage, { opacity: 0,}, { opacity: 1, duration: 1 , ease: "power1.inOut",});
            // tl.to(wrapper, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})
        })
    }, [])
    const addtoRefs1 = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    if(props?.waystoworkwithusdata?.title?.__html != '' || props?.waystoworkwithusdata?.subtitle != '' || props?.waystoworkwithusdata?.waytoworksubdata?.length > 0){
    return (
        <div className="waystoworkwithus_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 mb-20 4xl:mb-96  2xl:mb-64 xl:mb-36   md:mb-28 relative">
            <div className="container">
                {props?.waystoworkwithusdata?.title &&
                    <h1 className="titleText"
                        dangerouslySetInnerHTML={props.waystoworkwithusdata.title}
                    ></h1>
                }
                {props?.waystoworkwithusdata?.subtitle &&
                <div className="ptag text-textColorSecondary pt-16 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20">
                    {props.waystoworkwithusdata.subtitle}
                </div>
                }
                <div className="flex flex-col whyinforwrap
                    md:[&>*:nth-child(even)]:flex-row-reverse
                    [&>*:nth-child(even)]:flex-col
                ">
                    {props?.waystoworkwithusdata?.waytoworksubdata?.map((data)=>(
                        <div className="flex md:flex-row flex-col   justify-between mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32  items-center" key={data.value}>
                            <div className="w-full md:w-4/12 xl:w-5/12 md:pb-0 pb-24">
                                <div className="4xl:max-w-[608px] 4xl:p-[42px] 3xl:max-w-[506px] 3xl:p-[34px] 2xl:max-w-[456px] 2xl:p-[31px] xl:max-w-[405px] xl:p-[27px]  md:max-w-[243px] md:p-[17px]  max-w-[118px]  p-[8px]  relative" ref={addtoRefs1}>
                                    <RoundLineAnimation />
                                    <div className="g1 4xl:p-20 3xl:p-16 2xl:p-15 xl:p-[13px] md:p-[8px] p-[4px]  rounded-[100%] bg-blackLight1 border border-solid border-tertiary">
                                        <div className="collimagebox max-w-full relative rounded-[100%] overflow-hidden before:content-[''] before:block before:pt-[100%]">
                                            <Image src={data.image} alt={data.altText} className="absolute left-0 top-0 w-full h-full object-cover" width={'484'} height={'484'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-7/12 xl:w-6/12  ">
                                <div className="">
                                    <h3 className="uppercase text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24 text-textprimary">{data.title}</h3>
                                    <div className="max-w-[100px] h-[1px] 4xl:max-w-[160px] w-full  bg-gradient-primary my-16 4xl:my-48 2xl:my-32 xl:my-28 md:my-24"></div>
                                    <div className="ptag  text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16 ">{data.description}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
    }
}

export default WaysToWorkWithUs;