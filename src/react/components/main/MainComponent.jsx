import React from 'react';

import AuthService from '../../services/AuthService';

import AuthStore from '../../stores/auth.store';

import RootComponent from '../RootComponent';
import Carousel from './Carousel';
import RegWindow from '../shared/RegWindow';

class MainComponent extends React.Component {

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

  logOut = () => {
    AuthService.logOut();
  };

  render() {
    const {user} = this.state;
    return (
      <RootComponent>
        <div className='jumbotron' style={{maxWidth: '1280px', marginTop: '10px', marginBottom: '10px', background: '#78C2AD', padding: '5px',}}>
          <Carousel />
        </div>
        <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9' style={{float: 'left', padding: '0px 2px 0px 0px', display: 'inline-block'}}>
          <div className='card text-white bg-primary mb-3' style={{height: '300px'}}>
            <div className='card-body'>
              <h4 className='card-title'>Заголовок для информации на главной страницы</h4>
              <p className='card-text'>Какой-то текст, который должен быть на главной странице. Здесь могут быть и фотографии.</p>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3' style={{float: 'right', padding: '0px 2px 0px 0px', display: 'inline-block'}}>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' style={{padding: '0px', display: 'inline-block'}}>
            <div className='card bg-light mb-3'>
              <div className='card-body' style={{padding: '0px'}}>
                <div className='card-header'>Добро пожаловать!</div>
                <p>Здравствуйте, <b>{user ? user.username : 'Гость'}</b>!</p>
                {
                  user ?
                    <p><a href='#' onClick={this.logOut}>выход</a></p>
                    :
                    <p><a href='#' onClick={this.showRegW}>регистрация</a>|<a href='#'>вход</a></p>
                }
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' style={{padding: '0px 2px 0px 0px', display: 'inline-block'}}>
            <div className='card bg-light mb-3'>
              <div className='card-body' style={{padding: '0px'}}>
                <div className='card-header'>Дружественные ссылки</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{float: 'left', width: '70%', display: 'inline-block'}}>
        </div>
        <div style={{float: 'right', width: '28%', display: 'inline-block'}}>


        </div>
        <RegWindow />
      </RootComponent>
    );
  }
}

export default MainComponent;
