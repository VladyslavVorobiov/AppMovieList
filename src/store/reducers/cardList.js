import {
        GETTING_DATA_HAS_ERROR,
        DATA_IS_LOADING,
        GETTING_DATA_HAS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
    dataFromTheMovieDB: {},
    isLoading: false,
    hasErrored: false,
    isDataRecieved: false
}

export default function cardListReducer(state = initialState, action){
    switch(action.type){
        case DATA_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
        case GETTING_DATA_HAS_ERROR:
            return{
                ...state, hasErrored: action.hasErrored
            }
        case GETTING_DATA_HAS_SUCCESS:
            return{
                ...state, 
                dataFromTheMovieDB: action.dataFromTheMovieDB, 
                isDataRecieved: true,
                isLoading: false,
                hasErrored: false
            }
        default:
            return state;
    }
}


