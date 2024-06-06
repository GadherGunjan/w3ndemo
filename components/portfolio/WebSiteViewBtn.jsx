import Link from "next/link";

const WebSiteViewBtn = ({weburlData}) => {
    return(
        <>
        {weburlData?.title &&
            <div className="p-[8px] 4xl:p-24 xl:p-20 md:p-16 4xl:w-[456px] 3xl:w-[380px] 2xl:w-[342px] xl:w-[304px] md:w-[290px] w-[132px]">
                <div className="relative rounded-[8px] 4xl:h-[724px] 3xl:h-[603px] 2xl:h-[543px] xl:h-[482px] md:h-[460px] h-[210px] overflow-hidden flex items-center justify-center">
                    <Link href={weburlData?.url || '#'} target={weburlData?.target || ''} className="flex items-center gap-2 hover:underline">
                        {weburlData?.title} 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 12H22M22 12L13.6667 4M22 12L13.6667 20" stroke="#E0E0E0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        }
        </>
    )
}
export default WebSiteViewBtn;