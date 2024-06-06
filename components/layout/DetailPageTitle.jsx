
import PageTitle from "./PageTitle";
import ThemeButton from "./ThemeButton";

const DetailPageTitle = (props) => {
    return (
        <div className="detailpagetitle pb-32 3xl:pb-96 2xl:pb-64 lg:pb-64 md:pb-48">
            {   
                props.pagetitledata &&
                <PageTitle pageTitleData={props.pagetitledata} />
            }
            <div className="pagedescription pt-32 2xl:pt-64">
                <div className="container">
                    <div className="grid grid-cols-12 gap-30">
                        <div className="col-span-12 lg:col-span-9">
                            {
                                props.descriptiontitle &&
                                <h3 className="font-manrope text-24 4xl:text-52 3xl:text-48 xl:text-36 font-bold text-textprimary">{props.descriptiontitle}</h3>
                            }
                            {
                                props.descriptiontext &&
                                <p className="pt-4 2xl:pt-48 text-16 lg:text-18 3xl:text-20 leading-[1.8] md:leading-[1.8]  xl:leading-[1.6] text-textColorSecondary">{props.descriptiontext}</p>
                            }
                            <div className="flex md:flex-row flex-col md:items-center items-start md:gap-0 gap-4 gap-x-32 3xl:mt-64  md:mt-48 mt-32">
                                {
                                    props.servicebutton1 &&
                                    <ThemeButton buttontext={props.servicebutton1.title} className="btngr" link={props.servicebutton1.url} />
                                }
                                {
                                    props.servicebutton2 &&
                                    <ThemeButton buttontext={props.servicebutton2.title} className="btnoutline" link={props.servicebutton2.url} />
                                }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPageTitle;