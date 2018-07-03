import React from 'react';
import {ProductItem} from './product_item.js';
const products_db = require('../json_files/products_db.json');

export class ProductsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const productItemsLine = [];
    let numberOfAddedToListProductItems = 0;
    let numberOfShowingProductItems = this.props.numberOfShowingProductItems;
    if (products_db.length<8){
      numberOfShowingProductItems = products_db.length;
    }
    if (!this.props.showPopularProducts&&!this.props.showTrendingProducts&&!this.props.showNewProducts){
      for (let productId = 0; productId < numberOfShowingProductItems; productId++){
        productItemsLine.push(<ProductItem productId={productId} />);
      }
    }
    else{
      for (let productId = 0; numberOfAddedToListProductItems<numberOfShowingProductItems && productId<products_db.length; productId++){
        if(this.props.showPopularProducts&&products_db[productId]['product_group']=='Popular'){
          productItemsLine.push(<ProductItem productId={productId} />);
          numberOfAddedToListProductItems++;
        }
        else if(this.props.showTrendingProducts&&products_db[productId]['product_group']=='Trending'){
          productItemsLine.push(<ProductItem productId={productId} />);
          numberOfAddedToListProductItems++;
        }
        else if(this.props.showNewProducts&&products_db[productId]['product_group']=='New'){
          productItemsLine.push(<ProductItem productId={productId} />);
          numberOfAddedToListProductItems++;
        }        
      }
    }
    return (
      <div className="products-preview-list">
        {productItemsLine}
      </div>
    );
  }
}