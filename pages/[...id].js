import DefaultLayout from '@/components/layout/DefaultLayout'
import HireDedicatedPrice from '@/components/layout/HireDedicatedPrice';
import TellUsAboutIt from '@/components/layout/TellUsAboutIt'
import React from 'react';

import ServiceDetailTitle from "@/components/services-page/ServiceDetailTitle";
import WhyChooseServices from "@/components/services-page/WhyChooseServices";
import ServicesDevelopmentAdantage from "@/components/services-page/ServicesDevelopmentAdantage";
import ComprehensiveServices from "@/components/services-page/ComprehensiveServices";
import ServiceDevelopmentProcess from "@/components/services-page/ServiceDevelopmentProcess";
import WhyDevelopmentWithW3nuts from "@/components/services-page/WhyDevelopmentWithW3nuts";
import VersatilityAcrossIndustries from "@/components/services-page/VersatilityAcrossIndustries";
import EngagewiththeCommunity from "@/components/services-page/EngagewiththeCommunity";
import BuildCareer from "@/components/BuildCareer";
import CaseStudySec from '@/components/CaseStudySec'
import Faqs from "@/components/Faqs";

import PageTitle from '@/components/layout/PageTitle';
import SectorDetail from '@/components/services-page/SectorDetail';
import SectorServices from '@/components/services-page/SectorServices';
import CTA from '@/components/layout/CTA';
import WhatClientSpeak from '@/components/WhatClientSpeak';
import PortfolioSec from '@/components/PortfolioSec'

import { useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from '@/components/layout/PageTran';
import OurExpertise from '@/components/services-page/OurExpertise';
import VarsalityOfServices from '@/components/services-page/VarsalityOfServices';
import HiringDevloper from '@/components/services-page/HiringDevloper';
import HaveAIdea from '@/components/services-page/HaveAIdea';
import LatestInsight from '@/components/services-page/LatestInsight';


const SubService = () => {
    const router = useRouter()

    const { allsubServiceDataApi } = useContext(ApiContext);
    const [subservicePageData, setSubservicePageData] = allsubServiceDataApi;

    const { allmainseviceDataApi } = useContext(ApiContext);
    const [mainservicePageData, setSernewPageData] = allmainseviceDataApi;

    const { cmsPagesApi } = useContext(ApiContext);
    const [cmsPages, setCmsPages] = cmsPagesApi;

    const { id } = router.query;
    let slug = '';
    if(id){
        if(id?.length == '1'){
            slug = id[0];
        }
        if(id?.length == '2'){
            slug = id[1];
        }
    }

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);


    const [PageSubTitleData, setPageSubTitleData] = useState(null);
    const [Hireprice, setHireprice] = useState(null);
    const [CustomizationData, setCustomizationData] = useState(null);
    const [AdvantageData, setAdvantageData] = useState(null);

    const [whychooseData, setWhychooseData] = useState(null);
    const [servicedevelopmentData, setServicedevelopmentData] = useState(null);
    const [whydevelopmentData, setWhydevelopmentData] = useState(null);
    const [versalityacrossData, setVersalityacrossData] = useState(null);
    const [communitywithData, setCommunitywithData] = useState(null);
    const [buildcarrerData, setbuildCarrerData] = useState(null);
    const [caseStudiesData, setCaseStudiesData] = useState(null);
    const [faqpageData, setFaqsData] = useState(null);
    const [expertiseData, setExpertiseData] = useState(null);
    const [hiringData, setHiringData] = useState(null);
    const [haveaIdeaData, setHaveaIdeaData] = useState(null);
    const [latestInsightData, setLatestinsightData] = useState(null);

    const [pageTitleData, setPageTitleData] = useState(null);
    const [sectordetailData, setsectorDetailData] = useState(null);
    const [sectorserviceData, setsectorServiceData] = useState(null);
    const [portfolioData, setPortfolioData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    useEffect(() => {
        if(subservicePageData){
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
    }, [tellusPageData,subservicePageData])

    useEffect(() => {
        if (mainservicePageData !== null) {
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData.themeGeneralSettings.themeSettings.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData.themeGeneralSettings.themeSettings.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData.themeGeneralSettings.themeSettings.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData.themeGeneralSettings.themeSettings.selectTestimonials || '',
                })
            }
        }
    }, [portfolioPageData,mainservicePageData]);

    useEffect(() => {
        if (id !== null) {

            let mainservicedata = '';
            let subservicedata = '';

            if(id){
                if(id?.length == '1'){
                    if(mainservicePageData || slug){
                        const nodes = mainservicePageData?.nodes;
                        for (let i = 0; i < nodes?.length; i++) {
                            if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                                mainservicedata = nodes[i];
                            }
                        }
                    }
                }

                if(id?.length == '2'){
                    if(subservicePageData || slug){
                        const nodes = subservicePageData?.nodes;
                        for (let i = 0; i < nodes?.length; i++) {
                            if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                                subservicedata = nodes[i];
                            }
                        }
                    }
                }
            }

            if(id?.length == '2'){
                
                setPageSubTitleData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.servicebannertitle2 || '',
                    subtitle: subservicedata?.template?.servicesSubMainPageOption?.servicebannertitle || '',
                    haslogo: '',
                    type: 'smallbig',
                    description: '',
                    contentlist:subservicedata?.template?.servicesSubMainPageOption?.serviceContentLisnew || '',
                    servicebutton1: subservicedata?.template?.servicesSubMainPageOption?.servicebannerbutton1 || '',
                    servicebutton2: subservicedata?.template?.servicesSubMainPageOption?.servicebannerbutton2 || '',
                })

                setHiringData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleHiring || '',
                    hiringRepeater: subservicedata?.template?.servicesSubMainPageOption?.hiringBoxList || '',
                })

                setHireprice({
                    hireTitle: subservicedata?.template?.servicesSubMainPageOption?.hireTitle || '',
                    hireTitle2: subservicedata?.template?.servicesSubMainPageOption?.hireTitle2 || '',
                    beforeboldtext: subservicedata?.template?.servicesSubMainPageOption?.hireContentBeforeBoldText || '',
                    boldtext: subservicedata?.template?.servicesSubMainPageOption?.hireContentBoldText || '',
                    afterboldtext: subservicedata?.template?.servicesSubMainPageOption?.hireContentAfterBoldText || '',
                    planRepeater: subservicedata?.template?.servicesSubMainPageOption?.planRepeater || '',
                })

                setExpertiseData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleExpertise || '',
                    expertiesRepeater: subservicedata?.template?.servicesSubMainPageOption?.tabListExpertise || '',
                })

                setCustomizationData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.customizationTitle || '',
                    description: subservicedata?.template?.servicesSubMainPageOption?.customizationTitle2 || '',
                    contentRepeater: subservicedata?.template?.servicesSubMainPageOption?.customizationContentRepeater || '',
                })

                setAdvantageData({
                    advantageTitle: subservicedata?.template?.servicesSubMainPageOption?.advantageTitle || '',
                    advantageTitle2: subservicedata?.template?.servicesSubMainPageOption?.advantageTitle2 || '',
                    contentRepeater: subservicedata?.template?.servicesSubMainPageOption?.advantageContentRepeater || '',
                })

                const whychooseData = [];
                if (subservicedata?.template?.servicesSubMainPageOption?.serviceDataListChooseNew) {
                    subservicedata.template.servicesSubMainPageOption.serviceDataListChooseNew.map((item, i) => {
                        const dataObj = {
                            value: i,
                            title: item.titleChooseSingle || '',
                            description: item.descriptionChooseSingle || '',
                        }
                        whychooseData.push(dataObj)
                    });
                }

                setWhychooseData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.headingWhyChooseNew || '',
                    choosedata: whychooseData || '',
                })

                const developmentdata = [];
                subservicedata?.template?.servicesSubMainPageOption?.processDataListDevelopment?.map((item, i) => {
                    const serviceNodes = item?.detailDataSubdata
                    const slug = []
                    serviceNodes.map((items,j) => {
                        const datarObj = {
                            value: j + 1,
                            title: items.subtitleSingleInner || '',
                            desciption: items.descriptionSingleInner || '',
                        }
                        slug.push(datarObj)
                    })
                    const dataObj = {
                        value: i + 1,
                        tabtitle: item.tabTitleSingleProcess || '',
                        title: item.titleSingleProcess || '',
                        tabData: slug,
                    }
                    developmentdata.push(dataObj)
                });

                setServicedevelopmentData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleDevelopProcess || '',
                    processdedata: developmentdata || '',
                    notes:subservicedata?.template?.servicesSubMainPageOption?.notesDevelopmentProcess || '',
                })

                const whydevelopData = [];
                if (subservicedata?.template?.servicesSubMainPageOption?.developmentDataListWhy) {
                    subservicedata.template.servicesSubMainPageOption.developmentDataListWhy.map((item, i) => {
                        const dataObj = {
                            value: i,
                            title: item.titleWhyDsingle || '',
                            description: item.descriptionWhyDsingle || '',
                        }
                        whydevelopData.push(dataObj)
                    });
                }

                setWhydevelopmentData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleWhyDevelopment || '',
                    whydevelopdata: whydevelopData || '',
                })

                const acrossData = [];
                if (subservicedata?.template?.servicesSubMainPageOption?.tabListAcrossIndustries) {
                    subservicedata.template.servicesSubMainPageOption.tabListAcrossIndustries.map((item, i) => {
                        const dataObj = {
                            value: i,
                            icon:item.iconSingleAcross?.sourceUrl || '',
                            label: item.titleTabSingleAcross || '',
                            desc: item.descriptionTabSingleAcross || '',
                        }
                        acrossData.push(dataObj)
                    });
                }

                setVersalityacrossData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleAcrossIndustries || '',
                    subtitle: subservicedata?.template?.servicesSubMainPageOption?.subTitleAcrossIndustries || '',
                    viracrossdata: acrossData || '',
                })

                const communityData = [];
                if (subservicedata?.template?.servicesSubMainPageOption?.communityDataListNew) {
                    subservicedata.template.servicesSubMainPageOption.communityDataListNew.map((item, i) => {
                        const dataObj = {
                            value: i,
                            title: item.titleCommunitySingleList || '',
                            desciption: item.descriptionCommunitySingleList || '',
                        }
                        communityData.push(dataObj)
                    });
                }

                setCommunitywithData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.mainTitleCommunity || '',
                    communityData: communityData || '',
                })

                setbuildCarrerData({
                    title: { __html: subservicedata?.template?.servicesSubMainPageOption?.careerHeading } || '',
                    description: { __html: subservicedata?.template?.servicesSubMainPageOption?.careerDescription } || '',
                    linktext: subservicedata?.template?.servicesSubMainPageOption?.buttonInfo?.title || '',
                    link: subservicedata?.template?.servicesSubMainPageOption?.buttonInfo?.url || '',
                    style:'2',
                })

                setCaseStudiesData({
                    caseStudiesHeading: subservicedata?.template?.servicesSubMainPageOption?.caseStudiesHeading || '',
                    caseStudiesButtonInfo: subservicedata?.template?.servicesSubMainPageOption?.caseStudiesButtonInfo || '',
                    caseStudies: subservicedata?.template?.servicesSubMainPageOption?.selectCaseStudies || '',
                })

                const faqdtlData = [];
                subservicedata?.template?.servicesSubMainPageOption?.faqInfo?.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        title: item.headingFaqSingle || '',
                        description: item.descriptionFaqSingle || '',
                    }
                    faqdtlData.push(dataObj)
                });

                setFaqsData({
                    title: subservicedata?.template?.servicesSubMainPageOption?.faqHeading || '',
                    FaqsAcc: faqdtlData || '',
                })

                setHaveaIdeaData({
                    tellusHeading: subservicedata?.template?.servicesSubMainPageOption?.mainTitleTellAboutSer || '',
                    tellusList: subservicedata?.template?.servicesSubMainPageOption?.tellUsBoxListSer || '',
                })

                const bloglistdataInfo = [];
                subservicedata?.template?.servicesSubMainPageOption?.insightSelectLatest?.map((item, i) => {
                    const serviceNodes = item?.terms?.nodes
                    const categorydata = []
                    serviceNodes.map((itemsr) => {
                        const dataObjr = {
                            value: i + 1,
                            textcat : itemsr?.name || '',
                        }
                        categorydata.push(dataObjr)
                    })
                    
                    const dataObj = {
                        value: i + 1,
                        image: item?.featuredImage?.node?.sourceUrl || '',
                        link: item?.uri || '',
                        title: item?.title || '',
                        category: categorydata || '',
                    }
                    bloglistdataInfo.push(dataObj)
                });

                setLatestinsightData({
                    insighttitle: subservicedata?.template?.servicesSubMainPageOption?.mainTitleLatestInsight || '',
                    insightbutton: subservicedata?.template?.servicesSubMainPageOption?.exploreButtonInsight || '',
                    insightlist: bloglistdataInfo || '',
                })
                
            }

            if(id?.length == '1'){
                setPageTitleData({
                    title: mainservicedata?.template?.servicesMainPageOption?.bannerHeading || '',
                    subtitle: mainservicedata?.template?.servicesMainPageOption?.bannerSubheading || '',
                    haslogo: '',
                    type: 'smallbig',
                })
    
                setsectorDetailData({
                    title: mainservicedata?.template?.servicesMainPageOption?.sectorTitle || '',
                    leftText: mainservicedata?.template?.servicesMainPageOption?.sectorLeftText || '',
                    subTitle: mainservicedata?.template?.servicesMainPageOption?.sectorSubTitle || '',
                    description: mainservicedata?.template?.servicesMainPageOption?.sectorDescription || '',
                })
    
                setCtaData({
                    cta2Heading: mainservicedata?.template?.servicesMainPageOption?.callToActionHeading || '',
                    cta2Description: mainservicedata?.template?.servicesMainPageOption?.callToActionDescription || '',
                    cta2ButtonInfo: mainservicedata?.template?.servicesMainPageOption?.callToInfoButtonInfo || '',
                })
    
                const sectorServicemt = [];
                mainservicedata?.children?.edges.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        title: item.node.title || '',
                        description: item.node.template.servicesSubMainPageOption.pageDescription || '',
                        link: item.node.uri || '',
                    }
                    sectorServicemt.push(dataObj)
                });
    
                setsectorServiceData({
                    title: mainservicedata?.template?.servicesMainPageOption?.serviceMainTitle || '',
                    services: sectorServicemt || '',
                })
    
                const portfoliosArray = [];
                if (mainservicedata?.template?.servicesMainPageOption?.selectPortfolio) {
                    mainservicedata.template.servicesMainPageOption.selectPortfolio.map((portfolioCon, index) => {
                        const dataObj2 = {
                            value: index,
                            link: portfolioCon.uri || '',
                            imageURL: portfolioCon.portfolioPostOptions.backgroundImage || '',
                            title: portfolioCon.title || '',
                            description: portfolioCon.portfolioPostOptions.portfolioPostDescription || '',
                        }
                        portfoliosArray.push(dataObj2)
                    });
                }
    
                setPortfolioData({
                    portfolioTitle: mainservicedata?.template?.servicesMainPageOption?.portfolioHeading || '',
                    bottomTitle: mainservicedata?.template?.servicesMainPageOption?.portfolioSeeMoreText || '',
                    allbutton: mainservicedata?.template?.servicesMainPageOption?.portfolioButtonInfo || '',
                    portfolios: portfoliosArray || ''
                })
            }

        }
    }, [subservicePageData,slug,id,mainservicePageData])

    if(id?.length == '2'){
        
        return (
            <Layout>
                {
                    (PageSubTitleData != null && PageSubTitleData.title != null && PageSubTitleData.subtitle != null) &&
                    <ServiceDetailTitle pagetitledata={PageSubTitleData} />
                }
                {
                    (whychooseData?.title != null || whychooseData?.choosedata?.length > 0) &&
                    <WhyChooseServices whychooseservices={whychooseData} />
                }
                {
                    (AdvantageData?.advantageTitle != null || AdvantageData?.advantageTitle2 != null || AdvantageData?.contentRepeater?.length > 0) &&
                    <ServicesDevelopmentAdantage servicesdevelopmentadantagedata={AdvantageData} />
                }
                {
                    (expertiseData?.title != null || expertiseData?.description != null || expertiseData?.expertiesRepeater?.length > 0) &&
                    <OurExpertise expertisemData={expertiseData} />
                }
                {
                    (CustomizationData?.title != null || CustomizationData?.description != null || CustomizationData?.contentRepeater?.length > 0) &&
                    <ComprehensiveServices comprehensiveservicesdata={CustomizationData} />
                }
                {
                    (servicedevelopmentData?.title != null || servicedevelopmentData?.processdedata?.length > 0 || servicedevelopmentData?.notes != null) &&
                    <ServiceDevelopmentProcess servicedevelopmentprocessdata={servicedevelopmentData} />
                }
                {
                    (versalityacrossData?.title != null || versalityacrossData?.viracrossdata?.length > 0) &&
                    <VarsalityOfServices versatilityacrossdata={versalityacrossData} />
                }
                {
                    (hiringData?.title != null || hiringData?.hiringRepeater?.length > 0) &&
                    <HiringDevloper hiringserdata={hiringData} />
                }
                {
                    (Hireprice?.hireTitle != null || Hireprice?.planRepeater?.length > 0 || Hireprice?.hireTitle2 != null || Hireprice?.afterboldtext != null) &&
                    <HireDedicatedPrice hirepricedata={Hireprice} />
                }
                {
                    (communitywithData?.title != null || communitywithData?.communityData?.length > 0) &&
                    <EngagewiththeCommunity engagewiththecommunitydata={communitywithData} />
                }
                {
                    (whydevelopmentData?.title != null || whydevelopmentData?.whydevelopdata?.length > 0) &&
                    <WhyDevelopmentWithW3nuts whydevelopmentwithw3nutsdata={whydevelopmentData} />
                }
                {
                    (buildcarrerData?.title != null || buildcarrerData?.description != null) && 
                    <BuildCareer buildcareerdata={buildcarrerData} />
                }
                   
                {(whatClientSpeak != null && whatClientSpeak.testimonialFirstTitle != null && whatClientSpeak.testimonialFirstTitle != undefined && whatClientSpeak.testimonialSecondTitle != null && whatClientSpeak.testimonialSecondTitle != undefined && whatClientSpeak.testimonialsbuttonInfo != undefined && whatClientSpeak.testimonialsbuttonInfo != null && whatClientSpeak.selectTestimonials != null && whatClientSpeak.selectTestimonials != undefined) &&
                    <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle || ''} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle || ''} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo || ''} selectTestimonials={whatClientSpeak.selectTestimonials || ''} />
                }

                {
                    (caseStudiesData?.caseStudiesHeading != null || caseStudiesData?.caseStudies?.length > 0) && 
                    <CaseStudySec caseStudiesData={caseStudiesData} />
                }
           
                {
                    (faqpageData?.title != null || faqpageData?.FaqsAcc?.length > 0) &&
                    <Faqs faqsdata={faqpageData} />
                }
                {
                    (haveaIdeaData?.tellusHeading != null || haveaIdeaData?.tellusList?.length > 0) &&
                    <HaveAIdea tellusdata={haveaIdeaData} />
                }
                {
                    (latestInsightData?.insighttitle != null || latestInsightData?.insightlist?.length > 0) &&
                    <LatestInsight insightsdata={latestInsightData} />
                }
            </Layout>
        )

    }else if(id?.length == '1'){
        
        return (
            <Layout>
                {
                    (pageTitleData?.title != null || pageTitleData?.subtitle != null) && 
                    <PageTitle pageTitleData={pageTitleData} />
                }
                {
                    (sectordetailData?.title != null || sectordetailData?.subtitle != null || sectordetailData?.leftText != null || sectordetailData?.description != null) && 
                    <SectorDetail sectorDetailData={sectordetailData} />
                }
                {
                    (sectorserviceData?.title != null || sectorserviceData?.title?.services?.length > 0) && 
                    <SectorServices sectorServiceData={sectorserviceData} />}
                {
                    (portfolioData != null) && <PortfolioSec portfolioData={portfolioData} />
                }
                {(ctaData != null && ctaData.cta2ButtonInfo != undefined && ctaData.cta2ButtonInfo != null && ctaData.cta2Description != null && ctaData.cta2Description != undefined && ctaData.cta2Heading != null && ctaData.cta2Heading != undefined) &&
                    <CTA link={ctaData.cta2ButtonInfo.url || ''} text={ctaData.cta2Description} title={ctaData.cta2Heading} linktext={ctaData.cta2ButtonInfo.title || ''} textcase="" />
                }
                {(whatClientSpeak != null && whatClientSpeak.testimonialFirstTitle != null && whatClientSpeak.testimonialFirstTitle != undefined && whatClientSpeak.testimonialSecondTitle != null && whatClientSpeak.testimonialSecondTitle != undefined && whatClientSpeak.testimonialsbuttonInfo != undefined && whatClientSpeak.testimonialsbuttonInfo != null && whatClientSpeak.selectTestimonials != null && whatClientSpeak.selectTestimonials != undefined) &&
                    <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle || ''} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle || ''} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo || ''} selectTestimonials={whatClientSpeak.selectTestimonials || ''} />
                }
                {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
            </Layout>
        )

    }
    
}
export default SubService;