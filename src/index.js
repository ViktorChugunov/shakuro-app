import React from 'react';
import ReactDOM from 'react-dom';
import {Slider} from './js/slider.js';
import {ProductsPreview} from './js/products_preview';

ReactDOM.render(
  <Slider />,
document.getElementsByClassName('slider-box')[0]
);
ReactDOM.render(
    <ProductsPreview />,
  document.getElementsByClassName('products-preview-box')[0]
);
