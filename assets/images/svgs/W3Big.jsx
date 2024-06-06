import { useEffect, useRef ,useLayoutEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const W3Big = (props) => {

    const ref = useRef([]);
    ref.current = [];
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        ref.current.forEach((el) => {
            const gr1 = el.querySelector('.gr1');
            const gr2 = el.querySelector('.gr2');
            const tl = gsap.timeline({
                repeat: -1,
                yoyo: true,
            });
            tl.to(gr1, { duration: 1, stopOpacity: 0 });
            tl.to(gr2, { duration: 1, stopOpacity: 0.4 }, '-=1'); // Reverse animation
        })
    }, [])
    const addtoRefs = (el) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    }

    return (
        <svg width="1920" height="825" viewBox="0 0 1920 825" fill="none" xmlns="http://www.w3.org/2000/svg" ref={addtoRefs} className={props.className}>
            <g opacity="0.05">
                <path d="M249.74 825L0 2.15418H279.88L387.527 413.577L512.397 0H749.218L876.241 415.731L986.04 2.15418H1261.61L1011.88 825H764.289L630.807 400.653L495.173 825H249.74Z M1606.48 825C1462.93 825 1347.42 777.246 1261.61 681.737L1403.52 540.12C1462.93 601.048 1527.28 632.335 1596.58 632.335C1627.93 632.335 1652.69 624.102 1672.49 609.281C1690.64 594.461 1700.54 574.701 1700.54 550V548.353C1700.54 522.006 1688.99 502.246 1665.89 487.425C1642.78 472.605 1609.78 466.018 1568.53 466.018H1474.48L1441.47 349.102L1627.93 181.138H1317.72V0H1903.5V159.731L1710.44 324.401C1850.7 355.689 1920 431.437 1920 551.647V553.293C1920 633.982 1890.3 699.85 1832.54 747.605C1773.14 800.3 1698.89 825 1606.48 825Z" fill="url(#paint1_linear_192_7850)"/>
            </g>
            <defs>
                <linearGradient id="paint1_linear_192_7850" x1="630.807" y1="0" x2="630.807" y2="825" gradientUnits="userSpaceOnUse">
                    <stop className="gr1" offset="0%" stopColor="white" stopOpacity="0.4" />
                    <stop className="gr2" offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    )
}

export default W3Big;