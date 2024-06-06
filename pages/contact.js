
import DefaultLayout from "@/components/layout/DefaultLayout";
import PageTitle from "@/components/layout/PageTitle";
import TellUsAboutIt from "@/components/layout/TellUsAboutIt";

import { useState, useEffect, useContext } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import Layout from "@/components/layout/PageTran";

export default function Contact() {
    const {tellusPageDataApi} = useContext(ApiContext);
    const [tellusPageData, setTellusPageData] = tellusPageDataApi;
    const [tellusaboutData, settellUsData] = useState(null);

    const {contactPageDataApi} = useContext(ApiContext);
    const [contactPageData, setcontactPageData] = contactPageDataApi;

    const [pageTitleData, setPageTitleData] = useState(null);

    useEffect(() => {
        if (tellusPageData !== null) {
            
            const SociallinkData = [];
            tellusPageData.themeSettings.socialLinksFooter.map((item, i) => {
                const dataObj = {
                    value: i + 1,
                    icon:item.iconSingle.sourceUrl,
                    link: item.linkSingle,
                    alt: 'image',
                }
                SociallinkData.push(dataObj)
            });
            settellUsData({
                heading : '',
                subheading : tellusPageData.themeSettings.footerFormSubheading,
                description : tellusPageData.themeSettings.footerFormDescription,
                email : tellusPageData.themeSettings.footerFormEmail,
                skype : tellusPageData.themeSettings.footerFormSkype,
                phonenumber : tellusPageData.themeSettings.footerFormWhatsappmobile,
                followus:tellusPageData.themeSettings.footerFormFollowUsText,
                formshortcode :tellusPageData.themeSettings.footerFormFormShortcode,
                sociallinks:SociallinkData,
                serviceslist:tellusPageData.themeSettings.servicesListAboutform,
                projectBudgetlist:tellusPageData.themeSettings.projectBudgetListForm,
            })
        }
    }, [tellusPageData])

    useEffect(() => {
        if (contactPageData !== null) {
            
            setPageTitleData({
                title : contactPageData?.contactPageOption?.contactHeading || '',
                subtitle:contactPageData?.contactPageOption?.contactSubHeading || '',
                haslogo : '',
                type : 'smallbig',
            })

        }
    }, [contactPageData])    

    return (
        <Layout>
            { 
                (pageTitleData != null && pageTitleData.title != '' && pageTitleData.subtitle != '') && <PageTitle pageTitleData={pageTitleData} /> 
            }
            { (tellusaboutData != null) && <TellUsAboutIt tellUsData={tellusaboutData} />}
        </Layout>
    )
}
