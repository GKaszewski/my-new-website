import { Trivia } from "../types";

export const FETCH_TRIVIAS_PENDING = "FETCH_TRIVIAS_PENDING";
export const FETCH_TRIVIAS_SUCCESS = "FETCH_TRIVIAS_SUCCESS";
export const FETCH_TRIVIAS_ERROR = "FETCH_TRIVIAS_ERROR";

export const UPLOAD_TRIVIAS_PENDING = "UPLOAD_TRIVIAS_PENDING";
export const UPLOAD_TRIVIAS_SUCCESS = "UPLOAD_TRIVIAS_SUCCESS";
export const UPLOAD_TRIVIAS_ERROR = "UPLOAD_TRIVIAS_ERROR";

interface FetchTriviasPendingAction {
	type: typeof FETCH_TRIVIAS_PENDING;
}

interface FetchTriviasSuccessAction {
	type: typeof FETCH_TRIVIAS_SUCCESS;
	payload: Trivia[];
}

interface FetchTriviasErrorAction {
	type: typeof FETCH_TRIVIAS_ERROR;
	error: any;
}

interface UploadTriviasPendingAction {
	type: typeof UPLOAD_TRIVIAS_PENDING;
}

interface UploadTriviasSuccessAction {
	type: typeof UPLOAD_TRIVIAS_SUCCESS;
	payload: Trivia[];
}

interface UploadTriviasErrorAction {
	type: typeof UPLOAD_TRIVIAS_ERROR;
	error: any;
}

export type TriviaActions =
	| FetchTriviasPendingAction
	| FetchTriviasSuccessAction
	| FetchTriviasErrorAction
	| UploadTriviasPendingAction
	| UploadTriviasSuccessAction
	| UploadTriviasErrorAction;

export const fetchTriviasPending = (): TriviaActions => {
	return {
		type: FETCH_TRIVIAS_PENDING,
	};
};

export const fetchTriviasSuccess = (trivias: Trivia[]): TriviaActions => {
	return {
		type: FETCH_TRIVIAS_SUCCESS,
		payload: trivias,
	};
};

export const fetchTriviasError = (error: any): TriviaActions => {
	return {
		type: FETCH_TRIVIAS_ERROR,
		error: error,
	};
};

export const uploadTriviasPending = (): TriviaActions => {
	return {
		type: UPLOAD_TRIVIAS_PENDING,
	};
};

export const uploadTriviasSuccess = (trivias: Trivia[]): TriviaActions => {
	return {
		type: UPLOAD_TRIVIAS_SUCCESS,
		payload: trivias,
	};
};

export const uploadTriviasError = (error: any): TriviaActions => {
	return {
		type: UPLOAD_TRIVIAS_ERROR,
		error: error,
	};
};
