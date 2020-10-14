import React from "react";
import getProducts from "../../API/ProductsAPI";
import { connect } from "react-redux";
import { ResetFilters as resetFilters } from "../../Redux/ProductGrid/productGridActions";

class ProductGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.currentPage = 1;
  }

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
      st = "scrollTop",
      sh = "scrollHeight";
    let percentageLoaded = (h[st] / (h[sh]  - h.clientHeight)) * 100;
    console.log(percentageLoaded);
    if (percentageLoaded > 73) {
      this.currentPage += 1;
      this.getProducts(this.currentPage);
    }
  };

  handleReset = () => {
    this.props.resetFilters();
  };

  handleProductSearch = (name) => {
    this.setState({ searchName: name });
  };

  render() {
    return (
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
                  let startPrice = this.props.filters.startPrice;
                  let endPrice = this.props.filters.endPrice;
                  if (!(startPrice == '' && endPrice == '')) {
                    if (
                      startPrice > product.Amount ||
                      endPrice < product.Amount
                    ) {
                      return false;
                    }
                  }

                  return product.Name.toUpperCase().includes(
                    this.props.name.toUpperCase()
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
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return state.productReducer;
};

export default connect(mapStateToProps, { resetFilters })(ProductGrid);
