import projects from "../data/projects.json";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="content-container">
            <h1 className="gradient-text">My completed projects</h1>
            <div className="project-list">
                {projects.map((project, index) => {
                    const { id, title, gitLink, link, image, tag, desc } =
                        project;
                    return (
                        <article key={id} className="project">
                            <div className="desc">
                                <div className="project-title">
                                    <h3>
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            {title}
                                        </a>
                                    </h3>
                                    <h4>
                                        <a
                                            href={gitLink}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            GitHub Repo
                                        </a>
                                    </h4>
                                </div>

                                <ul>
                                    {tag + " "}
                                </ul>

                                <p>{desc}</p>
                            </div>
                            <div className="image-container">
                                {image != "" && (
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src={image}
                                            layout="intrinsic"
                                            width={1369 / 4}
                                            height={947 / 4}
                                        />
                                    </a>
                                )}
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    );
};

export default Projects;
