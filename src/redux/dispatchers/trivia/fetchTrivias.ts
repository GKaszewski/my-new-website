import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	fetchTriviasError,
	fetchTriviasPending,
	fetchTriviasSuccess,
} from "../../actions/triviaActions";
import { Trivia } from "../../types";

const fetchTrivias = () => {
	return (dispatch) => {
		dispatch(fetchTriviasPending());
		axios
			.get<Trivia[]>(`${BASE_URL}/trivias`)
			.then((res) => {
				dispatch(fetchTriviasSuccess(res.data));
				return res.data;
			})
			.catch((error) => dispatch(fetchTriviasError(error)));
	};
};

export default fetchTrivias;
