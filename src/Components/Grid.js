import React from "react";
import getProducts from "../API/ProductsAPI";
import Sidebar from "./Sidebar";
import Searchbar from "./Searchbar";

class ProductGrid extends React.Component {
  constructor() {
    super();
    this.state = { products: [], startPrice: 0, endPrice: 0, searchName: "" };
    this.currentPage = 1;
    this.sideBar = React.createRef();
    this.searchBar = React.createRef();
  }
  loadingCSS = {
    height: "100px",
    margin: "30px",
  };

  getProducts = (page) => {
    getProducts(page).then((products) => {
      if (products != undefined) {
        let prevProducts = this.state.products;
        let currentProducts = [...prevProducts, ...products.Products];
        this.setState({ products: currentProducts });
      }
    });
  };

  componentDidMount() {
    this.getProducts(this.currentPage);
    this.loadingRef.addEventListener("scroll", (e) => this.scrollHandler(e));
  }

  scrollHandler = (e) => {
    let h = this.loadingRef,
      b = document.body,
      st = "scrollTop",
      sh = "scrollHeight";
    let percentageLoaded =
      ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;
    if (percentageLoaded > 73) {
      this.currentPage += 1;
      this.getProducts(this.currentPage);
    }
  };

  handleReset = () => {
    this.sideBar.current.reset();
    this.searchBar.current.reset();
    this.setState({ startPrice: 0, endPrice: 0, searchName: "" });
  };

  handleSearchCriteria = (criteria) => {
    let startPrice = criteria.startPrice;
    let endPrice = criteria.endPrice;
    this.setState({ startPrice: startPrice, endPrice: endPrice });
  };

  handleProductSearch = (name) => {
    this.setState({ searchName: name });
  };

  render() {
    return (
      <div className="app-container">
        <Sidebar
          handleSearchCriteria={(criteria) =>
            this.handleSearchCriteria(criteria)
          }
          ref={this.sideBar}
        />
        <Searchbar
          handleProductSearch={(name) => this.handleProductSearch(name)}
          ref={this.searchBar}
        />
        <div className="grid-container">
          <div className="tbody-container">
            <div className="product thead-container">
              <div className="col-item">Name</div>
              <div className="col-item">Category</div>
              <div className="col-item">Amount</div>
              <div className="col-item">Payment</div>
            </div>
            <div
              className="productDiv"
              ref={(loadingRef) => (this.loadingRef = loadingRef)}
            >
              <div ref={(targetRef) => (this.targetRef = targetRef)}>
                {this.state.products
                  .filter((product) => {
                    let isPriceValid = true;
                    if (
                      !(
                        this.state.startPrice === 0 && this.state.endPrice === 0
                      )
                    ) {
                      if (
                        this.state.startPrice > product.Amount ||
                        this.state.endPrice < product.Amount
                      ) {
                        return false;
                      }
                    }

                    return product.Name.toUpperCase().includes(
                      this.state.searchName.toUpperCase()
                    );
                  })
                  .map((product) => {
                    return (
                      <div className="product" key={product.Id}>
                        <div className="col-item">{product.Name}</div>
                        <div className="col-item">{product.Category}</div>
                        <div className="col-item">{product.Amount}</div>
                        <div className="col-item">{product.Payment}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="reset" onClick={this.handleReset}>
            <span>Reset</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductGrid;
