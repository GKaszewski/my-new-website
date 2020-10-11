import { Post } from "../types";

export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const UPLOAD_POST_PENDING = "UPLOAD_POST_PENDING";
export const UPLOAD_POST_SUCCESS = "UPLOAD_POST_SUCCESS";
export const UPLOAD_POST_ERROR = "UPLOAD_POST_ERROR";

interface FetchPostPendingAction {
	type: typeof FETCH_POSTS_PENDING;
}

interface FetchPostSuccessAction {
	type: typeof FETCH_POSTS_SUCCESS;
	payload: Post[];
}

interface FetchPostErrorAction {
	type: typeof FETCH_POSTS_ERROR;
	error: any;
}

interface UploadPostPendingAction {
	type: typeof UPLOAD_POST_PENDING;
}

interface UploadPostSuccessAction {
	type: typeof UPLOAD_POST_SUCCESS;
	payload: Post;
}

interface UploadPostErrorAction {
	type: typeof UPLOAD_POST_ERROR;
	error: any;
}

export type PostActions =
	| FetchPostPendingAction
	| FetchPostSuccessAction
	| FetchPostErrorAction
	| UploadPostPendingAction
	| UploadPostSuccessAction
	| UploadPostErrorAction;

export const fetchPostsPending = (): PostActions => {
	return {
		type: FETCH_POSTS_PENDING,
	};
};

export const fetchPostsSuccess = (posts: Post[]): PostActions => {
	return {
		type: FETCH_POSTS_SUCCESS,
		payload: posts,
	};
};

export const fetchPostsError = (error: any): PostActions => {
	return {
		type: FETCH_POSTS_ERROR,
		error: error,
	};
};

export const uploadPostPending = (): PostActions => {
	return {
		type: UPLOAD_POST_PENDING,
	};
};

export const uploadPostSuccess = (post: Post): PostActions => {
	return {
		type: UPLOAD_POST_SUCCESS,
		payload: post,
	};
};

export const uploadPostError = (error: any): PostActions => {
	return {
		type: UPLOAD_POST_ERROR,
		error: error,
	};
};
