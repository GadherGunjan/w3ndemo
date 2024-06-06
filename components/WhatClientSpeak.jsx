import ThemeButton from "./layout/ThemeButton";
import ClientSpeakSlider from "./layout/ClientSpeakSlider";
import SplitText from "./SplitText";

const WhatClientSpeak = (props) => {
  const {
    testimonialFirstSectionTitle,
    testimonialSecondSectionTitle,
    testimonialSectionButtonName,
    selectTestimonials,
  } = props;

  const clientSpeakData = {
    title: testimonialFirstSectionTitle,
    subtitle: testimonialSecondSectionTitle,
    buttonTitle: testimonialSectionButtonName?.title,
    buttonLink: testimonialSectionButtonName?.url,
  };

  if (selectTestimonials) {
    return (
      <div className="relative whatclientspeak_wrap py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
        <div className="container">

          <div className="titlebox relative flex flex-col lg:flex-row justify-between items-start lg:items-center mb-20 4xl:mb-96  2xl:mb-64 xl:mb-36   md:mb-28">
            {clientSpeakData.title && (
              <h1 className="titleText flex justify-center lg:w-auto w-full pb-16 lg:pb-0">
                <span className="md:mr-4 mr-0">
                  <SplitText copy={clientSpeakData.title} role="heading" />
                </span>
                {/* {clientSpeakData.subtitle} */}
                  <SplitText copy={clientSpeakData.subtitle} role="heading" />
              </h1>
            )}

            <ThemeButton
              buttontext={clientSpeakData.buttonTitle}
              link={clientSpeakData.buttonLink}
              className="btnoutline lg:flex hidden"
            />
          </div>
          <div className="">
            {(selectTestimonials) &&
              <ClientSpeakSlider selectTestimonials={selectTestimonials} />
            }
          </div>
          <div className=" md:pt-48 pt-[24px]  justify-center lg:hidden flex">
          <ThemeButton
              buttontext={clientSpeakData.buttonTitle}
              link={clientSpeakData.buttonLink}
              className="btnoutline "
            />
            </div>
        </div>
      </div>
    );
  }
  return ''
};

export default WhatClientSpeak;
