import ProjectDiscipline from "@/components/portfolio/ProjectDiscipline";
import ProductMotion from "@/components/portfolio/ProductMotion";
import DesignApproch from "@/components/portfolio/DesignApproch";
import TypographyColor from "@/components/portfolio/TypographyColor";
import WeusedTechnology from "@/components/portfolio/WeusedTechnology";
import ThreeImg from "@/components/portfolio/ThreeImg";
import ImmersionDevice from "@/components/portfolio/ImmersionDevice";
import PortfolioBanner from "@/components/portfolio/PortfolioBanner";
import DisciplinesImages from "@/components/portfolio/DisciplinesImages";
import ScrollSecChange from "@/components/portfolio/ScrollSecPageChange";
import UiScreen from "@/components/portfolio/UiScreen";
import ResponsiveDesign from "@/components/portfolio/ResponsiveDesign";
import dateFormat from "dateformat";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useRouter } from "next/router";
import Layout from "@/components/layout/PageTran"

export default function PortfolioDetail() {
    const router = useRouter()
    const { id } = router.query

    const { allPortfolioDataApi } = useContext(ApiContext);
    const [allPortfolioPageData, setPortfolioPageData] = allPortfolioDataApi;

    const { portfoliofirstDataApi } = useContext(ApiContext);
    const [portfoliofirst, setfirstDetails] = portfoliofirstDataApi;

    const [pageTitleData, setPageTitleData] = useState(null);
    const [disciplineData, setDisciplineData] = useState(null);
    const [disciplineimgData, setDisciplineimgData] = useState(null);
    const [productmotionData, setProductmotionData] = useState(null);
    const [designapprochData, setDesignapprochData] = useState(null);
    const [typographyData, setTypographyData] = useState(null);
    const [weusedtechnologyData, setWeusedtechnologyData] = useState(null);
    const [threeimagesData, setThreeimagesData] = useState(null);
    const [uiscreenData, setUiscreenData] = useState(null);
    const [ImmersionDeviceData, setImmersionDeviceData] = useState(null);
    const [responsiveData, setresponsiveData] = useState(null);
    const [nextportfolioData, setNextportfolioData] = useState(null);

    useEffect(() => {
        if (allPortfolioPageData !== null) {
            
            let portfolioData = '';
            const slug = id;
            
            if(slug){
                const nodes = allPortfolioPageData?.nodes;
                for (let i = 0; i < nodes?.length; i++) {
                    if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                        portfolioData = nodes[i];
                    }
                }
            }

            let nextItem = '';
            if(slug){
                const nodes = allPortfolioPageData?.nodes;
                for (let i = 0; i < nodes?.length; i++) {
                    if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                        nextItem = nodes[i+1];
                    }
                }
            }

            const serviceslist = portfolioData?.portfolioDetailPageNewOption?.serviceListBannerNew
            const servicelistdetail = []
            serviceslist?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    text: items.serviceNameSingleBanner || '',
                }
                servicelistdetail.push(dataObj)
            })

            const insustrylist = portfolioData?.portfolioDetailPageNewOption?.industriesListBannerNew
            const insustrylistdetail = []
            insustrylist?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    text: items.industriesNameSingleIndus || '',
                }
                insustrylistdetail.push(dataObj)
            })

            setPageTitleData({
                title: portfolioData?.title || '',
                subtitle: portfolioData?.portfolioDetailPageNewOption?.subTitleBannerNew || '',
                image: portfolioData?.portfolioDetailPageNewOption?.backgroundImageBannerNew?.sourceUrl || '',
                servicetitle:portfolioData?.portfolioDetailPageNewOption?.serviceListHeadingBannerNew || '',
                servicelist:servicelistdetail || '',
                industrytitle:portfolioData?.portfolioDetailPageNewOption?.industriesHeadingBannerNew || '',
                industrylist:insustrylistdetail || '',
                date:dateFormat(portfolioData?.date, "mmmm yyyy") || '',
            })

            const disciplinedata = portfolioData?.portfolioDetailPageNewOption?.projectDisciplinesListNew
            const disciplinedetail = []
            disciplinedata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    text: items.textSingleProjectDisc || '',
                }
                disciplinedetail.push(dataObj)
            })

            setDisciplineData({
                title: portfolioData?.portfolioDetailPageNewOption?.titleProjectDisc || '',
                disciplinelist:disciplinedetail || '',
            })

            const disciplineimgdata = portfolioData?.portfolioDetailPageNewOption?.disciplinesImagesProjectDisc
            const disciplineimgdetail = []
            disciplineimgdata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    image: items.imageSingleProjectDisc?.sourceUrl || '',
                }
                disciplineimgdetail.push(dataObj)
            })

            setDisciplineimgData(disciplineimgdetail)

            setProductmotionData({
                title: portfolioData?.portfolioDetailPageNewOption?.headingProductMotion || '',
                text:portfolioData?.portfolioDetailPageNewOption?.textProductMotion || '',
            })

            setDesignapprochData({
                title: portfolioData?.portfolioDetailPageNewOption?.headingAboutDesign || '',
                text:portfolioData?.portfolioDetailPageNewOption?.textAboutDesign || '',
                videourl:portfolioData?.portfolioDetailPageNewOption?.videoFileVideoBox?.mediaItemUrl || '',
                videoimage:portfolioData?.portfolioDetailPageNewOption?.backgroundImageVideoBox?.sourceUrl || '',
            })

            const colordata = portfolioData?.portfolioDetailPageNewOption?.colorListTypography
            const colorlists = []
            colordata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    colorname: items.colorNameSingleTypo || '',
                    colorcode: items.colorSelectSingleTypo || '',
                    textcolor:items.fontColorSingleTypo || '',
                }
                colorlists.push(dataObj)
            })

            setTypographyData({
                title: portfolioData?.portfolioDetailPageNewOption?.titleTypography || '',
                fontname:portfolioData?.portfolioDetailPageNewOption?.fontNameTypography || '',
                boldtext:portfolioData?.portfolioDetailPageNewOption?.extraBoldTextfTypography || '',
                h1text:portfolioData?.portfolioDetailPageNewOption?.h1TextTypography || '',
                h2text:portfolioData?.portfolioDetailPageNewOption?.h2TextTypography || '',
                h3text:portfolioData?.portfolioDetailPageNewOption?.h3TextTypography || '',
                h4text:portfolioData?.portfolioDetailPageNewOption?.h4TextTypography || '',
                h5text:portfolioData?.portfolioDetailPageNewOption?.h5TextTypography || '',
                smalltext:portfolioData?.portfolioDetailPageNewOption?.smallTextH5Typography || '',
                colortitle:portfolioData?.portfolioDetailPageNewOption?.colorTitleTypography || '',
                colortext:portfolioData?.portfolioDetailPageNewOption?.colorTextTypography || '',
                colorlist: colorlists || '',
            })

            const technologydata = portfolioData?.portfolioDetailPageNewOption?.technologiesListNew
            const technologylists = []
            technologydata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    title:items.titleSingleRechnologiesNew || '',
                    text: items.textSingleRechnologiesNew || '',
                }
                technologylists.push(dataObj)
            })

            setWeusedtechnologyData({
                bannerimage: portfolioData?.portfolioDetailPageNewOption?.bannerImageTechnologyNew?.sourceUrl || '',
                title: portfolioData?.portfolioDetailPageNewOption?.titleEchnologiesNew || '',
                technologylist: technologylists,
            })

            setThreeimagesData({
                image1: portfolioData?.portfolioDetailPageNewOption?.image1ThreeBlock?.sourceUrl || '',
                image2: portfolioData?.portfolioDetailPageNewOption?.image2ThreeBlock?.sourceUrl || '',
                image3: portfolioData?.portfolioDetailPageNewOption?.image3ThreeBlock?.sourceUrl || '',
            })

            const screentsdata = portfolioData?.portfolioDetailPageNewOption?.screensListUi
            const screentslists = []
            screentsdata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    image:items.imageSingleScreenitem.sourceUrl || '',
                }
                screentslists.push(dataObj)
            })

            setUiscreenData({
                title: portfolioData?.portfolioDetailPageNewOption?.titleUiscreens || '',
                text: portfolioData?.portfolioDetailPageNewOption?.textUiscreens || '',
                imagelist: screentslists || '',
            })

            setImmersionDeviceData({
                image1: portfolioData?.portfolioDetailPageNewOption?.deviceImage1?.sourceUrl || '',
                title: portfolioData?.portfolioDetailPageNewOption?.headingImmersion || '',
                text: portfolioData?.portfolioDetailPageNewOption?.textImmersion || '',
                image2: portfolioData?.portfolioDetailPageNewOption?.deviceImage2?.sourceUrl || '',
            })

            const imagesdata = portfolioData?.portfolioDetailPageNewOption?.responsiveImageListDe
            const imageslists = []
            imagesdata?.map((items,i) => {
                const dataObj = {
                    value: i + 1,
                    image:items.imageSingleResponsiveDe.sourceUrl || '',
                }
                imageslists.push(dataObj)
            })

            setresponsiveData({
                title: portfolioData?.portfolioDetailPageNewOption?.headingResponsiveDe || '',
                text: portfolioData?.portfolioDetailPageNewOption?.textResponsiveDe || '',
                imagelist: imageslists || '',
                websitelink: portfolioData?.portfolioDetailPageNewOption?.websiteLinkPortfolio || '',
            })

            if(nextItem){
                setNextportfolioData({
                    title: nextItem?.slug || '',
                    slug: nextItem?.title || '',
                    image: nextItem?.portfolioDetailPageNewOption?.backgroundImageBannerNew?.sourceUrl || '',
                    url: nextItem?.uri || '',
                })
            }else{
                setNextportfolioData({
                    title: portfoliofirst?.nodes[0]?.slug || '',
                    slug: portfoliofirst?.nodes[0]?.title || '',
                    image: portfoliofirst?.nodes[0]?.portfolioDetailPageNewOption?.backgroundImageBannerNew?.sourceUrl || '',
                    url: portfoliofirst?.nodes[0]?.uri || '',
                })
            }
            
        }
    }, [id, allPortfolioPageData,portfoliofirst])

    return (
        
        <Layout>
            {(pageTitleData != null && pageTitleData.title != null && pageTitleData.subtitle != null && pageTitleData.servicelist != null && pageTitleData.industrylist != null && pageTitleData.image != null) &&
                <PortfolioBanner portfoliobannerData={pageTitleData} />
            }

            {(disciplineData != null && disciplineData.title != null && disciplineData.disciplinelist != null) &&
                <ProjectDiscipline disciplinesdata={disciplineData} />
            }

            {(disciplineimgData != null) &&
                <DisciplinesImages disciplinesimgData={disciplineimgData} />
            }

            {(productmotionData != null && productmotionData.title != null && productmotionData.text != null) &&
                <ProductMotion productsmotionData={productmotionData} />
            }

            {(designapprochData != null && designapprochData.title != null && designapprochData.text != null) &&
                <DesignApproch designapprochData={designapprochData}/> 
            }

            {(typographyData != null && typographyData.title != null && typographyData.fontname != null) &&
                <TypographyColor typographydata={typographyData} />
            }

            {(weusedtechnologyData != null && weusedtechnologyData.title != null && weusedtechnologyData.technologylist != null && weusedtechnologyData.bannerimage != null) &&
                <WeusedTechnology usetechnologydata={weusedtechnologyData} />
            }

            {(threeimagesData != null) &&
                <ThreeImg threeimgdata={threeimagesData} />
            }

            {(uiscreenData != null && uiscreenData.title != null && uiscreenData.imagelist != null) &&
                <UiScreen uiscreendata={uiscreenData} />
            }

            {(ImmersionDeviceData != null && ImmersionDeviceData.title != null && ImmersionDeviceData.image1 != null && ImmersionDeviceData.image2 != null) &&
                <ImmersionDevice immersiondata={ImmersionDeviceData} />
            }

            {(responsiveData != null && responsiveData.title != null && responsiveData.imagelist != null) &&
                <ResponsiveDesign responsivedata={responsiveData} /> 
            }

            {(nextportfolioData != null) &&
                <ScrollSecChange nextpagedata={nextportfolioData} />
            }

        </Layout>
    )
}