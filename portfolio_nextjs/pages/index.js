import Image from "next/image";
import TechStack from "../components/TechStack";

export default function Home() {
    return (
        <div className="content-container">
            <div className="content">
                <h1>Hi!</h1>
                <p>
                    A Computer Science graduate looking to join the world of web
                    development. Currently looking for work on front end
                    development but my goal is to eventually to move to full
                    stack.
                </p>

                <h2>Current tech stack:</h2>
                <TechStack />
            </div>
        </div>
    );
}
