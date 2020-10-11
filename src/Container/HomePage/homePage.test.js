import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import HomePage from "./homePage";
import Searchbar from "../../Components/Searchbar/searchbar";
import Sidebar from "../../Components/Sidebar/sidebar";
import ProductGrid from "../../Components/ProductGrid/productGrid";

configure({ adapter: new Adapter() });

describe("<HomePage />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomePage />);
  });

  it("Check is side bar", () => {
    expect(wrapper.find(Searchbar)).toHaveLength(1);
  });

  it("Check is search bar", () => {
    expect(wrapper.find(Sidebar)).toHaveLength(1);
  });

  it("Check product item grid is presend", () => {
    expect(wrapper.find(ProductGrid)).toHaveLength(1);
  })
});
