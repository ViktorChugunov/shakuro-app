import React from 'react';
import ReactDOM from 'react-dom';
import {ShowedProductsList} from './js/showed_products_list.js'
require('./js/showed_products_list.js');

class ProductsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopularProducts: false,
      showTrendingProducts: false,
      showNewProducts: false,
      popularButtonClass: 'popular-button',
      trendingButtonClass: 'trending-button',
      newButtonClass: 'new-button',
      categories: [],
      dateAsc: true
    }
  }
  showPopularProducts(){
    if (this.state.showPopularProducts){
      this.setState({ 
        popularButtonClass: 'popular-button', 
        trendingButtonClass: 'trending-button', 
        newButtonClass: 'new-button',
        showPopularProducts: false, 
        showTrendingProducts: false, 
        showNewProducts: false
      });
    }
    else{
      this.setState({
        popularButtonClass: 'popular-button active', 
        trendingButtonClass: 'trending-button', 
        newButtonClass: 'new-button',
        showPopularProducts: true, 
        showTrendingProducts: false, 
        showNewProducts: false
      });
    }
  }
  showTrendingProducts(){
    if (this.state.showTrendingProducts){
      this.setState({ 
        popularButtonClass: 'popular-button', 
        trendingButtonClass: 'trending-button', 
        newButtonClass: 'new-button',
        showPopularProducts: false, 
        showTrendingProducts: false, 
        showNewProducts: false
      });
    }
    else{
      this.setState({
        popularButtonClass: 'popular-button', 
        trendingButtonClass: 'trending-button active', 
        newButtonClass: 'new-button',
        showPopularProducts: false, 
        showTrendingProducts: true, 
        showNewProducts: false
      });
    }
  }
  showNewProducts(){
    if (this.state.showNewProducts){
      this.setState({ 
        popularButtonClass: 'popular-button', 
        trendingButtonClass: 'trending-button', 
        newButtonClass: 'new-button',
        showPopularProducts: false, 
        showTrendingProducts: false, 
        showNewProducts: false
      });
    }
    else{
      this.setState({
        popularButtonClass: 'popular-button', 
        trendingButtonClass: 'trending-button', 
        newButtonClass: 'new-button active',
        showPopularProducts: false, 
        showTrendingProducts: false, 
        showNewProducts: true
      });
    }
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
            <div className={this.state.popularButtonClass} onClick={() => this.showPopularProducts()}>Popular</div>
            <div className={this.state.trendingButtonClass} onClick={() => this.showTrendingProducts()}>Trending</div>
            <div className={this.state.newButtonClass} onClick={() => this.showNewProducts()}>New</div>
          </div>
          <div className="products-sorting">
            <div className="select-category-box">
              <select class="select-category" name="categories[]">
                <option disabled selected>Categories</option>
                <option value="Audio">Audio</option>
                <option value="TV">TV</option>
                <option value="Smartphone">Smartphone</option>
                <option value="PC">PC</option>
              </select>
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