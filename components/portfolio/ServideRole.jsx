import Link from "next/link";
import RightArrowBigIcon from "@/assets/images/svgs/RightArrowBigIcon";

const ServideRole = (props) => {
    return (
        <div className="pt-48 relative">
            <div className="container">
                <div className="flex items-start">
                    <div className="w-4/12 flex flex-col gap-y-[24px]">
                        <h4 className="uppercase font-semibold">{props.serviceroledata.servicesTitle}</h4>
                        {props.serviceroledata.services.map((serdata, index)=> (
                            <div className="text-textColorSecondary leading-[normal]" key={index}>{serdata}</div>
                        ))}
                    </div>
                    <div className="w-4/12 flex flex-col gap-y-[24px]">
                        <h4 className="uppercase font-semibold">{props.serviceroledata.rolesTitle}</h4>
                        {props.serviceroledata.roles.map((roledata, index)=> (
                            <div className="text-textColorSecondary leading-[normal]" key={index}>{roledata}</div>
                        ))}
                    </div>
                    <div className="w-4/12 flex justify-end">
                        <div className="linkbox">
                            <Link href={props.serviceroledata.projectlink} className="text-textColorSecondary flex gap-x-2 hover:text-themeRed items-center">
                                {props.serviceroledata.projectlinktext}
                                <RightArrowBigIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServideRole;