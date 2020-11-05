import { useDispatch, useSelector } from "react-redux";
import ProjectPanel from "../src/components/projectPanel";
import React, { useEffect } from "react";
import fetchProjects from "../src/redux/dispatchers/projects/fetchProjects";
import { Project } from "../src/redux/types";
import {
	Grid,
	Typography,
} from "@material-ui/core";
import Spinner from "../src/components/spinner";
import { BaseLayout } from "../src/components/baselayout";


export default function Projects() {
	const dispatch = useDispatch();
	const { pending, projects } = useSelector((state) => state.projectsReducer);
	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	return (
		<BaseLayout title="Gabriel Kaszewski - Projects">
			<Grid item>
				<Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={2}>
					<Grid item>
						<Typography variant="h3">My projects</Typography>
					</Grid>
					<Grid item>
						{projects.map((project: Project) => {
							return (
								<ProjectPanel key={`project-${project.name}`} project={project} />
							);
						})}
					</Grid>
					<Grid item>
						<Spinner open={pending} />
					</Grid>
				</Grid>
			</Grid>
		</BaseLayout>
	);
}
