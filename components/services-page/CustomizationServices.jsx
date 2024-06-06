
const CustomizationServices = ( {customizationData} ) => {
    // const CustomizationServicesData = [
    //     {
    //         value: '01',
    //         number: '01',
    //         title: 'Tailored Plugin Integration and Development',
    //         description: 'The proficient crew of coders at W3nuts handles all plugin-related deliverable such as development, installation and upgrades with seasoned precision.',
    //     },
    //     {
    //         value: '02',
    //         number: '02',
    //         title: 'Assimilated Ecommerce Portals using WordPress',
    //         description: 'Using customized themes,we create outstandingly efficient WordPress-enabled ecommerce stores that are known to generate large revenues.',
    //     },
    //     {
    //         value: '03',
    //         number: '03',
    //         title: 'Enhanced and Upgraded Security Solutions',
    //         description: 'Your WordPress website is always safeguarded by our core development team that uses high-end security plugins and constantly monitors live traffic.',
    //     },
    //     {
    //         value: '04',
    //         number: '04',
    //         title: 'Unique Theme Designs and Conversions',
    //         description: 'The W3nuts team flawlessly converts multiple design formats such as JPEG/PSD/PNG etc. into a full-fledged WP theme that is cross-platform compatible.',
    //     },
    //     {
    //         value: '05',
    //         number: '05',
    //         title: 'Support, Maintenance and Migration Assistance',
    //         description: 'Our WordPress support and maintenance staff deftly handles troubleshooting issues, updates content regularly, and also fixes bugs and other spam related issues.',
    //     },
    //     {
    //         value: '06',
    //         number: '06',
    //         title: 'Fine Tuning to Eliminate Performance Snags',
    //         description: 'Our versatile crew of developers optimizes your website’s performance to deliver an incredible UI with unmatched load speeds and an excellent up time.',
    //     },
    // ]

    return (
        <div className="CustomizationServices_section py-32 4xl:py-128 2xl:py-96 lg:py-64 md:py-48">
            <div className="container">
                {
                    ( customizationData.title || customizationData.description ) && 
                    <h1 className="titleText pb-32 3xl:pb-96  xl:pb-64">
                        {
                            customizationData.title &&   
                            <span className="block">{customizationData.title}</span>
                        }
                        {customizationData.description}
                    </h1>
                }
                {
                    customizationData.contentRepeater.length > 0 &&
                    customizationData.contentRepeater.map((data, index) => (
                        <div className="customization_services_row" key={index}>
                            <div className="topline flex items-center">
                                <div className="numberbox flex-none w-auto lg:w-[130px] mr-3 lg:mr-0  text-linecolor text-32 lg:text-64 md:text-48 font-semibold">{`0${index + 1}`}</div>
                                <div className="linerow grow h-[1px] bg-linecolor"></div>
                            </div>
                            <div className="mainrow   lg:flex justify-between pt-4 md:pb-4 pb-0 ">
                                {
                                    data.title &&
                                    <div className="w-full lg:w-7/12">
                                        <h3 className="text-20 2xl:text-32 xl:text-24 lg:text-24 pb-2 lg:pb-0 pr-4 text-textprimary font-semibold">{data.title}</h3>
                                    </div>
                                }
                                {
                                    data.content &&
                                    <div className="w-full lg:w-5/12">
                                        <p className="text-textColorSecondary text-16 lg:text-18 3xl:text-20 leading-[1.8] md:leading-[1.8]  xl:leading-[1.6]">{data.content}</p>
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default CustomizationServices;