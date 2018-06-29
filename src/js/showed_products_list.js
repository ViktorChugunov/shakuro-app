import React from 'react';
import ReactDOM from 'react-dom';

const products_db = require('./products_db.json');

export class ShowedProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfShowedProducts: 8,
      displayButton: { },
      numberOfClickOnShowMoreButtons: 0
    }
    this.showMoreProducts = this.showMoreProducts.bind(this);
  }
  showMoreProducts() {
    let numberOfShowedProducts = this.state.numberOfShowedProducts;
    numberOfShowedProducts += 8;
    if (numberOfShowedProducts >= products_db.length){
      numberOfShowedProducts = products_db.length;
      this.setState({displayButton: {display: 'none'}})
    }
    this.setState({numberOfShowedProducts: numberOfShowedProducts})
  }
  render() {
    const productLineList = [];
    var numberOfAddedProducts = 0;
    this.state.numberOfClickOnShowMoreButtons++;
    if (!this.props.showPopularProducts&&!this.props.showTrendingProducts&&!this.props.showNewProducts){
      for (let productId = 0; productId < this.state.numberOfShowedProducts; productId++){
        productLineList.push(<ProductsPreviewListItem productId={productId} />);
      }
    }
    else{
      for (let productId = 0; numberOfAddedProducts<this.state.numberOfShowedProducts || productId<products_db.length; productId++){
        if(this.props.showPopularProducts&&products_db[productId]['product_group']=='Bestseller'){
          productLineList.push(<ProductsPreviewListItem productId={productId} />);
        }
        else if(this.props.showTrendingProducts&&(products_db[productId]['product_group']=='Goods of the week'||products_db[productId]['product_group']=='Recommend')){
          productLineList.push(<ProductsPreviewListItem productId={productId} />);
        }
        else if(this.props.showNewProducts&&products_db[productId]['product_group']=='New product'){
          productLineList.push(<ProductsPreviewListItem productId={productId} />);
        }
        numberOfAddedProducts++;
      }
    }
    return (
      <div>
        <div className="products-preview-list">
          {productLineList}
        </div>
        <div className="show-more-products-box">
          <div className="show-more-products-button" onClick={() => this.showMoreProducts()} style={ this.state.displayButton }>Show More</div>
        </div>
      </div>
    );
  }
}
ShowedProductsList.defaultProps = {showPopularProducts: false, showTrendingProducts: false, showNewProducts: false};

class ProductsPreviewListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[this.props.productId]['product_group']}</div>
        <div className="product-photo"><img src={products_db[this.props.productId]['img_src']} /></div>
        <div className="product-name">{products_db[this.props.productId]['product_name']}</div>
        <div className="product-price">{products_db[this.props.productId]['product_price']}</div>
      </div>
    );
  }
}
