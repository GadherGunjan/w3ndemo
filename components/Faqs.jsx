import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <>
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none"
            className={`${id === open ? "text-textprimary" : ""}`}
        >
            <path  d="M10.3333 14.8C9.94673 14.8 9.63333 15.1134 9.63333 15.5C9.63333 15.8866 9.94673 16.2 10.3333 16.2V14.8ZM20.6667 16.2C21.0533 16.2 21.3667 15.8866 21.3667 15.5C21.3667 15.1134 21.0533 14.8 20.6667 14.8V16.2ZM15.5 26.425C9.46629 26.425 4.575 21.5337 4.575 15.5H3.175C3.175 22.3069 8.69309 27.825 15.5 27.825V26.425ZM4.575 15.5C4.575 9.46629 9.46629 4.575 15.5 4.575V3.175C8.69309 3.175 3.175 8.69309 3.175 15.5H4.575ZM15.5 4.575C21.5337 4.575 26.425 9.46629 26.425 15.5H27.825C27.825 8.69309 22.3069 3.175 15.5 3.175V4.575ZM26.425 15.5C26.425 21.5337 21.5337 26.425 15.5 26.425V27.825C22.3069 27.825 27.825 22.3069 27.825 15.5H26.425ZM10.3333 16.2H20.6667V14.8H10.3333V16.2Z" fill="currentColor"/>
            <path d="M14.8 20.6663C14.8 21.0529 15.1134 21.3663 15.5 21.3663C15.8866 21.3663 16.2 21.0529 16.2 20.6663H14.8ZM16.2 10.333C16.2 9.94641 15.8866 9.63301 15.5 9.63301C15.1134 9.63301 14.8 9.94641 14.8 10.333H16.2ZM16.2 20.6663V10.333H14.8V20.6663H16.2Z" fill="currentColor" className={`${id === open ? "opacity-0" : ""}`} />
        </svg>

      </>
    );
}

const Faqs = (props) => {

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    
    return (
        <>
        {(props?.faqsdata?.title != '' || props?.faqsdata?.FaqsAcc > 0) &&
            <div className="faqs_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
                <div className="container">
                    <div className="sectitle">
                    {props?.faqsdata?.title &&
                        <h1 className="titleText" dangerouslySetInnerHTML={{__html:props.faqsdata.title}} ></h1>
                    }
                    </div>
                    <div className="faqacc flex justify-center  pt-16 4xl:pt-48 2xl:pt-32 xl:pt-28 md:pt-24 ">
                        <div className="w-full  xl:w-11/12 2xl:w-10/12
                            [&>*:nth-child(1n+2)]:border-t
                            [&>*:nth-child(1n+2)]:border-solid
                            [&>*:nth-child(1n+2)]:border-linecolor
                        ">
                            {props?.faqsdata?.FaqsAcc.map((data,index)=>(
                                
                                <Accordion open={open === data.value} icon={<Icon id={data.value} open={open} />} onClick={() => handleOpen(data.value)} className={`${open === data.value ? 'active ': ''} py-16 4xl:py-48 2xl:py-32 xl:py-28 md:py-24 cursor-pointer `} key={index}>
                                    <AccordionHeader className={`font-manrope text-textColorSecondary font-normal p-0 border-0  sm:text-15 4xl:text-24 3xl:text-20 md:text-18 sm:leading-normal ${open === data.value ? 'text-textprimary font-bold': 'text-textColorSecondary '}`}>
                                        {data.title}
                                    </AccordionHeader>
                                    <AccordionBody className="    text-textprimary pr-48 ptag text-14 4xl:text-20 3xl:text-18 md:text-16  md:pr-40  pb-0  pt-16 2xl:pt-32 xl:pt-28 md:pt-20">
                                        {data.description}
                                    </AccordionBody>
                                    
                                </Accordion>
                            ))} 
                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default Faqs;