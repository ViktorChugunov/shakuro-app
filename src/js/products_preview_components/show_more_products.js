import React from 'react';

export class ShowMoreProducts extends React.Component {
  constructor(props){
    super(props);
    this.ShowMoreProductsClick = this.ShowMoreProductsClick.bind(this);
  }
  ShowMoreProductsClick(){
    this.props.callprop4(); // передаем введенный текст в родительский компонент
  }
  render(){
    return(
      <div className="show-more-products-box">
        <div className={this.props.showMoreButtonClassName} onClick={this.ShowMoreProductsClick}>Show More</div>
      </div>
    );
  }
}
            