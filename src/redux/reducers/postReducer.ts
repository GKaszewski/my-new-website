import {
	FETCH_POSTS_ERROR,
	FETCH_POSTS_PENDING,
	FETCH_POSTS_SUCCESS,
	PostActions,
	SEARCH_POSTS_ERROR,
	SEARCH_POSTS_PENDING,
	SEARCH_POSTS_SUCCESS,
	UPLOAD_POST_ERROR,
	UPLOAD_POST_PENDING,
	UPLOAD_POST_SUCCESS,
} from "../actions/postActions";
import { Post } from "../types";

interface State {
	posts: Post[];
	searchedPosts: Post[];
	newPost: Post;
	pending: boolean;
	error: any;
}

const initialState: State = {
	posts: [],
	searchedPosts: [],
	newPost: null,
	pending: false,
	error: null,
};

export const postsReducer = (
	state = initialState,
	action: PostActions
): State => {
	switch (action.type) {
		case FETCH_POSTS_PENDING:
			return {
				...state,
				pending: true,
			};
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				pending: false,
				posts: action.payload,
			};
		case FETCH_POSTS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case UPLOAD_POST_PENDING:
			return {
				...state,
				pending: true,
			};
		case UPLOAD_POST_SUCCESS:
			return {
				...state,
				pending: false,
				newPost: action.payload,
			};
		case UPLOAD_POST_ERROR:
			return {
				...state,
				pending: false,
				error: action.error,
			};
		case SEARCH_POSTS_PENDING:
			return {
				...state,
				pending: true,
			};
		case SEARCH_POSTS_SUCCESS:
			return {
				...state,
				pending: false,
				searchedPosts: action.payload,

			};
		case SEARCH_POSTS_ERROR:
			return {
				...state,
				pending: false,
				error: action.error
			};
		default:
			return state;
	}
};

export const getPosts = (state: State) => state.posts;
export const getSearchedPosts = (state: State) => state.searchedPosts;
export const getNewPost = (state: State) => state.newPost;
export const getPostsPending = (state: State) => state.pending;
export const getPostsError = (state: State) => state.error;
