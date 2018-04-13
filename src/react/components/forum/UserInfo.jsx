import React from 'react';
import PropTypes from 'prop-types';

class UserInfo extends React.Component {

  render() {
    const {style, user} = this.props;
    const {name} = user;
    const userName = name ? name : 'Неизвестный';
    const status = name ? 'Опытный пользователь' : 'Новичок';
    const currentStyle = {...style, textAlign: 'left'};
    return (
      <div style={currentStyle}>
        <div style={{fontWeight: 'bold', fontSize: '14px'}}>{userName}</div>
        <div style={{fontSize: '12px', color: 'gray'}}>{status}</div>
        <img src={'body_for_forum.png'} style={{width: '50%', paddingBottom: '10px'}}/>
      </div>
    );
  }
}

UserInfo.propTypes = {
  style: PropTypes.object,
  user: PropTypes.object
};

export default UserInfo;
