import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
	fetchProjectsPending,
	fetchProjectsSuccess,
	fetchProjectsError,
} from "../../actions/projectActions";
import { Project } from "../../types";

const fetchProjects = () => {
	return (dispatch) => {
		dispatch(fetchProjectsPending());
		axios
			.get<Project[]>(`${BASE_URL}/projects/`)
			.then((res) => {
				dispatch(fetchProjectsSuccess(res.data));
				return res.data;
			})
			.catch((error) => {
				dispatch(fetchProjectsError(error));
			});
	};
};

export default fetchProjects;
