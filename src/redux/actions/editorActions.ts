import { Post } from "../types";

export const SET_TITLE = "SET_TITLE";
export const SET_CONTENT = "SET_CONTENT";
export const SET_CATEGORY = "SET_CATEGORY";
export const SELECT_POST = "SELECT_POST";
export const TOGGLE_EDITING_EXISITING_POST = "TOGGLE_EDITING_EXISITING_POST";

interface SetTitleAction {
  type: typeof SET_TITLE;
  payload: string;
}

interface SetContentAction {
  type: typeof SET_CONTENT;
  payload: string;
}

interface SetCategoryAction {
  type: typeof SET_CATEGORY;
  payload: string;
}

interface SelectPostAction {
  type: typeof SELECT_POST;
  payload: Post;
}

interface ToggleEditingExisitingPostAction {
  type: typeof TOGGLE_EDITING_EXISITING_POST;
}

export type EditorActions =
  | SetTitleAction
  | SetContentAction
  | SetCategoryAction
  | SelectPostAction
  | ToggleEditingExisitingPostAction;

export const setTitleAction = (title: string): EditorActions => {
  return {
    type: SET_TITLE,
    payload: title,
  };
};

export const setContentAction = (content: string): EditorActions => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};

export const setCategoryAction = (category: string): EditorActions => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

export const selectPostAction = (post: Post): EditorActions => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};

export const toggleEditingExistingPostAction = (): EditorActions => {
  return {
    type: TOGGLE_EDITING_EXISITING_POST,
  };
};
