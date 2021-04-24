import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import { fetchJobsError, fetchJobsPending, fetchJobsSuccess } from "../../actions/jobActions";
import { Job } from "../../types";

const fetchJobs = () => {
	return (dispatch) => {
		dispatch(fetchJobsPending());
		axios
			.get<Job[]>(`${BASE_URL}/jobs/`)
			.then((res) => {
				dispatch(fetchJobsSuccess(res.data));
				return res.data;
			})
			.catch((error) => dispatch(fetchJobsError(error)));
	};
};

export default fetchJobs;
