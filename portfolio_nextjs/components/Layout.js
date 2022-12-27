import Footer from "./Footer";
import NavigationBar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Head>
                <title>Chun Ming Jimmy Man</title>
            </Head>
            <div className="header">
                <NavigationBar />
            </div>
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
