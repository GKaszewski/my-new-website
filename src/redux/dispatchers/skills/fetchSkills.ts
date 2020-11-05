import { fetchSkillsError, fetchSkillsPending, fetchSkillsSuccess } from "../../actions/skillsActions"
import axios from "axios";
import { BASE_URL } from "../../../utils/ApiData";
import { Skill } from "../../types";

const fetchSkills = () => {
    return (dispatch) => {
        dispatch(fetchSkillsPending());
        axios.get<Skill[]>(`${BASE_URL}/skills/`).then(res => {
            dispatch(fetchSkillsSuccess(res.data));
            return res.data;
        }).catch(e => {
            dispatch(fetchSkillsError(e));
        })
    }
}

export default fetchSkills;