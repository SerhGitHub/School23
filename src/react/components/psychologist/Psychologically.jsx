import React from 'react';

import RootComponent from '../RootComponent';

class Psychologically extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Психологическая готовность к школе"
        </div>
      </RootComponent>
    );
  }
}

export default Psychologically;
