import DefaultLayout from "@/components/layout/DefaultLayout"
import PageTitleV2 from "@/components/layout/PageTitleV2"
import ImageBlock from "@/components/case/ImageBlock"
import caseImage1 from '@/assets/images/case-studies-1-banner.jpg'
import LeftRightInfo from "@/components/case/LeftRightInfo"
import ScreensBlock from "@/components/case/ScreensBlock"
import caseimage1 from "@/assets/images/case-studies-image-1.png"
import caseimage2 from "@/assets/images/case-studies-image-2.png"
import caseimage3 from "@/assets/images/case-studies-image-3.png"
import CaseStudySec from '@/components/CaseStudySec'
import TellUsAboutIt from '@/components/layout/TellUsAboutIt'
import React from 'react';

import { useState, useEffect, useContext, useCallback } from "react";
import { useRouter } from "next/router";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran"

const CaseDetail = () => {
    const router = useRouter()

    const { allCasestudyDataApi } = useContext(ApiContext);
    const [allCasestudyPageData, setCaseStudyPageData] = allCasestudyDataApi;

    const { id } = router.query

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const [pageTitleData, setPageTitleData] = useState(null);
    const [imageBlockData, setimageBlockData] = useState(null);
    const [overviewData, setoverviewData] = useState(null);
    const [strategyData, setstrategyData] = useState(null);
    const [allscreensData, setallscreensData] = useState(null);
    const [resultsData, setresultData] = useState(null);
    const [caseStudiesData, setCaseStudiesData] = useState(null);

    useEffect(() => {
        if (allCasestudyPageData !== null) {

            let casestudyData = '';
            const slug = id;
            if(slug){
                const nodes = allCasestudyPageData?.nodes;
                for (let i = 0; i < nodes?.length; i++) {
                    if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                        casestudyData = nodes[i];
                    }
                }
            }

            setPageTitleData({
                title: casestudyData?.caseStudyDetail?.caseHeading || '',
                subtitle: casestudyData?.caseStudyDetail?.caseSubheading || '',
                haslogo: '',
                type: 'smallbig',
                description: casestudyData?.caseStudyDetail?.caseDescription || '',
            })

            setimageBlockData({
                imageURL: casestudyData?.caseStudyDetail?.caseBlockImage?.sourceUrl || '',
                imageAlt: 'the meraviglia',
            })

            const descriptionNodes = casestudyData?.caseStudyDetail?.caseRightDescription
            const rightdescription = []
            descriptionNodes?.map((items) => {
                rightdescription.push(items.singleDescriptionRightText)
            })

            const tagsNodes = casestudyData?.casestudiestags?.nodes
            const casetagsarray = []
            tagsNodes?.map((items) => {
                casetagsarray.push(items.name)
            })

            setoverviewData({
                lightTitle: casestudyData?.caseStudyDetail?.caseLeftSubTitle || '',
                mainTitle: casestudyData?.caseStudyDetail?.caseLeftMainTitle || '',
                bigtext: casestudyData?.caseStudyDetail?.caseRightSubTitle || '',
                rightsubtitle: casestudyData?.caseStudyDetail?.caseRightMainTitle || '',
                paragraphs: rightdescription || '',
                tags: casetagsarray || '',
            })

            const stratergydescription = casestudyData?.caseStudyDetail?.caseStrategyDescription
            const strrightdescription = []
            stratergydescription?.map((items) => {
                strrightdescription.push(items.singleStrategyDescriptionText)
            })

            setstrategyData({
                lightTitle: casestudyData?.caseStudyDetail?.caseStrategySubHeading || '',
                mainTitle: casestudyData?.caseStudyDetail?.caseStrategyMainHeading || '',
                bigtext: casestudyData?.caseStudyDetail?.caseStrategyText || '',
                paragraphs: strrightdescription || '',
            })

            const scrrensdataInfo = [];
            casestudyData?.caseStudyDetail?.caseScreensList?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    imageURL: item.caseSingleScrimage.sourceUrl || '',
                    imageALT: item.caseSingleScrimage.altText || '',
                    hasFull: item.caseImageWidthFull
                }
                scrrensdataInfo.push(dataObj)
            });

            setallscreensData({ scrrensdataInfo })

            const resultdescription = casestudyData?.caseStudyDetail?.caseResultDescription
            const resultsdescription = []
            resultdescription?.map((items) => {
                resultsdescription.push(items.singleCaseResultText)
            })

            const statsdataInfo = [];
            casestudyData?.caseStudyDetail?.caseResultStatusList?.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    numabestat: item.caseResultSingleNumber || '',
                    textstat: item.caseResultSingleTitle || '',
                }
                statsdataInfo.push(dataObj)
            });

            setresultData({
                lightTitle: casestudyData?.caseStudyDetail?.caseResultSubHeading || '',
                mainTitle: casestudyData?.caseStudyDetail?.caseResultHeading || '',
                bigtext: casestudyData?.caseStudyDetail?.caseResultText || '',
                paragraphs: resultsdescription || '',
                stats: statsdataInfo,
            })

            setCaseStudiesData({
                caseStudiesHeading: casestudyData?.caseStudyDetail?.caseSubheading || '',
                caseStudiesButtonInfo: casestudyData?.caseStudyDetail?.caseStudiesButtonInfo || '',
                caseStudies: casestudyData?.caseStudyDetail?.selectStudies || '',
            })

        }
    }, [id,allCasestudyPageData])

    useEffect(() => {
        if(allCasestudyPageData){
            if (tellusPageData !== null) {

                const SociallinkData = [];
                tellusPageData.themeSettings.socialLinksFooter.map((item, i) => {
                    const dataObj = {
                        value: i + 1,
                        icon: item.iconSingle.sourceUrl || '',
                        link: item.linkSingle || '',
                        alt: 'image',
                    }
                    SociallinkData.push(dataObj)
                });
                settellUsData({
                    heading: tellusPageData.themeSettings.footerFormHeading || '',
                    subheading: tellusPageData.themeSettings.footerFormSubheading || '',
                    description: tellusPageData.themeSettings.footerFormDescription || '',
                    email: tellusPageData.themeSettings.footerFormEmail || '',
                    skype: tellusPageData.themeSettings.footerFormSkype || '',
                    phonenumber: tellusPageData.themeSettings.footerFormWhatsappmobile || '',
                    followus: tellusPageData.themeSettings.footerFormFollowUsText || '',
                    formshortcode: tellusPageData.themeSettings.footerFormFormShortcode || '',
                    sociallinks: SociallinkData || '',
                    serviceslist: tellusPageData.themeSettings.servicesListAboutform || '',
                    projectBudgetlist: tellusPageData.themeSettings.projectBudgetListForm || '',
                })
            }
        }
    }, [tellusPageData,allCasestudyPageData])

    return (
        <Layout>
            {
                (pageTitleData?.title != null || pageTitleData?.subtitle != '') && 
                <PageTitleV2 pageTitleData={pageTitleData} />
            }
            {
                (imageBlockData?.imageURL != null) && 
                <ImageBlock imageurl={imageBlockData.imageURL || ''} imagealt={imageBlockData.imageAlt || ''} />
            }

            {
                (overviewData != null) && 
                <LeftRightInfo haseline="yes" compodata={overviewData} />
            }

            {(strategyData != null && strategyData.lightTitle != '' && strategyData.mainTitle != '' && strategyData.bigtext != '' && strategyData.paragraphs != '') && <LeftRightInfo haseline="yes" compodata={strategyData} />}

            {(allscreensData != 'null') && <ScreensBlock screensblockdata={allscreensData?.scrrensdataInfo || ''} />}

            {(resultsData != null) && <LeftRightInfo compodata={resultsData || ''} />}
            {
                (caseStudiesData != null && caseStudiesData.caseStudiesHeading != '' && caseStudiesData.caseStudiesButtonInfo != '' && caseStudiesData.caseStudies != '') && <CaseStudySec caseStudiesData={caseStudiesData} />
            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </Layout>
    )
}

export default CaseDetail;