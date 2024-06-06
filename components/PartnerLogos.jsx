import Image from "next/image";
// import SnickersLogo from "@/assets/images/snickers.svg";
// import WhiteageLogo from "@/assets/images/whitepage.svg";
// import AdidasLogo from "@/assets/images/adidas.svg";
// import BataLogo from "@/assets/images/bata.svg";
// import ToyotaLogo from "@/assets/images/toyota.svg";
// import PfizerLogo from "@/assets/images/pfizer.svg";

const PartnerLogos = ( {logosInfo} ) => {
    
    if( logosInfo.length > 0 ){
        return (
            <div className="partner_logos relative md:py-0 py-[24px]" >
                <div className="container flex items-center justify-center 2xl:justify-between pt-5 pb-5 flex-wrap">
                    {logosInfo.map((item, i) => {
                        return(
                            <Image key={i} src={item.logo.sourceUrl} width={220} height={100} alt={item.logo.altText} className="max-w-[33.33%] h-auto 4xl:w-[220px] 3xl:w-[200px] 2xl:w-[190px] xl:w-[140px] lg:w-[130px] md:w-[190px]  w-[33.333%]"  />
                        )
                    })}
                </div>
            </div>
        )
    }else{
        return '';
    }
}

export default PartnerLogos;