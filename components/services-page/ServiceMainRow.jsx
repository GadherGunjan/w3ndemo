import Link from "next/link";

const ServiceMainRow = (props) => {
    return (
        <div className="w-full     3xl:grid xl:grid  flex flex-col grid-cols-12    items-start  xl:gap-6 gap-0 3xl:items-center  md:items-center py-18 4xl:py-64 2xl:py-48 xl:py-32 md:py-24">
            <div className="4xl:col-span-5  xl:col-span-4  col-span-12 w-full  xl:flex-row flex flex-col xl:pb-0 pb-12   xl:items-center">
                <div className="flex-none shrink-0 grow-0 text-32 4xl:text-96 3xl:text-80  2xl:text-72 md:text-64 xl:pb-0  pb-12  text-bgSecondary font-semibold 4xl:min-w-[184px] 3xl:min-w-[154px] 2xl:min-w-[140px] xl:min-w-[110px]  leading-none    ">{props.numbers}</div>
                <div className="shrink grow text-18 4xl:text-48 3xl:text-40  2xl:text-36 xl:text-32 md:text-26 font-semibold text-textprimary">
                    <h2>
                        <Link href="#web-id" className="hover:text-themeRed">{props.serviceTitle}</Link>
                    </h2>
                </div>
            </div>
            <div className="4xl:col-span-7  xl:col-span-8 text-14 4xl:text-20 3xl:text-18 md:text-16  text-textColorSecondary">{props.serviceDetail}</div>
        </div>
    )
}

export default ServiceMainRow;
