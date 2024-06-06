import Image from 'next/image';
import UiscreenImg from '@/assets/images/ui-screen-img.png'

const UiScreenCard = ({dataimage}) => {
    return (
        <div className="p-10 4xl:p-24 xl:p-20 md:p-16  border-tertiary border-[1px] 4xl:rounded-[30px] 3xl:rounded-[26px] 2xl:rounded-[23px] xl:rounded-[20px] md:rounded-[16px] rounded-[16px] 4xl:w-[1287px] 3xl:w-[1053px] 2xl:w-[968px] xl:w-[853px] md:w-[708px] w-[327px]">
            <div className="relative 4xl:rounded-[30px] 3xl:rounded-[26px] 2xl:rounded-[23px] xl:rounded-[20px] md:rounded-[16px] rounded-[16px]  overflow-hidden 4xl:h-[670px] 3xl:h-[558px] 2xl:h-[502px] xl:h-[443px] md:h-[366px] h-[170px]">
                <Image src={dataimage}  width="1181" height="669" alt='' className='h-full w-full' />
            </div>
        </div>
    )
}
export default UiScreenCard; 