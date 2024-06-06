
import Link from "next/link";
import Image from "next/image";
const PortfolioCard = (props) => {
    return (
        <div className={`max-w-full 2xl:max-w-[calc(800px+96px)] xl:max-w-[calc(800px+40px)] lg:max-w-[calc(700px+40px)] md:max-w-[calc(570px+40px)]   2xl:px-[calc(96px/2)] md:px-[calc(60px/2)] px-0 protrfolio_card relative ${props.className}`}>
            <Link href={props.link} className="block relative w-full">
                <div className="imagebox portfoliocardbox h-[27vh] xl:h-[40vh] mx-auto md:rounded-[20px] rounded-[16px] xl:rounded-[20px] 3xl:rounded-[40px] overflow-hidden relative ">
                    <Image className="w-full h-full object-cover" src={props.imageURL} width={580} height={382} alt={props.title} />
                </div>
                <div className="portfolio_detail md:hidden block md:text-center text-left ">
                    <h2 className=" text-18 pt-18 pb-14   font-extrabold text-white">{props.title}</h2>
                    <p className=" text-15 text-textColorSecondary">{props.description}</p>
                </div>
            </Link>
        </div>
    )
}

export default PortfolioCard;