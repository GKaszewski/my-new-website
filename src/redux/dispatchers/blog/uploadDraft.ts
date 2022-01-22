import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
  uploadDraftPending,
  uploadDraftSuccess,
  uploadDraftError,
} from "../../actions/postActions";
import { Post } from "../../types";

const uploadDraft = (post: Post, token: string) => {
  return (dispatch) => {
    dispatch(uploadDraftPending());
    if (post?.slug != null) {
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
    } else {
      axios
        .post(`${BASE_URL}/blog/posts/`, post, {
          headers: {
            Authorization: `Token ${token}`,
          },
        })
        .then((res) => {
          dispatch(uploadDraftSuccess(post));
          return post;
        })
        .catch((error) => dispatch(uploadDraftError(error)));
    }
  };
};

export default uploadDraft;
