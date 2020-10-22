import {
	AppBar,
	Box,
	IconButton,
	makeStyles,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import Link from "next/link";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexFlow: "column wrap",
		alignItems: "center",
	},
	navbar: {
		alignItems: "center",
	},
});

export default function NavigationBar() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Typography variant="h2">Gabriel Kaszewski</Typography>
			<AppBar
				className={classes.navbar}
				color="transparent"
				elevation={0}
				position="static"
			>
				<Toolbar>
					<Link href="/">
						<IconButton color="primary" edge="start">
							<HomeIcon></HomeIcon>
							<Typography variant="body1">Home</Typography>
						</IconButton>
					</Link>
					<Link href="/projects">
						<IconButton color="primary" edge="start">
							<WorkIcon></WorkIcon>
							<Typography variant="body1">Projects</Typography>
						</IconButton>
					</Link>
					<Link href="/blog">
						<IconButton color="primary" edge="start">
							<ChromeReaderModeIcon></ChromeReaderModeIcon>
							<Typography variant="body1">Blog</Typography>
						</IconButton>
					</Link>
					<Link href="/contact">
						<IconButton color="primary" edge="start">
							<EmailIcon></EmailIcon>
							<Typography variant="body1">Contact</Typography>
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
