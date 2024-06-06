
import SplitText from "../SplitText";
import CheckBoldIcon from "@/assets/images/svgs/CheckBoldIcon";

const WhyChooseServices = (props) => {
    const data = props?.whychooseservices
    return (
        <>
        {(data?.title != '' || data?.choosedata?.length > 0) &&
            <div className="whyshooseservices relative py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                <div className="container">
                    <div className=" flex  flex-wrap">
                    <div className="w-full  lg:w-6/12">
                        <div className="sticky top-24 4xl:top-128 3xl:top-96 2xl:top-64 xl:top-48 lg:top-32 md:top-32">
                        {data.title &&
                        <h1 className="text-32 4xl:text-96 3xl:text-80  2xl:text-72 md:text-64 titleText lg:pb-0 pb-24
                        ">
                            <SplitText copy={data.title} role="heading" />
                        </h1>
                        }
                        <div className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary   pt-16 4xl:pt-48 2xl:pt-48 xl:pt-28 md:pt-24  pr-16 4xl:pr-48 2xl:pr-48 xl:pr-28 md:pr-24  ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sequi minima animi placeat, commodi qui dolorum reprehenderit ducimus debitis voluptates dicta, aliquid fugit iure natus. Aspernatur doloremque velit esse nihil.    
                        </div>
                        </div>
                    </div>
                    <div className="w-full  lg:w-6/12">
                        <div className="flex flex-col   gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24">
                            {data?.choosedata.map((el, idx)=>(
                                <div className="sticky border-b border-solid border-linecolor bg-bgColor
                                    top-24 4xl:top-128 3xl:top-96 2xl:top-64 xl:top-48 lg:top-32 md:top-32
                                    pb-18 4xl:pb-64 2xl:pb-48 xl:pb-32 md:pb-24
                                " key={idx}>
                                    <div className="text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30 font-semibold">
                                        {String(idx + 1).padStart(2, '0')}
                                    </div>
                                    <div className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-semibold text-textprimary
                                        pt-14 4xl:pt-24 xl:pt-20 md:pt-16 flex items-center
                                    ">
                                        <div className="mr-12 xl:mr-16 md:mr-14 w-20 4xl:w-32 3xl:w-28 2xl:w-24 xl:w-24 md:w-24 checkmark-icon">
                                            <CheckBoldIcon className="" />
                                        </div>
                                        {el.title}
                                    </div>
                                    <div className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary
                                        pt-16 4xl:pt-48 2xl:pt-48 xl:pt-28 md:pt-24
                                    ">
                                        {el.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                    <div className="grid-cols-12 grid justify-center">
                        <div className="col-start-3 col-span-8 text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary   pt-16 4xl:pt-48 2xl:pt-48 xl:pt-28 md:pt-24 text-center">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae quae tempore amet sit velit, vero quas quia praesentium, officiis blanditiis incidunt deleniti rerum quasi adipisci quisquam accusamus libero maiores dicta!
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default WhyChooseServices;