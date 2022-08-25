
import { REQUEST_ROBOTS_FAILLED, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, SEARCH_FIELD } from './actionTypes'

const initialSearchState = {
    searchField:''
}
export function searchReducer(state=initialSearchState, action) {
  switch(action.type)
  {
      case SEARCH_FIELD: {
          return {
              ...state, 
              searchField:action.payload
          }
      }
      default:{
          return state
      }
  }
}

const initialRequestRobot = {
    robots:[], 
    isPending:false, 
    error:""
}

export function requestRobotsReducer(state=initialRequestRobot, action) {
    switch(action.type)
    {
        case REQUEST_ROBOTS_PENDING: {
            return {
                ...state, 
                isPending:true
            }
        }
        case REQUEST_ROBOTS_SUCCESS: {
            return {
                ...state, 
                robots:action.payload
            }
        }
        case REQUEST_ROBOTS_FAILLED: {
            return {
                ...state, 
                error:action.payload
            }
        }
        default:{
            return state
        }
    }
  }

