import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const ScrollSecChange = ({nextpagedata}) => {

    gsap.registerPlugin(ScrollTrigger);
  
    const router = useRouter();
    const triggerRef = useRef(null);
    const ref = useRef([]);
    ref.current = [];
    
    useEffect(() => {


        // circleAnimtionHandler
        const circleAnimtion = () => {
           
            ref.current.forEach((el) => {
                const wrapper = el.querySelector('.cirTarget');
                if (wrapper) { 
                    let pathLength = wrapper.getTotalLength();
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: el,
                            start: "-=120 bottom",
                            end: "bottom 70%",
                            toggleActions: "play none none reset",
                            scrub: 2,
                            // markers: true,
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
        
        const fetchData1 = () => {
            circleAnimtion()
        };
        const delayTime = 3000;
        setTimeout(fetchData1, delayTime);


        // Change on scroll 
        const handleScroll = () => {
          if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight
          ) {
            router.push(nextpagedata.url);
          }
        };
    
        window.addEventListener('scroll', handleScroll); 
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [nextpagedata]); 

      const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
      }

    return (
        <div className="md:h-screen md:pt-0 pt-[100%]  w-full relative flex" >
        {nextpagedata.image &&
            <div className="absolute top-0 left-0 right-0 bottom-0 after:top-0 after:left-0 after:right-0 after:bottom-0 after:absolute after:bg-black after:opacity-80">
                <Image src={nextpagedata.image} width="1920" height="1234" alt="bg-img" className='h-full w-full object-cover'  />
            </div>
        }

            <div className="container md:relative absolute md:left-auto left-0 md:top-auto top-0 md:h-auto h-full md:flex-none flex items-center justify-center">
                <div className='md:h-screen    flex items-center justify-center'>
                    <div className=" relative z-10">
                    {nextpagedata.image &&
                        <div className=" lg:w-[39.063vw]  md:w-[360px] w-[212px] mx-auto pt-[48.267%]   relative">
                            <Image src={nextpagedata.image} width="750" height="362" alt='box-img' className='h-full w-full absolute left-0 top-0 object-cover' />
                        </div>
                    }
                        <div className="mx-auto text-center mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36   md:mt-28">
                        {nextpagedata.title &&
                            <h2 className='text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42  md:text-30 font-extrabold uppercase'>{nextpagedata.title}</h2>
                        }
                            <div className="flex justify-center">
                                <div className="w-60 h-60 rounded-full border-[1px] border-[#262626]" ref={addtoRefs} >
                                    <svg width="full" height="full" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path className="cirTarget" d="M65 33C65 50.6731 50.6731 65 33 65C15.3269 65 1 50.6731 1 33C1 15.3269 15.3269 1 33 1C50.6731 1 65 15.3269 65 33Z" stroke="#DFDFDF"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ScrollSecChange;