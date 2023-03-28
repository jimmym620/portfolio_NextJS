import { SocialIcon } from "react-social-icons";
import "animate.css";

const Contact = () => {
    return (
        <div className="content-container animate__animated animate__slideInUp">
            <div className="content contact-container">
                <h1>Connect with me</h1>
                <div className="icon-container">
                    <SocialIcon
                        url="https://github.com/jimmym620"
                        target="_blank"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/cmjman/"
                        target="_blank"
                    />
                </div>
                <h3>Email: jimmym620@gmail.com</h3>
                <h3>Phone: (+44)7587789376</h3>
            </div>
        </div>
    );
};

export default Contact;
