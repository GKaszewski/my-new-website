import { FETCH_JOBS_ERROR, FETCH_JOBS_PENDING, FETCH_JOBS_SUCCESS, JobActions, UPLOAD_JOB_ERROR, UPLOAD_JOB_PENDING, UPLOAD_JOB_SUCCESS } from "../actions/jobActions";
import { Job } from "../types";

interface State {
	jobs: Job[];
	newJob: Job;
	pending: boolean;
	error: any;
}

const initialState: State = {
	jobs: [],
	newJob: null,
	pending: false,
	error: null,
};

export const jobsReducer = (
	state = initialState,
	action: JobActions
): State => {
	switch (action.type) {
		case FETCH_JOBS_PENDING:
			return {
				...state,
				pending: true,
				jobs: [],
				error: null,
			};
		case FETCH_JOBS_SUCCESS:
			return {
				...state,
				pending: false,
				jobs: action.payload,
				error: null,
			};
		case FETCH_JOBS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case UPLOAD_JOB_PENDING:
			return {
				...state,
				pending: true,
				error: null,
			};
		case UPLOAD_JOB_SUCCESS:
			return {
				...state,
				pending: false,
				newJob: action.payload,
				error: null,
			};
		case UPLOAD_JOB_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};
