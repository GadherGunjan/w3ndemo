import Image from "next/image";

const ScreensBlock = (props) => {

    

    return (
        <div className="screenblocks relative">
            <div className="container">
            {props.screensblockdata &&
                <div className="grid grid-flow-row grid-cols-2 gap-30">
                    {props.screensblockdata.map((data, index)=> {
                        const squareClass = (data.hasFull == 'true') ? 'before:pt-[52.18%]' : 'before:pt-[100%]';
                        const widthClass = (data.hasFull == 'true') ? 'col-span-2' : 'col-span-1';
                        return (
                            <div className={`bg-bgSecondary ${widthClass}`} key={index}>
                                <div className={`imagebox relative overflow-hidden before:content-[''] before:block ${squareClass}`}> 
                                    <Image src={data.imageURL} alt={data.imageALT} width={'1475'} height={'800'} className="absolute left-0 top-0 w-full h-full object-cover" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            }
            </div>
        </div>
    )
}

export default ScreensBlock;