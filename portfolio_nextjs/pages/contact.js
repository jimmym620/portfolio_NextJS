import { SocialIcon } from "react-social-icons";

const Contact = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1>Connect with me</h1>
                <div className="icon-container">
                    <SocialIcon
                        url="https://github.com/jimmym620"
                        target="_blank"
                    />
                    <SocialIcon
                        url="https://www.linkedin.com/in/chun-ming-jimmy-man"
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
