export const SIGN_IN_PENDING = "SIGN_IN_PENDING";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_ERROR = "SIGN_IN_ERROR";

export const SIGN_OUT = "SIGN_OUT";

export const SIGNED_IN_ALREADY = "SIGNED_IN_ALREADY";

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

interface SignedInAlreadyAction {
	type: typeof SIGNED_IN_ALREADY,
	payload: string, 
}

export type AuthActions =
	| SignInPendingAction
	| SignInSuccessAction
	| SignInErrorAction
	| SignOutAction
	| SignedInAlreadyAction;

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

export const signedInAlready = (token : string): AuthActions => {
	return {
		type: SIGNED_IN_ALREADY,
		payload: token,
	};
};

