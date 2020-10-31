import React from 'react';
import { Chip, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Skill } from '../redux/types';

interface Props {
    skill: Skill;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        chip: {
            color: theme.palette.text.primary,
        },
    })
);

export default function SkillComponent(props: Props) {
    const classes = useStyles();
    return <Chip className={classes.chip} color="primary" label={props.skill.name} />
}