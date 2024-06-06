import { useEffect } from "react";
import ClientImage from "./ClientImage";
import ClientSpekeDetail from "./ClientSpekeDetail";
import ImagePath01 from "@/assets/images/client-image-1.jpg";
import ImagePath02 from "@/assets/images/client-image-2.jpg";
import ImagePath03 from "@/assets/images/client-image-3.jpg";
import LeftArrowIcon from "@/assets/images/svgs/LeftArrowIcon";
import RightArrowIcon from "@/assets/images/svgs/rightArrowicon";

const ClientSpeakSlider = ({ selectTestimonials }) => {
  const clientData = [];
  if (selectTestimonials) {
    selectTestimonials.map((testimonial, index) => {
      return clientData.push({
        value: `0${index + 1}`,
        imageURL: testimonial.featuredImage.node.sourceUrl,
        imageALT: testimonial.featuredImage.node.altText,
        clientName: testimonial.title,
        text: testimonial.content,
      });
    });
  }
  useEffect(() => {
    // Working code Start
    const elements = document.querySelectorAll(".client-imagebox");
    const elementsDetail = document.querySelectorAll(".client-detailbox");
    const nextButton = document.getElementById("nextButton");
    const prevButton = document.getElementById("prevButton");
    let currentIndex = 0;
    let currentIndexdetail = 0;
    /* function cloneElement() {
            elements.forEach((element, index) => {
                const elementHtml = element
                let clonedMenu = elementHtml.cloneNode(true);
                // elementContainer.appendChild(clonedMenu);
            });
        }
        cloneElement(); */
    // Function to update classes based on current index
    function updateClasses() {
      elements.forEach((element, index) => {
        const className =
          index === currentIndex
            ? "client-imagebox active"
            : `client-imagebox client-${(index - currentIndex + elements.length) % elements.length
            }`;
        element.className = className;
        // elementContainer.appendChild(elements);
      });
      elementsDetail.forEach((element, index) => {
        const classNamedetail =
          index === currentIndexdetail
            ? "client-detailbox active"
            : `client-detailbox client-${(index - currentIndexdetail + elementsDetail.length) %
            elementsDetail.length
            }`;
        element.className = classNamedetail;
        // elementContainer.appendChild(elements);
      });
    }
    // Initial class setup
    updateClasses();
    // Listen for next button click
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % elements.length;
      currentIndexdetail = (currentIndexdetail + 1) % elementsDetail.length;
      updateClasses();
    });
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + elements.length) % elements.length;
      currentIndexdetail =
        (currentIndexdetail - 1 + elementsDetail.length) %
        elementsDetail.length;
      updateClasses();
    });
    // Working code End
  }, []);

  return (
    <div className="client_slider relative grid-cols-2   gap-6  col-span-2 lg:grid">
      {/* {caseData.map(({ value, title, description, link, imageURL }) => (
                <div className="case-scroll-section px-[calc(96px/2)]" key={value}>
                    <CaseStudyCard link={link} imageURL={imageURL} title={title} description={description}  />
                </div>
            ))} */}

      <div className="imagebox_wrap relative w-[250px] 4xl:w-[490px] 2xl:w-[400px] lg:w-[300px] md:w-[300px]  mx-auto">
        <div className="absolute left-[-1.25rem] top-0 bottom-0 flex flex-col z-10 justify-center items-center clientslnav">
          <button
            id="prevButton"
            className="w-[2rem] h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] xl:w-[48px] xl:h-[48px] rounded-full bg-white flex items-center justify-center text-textColorSecondary hover:text-white"
          >
            <LeftArrowIcon className="3xl:w-[30px] xl:w-[24px]" />
          </button>
          <button
            id="nextButton"
            className="w-[2rem] h-[2rem] 2xl:w-[3rem] 2xl:h-[3rem] xl:w-[48px] xl:h-[48px] rounded-full bg-white flex items-center justify-center mt-[0.7rem] text-textColorSecondary hover:text-white"
          >
            <RightArrowIcon className="3xl:w-[30px] xl:w-[24px]" />
          </button>
        </div>
        <div
          className="w-full relative before:pt-[130.61%] before:block"
          id="elementContainer"
        >
          {clientData.map(({ value, clientName, imageALT, imageURL }) => (
            <ClientImage
              key={value}
              imageURL={imageURL}
              imageALT={imageALT}
              clientName={clientName}
            />
            
          ))}
          
        </div>
      </div>
      <div className="client_detailbox relative min-h-[300px] md:min-h-[100%] flex items-center">
        <div className="inner_client_detailbox ml-[68px]">
          {clientData.map(({ value, clientName, text }) => (
            <ClientSpekeDetail key={value} text={text}  clientName={clientName}/>
          ))}
          {/* <div className="absolute left-[3.25rem] bottom-0 flex z-10 justify-center items-center clientslnav gap-[24px]">
          <button
            id="prevButton"
            className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full bg-bgSecondary flex items-center justify-center text-textColorSecondary hover:text-white hover:bg-gradient-linear"
          >
            <LeftArrowIcon className="3xl:w-[30px] xl:w-[24px]" />
          </button>
          <button
            id="nextButton"
            className="w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full bg-bgSecondary flex items-center justify-center text-textColorSecondary hover:text-white"
          >
            <RightArrowIcon className="3xl:w-[30px] xl:w-[24px]" />
          </button>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ClientSpeakSlider;
