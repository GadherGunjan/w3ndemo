import Image from "next/image"

const WhyWorkCard = (props) => {
    let workcard = `positiontop-${props.i}`
    return (
        <div className={`whywork_card w-full bg-bgSecondary     3xl:rounded-[40px] md:rounded-[16px]  rounded-[16px]   lg:rounded-[30px]   md:border-0  border-[1px]  border-[#262626] py-16 2xl:py-32 xl:py-28 md:py-20 px-14 4xl:px-24 xl:px-20 md:px-16  ${workcard}`}>
            {props.icon && 
                <div className="iconbox w-44 h-44  4xl:w-80 4xl:h-80 3xl:w-64 3xl:h-64 2xl:w-60 2xl:h-60 xl:w-54 xl:h-54 md:w-48 md:h-48  flex items-center justify-center bg-linecolor rounded-full xl:ml-[8px] mb-16 2xl:mb-32 xl:mb-28 md:mb-20 text-textprimary">
                    <Image src={props.icon} alt="DotBgImg" width="40" height="40" />
                </div>
            }
            {props.title &&
                <h4 className="font-workSans font-semibold   text-15 4xl:text-24 3xl:text-20 md:text-18   text-textprimary">{props.title}</h4>
            }
            {props.description && 
                <p className="text-textColorSecondary  text-14 4xl:text-20 3xl:text-18 md:text-16  pt-14 4xl:pt-24 xl:pt-20 md:pt-16   leading-[1.5]">{props.description}</p>
            }
        </div>
    )
}

export default WhyWorkCard;