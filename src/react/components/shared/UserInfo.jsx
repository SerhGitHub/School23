import React from 'react';
import PropTypes from 'prop-types';

import AuthService from '../../services/AuthService';

import AuthStore from '../../stores/auth.store';

import RegWindow from '../shared/RegWindow';
import SingWindow from '../shared/SingWindow';
import ConsultationWindow from '../shared/ConsultationWindow';
import StyleStore from '../../stores/style/style.store';

class UserInfo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      user: AuthStore.getUser(),
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
  }

  showRegW = () => {
    AuthService.showRegistrationWindow(true);
  };

  showSingW = () => {
    AuthService.showSingWindow(true);
  };

  showConsultationW = () => {
    AuthService.showConsultationWindow(true);
  };

  logOut = () => {
    AuthService.logOut();
  };

  render() {
    const {user, defaultColor, backgroundImage} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    return (
      <div className='card bg-light mb-3' style={{color: 'white'}}>
        <div className='card-body' style={{padding: '0px', borderRadius: '5px', ...style}}>
          <div className='card-header card-box-shadow' style={style}>Добро пожаловать!</div>
          {/*<p style={{paddingTop: '5px'}}>Здравствуйте, <b>{user ? user.username : 'Гость'}</b>!</p>
          {
            user ?
              <p>
                <a href='#' onClick={this.logOut}>
                  <img src={'logout.png'} width={60} height={60} />
                </a>
              </p>
              :
              <p>
                /!*<div className='link-custom-style' onClick={this.showRegW}>регистрация</div>|*!/
                <div className='link-custom-style' onClick={this.showSingW}>
                  <img src={'login.png'} width={60} height={60} />
                </div>
              </p>
          }<br/>*/}
          <div className='link-custom-style' style={{textAlign: 'right'}} onClick={this.showConsultationW}>
            <img src={'onlineAnswer.png'} width={200} height={85}/>
          </div>
        </div>
        <RegWindow />
        <SingWindow />
        <ConsultationWindow />
      </div>
    );
  }
}

export default UserInfo;
