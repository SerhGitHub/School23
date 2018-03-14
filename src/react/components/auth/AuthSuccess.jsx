import React from 'react';

import AuthStore from '../../stores/auth.store';

class AuthSuccess extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  getCurrentState(){
    return {
      user: AuthStore.getUser()
    };
  }

  render() {
    const {user} = this.state;
    return this.props.children;/*
    return user ? this.props.children : (
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Вы не имеете доступа к этой странице, выполните вход на сайт.
        </div>
      );*/
  }
}

export default AuthSuccess;
