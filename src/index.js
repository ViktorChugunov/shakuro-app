import React from 'react';
import ReactDOM from 'react-dom';

const products_db = require('./products_db.json');


window.showMoreProducts = function() {
  var x=0;
  var addedProductsLine = 
    <div className="added-products-line">
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[x]['product_name']}</div>
        <div className="product-photo"><img src="" /></div>
        <div className="product-name">{products_db[x]['product_name']}</div>
        <div className="product-price">{products_db[x]['product_price']}</div>
      </div>
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[x+1]['product_name']}</div>
        <div className="product-photo"><img src="" /></div>
        <div className="product-name">{products_db[x+1]['product_name']}</div>
        <div className="product-price">{products_db[x+1]['product_price']}</div>
      </div>
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[x+2]['product_name']}</div>
        <div className="product-photo"><img src="" /></div>
        <div className="product-name">{products_db[x+2]['product_name']}</div>
        <div className="product-price">{products_db[x+2]['product_price']}</div>
      </div>
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[x+3]['product_name']}</div>
        <div className="product-photo"><img src="" /></div>
        <div className="product-name">{products_db[x+3]['product_name']}</div>
        <div className="product-price">{products_db[x+3]['product_price']}</div>
      </div>
    </div>
  ;
  /*
  for (let x = 0; x < 1; x++){
    addedProductsLine += 
      <div className="products-preview-list-item">
        <div className="product-group">{products_db[x]['product_name']}</div>
        <div className="product-photo"><img src="" /></div>
        <div className="product-name">{products_db[x]['product_name']}</div>
        <div className="product-price">{products_db[x]['product_price']}</div>
      </div>;
  } */
  
  ReactDOM.render(
    addedProductsLine,
    document.getElementById('added-products')
  );
}

