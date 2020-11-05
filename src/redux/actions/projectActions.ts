import { Project } from "../types";

export const FETCH_PROJECTS_PENDING = "FETCH_PROJECTS_PENDING";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const FETCH_PROJECTS_ERROR = "FETCH_PROJECTS_ERROR";

interface FetchProjectPendingAction {
	type: typeof FETCH_PROJECTS_PENDING;
}

interface FetchProjectSuccessAction {
	type: typeof FETCH_PROJECTS_SUCCESS;
	payload: Project[];
}

interface FetchProjectErrorAction {
	type: typeof FETCH_PROJECTS_ERROR;
	error: any;
}

export type ProjectActions =
	| FetchProjectPendingAction
	| FetchProjectSuccessAction
	| FetchProjectErrorAction;

export const fetchProjectsPending = (): ProjectActions => {
	return {
		type: FETCH_PROJECTS_PENDING,
	};
};

export const fetchProjectsSuccess = (projects: Project[]): ProjectActions => {
	return {
		type: FETCH_PROJECTS_SUCCESS,
		payload: projects,
	};
};

export const fetchProjectsError = (error: any): ProjectActions => {
	return {
		type: FETCH_PROJECTS_ERROR,
		error: error,
	};
};
