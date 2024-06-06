import Image from "next/image";
import Link from "next/link";


const BlogBlock = (props) => {
    return (
        <div className="w-full bg-bgSecondary flex flex-col md:flex-row
        p-16 4xl:p-48 2xl:p-32 xl:p-28 md:p-24
        gap-y-20 4xl:gap-x-96  2xl:gap-x-64 xl:gap-x-36 md:gap-x-28
        3xl:rounded-40 md:rounded-30 rounded-20
        ">
            {props.data.image &&
                <Link href={`/blog${props.data.link}`} className="imagebox w-full md:w-[34%] before:pt-[100%] before:content-[''] before:block overflow-hidden relative flex-none block rounded-10 md:rounded-20">
                    <Image src={props.data.image} alt={props.data.title} width={'520'} height={'520'} className="absolute left-0 top-0 w-full h-full object-cover" />
                </Link>
            }
            <div className="detailright flex flex-col flex-grow">
                {props.data.title &&
                    <h2 className="font-semibold text-textprimary text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30">
                        <Link href={`/blog${props.data.link}`} className="hover:text-themeRed">{props.data.title}</Link>
                    </h2>
                }
                {props.data.category &&
                    <div className="categorywrap flex mt-16 2xl:mt-32 xl:mt-28 md:mt-20
                        [&>*:nth-child(1n+2)]:before:content-['|']
                        [&>*:nth-child(1n+2)]:before:mx-12 
                        [&>*:nth-child(1n+2)]:before:xl:mx-16 
                        [&>*:nth-child(1n+2)]:before:md:mx-14
                        [&>*:nth-child(1n+2)]:before:text-linecolor
                    ">
                        {props.data.category.map((indata, index)=>(
                            <Link href={indata.linkcat} className="categorybox flex text-textColorSecondary uppercase text-14 4xl:text-20 3xl:text-18 md:text-16 hover:text-textprimary" key={index}>{indata.textcat}</Link>
                        ))}
                    </div>
                }
                <div className="bottommenta pt-24 flex mt-auto justify-between items-center">
                    <div className="datebox uppercase text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16 ">{props.data.date}</div>
                    <div className="linkbox flex w-20 4xl:w-40 3xl:w-32 2xl:w-28 xl:w-26 md:w-24">
                        <Link href={`/blog${props.data.link}`} className="hover:text-themeRed inline-flex">{props.data.linkicon}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogBlock;