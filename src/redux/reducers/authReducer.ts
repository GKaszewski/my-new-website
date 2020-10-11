import {
	AuthActions,
	SIGN_OUT,
	SIGN_IN_PENDING,
	SIGN_IN_SUCCESS,
	SIGN_IN_ERROR,
} from "../actions/authActions";

interface State {
	token: string;
	loggedIn: boolean;
	pending: boolean;
	error: any;
}

const initialState: State = {
	loggedIn: false,
	token: null,
	pending: false,
	error: null,
};

export const authReducer = (
	state = initialState,
	action: AuthActions
): State => {
	switch (action.type) {
		case SIGN_IN_PENDING:
			return {
				...state,
				pending: true,
			};
		case SIGN_IN_SUCCESS:
			return {
				...state,
				pending: false,
				token: action.payload,
				loggedIn: true,
			};
		case SIGN_IN_ERROR:
			return {
				...state,
				pending: false,
				loggedIn: false,
				error: action.error,
			};
		case SIGN_OUT:
			return {
				...state,
				token: null,
				loggedIn: false,
			};
		default:
			return state;
	}
};

export const getToken = (state: State) => state.token;
export const getLoggedIn = (state: State) => state.loggedIn;
export const getAuthPending = (state: State) => state.pending;
export const getAuthError = (state: State) => state.error;
