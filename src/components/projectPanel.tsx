import {
	Box,
	Button,
	Chip,
	Container,
	Grid,
	Grow,
	makeStyles,
	Paper,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Project } from "../redux/types";

interface Props {
	project: Project;
}

const useStyles = makeStyles({
	root: {
		height: "100%",
	},
	imgContainer: {
		width: "100%",
		height: "100%",
		"& img": {
			display: "block",
			objectFit: "cover",
			height: "auto",
			width: "100%",
		},
	},
	description: {
		hyphens: "auto",
		wordWrap: "normal",
		whiteSpace: "pre-line",
	},
});

export default function ProjectPanel(props: Props) {
	const classes = useStyles();
	return (
		<Grow in={true} timeout={1000}>
			<Container className={classes.root}>
				<Grid
					container
					direction="row"
					alignItems="center"
					justify="space-evenly"
					spacing={2}
				>
					<Grid item xs>
						<Grid
							container
							direction="column"
							alignItems="flex-start"
							justify="space-evenly"
							spacing={2}
						>
							<Grid item>
								<Typography variant="h3">{props.project.name}</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" className={classes.description}>
									{props.project.description}
								</Typography>
							</Grid>
							<Grid item>
								<Chip color="primary" label={props.project.technology} />
							</Grid>
							<Grid item>
								<Grid container direction="row" spacing={1}>
									{props.project.githubUrl ? (
										<Grid item>
											<Button
												color="primary"
												variant="outlined"
												href={props.project.githubUrl}
											>
												Code
											</Button>
										</Grid>
									) : null}

									{props.project.visitUrl ? (
										<Grid item>
											<Button
												color="primary"
												variant="outlined"
												href={props.project.visitUrl}
											>
												Live
											</Button>
										</Grid>
									) : null}

									{props.project.downloadUrl ? (
										<Grid item>
											<Button
												color="primary"
												variant="outlined"
												href={props.project.downloadUrl}
											>
												Download
											</Button>
										</Grid>
									) : null}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid item xs>
						<Container className={classes.imgContainer}>
							<Paper elevation={3}>
								<img src="https://i.imgur.com/rSPt0qi.jpg"></img>
							</Paper>
						</Container>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
}
