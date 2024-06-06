import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/image";
import ThemeButton from "./ThemeButton";

import Logo from '../../assets/images/logo.svg'

import { GET_HEADER } from "@/queries/graphql_queries";
import { get, post } from "@/queries/api_helper"

const Header = () => {

    const [headerData, setheaderData] = useState(null);
    const [headerLogo, setHeaderLogo] = useState([])
    const [headerMenuItem, setHeaderMenuItem] = useState([])
    const [headerMenuButton, setHeaderMenuButton] = useState([])
    const [isMobileMenuOpen, setMobileMenu] = useState(false);
    useEffect(() => {
        if (headerData == null) {
            const getData = async () => {
                const res = await post('graphql', GET_HEADER);
                if (res.data != undefined && res.data != null) {
                    setheaderData(res.data);
                }
            }
            getData();
        }
        if (headerData?.themeGeneralSettings?.themeSettings?.headerLogo) {
            setHeaderLogo(headerData?.themeGeneralSettings?.themeSettings?.headerLogo)
        }
        if (headerData?.themeGeneralSettings?.themeSettings?.primaryButtonInfo) {
            setHeaderMenuButton(headerData?.themeGeneralSettings?.themeSettings?.primaryButtonInfo)
        }
        if (headerData?.menuItems?.nodes) {
            setHeaderMenuItem(headerData.menuItems.nodes)
        }
    }, [headerData]);

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

    const mobileNavHandler = () => {
        setMobileMenu(!isMobileMenuOpen);
    }

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
                if(headerElement){
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
            }
        });
    }, []);

    const router = useRouter();

    const NavLink = ({ url = "#", text }) => (
        <li className={router.pathname == url ? "active" : " pl-0 4xl:pl-48 2xl:pl-32 xl:pl-32 md:pl-24"}  onClick={mobileNavHandler} >
            <Link href={url} className="font-manrope font-semibold text-14  4xl:text-18  2xl:text-16 md:text-15 text-textColor hover:text-themeRed" >{text}</Link> 
        </li>
    );

    useEffect(() => {
        const handleRouteChange = (url) => {
            const header = document.querySelector(".footer");
            if(header){
                header.classList.add("hideme")    
            }
        };

        const handlestartRouteChange = (url) => {
            const header = document.querySelector(".footer");
            if(header){
                setTimeout(() => {
                    header.classList.remove("hideme")
                }, 1000);  
            } 
        }

        router.events.on('routeChangeComplete', handleRouteChange);
        router.events.on('routeChangeStart', handlestartRouteChange);
    
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
          router.events.off('routeChangeStart', handlestartRouteChange);
        };
    }, [router.events]);

    return (
        <header ref={navbarRef} className="headermain justify-between items-center  xl:px-64 md:px-32 px-24 4xl:py-20  xl:py-16     md:py-24 py-16  fixed top-0 left-0 w-full z-50 flex">
            {/* <button aria-label="open menu" className="navbar_menuButton__BJwt4" type="button"><div className="menu-toggle_wrap__qevaX "></div></button> */}
            <div className="logobox relative z-10 lg:max-w-[110px] xl:max-w-none">
                <Link href="/">
                    {headerLogo?.sourceUrl &&
                        <Image src={headerLogo?.sourceUrl} width="132" height="30" className="h-36 w-auto 4xl:h-60    xl:w-auto    xl:h-48 md:h-54 2xl:w-auto" alt={headerLogo?.altText} />
                    }
                </Link>
                {/* <Link href="/">
                    <Image src={Logo} alt="logo" />
                </Link> */}
            </div>

            <div className="ml-auto items-center hidden lg:flex">

                {(headerMenuItem.length > 0) &&
                    <nav className="flex items-center   pr-18 4xl:pr-64 2xl:pr-32 xl:pr-32 md:pr-24 ">
                        {headerMenuItem.map((item, i) => {
                            return (
                                <NavLink key={`0${i + 1}`} url={item.uri} text={item.label} />
                            )

                        })}
                    </nav>
                }

                <ThemeButton link={`${headerMenuButton.url}`} buttontext={headerMenuButton.title}   className="btngr  
               

                4xl:h-54 
                4xl:text-20
                4xl:px-32
                3xl:h-44 
                3xl:text-18
                3xl:px-28
                2xl:h-42 
                2xl:px-24
                2xl:text-16

                xl:h-44 
                xl:text-16
                xl:px-24
                md:h-50 
                md:text-16
                md:px-32
                h-44 
                text-14
                px-26 " />
            </div>

            {/* mobile nav */}
            <div className={`mobile_nav ${isMobileMenuOpen ? 'active' : ''} flex flex-col items-start lg:hidden fixed top-0 -z-1 left-full w-full h-[100vh] bg-bgColor pb-24 py-96 px-6`}>
            {(headerMenuItem.length > 0) &&
                <nav className="flex items-start flex-col">
                    {headerMenuItem.map((item, i) => {
                        return (
                            <NavLink key={`0${i + 1}`} url={item.uri} text={item.label} />
                        )
                    })}
                </nav>
            }
                <div onClick={mobileNavHandler}  >
                <ThemeButton link={`${headerMenuButton.url}`} buttontext={headerMenuButton.title}  className="btngr block  md:mt-0 mt-24" />
                </div>
            </div>

            <button onClick={mobileNavHandler} className={`nav-btn ${isMobileMenuOpen ? 'active' : ''} flex lg:hidden items-center p-14 mr-[-14px] font-medium tracking-wide xs:text-white capitalize transition-colors duration-300 transform bg-transparent xs:bg-lightgreen rounded-lg active:scale-105`}>

                <div className="active-icon">
                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.69336 1.00841L17.3626 16.451" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M1 16.0582L17.039 1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                </div>

                <div className="default-icon">
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_56_43)">
                        <path d="M23 1H1" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        <path d="M23 11H11" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </g>
                     
                </svg>

                </div>
            </button>

        </header>
    )
}
export default Header;