import Image from "next/image";
import { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ImageBlock = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        if (props.imageurl) {
            let container = document.querySelector('.imagebox')
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
        }
    }, [props.imageurl]);

    if(props?.imageurl != ''){
    return (
        <div className="relative w-full py-48  4xl:py-96  3xl:py-64  xl:py-64 lg:py-64 md:py-48">
            <div className="container">
                {props?.imageurl &&
                    <div className="imagebox relative overflow-hidden before:content-[''] before:block before:pt-[52.1852%]">
                        <Image src={props.imageurl} alt={props.imagealt} width={1530} height={1150} className="absolute left-0 top-0 w-full h-auto object-contain" />
                    </div>
                }
            </div>
        </div >
    )
    }
}

export default ImageBlock;