import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SetFilters as setFilters } from "../../Redux/Sidebar/sidebarActions";
import { connect } from "react-redux";

function Sidebar(props) {

  const [startPrice, setStartPrice] = useState(props.filters.startPrice);
  const [endPrice, setEndPrice] = useState(props.filters.endPrice);

  useEffect(() => {
    setStartPrice(props.filters.startPrice);
    setEndPrice(props.filters.endPrice);
  },[props.filters.startPrice, props.filters.endPrice])

  const handlePriceChange = (e, type) => {
    e.persist();
    let value = e.target.value;
    let reg = /[0-9]/g;
    if(value != '' && !reg.test(value)){
      return false;
    }
    switch (type) {
      case "start":
        setStartPrice(value);
        break;
      case "end":
        setEndPrice(value);
        break;
      default:
    }
  };

  const handleCriteriaApply = () => {
    if (startPrice < endPrice) {
      let criteria = {
        startPrice: startPrice,
        endPrice: endPrice,
      };
      props.setFilters(criteria);
    } else {
      toast.warn("Start price can not be less than end price !", {
        position: toast.POSITION.TOP_LEFT,
      });
      return false;
    }
  };

  return (
    <div className="sidebar">
      <ToastContainer autoClose={3000} />
      <h2>Search Criteria</h2>
      <hr></hr>
      <div>
        <div>
          <span className="bold">Price range</span>
        </div>
        <div>
          <label>Start Price</label>
          <br></br>
          <input
            type="text"
            value={startPrice}
            onChange={(e) => { return handlePriceChange(e, "start")}}
          ></input>
        </div>
        <div>
          <label>End Price</label>
          <br></br>
          <input
            type="text"
            value={endPrice}
            onChange={(e) => {return handlePriceChange(e, "end")}}
          ></input>
        </div>
        <div className="apply">
          <input
            type="button"
            value="Apply"
            onClick={handleCriteriaApply}
          ></input>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { filters } = state.productReducer;
  debugger;
  return { filters };
};

export default connect(mapStateToProps, { setFilters })(Sidebar);
