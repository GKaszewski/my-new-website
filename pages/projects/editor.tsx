import {BaseLayout} from "../../src/components/baselayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import fetchProjects from "../../src/redux/dispatchers/projects/fetchProjects";
import {Project} from "../../src/redux/types";
import Link from "next/link";
import SideNavComponent from "../../src/components/sidenav";
import TextField from "../../src/components/textfield";
import InputWithLabel from "../../src/components/inputWithLabel";
import TextArea from "../../src/components/textarea";
import FileUpload from "../../src/components/fileUpload";
import ProjectPreview from "../../src/components/projectPreview";
import {onFileDrop} from "../../src/utils/onFileDrop";
import useUploadedFile from "../../src/utils/hooks/useUploadedFile";
import {uploadFiles} from "../../src/redux/dispatchers/files/uploadFiles";
import {Button} from "../../src/components/button";

const Editor = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [name, setName] = useState<string>("");
    const [shortDescription, setShortDescription] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [githubLink, setGithubLink] = useState<string>("");
    const [downloadLink, setDownloadLink] = useState<string>("");
    const [websiteLink, setWebsiteLink] = useState<string>("");
    const [technologies, setTechnologies] = useState<string>("");
    const [thumbnails, setThumbnails] = useState<string[]>([]);

    const dispatch = useDispatch();
    const {loggedIn, token} = useSelector((state) => state.authReducer);
    const {projects} = useSelector((state) => state.projectsReducer);
    const {uploadedFiles} = useSelector((state) => state.filesReducer);

    useUploadedFile(setDescription);

    useEffect(() => {
        dispatch(fetchProjects());
    }, []);

    useEffect(() => {
        if (uploadedFiles.length === 0) return;
        uploadedFiles.forEach((file) => {
            setThumbnails([...thumbnails, file.url]);
        });
    }, [uploadedFiles]);

    useEffect(() => {
        setName(selectedProject?.name || "");
        setShortDescription(selectedProject?.shortDescription || "");
        setDescription(selectedProject?.description || "");
        setGithubLink(selectedProject?.githubUrl || "");
        setDownloadLink(selectedProject?.downloadUrl || "");
        setWebsiteLink(selectedProject?.visitUrl || "");
        setTechnologies(selectedProject?.technology.join(",") || "");
        setThumbnails(selectedProject?.thumbnails || "");
    }, [selectedProject]);

    const notAuthenticatedView = () => {
        return (
            <BaseLayout title="Gabriel Kaszewski - Project Editor">
                <h1 className="text-3xl text-red-500 font-semibold mt-16">
                    You are not authenticated.
                </h1>
                <Link href="/login">
                    Login
                </Link>
            </BaseLayout>
        );
    }

    if (!loggedIn) return notAuthenticatedView();


    const handleThumbnailUpload = (event) => {
        const files = event.target.files;
        uploadFiles(files, token);
    }

    const updateProject = () => {
        const thumbnailsString = thumbnails.join(",");
        const project = {
            ...selectedProject,
            name,
            shortDescription,
            description,
            technology: technologies,
            githubUrl: githubLink,
            downloadUrl: downloadLink,
            visitUrl: websiteLink,
            thumbnails: thumbnailsString
        };
        console.log(project);
    }

    return <BaseLayout title="Project Editor">
        <span className="mt-16"/>
        <div className="w-full flex justify-center items-center gap-2 p-2">
            <SideNavComponent>
                <ul>
                    {projects.map((project: Project) => {
                        return <li onClick={() => setSelectedProject(project)} key={`${project.name}-project`}>{project.name}</li>
                    })}
                </ul>
            </SideNavComponent>
            <span className="flex-1" />
            <h1 className="font-medium text-2xl">Project Editor</h1>
            <span className="flex-1" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 p-4">
            <div onDrop={(event)=>onFileDrop(event, dispatch, token)} className="flex flex-col gap-4">
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Name" input={<TextField value={name} onChange={(val)=>setName(val)} />} />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Short description" input={<TextArea value={shortDescription} onChange={(val)=>setShortDescription(val)} rows={2} /> } />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Description" input={<TextArea value={description} onChange={(val)=>setDescription(val)} rows={16} /> } />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Technologies" input={<TextField value={technologies} onChange={(val)=>setTechnologies(val)} />} />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Github" input={<TextField value={githubLink} onChange={(val)=>setGithubLink(val)} />} />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Download" input={<TextField value={downloadLink} onChange={(val)=>setDownloadLink(val)} />} />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Website" input={<TextField value={websiteLink} onChange={(val)=>setWebsiteLink(val)} />} />
                <InputWithLabel className="flex-col" labelClassName="w-16" label="Thumbnails" input={<FileUpload onChange={handleThumbnailUpload} accept={"image/*"} multiple /> } />
                <Button callback={updateProject} className="w-32">Update</Button>
            </div>
            <ProjectPreview project={selectedProject} />
        </div>
    </BaseLayout>
}

export default Editor;
