/* import sectorServiceCard from "./sectorServiceCard"

const SectorServices = (props) => {
    const sectorServiceData = props.sectorServiceData
    return (
        <div className="sector_services w-full relative pt-64">
            <div className="container">
                <h2>{sectorServiceData.title}</h2>
                <div className="service_cards">
                    {sectorServiceData.subService.map((subService, index) => (
                        <sectorServiceCard key={index} {...subService} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SectorServices; */


import SectorServiceCard from './sectorServiceCard';

const SectorServices = (props) => {
    const sectorServiceData = props?.sectorServiceData;
    if(props?.sectorServiceData?.title != '' || props?.sectorServiceData?.services?.length > 0){
    return (
        <div className="sector_services w-full relative  py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32"> 
            <div className="container">
                <h2 className='font-gilroy font-extrabold text-textprimary text-32 4xl:text-96 3xl:text-80  2xl:text-72 md:text-64  pb-20 4xl:pb-96  2xl:pb-64 xl:pb-36   md:pb-28  uppercase'>
                    {sectorServiceData.title}
                </h2>
                <div className="service_cards w-full grid grid-cols-12 gap-6 justify-center">
                    <div className='col-span-12  col-start-0
                    3xl:col-span-8 
                    3xl:col-start-3 
                     2xl:col-span-8 
                     2xl:col-start-3 
                      xl:col-span-10 
                      xl:col-start-2 
                      

                    grid grid-cols-8 gap-y-20 4xl:gap-y-96  2xl:gap-y-64 xl:gap-y-36   md:gap-y-28  4xl:gap-x-60 3xl:gap-x-50 2xl:gap-x-44 xl:gap-x-40 md:gap-x-32'>
                        {sectorServiceData.services.map((service, index) => (
                            <div className='md:col-span-4 col-span-12' key={index}>
                                <SectorServiceCard {...service} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
    }
}

export default SectorServices;