import BlogBlock from "./BlogBlock";
import ThemeButton from "./ThemeButton";
import { useState,useCallback, useEffect } from "react";
import { get, post } from "@/queries/api_helper"
import { GET_ALL_POST } from "@/queries/graphql_queries";
import Link from "next/link";
import dateFormat from "dateformat";
import RightBoldArrowBigIcon from "@/assets/images/svgs/RightBoldArrowBigIcon";



const BlogPageBlock = ({blogdata,endCursor}) => {

    const [blogs,setBlogs] = useState(null);
    const [buttondisabel, setButtonshow] = useState(null);
    const [buttonendpoint, setButtonendpoint] = useState(null);
    const [showMoreBtnText, setShowMoreBtnText] = useState("Load More");

    useEffect(() => {
        if (endCursor !== null) {
            setButtonshow(endCursor.hasNextPage)
            setButtonendpoint(endCursor.endCursor)
            setBlogs(blogdata)
        }
    }, [endCursor,blogdata]);

    const loadMoreHandler = async (event) => {
        setShowMoreBtnText("Loading...")
        const loadmorePosts = {
            ...GET_ALL_POST,
            ...{ variables: { 'after': event } }
        }
        const postData = await post('graphql', loadmorePosts);
        const bloglistdataInfo = blogdata;

        postData?.data?.posts?.edges.map((item, i) => {
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

        setButtonshow(postData?.data?.posts?.pageInfo?.hasNextPage)
        setButtonendpoint(postData?.data?.posts?.pageInfo?.endCursor)
        setBlogs(bloglistdataInfo);
        setShowMoreBtnText("Load More")
    }

    return (
        <div className="blogrowmain relative 
            pt-24 4xl:pt-128 3xl:pt-96 2xl:pt-64 xl:pt-48 lg:pt-32 md:pt-32
            pb-20 4xl:pb-96 2xl:pb-64 xl:pb-36 md:pb-28
        ">
            <div className="container flex flex-col gap-y-16 2xl:gap-y-32 xl:gap-y-28 md:gap-y-20">
                {blogs?.map((data,index)=>(
                    <BlogBlock key={index} data={data} />
                ))}
                {buttondisabel &&
                <div className="btnbox flex justify-center pt-5 sm:pt-64">
                    <Link href={"javascript:void(0)"} className="btnoutline w3btn flex items-center rounded-full font-manrope font-bold 2xl:h-[54px] xl:h-[44px] h-[44px] xl:text-14 2xl:text-16 px-[32px] xl:px-[30px] 2xl:px-[32px] " onClick={() => loadMoreHandler(buttonendpoint)}>{showMoreBtnText}</Link>  
                </div>
                }
            </div>
        </div>
    )
}

export default BlogPageBlock;