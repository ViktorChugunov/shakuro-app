import React from 'react';
import ReactDOM from 'react-dom';
require('./js/showed_products_list.js');

import {ShowedProductsList} from './js/showed_products_list.js'

//const products_db = require('./products_db.json');

/*
class ProductsPreview extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ProductsBar />
        <ShowedProducts showPopularProducts={false} showTrendingProducts={false} showNewProducts={false}/>
      </div>
    );
  }
}
*/

class ProductsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopularProducts: false,
      showTrendingProducts: false,
      showNewProducts: false,
      categories: [],
      dateAsc: true
    }
  }
  showPopularProducts(){
    this.setState({showPopularProducts: !this.state.showPopularProducts, showTrendingProducts: false, showNewProducts: false});
  }
  showTrendingProducts(){
    this.setState({showPopularProducts: false, showTrendingProducts: !this.state.showTrendingProducts, showNewProducts: false});
  }
  showNewProducts(){
    this.setState({showPopularProducts: false, showTrendingProducts: false, showNewProducts: !this.state.showNewProducts});
  }
  showProductsFromCategory(){
    alert("showProductsFromCategory");
  }
  sortProductsByDate(){
    alert("sortProductsByDate");
  }
  render() {
    return (
      <div class="products-preview">
        <div className="products-bar">
          <div className="product-bar-title">
            <span className="product-bar-title-star-icon"></span>
            <span className="product-bar-title-text">Interesting offers</span>
          </div>
          <div className="products-type">
            <div className="popular-button" onClick={() => this.showPopularProducts()}>Popular</div>
            <div className="trending-button" onClick={() => this.showTrendingProducts()}>Trending</div>
            <div className="new-button" onClick={() => this.showNewProducts()}>New</div>
          </div>
          <div className="products-sorting">
            <div className="categories-button" onClick={() => this.showProductsFromCategory()}>
              Categories<span class="categories-button-arrow-icon"></span>
            </div>
            <div className="date-button" onClick={() => this.sortProductsByDate()}>
              Date<span class="date-button-arrow-icon"></span>
            </div>
          </div>
        </div>
        <ShowedProductsList showPopularProducts={this.state.showPopularProducts} showTrendingProducts={this.state.showTrendingProducts} showNewProducts={this.state.showNewProducts}/>
      </div>      
    );
  }
}

ReactDOM.render(
  <ProductsBar />,
  document.getElementsByClassName('products-preview-box')[0]
);