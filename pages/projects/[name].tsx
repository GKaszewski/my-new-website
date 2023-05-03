import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "../../src/redux/types";
import {BASE_URL} from "../../src/utils/ApiData";
import Spinner from "../../src/components/spinner";
import {BaseLayout} from "../../src/components/baselayout";
import ReactMarkdown from "react-markdown";
import ChipComponent from "../../src/components/chip";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProjectDetail = () => {
    const {query} = useRouter();
    const {name} = query;

    const [project, setProject] = useState<Project>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>(null);

    const fetchProject = async (): Promise<Project> => {
        return (await axios.get<Project>(`${BASE_URL}/projects/${name}`)).data;
    }

    const prepareProject = () => {
        setLoading(true);
        fetchProject().then((project: Project) => {
            setProject(project);
            setLoading(false);
        }).catch(() => {
            setError('Failed to fetch project.');
            setLoading(false);
        });
    }

    useEffect(()=>{
        if (!name) return;
        prepareProject();
    }, [name]);

    if (loading) return <Spinner open={loading} />

    if (error) return <div className="text-center text-red-500">{error}</div>

    return <BaseLayout title={`Gabriel Kaszewski - ${project.name}`}>
        <div className="prose lg:prose-lg xl:prose-xl p-4 flex w-full flex-col justify-center items-center gap-4 mt-16">
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
    </BaseLayout>
}

export default ProjectDetail;
