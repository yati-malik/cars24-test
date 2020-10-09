import React from "react";
import getProducts from "../API/ProductsAPI";
import Sidebar from "./Sidebar.component";
import Searchbar from "./Searchbar.component";
import { toast } from 'react-toastify';

class ProductGrid extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
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
      let prevProducts = this.state.products;
      if (this.currentPage === 1) {
        this.setState({ products: products.Products });
      } else {
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
    this.currentPage = 1;
    this.sideBar.current.reset();
    this.searchBar.current.reset();
    this.getProducts(this.currentPage);
  };

  handleSearchCriteria = (criteria) => {
    let startPrice = criteria.startPrice;
    let endPrice = criteria.endPrice;
    let currentProducts = this.state.products;
    let filteredProducts = currentProducts.filter(
      (product) => product.Amount >= startPrice && product.Amount < endPrice
    );
    this.setState({ products: filteredProducts });
  };

  handleProductSearch = (name) => {
    let products = this.state.products;
    let filterProducts = products.filter((product) =>
      product.Name.toUpperCase().includes(name.toUpperCase())
    );
    this.setState({ products: filterProducts });
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
                {this.state.products.map((product) => {
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
