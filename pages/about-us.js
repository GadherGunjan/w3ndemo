
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageTitle from "@/components/layout/PageTitle";
import w3nutslogo from '@/assets/images/w3nuts_logo_big.svg'
import WhatDoWeDo from "@/components/WhatDoWeDo";
import TheBeginning from "@/components/TheBeginning";
import dynamic from 'next/dynamic' 
const NuttyProcess = dynamic(() => import('../components/NuttyProcess'), { ssr: false, })
import CTA from "@/components/layout/CTA";
import QuickFacts from "@/components/layout/QuickFacts";
import TellUsAboutIt from '@/components/layout/TellUsAboutIt'
import OurFundamentalTenent from "@/components/OurFundamentalTenent";
import NuttyBunch from "@/components/NuttyBunch";
import HandshakeImage from "@/assets/images/hand-shake-image.jpg"
import LifeatW3nuts from "@/components/LifeatW3nuts";
import w3image from "@/assets/images/portfolio-image-1.jpg"
import WhatClientSpeak from "@/components/WhatClientSpeak";

import BuildCareer from "@/components/BuildCareer";

import { useState, useEffect, useContext, useCallback } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { GET_INSTAGRAM, get, post } from "@/queries/api_helper";
import Layout from "@/components/layout/PageTran";


