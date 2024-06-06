import Image from "next/image"
import { useRef , useEffect, Fragment } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React from "react";

const DisciplinesImages = ({disciplinesimgData}) => {
    
    gsap.registerPlugin(ScrollTrigger);

    const pinRef = useRef(null);
    const pinTrigger = useRef(null);
    const translateRef = useRef(null);

    const mainImgRef = useRef(null);
    const imgFirstRef = useRef(null);
    const imgSecoundRef = useRef(null);
    const imgThirdRef = useRef(null);
    const imgFourthRef = useRef(null);
    const imgFifthRef = useRef(null);

    useEffect(() => {

      // PinSec
      const pinHandler = () => {
      const pin = gsap.to(pinRef.current, {
          scrollTrigger: {
            trigger: pinRef.current,
            start: "top top",
            bottom: "bottom bottom",
            pin: true,
          },
        });
      }

      const pinDelayTime = 2000;
      const pinHandlerTimeout = setTimeout(pinHandler, pinDelayTime);

      return () => {
        clearTimeout(pinHandlerTimeout);
      };
    },[]);

    useEffect(() => {
      
      const animationHandler = () => {
        
        // MainImage
        const mainImage = gsap.fromTo(
          mainImgRef.current,
          {
            scale: 1,
          },
          {
            scale: 4,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              pinSpacing: false,
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
  
        // FirstImage
        const firstImage = gsap.fromTo(
          imgFirstRef.current,
          { scale: 1, y: 0 },
          {
            scale: 4,
            y: -300,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
  
        // SecoundImage
        const secoundImage = gsap.fromTo(
          imgSecoundRef.current,
          { scale: 1, x: 0, y: 0 },
          {
            scale: 4,
            x: -400,
            y: -200,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
  
        // ThirdImage
        const thirdImage = gsap.fromTo(
          imgThirdRef.current,
          { scale: 1, x: 0, y: 0 },
          {
            scale: 4,
            x: 400,
            y: -200,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
  
        // FourthImage
        const FourthImage = gsap.fromTo(
          imgFourthRef.current,
          { scale: 1, x: 0, y: 0 },
          {
            scale: 4,
            x: -100,
            y: 400,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
  
        // FifthImage
        const FifthImage = gsap.fromTo(
          imgFifthRef.current,
          { scale: 1, x: 0, y: 0 },
          {
            scale: 4,
            x: 300,
            y: 400,
            scrollTrigger: {
              trigger: pinRef.current,
              start: "top top",
              bottom: "bottom bottom",
              scrub: 0.6,
              ease: "circ.out",
            },
          }
        );
      };

    // Delay animation
    const delayTime = 2000;
    const timeoutId = setTimeout(animationHandler, delayTime);

    return () => {
      clearTimeout(timeoutId); 
    };
    }, [disciplinesimgData])
    
    return (
        <div>
        <div className="disci-outer">
            <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32 xl:h-screen  h-[40vh] overflow-hidden xl:block hidden" ref={pinRef}>
                
                    <div className="relative xl:h-screen  h-[40vh] " ref={translateRef}>
                    {disciplinesimgData.map((data,index)=>(
                        <React.Fragment key={index}>
                            {(data.value == '1') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={imgFirstRef}>
                                    <div className="absolute overflow-hidden xl:h-[30vh] h-[15vh] left-[36.6vw] xl:top-[5vh] top-[2.5vh] w-[31.5vw]">
                                        <Image src={data.image} alt="disimg1" className="w-full h-full object-cover" width={620} height={285}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '2') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={imgSecoundRef}>
                                    <div className="absolute overflow-hidden xl:h-[40vh] h-[20vh] left-[16.2vw] xl:top-[22.5vh] top-[11.25vh] w-[19.16vw]">
                                        <Image src={data.image} alt="disimg2" className="w-full h-full object-cover" width={360} height={415}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '3') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={mainImgRef}>
                                    <div className="absolute overflow-hidden xl:h-[25vh] h-[12.5vh] left-[50%] top-[50%] w-[26.25vw] translate-x-[-50%] translate-y-[-50%]">
                                        <Image src={data.image} alt="disimg3" className="w-full h-full object-cover" width={1920} height={980}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '4') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={imgThirdRef}>
                                    <div className="absolute overflow-hidden xl:h-[25vh] h-[12.5vh] left-[64.1vw] top-[50%] w-[26.25vw] translate-y-[-50%]">
                                        <Image src={data.image} alt="disimg4" className="w-full h-full object-cover" width={490} height={315}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '5') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={imgFourthRef}>
                                    <div className="absolute overflow-hidden xl:h-[30vh] h-[15vh] left-[10.55vw] xl:top-[65.1vh] top-[32.55vh] w-[31.25vw]">
                                        <Image src={data.image} alt="disimg5" className="w-full h-full object-cover" width={620} height={315}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '6') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0" ref={imgFifthRef} >
                                    <div className="absolute overflow-hidden xl:h-[30vh] h-[15vh] left-[43.05vw] xl:top-[65.1vh] top-[32.55vh] w-[31.25vw]">
                                        <Image src={data.image} alt="disimg6" className="w-full h-full object-cover" width={620} height={315}></Image>
                                    </div>   
                                </div>
                            }
                        </React.Fragment>
                    ))}
                        
                        
                    </div>
                
            </div>
            <div className="mt-24 4xl:mt-128 3xl:mt-96 2xl:mt-64 xl:mt-48 lg:mt-32 md:mt-32  h-[128.8vw] -ml-[25.6vw]   overflow-hidden xl:hidden block"  >
                
                    <div className="relative  h-[128.8vw]   "  >

                    {disciplinesimgData.map((data,index)=>(
                        <React.Fragment key={index}>
                            {(data.value == '1') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0"  >
                                    <div className="absolute overflow-hidden  h-[39.2vw] left-[50.66vw] top-0 w-[58.4vw]">
                                        <Image src={data.image} alt="disimg1" className="w-full h-full object-cover" width={620} height={285}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '2') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0"  >
                                    <div className="absolute overflow-hidden h-[51.36vw] left-[12.26vw] top-[22.93vw] w-[33.86vw]">
                                        <Image src={data.image} alt="disimg2" className="w-full h-full object-cover" width={360} height={415}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '3') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0"   >
                                    <div className="absolute overflow-hidden  h-[31.46vw] left-[50.66vw] top-[42.93vw] w-[45.86vw]">
                                        <Image src={data.image} alt="disimg3" className="w-full h-full object-cover" width={490} height={315}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '4') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0"  >
                                    <div className="absolute overflow-hidden h-[31.46vw] left-[100.53vw] top-[42.93vw] w-[46.4vw]">
                                        <Image src={data.image} alt="disimg4" className="w-full h-full object-cover" width={490} height={315}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '5') &&
                                <div className="absolute left-0 top-0 bottom-0 right-0"  >
                                    <div className="absolute overflow-hidden h-[39.46vw] left-[20vw] top-[77.86vw] w-[58.66vw]">
                                        <Image src={data.image} alt="disimg5" className="w-full h-full object-cover" width={620} height={315}></Image>
                                    </div>
                                </div>
                            }

                            {(data.value == '6') &&
                                 <div className="absolute left-0 top-0 bottom-0 right-0"  >
                                    <div className="absolute overflow-hidden h-[50.93vw] left-[82.66vw] top-[77.86vw] w-[33.6vw]">
                                        <Image src={data.image} alt="disimg6" className="w-full h-full object-cover" width={620} height={315}></Image>
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    ))}


                        
                        
                        
                        
                       
                        
                    </div>
                
            </div>
        </div>
        </div>
    )
}

export default DisciplinesImages;