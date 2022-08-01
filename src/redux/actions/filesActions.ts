import { File } from "../types";

interface IFileActionType<T, P = void> {
	type: T;
	payload?: P;
}

export enum FilesActionKeys {
	FETCH_FILES_PENDING = "FETCH_FILES_PENDING",
	FETCH_FILES_SUCCESS = "FETCH_FILES_SUCCESS",
	FETCH_FILES_ERROR = "FETCH_FILES_ERROR",
}

type FetchFilesPending = IFileActionType<FilesActionKeys.FETCH_FILES_PENDING>;
type FetchFilesSuccess = IFileActionType<
	FilesActionKeys.FETCH_FILES_SUCCESS,
	File[]
>;
type FetchFileError = IFileActionType<FilesActionKeys.FETCH_FILES_ERROR, any>;

export type FileActions =
	| FetchFilesPending
	| FetchFilesSuccess
	| FetchFileError;

export const fetchFilePending = (): FileActions => {
	return {
		type: FilesActionKeys.FETCH_FILES_PENDING,
	};
};

export const fetchFileSuccess = (files: File[]): FileActions => {
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
