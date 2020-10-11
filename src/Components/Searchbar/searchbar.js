import React, { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import {SetSearch as setSearch} from "../../Redux/Searchbar/searchbarActions";
import { connect } from "react-redux";

const Searchbar = (props) => {
  let [product, setProduct] = useState(props.name);

  useEffect(() => {
    setProduct(props.name);
  },[props.name])

  let handleOnChange = (e) => {
    setProduct(e.target.value);
  };
  let handleProductSearch = () => {
    if (product == "") {
      toast.warn("Search field value is empty !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      props.setSearch(product);
    }
  };

  return (
    <div className="search-bar">
      <ToastContainer autoClose={3000} />
      <div className="search-container">
        <input
          type="text"
          value={product}
          placeholder="Name"
          className="search-box"
          onChange={handleOnChange}
        />
        <input
          type="button"
          className="search"
          value="Search"
          onClick={handleProductSearch}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { name } = state.productReducer;
  return { name };
};

export default connect(mapStateToProps, { setSearch })(Searchbar);
