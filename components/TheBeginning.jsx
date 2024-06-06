import Image from "next/image";
import SquirrelImages from "@/assets/images/squirrel-2.svg";

const TheBeginning = ({beginningData}) => {
  
    return (
        <div className="thebeginning_section overflow-hidden relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                {beginningData?.title &&
                    <h1 className="titleText pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-24" dangerouslySetInnerHTML={{__html: beginningData.title }} ></h1>
                }

                {beginningData?.content &&
                    <div className="thebeginning_row flex justify-end">
                        
                        <div className="w-full 3xl:w-8/12  xl:w-8/12   flex flex-col gap-y-16 2xl:gap-y-32 xl:gap-y-28 md:gap-y-20 relative">
                        {beginningData.image &&
                        <div className="squirrel-bg absolute 4xl:pr-106 3xl:pr-80 2xl:pr-[72px] xl:pr-60 right-[100%]   h-full items-end justify-end w-full 2xl:pb-0 xl:pb-44 xl:flex hidden">
                            <Image src={beginningData.image.sourceUrl} alt="SquirrelImages" width="652" height="526" className=" 4xl:w-[652px] 3xl:w-[543px] 2xl:w-[490px] xl:w-[434px] h-auto "  />
                        </div>
                        }
                            {beginningData.content.map((text,index) => {
                                return(
                                    <div className="para text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary" key={index} dangerouslySetInnerHTML={{__html:text.beginningContentSingle
                                    }}></div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default TheBeginning;