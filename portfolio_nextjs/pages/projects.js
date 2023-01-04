import projects from "../data/projects.json";
import Accordion from "react-bootstrap/Accordion";
import "animate.css";

const Projects = () => {
    return (
        <div className="content-container animate__animated animate__slideInUp ">
            <h1 className="gradient-text">My projects</h1>
            <p>
                Click the project names or images to view the hosted versions.
            </p>
            <div className="project-list">
                {projects.map((project, index) => {
                    const { id, title, gitLink, link, image, tag, desc } =
                        project;
                    return (
                        <Accordion key={id}>
                            <Accordion.Item
                                eventKey={id}
                                className="project animate__animated animate__rollIn"
                            >
                                <Accordion.Header>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <h3>{title}</h3>
                                    </a>
                                    <a
                                        id="gitLink"
                                        href={gitLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <h4>GitHub Repo</h4>
                                    </a>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="accordion-body">
                                        <div className="desc">
                                            <ul>Tags: {tag.join(", ")}</ul>

                                            <p>{desc}</p>
                                        </div>
                                        <div className="image-container">
                                            {image != "" && (
                                                <a
                                                    href={link}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    <img
                                                        src={image}
                                                        className="image"
                                                    />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
