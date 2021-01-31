import { setTitleAction } from "../../../actions/editorActions";

export const setTitle = (val: string) => {
  return (dispatch) => {
    dispatch(setTitleAction(val));
  };
};
