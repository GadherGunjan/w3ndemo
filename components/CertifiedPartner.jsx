
import Image from "next/image";
import wordpressVIPImage from "@/assets/images/wordpress-vip-partners.png"
import wooExpertsImage from "@/assets/images/wooexperts.png"
import SplitText from "./SplitText";

const CertifiedPartner = ( {partnerData} ) => {

    if( partnerData.partnerImages.length > 0 ){
        return (
            <div className="cerifiedpartners py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 justify-title has-block-span">
                <div className="container">
                    <h1 className="titleText text-center flex justify-center" 
                    // dangerouslySetInnerHTML={{__html:partnerData.partnerHeading}}
                    >
                        <SplitText copy={partnerData.partnerHeading} role="heading" />
                    </h1>
                    <div className="w-10/12 text-center mx-auto    py-18 4xl:py-64 2xl:py-48 xl:py-32 md:py-24 ">
                        <div className="imagesbox flex flex-row   items-center justify-center 
                        
                        4xl:[&>*:nth-child(1n+2)]:ml-64 
                        2xl:[&>*:nth-child(1n+2)]:ml-48 
                        xl:[&>*:nth-child(1n+2)]:ml-32 
                        md:[&>*:nth-child(1n+2)]:ml-32 
                        [&>*:nth-child(1n+2)]:ml-18  
                        
                        "> 
                            {partnerData.partnerImages.map((item, i) => {
                                return(
                                    <Image key={i} src={item.partnerImage.sourceUrl} width={330} height={110} alt={item.partnerImage.altText} className=" w-auto h-auto   max-w-[155px]  max-h-[75px]    4xl:max-w-[330px] 4xl:max-h-[200px] 3xl:max-w-[271px] 3xl:max-h-[166px] 2xl:max-w-[245px] 2xl:max-h-[150px] xl:max-w-[226px] xl:max-h-[133px] md:max-w-[233px] md:max-h-[142px]  " />
                                )
                            })}
                            {/*<Image src={wordpressVIPImage} alt="wordpress vip partners" />
                            <Image src={wooExpertsImage} alt="woo experts partners" />*/}
                        </div>
                    </div>
                    <p className="text-textColorSecondary max-w[100%] 3xl:max-w-[75%] 2xl:max-w-[80%] ml-auto mr-auto text-14 4xl:text-20 3xl:text-18 md:text-16  leading-[1.8] md:leading-[1.8]  xl:leading-[1.6] text-center">
                        {partnerData.partnerDescription}
                    </p>
                </div>
            </div>
        )
    }else{
        return '';
    }
}

export default CertifiedPartner;