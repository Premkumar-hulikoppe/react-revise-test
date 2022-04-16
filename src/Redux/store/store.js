
import {createStore, combineReducers} from "redux";
import {dataReducer} from "../Data/reducer";
import {countryReducer} from "../Country/reducer";

const rootReducer = combineReducers({
    data : dataReducer,
    country: countryReducer
})

export const store = createStore(rootReducer);