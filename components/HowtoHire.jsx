import ShareYourRequirements from "@/assets/images/svgs/ShareYourRequirements";
import WeShortlistTheMostSuitableTalent from "@/assets/images/svgs/WeShortlistTheMostSuitableTalent";
import YouConductTheInterview from "@/assets/images/svgs/YouConductTheInterview";
import RemoteOnboardingAndSupport from "@/assets/images/svgs/RemoteOnboardingAndSupport";

// const howtoHireData = [
//     {
//         value: "01",
//         Title: 'Share your requirements',
//         Descriptions: 'Get in touch with an expert on our team who will help you determine your goals, technical requirements, and team dynamics.',
//         Image: ShareYourRequirements(),
//     },
//     {
//         value: "02",
//         Title: 'We shortlist the most suitable talent',
//         Descriptions: 'Curating and matching talent is our expertise. Once you share your requirements, we will shortlist the first batch of candidates within 48 hours.',
//         Image: WeShortlistTheMostSuitableTalent(),
//     },
//     {
//         value: "03",
//         Title: 'You conduct the interview',
//         Descriptions: 'We hand you the ropes. Pick the talent that is the best fit for your business by interviewing the pre-vetted WordPress professionals. ',
//         Image: YouConductTheInterview(),
//     },
//     {
//         value: "04",
//         Title: 'Remote onboarding and support',
//         Descriptions: 'We provide the right frameworks and expectations on both sides. Our team also manages the talent’s HR, IT, and administrative support. ',
//         Image: RemoteOnboardingAndSupport(),
//     },
// ]

const HowtoHire = ( {howhire} ) => {
    return (
        <div className="howtohire-section relative py-32 4xl:py-128 2xl:py-96 lg:py-64 md:py-48">
            <div className="container">
                {
                   ( howhire.howHireTitle || howhire.howHireTitle2 ) && 
                   <h1 className="titleText justify-center flex flex-wrap text-center">
                        {
                            howhire.howHireTitle &&
                            <span className="block w-full text-center">{howhire.howHireTitle}</span>
                        }
                        {howhire.howHireTitle2}
                    </h1>
                }
                <div className="
                    howhire-row grid grid-flow-row grid-cols-12 pt-48
                    [&>*:nth-child(even)]:col-start-1 
                    [&>*:nth-child(even)]:col-end-13 
                    [&>*:nth-child(odd)]:col-start-1 
                    [&>*:nth-child(odd)]:col-end-13
                     first-letter:xl:[&>*:nth-child(even)]:col-start-2 
                     xl:[&>*:nth-child(even)]:col-end-12 
                     xl:[&>*:nth-child(odd)]:col-start-2 
                     xl:[&>*:nth-child(odd)]:col-end-12
                    
                    [&>*:nth-child(odd)]:flex-row-reverse
                    [&>*:nth-child(1n+2)]:mt-[48px]
                    3xl:[&>*:nth-child(1n+2)]:mt-[164px]
                    2xl:[&>*:nth-child(1n+2)]:mt-[128px]
                    xl:[&>*:nth-child(1n+2)]:mt-[96px]
                    lg:[&>*:nth-child(1n+2)]:mt-[64px]
                    lg:pt-64
                ">
                    {
                        howhire.howHireRepeater.length > 0 &&
                        howhire.howHireRepeater.map(( data , index)=>(
                            <div className="text-white flex-row md:flex items-center justify-between" key={index}>
                                {
                                    data.imageSvgCode &&
                                    <div className="w-full md:w-6/12 flex justify-center" dangerouslySetInnerHTML={{__html:data.imageSvgCode}}></div>
                                }
                                <div className="w-full md:w-6/12 pt-6 text-center md:text-left md:pt-0">
                                    {
                                        data.title &&
                                        <h2 className="font-bold text-20 xl:text-32 lg:text-30 text-textprimary leading-[1.3] lg:leading-normal pb-2 md:pb-4">{data.title}</h2>
                                    }
                                    {
                                        data.content &&
                                        <p className="text-textColorSecondary text-16 xl:text-20 lg:text-18">{data.content}</p>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HowtoHire;