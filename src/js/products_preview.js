import React from 'react';
import {ProductsBar} from './products_preview_components/products_bar.js';
import {ProductsList} from './products_preview_components/products_list.js';
import {ShowMoreProducts} from './products_preview_components/show_more_products.js';
const products_db = require('./json_files/products_db.json');

export class ProductsPreview extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfShowingProductItems: 8,
      numberOfClicks: 0,
      showMoreButtonClassName: 'show-more-products-button button-visible',
      showPopularProducts: false,
      showTrendingProducts: false,
      showNewProducts: false
    }
    this.showOnlyPopularProducts = this.showOnlyPopularProducts.bind(this);
    this.showOnlyTrendingProducts = this.showOnlyTrendingProducts.bind(this);
    this.showOnlyNewProducts = this.showOnlyNewProducts.bind(this);
    this.showMoreProducts = this.showMoreProducts.bind(this);
  }
  showOnlyPopularProducts(){
    let showMoreButtonClassName = 'show-more-products-button button-visible';
    if (this.state.showPopularProducts){
      if(products_db.length<=8){
        showMoreButtonClassName = 'show-more-products-button button-hidden';
      }
      this.setState({
        showPopularProducts: false,
        showTrendingProducts: false, 
        showNewProducts: false, 
        numberOfShowingProductItems: 8, 
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    }
    else{
      showMoreButtonClassName = this.showMoreProductsButtonClassName('Popular', 0);
      this.setState({
        showPopularProducts: true,
        showTrendingProducts: false,
        showNewProducts: false,
        numberOfShowingProductItems: 8,
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    } 
  }
  showOnlyTrendingProducts(){
    let showMoreButtonClassName = 'show-more-products-button button-visible';
    if (this.state.showTrendingProducts){
      if(products_db.length<=8){
        showMoreButtonClassName = 'show-more-products-button button-hidden';
      }
      this.setState({
        showPopularProducts: false,
        showTrendingProducts: false,
        showNewProducts: false,
        numberOfShowingProductItems: 8,
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    }
    else{
      showMoreButtonClassName = this.showMoreProductsButtonClassName('Trending', 0);
      this.setState({
        showPopularProducts: false,
        showTrendingProducts: true,
        showNewProducts: false,
        numberOfShowingProductItems: 8,
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    }
  }
  showOnlyNewProducts(){
    let showMoreButtonClassName = 'show-more-products-button button-visible';
    if (this.state.showNewProducts){
      if(products_db.length<=8){
        showMoreButtonClassName = 'show-more-products-button button-hidden';
      }
      this.setState({
        showPopularProducts: false,
        showTrendingProducts: false,
        showNewProducts: false,
        numberOfShowingProductItems: 8,
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    }
    else{
      showMoreButtonClassName = this.showMoreProductsButtonClassName('New', 0);
      this.setState({
        showPopularProducts: false,
        showTrendingProducts: false,
        showNewProducts: true,
        numberOfShowingProductItems: 8,
        numberOfClicks: 0,
        showMoreButtonClassName: showMoreButtonClassName
      });
    }
  }
  showMoreProducts(){
    let numberOfClicks = ++this.state.numberOfClicks;
    let numberOfShowingProductItems = 8*(numberOfClicks+1);
    if (numberOfShowingProductItems >= products_db.length){
      numberOfShowingProductItems = products_db.length; 
    }
    let showMoreButtonClassName;
    if( !this.state.showPopularProducts && !this.state.showTrendingProducts && !this.state.showNewProducts ){
      if(numberOfShowingProductItems == products_db.length){
        showMoreButtonClassName = 'show-more-products-button button-hidden';
      }
      else{
        showMoreButtonClassName = 'show-more-products-button button-visible';
      }
    }
    else if(this.state.showPopularProducts){
      showMoreButtonClassName =  this.showMoreProductsButtonClassName('Popular', this.state.numberOfClicks);
    }
    else if(this.state.showTrendingProducts){
      showMoreButtonClassName =  this.showMoreProductsButtonClassName('Trending', this.state.numberOfClicks);
    }
    else if(this.state.showNewProducts){
      showMoreButtonClassName = this.showMoreProductsButtonClassName('New', this.state.numberOfClicks);
    }
    this.setState({numberOfShowingProductItems: numberOfShowingProductItems, numberOfClicks: numberOfClicks, showMoreButtonClassName: showMoreButtonClassName});
  }
  showMoreProductsButtonClassName(productGroup, numberOfClicks){
    let showMoreButtonClassName;
    let numberOfMatchedItems=0;
    for(let productId = 0; productId<products_db.length; productId++){
      if(products_db[productId]['product_group'] == productGroup){
        numberOfMatchedItems++;
      }
    }
    if(numberOfMatchedItems<=8*(numberOfClicks+1)){
      showMoreButtonClassName = 'show-more-products-button button-hidden';
    }
    else{
      showMoreButtonClassName = 'show-more-products-button button-visible';
    }
    return showMoreButtonClassName;
  }
  render(){
    return(
      <div className="products-preview">
        <ProductsBar
          showPopularProducts={this.state.showPopularProducts} 
          showTrendingProducts={this.state.showTrendingProducts} 
          showNewProducts={this.state.showNewProducts}
          callprop1={this.showOnlyPopularProducts}
          callprop2={this.showOnlyTrendingProducts}
          callprop3={this.showOnlyNewProducts}
        />
        <ProductsList
          numberOfShowingProductItems={this.state.numberOfShowingProductItems}
          showPopularProducts={this.state.showPopularProducts}
          showTrendingProducts={this.state.showTrendingProducts}
          showNewProducts={this.state.showNewProducts}
        />
        <ShowMoreProducts 
          callprop4={this.showMoreProducts}
          showMoreButtonClassName={this.state.showMoreButtonClassName}
          numberOfClicks={this.state.numberOfClicks} 
        />
      </div>
    );
  }
}