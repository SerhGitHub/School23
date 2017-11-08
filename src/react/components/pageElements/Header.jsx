/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import React from 'react';

import SubjectAction from '../../actions/subject.action';

class Header extends React.Component {

  onClick = () => {
    SubjectAction.deactivateSubject();
  };

  render() {
    const style = {
      textAlign: 'center',
      fontSize: '30px'
    };
    return (
      <header className='main-header' style={style}>
        <button className={`header-content`} onClick={this.onClick}>
          <img src='img/home.png' width={'30px'} height={'30px'}/> Подготовка к школе
        </button>
      </header>
    );
  }
}

export default Header;
