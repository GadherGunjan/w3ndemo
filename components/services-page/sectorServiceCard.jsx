import Link from "next/link";
import RightArrowIconServices from "@/assets/images/svgs/rightArrowiconServices";
/* const sectorServiceCard = (props) => {
    return (
        <div className="service_card">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default sectorServiceCard; */


const SectorServiceCard = (props) => {
    return (
        <div className="service_card group border-t border-solid border-t-linecolor  ">
         <Link href={props.link} className="flex text-textprimary flex-col group-hover:text-themeRed   w-full pt-14 4xl:pt-24 xl:pt-20 md:pt-16 ">
                <h2 className=" text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-semibold text-textprimary pb-16 2xl:pb-32 xl:pb-28 md:pb-20   group-hover:text-themeRed transition-all duration-300">
                    {props.title}
                </h2>
                <p className=" text-14  4xl:text-18  3xl:text-16 md:text-15 text-textColorSecondary  group-hover:text-textprimary transition-all duration-300 ">
                    {props.description}
                </p>
                <div className="arrowlink flex mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24 ">
                    <div className=" 4xl:w-32 3xl:w-26 xl:w-24  md:w-20 w-18 ">
                        <RightArrowIconServices className />
                    </div>  
                </div>
            </Link>
        </div>
    )
}

export default SectorServiceCard;