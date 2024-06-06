import { useRef ,useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ProcessLineAnim4 = () => {

    const ref = useRef([]);
    ref.current = [];
    gsap.registerPlugin(ScrollTrigger);
    const addAnimation1 = () => {
        ref.current.forEach((el) => {
            const wrapper = el.querySelector('.animline');
            let pathLength = wrapper.getTotalLength();
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start: "top 40%",
                    end: "bottom 20%",
                    toggleActions: "play none none reset",
                    scrub: 2,
                    // markers: true,
                    // toggleActions: "restart none none reset"
                }
            })
            tl.fromTo(wrapper, { 
                // opacity: 0,
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength,
            }, { 
                // opacity: 0.5, 
                duration: 1 ,
                strokeDasharray: pathLength - 50,
                strokeDashoffset:0,
                ease: "power1.inOut",
            });
            // tl.to(wrapper, { duration: 1, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"})
        })
    }
    useLayoutEffect(() => {
        const fetchData1 = () => {
            addAnimation1()
        };
        const delayTime = 3000;
        setTimeout(fetchData1, delayTime);
    }, [])
    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return (
        <div className="absolute hidden xl:block 3xl:left-[27%] xl:left-[30%] top-full mt-[-85px] z-10 pointer-events-none " ref={addtoRefs}>
            <svg width="368" height="426" viewBox="0 0 368 426" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2334_483" maskUnits="userSpaceOnUse" x="0" y="0" width="368" height="426">
                    <path d="M0.5 0.5C77.1134 18.26 178.136 65.5449 222.5 243C245.367 334.47 297.109 389.398 367 425" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 6"/>
                </mask>
                <g mask="url(#mask0_2334_483)">
                    <path className='animline' d="M0.5 0.5C77.1134 18.26 178.136 65.5449 222.5 243C245.367 334.47 297.109 389.398 367 425" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>

        </div>
    )
}

export default ProcessLineAnim4;