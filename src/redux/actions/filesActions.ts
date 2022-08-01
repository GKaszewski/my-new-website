import { FileFromBackend } from "../types";

interface IFileActionType<T, P = void> {
	type: T;
	payload?: P;
}

export enum FilesActionKeys {
	FETCH_FILES_PENDING = "FETCH_FILES_PENDING",
	FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS",
	FETCH_FILES_ERROR = "FETCH_FILES_ERROR",
	UPLOAD_FILE_PENDING = "UPLOAD_FILE_PENDING",
	UPLOAD_FILE_SUCCESS = "UPLOAD_FILE_SUCCESS",
	UPLOAD_FILE_ERROR = "UPLOAD_FILE_ERROR",
}

type FetchFilesPending = IFileActionType<FilesActionKeys.FETCH_FILES_PENDING>;
type FetchFilesSuccess = IFileActionType<
	FilesActionKeys.FETCH_FILES_SUCCESS,
	FileFromBackend[]
>;
type FetchFileError = IFileActionType<FilesActionKeys.FETCH_FILES_ERROR, any>;

type UploadFilePending = IFileActionType<FilesActionKeys.UPLOAD_FILE_PENDING>;
type UploadFileSuccess = IFileActionType<
	FilesActionKeys.UPLOAD_FILE_SUCCESS,
	File
>;
type UploadFileError = IFileActionType<FilesActionKeys.UPLOAD_FILE_ERROR, any>;

export type FileActions =
	| FetchFilesPending
	| FetchFilesSuccess
	| FetchFileError
	| UploadFilePending
	| UploadFileSuccess
	| UploadFileError;

export const fetchFilePending = (): FileActions => {
	return {
		type: FilesActionKeys.FETCH_FILES_PENDING,
	};
};

export const fetchFileSuccess = (files: FileFromBackend[]): FileActions => {
	return {
		type: FilesActionKeys.FETCH_FILES_SUCCESS,
		payload: files,
	};
};

export const fetchFileError = (error: any): FileActions => {
	return {
		type: FilesActionKeys.FETCH_FILES_ERROR,
		payload: error,
	};
};

export const uploadFilePending = (): FileActions => {
	return {
		type: FilesActionKeys.UPLOAD_FILE_PENDING,
	};
};

export const uploadFileSuccess = (file: File): FileActions => {
	return {
		type: FilesActionKeys.UPLOAD_FILE_SUCCESS,
		payload: file,
	};
};

export const uploadFileError = (error: any): FileActions => {
	return {
		type: FilesActionKeys.UPLOAD_FILE_ERROR,
		payload: error,
	};
};
