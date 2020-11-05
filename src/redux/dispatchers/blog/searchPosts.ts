import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
    searchPostsPending,
    searchPostsSuccess,
    searchPostsError,
} from "../../actions/postActions";
import { Post } from "../../types";

export const searchPosts = (query: string) => {
    return dispatch => {
        dispatch(searchPostsPending());
        axios.get<Post[]>(`${BASE_URL}/blog/posts/?search=${query}`).then(res => {
            dispatch(searchPostsSuccess(res.data));
            return res.data;
        }).catch(error => dispatch(searchPostsError(error)));
    }
}