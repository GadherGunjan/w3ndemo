import { Fragment , createContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import store from "../../contexts/Store";
// import store from "../../store/store";
import { Provider } from "react-redux";

const DefaultLayout = ({ children }) => {
    const DataContext = createContext();
    return(
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </Fragment>
    )
}
export default DefaultLayout; 