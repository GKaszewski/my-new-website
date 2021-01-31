import { selectPostAction } from "../../../actions/editorActions";
import { Post } from "../../../types";

export const selectPost = (data: Post) => {
  return (dispatch) => {
    dispatch(selectPostAction(data));
  };
};
