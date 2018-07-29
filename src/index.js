import React from 'react';
import ReactDOM from 'react-dom';
import {ProductsPreview} from './js/products_preview.js';
import {SubscribeForm} from './js/subscribe_form.js';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

ReactDOM.render(
    <ProductsPreview />,
  document.getElementsByClassName('products-preview-box')[0]
);
ReactDOM.render(
    <SubscribeForm />,
  document.getElementsByClassName('subscribe-box')[0]
);

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop: true,
    center: true,
    items: 1,
    mergeFit: true,
    nav: true,
    dots : false,
    mouseDrag: false,
    autoplay: true, //Автозапуск слайдера
    smartSpeed: 1000, //Время движения слайда
    autoplayTimeout: 5000, //Время смены слайда
    navText : ["",""],
    mergeFit:false
  });
});