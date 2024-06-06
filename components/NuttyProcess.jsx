'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

import Process1Lottie from "@/assets/images/lotties/Process-1.json";
import Process2Lottie from "@/assets/images/lotties/Process-2.json";
import Process3Lottie from "@/assets/images/lotties/Process-3.json";
import Process4Lottie from "@/assets/images/lotties/Process-4.json";
import Process5Lottie from "@/assets/images/lotties/Process-5.json";

import Process1 from "@/assets/images/process-1.svg";
import Process2 from "@/assets/images/process-2.svg";
import Process3 from "@/assets/images/process-3.svg";
import Process4 from "@/assets/images/process-4.svg";
import Process5 from "@/assets/images/process-5.svg";
import ProcessLineAnim1 from "./layout/ProcessLineAnim1";
import ProcessLineAnim2 from "./layout/ProcessLineAnim2";
import ProcessLineAnim3 from "./layout/ProcessLineAnim3";
import ProcessLineAnim4 from "./layout/ProcessLineAnim4";
import SplitText from "./SplitText";

const NuttyProcess = ({nuttyProcessData}) => {

    if(nuttyProcessData?.title != '' || nuttyProcessData?.process?.length > 0){
    return (
        <div className="nuttyprocess-section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32  relative">
            <div className="desktop-show xl:block hidden">
                <div className="container">
                    {nuttyProcessData?.title &&
                        <div className="w-full mb-24">
                            <h1 className="titleText text-center justify-title" >
                                <SplitText copy={nuttyProcessData.title} role="heading" />
                            </h1>
                        </div>
                    }
                    {nuttyProcessData?.process &&
                    <div className="
                        process_row 
                        xl:grid 
                        xl:grid-flow-row 
                        xl:grid-cols-12  
                        4xl:[&>*:nth-child(even)]:col-start-3 
                        4xl:[&>*:nth-child(even)]:col-end-12 
                        3xl:[&>*:nth-child(even)]:col-start-3 
                        3xl:[&>*:nth-child(even)]:col-end-13 
                        xl:[&>*:nth-child(even)]:col-start-2 
                        xl:[&>*:nth-child(even)]:col-end-12 
                        4xl:[&>*:nth-child(odd)]:col-start-2 
                        4xl:[&>*:nth-child(odd)]:col-end-11
                        3xl:[&>*:nth-child(odd)]:col-start-2 
                        3xl:[&>*:nth-child(odd)]:col-end-12
                        xl:[&>*:nth-child(odd)]:col-start-2 
                        xl:[&>*:nth-child(odd)]:col-end-12
                        xl:[&>*:nth-child(1n+2)]:mt-[164px]
                        [&>*:nth-child(1n+2)]:mt-[0px] 
                        xl:gap-0
                        grid 
                        gap-4 
                        grid-cols-2
                    ">
                        {nuttyProcessData.process.map((text,index) => {
                            let newIndex = index + 1;
                            let processicon = ''
                            if(text.iconOptionAnimation == 'Icon1'){
                                processicon = Process1Lottie;
                            }
                            if(text.iconOptionAnimation == 'Icon2'){
                                processicon = Process2Lottie;
                            }
                            if(text.iconOptionAnimation == 'Icon3'){
                                processicon = Process3Lottie;
                            }
                            if(text.iconOptionAnimation == 'Icon4'){
                                processicon = Process4Lottie;
                            }
                            if(text.iconOptionAnimation == 'Icon5'){
                                processicon = Process5Lottie;
                            }
                            
                            if(newIndex % 2 == 0){
                                return(
                                    <div className="text-white lg:grid 
                                    flex
                                    flex-col
                                    w-full
                                    xl:w-full
                                    xl:grid-cols-10 
                                    2xl:grid-cols-11
                                    3xl:grid-cols-11 
                                    4xl:grid-cols-9 items-center relative" key={index}>
                                        <div className="col-start-1 col-end-5">
                                            
                                            
                                            <Player
                                                renderer={"canvas"}
                                                rendererSettings={{clearCanvas: true}} // Clears on re-draw
                                                autoplay
                                                loop
                                                src={processicon}
                                                style={{ height: '300px', width: '300px' }}
                                                >
                                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                            </Player>



                                        </div>
                                        <div className="
                                        4xl:col-start-5 
                                        3xl:col-start-6
                                        2xl:col-start-6
                                        xl:col-start-6
                                        4xl:col-end-10
                                        3xl:col-end-11
                                        2xl:col-end-11
                                        xl:col-end-12
                                        ">
                                            <h2 className=" pb-14 4xl:pb-24 2xl:pb-20 md:pb-16   text-18 4xl:text-48 3xl:text-40  2xl:text-36 xl:text-32 md:text-26 text-white font-bold">{text.title}</h2>
                                            <p className="text-14 4xl:text-20 3xl:text-18 md:text-16   text-textColorSecondary  ">{text.description}</p>
                                        </div>
                                        {index === 0 ? <ProcessLineAnim1 /> : ''}
                                        {index === 1 ? <ProcessLineAnim2 /> : ''}
                                        {index === 2 ? <ProcessLineAnim3 /> : ''}
                                        {index === 3 ? <ProcessLineAnim4 /> : ''}
                                        {/* {index === 4 ? '4' : ''} */}
                                    </div>
                                )
                            }else{
                                return(
                                    <div className="text-white xl:grid  
                                        flex
                                        flex-col
                                        w-full
                                        xl:w-full
                                        xl:grid-cols-10 
                                        2xl:grid-cols-11
                                        3xl:grid-cols-11 
                                        4xl:grid-cols-9 items-center relative" key={index}>

                                        <div className="
                                        4xl:col-start-6
                                        3xl:col-start-7
                                        2xl:col-start-7
                                        xl:col-start-6
                                        4xl:col-end-10 
                                        3xl:col-end-12 
                                        2xl:col-end-12 
                                        xl:col-end-12
                                        row-start-1 
                                        flex
                                        justify-end  
                                        4xl:justify-end 
                                        2xl:justify-center
                                        z-10 
                                        relative">
                                            {/* <Image src={text.animationSvg.sourceUrl} alt="Discover" width="420" height="330" className="xl:max-w-[80%] 3xl:max-w-[100%]" /> */}
                                            <Player
                                                renderer={"canvas"}
                                                rendererSettings={{clearCanvas: true}} // Clears on re-draw
                                                autoplay
                                                loop
                                                src={processicon}
                                                style={{ height: '300px', width: '300px' }}
                                                >
                                                <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                            </Player>
                                        </div>
                                        <div className="col-start-1 col-end-6 row-start-1">
                                            <h2 className="pb-14 4xl:pb-24 2xl:pb-20 md:pb-16   text-18 4xl:text-48 3xl:text-40  2xl:text-36 xl:text-32 md:text-26 text-white font-bold">{text.title}</h2>
                                            <p className="text-14 4xl:text-20 3xl:text-18 md:text-16   text-textColorSecondary  ">{text.description}</p>
                                        </div>
                                        {index === 0 ? <ProcessLineAnim1 /> : ''}
                                        {index === 1 ? <ProcessLineAnim2 /> : ''}
                                        {index === 2 ? <ProcessLineAnim3 /> : ''}
                                        {index === 3 ? <ProcessLineAnim4 /> : ''}
                                        {/* {index === 4 ? '4' : ''} */}
                                    </div>
                                )
                            }
                        })}
                        
                    </div>
                    }
                </div>
            </div>
            <div className="mobile-show xl:hidden block">
                <div className="container">
                    <div className="relative block notty-sec">
                        {nuttyProcessData?.title &&
                            <div className="w-full mb-12 md:relative md:top-0 sticky top-[80px]">
                                <h1 className="titleText text-center justify-title" 
                                //dangerouslySetInnerHTML={{__html:nuttyProcessData.title}}
                                >
                                    <SplitText copy={nuttyProcessData.title} role="heading" />
                                </h1>
                            </div>
                        }
                        {nuttyProcessData?.process &&
                            <div className="process_row flex flex-wrap  justify-center">
                            {nuttyProcessData?.process.map((text,index) => {
                                let newIndex = index + 1;
                                let Nutty = `positiontop-${index+1}`
                                let processicon = ''
                                if(text.iconOptionAnimation == 'Icon1'){
                                    processicon = Process1Lottie;
                                }
                                if(text.iconOptionAnimation == 'Icon2'){
                                    processicon = Process2Lottie;
                                }
                                if(text.iconOptionAnimation == 'Icon3'){
                                    processicon = Process3Lottie;
                                }
                                if(text.iconOptionAnimation == 'Icon4'){
                                    processicon = Process4Lottie;
                                }
                                if(text.iconOptionAnimation == 'Icon5'){
                                    processicon = Process5Lottie;
                                }
                                
                                if(newIndex % 2 == 0){
                                    
                                    return(
                                        <div className={` text-white items-center md:p-2 py-[8px] w-full md:w-1/2   ${Nutty}`} key={index}>
                                            <div className="border-[#262626] relative h-full border-[1px] bg-bgSecondary rounded-[16px] md:p-32 p-24">
                                                <div className="w-full text-center flex flex-col justify-center items-center">
                                                    <h2 className="pb-[24px] md:text-20 text-18 text-center   text-white font-bold">{text.title}</h2>
                                                    {/* <Image src={text.animationSvg.sourceUrl} alt="Discover" width="420" height="330" className="max-w-[232px] max-h-[190px]" /> */}
                                                    <Player
                                                        renderer={"canvas"}
                                                        rendererSettings={{clearCanvas: true}} // Clears on re-draw
                                                        autoplay
                                                        loop
                                                        src={processicon}
                                                        style={{ height: '300px', width: '300px' }}
                                                        >
                                                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                                    </Player>
                                                </div>
                                                <div className="w-full pt-[24px]"> 
                                                    <p className="text-14 text-center  text-textColorSecondary leading-[1.6]  ">{text.description}</p>
                                                </div>
                                                {index === 0 ? <ProcessLineAnim1 /> : ''}
                                                {index === 1 ? <ProcessLineAnim2 /> : ''}
                                                {index === 2 ? <ProcessLineAnim3 /> : ''}
                                                {index === 3 ? <ProcessLineAnim4 /> : ''}
                                                {/* {index === 4 ? '4' : ''} */}
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div className={` text-white w-full md:w-1/2 md:p-2 py-[8px]  items-center relative ${Nutty}`} key={index}>
                                            <div className=" border-[#262626] relative h-full border-[1px] bg-bgSecondary rounded-[16px] md:p-32 p-24">
                                                <div className=" w-full text-center flex flex-col justify-center items-center">
                                                    <h2 className="pb-[24px] md:text-20 text-18 text-center   text-white font-bold">{text.title}</h2>
                                                    {/* <Image src={text.animationSvg.sourceUrl} alt="Discover" width="420" height="330" className="  max-w-[232px] max-h-[190px]" /> */}
                                                    <Player
                                                        renderer={"canvas"}
                                                        rendererSettings={{clearCanvas: true}} // Clears on re-draw
                                                        autoplay
                                                        loop
                                                        src={processicon}
                                                        style={{ height: '300px', width: '300px' }}
                                                        >
                                                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                                                    </Player>
                                                </div>
                                                <div className="w-full pt-[24px]">
                                                    <p className=" text-14 text-center  text-textColorSecondary leading-[1.6]">{text.description}</p>
                                                </div>
                                                {index === 0 ? <ProcessLineAnim1 /> : ''}
                                                {index === 1 ? <ProcessLineAnim2 /> : ''}
                                                {index === 2 ? <ProcessLineAnim3 /> : ''}
                                                {index === 3 ? <ProcessLineAnim4 /> : ''}
                                                {/* {index === 4 ? '4' : ''} */}
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default NuttyProcess;