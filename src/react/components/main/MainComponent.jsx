import React from 'react';

import AuthStore from '../../stores/aurh.store';

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
      isShowRegW: AuthStore.isShowRegistrationWindow(),
      isShowSingW: AuthStore.isShowSingWindow(),
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

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{maxWidth: '1280px', marginTop: '10px', marginBottom: '10px', background: '#78C2AD', padding: '5px',}}>
          <Carousel />
        </div>
        <div style={{float: 'left', width: '70%', display: 'inline-block'}}>
          <div className='card text-white bg-primary mb-3' style={{height: '300px'}}>
            <div className='card-body'>
              <h4 className='card-title'>Заголовок для информации на главной страницы</h4>
              <p className='card-text'>Какой-то текст, который должен быть на главной странице. Здесь могут быть и фотографии.</p>
            </div>
          </div>
        </div>
        <div style={{float: 'right', width: '28%', display: 'inline-block'}}>
          <div className='card bg-light mb-3'>
            <div className='card-body' style={{padding: '0px'}}>
              <div className='card-header'>Добро пожаловать!</div>
              <p>Здравствуйте, <b>Гость</b>!</p>
              <p><a href='#' data-toggle='modal' data-target='#regModal'>регистрация</a>|<a href='#'>вход</a></p>
            </div>
          </div>
          <div className='card bg-light mb-3'>
            <div className='card-body' style={{padding: '0px'}}>
              <div className='card-header'>Дружественные ссылки</div>
              <a href='https://sch23grodno.schools.by/'>Официальный сайт ГУО 'Средняя школа № 23 г. Гродно'</a>
            </div>
          </div>
        </div>
        <RegWindow />
      </RootComponent>
    );
  }
}

export default MainComponent;
