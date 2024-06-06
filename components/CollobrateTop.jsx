
import PageTitle from "./layout/PageTitle"


const CollobrateTop = (props) => {
    if(props?.collobratetopdata?.title != '' || props?.collobratetopdata?.subtitle != ''){
    return (
        <div className="relative">
            <PageTitle pageTitleData={props.collobratetopdata} />
        </div>
    )
    }
}

export default CollobrateTop