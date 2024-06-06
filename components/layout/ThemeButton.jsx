
import Link from "next/link";
const ThemeButton = (props) => {
    return (
        props.type ? (
            <input type="submit" className={`
                w3btn flex items-center     rounded-full font-manrope font-bold 
                4xl:h-54 
                4xl:text-20
                4xl:px-32
                3xl:h-44 
                3xl:text-18
                3xl:px-28
                2xl:h-42 
                2xl:px-24
                2xl:text-16

                xl:h-44 
                xl:text-16
                xl:px-24
                md:h-50 
                md:text-16
                md:px-32
                h-44 
                text-14
                px-26
                transition-all duration-300 cursor-pointer ${props.className}
            `} value={props.buttontext} />
        ) : ( 
            <Link href={props.link} className={`
                w3btn flex items-center justify-center rounded-full font-manrope font-bold  whitespace-nowrap
                4xl:h-54 
                4xl:text-20
                4xl:px-32
                3xl:h-44 
                3xl:text-18
                3xl:px-28
                2xl:h-42 
                2xl:px-24
                2xl:text-16

                xl:h-44 
                xl:text-16
                xl:px-24
                md:h-50 
                md:text-16
                md:px-32
                h-44 
                text-14
                px-26
                
                ${props.className}
            `}>{props.buttontext}</Link>
        )
    )
}

export default ThemeButton;