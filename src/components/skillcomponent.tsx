import React from 'react';
import { Chip } from '@material-ui/core';
import { Skill } from '../redux/types';

interface Props {
    skill: Skill;
}

export default function SkillComponent(props: Props) {
    return <Chip color="secondary" label={props.skill.name} />
}