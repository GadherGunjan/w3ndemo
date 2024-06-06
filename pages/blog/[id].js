import Image from 'next/image';
import { useState, useEffect, useContext, useCallback } from "react";
import ClickableElements from '@/components/portfolio/ClickableElements';
import {gsap} from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useRef } from "react";
import { ApiContext } from "@/contexts/ApiContext";
import { useRouter } from "next/router";
import Link from 'next/link';
import Layout from '@/components/layout/PageTran';

const BlogDetails = () => {

    const router = useRouter()
    const { id } = router.query

    const { allBlogDataApi } = useContext(ApiContext);
    const [allBlogPageData, setBlogPageData] = allBlogDataApi;

    const [blogTitleData, setblogTitleData] = useState(null);
    const [sidebarData, setSidebarData] = useState(null);
    const [detailPageData, setDetailpageData] = useState(null);

    const shareurl = `${process.env.NEXTAUTH_URL}blog/${id}`;

    useEffect(() => {
        if (allBlogPageData !== null) {

            let blogData = '';
            const slug = id;
            if(slug){
                const nodes = allBlogPageData?.nodes;
                for (let i = 0; i < nodes?.length; i++) {
                    if (nodes[i]?.slug?.toLowerCase() === slug?.toLowerCase()) {
                        blogData = nodes[i];
                    }
                }
            }

            setDetailpageData(blogData?.postDetailPageOption?.descriptionBoxMain)

            setblogTitleData({
                title: blogData?.title || '',
                subtitle: blogData?.postDetailPageOption?.bannerSubTitle || '',
                authorname: blogData?.author?.node?.name || '',
                authordesc: blogData?.author?.node?.description || '',
                image: blogData?.featuredImage?.node?.mediaItemUrl || '',
            })

            setSidebarData({
                tabletitle: blogData?.postDetailPageOption?.tabelOfContentTitle || '',
                sharetitle: blogData?.postDetailPageOption?.shareSectionTitle || '',
                boxtitle: blogData?.postDetailPageOption?.boxTitlePost || '',
                boxtext: blogData?.postDetailPageOption?.boxTextPost || '',
                boxlink: blogData?.postDetailPageOption?.boxButtonPost || '',
            })
        }
    }, [allBlogPageData,id]);

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
                    const headerElement = document.querySelector('.mobileinner');
                    if (self.direction === -1) {
                        showNav.play()
                        if(detailPageData){
                            if (self.progress > 0.026) {
                                headerElement.classList.add('bg-class');
                            } else {
                                headerElement.classList.remove('bg-class');
                            }
                        }
                    } else {
                        showNav.reverse();
                    }
                }
            });
        }, [detailPageData]);


    return(
        <Layout>
        {(blogTitleData != null) &&
            <div className="relative w-full pt-[130px] md:pt-[100px] xl:pt-164 4xl:pt-196 sm:pt-28" id='shopyblog'>
                {(detailPageData != null) &&
                    <div ref={navbarRef} className='mobileinner'>
                        <div className='mobileMenu md:hidden'>
                            <ul className='pb-7 lg:pb-12'>
                                {detailPageData?.map((tab,index1) => {
                                    if(tab?.descriptionMtrMainTitle){
                                        return (
                                            <>
                                            <li className='text-18 xl:text-24 text-[#818181]'><ClickableElements targetSection={`tab_id${index1}`} textProps={tab?.descriptionMtrMainTitle || ''} key={index1} /></li>
                                            </>
                                        );
                                    }
                                })}
                            </ul>
                        </div>
                    </div>
                }
                <div className="container">
                    <div className="flex flex-col md:flex-row pb-10 lg:pb-[108px] sm:gap-y-8 md:gap-y-4 items-center gap-[30px] border-b border-solid border-borderColor">
                        <div className="w-full md:w-1/2">
                            {(blogTitleData.subtitle != null) &&
                                <h1 className="titleText mb-8 md:mb-5">
                                    <span className="text-52 lg:text-64 xl:text-[74px] 3xl:text-96 text-textprimary">{blogTitleData.subtitle || ''}</span>
                                </h1>
                            }
                            {(blogTitleData.title != null) &&
                                <h2 className="text-[32px] lg:text-36 xl:text-48 2xl:text-52 3xl:text-64 font-extrabold uppercase">{blogTitleData.title || ''}</h2>
                            }
                            {(blogTitleData.authorname != null) &&
                                <div className="pt-[40px] flex flex-row xl:pt-14 lg:pt-10 sm:pt-10">
                                    <div className="w-[111px] h-[111px] block rounded-[12px] bg-white overflow-hidden">
                                        {/* Image will be here */}
                                    </div>
                                    <div className='pl-4 xl:pl-6 sm:pl-4'>
                                        <h5 className='text-24 leading-none font-bold pb-2'>{blogTitleData.authorname || ''}</h5>
                                        <p className='text-16 lg:text-20 text-textColorSecondary'>{blogTitleData.authordesc || ''}</p>
                                        <div className='flex gap-4 pt-4'>
                                            <Link href='#' className='text-16 md:text-20 font-semibold underline uppercase lingra-text'>Email</Link>
                                            <Link href='#' className='text-16 md:text-20 font-semibold underline uppercase lingra-text'>Linkedin</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                        <div className="w-full md:w-1/2">
                            {(blogTitleData.image != null) &&
                                <div className='w-full block rounded-[20px] xl:rounded-[40px] h-auto overflow-hidden'>
                                    <Image src={blogTitleData.image || ''} width="750" height="560" className='w-full object-cover' alt='' />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        }

        {/* {console.log(detailPageData)} */}
        <div className='pt-10 lg:pt-[63px] pb-24'>
            <div className="container">
                <div className='flex items-start flex-col sm:gap-y-4 md:flex-row md:gap-y-4 gap-[30px] justify-between'>
                    <div className='w-full md:w-8/12'>

                        <div className='blog-details-post_sec'>
                            {
                                detailPageData?.map((tab,index) => {
                                    let content = [];
                                    if(tab?.descriptionMtrMainTitle){
                                        content.push(
                                             <h2 className={`tab_id${index}`} id={`tab_id${index}`} key={index}>{tab.descriptionMtrMainTitle || ''}</h2>
                                        );
                                    }
                                    content.push( 
                                        tab.descriptionListSinglemtr.map((data,index) => {
                                            if(data.fieldGroupName == "Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_TextSubItemsub"){  
                                                if(data.textSubItemMain){
                                                    return (
                                                        <p key={index} dangerouslySetInnerHTML={{ __html: data.textSubItemMain }}></p>
                                                    );
                                                }
                                            }else if(data.fieldGroupName == "Post_Postdetailpageoption_DescriptionBoxMain_ContentBoxMgr_DescriptionListSinglemtr_ImageSubItemsubCopy"){
                                                if(data?.imageSubItemMain?.sourceUrl){
                                                    return (
                                                        <div className='imgbox' key={index}><Image src={data?.imageSubItemMain?.sourceUrl || ''} width={'1010'} height={'560'} alt='blogimage' /></div>
                                                    );
                                                }
                                            }else{
                                                return (
                                                    <p key={index}></p>
                                                );
                                            }
                                        })
                                    );
                                    return content;
                                })
                            }
                            
                        </div>
                    </div>

                    {(sidebarData?.tabletitle != '' || sidebarData?.sharetitle != '' || sidebarData?.boxtitle != '') &&
                    <div className='w-full md:w-3/12 pb-12 sticky top-14'>
                        <>
                        {(sidebarData?.tabletitle != null) &&
                            <h5 className='hidden md:block lg:text-24 leading-none font-bold pb-6 text-18'>{sidebarData.tabletitle || ''}</h5>
                        }

                        {(detailPageData != null) &&
                            <ul className='blg-dtl-sidebar-ul pb-7 lg:pb-12'>
                                {detailPageData?.map((tab,index1) => {
                                    if(tab?.descriptionMtrMainTitle){
                                        return (
                                            <>
                                            <li className='text-18 xl:text-24 text-[#818181]'><ClickableElements targetSection={`tab_id${index1}`} textProps={tab?.descriptionMtrMainTitle || ''} key={index1} /></li>
                                            </>
                                        );
                                    }
                                })}
                            </ul>
                        }

                        {(sidebarData?.sharetitle != null) &&
                            <div className='py-7 lg:py-12 border-t border-solid border-borderColor'>
                                <h5 className='leading-none font-bold'>{sidebarData?.sharetitle || ''}</h5>
                                <div className='flex gap-4 pt-4'>
                                    <Link href={`http://www.facebook.com/share.php?u=${shareurl}&title=${blogTitleData.title}`} className='text-16 lg:text-18 xl:text-20 font-semibold underline uppercase lingra-text'>Facebook</Link>
                                    <Link href={`http://www.linkedin.com/shareArticle?mini=true&url=${shareurl}&title=${blogTitleData.title}=https://w3nuts.co.uk`} className='text-16 lg:text-18 xl:text-20 font-semibold underline uppercase lingra-text'>Linkedin</Link>
                                </div>
                            </div>
                        }

                        {(sidebarData?.boxtitle != null || sidebarData?.boxtext != null || sidebarData?.boxlink != null) &&
                            <div className='px-4 pt-4 pb-5 2xl:px-8 2xl:pt-8 lg:pb-10 rounded-[16px] bg-bgSecondary'>
                                <h5 className='font-bold pb-4 text-16 lg:text-18 xl:text-20'>{sidebarData?.boxtitle || ''}</h5>
                                <p className='text-textColorSecondary text-16 lg:text-18 xl:text-20' >{sidebarData?.boxtext || ''}</p>
                                {(sidebarData?.boxlink?.title != null) &&
                                    <div className='pt-8 flex'>
                                        <Link href={sidebarData?.boxlink?.url || ''} className='text-16 text-themeRed font-bold uppercase flex items-center gap-x-2 relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-themeRed lg:text-20 xl:text-24' >{sidebarData?.boxlink?.title} 
                                            <span>
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19 6L5 20" stroke="#FF0036" strokeWidth="2" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round"/>
                                                    <path d="M20 18.2043V5H6.79571" stroke="#FF0036" strokeWidth="1.5" stroke-miterlimit="10" strokeLinecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </span> 
                                        </Link>
                                    </div>
                                }
                            </div>
                        }

                        </>
                    
                    </div>
                    }

                    
                </div>
            </div>
        </div>
        
        </Layout>
    )
}

export default BlogDetails;