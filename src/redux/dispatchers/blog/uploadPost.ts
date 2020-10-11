import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	uploadPostPending,
	uploadPostSuccess,
	uploadPostError,
} from "../../actions/postActions";

const uploadPost = (post: any, token: string) => {
	return (dispatch) => {
		dispatch(uploadPostPending());
		axios
			.post(`${BASE_URL}/blog/posts/`, post, {
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

export default uploadPost;
