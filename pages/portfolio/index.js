import DefaultLayout from "@/components/layout/DefaultLayout"
import PageTitle from "@/components/layout/PageTitle";
import WorkPortfolio from "@/components/WorkPortfolio";
import CTA from "@/components/layout/CTA";
import WhatClientSpeak from "@/components/WhatClientSpeak";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";
import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";

export default function Portfolio() {

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;

    const {tellusPageDataApi} = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const [headingData, setHeadingData] = useState(null);
    const [portfoliodata, setPortfoliodata] = useState(null);
    const [catData, setCatData] = useState(null);
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    useEffect(() => {
        if(portfolioPageData){
            if (tellusPageData !== null) {
                
                const SociallinkData = [];
                tellusPageData?.themeSettings?.socialLinksFooter.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        icon:item?.iconSingle?.sourceUrl || '',
                        link: item?.linkSingle || '',
                        alt: 'image',
                    }
                    SociallinkData.push(dataObj)
                });
                settellUsData({
                    heading : tellusPageData?.themeSettings?.footerFormHeading || '',
                    subheading : tellusPageData?.themeSettings?.footerFormSubheading || '',
                    description : tellusPageData?.themeSettings?.footerFormDescription || '',
                    email : tellusPageData?.themeSettings?.footerFormEmail || '',
                    skype : tellusPageData?.themeSettings?.footerFormSkype || '',
                    phonenumber : tellusPageData?.themeSettings?.footerFormWhatsappmobile || '',
                    followus:tellusPageData?.themeSettings?.footerFormFollowUsText || '',
                    formshortcode :tellusPageData?.themeSettings?.footerFormFormShortcode || '',
                    sociallinks:SociallinkData || '',
                    serviceslist:tellusPageData?.themeSettings?.servicesListAboutform || '',
                    projectBudgetlist:tellusPageData?.themeSettings?.projectBudgetListForm || '',
                })
            }
        }
    }, [tellusPageData,portfolioPageData])

    useEffect(() => {
        if (portfolioPageData !== null) {
            setHeadingData({
                title : portfolioPageData?.page?.template?.portfolioPageOptions?.heading || '',
                subtitle:portfolioPageData?.page?.template?.portfolioPageOptions?.heading2 || '',
                haslogo : '',
                type : 'smallbig',
            })
            setPortfoliodata({
                portfoliodata: portfolioPageData?.page?.template?.portfolioPageOptions?.selectPortfolio || '',
            })
            setCatData({
                callToActionHeading: portfolioPageData?.page?.template?.portfolioPageOptions?.callToActionHeading || '',
                callToActionDescription: portfolioPageData?.page?.template?.portfolioPageOptions?.callToActionDescription || '',
                callToActionButtonInfo: portfolioPageData?.page?.template?.portfolioPageOptions?.callToActionButtonInfo || '',
            })
            setWhatClientSpeak({
                testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
            })
        }

    }, [portfolioPageData])

    return (
        <Layout>
            {
                (headingData?.title != null || headingData?.subtitle != null) && 
                <PageTitle pageTitleData={headingData} />
            }
            {
                (portfoliodata != null) && <WorkPortfolio portData={portfoliodata} />
            }
            {
                (portfoliodata != null) && <CTA link={catData.callToActionButtonInfo.url} text={catData.callToActionDescription} title={catData.callToActionHeading} linktext={catData.callToActionButtonInfo.title} />
            }
            {(whatClientSpeak != null) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />

            }
            
            { (tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}

        </Layout>
    )
}

