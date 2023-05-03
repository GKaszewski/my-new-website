import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Job} from "../redux/types";
import ChipComponent from "./chip";

interface Props {
    job: Job;
}

export default function JobComponent(props: Props) {
    return (
        <div className="bg-gray-100 rounded-lg p-4 text-black flex flex-col gap-2">
            <h4 className="text-2xl">
                <FontAwesomeIcon icon={["fas", "user-circle"]}/> {props.job.position}
            </h4>
            <h5 className="text-xl font-light">
                <FontAwesomeIcon icon={["fas", "building"]}/> {props.job.company}
            </h5>
            <h6>
                <FontAwesomeIcon icon={["fas", "clock"]}/> {props.job.time}
            </h6>
            {!props.job.still_working && <h6>
                {props.job.start_date} - {props.job.end_date}
            </h6>}
            {props.job.still_working && <h6>Still working</h6>}
            <p className="font-bold">
                <FontAwesomeIcon icon={["fas", "microchip"]}/> Technologies
            </p>
            <div className="flex flex-wrap gap-2">
                {props.job.technologies.map((technology, i) => {
                    return (
                        <ChipComponent key={`${technology}-${i}`} label={technology}/>
                    );
                })}
            </div>
        </div>
    );
}
