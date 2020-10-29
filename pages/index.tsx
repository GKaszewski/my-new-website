import Head from 'next/head';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavigationBar from '../src/components/navigationbar';
import {
	Box,
	Button,
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography,
} from '@material-ui/core';
import Footbar from '../src/components/footbar';
import fetchSkills from '../src/redux/dispatchers/skills/fetchSkills';
import { Skill } from '../src/redux/types';
import SkillComponent from '../src/components/skillcomponent';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minHeight: '100vh',
			width: '100%',
			margin: '0',
			padding: 0,
			display: 'flex',
		},
		navbar: {
			padding: 0,
		},
		content: {
			textAlign: 'justify',
			marginLeft: '1rem',
			marginRight: '1rem',
		},
		textWrap: {
			whiteSpace: 'pre-line',
			hyphens: 'auto',
			wordWrap: 'normal',
		},
		filler: {
			flex: 1,
		},
		footer: {
			marginTop: "auto",
		},
	})
);

export default function Home() {
	const dispatch = useDispatch();
	const { pending, skills } = useSelector((state) => state.skillsReducer);
	useEffect(() => {
		dispatch(fetchSkills());
	}, []);

	const classes = useStyles();

	const aboutMeSection = `
	Hi, my name is Gabriel Kaszewski and I am a High School student and self-taught full stack developer. I started coding when I was 11.
	I love solving problems and I hope that I'll work in one of FAANG companies in the future. Currently I am looking for a job as full-stack developer.
	I am very passionate about Computer Science and after High School, I'm planning on studying it.`;

	const experienceSection = `I have worked completely remotely as Unity Developer at Mobil Titans since November 2019 till January 2020.`;

	return (
		<Grid className={classes.root} container direction="column" wrap="wrap" justify="flex-start" spacing={2}>
			<Head>
				<title>Gabriel Kaszewski</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Grid item style={{ padding: 0 }}>
				<NavigationBar />
			</Grid>
			<Grid style={{ height: '100%' }} container item justify="center" >
				<Grid item>
					<Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={2}>
						<Grid item xs={12} sm={6}>
							<Typography variant='h3'>Who am I?</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography className={classes.content} variant="body1">{aboutMeSection}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant='h3'>Skills</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Grid container direction="row" wrap="wrap" spacing={2} justify="center" alignContent="center" alignItems="center">
								{skills.map((skill: Skill) => {
									return <Grid item key={skill.name}>
										<SkillComponent skill={skill} />
									</Grid>
								})}
							</Grid>
						</Grid>
						<Grid item style={{ textAlign: 'center' }} xs={12} sm={6}>
							<Typography variant='h3'>Work experience</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography className={classes.content} variant="body1">{experienceSection}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<Grid item className={classes.filler}>
			</Grid>
			<Grid className={classes.footer} >
				<Footbar />
			</Grid>
		</Grid>
	);
}
