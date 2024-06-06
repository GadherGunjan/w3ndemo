import DefaultLayout from "@/components/layout/DefaultLayout";
import PageTitle from "@/components/layout/PageTitle";
import BlogPageBlock from "@/components/layout/BlogPageBlock";
import blogImage1 from "@/assets/images/blog-image-1.jpg"
import RightBoldArrowBigIcon from "@/assets/images/svgs/RightBoldArrowBigIcon";
import CTA from "@/components/layout/CTA";
import WhatClientSpeak from "@/components/WhatClientSpeak";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";
import dateFormat from "dateformat";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";

export default function Blogpage() {

    const { tellusPageDataApi } = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const { portfolioPageDataApi } = useContext(ApiContext);
    const [portfolioPageData, setportfolioPageData] = portfolioPageDataApi;
    const [whatClientSpeak, setWhatClientSpeak] = useState(null);

    /* blog list data start */

    const { blogPageDataApi } = useContext(ApiContext);
    const [blogpageData, setblogpageData] = blogPageDataApi;

    const { postlistPageDataApi } = useContext(ApiContext);
    const [postlistData, setpostlistData] = postlistPageDataApi;

    const [pageTitleDatas, setPageTitleData] = useState(null);
    const [ctaData, setCtaData] = useState(null);
    const [bloglistData, setBloglistData] = useState(null);

    
    useEffect(() => {
        if (postlistData !== null) {

            const bloglistdataInfo = [];
            postlistData?.edges.map((item, i) => {
                const serviceNodes = item?.node?.categories?.nodes
                const categorydata = []
                serviceNodes.map((itemsr) => {
                    const dataObjr = {
                        value: i + 1,
                        textcat : itemsr?.name || '',
                        linkcat : '#',
                        //linkcat : itemsr?.uri || '',
                    }
                    categorydata.push(dataObjr)
                })
                
                const dataObj = {
                    value: i + 1,
                    image: item?.node?.featuredImage?.node?.mediaItemUrl || '',
                    link: item?.node?.uri || '',
                    title: item?.node?.title || '',
                    description: item?.node?.excerpt || '',
                    category: categorydata || '',
                    date: dateFormat(item?.node?.date, "d mmmm, yyyy"),
                    linkicon: RightBoldArrowBigIcon(),
                }
                bloglistdataInfo.push(dataObj)
            });

            setBloglistData(bloglistdataInfo)

        }
    }, [postlistData])

    useEffect(() => {
        if (blogpageData !== null) {

            setPageTitleData({
                title: blogpageData?.blogPageOption?.bloglistHeading || '',
                subtitle: blogpageData?.blogPageOption?.bloglistSubheading || '',
                haslogo: '',
                type: 'smallbig',
                description: '',
            })

            setCtaData({
                cta2Heading: blogpageData?.blogPageOption?.callToActionHeading || '',
                cta2Description: blogpageData?.blogPageOption?.callToActionDescription || '',
                cta2ButtonInfo: blogpageData?.blogPageOption?.callToActionButtonInfo || '',
            })

        }
    }, [blogpageData])

    /* blog list data end */

    useEffect(() => {
        if(blogpageData){
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
    }, [tellusPageData,blogpageData])

    useEffect(() => {
        if(blogpageData){
            if (portfolioPageData !== null) {
                setWhatClientSpeak({
                    testimonialFirstTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialFirstTitle || '',
                    testimonialSecondTitle: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialSecondTitle || '',
                    testimonialsbuttonInfo: portfolioPageData?.themeGeneralSettings?.themeSettings?.testimonialsbuttonInfo || '',
                    selectTestimonials: portfolioPageData?.themeGeneralSettings?.themeSettings?.selectTestimonials || '',
                })
            }
        }
    }, [tellusPageData, portfolioPageData,blogpageData])

    return (
        <Layout>
            {
                (pageTitleDatas?.title != null || pageTitleDatas?.subtitle != null) && <PageTitle pageTitleData={pageTitleDatas} />
            }
            {
                (bloglistData != null && bloglistData?.title != '') &&
                <BlogPageBlock blogdata={bloglistData} endCursor={postlistData?.pageInfo || ''} />
            }
            {
                (ctaData != null && ctaData?.cta2ButtonInfo != '' && ctaData?.cta2Description != '' && ctaData?.cta2Heading != '') &&
                <CTA link={ctaData.cta2ButtonInfo.url} text={ctaData.cta2Description} title={ctaData.cta2Heading} linktext={ctaData.cta2ButtonInfo.title} textcase="" />
            }
            {(whatClientSpeak != null) &&
                <WhatClientSpeak testimonialFirstSectionTitle={whatClientSpeak.testimonialFirstTitle} testimonialSecondSectionTitle={whatClientSpeak.testimonialSecondTitle} testimonialSectionButtonName={whatClientSpeak.testimonialsbuttonInfo} selectTestimonials={whatClientSpeak.selectTestimonials} />

            }
            {(tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </Layout>
    )
}