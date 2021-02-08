import React from "react";
import { Skill } from "../redux/types";
import ChipComponent from "./chip";

interface Props {
  skill: Skill;
}

export default function SkillComponent(props: Props) {
  return <ChipComponent label={props.skill.name} />;
}
