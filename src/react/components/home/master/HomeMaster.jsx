import React from 'react';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';

class HomeMaster extends React.Component {

  render() {
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content'>
            Пока нет информации
          </div>
        </div>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

export default HomeMaster;
