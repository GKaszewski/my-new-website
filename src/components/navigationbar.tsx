import {
	AppBar,
	Box,
	createStyles,
	IconButton,
	makeStyles,
	Theme,
	Toolbar,
	Typography,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import WorkIcon from "@material-ui/icons/Work";
import EmailIcon from "@material-ui/icons/Email";
import ChromeReaderModeIcon from "@material-ui/icons/ChromeReaderMode";
import Link from "next/link";

const useStyles = makeStyles((theme: Theme) => createStyles({
	root: {
		width: '100%',
		padding: 0,
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'center',
		textAlign: 'center',
		[theme.breakpoints.down('xs')]: {
			flexFlow: 'column wrap',
		}
	},
	navbar: {
		display: 'flex',
		flexFlow: 'row',
		flex: 1,
		padding: 0,
		justifyContent: 'center',
		[theme.breakpoints.down('xs')]: {
			flexFlow: 'column wrap',
			alignContent: 'center',
			textAlign: 'center',
		}
	},
	title: {
		flex: 1
	}
}));

export default function NavigationBar() {
	const classes = useStyles();
	return (
		<Box className={classes.root}>
			<Typography color="textPrimary" variant="h3">Gabriel Kaszewski</Typography>
			<AppBar elevation={0} color="transparent" position="static">
				<Toolbar>
					<Box className={classes.navbar}>
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
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
