
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageTitle from "@/components/layout/PageTitle";
import OurFundamentalTenent from "@/components/OurFundamentalTenent";
import AdvantageDevelopment from "@/components/services-page/AdvantageDevelopment";
import CTA from "@/components/layout/CTA";
import WhatClientSpeak from "@/components/WhatClientSpeak";
import QuickFacts from "@/components/layout/QuickFacts";
import TheHiringProcess from "@/components/TheHiringProcess";
import Faqs from "@/components/Faqs";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";


export default function HireDedicatedResources() {

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    const { hireteamPageDataApi } = useContext(ApiContext);
    const [hireTeamData, sethireTeamData] = hireteamPageDataApi;

    const [pageTitleData, setPageTitleData] = useState(null);
    const [ourfundamentalData, setOurfundamentalData] = useState(null);
    const [AdvantageData, setAdvantageData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [quickfactData, setQuickData] = useState(null);
    const [hiringsData, setHiringData] = useState(null);
    const [faqpageData, setFaqsData] = useState(null);

    useEffect(() => {
        if(hireTeamData){
            if (tellusPageData !== null) {

                const SociallinkData = [];
                tellusPageData?.themeSettings?.socialLinksFooter?.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        icon: item.iconSingle.sourceUrl,
                        link: item.linkSingle,
                        alt: 'image',
                    }
                    SociallinkData.push(dataObj)
                });
                settellUsData({
                    heading: tellusPageData.themeSettings.footerFormHeading,
                    subheading: tellusPageData.themeSettings.footerFormSubheading,
                    description: tellusPageData.themeSettings.footerFormDescription,
                    email: tellusPageData.themeSettings.footerFormEmail,
                    skype: tellusPageData.themeSettings.footerFormSkype,
                    phonenumber: tellusPageData.themeSettings.footerFormWhatsappmobile,
                    followus: tellusPageData.themeSettings.footerFormFollowUsText,
                    formshortcode: tellusPageData.themeSettings.footerFormFormShortcode,
                    sociallinks: SociallinkData,
                    serviceslist: tellusPageData.themeSettings.servicesListAboutform,
                    projectBudgetlist: tellusPageData.themeSettings.projectBudgetListForm,
                })
            }
        }
        
    }, [tellusPageData,hireTeamData])

    useEffect(() => {
        if(hireTeamData){
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
                })
            }
        }
    }, [tellusPageData, portfolioPageData,hireTeamData])

    useEffect(() => {
        if (hireTeamData !== null) {

            setPageTitleData({
                title: hireTeamData?.hireOptions?.bannerHeading || '',
                subtitle: hireTeamData?.hireOptions?.bannerSubHeading || '',
                haslogo: '',
                type: 'smallbig',
                description: hireTeamData?.hireOptions?.bannerDescription || '',
            })

            const FundamentalData = [];
            hireTeamData?.hireOptions?.whyHireInfo?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    number: i + 1,
                    title: item?.heading || '',
                    description: item?.description || '',
                }
                FundamentalData.push(dataObj)
            });

            setOurfundamentalData({
                title: { __html: hireTeamData?.hireOptions?.whyHireHeading } || '',
                subtitle: { __html: hireTeamData?.hireOptions?.whyHireDescription } || '',
                FundamentalData: FundamentalData || '',
            })

            setAdvantageData({
                advantageTitle: hireTeamData?.hireOptions?.advantageHeading || '',
                advantageTitle2: hireTeamData?.hireOptions?.advantageHeadingTwo || '',
                contentRepeater: hireTeamData?.hireOptions?.advantagesInfo || '',
            })

            setCtaData({
                cta2Heading: hireTeamData?.hireOptions?.ctaHeading || '',
                cta2Description: hireTeamData?.hireOptions?.ctaDescription || '',
                cta2ButtonInfo: hireTeamData?.hireOptions?.ctaButtonInfo || '',
            })

            const QuickData = [];
            hireTeamData?.hireOptions?.benefitsInfo?.map((item, i) => {
                const dataObj = {
                    value: i,
                    textfact: item.text || '',
                }
                QuickData.push(dataObj)
            });

            setQuickData({
                title: { __html: hireTeamData?.hireOptions?.benefitsHeading } || '',
                QuickData: QuickData || '',
            })

            const hiringsData = [];
            hireTeamData?.hireOptions?.hiringProcessInfo?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    intitle: item.heading || '',
                    description: { __html: item.description || '' },
                }
                hiringsData.push(dataObj)
            });

            setHiringData({
                title: { __html: hireTeamData?.hireOptions?.hiringHeading },
                subtitle: { __html: hireTeamData?.hireOptions?.hiringDescription },
                HiringData: hiringsData || '',
            })

            const faqdtlData = [];
            hireTeamData?.hireOptions?.faqInfo?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    title: item.heading || '',
                    description: item.description || '',
                }
                faqdtlData.push(dataObj)
            });

            setFaqsData({
                title: hireTeamData?.hireOptions?.faqHeading || '',
                subtitle: hireTeamData?.hireOptions?.faqHeading2 || '',
                FaqsAcc: faqdtlData || '',
            })

        }
    }, [hireTeamData])
    
    return (
            <Layout>
            {
                (pageTitleData?.title != null || pageTitleData?.subtitle != null || pageTitleData?.description != null) && 
                <PageTitle pageTitleData={pageTitleData} />
            }
            {
                (ourfundamentalData?.title != null || ourfundamentalData?.subtitle != null) && 
                <OurFundamentalTenent Ourfundamentaldata={ourfundamentalData} />
            }
            {
                (AdvantageData?.advantageTitle != null || AdvantageData?.advantageTitle2 != null || AdvantageData?.contentRepeater != null) &&
                <AdvantageDevelopment advantagedata={AdvantageData} />
            }
            {
                (ctaData?.cta2ButtonInfo != null || ctaData?.cta2Description != null || ctaData?.cta2Heading != null) &&
                <CTA link={ctaData?.cta2ButtonInfo?.url} text={ctaData?.cta2Description} title={ctaData?.cta2Heading} linktext={ctaData?.cta2ButtonInfo.title} textcase="" />
            }

            {
                (whatClientSpeak?.testimonialFirstTitle != null || whatClientSpeak?.testimonialSecondTitle != null || whatClientSpeak?.selectTestimonials != null) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />
            
            }
            {
                (quickfactData?.title != null || quickfactData?.QuickData?.length > 0) &&
                <QuickFacts quickfactsdata={quickfactData} />
                
            }
            {
                (hiringsData?.title?.__html != null || hiringsData?.subtitle?.__html != null ) &&
                <TheHiringProcess thehiringprocessdata={hiringsData} />
            }
            {
                (faqpageData?.title != null || faqpageData?.FaqsAcc != null || faqpageData?.FaqsAcc?.length > 0) &&
                <Faqs faqsdata={faqpageData} />
            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
            </Layout>

    )
}