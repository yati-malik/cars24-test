import { SET_FILTERS } from '../Common/actionTypes';

export function SetFilters(filters){
    return{
        type: SET_FILTERS,
        filters: filters
    }
}