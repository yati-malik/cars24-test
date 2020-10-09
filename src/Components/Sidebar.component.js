import React from "react";
import { ToastContainer, toast } from "react-toastify";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { startPrice: "", endPrice: "" };
  }
  handlePriceChange = (e, type) => {
    e.persist();
    switch (type) {
      case "start":
        this.setState({ startPrice: e.target.value });
        break;
      case "end":
        this.setState({ endPrice: e.target.value });
        break;
      default:
    }
  };
  reset = () => {
    this.setState({ startPrice: "", endPrice: "" });
  };
  handleCriteriaApply = () => {
    if (this.state.startPrice < this.state.endPrice) {
      let criteria = {
        startPrice: this.state.startPrice,
        endPrice: this.state.endPrice,
      };
      this.props.handleSearchCriteria(criteria);
    } else {
      toast.warn("Start price can not be less than end price !", {
        position: toast.POSITION.TOP_LEFT,
      });
      return false;
    }
  };

  render() {
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
            <input
              type="number"
              value={this.state.startPrice}
              onChange={(e) => this.handlePriceChange(e, "start")}
            ></input>
          </div>
          <div>
            <label>End Price</label>
            <input
              type="number"
              value={this.state.endPrice}
              onChange={(e) => this.handlePriceChange(e, "end")}
            ></input>
          </div>
          <div className="apply">
            <input
              type="button"
              value="Apply"
              onClick={this.handleCriteriaApply}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
