import Image from "next/image";
import TechStack from "../components/TechStack";

export default function Home() {
    return (
        <div className="content-container">
            <div className="content">
                <h1 className="gradient-text">Hi!</h1>
                <p className="gradient-text">
                    A Computer Science graduate looking to join the world of web
                    development. Currently looking for work in a junior role.
                </p>

                <h2>Current tech stack:</h2>
                <TechStack />
            </div>
        </div>
    );
}
