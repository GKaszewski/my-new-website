import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
  uploadDraftPending,
  uploadDraftSuccess,
  uploadDraftError,
} from "../../actions/postActions";

const uploadDraft = (post: any, token: string) => {
  return (dispatch) => {
    dispatch(uploadDraftPending());
    axios
      .put(`${BASE_URL}/blog/drafts/${post.slug}/`, post, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        dispatch(uploadDraftSuccess(post));
        return post;
      })
      .catch((error) => dispatch(uploadDraftError(error)));
  };
};

export default uploadDraft;
