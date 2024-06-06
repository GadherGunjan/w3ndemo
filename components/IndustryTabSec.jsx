import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";
import IndustrySpecImg from '@/assets/images/industry-spec-img.png'
import FinancialServicesIcon from '@/assets/images/FinancialServices.svg'

import { useState , useEffect, useRef } from "react";
import ThemeButton from "./layout/ThemeButton";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import FinanceServiceIcon from "@/assets/images/svgs/FinanceServiceIcon";
import SplitText from "./SplitText";

const IndustryTabSec = ( {industryData} ) => {

    gsap.registerPlugin(ScrollTrigger);

    const pinWrapRef = useRef(null);
    const panelItems = useRef([])

    panelItems.current = []

    const addToRefs = el => {
        if (el && !panelItems.current.includes(el)) {
            panelItems.current.push(el)
        }
    }
    
    const data = [];

    if( industryData?.solutionInfo?.length > 0 ){
        industryData?.solutionInfo.map((item, i) => {
            const dataObj = {
                label : item.heading,
                value : item.heading,
                desc : item.description,
                icon : item.iconSolutions,
            }
            data.push(dataObj)
        });
    }
    
    const [activeTab, setActiveTab] = useState(data[0]?.value);

    if(industryData?.solutionHeading != '' || industryData?.solutionInfo?.length > 0){
    return (
        <div className="industrytab-sec py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 has-block-span"  ref={pinWrapRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <h1 className="titleText center-align mb-16 xl:mb-0 flex md:items-start md:justify-start justify-center  items-center   w-full  " 
                    //dangerouslySetInnerHTML={{__html:industryData.solutionHeading}}
                    >
                    <SplitText copy={industryData.solutionHeading} role="heading" />
                    </h1>
                    <div className="min-w-[167px] lg:block hidden">
                        <ThemeButton link={industryData.solutionButtonInfo.url} buttontext={industryData.solutionButtonInfo.title} className="btnoutline" />
                    </div>
                </div>
                {(data.length > 0) &&
                    <Tabs value={data[0].value} orientation="vertical" className="md:grid  flex md:flex-row flex-col grid-cols-12  mt-20 4xl:mt-96 3xl:mt-48 mobile-hidden-scroll"
                        tabindicatorprops={{
                            style: {
                            backgroundColor: "#D97D54"
                            }
                        }}
                    >
                        <div className="col-start-1 col-end-5 xl:col-end-4">
                            <TabsHeader className="md:flex-col flex-row tab-panal-mobile    rounded-[0px]  border-b-solid  border-b-2    border-b-linecolor  md:border-b-solid  md:border-b-0 "
                                indicatorProps={{
                                    className:
                                    "bg-themeRed border-none left-auto h-full w-[1px] right-0 top-0 border-blue-500 shadow-none rounded-none",
                                }}
                            >
                                {data.map(({ label, value, icon }) => (
                                    <Tab 
                                        key={value} 
                                        value={value}
                                        onClick={() => setActiveTab(value)}
                                        className="p-0 block"
                                        ref={addToRefs}
                                    >
                                    
                                        <div className={`cursor-pointer border-r-solid md:border-r-2   md:border-r-linecolor    flex items-center py-16 xl:py-16 3xl:py-32 2xl:py-[20px] font-workSans text-14 4xl:text-20 3xl:text-18 md:text-16  ease-in-out duration-300 text-nowrap  ${activeTab === value ? "text-white font-medium" : "text-tertiary font-normal"}`}>
                                            <i className={`ease-in-out duration-300 xl:me-3 2xl:me-6 me-2 ${activeTab === value ? "text-white" : "text-tertiary"}`} dangerouslySetInnerHTML={{__html:icon}}></i>
                                            {label}
                                        </div>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </div>
                        <div className="col-start-6 col-end-13 xl:col-end-12 xl:col-start-5">
                            <TabsBody className="h-full"
                                animate={{
                                    initial: { y: 250, opacity: 0, },
                                    mount: { y: 0 ,opacity: 1, },
                                    unmount: { y: 250 , opacity: 0, },
                                }}
                                transition={{ duration: 1.5 }}
                                
                            >
                                {data.map(({ value, desc }) => (
                                    <TabPanel key={value} value={value} className="py-0 md:py-0 md:pt-0 pt-[24px] flex items-center flex-col h-full 3xl:px-4 px-0">
                                        {/* <h4 className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20" dangerouslySetInnerHTML={{__html:desc}}></h4> */}
                                        <div className="w-full tabsec-img_main">
                                            <div className="tabs-icon">
                                                <Image src={FinancialServicesIcon} alt="FinancialServicesIcon" />
                                            </div>
                                            <div className="max-w-[797px] overflow-hidden rounded-r-40 tabsec-img">
                                                <Image src={IndustrySpecImg} alt="Image" />
                                            </div>
                                        </div>
                                        <div className="tabsec-text_main">
                                            <p className="text-32 leading-[52px] text-textprimary">Stay informed with precise financial reports that help you make data-driven decisions.</p>
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </div>
                    </Tabs>
                }
            </div>
            {industryData?.solutionButtonInfo &&
                <div className="min-w-[167px] lg:hidden  flex justify-center md:mt-48 mt-24 ">
                    <ThemeButton link={industryData.solutionButtonInfo.url} buttontext={industryData.solutionButtonInfo.title} className="btnoutline" />
                </div>
            }
        </div>
    )
    }
}
export default IndustryTabSec;