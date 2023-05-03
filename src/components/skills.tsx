import Spinner from "./spinner";
import {Skill} from "../redux/types";
import SkillComponent from "./skillcomponent";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchSkills from "../redux/dispatchers/skills/fetchSkills";

const Skills = () => {
    const dispatch = useDispatch();
    const {
        pending: skills_pending,
        skills,
        error: skills_error,
    } = useSelector((state) => state.skillsReducer);

    useEffect(() => {
        dispatch(fetchSkills());
    }, []);

    return <>
        <h3 className="text-5xl font-bold mt-4 mb-2 tracking-tight">Skills</h3>
        <div className="flex flex-wrap w-1/2 gap-4 justify-center">
            <Spinner open={skills_pending} />
            {skills_error && (
                <p className="text-red-600 text-xl font-bold">
                    Failed fetching skills 😔
                </p>
            )}
            {skills.map((skill: Skill, i) => {
                return <SkillComponent key={`${skill}-${i}`} skill={skill} />;
            })}
        </div>
    </>
};

export default Skills;
