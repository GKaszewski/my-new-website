import { setContentAction } from "../../../actions/editorActions";

export const setContent = (val: string) => {
  return (dispatch) => {
    dispatch(setContentAction(val));
  };
};
