import {
  TOGGLE_EDITING_EXISITING_POST,
  EditorActions,
  SELECT_POST,
  SET_CATEGORY,
  SET_CONTENT,
  SET_TITLE,
} from "../actions/editorActions";
import { Post } from "../types";

interface State {
  selectedPost: Post;
  title: string;
  content: string;
  category: string;
  editingExistingPost: boolean;
}

const initialState: State = {
  selectedPost: null,
  title: "",
  content: "",
  category: "",
  editingExistingPost: false,
};

export const editorReducer = (
  state = initialState,
  action: EditorActions
): State => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SELECT_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    case TOGGLE_EDITING_EXISITING_POST:
      return {
        ...state,
        editingExistingPost: !state.editingExistingPost,
      };
    default:
      return state;
  }
};
