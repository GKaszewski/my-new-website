import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { editorReducer } from "./editorReducer";
import { jobsReducer } from "./jobReducer";
import { postsReducer } from "./postReducer";
import { projectsReducer } from "./projectReducer";
import { sideBarReducer } from "./sidebarReducer";
import { skillReducer } from "./skillReducer";
import { triviaReducer } from "./triviaReducer";

export default combineReducers({
  projectsReducer: projectsReducer,
  postsReducer: postsReducer,
  authReducer: authReducer,
  triviasReducer: triviaReducer,
  skillsReducer: skillReducer,
  jobsReducer: jobsReducer,
  sidebarReducer: sideBarReducer,
  blogEditorReducer: editorReducer,
});
