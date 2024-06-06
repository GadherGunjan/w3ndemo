import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/image";
import ThemeButton from "./ThemeButton";

import Logo from '../../assets/images/logo.svg'

import { GET_HEARD_PAGE } from "@/queries/graphql_queries";
import client from "@/apollo_client/client";



const Header = () => {

    const [headerLogo, setHeaderLogo] = useState([])
    const [headerMenuItem, setHeaderMenuItem] = useState([])
    const [headerMenuButton, setHeaderMenuButton] = useState([])
    const getServerSideProps = async (context) => {
        const { data } = await client.query({
            query: GET_HEARD_PAGE,
            variables: { id: "header_menu" }
        })
        return {
            props: {
                headerData: data
            }
        }
    }

    useEffect(() => {
        getServerSideProps().then((data) => {
            setHeaderLogo(data.props.headerData?.themeGeneralSettings?.themeSettings?.headerLogo)

            setHeaderMenuButton(data.props.headerData?.themeGeneralSettings?.themeSettings?.primaryButtonInfo)

            const menuItems = [];
            if (data?.props?.headerData?.menu?.menuItems) {
                const menuItemsData = data?.props?.headerData?.menu?.menuItems?.nodes;
                menuItemsData?.map((item, i) => {
                    const dataObj = {
                        value: `0${i + 1}`,
                        label: item.label,
                        uri: item.uri,
                    }
                    menuItems.push(dataObj);
                });
            }
            setHeaderMenuItem(menuItems)
        })
    }, [])

    /* gsap.registerPlugin(ScrollTrigger);

    const navbarRef = useRef(null);
    useEffect(() => {
        const showNav = gsap.fromTo(
            navbarRef.current, {
                opacity:0,
            }, {
                opacity: 1,
                duration: 0.4,
            }
        ).progress(1);
        ScrollTrigger.create({
            start: "top top",
            end: "max",
            onUpdate: (self) => {
                self.direction === -1 ? showNav.play() : ''
            }
        });
    }, []) */
    gsap.registerPlugin(ScrollTrigger)
    const navbarRef = useRef(null);
    useEffect(() => {
        const showNav = gsap.fromTo(
            navbarRef.current,
            {
                opacity: 0,
                translateY: "-100%",
            },
            {
                opacity: 1,
                duration: 0.4,
                translateY: "0%",
            }
        ).progress(1);

        ScrollTrigger.create({
            start: "top top",
            end: "max",
            //   markers: true,
            onUpdate: (self) => {
                // self.direction === -1 ? showNav.play() : showNav.reverse();
                const headerElement = document.querySelector('.headermain');
                if (self.direction === -1) {
                    showNav.play()
                    if (self.progress > 0.026) {
                        headerElement.classList.add('bg-class');
                    } else {
                        headerElement.classList.remove('bg-class');
                    }
                } else {
                    showNav.reverse();
                }
            }
        });
    }, []);

    const router = useRouter();

    const NavLink = ({ url = "#", text }) => (
        <li className={router.pathname == url ? "active" : "px-6"} >
            <Link href={url} className="font-manrope font-semibold text-18 text-textColor hover:text-themeRed" >{text}</Link>
        </li>
    );
    return (
        <header ref={navbarRef} className="headermain flex items-center px-16 py-5 fixed top-0 left-0 w-full z-50">
            <div>
                <Link href="/">
                    <Image src={headerLogo?.sourceUrl} width="132" height="30" alt={headerLogo?.altText} />
                </Link>
            </div>

            <div className="ml-auto flex items-center">
                {(headerMenuItem.length > 0) &&
                    <nav className="flex items-center mx-[-24px] ">
                        {headerMenuItem.map((item, i) => {
                            return (
                                <NavLink key={i} url={item.uri} text={item.label} />
                            )

                        })}
                    </nav>
                }
                <ThemeButton link={`${headerMenuButton.url}`} buttontext={headerMenuButton.title} className="btngr ml-64" />
            </div>
            {/*<div className="ml-auto flex items-center">
                <nav className="flex items-center mx-[-24px] ">
                    <NavLink url="/services" text="Services" />
                    <NavLink url="/hire-team" text="Hire Team" />
                    <NavLink url="/portfolio" text="Portfolio" />
                    <NavLink url="/case-studies" text="Case Studies" />
                    <NavLink url="/about-us" text="About Us" />
                    <NavLink url="/collaboration" text="Collaboration" />
                    <NavLink url="/blog" text="Blog" />
                </nav>
                <ThemeButton link="aboutus" buttontext="Contact Us" className="btngr ml-64" />
            </div> */ }

        </header>
    )
}
export default Header;