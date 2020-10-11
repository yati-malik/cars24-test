import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sidebar from "./sidebar";
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

describe('<Sidebar />',() => {
    let sidebar;
    let store;

    beforeEach(() =>{
        store = mockStore({productReducer});
        sidebar = renderer.create(
            <Provider store = {store}>
                <Sidebar />
            </Provider>
        );
    })

    it('renders correctly', () => {
        expect(sidebar.toJSON()).toMatchSnapshot();
    })

});