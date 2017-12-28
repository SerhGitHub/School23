import React from 'react';

import RootComponent from '../RootComponent';

class Personally extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Личностная готовность"
        </div>
      </RootComponent>
    );
  }
}

export default Personally;
