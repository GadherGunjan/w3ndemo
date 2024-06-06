import PricingBox from "./PricingBox";
import CheckArrowIcon from "@/assets/images/svgs/CheckArrowIcon";

// const pricingData = [
//     {
//         value: '01',
//         price: '$1799',
//         subtitle: 'Full Time Monthly',
//         planfeaturedata: [
//             '8 hours a day & 21 working days in a month.',
//             'Total : 168 hours.',
//             'Minimum Period of Hiring : 2 Months.',
//             'Billing : 50% advance, 50% at the mid of month.',
//         ],
//         btnvalue: 'Hire Now',
//         icon: CheckArrowIcon(),
//     },
//     {
//         value: '02',
//         price: '$15/hr',
//         subtitle: 'Weekly+',
//         planfeaturedata: [
//             '8 hours a day & 21 working days in a month.',
//             'Total : 168 hours.',
//             'Minimum Period of Hiring : 2 Months.',
//             'Billing : 50% advance, 50% at the mid of month.',
//         ],
//         btnvalue: 'Hire Now',
//         icon: CheckArrowIcon(),
//     },
//     {
//         value: '03',
//         price: '$18',
//         subtitle: 'Hourly+',
//         planfeaturedata: [
//             '8 hours a day & 21 working days in a month.',
//             'Total : 168 hours.',
//             'Minimum Period of Hiring : 2 Months.',
//             'Billing : 50% advance, 50% at the mid of month.',
//         ],
//         btnvalue: 'Hire Now',
//         icon: CheckArrowIcon(),
//     },
// ]

const HireDedicatedPrice = ({hirepricedata}) => {
    if(hirepricedata){
        return (
            <>
            {(hirepricedata?.hireTitle != '' || hirepricedata?.planRepeater?.length > 0 || hirepricedata?.afterboldtext != '') &&
                <div className="py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32 relative hirededicatedprice">
                    <div className="container">
                        <h1 className="titleText">
                            {
                            hirepricedata.hireTitle &&
                            <span className="block">{hirepricedata.hireTitle}</span>
                            }
                            {
                                hirepricedata.hireTitle2
                            }
                        </h1>
                        {
                            ( hirepricedata.beforeboldtext || hirepricedata.boldtext || hirepricedata.afterboldtext) &&
                            <div className=" text-textColorSecondary ptag   pt-16 2xl:pt-32 xl:pt-28 md:pt-20   text-14 4xl:text-20 3xl:text-18 md:text-16"> 
                                {hirepricedata.beforeboldtext}
                                {
                                    hirepricedata.boldtext &&
                                    <h1 className="">
                                        {hirepricedata.boldtext}
                                    </h1>
                                }
                                {hirepricedata.afterboldtext}
                            </div>
                        }
                        {  
                            hirepricedata.planRepeater.length > 0 &&
                            <div className="grid grid-cols-12 lg:gap-y-0 md:gap-y-18 gap-y-16   gap-x-16 4xl:gap-x-30 xl:gap-x-24 md:gap-x-18  mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36 md:mt-28">
                                <PricingBox pricingData={hirepricedata.planRepeater} />
                            </div>
                        }
                    </div>
                </div>
            }
            </>
        )
    }
    return ""
}

export default HireDedicatedPrice;