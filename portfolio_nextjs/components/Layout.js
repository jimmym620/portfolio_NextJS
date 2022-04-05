import Footer from "./Footer";
import NameHeading from "./NameHeading";
import Navbar from "./Navbar";
import Head from "next/head"

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Chun Ming Jimmy Man</title>
            </Head>
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
