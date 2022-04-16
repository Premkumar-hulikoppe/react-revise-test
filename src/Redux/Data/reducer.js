
import {ADD_DATA} from "./action"
import {FILTER_DATA} from "./action"
import {SORT_POPULATION_ASC} from "./action"
import {SORT_POPULATION_DEC} from "./action"

const initState = {
 data: JSON.parse(localStorage.getItem("data")) || [],
}

// reducer function
export const dataReducer = (store = initState, {type, payload}) => {
    switch (type) {
        case ADD_DATA:
            localStorage.setItem("data", JSON.stringify([...payload]))
            return {...store, data: JSON.parse(localStorage.getItem("data"))}

        case FILTER_DATA: 
        var filteredData = store.data.filter((e) => (e.country.toLowerCase() === payload.toLowerCase()));
            localStorage.setItem("data", JSON.stringify([...filteredData]));
            return {...store, data: JSON.parse(localStorage.getItem("data"))}

        case SORT_POPULATION_ASC: 
        var ascPop = store.data.sort((a, b) => (+a.population) - (+b.population));
        localStorage.setItem("data", JSON.stringify([...ascPop]));
        return {...store, data: JSON.parse(localStorage.getItem("data"))}

        case SORT_POPULATION_DEC: 
        var descPop = store.data.sort((a, b) => (+b.population) - (+a.population));
        localStorage.setItem("data", JSON.stringify([...descPop]));
        return {...store, data: JSON.parse(localStorage.getItem("data"))}

        default: 
        return store;
    }
}