import {SET_FILTERS} from '../Common/actionTypes';
import { SetFilters } from './sidebarActions';

describe('SetFilters action', () => {
    it('should create a action to set filters', () => {
        const filters = {startPrice: 0, endPrice: 0};
        const expectedAction = {
            type: SET_FILTERS,
            filters
        }

        expect(SetFilters(filters)).toEqual(expectedAction);
    });
})

