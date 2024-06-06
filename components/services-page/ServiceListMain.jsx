import ServiceMainRow from "./ServiceMainRow";
const ServiceListMain = ({data}) => {
    // const serviceData = [
    //     {
    //         value: '01',
    //         Number: '01',
    //         Title: 'Design',
    //         Detail: 'DesignAesthetic and pliable user interfaces make for compelling and engaging user experiences. At w3nuts, we empower our clients to obtain maximum benefits by integrating structural functionality into beautifully crafted designs.',
    //     },
    //     {
    //         value: '02',
    //         Number: '02',
    //         Title: 'Web',
    //         Detail: 'We offer an extensive and highly scalable set of website application solutions. From rudimentary and minimalist business designs to more complicated and versatile applications, we cover the complete range of website services.',
    //     },
    //     {
    //         value: '03',
    //         Number: '03',
    //         Title: 'E-Commerce',
    //         Detail: 'Businesses today recognize the inimitable value of an online marketplace to certify sustainability. We enable companies to achieve exponential growth by building robust and customized e-commerce platforms that align perfectly with their organisational goals.',
    //     },
    //     {
    //         value: '04',
    //         Number: '04',
    //         Title: 'Mobile',
    //         Detail: 'With a global transition to mobile an inevitable certainty, the demand for native and cross-platform mobile applications is now second to none. Our team of proficient and experienced developers continues to deliver exceptional results in this vertical.',
    //     }
    // ]

    const serviceData = data.map((service,index) => {
        return {
            value: index,
            Number: `0${index + 1}`,
            Title: service.title,
            Detail: service.template.servicesMainPageOption.pageDescription,
        }
    })

    return (
        <div className="service_section pt-20 4xl:pt-96  2xl:pt-64 xl:pt-36   md:pt-28 pb-24 4xl:pb-128 3xl:pb-96 2xl:pb-64 xl:pb-48 lg:pb-32 md:pb-32">
            <div className="container">
                <div className="servicesmainrow grid grid-cols-1 divide-y divide-linecolor [&>*:first-child]:pt-0 [&>*:last-child]:pb-0">
                    {serviceData.map(({ value, Title, Detail, Number}) => (
                        <ServiceMainRow key={value} serviceTitle={Title} numbers={Number} serviceDetail={Detail} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServiceListMain;