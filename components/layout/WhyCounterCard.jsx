// import { useEffect , useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

const WhyCounterCard = (props) => {

    /* const counterRef = useRef(null);
    useEffect(() => {
        gsap.utils.toArray(".countbox").forEach(box => {
            var tler =  gsap.from(counterRef.current, {
                textContent: "0",
                duration: 1,
                ease: "power1.inOut",
                modifiers: {
                    textContent: value => formatNumber(value, 0) + "+"
                },
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: "100px 80%",
                    end: "+=100",
                    toggleActions: "play none none reverse",
                    end: "top 100%",
                    markers: true,
                }
            }); 
        })
          
        
        function formatNumber(value, decimals) {
            let s = (+value).toLocaleString('en-US');
            return decimals ? s[0] + "." + ((s[1] || "") + "00000000").toString(0, decimals) : s[0];
        }
            
    }, []); */

    return (
        <div className="w-full md:bg-bgSecondary   py-16 4xl:py-48 2xl:py-32 xl:py-28 md:py-24 px-14 4xl:px-24 xl:px-20 md:px-16   flex flex-col items-center 4xl:rounded-[40px] md:rounded-[30px] md:border-t-0 border-t-1  border-t-[1px]  border-[#262626]">
            <div className="countbox  text-32 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30   font-workSans font-bold">{props.numbertext}</div>
            <div className="text-textColorSecondary  leading-150    text-center  pt-10 4xl:pt-24 xl:pt-20 md:pt-16  text-15 4xl:text-24 3xl:text-20 md:text-18   ">{props.description}</div>
        </div>
    )
}

export default WhyCounterCard;