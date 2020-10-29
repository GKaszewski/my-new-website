import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography,
} from '@material-ui/core';
import fetchSkills from '../src/redux/dispatchers/skills/fetchSkills';
import { Skill } from '../src/redux/types';
import SkillComponent from '../src/components/skillcomponent';
import { BaseLayout } from '../src/components/baselayout';
import Spinner from '../src/components/spinner';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			textAlign: 'justify',
			marginLeft: '1rem',
			marginRight: '1rem',
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
		<BaseLayout title="Gabriel Kaszewski">
			<Grid item>
				<Grid container direction="column" justify="center" alignContent="center" alignItems="center" spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						<Typography variant='h3'>Who am I?</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Typography className={classes.content} variant="body1">{aboutMeSection}</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Typography variant='h3'>Skills</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Grid container direction="row" wrap="wrap" spacing={2} justify="center" alignContent="center" alignItems="center">
							{skills.map((skill: Skill) => {
								return <Grid item key={skill.name}>
									<SkillComponent skill={skill} />
								</Grid>
							})}
						</Grid>
					</Grid>
					<Grid item>
						<Spinner open={pending} />
					</Grid>
					<Grid item style={{ textAlign: 'center' }} xs={12} sm={6}>
						<Typography variant='h3'>Work experience</Typography>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<Typography className={classes.content} variant="body1">{experienceSection}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</BaseLayout>
	);
}
