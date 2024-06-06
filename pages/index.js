import Image from 'next/image'
import { Inter } from 'next/font/google'
import DefaultLayout from '@/components/layout/DefaultLayout'
import Banner from '@/components/layout/Banner'
import OurServices from '@/components/OurServices'
import StaffAugmentation from '@/components/StaffAugmentation'
import ExploreServices from '@/components/ExploreServices'
import IndustryTabSec from '@/components/IndustryTabSec'
// import NuttyProcess from '@/components/NuttyProcess'
import dynamic from 'next/dynamic' 
const NuttyProcess = dynamic(() => import('../components/NuttyProcess'), { ssr: false, })
import PartnerLogos from '@/components/PartnerLogos'
import CertifiedPartner from '@/components/CertifiedPartner'
import TechnologyWeWork from '@/components/TechnologyWeWork'
import CTA from '@/components/layout/CTA'
import WhoWeAre from '@/components/WhoWeAre'
import PortfolioSec from '@/components/PortfolioSec'
import WhyworkwithW3nuts from '@/components/WhyworkwithW3nuts'
import CaseStudySec from '@/components/CaseStudySec'
import WhatClientSpeak from '@/components/WhatClientSpeak'
import TellUsAboutIt from '@/components/layout/TellUsAboutIt'
import { useState, useEffect, useContext } from "react";
import icon1 from '@/assets/images/ourserviceicon-1.png';

// import {GET_HOME_PAGE} from "@/queries/graphql_queries";
// import client from "@/apollo_client/client"

import { ApiContext } from "@/contexts/ApiContext";
import Layout from '@/components/layout/PageTran'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {  

  
  const {homePageDataApi} = useContext(ApiContext);
  const [homePageData, setHomePageData] = homePageDataApi;  
  const [bannerData, setBannerData] = useState(null);
  const [logosData, setLogosData] = useState(null);
  const [partnerData, setPartnerData] = useState(null);
  const [staffData, setStaffData] = useState(null);
  const [ctaInfoData, setCtaInfoData] = useState(null);
  const [industryData, setIndustryData] = useState(null);
  const [nuttyProcessData, setNuttyProcessData] = useState(null);
  const [technologyData, setTechnologyData] = useState(null);
  const [ctaData, setCtaData] = useState(null);
  const [whoWeAreData, setWhoWeAreData] = useState(null);
  const [whyworkData, setWhyworkData] = useState(null);
  const [portfolioData, setPortfolioData] = useState(null);
  const [caseStudiesData, setCaseStudiesData] = useState(null);

  const [servicesData, setServicesData] = useState(null);

  const { tellusPageDataApi } = useContext(ApiContext);
  const [tellusPageData, setTellusPageData] = tellusPageDataApi;
  const [tellusaboutData, settellUsData] = useState(null);

  const { portfolioPageDataApi } = useContext(ApiContext);
  const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
  const [whatClientSpeak, setWhatClientSpeak] = useState(null);
  
  useEffect(() => {
    if (homePageData !== null) {
      setBannerData({
        bannerDescription: homePageData?.homePageOptions?.bannerDescription || '',
        bannerHeading: homePageData?.homePageOptions?.bannerHeading || '',
        bannerImage: homePageData?.homePageOptions?.bannerImage || '',
        bannerSubheading: homePageData?.homePageOptions?.bannerSubheading || '',
      })
    
      setLogosData(homePageData?.homePageOptions?.logosInfo || '')
      
      setPartnerData({
        partnerHeading: homePageData?.homePageOptions?.partnerHeading || '',
        partnerImages: homePageData?.homePageOptions?.partnerImages || '',
        partnerDescription: homePageData?.homePageOptions?.partnerDescription || '',
      })

      setStaffData({
        staffHeading: homePageData?.homePageOptions?.staffHeading || '',
        staffAugmentationInfo: homePageData?.homePageOptions?.staffAugmentationInfo || '',
      })

      setCtaInfoData(homePageData?.homePageOptions?.ctaInfo || '')

      setIndustryData({
        solutionHeading: homePageData?.homePageOptions?.solutionHeading || '',
        solutionButtonInfo: homePageData?.homePageOptions?.solutionButtonInfo || '',
        solutionInfo: homePageData?.homePageOptions?.solutionInfo || '',
      })

      setNuttyProcessData({
        title: homePageData?.homePageOptions?.processHeading || '',
        process: homePageData?.homePageOptions?.processInfo || '',
      })

      setTechnologyData({
        techHeading: homePageData?.homePageOptions?.techHeading || '',
        technologiesInfo: homePageData?.homePageOptions?.technologiesInfo || '',
      })

      setCtaData({
        cta2Heading: homePageData?.homePageOptions?.cta2Heading || '',
        cta2Description: homePageData?.homePageOptions?.cta2Description || '',
        cta2ButtonInfo: homePageData?.homePageOptions?.cta2ButtonInfo || '',
      })

      setWhoWeAreData({
        whoHeading: homePageData?.homePageOptions?.whoHeading || '',
        whoSubheading: homePageData?.homePageOptions?.whoSubheading || '',
        nutsStandsForInfo: homePageData?.homePageOptions?.nutsStandsForInfo || '',
        whoAboutHeading: homePageData?.homePageOptions?.whoAboutHeading || '',
        whoDescription: homePageData?.homePageOptions?.whoDescription || '',
        whoButtonOneInfo: homePageData?.homePageOptions?.whoButtonOneInfo || '',
        whoButtonTwoInfo: homePageData?.homePageOptions?.whoButtonTwoInfo || '',
      })

      setWhyworkData({
        whyHeading: homePageData?.homePageOptions?.whyHeading || '',
        whyWorkWithInfo: homePageData?.homePageOptions?.whyWorkWithInfo || '',
        whyButtonOneInfo: homePageData?.homePageOptions?.whyButtonOneInfo || '',
        whyButtonTwoInfo: homePageData?.homePageOptions?.whyButtonTwoInfo || '',
        whyCounterInfo: homePageData?.homePageOptions?.whyCounterInfo || '',
      })

      const portfoliosArray = [];
      if (homePageData?.homePageOptions?.selectPortfolio) {
        homePageData?.homePageOptions?.selectPortfolio.map((portfolioCon, index) => {
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
        portfolioTitle: homePageData?.homePageOptions?.portfolioHeading || '',
        bottomTitle: homePageData?.homePageOptions?.portfolioSeeMoreText || '',
        allbutton: homePageData?.homePageOptions?.portfolioButtonInfo || '',
        portfolios: portfoliosArray || '',
      })

      setCaseStudiesData({
        caseStudiesHeading: homePageData?.homePageOptions?.caseStudiesHeading || '',
        caseStudiesButtonInfo: homePageData?.homePageOptions?.caseStudiesButtonInfo || '',
        caseStudies: homePageData?.homePageOptions?.selectStudies || '',
      })

      const serviceArray = [];
      if (homePageData?.homePageOptions?.services) {
        homePageData?.homePageOptions?.services.map((serviceCon, index) => {

          const serMainDataObj = {
            title: serviceCon?.selectMainService?.title || '',
            description: serviceCon?.selectMainService?.template?.servicesMainPageOption?.pageDescription || '',
            link: serviceCon?.aboutButton?.url || '',
            linktext: serviceCon?.aboutButton?.title || '',
            iconImage: serviceCon?.selectMainService?.template?.servicesMainPageOption?.iconShap32?.sourceUrl || '',
            layout:serviceCon?.selectLayoutHome || '',
            services: [],
          }
          if (serviceCon?.selectSubService) {
            serviceCon?.selectSubService.map((serviceSubCon, index) => {
              serMainDataObj.services.push(
                serviceSubCon?.title
              )
            });
          }
          serviceArray.push(serMainDataObj)
        });
      }

      setServicesData({
        serviceHeading: homePageData?.homePageOptions?.serviceHeading || '',
        serviceButtonInfo: homePageData?.homePageOptions?.serviceButtonInfo || '',
        services: serviceArray || '',
      })

    }
    if(homePageData){
      if (portfolioPageData !== null) {
        setWhatClientSpeak({
          testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
          testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
          testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
          selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
        })
      }
    }

  }, [homePageData, portfolioPageData])

  useEffect(() => {
    if(homePageData){
        if (tellusPageData !== null) {
            const SociallinkData = [];
            tellusPageData.themeSettings.socialLinksFooter.map((item, i) => {
                const dataObj = {
                value: i + 1,
                icon: item?.iconSingle?.sourceUrl,
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
  }, [tellusPageData,homePageData])

  return (
    
      <Layout>
      {
        (bannerData?.bannerHeading != null || bannerData?.bannerImage != null || bannerData?.bannerSubheading != null || bannerData?.bannerDescription != null) &&
        <Banner bannerData={bannerData} />
      }
      {
        (logosData != null || logosData?.length > 0) && 
        <PartnerLogos logosInfo={logosData} />
      }
      {
        (partnerData != null || partnerData?.partnerHeading != null || partnerData?.partnerDescription != null) && 
        <CertifiedPartner partnerData={partnerData} />
      }
      {
        (servicesData != null || servicesData?.serviceHeading != null || servicesData?.services?.length > 0) &&  
        <OurServices servicesData={servicesData} />
      }
      {
         (staffData != null || staffData?.staffHeading != null || staffData?.staffAugmentationInfo?.length > 0) && 
         <StaffAugmentation staffData={staffData} />
      }
      {
         (ctaInfoData != null || ctaInfoData?.length > 0) && 
         <ExploreServices ctaInfo={ctaInfoData} />
      }
      {
        (industryData != null || industryData?.solutionHeading != null || industryData?.solutionButtonInfo != null || industryData?.solutionInfo?.length > 0) && 
        <IndustryTabSec industryData={industryData} />
      }
      {
         (nuttyProcessData != null || nuttyProcessData?.title != null || nuttyProcessData?.process?.length > 0) && 
         <NuttyProcess nuttyProcessData={nuttyProcessData} />
      }
      {
         (technologyData != null || technologyData?.techHeading != null || technologyData?.technologiesInfo?.length > 0) && 
         <TechnologyWeWork technologyData={technologyData} />
      }
      {
          (ctaData != null || ctaData?.cta2Heading != null || ctaData?.cta2Description != null || ctaData?.cta2ButtonInfo != null) && 
          <CTA link={ctaData?.cta2ButtonInfo?.url || ''} text={ctaData?.cta2Description || ''} title={ctaData?.cta2Heading || ''} linktext={ctaData?.cta2ButtonInfo?.title || ''} textcase="" />
      }
      {
         (whoWeAreData != null || whoWeAreData?.whoHeading != null || whoWeAreData?.whoSubheading != null || whoWeAreData?.whoDescription != null || whoWeAreData?.whoAboutHeading != null || whoWeAreData?.nutsStandsForInfo != null) && 
         <WhoWeAre whoWeAreData={whoWeAreData} />
      }
      {
         (portfolioData != null || portfolioData?.portfolioTitle != null || portfolioData?.bottomTitle != null || portfolioData?.portfolios?.length > 0) && 
         <PortfolioSec portfolioData={portfolioData} />
      }
      {
         (whyworkData != null || whyworkData?.whyHeading != null || whyworkData?.whyCounterInfo?.length > 0 || whyworkData?.whyWorkWithInfo?.length > 0) && 
         <WhyworkwithW3nuts whyworkData={whyworkData} />
      }
      {
        (caseStudiesData != null || caseStudiesData?.caseStudiesHeading != '' || caseStudiesData?.caseStudies?.length > 0 ) && 
        <CaseStudySec caseStudiesData={caseStudiesData} />
      }

      {  
      (whatClientSpeak != null || whatClientSpeak?.testimonialFirstTitle != '' || whatClientSpeak?.testimonialSecondTitle != '' || whatClientSpeak?.selectTestimonials?.length > 0) &&
        <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak?.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak?.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak?.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak?.selectTestimonials} />  
      }

      { (tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} /> }

      </Layout>
 
  )
}