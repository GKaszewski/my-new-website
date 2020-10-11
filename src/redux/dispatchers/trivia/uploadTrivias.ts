import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	uploadTriviasError,
	uploadTriviasPending,
	uploadTriviasSuccess,
} from "../../actions/triviaActions";
import { Trivia } from "../../types";

const uploadTrivias = (data: Trivia[], token: string) => {
	return (dispatch) => {
		dispatch(uploadTriviasPending());
		axios
			.post(`${BASE_URL}/trivias`, data, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch(uploadTriviasSuccess(data));
				return data;
			})
			.catch((error) => dispatch(uploadTriviasError(error)));
	};
};

export default uploadTrivias;
