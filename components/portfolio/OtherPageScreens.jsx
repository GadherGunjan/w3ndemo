import Image from "next/image";
import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const OtherPageScreens = (props) => {
    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        let container = document.querySelector('.imageboxpage1')
        let image = container.querySelector("img");
        let container2 = document.querySelector('.imageboxpage2')
        let image2 = container2.querySelector("img");
        gsap.to(image, {
            y: () => +400,
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
        gsap.to(image2, {
            y: () => +128,
            ease: "none",
            scrollTrigger: {
                trigger: container2,
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
        <div className="relative mt-164 mb-128">
            <div className="container">
                <div className="grid grid-cols-2 gap-x-[150px] gap-y-96 grid-flow-row">
                    <div className="col-start-1 row-start-1 text-left">
                        <div className="flex flex-col gap-y-48">
                        {props?.otherpagescreensdata?.title &&
                            <h2 className="text-64 text-textprimary uppercase font-gilroy font-extrabold">{props.otherpagescreensdata.title}</h2>
                        }
                        {props?.otherpagescreensdata?.description &&
                            <div className="ptag font-manrope font-normal text-textColorSecondary leading-[1.8] text-20">{props.otherpagescreensdata.description}</div>
                        }
                        </div>
                    </div>
                    {props?.otherpagescreensdata?.image1 &&
                    <div className="col-start-1">
                        <div className="imageboxpage1">
                            <Image src={props.otherpagescreensdata.image1} alt={props.otherpagescreensdata.image1ALT} width={'690'} height={'2493'} className="w-full h-auto" />
                        </div>
                    </div>
                    }
                    {props?.otherpagescreensdata?.image2 &&
                    <div className="row-start-1 row-span-3">
                        <div className="imageboxpage2 mt-128">
                            <Image src={props.otherpagescreensdata.image2} alt={props.otherpagescreensdata.image2ALT} width={'690'} height={'3568'} className="w-full h-auto" />
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default OtherPageScreens;