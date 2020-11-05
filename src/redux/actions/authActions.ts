export const SIGN_IN_PENDING = "SIGN_IN_PENDING";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const SIGN_OUT = "SIGN_OUT";

interface SignInPendingAction {
	type: typeof SIGN_IN_PENDING;
}

interface SignInSuccessAction {
	type: typeof SIGN_IN_SUCCESS;
	payload: string;
}

interface SignInErrorAction {
	type: typeof SIGN_IN_ERROR;
	error: any;
}

interface SignOutAction {
	type: typeof SIGN_OUT;
}

export type AuthActions =
	| SignInPendingAction
	| SignInSuccessAction
	| SignInErrorAction
	| SignOutAction;

export const signInPending = (): AuthActions => {
	return {
		type: SIGN_IN_PENDING,
	};
};

export const signInSuccess = (token: string): AuthActions => {
	return {
		type: SIGN_IN_SUCCESS,
		payload: token,
	};
};

export const signInError = (error: any): AuthActions => {
	return {
		type: SIGN_IN_ERROR,
		error: error,
	};
};

export const signOut = (): AuthActions => {
	return {
		type: SIGN_OUT,
	};
};
