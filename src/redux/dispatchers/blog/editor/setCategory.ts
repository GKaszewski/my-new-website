import { setCategoryAction } from "../../../actions/editorActions";

export const setCategory = (val: string) => {
  return (dispatch) => {
    dispatch(setCategoryAction(val));
  };
};
