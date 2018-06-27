import React from 'react';
import ReactDOM from 'react-dom';

const products_db = require('./products_db.json');

/*
window.showMoreProducts = function() {
  ReactDOM.render(
    <AddedProducts />,
    document.getElementsByClassName('products-preview-list')[0]
  );
}
*/

ReactDOM.render(
  <AddedProducts />,
  document.getElementsByClassName('products-preview-list')[0]
);

class AddedProducts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstProductId: 0,
      lastProductId: 16,
      displayButton: { display: 'flex' }
    }
  }
  handleClick() {
    let lastProductId = this.state.lastProductId;
    lastProductId += 8;
    if (lastProductId > products_db.length){
      lastProductId = products_db.length;
      this.setState({displayButton: {display: 'none'}})
    }
    this.setState({lastProductId: lastProductId})
    
  }
  render() {
    const productLineList = [];
    for (let productId = this.state.firstProductId; productId < this.state.lastProductId; productId++){
      productLineList.push(<ProductsPreviewListItem productId={productId} />);
    }
    return (
      <div>
        <div className="added-products">
          {productLineList}
        </div>
        <div className="show-more-products-box">
          <div className="show-more-products-button" onClick={() => this.handleClick()} style={ this.state.displayButton }>Show More</div>
        </div>
      </div>
    );
  }
}

class ProductsPreviewListItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[this.props.productId]['product_name']}</div>
        <div className="product-photo"><img src={products_db[this.props.productId]['img_src']} /></div>
        <div className="product-name">{products_db[this.props.productId]['product_name']}</div>
        <div className="product-price">{products_db[this.props.productId]['product_price']}</div>
      </div>
    );
  }
}