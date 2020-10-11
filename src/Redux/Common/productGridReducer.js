import {SET_FILTERS, SET_SEARCH, RESET_FILTERS} from './actionTypes';

const initialState = {
    name: '',
    filters: {
        startPrice: '',
        endPrice: ''
    }
}

function ProductGrid(state=initialState,action){
    switch(action.type){
        case SET_SEARCH: 
            return {...state, name: action.name}
        case SET_FILTERS:
            return {...state, filters: action.filters}
        case RESET_FILTERS:
            debugger;
            return {...state, ...initialState}
        default:
            return state;
    }
}

export default ProductGrid;