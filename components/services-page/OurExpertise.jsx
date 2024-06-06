const OurExpertise = (props) => {
    const data = props.expertisemData
    return (
        <>
        {(data?.title != '' || data?.expertiesRepeater?.length > 0) &&
        <div className="advantage_development_section py-24 4xl:py-128 3xl:py-96 2xl:py-64 xl:py-48 lg:py-32 md:py-32">
            <div className="container">
                    {data.title &&
                        <h1 className="titleText" dangerouslySetInnerHTML={{__html: data.title }}></h1>
                    }
                    <div className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary   pt-16 4xl:pt-42 2xl:pt-42 xl:pt-28 md:pt-24  pr-16 4xl:pr-48 2xl:pr-48 xl:pr-28 md:pr-24  pb-20 4xl:pb-96 2xl:pb-64 xl:pb-36   md:pb-28">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sequi minima animi placeat, commodi qui dolorum reprehenderit ducimus debitis voluptates dicta, aliquid fugit iure natus. Aspernatur doloremque velit esse nihil.    
                    </div>
                    <div className="advantage_development_row flex flex-wrap gap-y-18 4xl:gap-y-64 2xl:gap-y-48 xl:gap-y-32 md:gap-y-24">
                    {data?.expertiesRepeater.map((el, idx)=>(
                        <div className="w-full lg:w-5/12 mr-auto border-l border-solid border-linecolor px-16 4xl:px-48 2xl:px-32 xl:px-28 md:px-24 py-1  " key={idx}>
                            <div className="numberbox flex-none pb-16 4xl:pb-48 2xl:pb-32 xl:pb-28 md:pb-24 text-linecolor text-24 4xl:text-64 3xl:text-54 2xl:text-48  xl:text-42 md:text-30  font-semibold">
                            {String(idx + 1).padStart(2, '0')}</div>
                                <h3 className="text-16 4xl:text-32 3xl:text-26 xl:text-24  md:text-20 text-textprimary font-semibold pb-14 4xl:pb-24 xl:pb-20 md:pb-16 ">{el.titleTabSingleExpertise}</h3>
                                <p className="text-textColorSecondary text-14 4xl:text-20 3xl:text-18 md:text-16">{el.descriptionTabSingleExpertise}</p>
                        </div>
                    ))}
                    </div>

                    <div className="text-14 4xl:text-20 3xl:text-18 md:text-16 text-textColorSecondary   pt-16 4xl:pt-[84px] 2xl:pt-48 xl:pt-28 md:pt-24 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus sequi minima animi placeat, commodi qui dolorum reprehenderit ducimus debitis voluptates dicta, aliquid fugit iure natus. Aspernatur doloremque velit esse nihil.    
                    </div>
            </div>
        </div>
    }
    </>
    )
}
export default OurExpertise;