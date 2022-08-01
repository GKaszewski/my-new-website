import { FileActions, FilesActionKeys } from "../actions/filesActions";
import { File } from "../types";

interface State {
	fetchPending: boolean;
	fetchError: any;
	files: File[];
}

const initialState: State = {
	fetchPending: false,
	fetchError: null,
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
		default:
			return state;
	}
};
