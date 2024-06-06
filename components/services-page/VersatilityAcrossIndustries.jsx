import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import SplitText from "../SplitText";

const VersatilityAcrossIndustries = (props) => {
    const data = props.versatilityacrossindustriesdata;
    
    const [activeTab, setActiveTab] = useState(data?.viracrossdata[0]?.value);

    return (
        <>
        {(data?.title != '' || data?.viracrossdata?.length > 0) &&
            <div className="py-20 4xl:py-96 2xl:py-64 xl:py-36 md:py-28 relative">
                <div className="container">
                    {data.title &&
                        <div className="titlesub">
                            <h1 className="text-32 4xl:text-96 3xl:text-80 2xl:text-72 md:text-64 titleText">
                                <SplitText copy={data.title} />
                            </h1>
                        </div>
                    }
                    <div className="">
                        <Tabs value={data?.viracrossdata[0].value} className="mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24 mobile-hidden-scroll"
                            tabindicatorprops={{
                                style: {
                                backgroundColor: "#D97D54"
                                }
                            }}
                        >
                            <TabsHeader className="gap-x-16 2xl:gap-x-32 xl:gap-x-28 md:gap-x-20 rounded-none border-b-solid  border-b-2 border-b-linecolor tab-panal-mobile md:border-b-solid md:border-b md:border-b-linecolor"
                                indicatorProps={{
                                    className:
                                    "bg-themeRed opacity-1 border-none w-full h-[1px] bottom-[-1px] top-auto border-blue-500 shadow-none rounded-none z-50",
                                }}
                            >
                                {data?.viracrossdata.map(({ label, value }) => (
                                    <Tab 
                                        key={value} 
                                        value={value} 
                                        className="w-auto  "
                                        onClick={() => setActiveTab(value)}
                                    >
                                        <div className={`cursor-pointer pb-14 4xl:pb-24 xl:pb-20 md:pb-16 flex items-center  ease-in-out duration-300 text-14 4xl:text-20 3xl:text-18 md:text-16   text-nowrap whitespace-nowrap  ${activeTab === value ? "text-white " : "text-tertiary font-normal"}`}>
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
                                {data?.viracrossdata.map(({ value, desc }) => (
                                    <TabPanel className="p-0 pt-20 4xl:pt-96 2xl:pt-64 xl:pt-36 md:pt-28   " key={value} value={value}>
                                        <div className="flex justify-center gap-x-18 4xl:gap-x-64 2xl:gap-x-48 xl:gap-x-32 md:gap-x-24   gap-y-16 4xl:gap-y-32 xl:gap-y-28 md:gap-y-20 flex-wrap text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20">
                                            {desc}
                                        </div>
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default VersatilityAcrossIndustries;