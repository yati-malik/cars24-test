import {SET_SEARCH} from '../Common/actionTypes';
import { SetSearch } from './searchbarActions';

describe('SetSearch action', () => {
    it('should create a action to SetSearch', () => {
        const name = 'Yati Malik';
        const expectedAction = {
            type: SET_SEARCH,
            name
        }

        expect(SetSearch(name)).toEqual(expectedAction);
    });
})
