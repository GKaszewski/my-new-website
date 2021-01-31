import { Job } from "../types";

export const FETCH_JOBS_PENDING = "FETCH_JOBS_PENDING";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_ERROR = "FETCH_JOBS_ERROR";

export const UPLOAD_JOB_PENDING = "UPLOAD_JOB_PENDING";
export const UPLOAD_JOB_SUCCESS = "UPLOAD_JOB_SUCCESS";
export const UPLOAD_JOB_ERROR = "UPLOAD_JOB_ERROR";

interface FetchJobsPendingAction {
	type: typeof FETCH_JOBS_PENDING;
}

interface FetchJobsSuccessAction {
	type: typeof FETCH_JOBS_SUCCESS;
	payload: Job[];
}

interface FetchJobsErrorAction {
	type: typeof FETCH_JOBS_ERROR;
	error: any;
}

interface UploadJobPendingAction {
	type: typeof UPLOAD_JOB_PENDING;
}

interface UploadJobSuccessAction {
	type: typeof UPLOAD_JOB_SUCCESS;
	payload: Job;
}

interface UploadJobErrorAction {
	type: typeof UPLOAD_JOB_ERROR;
	error: any;
}

export type JobActions =
	| FetchJobsPendingAction
	| FetchJobsSuccessAction
	| FetchJobsErrorAction
	| UploadJobPendingAction
	| UploadJobSuccessAction
    | UploadJobErrorAction;

    export const fetchJobsPending = (): JobActions => {
        return {
            type: FETCH_JOBS_PENDING,
        };
    };
    
    export const fetchJobsSuccess = (jobs: Job[]): JobActions => {
        return {
            type: FETCH_JOBS_SUCCESS,
            payload: jobs,
        };
    };
    
    export const fetchJobsError = (error: any): JobActions => {
        return {
            type: FETCH_JOBS_ERROR,
            error: error,
        };
    };
    
    export const uploadJobPending = (): JobActions => {
        return {
            type: UPLOAD_JOB_PENDING,
        };
    };
    
    export const uploadJobSuccess = (job: Job): JobActions => {
        return {
            type: UPLOAD_JOB_SUCCESS,
            payload: job,
        };
    };
    
    export const uploadJobError = (error: any): JobActions => {
        return {
            type: UPLOAD_JOB_ERROR,
            error: error,
        };
    };