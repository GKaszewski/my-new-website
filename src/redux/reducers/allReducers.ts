import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { postsReducer } from "./postReducer";
import { projectsReducer } from "./projectReducer";
import { skillReducer } from "./skillReducer";
import { triviaReducer } from "./triviaReducer";

export default combineReducers({
	projectsReducer: projectsReducer,
	postsReducer: postsReducer,
	authReducer: authReducer,
	triviasReducer: triviaReducer,
	skillsReducer: skillReducer
});
