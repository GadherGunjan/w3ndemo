import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import latestinsightImage from '@/assets/images/latestinsight-image.png'

const LatestInsightBox = ({latestData}) => {
    const [hover, setHover] = useState(false)
    
    const hoverHandler = () => {
        setHover(!hover);
    }

    const hoverLeaveHangler = () => {
        setHover(false);
    }    

    if(latestData){
    return (
        <>
        <Link href={`/blog${latestData?.link}`} onMouseEnter={hoverHandler} onMouseLeave={hoverLeaveHangler} >
            <div className={`image-container  ${hover? 'hover' : 'false' } `}>
                {latestData?.image &&
                    <div className="overflow-hidden rounded-[40px] h-[330px] lg:h-[420px] image-wrapper" >
                        <Image src={latestData.image} width="620" height="420" className="h-full w-full image" alt="latestinsightImage" />
                    </div>
                }
            </div>
            <div className="lg:pt-44 pt-[32px]">
                {latestData?.category.map((value, index)=>(
                    <>
                    {value?.textcat &&
                    <span className="text-18 text-[#818181] font-light capitalize" key={index}>{value.textcat}</span>
                    }
                    </>
                ))}
                <h3 className="text-[22px] lg:text-32 text-[#E0E0E0] pt-4">{latestData.title}</h3>
            </div>
        </Link>
        </>
    )
    }
}
export default LatestInsightBox;