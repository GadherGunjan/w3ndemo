import Link from "next/link";
import { multipart_post } from "@/queries/api_helper";
import { useState, useRef, useEffect } from "react";
import SimpleReactValidator from "simple-react-validator";
import SkypeIcon from "@/assets/images/svgs/SkypeIcon";
import MailIcon from "@/assets/images/svgs/MailIcon";
import WhatsappIcon from "@/assets/images/svgs/WhatsappIcon";

import DribbbleIcon from "@/assets/images/dribbble.svg";
import BehanceIcon from "@/assets/images/behance.svg";
import linkedinIcon from "@/assets/images/linkedin.svg";
import TwitterIcon from "@/assets/images/twitter.svg";
import InstagramIcon from "@/assets/images/instagram.svg";

import SocialLinksCom from "./SocialLinksCom";
import ThemeButton from "./ThemeButton";
import SplitText from "../SplitText";


const TellUsAboutIt = ({ tellUsData }) => {

    const [formInput, setFormInput] = useState({ your_name: '', user_email: '', services: '', project_budget: '', tellus_more: '' });
    const simpleValidator = useRef(new SimpleReactValidator());
    const [forceUpdate, setForceUpdate] = useState();
    const [ButtonDisabled, SetButtonDisabled] = useState(false);
    const [Error, SetError] = useState("");
    const [SuccessMessageText, SetSuccessMessageText] = useState("");
    const [submitBtnText, SetSubmitBtnText] = useState("Submit");
    const [selectedServices, setSelectedServices] = useState([]);

    const handleInputChange = (event) => {
        event.persist();
        setFormInput((inputs) => ({ ...formInput, [event.target.name]: event.target.value }));
    };


    const handleCheckboxChange = (event) => {
        const { checked, value } = event.target;
        if (checked) {
            setSelectedServices([...selectedServices, value]);
        } else {
            setSelectedServices(selectedServices.filter(service => service !== value));
        }
    }

    // useEffect(() => {
    //     setFormInput((inputs) => ({ ...formInput, services: selectedServices.join(", ") }));
    // }, [selectedServices])


    useEffect(() => {
        setFormInput((prevInputs) => ({ ...prevInputs, services: selectedServices.join(", ") }));
    }, [selectedServices]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        const formValid = simpleValidator.current.allValid();
        if (!formValid) {
            simpleValidator.current.showMessages(true);
            setForceUpdate(1);
        } else {
            SetError("");
            SetButtonDisabled(true);
            SetSubmitBtnText('Wait....');
            const result = await multipart_post('/wp-json/contact-form-7/v1/contact-forms/99/feedback', formInput, { 'content-type': "application/json" });
            SetSubmitBtnText('Submit');
            if (result.status !== 'validation_failed') {
                SetSuccessMessageText(result.message);
                setFormInput({ your_name: '', user_email: '', services: '', project_budget: '', tellus_more: '' })
                setForceUpdate(0);
                setTimeout(function () {
                    SetSuccessMessageText('');
                }, 2000);
                setSelectedServices([])
            } else {
                SetError(result.message);
                setTimeout(function () {
                    SetError('');
                }, 5000);
            }
        }
    }


    return (
        <div className="tellus_sections relative  py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                {tellUsData.heading &&
                    <div>
                        <h1 className="titleText md:mb-0 mb-20 has-block-span" 
                        //dangerouslySetInnerHTML={{__html: tellUsData.heading }}
                        >
                            <SplitText copy={tellUsData.heading} role="heading" />
                        </h1>
                    </div>
                }
                <div className={`col-span-2 flex  lg:grid grid-cols-12 lg:flex-row flex-col-reverse md:gap-6 ${tellUsData.heading ? 'mt-20 4xl:mt-96  2xl:mt-64 xl:mt-36   md:mt-28' : ''}`}>
                    <div className="col-start-1   col-end-12 lg:col-end-5 row-start-1">
                        <div className="contact-left max-w-full lg:max-w-[360px]  pt-18 4xl:pt-64 2xl:pt-48 xl:pt-32 md:pt-24">
                            {tellUsData.subheading &&
                                <h3 className=" text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 font-light text-textprimary pb-12 xl:pb-16 md:pb-14" dangerouslySetInnerHTML={{ __html: tellUsData.subheading }}></h3>
                            }
                            {tellUsData.description &&
                                <p className="text-textColorSecondary text-14 4xl:text-16 3xl:text-15">{tellUsData.description}</p>
                            }
                            <div className="contact-info md:pt-0 pt-[12px]">
                                {tellUsData.email &&
                                    <div className="flex mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                                        <Link className="flex items-center text-textColorSecondary text-14  4xl:text-18  3xl:text-16 md:text-15 hover:text-white" href={tellUsData.email.url}>
                                            <span className="iconbox md:w-[28px] md:h-[28px] w-[24px]  h-[24px] flex items-center mr-3">{MailIcon()}</span>
                                            {tellUsData.email.title}
                                        </Link>
                                    </div>
                                }
                                {tellUsData.skype &&
                                    <div className="flex  mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                                        <Link className="flex items-center text-textColorSecondary text-14  4xl:text-18  3xl:text-16 md:text-15 hover:text-white" href={tellUsData.skype.url}>
                                            <span className="iconbox md:w-[28px] md:h-[28px] w-[24px]  h-[24px] flex items-center mr-3">{SkypeIcon()}</span>
                                            {tellUsData.skype.title}
                                        </Link>
                                    </div>
                                }
                                {tellUsData.phonenumber &&
                                    <div className="flex  mt-16 4xl:mt-48 2xl:mt-32 xl:mt-28 md:mt-24">
                                        <Link className="flex items-center text-textColorSecondary text-14  4xl:text-18  3xl:text-16 md:text-15 hover:text-white" href={tellUsData.phonenumber.url}>
                                            <span className="iconbox md:w-[28px] md:h-[28px] w-[24px]  h-[24px] flex items-center mr-3">{WhatsappIcon()}</span>
                                            {tellUsData.phonenumber.title}
                                        </Link>
                                    </div>
                                }
                            </div>
                            <div className="follow-us mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                                {tellUsData.followus &&
                                    <h3 className="text-15 4xl:text-24 3xl:text-20 md:text-18 font-semibold mb-16 2xl:mb-32 xl:mb-28 md:mb-20">{tellUsData.followus}</h3>
                                }

                                {tellUsData.sociallinks &&
                                    <div className="iconwrap flex items-center w-full gap-16 4xl:gap-32 xl:gap-20 md:gap-12   justify-start lg:justify-between">
                                        {tellUsData.sociallinks.map(({ icon, alt, link }, index) => (
                                            <div className="" key={index}>
                                                <SocialLinksCom link={link} icon={icon} alt={alt} />
                                            </div>
                                        ))}
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-start-5 col-end-13 row-start-1">
                        <div className="contact-form w-full rounded-[16px] 4xl:rounded-[40px] 2xl:rounded-[32px] bg-bgSecondary p-18 4xl:p-64 2xl:p-48 xl:p-32 md:p-24 border-[#262626] md:border-[0px] border-[1px]">
                            <form onSubmit={handleSubmit}>
                                <div className="inner-form flex flex-wrap">
                                
                                    <div className="w-full md:w-1/2 pr-0 md:pr-[15px] mb-[24px] 4xl:mb-48 xl:mb-6">
                                        <label htmlFor="" className="font-semibold block text-14 4xl:text-20 3xl:text-18 md:text-16 mb-[4px] xl:mb-16 md:mb-14">Name & Company</label>
                                        <input type="text" name="your_name" className={`h-[46px] 4xl:h-[62px]   xl:h-[50px] w-full outline-none bg-transparent text-14 4xl:text-18 2xl:text-15 border-b border-b-tertiary border-solid placeholder-tertiary font-semibold ${formInput.your_name ? '' :'error'}`} placeholder="John from w3nuts" value={formInput.your_name ? formInput.your_name :''} onChange={handleInputChange} />
                                        {simpleValidator.current.message("your_name", formInput.your_name, "required", {
                                            className: "error-message",
                                            messages: { required: "Please enter name & comapny" }
                                        })}
                                    </div>
                                    <div className="w-full md:w-1/2 pl-0 md:pl-[15px] mb-[24px] 4xl:mb-48 xl:mb-6">
                                        <label htmlFor="" className="text-14 4xl:text-20 3xl:text-18 md:text-16  font-semibold block mb-[4px] xl:mb-16 md:mb-14">Your Email</label>
                                        <input type="text" name="user_email" className={`h-[46px] 4xl:h-[62px]   xl:h-[50px] w-full outline-none bg-transparent text-14 4xl:text-18 2xl:text-15 border-b border-b-tertiary border-solid placeholder-tertiary font-semibold ${formInput.user_email ? '' :'error'}`} placeholder="john@w3nuts.com" value={formInput.user_email ? formInput.user_email :''} onChange={handleInputChange} />
                                        {simpleValidator.current.message("user_email", formInput.user_email, "required", {
                                            className: "error-message",
                                            messages: { required: "Please enter email", email: "Please enter valid email" }
                                        })}
                                    </div>
                                    <div className="w-full mb-16 4xl:mb-48 2xl:mb-36 lg:mb-30 md:mb-24">
                                        <label htmlFor="" className="mb-16 4xl:mb-32 3xl:mb-20 xl:mb-20 md:mb-20 text-14 4xl:text-20 3xl:text-18 md:text-16   font-semibold    block">{"I'm interested in..."}</label>
                                        <div className="flex flex-wrap md:gap-16 4xl:gap-32  3xl:gap-4 2xl:gap-3 lg:gap-3 gap-12">
                                            {tellUsData.serviceslist.map((text,index) => {
                                                return(
                                                <div className="interestbox contactradiocheck" key={index}>
                                                    <input type="checkbox" id={`int_web${index+1}`} name="services" value={text.serviceNameSingle} checked={ selectedServices.includes(text.serviceNameSingle) ? true : false } className="" onChange={ handleCheckboxChange} />
                                                    <label htmlFor={`int_web${index+1}`}>{text.serviceNameSingle}</label>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        {simpleValidator.current.message("services", formInput.services, "required", {
                                            className: "error-message",
                                            messages: { required: "Please select services" }
                                        })}
                                    </div>
                                    <div className="mb-16 4xl:mb-48 2xl:mb-36 lg:mb-30 md:mb-24 w-full">
                                        <label htmlFor="" className="block text-14 4xl:text-20 3xl:text-18 md:text-16  mb-16 4xl:mb-32 3xl:mb-20 xl:mb-20 md:mb-20   font-semibold">Project budget (USD)</label>
                                        <div className="flex flex-wrap md:gap-16 4xl:gap-32  3xl:gap-4 2xl:gap-3 lg:gap-3 gap-12">
                                            {tellUsData.projectBudgetlist.map((text,index) => {
                                                return(
                                                <div className="interestbox contactradiocheck" key={index}>
                                                    <input type="radio" id={`budget_${index+1}`} className="" name="project_budget" value={text.projectBudgetSingle} checked={ formInput.project_budget.includes(text.projectBudgetSingle) ? true : false } onChange={handleInputChange} />
                                                    <label htmlFor={`budget_${index+1}`}>{text.projectBudgetSingle}</label>
                                                </div>
                                                )
                                            })}
                                        </div>
                                        {simpleValidator.current.message("project_budget", formInput.project_budget, "required", {
                                            className: "error-message",
                                            messages: { required: "Please select project budget" }
                                        })}
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="" className="  font-semibold block text-14 4xl:text-20 3xl:text-18 md:text-16  mb-[4px] xl:mb-16 md:mb-14">Tell us more about your project</label>
                                        <input type="text" name="tellus_more" className={`h-[46px] 4xl:h-[62px]   xl:h-[50px] w-full outline-none bg-transparent text-14 4xl:text-18 2xl:text-15 border-b border-b-tertiary border-solid placeholder-tertiary font-semibold ${formInput.tellus_more ? '' : 'error'} `} placeholder="Something about your great idea" value={formInput.tellus_more ? formInput.tellus_more : ''} onChange={handleInputChange} />
                                        {simpleValidator.current.message("tellus_more", formInput.tellus_more, "required", {
                                            className: "error-message",
                                            messages: { required: "Please enter text" }
                                        })}
                                    </div>
                                    <div className="mt-18 4xl:mt-64 2xl:mt-48 xl:mt-32 md:mt-24">
                                        <ThemeButton type="button" link="#" className="btngr" buttontext="Submit the Request" value="handleSave" />
                                    </div>
                                    {Error}
                                    {SuccessMessageText}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TellUsAboutIt;