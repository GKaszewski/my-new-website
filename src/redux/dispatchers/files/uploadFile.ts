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
		const formData = new FormData();
		formData.append("file", file);
		axios
			.post(`${BASE_URL}/files/`, formData, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			.then((res) => {
				dispatch(uploadFileSuccess(res.data));
				return res.data;
			})
			.catch((err) => dispatch(uploadFileError(err)));
	};
};
