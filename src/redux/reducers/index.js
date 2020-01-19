import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import authorReducer from "./authorReducer";

export default  combineReducers({
    courses: courseReducer,
    authors: authorReducer
})


