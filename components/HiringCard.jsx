import Image from 'next/image';
import RightIcon from '../assets/images/rightTickCircal.svg'

const HiringCard = ({ heading, hireInfo }) => {

    return (
        <div className="bg-bgSecondary h-full 3xl:rounded-[40px] xl:rounded-[30px] md:rounded-[20px] rounded-[16px] border-[#262626] md:border-[0px] 
        border-[1px]  p-16  4xl:p-48 2xl:p-32 xl:p-28 md:p-24 hiring-card">
            <h2 className="font-manrope 4xl:text-36 3xl:text-30 2xl:text-28  xl:text-26 md:text-24 text-18   text-textColor font-bold mb-18 md:mb-24 xl:mb-32 2xl:mb-48  4xl:mb-64" >{heading}</h2>
            {(hireInfo.length > 0) &&
                <div className='flex hiring-card-inner  flex-wrap items-start' >
                    {hireInfo.map((item, i) => {
                        return (
                            <h3 key={i} className='flex  md:w-1/2 lg:w-full w-full items-center font-manrope  text-15 4xl:text-24 3xl:text-20 2xl:text-18  md:text-18 text-textColorSecondary'>
                            <i className='4xl:mr-24 xl:mr-20 md:mr-16 mr-14'><Image src={RightIcon} alt="RightIcon" className=' 2xl:w-[26px] 2xl:h-[26px] md:w-[20px] md:h-[20px]  md:min-w-[20px] w-[16px] min-w-[16px] ' /></i>{item.text}</h3>
                        )   
                    })}
                </div>
            }
        </div>
    )
}
export default HiringCard;