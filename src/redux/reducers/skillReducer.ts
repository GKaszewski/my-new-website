import { Skill } from "../types";
import { FETCH_SKILLS_ERROR, FETCH_SKILLS_PENDING, FETCH_SKILLS_SUCCESS, SkillsActions } from '../actions/skillsActions'

interface State {
    skills: Skill[];
    pending: boolean;
    error: any;
}

const initialState: State = {
    skills: [],
    pending: false,
    error: null,
};

export const skillReducer = (state = initialState, action: SkillsActions): State => {
    switch (action.type) {
        case FETCH_SKILLS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_SKILLS_SUCCESS:
            return {
                ...state,
                skills: action.payload,
                pending: false
            }
        case FETCH_SKILLS_ERROR:
            return {
                ...state,
                error: action.error,
                pending: false
            }
        default:
            return state;
    }
}

export const getSkills = (state: State) => state.skills;
export const getSkillsPending = (state: State) => state.pending;
export const getSkillsError = (state: State) => state.error;