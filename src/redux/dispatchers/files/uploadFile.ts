import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	uploadFileError,
	uploadFilePending,
	uploadFileSuccess,
} from "../../actions/filesActions";

export const uploadFile = (file: File, token: string) => {
	return (dispatch) => {
		dispatch(uploadFilePending());
		axios
			.post(`${BASE_URL}/files/`, file, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				console.log(res.data);
				dispatch(uploadFileSuccess(file));
			})
			.catch((err) => dispatch(uploadFileError(err)));
	};
};
