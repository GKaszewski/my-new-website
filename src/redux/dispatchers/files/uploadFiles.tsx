import {
    uploadFilesError,
    uploadFilesPending,
    uploadFilesSuccess,
} from "../../actions/filesActions";
import axios from "axios";
import {BASE_URL} from "../../../utils/ApiData";
import {FileFromBackend} from "../../types";

export const uploadFiles = (files: File[], token: string) => {
    return (dispatch: any) => {
        dispatch(uploadFilesPending())
        const uploadedFiles: FileFromBackend[] = [];
        files.forEach(async (file) => {
            const formData = new FormData();
            formData.append("file", file);
            await axios.post(`${BASE_URL}/files/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {
                uploadedFiles.push(response.data);
            }).catch((error) => {
                dispatch(uploadFilesError(error));
            });
        });

        dispatch(uploadFilesSuccess(uploadedFiles));
    }
}
