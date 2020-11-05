import {
	FETCH_PROJECTS_ERROR,
	FETCH_PROJECTS_PENDING,
	FETCH_PROJECTS_SUCCESS,
	ProjectActions,
} from "../actions/projectActions";
import { Project } from "../types";

interface State {
	pending: boolean;
	projects: Project[];
	error: any;
}

const initialState: State = {
	pending: false,
	projects: [],
	error: null,
};

export const projectsReducer = (
	state = initialState,
	action: ProjectActions
): State => {
	switch (action.type) {
		case FETCH_PROJECTS_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_PROJECTS_SUCCESS:
			return {
				...state,
				pending: false,
				projects: action.payload,
			};
		case FETCH_PROJECTS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const getProjects = (state: State) => state.projects;
export const getProjectsPending = (state: State) => state.pending;
export const getProjectsError = (state: State) => state.error;
