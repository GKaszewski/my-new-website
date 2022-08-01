import { BaseLayout } from "../src/components/baselayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchFiles } from "../src/redux/dispatchers/files/fetchFiles";
import { FileFromBackend } from "../src/redux/types";
import { Button } from "../src/components/button";
import TextField from "../src/components/textfield";
import { uploadFile } from "../src/redux/dispatchers/files/uploadFile";
import Spinner from "../src/components/spinner";
import { deleteFile } from "../src/redux/dispatchers/files/deleteFile";

const FilesPage = () => {
	const { loggedIn, token } = useSelector((state) => state.authReducer);
	const { fetchPending, fetchError, files, uploadPending, deletePending } =
		useSelector((state) => state.filesReducer);

	const dispatch = useDispatch();

	const fileInputRef = useRef<HTMLInputElement>(null);

	const [displayFiles, setDisplayFiles] = useState<FileFromBackend[]>([]);
	const [filesToUpload, setUploadFiles] = useState<File[]>([]);
	const [selectedFiles, setSelectedFiles] = useState<FileFromBackend[]>([]);
	const [query, setQuery] = useState<string>("");

	useEffect(() => {
		dispatch(fetchFiles());
	}, []);

	useEffect(() => {
		dispatch(fetchFiles());
	}, [uploadPending, deletePending]);

	useEffect(() => {
		setDisplayFiles(files);
	}, [files]);

	if (!loggedIn) {
		return (
			<BaseLayout title="Gabriel Kaszewski - Files">
				<div className="w-full min-h-screen flex justify-center items-center">
					<p className="font-semibold text-3xl">
						You are not authorized.
					</p>
				</div>
			</BaseLayout>
		);
	}

	return (
		<BaseLayout title="Gabriel Kaszewski - Files">
			<div className="w-full flex flex-wrap md:flex-nowrap gap-2 mt-16 p-2 bg-gray-900">
				<input
					ref={fileInputRef}
					type="file"
					className="hidden"
					onChange={(event) => {
						const files = Array.from(event.target.files);
						setUploadFiles(files);
					}}
					multiple
				/>
				<div className="w-32">
					{filesToUpload.length === 0 && (
						<Button
							callback={() => {
								fileInputRef.current?.click();
							}}
						>
							Add file
						</Button>
					)}
					{filesToUpload.length > 0 && (
						<Button
							callback={() => {
								filesToUpload.forEach((file) => {
									dispatch(uploadFile(file, token));
								});
								setUploadFiles([]);
							}}
						>
							Upload
						</Button>
					)}
				</div>
				<div className="w-32">
					<Button
						callback={() => {
							setUploadFiles([]);
							dispatch(fetchFiles());
						}}
					>
						Refresh
					</Button>
				</div>
				<div className="w-32">
					<Button
						callback={() => {
							selectedFiles.forEach((file) => {
								dispatch(deleteFile(file, token));
							});
						}}
					>
						Delete
					</Button>
				</div>
				<div className="w-full md:w-1/3">
					<TextField
						onChange={(val) => {
							setQuery(val);
							const filteredFiles = files.filter(
								(file: FileFromBackend) =>
									file.name.includes(val)
							);
							setDisplayFiles(filteredFiles);
						}}
					/>
				</div>
			</div>
			<div className="w-full flex flex-col mt-4">
				<h1 className="text-5xl font-semibold m-2">Files</h1>
				<div className="m-2">
					<input
						id="selectAll"
						type="checkbox"
						className="accent-yellow-400 focus:accent-yellow-500"
						onChange={(event) => {
							if (event.target.checked) {
								setSelectedFiles(files);
							} else {
								setSelectedFiles([]);
							}
							const checkboxes =
								document.querySelectorAll(".file-checkbox");
							checkboxes.forEach((checkbox: HTMLInputElement) => {
								if (!checkbox.checked && event.target.checked) {
									checkbox.checked = true;
								} else {
									checkbox.checked = false;
								}
							});
						}}
					/>
					<label className="ml-2" htmlFor="selectAll">
						Select all
					</label>
				</div>
				<ul className="flex flex-col gap-2 m-2">
					{displayFiles.map((file: FileFromBackend) => (
						<li
							key={file.name}
							className="bg-gray-900 p-2 flex gap-2"
						>
							<input
								className="accent-yellow-400 focus:accent-yellow-500 file-checkbox"
								type="checkbox"
								onChange={(event) => {
									if (event.target.checked) {
										if (selectedFiles.includes(file))
											return;
										setSelectedFiles((prev) => [
											...prev,
											file,
										]);
									} else {
										setSelectedFiles(
											selectedFiles.filter(
												(item) => item !== file
											)
										);
									}
								}}
								checked={selectedFiles.indexOf(file) > -1}
							/>
							<a href={file.file}>
								{file.name} - {file.size} bytes
							</a>
						</li>
					))}
					<Spinner open={fetchPending} />
					<Spinner open={uploadPending} />
					<Spinner open={deletePending} />
				</ul>
			</div>
		</BaseLayout>
	);
};

export default FilesPage;
