import projects from "../data/projects.json";
import Image from "next/image";

const Projects = () => {
    return (
        <div className="content-container">
            <div className="content">
                <h1>Here are my completed projects</h1>
                <div className="project-list">
                    {projects.map((project, index) => {
                        const { id, title, gitLink, link, image, tag, desc } =
                            project;
                        return (
                            <article key={id} className="project">
                                <div>
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
                                        <h4 className="text-center m-0">
                                            <a
                                                href={gitLink}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                GitHub Repo
                                            </a>
                                        </h4>
                                    </div>

                                    <ul className="bg-slate-300 w-1/2 py-1 pl-1 text-center">
                                        {tag + " "}
                                    </ul>

                                    <p className="w-1/2 mx-auto md:mx-0">
                                        {desc}
                                    </p>
                                </div>
                                <div className="image-container">
                                    {image != "" && (
                                        <Image
                                            src={image}
                                            layout="intrinsic"
                                            width={1369 / 4}
                                            height={947 / 4}
                                        />
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
