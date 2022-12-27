import projects from "../data/projects.json";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";

const Projects = () => {
    return (
        <div className="content-container">
            <h1 className="gradient-text">My completed projects</h1>
            <div className="project-list">
                {projects.map((project, index) => {
                    const { id, title, gitLink, link, image, tag, desc } =
                        project;
                    return (
                        <Accordion>
                            <Accordion.Item eventKey={id} className="project">
                                <Accordion.Header>
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {title}
                                    </a>{" "}
                                    <a
                                        id="gitLink"
                                        href={gitLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub Repo
                                    </a>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="accordion-body">
                                        <div className="desc">
                                            <ul>{tag + ` `}</ul>

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
