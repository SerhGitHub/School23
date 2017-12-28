import React from 'react';

import RootComponent from '../RootComponent';

class FirstFrom2016 extends React.Component {

  render() {
    return (
      <RootComponent>
        <div className='jumbotron' style={{marginTop: '10px'}}>
          Здесь должен быть текст или картинки с информацией для страницы "Первоклассник - 2016"
        </div>
      </RootComponent>
    );
  }
}

export default FirstFrom2016;
