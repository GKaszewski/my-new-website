import { Post } from "../types";

export const FETCH_POSTS_PENDING = "FETCH_POSTS_PENDING";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR";

export const FETCH_DRAFTS_PENDING = "FETCH_DRAFTS_PENDING";
export const FETCH_DRAFTS_SUCCESS = "FETCH_DRAFTS_SUCCESS";
export const FETCH_DRAFTS_ERROR = "FETCH_DRAFTS_ERROR";

export const UPLOAD_DRAFT_PENDING = "UPLOAD_DRAFT_PENDING";
export const UPLOAD_DRAFT_SUCCESS = "UPLOAD_DRAFT_SUCCESS";
export const UPLOAD_DRAFT_ERROR = "UPLOAD_DRAFT_ERROR";

export const UPLOAD_POST_PENDING = "UPLOAD_POST_PENDING";
export const UPLOAD_POST_SUCCESS = "UPLOAD_POST_SUCCESS";
export const UPLOAD_POST_ERROR = "UPLOAD_POST_ERROR";

export const SEARCH_POSTS_PENDING = "SEARCH_POSTS_PENDING";
export const SEARCH_POSTS_SUCCESS = "SEARCH_POSTS_SUCCESS";
export const SEARCH_POSTS_ERROR = "SEARCH_POSTS_ERROR";

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

interface FetchDraftsPendingAction {
  type: typeof FETCH_DRAFTS_PENDING;
}

interface FetchDraftsSuccessAction {
  type: typeof FETCH_DRAFTS_SUCCESS;
  payload: Post[];
}

interface FetchDraftsErrorAction {
  type: typeof FETCH_DRAFTS_ERROR;
  error: any;
}

interface UploadDraftPendingAction {
  type: typeof UPLOAD_DRAFT_PENDING;
}

interface UploadDraftSuccessAction {
  type: typeof UPLOAD_DRAFT_SUCCESS;
  payload: Post;
}

interface UploadDraftErrorAction {
  type: typeof UPLOAD_DRAFT_ERROR;
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

interface SearchPostsPendingAction {
  type: typeof SEARCH_POSTS_PENDING;
}

interface SearchPostsSuccessAction {
  type: typeof SEARCH_POSTS_SUCCESS;
  payload: Post[];
}

interface SearchPostsErrorAction {
  type: typeof SEARCH_POSTS_ERROR;
  error: any;
}

export type PostActions =
  | FetchPostPendingAction
  | FetchPostSuccessAction
  | FetchPostErrorAction
  | FetchDraftsPendingAction
  | FetchDraftsSuccessAction
  | FetchDraftsErrorAction
  | UploadDraftPendingAction
  | UploadDraftSuccessAction
  | UploadDraftErrorAction
  | UploadPostPendingAction
  | UploadPostSuccessAction
  | UploadPostErrorAction
  | SearchPostsPendingAction
  | SearchPostsSuccessAction
  | SearchPostsErrorAction;

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

export const fetchDraftsPending = (): PostActions => {
  return {
    type: FETCH_DRAFTS_PENDING,
  };
};

export const fetchDraftsSuccess = (posts: Post[]): PostActions => {
  return {
    type: FETCH_DRAFTS_SUCCESS,
    payload: posts,
  };
};

export const fetchDraftsError = (error: any): PostActions => {
  return {
    type: FETCH_DRAFTS_ERROR,
    error: error,
  };
};

export const uploadDraftPending = (): PostActions => {
  return {
    type: UPLOAD_DRAFT_PENDING,
  };
};

export const uploadDraftSuccess = (post: Post): PostActions => {
  return {
    type: UPLOAD_DRAFT_SUCCESS,
    payload: post,
  };
};

export const uploadDraftError = (error: any): PostActions => {
  return {
    type: UPLOAD_DRAFT_ERROR,
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

export const searchPostsPending = (): PostActions => {
  return {
    type: SEARCH_POSTS_PENDING,
  };
};

export const searchPostsSuccess = (posts: Post[]): PostActions => {
  return {
    type: SEARCH_POSTS_SUCCESS,
    payload: posts,
  };
};

export const searchPostsError = (error: any): PostActions => {
  return {
    type: SEARCH_POSTS_ERROR,
    error: error,
  };
};
