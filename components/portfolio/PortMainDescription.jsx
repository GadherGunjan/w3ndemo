
const PortMainDescription = (props) => {
    return (
        <div className="relative mb-128">
            <div className="container">
                <div className="flex flex-col gap-x-30">
                {props?.maindata?.title &&
                    <div className="w-9/12 mr-auto pb-48">
                        <h2 className="font-gilroy text-textprimary text-64 font-extrabold uppercase">{props.maindata.title}</h2>
                    </div>
                }
                {props?.maindata?.description &&
                    <div className="w-9/12 ml-auto ">
                        <div className="ptag text-textColorSecondary leading-[1.8]">
                            {props.maindata.description}
                        </div>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default PortMainDescription;