import Image from 'next/image';
import ResponsiveDesignCardImg from '@/assets/images/ResponsiveDesignCard1.png'

const ResponsiveDesignCard = ({imagedata}) => {
    return(
        <div className="p-[8px] 4xl:p-24 xl:p-20 md:p-16  border-tertiary border-[1px] rounded-[8px] 4xl:rounded-[24px] 3xl:rounded-[20px] 2xl:rounded-[18px] md:rounded-[16px]   4xl:w-[456px] 3xl:w-[380px] 2xl:w-[342px] xl:w-[304px] md:w-[290px] w-[132px]">
            <div className="relative rounded-[8px] 4xl:rounded-[24px] 3xl:rounded-[20px] 2xl:rounded-[18px] md:rounded-[16px] 4xl:h-[724px] 3xl:h-[603px] 2xl:h-[543px] xl:h-[482px] md:h-[460px] h-[210px] overflow-hidden">
                <Image src={imagedata} width="408" height="724" alt='ResponsiveDesignCardImg' className='w-full object-cover h-full' />
            </div>
        </div>
    )
}

export default ResponsiveDesignCard;