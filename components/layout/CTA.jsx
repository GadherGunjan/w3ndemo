import Link from "next/link";
const CTA = (props) => {
    if (props.title && props.text && props.linktext && props.link) {
        return (
            <div className={`ctabox  ${(props.title || props.text || props.linktext || props.link) ? '' : 'hidden'}`}>
                {(props.title || props.text || props.linktext || props.link) &&
                    <div className="container">
                        <div className="insidecta bg-gradient-primary px-24 4xl:px-128 3xl:px-96 2xl:px-64 xl:px-48 lg:px-32 md:px-32 py-20 4xl:py-96  2xl:py-64 xl:py-36   md:py-28    rounded-[16px] md:rounded-[30px]  lg:rounded-[40px] p-16">
                            {props.title &&
                                <h2 className={`font-manrope font-extrabold  text-28 4xl:text-96 3xl:text-80  2xl:text-72 lg:text-64  md:text-36 ${props.classname}`} dangerouslySetInnerHTML={{ __html: props.title }}></h2>
                            }
                            {props.text &&
                                <p className={`   text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20  ${props.text ? 'mt-16 2xl:mt-32 xl:mt-28 md:mt-20' : ''}`}>{props.text}</p>
                            }
                            {(props.link && props.linktext) &&
                                <div className="btnbox flex   mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24 ">
                                    {props.link &&
                                        <Link href={props.link} className={`bg-white text-themeRed    rounded-full font-manrope font-bold border border-solid border-white hover:bg-transparent hover:text-white 4xl:h-54 flex items-center 4xl:text-20
  4xl:px-32  3xl:h-44  3xl:text-18  3xl:px-28  2xl:h-42  2xl:px-24   2xl:text-16  xl:h-44  xl:text-16  xl:px-24  md:h-50 md:text-16  md:px-32  h-44 text-14 px-26  ${props.btnclassName}`}>
                                            {props.linktext}
                                        </Link>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
    return ''
}

export default CTA;