
import {ADD_COUNTRY} from "./action"

const initState = {
    countries: JSON.parse(localStorage.getItem("countries")) || []
}

export const countryReducer = (store = initState, {type, payload}) => {

    switch (type){
        case ADD_COUNTRY: 
        localStorage.setItem("countries", JSON.stringify([...payload]));
        return {...store, countries: JSON.parse(localStorage.getItem("countries"))}

        default: 
        return {...store};
    }
}