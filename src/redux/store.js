import {createStore, combineReducers} from "redux";

//reducers
import { Movie } from "./reducers/movie";
import {Pagination} from "./reducers/pagination";

const reducers = combineReducers({
    Movie,
    Pagination
});

export const store = createStore(reducers);