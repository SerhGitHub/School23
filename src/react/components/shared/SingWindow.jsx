import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalClose} from 'react-modal-bootstrap';

import AuthService from '../../services/AuthService';
import AuthStore from '../../stores/auth.store';

class SingWindow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      showWindow: AuthStore.isShowSingWindow(),
      customUser: AuthStore.getCustomUser(),
      customUsers: AuthStore.getCustomUser(),
      username: '',
      password: '',
      error: {
        username: false,
        password: false,
      },
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

  onChangeUsername = (e) => {
    this.state.username = e.target.value;
    this.setState(this.state);
  };

  onChangePassword = (e) => {
    this.state.password = e.target.value;
    this.setState(this.state);
  };

  checkPassword(){
    const {customUsers, username, password, error} = this.state;
    if(customUsers[username] && customUsers[username].password !== password ){
      error.password = 'Неверный пароль';
    } else {
      error.password = false;
    }
    this.setState(this.state);
  }

  checkUsername(){
    const {customUsers, username, error} = this.state;
    if(customUsers[username] && customUsers[username].username !== username ){
      error.username = 'Неверное имя пользователя';
    } else {
      error.username = false;
    }
    this.setState(this.state);
  }

  onSubmit = () => {
    this.checkPassword();
    this.checkUsername();
    const {error, username, password} = this.state;
    if(!error.username && !error.password){
      AuthService.showSingWindow(false);
      AuthService.createUser(username, password);
    }
  };

  close = () => {
    AuthService.showSingWindow(false);
  };

  render() {
    const {error, username, password, showWindow} = this.state;
    return (
    <Modal isOpen={showWindow} onRequestHide={this.close}>
      <div className='modal-header'>
        <h4 className='modal-title' style={{color: 'black'}}>{'Введите данные для входа'}</h4>
        <ModalClose onClick={this.close}/>
      </div>
      <div className='modal-body'>
        <div className='form-group'>
          <input type='email' value={username} onChange={this.onChangeUsername} className={`form-control ${ error.username ? 'is-invalid' : ''}`} id='email' aria-describedby='emailHelp' placeholder='Адрес электронной почты' autofocus/>
          <div className='invalid-feedback'>{error.username}</div>
        </div>
        <div className='form-group'>
          <input type='password' value={password} onChange={this.onChangePassword} className={`form-control ${ error.password ? 'is-invalid' : ''}`} placeholder='Пароль' />
          <div style={{paddingBottom: '5px'}}/>
          <div className='invalid-feedback'>{error.password}</div>
        </div>
        <button type='button' className='btn btn-primary' onClick={this.onSubmit}>Вход</button>
      </div>
    </Modal>
    );
  }
}

SingWindow.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SingWindow;
