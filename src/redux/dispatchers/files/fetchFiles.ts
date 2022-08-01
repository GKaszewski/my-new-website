import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	fetchFileError,
	fetchFilePending,
	fetchFileSuccess,
} from "../../actions/filesActions";
import { FileFromBackend } from "../../types";

export const fetchFiles = () => {
	return (dispatch) => {
		dispatch(fetchFilePending());
		axios
			.get<FileFromBackend[]>(`${BASE_URL}/files/`)
			.then((res) => {
				dispatch(fetchFileSuccess(res.data));
				return res.data;
			})
			.catch((err) => dispatch(fetchFileError(err)));
	};
};
