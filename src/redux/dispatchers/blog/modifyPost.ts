import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
  uploadDraftPending,
  uploadPostError,
  uploadPostPending,
  uploadPostSuccess,
} from "../../actions/postActions";

const modifyPost = (post: any, token: string) => {
  return (dispatch) => {
    dispatch(uploadPostPending());
    axios
      .put(`${BASE_URL}/blog/posts/${post.slug}/`, post, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        dispatch(uploadPostSuccess(post));
        return post;
      })
      .catch((error) => dispatch(uploadPostError(error)));
  };
};

export default modifyPost;
