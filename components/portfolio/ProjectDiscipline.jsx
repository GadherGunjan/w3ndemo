import React, { useRef, useEffect, useState, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


const ProjectDiscipline = ({disciplinesdata}) => {

    gsap.registerPlugin(ScrollTrigger);

    const triggerRef = useRef(null);
    const ref = useRef([]);
    ref.current = [];

    useEffect(()=>{
        const circleAnimtion = () => {
           
            ref.current.forEach((el) => {
                const wrapper = el.querySelector('.cirTarget');
                if (wrapper) { 
                    let pathLength = wrapper.getTotalLength();
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: "top 80%",
                            end: "bottom 70%",
                            toggleActions: "play none none reset",
                            scrub: 2,
                        }
                    })
                    tl.fromTo(wrapper, { 
                        strokeDasharray: pathLength,
                        strokeDashoffset: pathLength,
                    }, { 
                        duration: 1 ,
                        strokeDasharray: pathLength,
                        strokeDashoffset:0,
                        ease: "power1.inOut",
                    });
                }
            })

        }

        circleAnimtion();

    },[disciplinesdata])

    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return(
    <>
        <div className="relative pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32" ref={triggerRef}>
            <div className="container">
                <div className="flex gap-x-16 4xl:gap-x-30 md:flex-row flex-col xl:gap-x-24 md:gap-x-18">
                    {disciplinesdata.title &&
                        <div className=" w-full md:pb-0 pb-24 md:w-6/12">
                            <h2 className="font-gilroy text-textprimary text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-extrabold uppercase">{disciplinesdata.title}</h2>
                        </div>
                    }
                    <div className="w-full md:w-6/12">
                        <ul className='relative flex flex-col gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24 '>

                        {disciplinesdata?.disciplinelist.map((data,index)=>(
                                <li className="flex  gap-14 4xl:gap-24 xl:gap-20 md:gap-16 items-center" key={index} ref={addtoRefs}>
                                    <span className="serial text-textColor  text-14 4xl:text-20 3xl:text-18 md:text-16  font-medium font-manrope w-36 h-36 4xl:w-64 4xl:h-64 3xl:w-54 3xl:h-54 2xl:w-48 2xl:h-48 xl:w-48 xl:h-44 md:w-40 md:h-40 flex items-center justify-center relative">
                                    <div className="absolute top-0 left-0"  >
                                        <svg width="full" height="full" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path className="cirTarget" d="M65 33C65 50.6731 50.6731 65 33 65C15.3269 65 1 50.6731 1 33C1 15.3269 15.3269 1 33 1C50.6731 1 65 15.3269 65 33Z" stroke="#DFDFDF"/>
                                        </svg>
                                    </div>
                                        {data.value}</span>
                                    <p className="text-textColor text-14 4xl:text-20 3xl:text-18 md:text-16  font-medium font-manrope">{data.text}</p>
                                </li>
                            ))}
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProjectDiscipline;