import {
	Box,
	Button,
	Chip,
	Container,
	createStyles,
	Grid,
	Grow,
	makeStyles,
	Paper,
	Theme,
	Typography,
} from "@material-ui/core";
import React from "react";
import { Project } from "../redux/types";

interface Props {
	project: Project;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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
				marginTop: "1rem",
				marginBottom: "1rem",
			},
		},
		description: {
			hyphens: "auto",
			wordWrap: "normal",
			whiteSpace: "pre-line",
		},
		chip: {
			color: theme.palette.text.primary,
		},
	})
);

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
					<Grid item xs={12} sm={6}>
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
							{props.project.technology ? (
								<Grid item>
									<Grid container direction="row" spacing={1}>
										{props.project.technology.map((tech) => {
											return (
												<Grid key={tech} item>
													<Chip
														//className={classes.chip}
														color="secondary"
														label={tech}
													/>{" "}
												</Grid>
											);
										})}
									</Grid>
								</Grid>
							) : null}

							<Grid item>
								<Grid container direction="row" spacing={1}>
									{props.project.githubUrl ? (
										<Grid item>
											<Button
												color="secondary"
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
												color="secondary"
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
												color="secondary"
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
					{/* {props.project.thumbnailUrls ? (
						<Grid item xs>
							<Container className={classes.imgContainer}>
								<Paper elevation={3}>
									<img src={props.project.thumbnailUrls[0]}></img>
								</Paper>
							</Container>
						</Grid>
					) : null} */}
					<Grid item xs={12} sm={6}>
						<Box className={classes.imgContainer}>
							<Paper elevation={3}>
								<img src="https://i.imgur.com/MNLefuT.jpg"></img>
							</Paper>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Grow>
	);
}
