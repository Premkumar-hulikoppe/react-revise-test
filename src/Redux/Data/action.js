
// action type
export const ADD_DATA = "ADD_DATA";
export const FILTER_DATA = "FILTER_DATA";
export const SORT_POPULATION_ASC = "SORT_POPULATION_ASC";
export const SORT_POPULATION_DEC = "SORT_POPULATION_DEC";


// dispatcher object 
export const addData = (value) => ({type: ADD_DATA, payload: value});
export const filterData = (value) => ({type: FILTER_DATA, payload: value});
export const srtPopAsc = (value) => ({type: SORT_POPULATION_ASC, payload: value});
export const srtPopDesc = (value) => ({type: SORT_POPULATION_DEC, payload:value});

