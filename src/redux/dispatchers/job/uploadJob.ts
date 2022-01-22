import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import {
  uploadJobError,
  uploadJobPending,
  uploadJobSuccess,
} from "../../actions/jobActions";
import { Job } from "../../types";

const uploadJob = (job: Job, token: string) => {
  return (dispatch) => {
    dispatch(uploadJobPending());
    axios
      .post(`${BASE_URL}/job/`, job, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        dispatch(uploadJobSuccess(job));
        return job;
      })
      .catch((error) => dispatch(uploadJobError(error)));
  };
};

export default uploadJob;
