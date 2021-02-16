import { createStore, combineReducers } from "redux";
import nbaReducer from './reducers/nba.reducer';

const combinedReducers = combineReducers({
    nba: nbaReducer
});

export default createStore(combinedReducers);