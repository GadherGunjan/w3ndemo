import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import footerLogo from '../../assets/images/logo.svg'

import FacebookFooterIcon from "@/assets/images/svgs/FacebookFooterIcon";
import TwitterFooterIcon from "@/assets/images/svgs/TwitterFooterIcon";
import LinkedinFooterIcon from "@/assets/images/svgs/LinkedinFooterIcon";
import InstagramFooterIcon from "@/assets/images/svgs/InstagramFooterIcon";

import { GET_FOOTER_MENU, GET_FOOTER_OPTION } from "@/queries/graphql_queries";
import client from "@/apollo_client/client";

const Footer = () => {

    const [footerMenuItem, setFooterMenuItem] = useState([])
    const [footerOption, setFooterOption] = useState([])
    const getServerSideProps = async (context) => {
        const { data } = await client.query({
            query: GET_FOOTER_MENU,
            variables: { id: "footer_menu" }
        })
        const dataFooter = await client.query({
            query: GET_FOOTER_OPTION
        })
        return {
            props: {
                footerMenu: data,
                footerOptionData: dataFooter
            }
        }
    }

    useEffect(() => {
        getServerSideProps().then((data) => {
            setFooterMenuItem(data?.props?.footerMenu?.menu?.menuItems?.nodes)
            setFooterOption(data?.props?.footerOptionData?.data?.themeGeneralSettings?.themeSettings)
        })
    }, [])

    const router = useRouter();
    const FooterNavLink = ({ url = "#", text }) => (
        <li className={`flex mt-30 ${router.pathname == url ? "active" : ""}`} >
            <Link href={url} className="block font-workSans text-16 text-textColor hover:text-themeRed" >{text}</Link>
        </li>
    );

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

    return (
        <div className="footer w-full relative overflow-hidden border-t border-solid border-borderColor">
            <div className="container">
                <div className="grid grid-cols-5">
                    <div className="col-span-1 border-r border-solid border-borderColor pt-8 pb-12">
                        <div className="logofooter mb-30">
                            <Link href='#'>
                                <Image src={footerOption?.foooterLogo?.sourceUrl} width="176" height="80" alt="A Bespoke and Holistic Digital Agency" className="h-[80px] w-auto" />
                            </Link>
                        </div>
                        {(footerMenuItem?.length > 0) &&
                            <nav className="flex flex-col">
                                {footerMenuItem.map((item, i) => {
                                    return (
                                        <FooterNavLink url={item.uri} key={i} text={item.label} />
                                    )

                                })}
                            </nav>
                        }
                    </div>
                    <div className="col-span-4 grid grid-cols-4">
                        <div className="col-span-1 px-6 pt-8 pb-12">
                            <h3 className="font-manrope text-20 text-textColorSecondary">{footerOption?.designMenuTitle}</h3>
                        </div>
                        <div className="col-span-1 px-6 pt-8 pb-12">
                            <h3 className="font-manrope text-20 text-textColorSecondary">{footerOption?.webMenuTitle}</h3>
                        </div>
                        <div className="col-span-1 px-6 pt-8 pb-12">
                            <h3 className="font-manrope text-20 text-textColorSecondary">{footerOption?.eCommerceMenuTitle}</h3>
                        </div>
                        <div className="col-span-1 px-6 pt-8 pb-12">
                            <h3 className="font-manrope text-20 text-textColorSecondary">{footerOption?.mobileMenuTitle}</h3>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5">
                    <div className="col-span-1 border-r border-solid border-borderColor py-8 flex items-center">
                        <div className="flex items-center [&>*:nth-child(1n+2)]:ml-6">
                            {footerSolialLinks.map(({ value, icon, link }) => (
                                <div className="flex" key={value}>
                                    <Link href={`${link}`} className="text-textColorSecondary hover:text-white">{icon}</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-4 border-t border-solid border-borderColor flex items-center">
                        <div className="copyrightfooter flex justify-between px-8">
                            <p className="text-textColorSecondary text-16 font-workSans" dangerouslySetInnerHTML={{ __html: footerOption?.copyrightText }}></p>
                            <div className="partnerlogos"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;