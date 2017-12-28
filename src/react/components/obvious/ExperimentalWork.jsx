import React from 'react';

import RootComponent from '../RootComponent';

class ExperimentalWork extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Результаты участия в экспериментальной работе"
        </div>
      </RootComponent>
    );
  }
}

export default ExperimentalWork;
