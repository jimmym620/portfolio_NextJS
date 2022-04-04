import Footer from "./Footer";
import NameHeading from "./NameHeading";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="header">
                <NameHeading />
                <Navbar />
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
