import { REQUEST_ROBOTS_FAILLED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, SEARCH_FIELD } from "./actionTypes";

export const change_search_field = (text) => ({
    type:SEARCH_FIELD, 
    payload:text
}); 


export const request_robots = (dispatch) => {
    dispatch({type:REQUEST_ROBOTS_PENDING}); 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( robots => robots.json())
    .then( robots => dispatch({type:REQUEST_ROBOTS_SUCCESS,payload:robots}))
    .catch(error => dispatch({type:REQUEST_ROBOTS_FAILLED, payload:error}))
  }