import Image from "next/image";

const HomePageImage = (props) => {
    return (
        <div className="relative my-128">
            <div className="container">
            {props?.homepageimagedata?.title &&
                <h2 className="text-64 font-gilroy font-extrabold text-textprimary mb-48 uppercase">{props.homepageimagedata.title}</h2>
            }
            {props?.homepageimagedata?.discription &&
                <div className="ptag text-textColorSecondary pb-48 leading-[1.8]">{props.homepageimagedata.discription}</div>
            }
            {props?.homepageimagedata?.imageURL &&
                <div className="imagebox mt-48">
                    <Image src={props.homepageimagedata.imageURL} alt={props.homepageimagedata.imageALT} width={'1530'} height={'7955'} className="w-full h-auto" />
                </div>
            }
            </div>
        </div>
    )
}

export default HomePageImage;