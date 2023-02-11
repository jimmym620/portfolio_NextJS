import "animate.css";
import TechStack from "../components/TechStack";

import Link from "next/link";
export default function Home() {
    return (
        <div className="content-container animate__animated animate__zoomIn">
            <div className="content">
                <h1 className="gradient-text">Hi!</h1>
                <p className="gradient-text">
                    A Computer Science graduate looking to join the world of web
                    development. Currently looking for a graduate or junior
                    role.
                </p>

                <h1>Current tech stack/skills:</h1>
                <TechStack />

                <h3>
                    <Link href="/projects">View my projects here</Link>
                </h3>
            </div>
        </div>
    );
}
