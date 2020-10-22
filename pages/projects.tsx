import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import ProjectPanel from "../src/components/projectPanel";
import React, { useEffect } from "react";
import fetchProjects from "../src/redux/dispatchers/projects/fetchProjects";
import { Project } from "../src/redux/types";
import NavigationBar from "../src/components/navigationbar";
import {
	Box,
	Container,
	createStyles,
	IconButton,
	makeStyles,
	Theme,
	Typography,
} from "@material-ui/core";
import Footbar from "../src/components/footbar";
import Spinner from "../src/components/spinner";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: "flex",
			flexFlow: "column wrap",
			minHeight: "100vh",
		},
		content: {
			display: "flex",
			flexFlow: "column wrap",
			alignItems: "center",
			justifyContent: "space-evenly",
		},
		filler: {
			flexGrow: 1,
		},
		footer: {
			marginTop: "auto",
		},
	})
);

export default function Projects() {
	const dispatch = useDispatch();
	const { pending, projects } = useSelector((state) => state.projectsReducer);
	useEffect(() => {
		dispatch(fetchProjects());
	}, []);

	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Gabriel Kaszewski - Projects</title>
			</Head>
			<Box className={classes.root}>
				<NavigationBar />
				<Box className={classes.content}>
					<Typography variant="h2">My projects</Typography>
					{projects.map((project: Project) => {
						return (
							<ProjectPanel key={`project-${project.name}`} project={project} />
						);
					})}
				</Box>
				<Spinner open={pending} />
				<Box className={classes.filler} />
				<Footbar />
			</Box>
		</div>
	);
}
