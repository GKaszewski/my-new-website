import { useDispatch, useSelector } from "react-redux";
import ProjectPanel from "../src/components/projectPanel";
import React, {useEffect, useState} from "react";
import fetchProjects from "../src/redux/dispatchers/projects/fetchProjects";
import { Project } from "../src/redux/types";
import Spinner from "../src/components/spinner";
import { BaseLayout } from "../src/components/baselayout";
import { GetStaticProps } from "next";
import axios from "axios";
import { BASE_URL } from "../src/utils/ApiData";
import { NextSeo } from "next-seo";
import {Button} from "../src/components/button";

interface Props {
	staticData: Project[];
}

export default function Projects(props: Props) {
	const dispatch = useDispatch();
	const { pending, projects, error } = useSelector(
		(state) => state.projectsReducer
	);

	const [displayedProjects, setDisplayedProjects] = useState<Project[]>(projects || props.staticData);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	useEffect(()=>{
		filterProjects(selectedCategory)
	}, [projects])

	useEffect(() => {
		filterProjects(selectedCategory);
	}, [selectedCategory]);


	const filterProjects = (category: string) => {
		if (category === "all" || !category) {
			setDisplayedProjects(projects);
			return;
		}

		const filteredProjects = projects.filter((project: Project) => {
			return project.category.toLowerCase() === category.toLowerCase();
		});
		setDisplayedProjects(filteredProjects);
	}

	return (
		<BaseLayout title="Gabriel Kaszewski - Projects">
			<NextSeo
				title="Gabriel Kaszewski's portfolio"
				description="Gabriel Kaszewski's projects"
				openGraph={{
					title: "Gabriel Kaszewski's portfolio",
					url: `https://gabrielkaszewski.dev/projects`,
					description: "Gabriel Kaszewski's projects",
				}}
				twitter={{
					handle: "@handle",
					site: "@site",
					cardType: "summary_large_image",
				}}
			/>
			<span className="m-8" />
			<div className="flex flex-col w-full m-4 gap-4">
				<h1 className="text-5xl text-center font-bold">My projects</h1>
				<div className="p-8 w-full flex gap-2 items-center justify-center">
					<Button className="w-24" callback={()=>setSelectedCategory('all')}>All</Button>
					<Button className="w-24" callback={()=>setSelectedCategory('web')}>Web</Button>
					<Button className="w-24" callback={()=>setSelectedCategory('game')}>Games</Button>
					<Button className="w-24" callback={()=>setSelectedCategory('desktop')}>Desktop</Button>
					<Button className="w-24" callback={()=>setSelectedCategory('mobile')}>Mobile</Button>
				</div>
				<Spinner open={pending} />
				{error && (
					<p className="text-red-600 text-xl font-bold">
						Failed fetching projects 😔
					</p>
				)}
				{displayedProjects.map((project: Project) => {
					return (
						<ProjectPanel
							key={`project-${project.name}`}
							project={project}
						/>
					);
				})}
			</div>
		</BaseLayout>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const projects = (await axios.get<Project[]>(`${BASE_URL}/projects`)).data;
	return {
		props: {
			staticData: projects,
		},
	};
};
