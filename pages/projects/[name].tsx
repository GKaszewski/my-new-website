import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Project} from "../../src/redux/types";
import {BASE_URL} from "../../src/utils/ApiData";
import Spinner from "../../src/components/spinner";
import {BaseLayout} from "../../src/components/baselayout";
import {NextSeo} from "next-seo";
import ProjectPreview from "../../src/components/projectPreview";

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
        <NextSeo
            title={`${project.name}`}
            description={project.description}
            openGraph={{
                title: `${project.name}`,
                description: project.description,
                images: [
                    {
                        url: project.thumbnails[0].file,
                        width: 800,
                        height: 600,
                    },
                ],
                siteName: `${project.name} - Gabriel Kaszewski`,
            }}
            twitter={{
                handle: '@handle',
                site: '@site',
                cardType: 'summary_large_image',
            }}
        />
        <ProjectPreview project={project} />
    </BaseLayout>
}

export default ProjectDetail;
