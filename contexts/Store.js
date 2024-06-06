import React, {useState, useEffect} from "react"
import { ApiContext } from "@/contexts/ApiContext"
import {GET_HOME_PAGE,GET_ABOUT_PAGE,GET_TELLUS_ABOUT,GET_CASE_STUDY_PAGE,GET_CONTACT_PAGE,GET_COLLABORATION_PAGE,GET_HIRETEAM_PAGE,GET_ALL_POST,GET_BLOG_PAGE,GET_PORTFOLIO_FIRST,GET_MAIN_SERVICE,GET_ALLSUB_SERVICE,GET_ALLCASE_STUDY,GET_ALL_BLOG,GET_ALL_PORTFOLIO} from "@/queries/graphql_queries"
import { GET_PORTFOLIO_PAGE } from "@/queries/graphql_queries"
import { GET_SERVICE_PAGE } from "@/queries/graphql_queries"


import { get, post } from "@/queries/api_helper"

// H93b UASx oWXu s0lE 0rWW WInU
// dzNudXRzX2FkbWluOkg5M2IgVUFTeCBvV1h1IHMwbEUgMHJXVyBXSW5V

function Store({ children }){
    let homePageDataCall = false, aboutPageDataCall = false, tellUsDataCall = false, servicePageDataCall = false, portfolioPageDataCall = false, casestudiespageDataCall = false, contactDataCall = false, collaborationDataCall = false, hireteamDataCall = false, postlistDataCall = false, blogpageDataCall = false,firstportfolioDataCall = false,allmainserviceDataCall = false,allsubServiceDataCall = false,allgetstudyDataCall = false,allgetblogDataCall = false,allgetportfolioDataCall = false;

    const [homePageData, setHomePageData] = useState(null);
    const [aboutPageData, setAboutPageData] = useState(null);
    const [tellusData, setTellpageData] = useState(null);
    const [servicePageData, setServicePageData] = useState(null);
    const [portfolioPageData, setportfolioPageData] = useState(null);
    const [casestudiesPageData, setcaseStudiesPageData] = useState(null);
    const [casestudyDetails, setCasestudyDetails] = useState({});
    const [portfoliodtl, setPortfoliodtl] = useState({});
    const [contactPageData, setcontactPageData] = useState(null);
    const [collaborationPageData, setcollaborationPageData] = useState(null);
    const [hireteamPageData, sethireTeamPageData] = useState(null);
    const [postlistPageData, setPostlistPageData] = useState(null);
    const [blogPageData, setBlogPageData] = useState(null);
    const [portfoliofirstPageData, setPortfoliofirstPageData] = useState(null);
    const [allmainServicePageData, setAllsevicePageData] = useState(null);
    const [allsubServicePageData, setAllsubservicePageData] = useState(null);
    const [allgetStudyPageData, setAllgetStudyPageData] = useState(null);
    const [allgetBlogPageData, setAllgetBlogPageData] = useState(null);
    const [allgetPortfolioPageData, setAllgetPortfolioPageData] = useState(null);

    const [cmsPages, setCmsPages] = useState({});

    const getAllmainserviceData = async () => {
        allmainserviceDataCall = true;
        const res = await post('graphql', GET_MAIN_SERVICE);
        if (res?.data?.pages) {
            setAllsevicePageData(res.data.pages);
        }
    }

    const getSubserviceData = async () => {
        allsubServiceDataCall = true;
        const res = await post('graphql', GET_ALLSUB_SERVICE);
        if (res?.data?.pages) {
            setAllsubservicePageData(res.data.pages);
        }
    }

    const getCasestudyData = async () => {
        allgetstudyDataCall = true;
        const res = await post('graphql', GET_ALLCASE_STUDY);
        if (res?.data?.casestudies) {
            setAllgetStudyPageData(res.data.casestudies);
        }
    }

    const getallBlogData = async () => {
        allgetblogDataCall = true;
        const res = await post('graphql', GET_ALL_BLOG);
        if (res?.data?.posts) {
            setAllgetBlogPageData(res.data.posts);
        }
    }

    const getallPortfolioData = async () => {
        allgetportfolioDataCall = true;
        const res = await post('graphql', GET_ALL_PORTFOLIO);
        if (res?.data?.portfolioes) {
            setAllgetPortfolioPageData(res.data.portfolioes);
        }
    }

    const getportfolioFirstData = async () => {
        firstportfolioDataCall = true;
        const res = await post('graphql', GET_PORTFOLIO_FIRST);
        if (res?.data?.portfolioes) {
            setPortfoliofirstPageData(res.data.portfolioes);
        }
    }

    const getHomePageData = async () => {
        homePageDataCall = true;
        const res = await post('graphql', GET_HOME_PAGE);
        if (res?.data?.page?.template) {
            setHomePageData(res.data.page.template);
        }
    }

    const getAboutPageData = async () => {
        aboutPageDataCall = true;
        const res = await post('graphql', GET_ABOUT_PAGE);
        if( res?.data?.page?.template) {
            setAboutPageData(res.data.page.template);
        }
    }

    const setTellData = async () => {
        tellUsDataCall = true;
        const res = await post('graphql', GET_TELLUS_ABOUT);
        if( res?.data?.themeGeneralSettings) {
            setTellpageData(res.data.themeGeneralSettings);
        }
    }

    const getportfolioPageData = async () => {
        portfolioPageDataCall = true;
        const res = await post('graphql', GET_PORTFOLIO_PAGE);
        if (res?.data) {
            setportfolioPageData(res.data);
        }
    }

    const getServicePageData = async () => {
        servicePageDataCall = true;
        const res = await post('graphql', GET_SERVICE_PAGE);
        if (res?.data?.page?.template) {
            setServicePageData(res.data.page.template);
        }
    }

    const getCaseStudiesPageData = async () => {
        casestudiespageDataCall = true;
        const res = await post('graphql', GET_CASE_STUDY_PAGE);
        if( res?.data?.page?.template) {
            setcaseStudiesPageData(res.data.page.template);
        }
    }

    const getContactPageData = async () => {
        contactDataCall = true;
        const res = await post('graphql', GET_CONTACT_PAGE);
        if (res?.data?.page) {
            setcontactPageData(res.data.page);
        }
    }

    const getCollaborationPageData = async () => {
        collaborationDataCall = true;
        const res = await post('graphql', GET_COLLABORATION_PAGE);
        if (res?.data?.page?.template) {
            setcollaborationPageData(res.data.page.template);
        }
    }

    const getHireteamPageData = async () => {
        hireteamDataCall = true;
        const res = await post('graphql', GET_HIRETEAM_PAGE);
        if (res?.data?.page?.template) {
            sethireTeamPageData(res.data.page.template);
        }
    }

    const getPostlistPageData = async () => {
        postlistDataCall = true;
        const res = await post('graphql', GET_ALL_POST);
        if (res?.data?.posts) {
            setPostlistPageData(res.data.posts);
        }
    }

    const getBlogPageData = async () => {
        blogpageDataCall = true;
        const res = await post('graphql', GET_BLOG_PAGE);
        if (res?.data?.page) {
            setBlogPageData(res.data.page);
        }
    }

    useEffect(() => {
        if (!allmainserviceDataCall) {
            getAllmainserviceData();
        }
    }, [])

    useEffect(() => {
        if (!allsubServiceDataCall) {
            getSubserviceData();
        }
    }, [])

    useEffect(() => {
        if (!allgetstudyDataCall) {
            getCasestudyData();
        }
    }, [])

    useEffect(() => {
        if (!allgetblogDataCall) {
            getallBlogData();
        }
    }, [])

    useEffect(() => {
        if (!allgetportfolioDataCall) {
            getallPortfolioData();
        }
    }, [])

    useEffect(() => {
        if (!firstportfolioDataCall) {
            getportfolioFirstData();
        }
    }, [])

    useEffect(() => {
        if (!homePageDataCall) {
            getHomePageData();
        }
    }, [])

    useEffect(() => {
        if (!portfolioPageDataCall) {
            getportfolioPageData();
        }
    }, [])

    useEffect(() => {
        if (!servicePageDataCall) {
            getServicePageData();
        }
    }, [])

    useEffect(() => {
        if (!tellUsDataCall) {
            setTellData();
        }
    }, [])

    useEffect(() => {
        if (!aboutPageDataCall) {
            getAboutPageData();
        }
    }, [])

    useEffect(() => {
        if (!casestudiespageDataCall) {
            getCaseStudiesPageData();
        }
    }, [])

    useEffect(() => {
        if (!contactDataCall) {
            getContactPageData();
        }
    }, [])

    useEffect(() => {
        if (!collaborationDataCall) {
            getCollaborationPageData();
        }
    }, [])

    useEffect(() => {
        if (!hireteamDataCall) {
            getHireteamPageData();
        }
        if (!postlistDataCall) {
            getPostlistPageData();
        }
        if (!blogpageDataCall) {
            getBlogPageData();
        }
    }, [])

    const data = {
        homePageDataApi: [homePageData, setHomePageData],
        aboutPageDataApi: [aboutPageData, setAboutPageData],
        tellusPageDataApi: [tellusData, setTellpageData],
        portfolioPageDataApi: [portfolioPageData, setportfolioPageData],
        servicePageDataApi: [servicePageData, setServicePageData],
        caseStudiesPageDataApi: [casestudiesPageData, setcaseStudiesPageData],
        casedtlPageDataApi: [casestudyDetails, setCasestudyDetails],
        portfdtlPageDataApi: [portfoliodtl, setPortfoliodtl],
        contactPageDataApi: [contactPageData, setcontactPageData],
        collaborationPageDataApi: [collaborationPageData, setcollaborationPageData],
        hireteamPageDataApi: [hireteamPageData, sethireTeamPageData],
        postlistPageDataApi: [postlistPageData, setPostlistPageData],
        blogPageDataApi: [blogPageData, setBlogPageData],
        portfoliofirstDataApi: [portfoliofirstPageData, setPortfoliofirstPageData],
        allmainseviceDataApi: [allmainServicePageData, setAllsevicePageData],
        allsubServiceDataApi: [allsubServicePageData, setAllsubservicePageData],
        allCasestudyDataApi: [allgetStudyPageData, setAllgetStudyPageData],
        allBlogDataApi: [allgetBlogPageData, setAllgetBlogPageData],
        allPortfolioDataApi: [allgetPortfolioPageData, setAllgetPortfolioPageData],
        cmsPagesApi: [cmsPages, setCmsPages]
    }
    return (
        <ApiContext.Provider value={data}>
            {children}
        </ApiContext.Provider>
    )
}

export default Store