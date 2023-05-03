import { useDispatch, useSelector } from "react-redux";
import ProjectPanel from "../src/components/projectPanel";
import React, { useEffect } from "react";
import fetchProjects from "../src/redux/dispatchers/projects/fetchProjects";
import { Project } from "../src/redux/types";
import Spinner from "../src/components/spinner";
import { BaseLayout } from "../src/components/baselayout";
import { GetStaticProps } from "next";
import axios from "axios";
import { BASE_URL } from "../src/utils/ApiData";
import { NextSeo } from "next-seo";

interface Props {
	staticData: Project[];
}

export default function Projects(props: Props) {
	const dispatch = useDispatch();
	const { pending, projects, error } = useSelector(
		(state) => state.projectsReducer
	);
	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

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
				{(pending || error) && props.staticData &&
					props.staticData.map((project: Project) => {
						return (
							<ProjectPanel
								key={`project-${project.name}`}
								project={project}
							/>
						);
					})}
				<Spinner open={pending} />
				{error && (
					<p className="text-red-600 text-xl font-bold">
						Failed fetching projects 😔
					</p>
				)}
				{projects.map((project: Project) => {
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
