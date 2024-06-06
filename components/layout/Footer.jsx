import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import footerLogo from '../../assets/images/logo.svg'

import FacebookFooterIcon from "@/assets/images/svgs/FacebookFooterIcon";
import TwitterFooterIcon from "@/assets/images/svgs/TwitterFooterIcon";
import LinkedinFooterIcon from "@/assets/images/svgs/LinkedinFooterIcon";
import InstagramFooterIcon from "@/assets/images/svgs/InstagramFooterIcon";
import TechPartnerBadge from '@/assets/images/TechPartner_Badge.png'
import VerifyWooicon from '@/assets/images/verify-woo-icon.svg'

import { GET_HEADER } from "@/queries/graphql_queries";
import { get, post } from "@/queries/api_helper"
import { ApiContext } from "@/contexts/ApiContext";

const Footer = () => {

    const { cmsPagesApi } = useContext(ApiContext);

    const [footerMenuData, setFooterMenuData] = useState(null);
    const [footerMenuItem, setFooterMenuItem] = useState([])
    useEffect(() => {
        if (footerMenuData == null) {
            const getData = async () => {
                const res = await post('graphql', GET_HEADER);
                if (res.data != undefined && res.data != null) {
                    setFooterMenuData(res.data);
                }

                // document.body.classList.add("loaded");

            }
            getData();
        }
        if (footerMenuData?.footermenu?.nodes) {
            setFooterMenuItem(footerMenuData.footermenu.nodes)
        }
    }, [footerMenuItem, footerMenuData]);

    const [footerOption, setFooterOption] = useState(null);
    
    useEffect(() => {
        if (footerMenuData?.themeGeneralSettings?.themeSettings) {
            setFooterOption(footerMenuData.themeGeneralSettings.themeSettings)
        }
    }, [footerMenuData, footerOption]);

    const [footerSecondaryMenuItem, setFooterSecondaryMenuItem] = useState([])
    useEffect(() => {
        if (footerMenuData?.footersecondarymenu?.nodes) {
            setFooterSecondaryMenuItem(footerMenuData.footersecondarymenu.nodes)
        }
    }, [footerSecondaryMenuItem, footerMenuData]);

    const router = useRouter()
    const FooterNavLink = ({ url = "#", text }) => (
        <li className={`flex   mt-16 4xl:mt-30 xl:mt-24 lg:mt-18 md:mt-0 ${router.pathname == url ? "active" : ""}`} >
            <Link href={url} className="block text-14 4xl:text-16 3xl:text-15 lg:text-14 md:text-18 text-textColor hover:text-themeRed" >{text}</Link>
        </li>
    );

    const pagename = router.pathname
    

    const footerSolialLinks = [
        {
            value: '01',
            icon: FacebookFooterIcon(),
            link: footerOption?.facebookUrl,
        },
        {
            value: '02',
            icon: TwitterFooterIcon(),
            link: footerOption?.twitterUrl,
        },
        {
            value: '03',
            icon: LinkedinFooterIcon(),
            link: footerOption?.linkedinUrl,
        },
        {
            value: '04',
            icon: InstagramFooterIcon(),
            link: footerOption?.instagramUrl,
        },
    ]

    const serviceBlocks = [];

    if (footerSecondaryMenuItem.length > 0) {
        footerSecondaryMenuItem.map((item, i) => {

            const dataObj = {
                value: `0${i + 1}`,
                title: item.label,
                serviceslink: [],
            }

            if (item?.childItems?.nodes) {
                item.childItems.nodes.map((subItem, sI) => {
                    
                    const subDataObj = {
                        text: subItem.label,
                        link: subItem.uri,
                    }
                    dataObj.serviceslink.push(subDataObj)
                })
            }
            serviceBlocks.push(dataObj)
        });
    }

    if(pagename != '/portfolio/[id]' && pagename != '/portfolio/portfolioindex'){
        return (
            <div className="footer w-full relative overflow-hidden border-t border-solid border-borderColor lg:flex">
                <div className="container">
                    <div className="grid lg:grid-cols-5 grid-cols-1 md:px-0">
                        <div className="col-span-1 lg:border-r md:border-solid md:border-borderColor   lg:pb-12    4xl:pt-40 3xl:pt-32 2xl:pt-28 xl:pt-24 md:pt-20 pt-24">
                            <div className="logofooter mb-[2px] 4xl:mb-30 xl:mb-24 md:mb-18   lg:max-w-[115px] xl:max-w-[140px]  2xl:max-w-none flex lg:flex-col lg:justify-start md:justify-center w-full">
                                <Link href='#'>
                                    <Image src={footerLogo} alt="A Bespoke and Holistic Digital Agency" className="3xl:h-[80px] xl:h-[60px] w-auto" />
                                </Link>
                            </div>
            
                            {(footerMenuItem.length > 0) &&
                                <nav className="flex lg:flex-col md:flex-row flex-col lg:justify-start md:justify-center md:flex-wrap md:pt-24 lg:pt-0  lg:gap-x-0 md:gap-x-48  lg:gap-y-0 md:gap-y-24 lg:px-0 md:px-48">
                                    {footerMenuItem.map((item, i) => {
                                        return (
                                            <FooterNavLink key={`0${i + 1}`} url={item.uri} text={item.label} />
                                        )
    
                                    })}
                                </nav>
                            }
                            <div className="col-span-1 border-b border-solid border-borderColor  md:py-48 py-[24px] flex lg:hidden items-center">
                                <div className="flex items-center 
                                2xl:[&>*:nth-child(1n+2)]:ml-6 
                                [&>*:nth-child(1n+2)]:ml-20
                                 md:justify-center
                                  w-full
                                  justify-start
                                ">
                                    {footerSolialLinks.map(({ value, icon, link }) => (
                                        <div className="flex footer-social" key={value}>
                                            <Link href={`${link}`} className="text-textColorSecondary hover:text-white">{icon}</Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 grid md:grid-cols-4 grid-cols-2 md:pb-0 pb-24">
    
                            {serviceBlocks.map((data, index) => (
                                <div className="col-span-1    group relative pt-24   4xl:p-40 3xl:p-32 2xl:p-28 xl:p-24 md:p-20 4xl:pb-60 3xl:pb-50 2xl:pb-44 xl:pb-40 md:pb-32  lg:px-20 md:px-0    " key={index}>
                                    <div className="absolute pointer-events-none left-0 top-0 w-full h-full z-0 bg-gradient-gray transition-all duration-300 opacity-0 lg:group-hover:opacity-100"></div>
                                    <h3 className="relative z-10 font-manrope   text-textColorSecondary transition-all duration-300 font-normal   md:group-hover:text-themeRed  pb-20 4xl:pb-60 3xl:pb-50 2xl:pb-44 xl:pb-40 md:pb-32 text-14 4xl:text-20 3xl:text-18 md:text-16">{data.title}</h3>
                                    <ul className="relative z-10 flex flex-col gap-y-10 2xl:gap-y-32 xl:gap-y-28 md:gap-y-20">
                                        {data.serviceslink.map((element, subindex) => (
                                            <li className="flex items-center" key={subindex}>
                                                <Link href={element.link} className="group relative text-textprimary text-14 4xl:text-16 3xl:text-15   leading-[normal] flex items-center 
                                                before:content-['']
                                                before:relative
                                                before:w-[6px]
                                                before:h-[6px]
                                                before:rounded-[20px]
                                                before:bg-linecolor
                                                lg:before:block
                                                before:hidden
                                                before:mr-2
                                                lg:hover:before:bg-themeRed
                                                
                                                ">
                                                    {element.text}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-5 lg:pb-0 pb-0">
                        <div className="col-span-1 border-r border-solid border-borderColor py-8 hidden lg:flex items-center">
                            <div className="flex items-center xl:[&>*:nth-child(1n+2)]:ml-[15px] 2xl:[&>*:nth-child(1n+2)]:ml-6 [&>*:nth-child(1n+2)]:ml-2">
                                {footerSolialLinks.map(({ value, icon, link }) => (
                                    <div className="flex footer-social" key={value}>
                                        <Link href={`${link}`} className="text-textColorSecondary hover:text-white">{icon}</Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-5 lg:col-span-4 border-t border-solid border-borderColor flex items-center lg:justify-between md:justify-center flex-wrap lg:flex-nowrap xl:flex-nowrap lg:gap-8 md:gap-24 gap-20 lg:w-auto w-full pt-24 lg:pt-5 xl:pt-24  lg:pb-24   md:pt-24 md:pb-32 pb-24">
                            <div className="copyrightfooter flex 3xl:max-w-none   2xl:max-w-[600px]  xl:max-w-none lg:max-w-[327px]  md:max-w-none max-w-[327px]  justify-between 4xl:pl-40 lg:pl-24 px-0">
                                <p className="text-textColorSecondary text-14 4xl:text-16 3xl:text-15" dangerouslySetInnerHTML={{ __html: footerOption?.copyrightText }}></p>
                                <div className="partnerlogos"></div>
                            </div>
                            <div className="flex items-center lg:pl-1 xl:pl-1 2xl:pl-0">
                                <div className="mr-30">
                                    <Image src={TechPartnerBadge} alt="TechPartner_Badge" className=" w-auto  2xl:max-w-[193px] xl:max-w-[150px]" />
                                </div>
                                <div className="">
                                    <Image src={VerifyWooicon} alt="verify-woo-icon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;