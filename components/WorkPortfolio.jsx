'use client';
import { useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import RightArrowWorkLinkIcon from "@/assets/images/svgs/RightArrowWorkLinkIcon";

const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
};

const WorkPortfolio = (props) => {
    const ref = useRef([]);
    ref.current = [];
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        ref.current.forEach((el) => {
            const wrapper = el.querySelector(".maskimage");
            const image = el.querySelector(".portimage");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    toggleActions: "play none none reverse",
                    // toggleActions: "restart none none reset"
                }
            })
            tl.to(wrapper, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" })
                .to(image, { duration: 2, scale: 1, }, "<")
        })
    }, [])
    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };
    return (
        <>
            <div className="workpg_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32   overflow-hidden">
                <div className="container flex flex-col gap-y-24 4xl:gap-y-196 3xl:gap-y-128 2xl:gap-y-64 xl:gap-y-48 md:gap-y-32 ">
                    {props?.portData?.portfoliodata &&
                        props.portData.portfoliodata.map((data, index) => {
                            const { slug, title, portfolioPostOptions } = data;
                            const { backgroundImage, technologiesUsedToCreateThisProject } = portfolioPostOptions;
                            return (
                                <div className="w-full relative " key={index}>
                                    <Link
                                        href={`portfolio/${slug}`}
                                        className="overflow-hidden relative group bg-bgSecondary"
                                        ref={addtoRefs}
                                    >
                                        <div className="imagebox relative before:content-[''] before:block xl:before:pt-[43.847%] md:before:pt-[320px] before:pt-164">
                                            <div className="maskimage absolute left-0 top-0 bottom-0 w-full overflow-hidden">
                                                <Image
                                                    loader={imageLoader}
                                                    width={2160}
                                                    height={900}
                                                    alt=""
                                                    className="portimage w-full h-full absolute top-0 object-cover opacity-20 origin-center"
                                                    src={backgroundImage.sourceUrl}
                                                />
                                            </div>
                                        </div>

                                        <div className="captionbox md:absolute relative left-0 bottom-0 right-0 py-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24">
                                            <div className="technologies flex items-center gap-x-1">
                                                {data?.portfolioPostOptions?.portfolioPostDescription &&
                                                    <div className="techline text-14 4xl:text-20 3xl:text-18 md:text-16 text-textprimary" key={index} >
                                                        <p>{data?.portfolioPostOptions?.portfolioPostDescription}</p>
                                                    </div>
                                                }          
                                            </div>
                                            <div className="text-32 4xl:text-96 3xl:text-80  2xl:text-72 xl:text-64 md:text-48 text-textprimary font-semibold md:pt-12 pt-10 leading-normal">{title}</div>
                                            <div className="arrowbox md:relative absolute right-0 md:top-auto top-16 pt-16 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 text-textprimary group-hover:text-themeRed transition-all duration-400 group-hover:translate-x-4 4xl:w-36 3xl:w-28 xl:w-24 md:w-20 w-20">
                                                <RightArrowWorkLinkIcon className="" />
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default WorkPortfolio;
