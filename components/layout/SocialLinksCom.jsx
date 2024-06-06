
import Link from "next/link";
import Image from "next/image";
const SocialLinksCom = (props) => {
    return (
        <Link href={props.link} className="zoombtn flex items-center justify-center w-[40px] h-[40px]  3xl:w-[48px] 3xl:h-[48px] md:w-[44px] md:h-[44px] rounded-full border border-solid border-linecolor">
            <Image src={props.icon} alt={props.alt} height={22} width={22} />
        </Link>
    )
}

export default SocialLinksCom;