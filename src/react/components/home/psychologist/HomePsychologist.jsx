import React from 'react';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';

class HomePsychologist extends React.Component {

  render() {
    return (
      <RootComponent>
        <AuthSuccess>
          <div className='jumbotron' style={{marginTop: '10px'}}>
            Здесь должна быть информация о странице "Домашний психолог"
          </div>
        </AuthSuccess>
      </RootComponent>
    );
  }
}

export default HomePsychologist;
