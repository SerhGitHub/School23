import React from 'react';

import RootComponent from '../RootComponent';

class TestsForParents extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Тесты для родителей"
        </div>
      </RootComponent>
    );
  }
}

export default TestsForParents;
