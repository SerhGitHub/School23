import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalClose} from 'react-modal-bootstrap';

import AuthService from '../../services/AuthService';
import AuthStore from '../../stores/auth.store';

class RegWindow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  isCreate(username) {
    const user = AuthStore.getUserByUsername(username);
    return !!user;
  }

  getCurrentState() {
    return {
      showWindow: AuthStore.isShowRegistrationWindow(),
      username: '',
      password: '',
      confirm: '',
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

  onChangeValue = (entity, e) => {
    this.state[entity] = e.target.value;
    this.setState(this.state);
  };

  checkPassword(){
    const {password, confirm} = this.state;
    if(password !== confirm){
      this.state.error.password = 'Пароли не совпадают';
      this.setState(this.state);
    }
    if(password === ''){
      this.state.error.password = 'Ввведите пароль';
      this.setState(this.state);
    }
  }

  checkUsername(){
    const {username} = this.state;
    if(username === ''){
      this.state.error.username = 'Не введено имя пользователя';
      this.setState(this.state);
    }
    if(this.isCreate(username)){
      this.state.error.username = 'Такой пользователь уже существует';
      this.setState(this.state);
    }
  }

  onSubmit = () => {
    this.checkPassword();
    this.checkUsername();
    const {error, username, password} = this.state;
    if(!error.username && !error.password){
      AuthService.createUser(username, password);
      AuthService.showRegistrationWindow(false);
      this.context.router.replace('/');
    }
  };

  close = () => {
    AuthService.showRegistrationWindow(false);
  };

  render() {
    const {error, username, password, confirm, showWindow} = this.state;
    return (
    <Modal isOpen={showWindow} onRequestHide={this.close}>
      <div className='modal-header'>
        <h4 className='modal-title'>Регистрация</h4>
        <ModalClose onClick={this.close}/>
      </div>
      <div className='modal-body'>
        <div className='form-group'>
          <input type='email' value={username} onChange={this.onChangeValue.bind(this, 'username')} className={`form-control ${ error.username ? 'is-invalid' : ''}`} id='email' aria-describedby='emailHelp' placeholder='Адрес электронной почты' />
          <div className='invalid-feedback'>{error.username}</div>
        </div>
        <div className='form-group'>
          <input type='password' value={password} onChange={this.onChangeValue.bind(this, 'password')} className={`form-control ${ error.password ? 'is-invalid' : ''}`} placeholder='Пароль' />
          <div style={{paddingBottom: '5px'}}/>
          <input type='password' value={confirm} onChange={this.onChangeValue.bind(this, 'confirm')} className={`form-control ${ error.password ? 'is-invalid' : ''}`} placeholder='Повторите пароль' />
          <div className='invalid-feedback'>{error.password}</div>
        </div>
        <button type='button' className='btn btn-primary' onClick={this.onSubmit}>Сохранить</button>
      </div>
    </Modal>
    );
  }
}

RegWindow.contextTypes = {
  router: PropTypes.object.isRequired
};

export default RegWindow;
