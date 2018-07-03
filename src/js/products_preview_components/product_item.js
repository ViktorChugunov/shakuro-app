import React from 'react';
const products_db = require('../json_files/products_db.json');

export class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="products-preview-list-item">
        <div className="product-group"><p>{products_db[this.props.productId]['product_comment']}</p></div>
        <div className="product-photo"><img src={products_db[this.props.productId]['img_src']} /></div>
        <div className="product-name"><p>{products_db[this.props.productId]['product_name']}</p></div>
        <div className="product-price"><p>{products_db[this.props.productId]['product_price']}</p></div>
      </div>
    );
  }
}