import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	fetchPostsError,
	fetchPostsPending,
	fetchPostsSuccess,
} from "../../actions/postActions";
import { Post } from "../../types";

const fetchPosts = () => {
	return (dispatch) => {
		dispatch(fetchPostsPending());
		axios
			.get<Post[]>(`${BASE_URL}/blog/posts/`)
			.then((res) => {
				dispatch(fetchPostsSuccess(res.data));
				return res.data;
			})
			.catch((error) => dispatch(fetchPostsError(error)));
	};
};

export default fetchPosts;
