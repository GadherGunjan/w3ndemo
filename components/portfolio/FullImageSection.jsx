import Image from "next/image";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const FullImageSection = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        let container = document.querySelector('.imageboxfull')
        let image = container.querySelector("img");
        gsap.to(image, {
            y: () => -(image.offsetHeight - container.offsetHeight),
            ease: "none",
            scrollTrigger: {
                trigger: container,
                scrub: 1,
                start: "+=100 bottom",
                end: "bottom top",
                pin: false,
                // markers: true,
                invalidateOnRefresh: true,
            },
        });
    }, []);

    return (
        <div className="relative my-128">
            {props?.fullimagedata?.imageURL &&
            <div className="imageboxfull relative overflow-hidden before:content-[''] before:block before:pt-[51.04%]">
                <Image src={props.fullimagedata.imageURL} alt={props.fullimagedata.imageALT} width={'1948'} height={'1299'} className="absolute left-0 top-0 w-full h-auto object-contain" />
            </div>
            }
        </div>
    )
}

export default FullImageSection;