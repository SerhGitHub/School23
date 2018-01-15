import React from 'react';

import RootComponent from '../RootComponent';

class Other extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должна быть информация о данной странице
        </div>
      </RootComponent>
    );
  }
}

export default Other;
