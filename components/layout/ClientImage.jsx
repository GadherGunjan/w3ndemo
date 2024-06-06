
import Image from "next/image";
const ClientImage = (props) => {
    return (
        <div className="client-imagebox absolute left-0 top-0 h-full w-full">
            <div className="absolute left-0 bottom-0 right-0 top-0 bg-gradient-client z-10 3xl:rounded-[39px] xl:rounded-[29px] rounded-[20px]"></div>
            <Image src={props.imageURL} alt={props.imageALT} className="absolute left-0 top-0 w-full h-full object-cover 3xl:rounded-[40px] xl:rounded-[30px] rounded-[20px]"  height={640} width={490}/>
            <div className="clientname absolute left-0     bottom-16 2xl:bottom-32 xl:bottom-28 md:bottom-20  right-0 z-20 text-center px-5 font-workSans font-semibold text-white uppercase text-14 4xl:text-20 3xl:text-18 md:text-16">{props.clientName}</div>
        </div>
    )
}

export default ClientImage;