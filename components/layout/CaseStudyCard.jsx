
import Link from "next/link";
import Image from "next/image";
import { useRef , useState } from "react";
import { motion, useMotionValue , useSpring , useTransform } from "framer-motion"

const CaseStudyCard = (props) => {
//     return (
//         <div className={`casecardbox lg:h-[60vh] lg:min-h-[450px] lg:max-h-[640px] md:h-[676px] h-[412px] lg:rounded-[40px] md:rounded-[30px] rounded-[16px] lg:w-auto  w-full ${props.className}`}>
//             <Link href={props.link} className="relative">
//                 <div className="imagebox relative w-full h-full">
//                     <Image src={props.imageURL} width={309} height={450} className="w-full h-full absolute lef-0 top-0 object-cover lg:rounded-[40px] md:rounded-[30px] rounded-[16px]" alt={props.title} />
//                     <div className="bg-gradient-linear absolute bottom-0 left-0 w-full h-full   lg:rounded-[36px] md:rounded-[26px] rounded-[10px]"></div>
//                 </div>
//                 <div className="absolute left-0 bottom-0 right-0 md:p-32 p-[16px]">
//                     <h3 className="3xl:text-32 2xl:text-24 text-20 font-manrope font-extrabold md:pb-16 pb-[12px] leading-[1.5]">{props.title}</h3>
//                     <p className="text-textColorSecondary md:text-18 text-14 font-manrope font-light leading-[1.55]" dangerouslySetInnerHTML={{__html:props.description}}></p>
//                 </div>
//             </Link>
//         </div>
//     )
// }

    const ROTATION_RANGE = 32.5;
    const HALF_ROTATION_RANGE = 32.5 / 2;

    const ref = useRef(null);

    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
    
        const rect = ref.current.getBoundingClientRect();
    
        const width = rect.width;
        const height = rect.height;
    
        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    
        const rY = mouseX / width - HALF_ROTATION_RANGE;
        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    
        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        if (!ref.current) return;
        setRotateX(0);
        setRotateY(0);
    };
    
  return (
    <motion.div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
        transformStyle: "preserve-3d",
        }}
        animate={{
        rotateX,
        rotateY,
        }}
        className={`casecardbox lg:h-[60vh] lg:min-h-[450px] lg:max-h-[640px] md:h-[676px] h-[412px] lg:rounded-[40px] md:rounded-[30px] rounded-[16px] lg:w-auto  w-full  ${props.className}`} 
    >
        <Link href={props.link} className="relative">
                 <div className="imagebox relative w-full h-full">
                     <Image src={props.imageURL} width={309} height={450} className="w-full h-full absolute lef-0 top-0 object-cover lg:rounded-[40px] md:rounded-[30px] rounded-[16px]" alt={props.title} />
                     <div className="bg-gradient-linear absolute bottom-0 left-0 w-full h-full   lg:rounded-[36px] md:rounded-[26px] rounded-[10px]"></div>
                 </div>
                 <div className="absolute left-0 bottom-0 right-0 p-16 2xl:p-32 xl:p-28 md:p-20 ">
                     <h3 className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-manrope font-extrabold  pb-12 xl:pb-16 md:pb-14">{props.title}</h3>
                     <p className="text-textColorSecondary   font-manrope font-light text-14  4xl:text-18  3xl:text-16 md:text-15" dangerouslySetInnerHTML={{__html:props.description}}></p>
                 </div>
             </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
