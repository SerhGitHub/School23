/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import React from 'react';

import {
  COLOR_FOR_BACKGROUND
} from '../../constants/constants';

class Footer extends React.Component {
  render() {
    const style = {
      paddingTop: '5px',
      paddingBottom: '5px',
      background: COLOR_FOR_BACKGROUND,
      fontFamily: 'Monotype Corsiva'
    };
   return (
     <footer className={`main-footer false`} style={style}>
       Государственное учреждение образования "Средняя школа № 23 г. Гродно"
     </footer>
   );
  }
}

export default Footer;
