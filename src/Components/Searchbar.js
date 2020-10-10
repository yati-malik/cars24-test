import React, { useState, forwardRef, useImperativeHandle } from "react";
import { ToastContainer, toast } from "react-toastify";

const Searchbar = forwardRef((props, ref) => {
  let [product, setProduct] = useState("");
  let handleOnChange = (e) => {
    setProduct(e.target.value);
  };
  let handleProductSearch = () => {
    if (product == "") {
      toast.warn("Search field value is empty !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      props.handleProductSearch(product);
    }
  };
  useImperativeHandle(ref, () => ({
    reset() {
      setProduct("");
    },
  }));
  return (
    <div className="search-bar">
      <ToastContainer autoClose={3000}/>
      <div>
          <input
            type="text"
            value={product}
            placeholder = "Name"
            className="form-control"
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
});

export default Searchbar;
