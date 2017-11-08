/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import React from 'react';

class Header extends React.Component {

  render() {
    const style = {
      textAlign: 'center',
      fontSize: '30px'
    };
    return (
      <header className='main-header' style={style}>
        Подготовка к школе. Задания для детей 5-6 лет
      </header>
    );
  }
}

export default Header;
