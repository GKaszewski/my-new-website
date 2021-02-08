import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
  fetchDraftsError,
  fetchDraftsPending,
  fetchDraftsSuccess,
} from "../../actions/postActions";
import { Post } from "../../types";

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchDraftsPending());
    axios
      .get<Post[]>(`${BASE_URL}/blog/drafts/`)
      .then((res) => {
        dispatch(fetchDraftsSuccess(res.data));
        return res.data;
      })
      .catch((error) => dispatch(fetchDraftsError(error)));
  };
};

export default fetchPosts;
