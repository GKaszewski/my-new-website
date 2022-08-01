import { BaseLayout } from "../src/components/baselayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { fetchFiles } from "../src/redux/dispatchers/files/fetchFiles";
import { FileFromBackend } from "../src/redux/types";
import { Button } from "../src/components/button";
import TextField from "../src/components/textfield";
import { uploadFile } from "../src/redux/dispatchers/files/uploadFile";

const FilesPage = () => {
	const { loggedIn, token } = useSelector((state) => state.authReducer);
	const { fetchPending, fetchError, files } = useSelector(
		(state) => state.filesReducer
	);

	const dispatch = useDispatch();

	const fileInputRef = useRef<HTMLInputElement>(null);

	const [fileToUpload, setUploadFile] = useState<File>(null);

	useEffect(() => {
		dispatch(fetchFiles());
	}, []);

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
						console.log("files: ", event.target.files[0]);

						setUploadFile(event.target.files[0]);
					}}
				/>
				<div className="w-32">
					{!fileToUpload && (
						<Button
							callback={() => {
								fileInputRef.current?.click();
							}}
						>
							Add file
						</Button>
					)}
					{fileToUpload && (
						<Button
							callback={() => {
								dispatch(uploadFile(fileToUpload, token));
							}}
						>
							Upload
						</Button>
					)}
				</div>
				<div className="w-32">
					<Button
						callback={() => {
							setUploadFile(null);
							dispatch(fetchFiles());
						}}
					>
						Refresh
					</Button>
				</div>
				<div className="w-32">
					<Button>Delete</Button>
				</div>
				<div className="w-full md:w-1/3">
					<TextField onChange={(val) => {}} />
				</div>
				<div className="w-32">
					<Button>Filter</Button>
				</div>
			</div>
			<div className="w-full flex flex-col mt-4">
				<h1 className="text-5xl font-semibold m-2">Files</h1>
				<ul className="flex flex-col gap-2 m-2">
					{files.map((file: FileFromBackend) => (
						<li className="bg-gray-900 opacity-50 p-2">
							<a href={file.file}>
								{file.name} - {file.size} bytes
							</a>
						</li>
					))}
				</ul>
			</div>
		</BaseLayout>
	);
};

export default FilesPage;
