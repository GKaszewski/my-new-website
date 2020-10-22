import { Skill } from "../types";

export const FETCH_SKILLS_PENDING = "FETCH_SKILLS_PENDING";
export const FETCH_SKILLS_SUCCESS = "FETCH_SKILLS_SUCCESS";
export const FETCH_SKILLS_ERROR = "FETCH_SKILLS_ERROR";

interface FetchSkillsPendingAction {
    type: typeof FETCH_SKILLS_PENDING;
}

interface FetchSkillsSuccessAction {
    type: typeof FETCH_SKILLS_SUCCESS;
    payload: Skill[];
}

interface FetchSkillsErrorAction {
    type: typeof FETCH_SKILLS_ERROR;
    error: any;
}

export type SkillsActions =
    | FetchSkillsPendingAction
    | FetchSkillsSuccessAction
    | FetchSkillsErrorAction;

export const fetchSkillsPending = (): SkillsActions => {
    return {
        type: FETCH_SKILLS_PENDING,
    };
};

export const fetchSkillsSuccess = (skills: Skill[]): SkillsActions => {
    return {
        type: FETCH_SKILLS_SUCCESS,
        payload: skills,
    };
};

export const fetchSkillsError = (error: any): SkillsActions => {
    return {
        type: FETCH_SKILLS_ERROR,
        error: error,
    };
};