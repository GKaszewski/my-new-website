import { toggleEditingExistingPostAction } from "../../../actions/editorActions";

export const toggleEditing = () => {
  return (dispatch) => {
    dispatch(toggleEditingExistingPostAction());
  };
};
