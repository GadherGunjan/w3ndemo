import Link from "next/link";
import ThemeButton from "./layout/ThemeButton";

const ExploreServices = ({ ctaInfo }) => {
    if (ctaInfo?.length > 0) {
        return (
            <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                <div className="container">
                    <div className="flex flex-col lg:flex-row md:gap-y-4 gap-y-[24px] items-center gap-[30px]">
                        {ctaInfo.map((item, i) => {
                            return (
                                <div className="w-full lg:w-1/2 rounded-[16px] md:rounded-[30px] border-[#262626]  bg-bgSecondary lg:bg-transparent border-[1px]   p-18 4xl:p-64 2xl:p-48 xl:p-32 md:p-24  hover:border-themeRed  transition duration-300" key={i}>
                                    <h4 className="text-18 4xl:text-40 3xl:text-34  xl:text-30  md:text-24 ">{item.heading}</h4>
                                    <div className=" mt-16  4xl:mt-48  2xl:mt-32 xl:mt-28 md:mt-24 flex justify-start">
                                        {/* <Link href="#" className="explore-btn">Explore All Services</Link> */}
                                        <ThemeButton link={item.buttonInfo.url} buttontext={item.buttonInfo.title} className="btnoutline" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    } else {
        return '';
    }
}

export default ExploreServices;