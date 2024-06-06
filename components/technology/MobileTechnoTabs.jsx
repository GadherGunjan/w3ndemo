

import Image from "next/image";
import iOSicon from "@/assets/images/iOS.svg";
import androidicon from "@/assets/images/android.svg";
import reactnativeicon from "@/assets/images/reactnative.svg";
import fluttericon from "@/assets/images/flutter.svg";
import ionicicon from "@/assets/images/ionic.svg";
import swifticon from "@/assets/images/swift.svg";
import kotlinicon from "@/assets/images/kotlin.svg";
import objectivecicon from "@/assets/images/objectivec.svg";
import titaniumicon from "@/assets/images/titanium.svg";

const MobileTechnoTabs = ( props=[] ) => {

    const data = [];
    if( props.length > 0 ){
        props.map((item, i) => {
            const dataObj = {
                value : item.title,
                imageurl : item.image.sourceUrl,
                imgname : item.title
            }
            data.push(dataObj)
        });
    }else{
        data.push(
            {
                value : "iOS",
                imageurl : iOSicon,
                imgname : 'iOS'
            },
            {
                value : "Android",
                imageurl : androidicon,
                imgname : 'Android'
            },
            {
                value : "React Native",
                imageurl : reactnativeicon,
                imgname : 'React Native'
            },
            {
                value : "Flutter",
                imageurl : fluttericon,
                imgname : 'Flutter'
            },
            {
                value : "Ionic",
                imageurl : ionicicon,
                imgname : 'Ionic'
            },
            {
                value : "Swift",
                imageurl : swifticon,
                imgname : 'Swift'
            },
            {
                value : "Kotlin",
                imageurl : kotlinicon,
                imgname : 'Kotlin'
            },
            {
                value : "ObjectiveC",
                imageurl : objectivecicon,
                imgname : 'ObjectiveC'
            },
            {
                value : "Titanium",
                imageurl : titaniumicon,
                imgname : 'Titanium'
            }
        )
    }
    return (
        <>
            {data.map(({ imageurl, imgname, value }) => (
                <div key={value} className="technobox w-[97px] h-auto 4xl:w-140  4xl:h-140  3xl:w-116  3xl:h-116 2xl:w-106  2xl:h-106 xl:w-96  xl:h-96 md:w-140  md:h-140  flex flex-col justify-center items-center  ">
                    <Image key={value} src={imageurl} width={100} height={100} alt={imgname} className=" w-44  h-44 4xl:w-60 4xl:h-60 3xl:w-50 3xl:h-50 2xl:w-45 2xl:h-45 xl:w-40  xl:h-40 md:w-60  md:h-60 " />
                    <h3 className="pt-14 4xl:pt-20 xl:pt-18 text-textColorSecondary text-14 4xl:text-16 3xl:text-15   ">{imgname}</h3>
                </div>
            ))}
        </>
    )
}

export default MobileTechnoTabs;