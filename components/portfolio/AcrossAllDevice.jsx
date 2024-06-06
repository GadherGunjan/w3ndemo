import Image from "next/image";

import { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AcrossAllDevice = (props) => {

    gsap.registerPlugin(ScrollTrigger);
    useEffect(() => {
        const para1Elements = document.querySelectorAll('.para1');

        para1Elements.forEach((container) => {
            let image = container.querySelector("img");

            gsap.to(image, {
                y: () => -400,
                // y: () => -(image.offsetHeight - container.offsetHeight),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    scrub: 1,
                    start: "+=100 bottom",
                    end: "bottom top",
                    pin: false,
                    invalidateOnRefresh: true,
                },
            });
        });
    }, []);

    return (
        <div className="py-96 relative">
            <div className="container">
                <div className="grid grid-cols-3 gap-x-[156px] gap-y-96">
                    <div className="col-span-2 col-start-2 row-span-1 row-start-1 text-left">
                        <div className="ml-48 max-w-[680px] flex flex-col gap-y-64">
                        {props?.acrossalldevicedata?.title &&
                            <h2 className="text-64 text-textprimary uppercase font-gilroy font-extrabold">{props.acrossalldevicedata.title}</h2>
                        }
                        {props?.acrossalldevicedata?.description &&
                            <div className="ptag font-manrope font-normal text-textColorSecondary leading-[1.8] text-20">{props.acrossalldevicedata.description}</div>
                        }
                        </div>
                    </div>
                    {props?.acrossalldevicedata?.image1 &&
                    <div className="row-span-2">
                        <div className="mainimagebox overflow-hidden border-[8px] border-solid border-linecolor rounded-[20px]">
                            <div className="para1 imagebox relative overflow-hidden before:content-[''] before:block before:pt-[176.92%]">
                                <Image src={props.acrossalldevicedata.image1} alt={props.acrossalldevicedata.image1ALT} width={'390'} height={'1138'} className="absolute left-0 top-0 w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                    }
                    {props?.acrossalldevicedata?.image2 &&
                    <div className="">
                        <div className="mainimagebox overflow-hidden border-[8px] border-solid border-linecolor rounded-[20px]">
                            <div className="para1 imagebox relative overflow-hidden before:content-[''] before:block before:pt-[176.92%]">
                                <Image src={props.acrossalldevicedata.image2} alt={props.acrossalldevicedata.image2ALT} width={'390'} height={'2346'} className="absolute left-0 top-0 w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                    }
                    {props?.acrossalldevicedata?.image3 &&
                    <div className="mt-96">
                        <div className="mainimagebox overflow-hidden border-[8px] border-solid border-linecolor rounded-[20px]">
                            <div className="para1 imagebox relative overflow-hidden before:content-[''] before:block before:pt-[176.92%]">
                                <Image src={props.acrossalldevicedata.image3} alt={props.acrossalldevicedata.image3ALT} width={'390'} height={'1166'} className="absolute left-0 top-0 w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AcrossAllDevice;