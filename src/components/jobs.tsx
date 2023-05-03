import Spinner from "./spinner";
import JobComponent from "./job";
import React, {useEffect, useMemo} from "react";
import fetchJobs from "../redux/dispatchers/job/fetchJobs";
import {useDispatch, useSelector} from "react-redux";

const Jobs = () => {
    const dispatch = useDispatch();
    const {
        pending: jobs_pending,
        jobs,
        error: jobs_error,
    } = useSelector((state) => state.jobsReducer);

    useEffect(() => {
        dispatch(fetchJobs());
    }, []);

    const sortJobs = () => {
        return jobs.sort((a, b) => {
            if (a.still_working) {
                return -1;
            }
            if (b.still_working) {
                return 1;
            }
            return 0;
        }).sort((a, b) => {
            if (a.end_date > b.end_date) {
                return -1;
            } else if (a.end_date < b.end_date) {
                return 1;
            }
            return 0;
        });
    }

    const jobsSorted = useMemo(() => sortJobs(), [jobs]);

    return <>
        <h3 className="text-5xl font-bold mt-4 mb-2 tracking-tight">
            Experience
        </h3>
        <Spinner open={jobs_pending}/>
        <div className="flex flex-col flex-wrap gap-4 justify-center m-4">
            {jobs_error && (
                <p className="text-red-600 text-xl font-bold">
                    Failed fetching jobs 😔
                </p>
            )}
            {jobsSorted.map((job, i) => {
                return <JobComponent key={`${job}-${i}`} job={job}/>;
            })}
        </div>
    </>
}

export default Jobs;
