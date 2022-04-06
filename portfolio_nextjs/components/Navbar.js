import Link from "next/link";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
    const toggleNav = () => {
        let x = document.getElementById("navLinks");
        let heading = document.getElementById("nameHeading");
        console.log(x);
        if (x.style.display === "flex") {
            x.style.display = "none";
            heading.style.display = "block";
        } else {
            x.style.display = "flex";
            heading.style.display = "none";
        }
    };
    return (
        <nav>
            <div id="navLinks">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>

            <a id="nav-tog-btn" onClick={toggleNav}>
                <CgMenu />
            </a>
        </nav>
    );
};

export default Navbar;
