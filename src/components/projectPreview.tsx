import {Project} from "../redux/types";
import React, {FC} from "react";
import ReactMarkdown from "react-markdown";
import ChipComponent from "./chip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

interface Props {
    project: Project;
}

const ProjectPreview: FC<Props> = ({project}) => {
    if (!project) return null;

    return <div className="prose lg:prose-lg xl:prose-xl p-4 flex w-full flex-col justify-center items-center gap-4 mt-16">
        <h1>{project.name}</h1>
        <span className="mt-8" />
        <section className="prose lg:prose-lg xl:prose-xl mx-auto">
            <ReactMarkdown className="whitespace-pre-wrap" >
                {project.description}
            </ReactMarkdown>
        </section>
        <span className="mt-8" />
        <section className="mx-auto items-center justify-center flex flex-col w-full">
            <h1>Technologies</h1>
            <div className="flex flex-wrap gap-2">
                {project.technology.map((technology) => {
                    return <ChipComponent key={`${technology}`} label={technology} />
                })}
            </div>
        </section>
        <span className="mt-8" />
        <section className="mx-auto items-center justify-center flex flex-col w-full">
            <h1>Gallery</h1>
            <div className="flex flex-col gap-4">
                {project.thumbnails.map((thumbnail) => {
                    return <img key={`${thumbnail.file}`} alt="project thumbnail" src={thumbnail.file} className="mx-auto" />
                })}
            </div>
        </section>
        <span className="mt-8" />
        <section className="mx-auto items-center justify-center flex flex-col w-full">
            <h1>Links</h1>
            <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                    <a
                        className="no-underline text-white hover:text-white p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
                        href={project.githubUrl}
                    >
							<span>
								<FontAwesomeIcon icon={["fab", "github"]} />
							</span>{" "}
                        CODE
                    </a>
                )}
                {project.visitUrl && (
                    <a
                        className="no-underline text-white hover:text-white p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
                        href={project.visitUrl}
                    >
							<span>
								<FontAwesomeIcon icon={["fas", "eye"]} />
							</span>{" "}
                        LIVE
                    </a>
                )}
                {project.downloadUrl && (
                    <a
                        className="no-underline text-white hover:text-white p-2 w-full text-center rounded-xl border border-yellow-400 hover:bg-yellow-400"
                        href={project.downloadUrl}
                    >
							<span>
								<FontAwesomeIcon
                                    icon={["fas", "cloud-download-alt"]}
                                />
							</span>{" "}
                        DOWNLOAD
                    </a>
                )}
            </div>
        </section>
    </div>
}

export default ProjectPreview;
