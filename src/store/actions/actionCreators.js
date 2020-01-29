
import {
        GETTING_DATA_HAS_ERROR,
        DATA_IS_LOADING,
        GETTING_DATA_HAS_SUCCESS,
        FETCH_DATA
} from './actionTypes';

export function getDataHasError(){
	return {
		type: GETTING_DATA_HAS_ERROR,
		hasErrored: true
	}
}

export function dataIsLoading(){
	return {
		type: DATA_IS_LOADING,
		isLoading: true
	}
}

export function getDataHasSuccess(data){
	return{
		type: GETTING_DATA_HAS_SUCCESS,
		dataFromUnsplash: data
	}
}

export function fetchData(){
    return { 
        type: FETCH_DATA
    }
}