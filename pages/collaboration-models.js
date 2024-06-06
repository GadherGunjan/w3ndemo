
import DefaultLayout from "@/components/layout/DefaultLayout"
import CollobrateTop from "@/components/CollobrateTop";
import AdaptableAssociations from "@/components/AdaptableAssociations";
import WaysToWorkWithUs from "@/components/WaysToWorkWithUs";
import CollobrateImage from "@/assets/images/collaborat-image.jpg";
import CTA from "@/components/layout/CTA";
import WhatClientSpeak from "@/components/WhatClientSpeak";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";

export default function CollaborationModels() {

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    const { collaborationPageDataApi } = useContext(ApiContext);
    const [collaborationData, setcollaborationData] = collaborationPageDataApi;

    const [pageTitleData, setPageTitleData] = useState(null);
    const [associationsData, setAssociationsData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [waystowork, setwaystoworkData] = useState(null);

    useEffect(() => {
        if (collaborationData) {
            if (tellusPageData !== null) {

                const SociallinkData = [];
                tellusPageData.themeSettings.socialLinksFooter.map((item, i) => {
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
        
    }, [tellusPageData,collaborationData])

    useEffect(() => {
        if (collaborationData) {
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData.themeGeneralSettings.themeSettings.testimonialFirstTitle,
                    testimonialSecondTitle: portfolioPageData.themeGeneralSettings.themeSettings.testimonialSecondTitle,
                    testimonialsbuttonInfo: portfolioPageData.themeGeneralSettings.themeSettings.testimonialsbuttonInfo,
                    selectTestimonials: portfolioPageData.themeGeneralSettings.themeSettings.selectTestimonials,
                })
            }
        }
    }, [tellusPageData, portfolioPageData,collaborationData])

    useEffect(() => {
        if (collaborationData !== null) {

            setPageTitleData({
                title: collaborationData?.collaborationPageOptions?.bannerHeading || '',
                subtitle: collaborationData?.collaborationPageOptions?.bannerSubHeading || '',
                haslogo: '',
                type: 'smallbig',
                description: '',
            })

            setAssociationsData({
                title: { __html: collaborationData?.collaborationPageOptions?.whyUsHeading || '' },
                subtitle: collaborationData?.collaborationPageOptions?.whyUsSubheading || '',
                description: collaborationData?.collaborationPageOptions?.whyUsDescription || ''
            })

            setCtaData({
                cta2Heading: collaborationData?.collaborationPageOptions?.ctaHeading || '',
                cta2Description: collaborationData?.collaborationPageOptions?.ctaSubheading || '',
                cta2ButtonInfo: collaborationData?.collaborationPageOptions?.ctaButtonInfo || '',
            })

            const workData = [];
            collaborationData?.collaborationPageOptions?.waysToWorkWithUs?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    title: item.heading || '',
                    image: item.image?.sourceUrl || '',
                    description: item.description || '',
                }
                workData.push(dataObj)
            });

            setwaystoworkData({
                title: { __html: collaborationData?.collaborationPageOptions?.waysToHeading || '' },
                subtitle: collaborationData?.collaborationPageOptions?.waysToDescription || '',
                waytoworksubdata: workData || ''
            })

        }
    }, [collaborationData])

    return (
        <Layout>
            {
                (pageTitleData?.title != null || pageTitleData?.subtitle != null) && 
                <CollobrateTop collobratetopdata={pageTitleData} />
            }
            {
                (associationsData?.title?.__html != null || associationsData?.subtitle != null || associationsData?.description != null) && <AdaptableAssociations adaptableassociationsdata={associationsData} />
            }
            {
                (waystowork?.title?.__html != null || waystowork?.waytoworksubdata?.length > 0 || waystowork?.subtitle != null) &&
                <WaysToWorkWithUs waystoworkwithusdata={waystowork} />
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
                (tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />
            }
        </Layout>
    )
}