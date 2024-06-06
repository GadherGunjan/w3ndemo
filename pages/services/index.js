import DefaultLayout from '@/components/layout/DefaultLayout'
import PageTitle from '@/components/layout/PageTitle';
import ServiceListMain from '@/components/services-page/ServiceListMain';
import SectorDetail from '@/components/services-page/SectorDetail';
import SectorServices from '@/components/services-page/SectorServices';
import CTA from '@/components/layout/CTA';
import WhatClientSpeak from '@/components/WhatClientSpeak';
import TellUsAboutIt from '@/components/layout/TellUsAboutIt';
import PortfolioSec from '@/components/PortfolioSec'
import React from 'react';

import { useState, useEffect, useContext } from "react";
import Layout from '@/components/layout/PageTran';

import { ApiContext } from "@/contexts/ApiContext";
import ServiceListMainNew from '@/components/services-page/ServiceListMainNew';

const Services = () => {

    const { servicePageDataApi } = useContext(ApiContext);
    const [servicePageData, setServicePageData] = servicePageDataApi;

    const [bannerData, setBannerData] = useState(null);
    const [servicesSection, setServicesSection] = useState(null);
    const [all3conrepeater, setAll3conrepeater] = useState(null);
    const [ctaData, setCtaData] = useState(null);

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    const [portfolioData, setPortfolioData] = useState(null);

    useEffect(() => {
        if(servicePageData){
            if (tellusPageData !== null) {

                const SociallinkData = [];
                tellusPageData?.themeSettings?.socialLinksFooter.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        icon: item.iconSingle.sourceUrl,
                        link: item.linkSingle,
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
    }, [tellusPageData,servicePageData])

    useEffect(() => {
        if (servicePageData !== null) {

            setBannerData({
                title: servicePageData?.servicePageOptions?.bannerHeading2 || '',
                subtitle: servicePageData?.servicePageOptions?.bannerHeading || '',
                haslogo: '',
                type: 'smallbig',
            })

            setServicesSection(servicePageData?.servicePageOptions?.servicesSection || '')

            setCtaData({
                cta2Heading: servicePageData?.servicePageOptions?.cta2Heading || '',
                cta2Description: servicePageData?.servicePageOptions?.cta2Description || '',
                cta2ButtonInfo: servicePageData?.servicePageOptions?.cta2ButtonInfo || '',
            })

            if (servicePageData?.servicePageOptions?.serviceContent) {
                const serviceContent = [];

                servicePageData?.servicePageOptions?.serviceContent.map((serviceCon, index) => {
                    const servicesArray = [];
                    serviceCon.allselectsubservices.map((innerserviceCon, index) => {
                        const dataObj = {
                            title: innerserviceCon.title,
                            description: innerserviceCon.template.servicesSubMainPageOption.pageDescription,
                            link: innerserviceCon.uri,
                        }
                        servicesArray.push(dataObj)
                    });

                    const dataObj = {
                        sectorDetailData: {
                            title: serviceCon.serviceTitle,
                            leftText: serviceCon.serviceLeftContent,
                            subTitle: serviceCon.serviceRightTitle,
                            description: serviceCon.serviceRightContent,
                        },
                        sectorServiceData: {
                            title: serviceCon.servicesTitle,
                            services: servicesArray
                        }
                    }
                    serviceContent.push(dataObj)
                })
                setAll3conrepeater(serviceContent)
            }

            const portfoliosArray = [];
            if (servicePageData?.servicePageOptions?.selectPortfolioNew) {
                servicePageData?.servicePageOptions?.selectPortfolioNew.map((portfolioCon, index) => {
                const dataObj2 = {
                    value: index,
                    link: portfolioCon?.uri || '',
                    imageURL: portfolioCon?.portfolioPostOptions?.backgroundImage || '',
                    title: portfolioCon?.title || '',
                    description: portfolioCon?.portfolioPostOptions?.portfolioPostDescription || '',
                }
                portfoliosArray.push(dataObj2)
                });
            }

            setPortfolioData({
                portfolioTitle: servicePageData?.servicePageOptions?.portfolioHeadingNew || '',
                bottomTitle: servicePageData?.servicePageOptions?.portfolioSeeMoreTextNew || '',
                allbutton: servicePageData?.servicePageOptions?.portfolioButtonInfoNew || '',
                portfolios: portfoliosArray || ''
             })

        }
        
    }, [servicePageData])

    useEffect(() => {
        if(servicePageData){
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
                })
            }
        }
    }, [servicePageData, portfolioPageData])

    return (

        <Layout>
            {
                (bannerData?.title != null || bannerData?.subtitle != null) && 
                <PageTitle pageTitleData={bannerData} />
            }
            {/* {
                (servicesSection != null) && 
                <ServiceListMain data={servicesSection} />
            } */}
                <ServiceListMainNew />

            {
                (all3conrepeater != null) &&
                all3conrepeater.map((serviceCon, index) => {

                    return (
                        <React.Fragment key={index}>
                            <SectorDetail sectorDetailData={serviceCon.sectorDetailData} />
                            <SectorServices sectorServiceData={serviceCon.sectorServiceData} />
                            {/* <PortfolioSec portfolioData={serviceCon.portfolioContent} /> */}
                            {
                                (index == 0) &&
                                <CTA
                                    link={ctaData.cta2ButtonInfo.url}
                                    text={ctaData.cta2Description}
                                    title={ctaData.cta2Heading}
                                    linktext={ctaData.cta2ButtonInfo.title}
                                    classname=""
                                />
                            }
                        </React.Fragment>
                    )
                })
            }

            {
                (portfolioData != null) && <PortfolioSec portfolioData={portfolioData} />
            }

            {(whatClientSpeak != null && whatClientSpeak.testimonialFirstTitle != null && whatClientSpeak.testimonialFirstTitle != undefined && whatClientSpeak.testimonialSecondTitle != null && whatClientSpeak.testimonialSecondTitle != undefined && whatClientSpeak.testimonialsbuttonInfo != undefined && whatClientSpeak.testimonialsbuttonInfo != null && whatClientSpeak.selectTestimonials != null && whatClientSpeak.selectTestimonials != undefined) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />
            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </Layout>
    )
}

export default Services;