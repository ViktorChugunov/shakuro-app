import React from 'react';

export class ProductsBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularButtonClass: 'popular-button',
      trendingButtonClass: 'trending-button',
      newButtonClass: 'new-button',
      categories: [],
      dateAsc: true
    }
    this.showPopularProductsClick = this.showPopularProductsClick.bind(this);
    this.showTrendingProductsClick = this.showTrendingProductsClick.bind(this);
    this.showNewProductsClick = this.showNewProductsClick.bind(this);
  }
  showPopularProductsClick(){
    if (this.props.showPopularProducts){
      this.setState({popularButtonClass: 'popular-button', trendingButtonClass: 'trending-button', newButtonClass: 'new-button'});
    }
    else{
      this.setState({popularButtonClass: 'popular-button active', trendingButtonClass: 'trending-button', newButtonClass: 'new-button'});
    }
    this.props.callprop1();
  }
  showTrendingProductsClick(){
    if (this.props.showTrendingProducts){
      this.setState({ popularButtonClass: 'popular-button', trendingButtonClass: 'trending-button', newButtonClass: 'new-button'});
    }
    else{
      this.setState({popularButtonClass: 'popular-button', trendingButtonClass: 'trending-button active', newButtonClass: 'new-button'});
    }
    this.props.callprop2();
  }
  showNewProductsClick(){
    if (this.props.showNewProducts){
      this.setState({popularButtonClass: 'popular-button', trendingButtonClass: 'trending-button', newButtonClass: 'new-button'});
    }
    else{
      this.setState({popularButtonClass: 'popular-button', trendingButtonClass: 'trending-button', newButtonClass: 'new-button active'});
    }
    this.props.callprop3();
  }
  /*
  showProductsFromCategoryClick(){
    alert("showProductsFromCategory");
  }
  sortProductsByDateClick(){
    alert("sortProductsByDate");
  }
  */
  render() {
    return (
      <div class="products-preview">
        <div className="products-bar">
          <div className="product-bar-title">
            <span className="product-bar-title-star-icon"></span>
            <span className="product-bar-title-text">Interesting offers</span>
          </div>
          <div className="products-type">
            <div className={this.state.popularButtonClass} onClick={this.showPopularProductsClick}>Popular</div>
            <div className={this.state.trendingButtonClass} onClick={this.showTrendingProductsClick}>Trending</div>
            <div className={this.state.newButtonClass} onClick={this.showNewProductsClick}>New</div>
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
            <div className="date-button">
              Date<span class="date-button-arrow-icon"></span>
            </div>
          </div>
        </div>
      </div>      
    );
  }
}