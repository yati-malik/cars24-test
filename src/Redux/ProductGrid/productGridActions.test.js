import {RESET_FILTERS} from '../Common/actionTypes';
import { ResetFilters } from './productGridActions';

describe('ResetFilters action', () => {
    it('should create a action to reset filters', () => {
        const expectedAction = {
            type: RESET_FILTERS
        }

        expect(ResetFilters()).toEqual(expectedAction);
    });
})
