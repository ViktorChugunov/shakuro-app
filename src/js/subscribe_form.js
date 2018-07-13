import React from 'react';
var subscribed_users = require('../js/json_files/subscribed_users.json');

export class SubscribeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      subscribeButtonTitle: 'Subscribe',
      subscribeBoxEmailInput: 'subscribe-box-email-input',
      submitButtonClassName: 'subscribe-box-submit',
      subscribed: false,
      subscribeMassageBox: 'subscribe-massage-box subscribe-massage-box-hidden',
      subscribeMassageIcon: '\u2611',
      subscribeMassageText: 'You successfully subscribed!'

    }
    this.subscribe = this.subscribe.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.onBlurInput = this.onBlurInput.bind(this);
    this.closeSubscribeMassageBox = this.closeSubscribeMassageBox.bind(this);
  }

  checkEmail(){
    let typedEmail = document.getElementsByClassName('subscribe-box-email-input')[0].value;
    let submitButtonClassName = this.state.submitButtonClassName;
    let subscribeBoxEmailInput = this.state.subscribeBoxEmailInput;
    var emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegExp.test(typedEmail)){
      submitButtonClassName = 'subscribe-box-submit';
      subscribeBoxEmailInput = 'subscribe-box-email-input subscribe-box-email-input-correct';
      this.setState({submitButtonClassName: submitButtonClassName, subscribeBoxEmailInput: subscribeBoxEmailInput});
      return true;
    }
    else{
      submitButtonClassName = 'subscribe-box-submit-disable';
      subscribeBoxEmailInput = 'subscribe-box-email-input subscribe-box-email-input-error';
      this.setState({submitButtonClassName: submitButtonClassName, subscribeBoxEmailInput: subscribeBoxEmailInput});
      return false;
    }
  }

  subscribe(){
    let typedEmail = document.getElementsByClassName('subscribe-box-email-input')[0].value;
    if( subscribed_users.indexOf(typedEmail) != -1 && !this.state.subscribed ){
      let subscribeButtonTitle = 'Subscribe';
      let subscribeBoxEmailInput = 'subscribe-box-email-input';
      this.setState({
        submitButtonClassName: 'subscribe-box-submit',
        subscribeButtonTitle: subscribeButtonTitle,
        subscribeBoxEmailInput: subscribeBoxEmailInput,
        subscribed: true,
        subscribeMassageBox:'subscribe-massage-box',
        subscribeMassageIcon: '\u2718',
        subscribeMassageText: 'Typed email is already in database!'
      });
    }
    else if( this.checkEmail() && !this.state.subscribed ){
      let typedEmail = document.getElementsByClassName('subscribe-box-email-input')[0].value;
      subscribed_users.push(typedEmail);
      let subscribeButtonTitle = 'Unsubscribe';
      let subscribeBoxEmailInput = 'subscribe-box-email-input';
      this.setState({
        submitButtonClassName: 'subscribe-box-submit',
        subscribeButtonTitle: subscribeButtonTitle,
        subscribeBoxEmailInput: subscribeBoxEmailInput,
        subscribed: true,
        subscribeMassageBox:'subscribe-massage-box',
        subscribeMassageIcon: '\u2611',
        subscribeMassageText: 'You successfully subscribed!'
      });
    }
    else if(this.state.subscribed){
      document.getElementsByClassName('subscribe-box-email-input')[0].value='';
      subscribed_users.pop();
      let subscribeButtonTitle = 'Subscribe';
      let subscribeBoxEmailInput = 'subscribe-box-email-input';
      this.setState({
        submitButtonClassName: 'subscribe-box-submit',
        subscribeButtonTitle: subscribeButtonTitle, 
        subscribeBoxEmailInput: subscribeBoxEmailInput, 
        subscribed: false, 
        subscribeMassageBox:'subscribe-massage-box',
        subscribeMassageIcon: '\u2611',
        subscribeMassageText: 'You successfully unsubscribed!'
      });
    }
    else{
      document.getElementsByClassName('subscribe-box-email-input')[0].focus();
    }
  }

  closeSubscribeMassageBox(){
    this.setState({subscribeMassageBox:'subscribe-massage-box subscribe-massage-box-hidden'});
  }

  onBlurInput(){
    let submitButtonClassName = 'subscribe-box-submit';
    let subscribeBoxEmailInput = 'subscribe-box-email-input';
    this.setState({submitButtonClassName: submitButtonClassName, subscribeBoxEmailInput: subscribeBoxEmailInput});
  }

  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-box-title">
          <div className="subscribe-box-title-opened-envelope-icon"></div>
          <div className="subscribe-box-title-text">Learn about profitable offers and get personal recommendations</div>
        </div>
        <div className="subscribe-box-field">
          <div className="subscribe-box-form-closed-envelope-icon"></div>
          <input className={this.state.subscribeBoxEmailInput} type="email" placeholder="Your e-mail" onChange={this.checkEmail} onBlur={this.onBlurInput}/>
          <button className={this.state.submitButtonClassName} onClick={this.subscribe}>{this.state.subscribeButtonTitle}</button>
        </div>
        <div class={this.state.subscribeMassageBox}>
          <div class="subscribe-massage">
            <p class="subscribe-massage-close-button"><span onClick={this.closeSubscribeMassageBox}>&#10006;</span></p>
            <div>
              <p class="subscribe-massage-icon">{this.state.subscribeMassageIcon}</p>
              <p class="subscribe-massage-text">{this.state.subscribeMassageText}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}