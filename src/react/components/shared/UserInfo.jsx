import React from 'react';
import PropTypes from 'prop-types';

import AuthService from '../../services/AuthService';

import AuthStore from '../../stores/auth.store';

import RegWindow from '../shared/RegWindow';
import SingWindow from '../shared/SingWindow';

class UserInfo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      user: AuthStore.getUser(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
  }

  showRegW = () => {
    AuthService.showRegistrationWindow(true);
  };

  showSingW = () => {
    AuthService.showSingWindow(true);
  };

  logOut = () => {
    AuthService.logOut();
  };

  render() {
    const {user} = this.state;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-body' style={{padding: '0px'}}>
          <div className='card-header'>Добро пожаловать!</div>
          <p>Здравствуйте, <b>{user ? user.username : 'Гость'}</b>!</p>
          {
            user ?
              <p><a href='#' onClick={this.logOut}>выход</a></p>
              :
              <p>{/*<div className='link-custom-style' onClick={this.showRegW}>регистрация</div>|*/}<div className='link-custom-style' onClick={this.showSingW}>вход</div></p>
          }
        </div>
        <RegWindow />
        <SingWindow />
      </div>
    );
  }
}

export default UserInfo;
