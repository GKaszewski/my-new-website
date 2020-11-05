import {
	TriviaActions,
	FETCH_TRIVIAS_PENDING,
	FETCH_TRIVIAS_SUCCESS,
	FETCH_TRIVIAS_ERROR,
	UPLOAD_TRIVIAS_PENDING,
	UPLOAD_TRIVIAS_SUCCESS,
	UPLOAD_TRIVIAS_ERROR,
} from "../actions/triviaActions";
import { Trivia } from "../types";

interface State {
	trivias: Trivia[];
	newTrivias: Trivia[];
	pending: boolean;
	error: any;
}

const initialState: State = {
	trivias: [],
	newTrivias: null,
	pending: false,
	error: null,
};

export const triviaReducer = (
	state = initialState,
	action: TriviaActions
): State => {
	switch (action.type) {
		case FETCH_TRIVIAS_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_TRIVIAS_SUCCESS:
			return {
				...state,
				pending: false,
				trivias: action.payload,
			};
		case FETCH_TRIVIAS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case UPLOAD_TRIVIAS_PENDING:
			return {
				...state,
				pending: true,
			};
		case UPLOAD_TRIVIAS_SUCCESS:
			return {
				...state,
				pending: false,
				newTrivias: action.payload,
			};
		case UPLOAD_TRIVIAS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export const getTrivias = (state: State) => state.trivias;
export const getNewTrivias = (state: State) => state.newTrivias;
export const getTriviasPending = (state: State) => state.pending;
export const getTriviaError = (state: State) => state.error;
