import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Searchbar from "./searchbar";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { render } from "@testing-library/react";

const mockStore = configureStore();
const productReducer = {
    name: '',
    filters: {
        startPrice: 0,
        endPrice: 0
    }
}

configure({ adapter: new Adapter() });

describe('<Searchbar />',() => {
    let searchbar;
    let store;

    beforeEach(() =>{
        store = mockStore({productReducer});
        searchbar = renderer.create(
            <Provider store = {store}>
                <Searchbar />
            </Provider>
        );
    })

    it('renders correctly', () => {
        expect(searchbar.toJSON()).toMatchSnapshot();
    })

});