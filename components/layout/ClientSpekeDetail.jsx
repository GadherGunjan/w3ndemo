import QuoteIcon from "@/assets/images/svgs/QuoteIcon";

const ClientSpekeDetail = (props) => {
  return (
    <div className="client-detailbox">
      <div className="relative">
      <div className="coma-icon text-linecolor 3xl:max-w-[174px] 
        2xl:max-w-[135px]  
        lg:max-w-[125px]

        max-w-[90px]
        h-auto 
        2xl:ml-0
        lg:ml-[-60px]
        lg:relative
        lg:left-auto
        lg:top-auto
        md:max-w-[117px]
        absolute
        md:left-[-80px]
        md:top-[-130px]
         left-[-40px]
         top-[-60px]
        ">
         <QuoteIcon  />
      </div>
       

        <div
          className="font-manrope font-light md:text-left text-center text-18 4xl:text-40 3xl:text-34  xl:text-30 md:text-24 3xl:pl-[68px] 2xl:pl-48 3xl:pt-0 2xl:pt-4"
          dangerouslySetInnerHTML={{ __html: props.text }}
        ></div>
      </div>
    </div>
  );
};

export default ClientSpekeDetail;
