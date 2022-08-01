import { BaseLayout } from "../src/components/baselayout";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchFiles } from "../src/redux/dispatchers/files/fetchFiles";
import { File } from "../src/redux/types";
import { Button } from "../src/components/button";
import TextField from "../src/components/textfield";

const FilesPage = () => {
	const { loggedIn } = useSelector((state) => state.authReducer);
	const { fetchPending, fetchError, files } = useSelector(
		(state) => state.filesReducer
	);

	const dispatch = useDispatch();

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
				<div className="w-32">
					<Button>Add file</Button>
				</div>
				<div className="w-32">
					<Button>Refresh</Button>
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
					{files.map((file: File) => (
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
