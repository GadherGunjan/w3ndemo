
import DefaultLayout from "@/components/layout/DefaultLayout"
import PageTitle from "@/components/layout/PageTitle";
import CasestudyPageSec from "@/components/casestudypageSec";
import casestudyImage1 from '@/assets/images/portfolio-image-1.jpg'
import CTA from "@/components/layout/CTA";
import WhatClientSpeak from "@/components/WhatClientSpeak";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";


export default function CaseStudy() {

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    const { caseStudiesPageDataApi } = useContext(ApiContext);
    const [caseStudiesPageData, setcaseStudiesPageData] = caseStudiesPageDataApi;

    const [pageTitleData, setPageTitleData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [casestudyDatas, setCasestudyData] = useState(null);

    useEffect(() => {
        if (caseStudiesPageData !== null) {

            setPageTitleData({
                title: caseStudiesPageData?.caseStudyPageOptions?.csHeading2 || '',
                subtitle: caseStudiesPageData?.caseStudyPageOptions?.csHeading || '',
                haslogo: '',
                type: 'smallbig',
            })

            setCtaData({
                cta2Heading: caseStudiesPageData?.caseStudyPageOptions?.callToActionHeading || '',
                cta2Description: caseStudiesPageData?.caseStudyPageOptions?.callToActionDescription || '',
                cta2ButtonInfo: caseStudiesPageData?.caseStudyPageOptions?.callToActionButtonInfo || '',
            })

            const casestudydataInfo = [];
            caseStudiesPageData?.caseStudyPageOptions?.selectCaseStudy.map((item, i) => {
                const serviceNodes = item?.casestudiestags?.nodes
                const slug = []
                serviceNodes.map((items) => {
                    slug.push(items.name)
                })
                const dataObj = {
                    value: i + 1,
                    title: item.title || '',
                    image: item.featuredImage.node.sourceUrl || '',
                    tags: slug,
                    description: item.excerpt || '',
                    link: item.uri || '#',
                }
                casestudydataInfo.push(dataObj)
            });

            setCasestudyData({
                casestudydataInfo
            })

        }
    }, [caseStudiesPageData])

    useEffect(() => {
        if(caseStudiesPageData){
            if (tellusPageData !== null) {

                const SociallinkData = [];
                tellusPageData?.themeSettings?.socialLinksFooter.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        icon: item.iconSingle.sourceUrl || '',
                        link: item.linkSingle || '',
                        alt: 'image',
                    }
                    SociallinkData.push(dataObj)
                });
                settellUsData({
                    heading: tellusPageData?.themeSettings?.footerFormHeading || '',
                    subheading: tellusPageData?.themeSettings?.footerFormSubheading || '',
                    description: tellusPageData?.themeSettings?.footerFormDescription || '',
                    email: tellusPageData?.themeSettings?.footerFormEmail || '',
                    skype: tellusPageData?.themeSettings?.footerFormSkype || '',
                    phonenumber: tellusPageData?.themeSettings?.footerFormWhatsappmobile || '',
                    followus: tellusPageData?.themeSettings?.footerFormFollowUsText || '',
                    formshortcode: tellusPageData?.themeSettings?.footerFormFormShortcode || '',
                    sociallinks: SociallinkData || '',
                    serviceslist: tellusPageData?.themeSettings?.servicesListAboutform || '',
                    projectBudgetlist: tellusPageData?.themeSettings?.projectBudgetListForm || '',
                })
            }
        }
    }, [tellusPageData,caseStudiesPageData])

    useEffect(() => {
        if(caseStudiesPageData){
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
                })
            }
        }
    }, [tellusPageData, portfolioPageData,caseStudiesPageData])

    return (
        <Layout>
            {
                (pageTitleData?.title != null || pageTitleData?.subtitle != null) && 
                <PageTitle pageTitleData={pageTitleData} />
            }

            {(casestudyDatas?.casestudydataInfo.length > 0) &&
                <div className="container">
                    <div className="pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32 pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36 md:pb-28
                        md:[&>*:nth-child(even)]:flex-row-reverse 
                         
                 
                        
                    ">
                        {casestudyDatas?.casestudydataInfo?.map((data, index) => (
                            <CasestudyPageSec key={index} link={data.link} image={data.image} title={data.title} description={data.description} tags={data.tags} />
                        ))}
                    </div>
                </div>
            }

            {(ctaData != null && ctaData.cta2ButtonInfo != undefined && ctaData.cta2ButtonInfo != null && ctaData.cta2Description != null && ctaData.cta2Description != undefined && ctaData.cta2Heading != null && ctaData.cta2Heading != undefined) &&
                <CTA link={ctaData.cta2ButtonInfo.url} text={ctaData.cta2Description} title={ctaData.cta2Heading} linktext={ctaData.cta2ButtonInfo.title} textcase="" />
            }

            {(whatClientSpeak != null) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />
            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </Layout>
    )
}
