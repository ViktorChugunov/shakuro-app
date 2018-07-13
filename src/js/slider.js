import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
const slider_info = require('../js/json_files/slider_info.json');

export class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideNumber: 0
    }
    this.previousImage = this.previousImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(
      ()=> this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    let slideNumber = ++this.state.slideNumber;
    if(slideNumber == slider_info.length){
      slideNumber = 0;
    }
    this.setState({slideNumber: slideNumber});
  }

  nextImage(){
    let slideNumber = this.state.slideNumber;
    if(slideNumber == slider_info.length-1){
      slideNumber = 0;
    }
    else{
      slideNumber = ++this.state.slideNumber;
    }
    this.setState({slideNumber: slideNumber});
    clearInterval(this.timerId);
    this.timerId = setInterval(
      ()=> this.tick(),
      3000
    );
  }

  previousImage(){
    let slideNumber = this.state.slideNumber;
    if(slideNumber == 0){
      slideNumber = slider_info.length-1;
    }
    else{
      slideNumber = --this.state.slideNumber
    }
    this.setState({slideNumber: slideNumber});
    clearInterval(this.timerId);
    this.timerId = setInterval(
      ()=> this.tick(),
      3000
    );
  }
  render() {
    const sliderTabs = [];
    for (let sliderTab = 0; sliderTab<slider_info.length; sliderTab++){
        if(sliderTab==this.state.slideNumber){
          sliderTabs.push(<div className='slider-tab active-slider-tab' />);
        }
        else{
          sliderTabs.push(<div className='slider-tab' />);
        }
      }
    return (
      <ReactCSSTransitionGroup transitionName="example" component="div"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnter={true}
      transitionLeave={false}>
        <div className="slider" style={{ backgroundImage: "url(" + slider_info[this.state.slideNumber]['img_src'] + ")" }} >
          <div className="slider-arrow-back" onClick={this.previousImage}></div>
          <div className="slider-middle">
            <div className="slider-middle-top"></div>
            <div className="slider-info">
              <div className="slider-badge-button" style={{ color: slider_info[this.state.slideNumber]['slider-badge-button-style'] }}>
                {slider_info[this.state.slideNumber]['slider-badge-button']}
              </div>
              <div className="slider-title" style={{ color: slider_info[this.state.slideNumber]['slider-title-style'] }} >
                {slider_info[this.state.slideNumber]['slider-title']}
              </div>
              <div className="slider-description" style={{ color: slider_info[this.state.slideNumber]['slider-description-style'] }} >
                {slider_info[this.state.slideNumber]['slider-description']}
              </div>
            </div>
            <div className="slider-tabs">{sliderTabs}</div>
          </div>
          <div className="slider-arrow-forward" onClick={this.nextImage}></div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}