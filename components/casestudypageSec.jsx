import Image from "next/image";
import Link from "next/link";

const CasestudyPageSec = ({title, description, tags, image, link}) => {

    return (
        <div className="py-20 4xl:py-96  2xl:py-64 xl:py-36 md:py-28 md:flex-row flex-col    relative flex items-center   gap-x-16 4xl:gap-x-48 2xl:gap-x-32 xl:gap-x-28 md:gap-x-24 border-b  border-solid border-linecolor first:pt-0">
            <div className="w-full md:w-6/12">
                {image && link ?
                    <Link href={link}>
                        <div className="imagebox w-full relative before:content-[''] before:block before:pt-[68.785%] overflow-hidden block">
                            <Image src={image} alt={title} width={'880'} height={'580'} className="absolute left-0 top-0 w-full h-full object-cover rounded-[20px] 2xl:rounded-[40px] xl:rounded-[40px]" />
                        </div>
                    </Link>
                    :
                    <div className="imagebox w-full relative before:content-[''] before:block before:pt-[70%] overflow-hidden block">
                        <Image src={image} alt={title} width={'880'} height={'580'} className="absolute left-0 top-0 w-full h-full object-cover rounded-[20px] 2xl:rounded-[40px] xl:rounded-[40px]" />
                    </div>
                }
            </div>
            <div className="w-full md:w-6/12 pt-24 md:pt-0">
                {title && link ?
                    <h2 className="text-18 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30 text-textprimary font-semibold">
                        <Link href={link}>{title}</Link>
                    </h2>
                    : 
                    <h2 className="text-32 4xl:text-64   2xl:text-48 text-textprimary font-semibold">{title}</h2>
                }
                {description && 
                    <div className="ptag text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16   pt-16 2xl:pt-32 xl:pt-28 md:pt-20 " dangerouslySetInnerHTML={{__html:description}}></div>
                }
                {tags &&
                    <div className="flex flex-wrap   gap-12 xl:gap-16 md:gap-14 mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                        {tags.map((tag, index) => (
                            <div key={index} className="casestudy-tag whitespace-nowrap h-[38px] text-14 4xl:text-16 3xl:text-15 uppercase flex items-center justify-center border border-solid border-linecolor text-textColorSecondary px-14 4xl:px-24 xl:px-20 md:px-16  rounded-[50px]">
                                {tag}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default CasestudyPageSec;