export default function AboutUs() {

    const { aboutPageDataApi } = useContext(ApiContext);
    const [aboutPageData, setAboutPageData] = aboutPageDataApi;

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    const [pageTitleData, setPageTitleData] = useState(null);
    const [whatDowedoData, setWhatDowedoData] = useState(null);
    const [theBeginningData, setBeginningData] = useState(null);
    const [nuttyProcessData, setNuttyProcessData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [quickfactData, setQuickData] = useState(null);
    const [ourfundamentalData, setOurfundamentalData] = useState(null);
    const [nuttyBunchData, setnuttyBunchData] = useState(null);
    const [buildcarrerData, setbuildCarrerData] = useState(null);
    const [lifeatw3nutsData, setlifeatW3nutsData] = useState(null);
    const [instaimage, setStates] = useState([]);
    


    const get_instaimages = useCallback(async () => {
        const instagramData = await get(GET_INSTAGRAM);
        if (instagramData.result && instagramData.instagram != null) {
            setStates(instagramData.instagram);
        }
    }, [setStates]);

    useEffect(() => {
        if (instaimage !== null) {
            if (instaimage.length <= 0) {
                get_instaimages();
            }
        }
    }, [instaimage,get_instaimages]);

    useEffect(() => {
        if (aboutPageData) {
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
    }, [tellusPageData,aboutPageData])

    useEffect(() => {
        if (aboutPageData !== null) {

            setNuttyProcessData({
                title: aboutPageData?.aboutPageOptions?.processHeading || '',
                process: aboutPageData?.aboutPageOptions?.processInfo || '',
            })

            setPageTitleData({
                title: aboutPageData?.aboutPageOptions?.bannerHeading || '',
                subtitle: '',
                haslogo: aboutPageData?.aboutPageOptions?.bannerImage || '',
                type: 'smallbig',
            })

            setBeginningData({
                title: aboutPageData?.aboutPageOptions?.beginningHeading || '',
                image: aboutPageData?.aboutPageOptions?.beginningImage || '',
                content: aboutPageData?.aboutPageOptions?.beginningContent || '',
            })

            const whatwedodataInfo = [];
            aboutPageData?.aboutPageOptions?.selectServices.map((item, i) => {
                const serviceNodes = item?.children?.nodes
                const slug = []
                serviceNodes.map((items) => {
                    slug.push(items.title)
                })
                const dataObj = {
                    value: i + 1,
                    icon: item.template.servicesMainPageOption.iconImage.sourceUrl || '',
                    title: item.title || '',
                    techData: slug,
                    description: item.template.servicesMainPageOption.pageDescription || ''
                }
                whatwedodataInfo.push(dataObj)
            });

            setWhatDowedoData({
                title: aboutPageData?.aboutPageOptions?.whatWeHeading || '',
                whatwedata: whatwedodataInfo || '',
            })

            setCtaData({
                cta2Heading: aboutPageData?.aboutPageOptions?.cta2Heading || '',
                cta2Description: aboutPageData?.aboutPageOptions?.cta2Description || '',
                cta2ButtonInfo: aboutPageData?.aboutPageOptions?.cta2ButtonInfo || '',
            })

            const QuickData = [];
            aboutPageData?.aboutPageOptions?.advantagesInfo.map((item, i) => {
                const dataObj = {
                    value: i,
                    textfact: item.text || '',
                }
                QuickData.push(dataObj)
            });

            setQuickData({
                title: { __html: aboutPageData?.aboutPageOptions?.advantagesHeading } || '',
                QuickData: QuickData || '',
            })

            const FundamentalData = [];
            aboutPageData?.aboutPageOptions?.fundamentalInfo?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    number: i + 1,
                    title: item.title || '',
                    description: item.description || '',
                }
                FundamentalData.push(dataObj)
            });

            setOurfundamentalData({
                title: { __html: aboutPageData?.aboutPageOptions?.fundamentalHeading } || '',
                subtitle: { __html: aboutPageData?.aboutPageOptions?.fundamentalDescription } || '',
                FundamentalData: FundamentalData || '',
            })

            const BunchData = [];
            aboutPageData?.aboutPageOptions?.bunchContent.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    texts: item.contentSingle || '',
                }
                BunchData.push(dataObj)
            });

            setnuttyBunchData({
                title: { __html: aboutPageData?.aboutPageOptions?.bunchHeading } || '',
                image: aboutPageData?.aboutPageOptions?.bunchImage?.sourceUrl || '',
                altimage: 'The Nutty Bunch',
                link: aboutPageData?.aboutPageOptions?.bunchLink?.url || '',
                linktext: aboutPageData?.aboutPageOptions?.bunchLink?.title || '',
                bunchtext: aboutPageData?.aboutPageOptions?.bunchContent || '',
            })

            setbuildCarrerData({
                title: { __html: aboutPageData?.aboutPageOptions?.careerHeading } || '',
                description: { __html: aboutPageData?.aboutPageOptions?.careerDescription } || '',
                linktext: aboutPageData?.aboutPageOptions.buttonInfo?.title || '',
                link: aboutPageData?.aboutPageOptions?.buttonInfo?.url || '',
                style:'1',
            })
        }
      }, [aboutPageData])

    useEffect(() => {
        if (aboutPageData !== null && instaimage !== null) {
            setlifeatW3nutsData({
                title: { __html: aboutPageData?.aboutPageOptions?.lifeAtHeading } || '',
                maindescription: { __html: aboutPageData?.aboutPageOptions?.lifeAtDescription } || '',
                imagew3: w3image,
                LifeImage: [
                    w3image,
                    w3image,
                    w3image,
                    w3image,
                    w3image,
                    w3image,
                ],
                instaimage :instaimage
            })
        }
    }, [instaimage,aboutPageData])

    useEffect(() => {
        if (aboutPageData) {
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
                })
            }
        }
    }, [aboutPageData, portfolioPageData])

    return (
        <div>
            {
                (pageTitleData?.title != null || pageTitleData?.subtitle != null) && 
                <PageTitle pageTitleData={pageTitleData} />
            }
            {
                (whatDowedoData?.title != '' || whatDowedoData?.whatwedata?.length > 0) && 
                <WhatDoWeDo whatWeData={whatDowedoData} />
            }
            {
                (theBeginningData?.title != '' || theBeginningData?.image != '' || theBeginningData?.content != '') && 
                <TheBeginning beginningData={theBeginningData} />
            }
            {
                (nuttyProcessData?.title != null || nuttyProcessData?.process != null) && 
                <NuttyProcess nuttyProcessData={nuttyProcessData} />
            }

            {(ctaData != null && ctaData.cta2ButtonInfo != undefined && ctaData.cta2ButtonInfo != null && ctaData.cta2Description != null && ctaData.cta2Description != undefined && ctaData.cta2Heading != null && ctaData.cta2Heading != undefined) &&
                <CTA link={ctaData.cta2ButtonInfo.url} text={ctaData.cta2Description} title={ctaData.cta2Heading} linktext={ctaData.cta2ButtonInfo.title} textcase="" />
            }

            {
                (quickfactData?.title != '' || quickfactData?.QuickData?.length > 0) && 
                <QuickFacts quickfactsdata={quickfactData} />
            }
            {
                (ourfundamentalData?.title?.__html != null || ourfundamentalData?.subtitle?.__html != null || ourfundamentalData?.FundamentalData?.length > 0) && 
                <OurFundamentalTenent Ourfundamentaldata={ourfundamentalData} />
            }

            {
                (nuttyBunchData?.title != '' || nuttyBunchData?.image != '' || nuttyBunchData?.linktext != '' || nuttyBunchData?.bunchtext?.length > 0) && 
                <NuttyBunch nuttybunchdata={nuttyBunchData} />
            }
            {
                (lifeatw3nutsData?.title != '' || lifeatw3nutsData?.maindescription != '' || lifeatw3nutsData?.instaimage?.length > 0) && 
                <LifeatW3nuts lifeatw3nutsdata={lifeatw3nutsData} />
            }
            {
                (buildcarrerData?.title != '' || buildcarrerData?.description != '' || buildcarrerData?.linktext != '') && 
                <BuildCareer buildcareerdata={buildcarrerData} />
            }

            {(whatClientSpeak != null && whatClientSpeak.testimonialFirstTitle != null && whatClientSpeak.testimonialFirstTitle != undefined && whatClientSpeak.testimonialSecondTitle != null && whatClientSpeak.testimonialSecondTitle != undefined && whatClientSpeak.testimonialsbuttonInfo != undefined && whatClientSpeak.testimonialsbuttonInfo != null && whatClientSpeak.selectTestimonials != null && whatClientSpeak.selectTestimonials != undefined) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />
            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </div>
    )
}