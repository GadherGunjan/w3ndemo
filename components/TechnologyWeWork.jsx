import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import MobileTechnoTabs from "./technology/MobileTechnoTabs";
import { useState } from "react";
import SplitText from "./SplitText";

const TechnologyWeWork = ( {technologyData} ) => {


    const data = [];

    
    technologyData.technologiesInfo.map((item, i) => {
        let item_count = (i + 1);
        if( item_count <= 9 ){
            item_count = '0' + item_count;
        }
        const dataObj = {
            label: item.heading,
            value: item_count,
            desc: MobileTechnoTabs(item.technologyInfo),
        }
        data.push(dataObj)
    });
    
    const [activeTab, setActiveTab] = useState(data[0].value);

    return (
        <div className="technologywework py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                <h1 className="titleText text-center justify-title has-block-span" 
                //dangerouslySetInnerHTML={{__html:technologyData.techHeading}}
                >
                    <SplitText copy={technologyData.techHeading} role="heading" />
                </h1>
                {/* <h1>asdasdasd</h1> */}
                {/* <Tabs value="Mobile" className="mt-96"
                    tabindicatorprops={{
                        style: {
                          backgroundColor: "#D97D54"
                        }
                    }}
                >
                    <TabsHeader className="justify-center"
                        indicatorProps={{
                            className:
                              "bg-themeRed opacity-1 border-none w-full h-[1px] bottom-[-1px] top-auto border-blue-500 shadow-none rounded-none z-50",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="w-auto border-b-solid border-b border-b-linecolor"
                            onClick={() => setActiveTab(value)}
                            >
                                <div className={`cursor-pointer px-8 flex items-center pb-[48px] font-workSans ease-in-out duration-300 ${activeTab === value ? "text-white font-medium" : "text-tertiary font-normal"}`}>
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 50 },
                            mount: { y: 0 },
                            unmount: { y: 50 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                <div className="w-10/12 mx-auto flex justify-center gap-x-16 gap-y-8 pt-96 flex-wrap">
                                    {desc}
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs> */}

                <Tabs value={data[0].value} className="4xl:mt-96 3xl:mt-[84px] xl:mt-64 mt-24 mobile-hidden-scroll"
                    tabindicatorprops={{
                        style: {
                          backgroundColor: "#D97D54"
                        }
                    }}
                >
                    <TabsHeader className="md:justify-center rounded-none border-b-solid  border-b-2    border-b-linecolor  md:border-b-solid  md:border-b-0  tab-panal-mobile justify-center"
                        indicatorProps={{
                            className:
                              "bg-themeRed opacity-1 border-none w-full h-[1px] bottom-[-1px] top-auto border-blue-500 shadow-none rounded-none z-50",
                        }}
                    >
                        {data.map(({ label, value }) => (
                            <Tab 
                                key={value} 
                                value={value} 
                                className="w-auto md:border-b-solid md:border-b md:border-b-linecolor "
                                onClick={() => setActiveTab(value)}
                            >
                                <div className={`cursor-pointer px-16 pb-16 2xl:px-32 xl:px-28 md:px-20  4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24   flex items-center  font-workSans ease-in-out duration-300 text-14 4xl:text-20 3xl:text-18 md:text-16   text-nowrap whitespace-nowrap  ${activeTab === value ? "text-white font-medium" : "text-tertiary font-normal"}`}>
                                    {label}
                                </div>
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody className=""
                        animate={{
                            initial: { y: 50 },
                            mount: { y: 0 },
                            unmount: { y: 50 },
                        }}
                    >
                        {data.map(({ value, desc }) => (
                            <TabPanel className=" p-0 pt-20 4xl:pt-96 2xl:pt-64   xl:pt-36 md:pt-28   " key={value} value={value}>
                                <div className="w-full min-h-[180px] lg:min-h-[220px] 3xl:min-h-[330px] 4xl:min-h-[460px] flex lg:w-11/12 4xl:w-10/12  mx-auto  justify-center gap-x-18 4xl:gap-x-64 2xl:gap-x-48 xl:gap-x-32 md:gap-x-24   gap-y-16 4xl:gap-y-32 xl:gap-y-28 md:gap-y-20    flex-wrap">
                                    {desc}
                                </div>
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    )
}

export default TechnologyWeWork;