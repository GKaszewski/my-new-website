import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	deleteFileError,
	deleteFilePending,
	deleteFileSuccess,
} from "../../actions/filesActions";
import { FileFromBackend } from "../../types";

export const deleteFile = (file: FileFromBackend, token: string) => {
	return (dispatch) => {
		dispatch(deleteFilePending());
		axios
			.delete(`${BASE_URL}/files/${file.file_id}`, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch(deleteFileSuccess());
			})
			.catch((err) => dispatch(deleteFileError(err)));
	};
};
