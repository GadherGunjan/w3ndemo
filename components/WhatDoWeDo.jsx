
import WhatweWhatdoCard from "./layout/WhatweWhatdoCard";
import { useState,useEffect } from "react";
const WhatDoWeDo = ( {whatWeData} ) => {
    
    return (
        <div className="whatdowedo_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                <div className="whatrow flex xl:flex-row flex-col">
                    {whatWeData?.title &&
                        <div className="w-full  xl:w-4/12 xl:pb-0 pb-[4px]">
                            <h1 className="titleText pb-0 xl:pb-48 relative  top-auto lg:sticky lg:top-[80px]" dangerouslySetInnerHTML={{__html: whatWeData.title }}></h1>
                        </div>
                    }
                    {whatWeData?.whatwedata &&
                        <div className="w-full  xl:w-8/12 flex flex-col  ">
                            <WhatweWhatdoCard WhatDoWeDoData={whatWeData.whatwedata} />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default WhatDoWeDo;