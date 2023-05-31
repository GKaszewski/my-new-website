import { FileActions, FilesActionKeys } from "../actions/filesActions";
import { FileFromBackend } from "../types";

interface State {
	fetchPending: boolean;
	fetchError: any;
	uploadPending: boolean;
	uploadError: any;
	deletePending: boolean;
	deleteError: any;
	uploadedFile: FileFromBackend;
	uploadedFiles: FileFromBackend[];
	files: FileFromBackend[];
}

const initialState: State = {
	fetchPending: false,
	fetchError: null,
	uploadPending: false,
	uploadError: null,
	uploadedFile: null,
	uploadedFiles: [],
	deletePending: false,
	deleteError: null,
	files: [],
};

export const filesReducer = (
	state = initialState,
	action: FileActions
): State => {
	switch (action.type) {
		case FilesActionKeys.FETCH_FILES_PENDING:
			return {
				...state,
				fetchPending: true,
				fetchError: null,
			};
		case FilesActionKeys.FETCH_FILES_SUCCESS:
			return {
				...state,
				fetchPending: false,
				fetchError: null,
				files: action.payload,
			};
		case FilesActionKeys.FETCH_FILES_ERROR:
			return {
				...state,
				fetchPending: false,
				fetchError: action.payload,
			};
		case FilesActionKeys.UPLOAD_FILE_PENDING:
			return {
				...state,
				uploadPending: true,
				uploadError: null,
				uploadedFile: null,
			};
		case FilesActionKeys.UPLOAD_FILE_SUCCESS:
			return {
				...state,
				uploadPending: false,
				uploadError: null,
				uploadedFile: action.payload,
			};
		case FilesActionKeys.UPLOAD_FILE_ERROR:
			return {
				...state,
				uploadPending: false,
				uploadError: action.payload,
				uploadedFile: null,
			};
		case FilesActionKeys.DELETE_FILE_PENDING:
			return {
				...state,
				deletePending: true,
				deleteError: null,
			};
		case FilesActionKeys.DELETE_FILE_SUCCESS:
			return {
				...state,
				deletePending: false,
				deleteError: null,
			};
		case FilesActionKeys.DELETE_FILE_ERROR:
			return {
				...state,
				deletePending: false,
				deleteError: action.payload,
			};
			case FilesActionKeys.UPLOAD_FILES_PENDING:
				return {
					...state,
					uploadPending: true,
					uploadError: null,
					uploadedFiles: [],
				};
			case FilesActionKeys.UPLOAD_FILES_SUCCESS:
				return {
					...state,
					uploadPending: false,
					uploadError: null,
					uploadedFiles: action.payload,
				};
			case FilesActionKeys.UPLOAD_FILES_ERROR:
				return {
					...state,
					uploadPending: false,
					uploadError: action.payload,
					uploadedFiles: [],
				};
		default:
			return state;
	}
};
