import React from 'react';

import RootComponent from '../RootComponent';
import Carousel from './Carousel';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';

class MainComponent extends React.Component {

  render() {
    const content = (
      <div className='card text-white bg-primary mb-3' style={{height: '300px'}}>
        <div className='card-body'>
          <h4 className='card-title'>Заголовок для информации на главной страницы</h4>
          <p className='card-text'>Какой-то текст, который должен быть на главной странице. Здесь могут быть и фотографии.</p>
        </div>
      </div>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo carousel={<Carousel />} content={content}/>
      </RootComponent>
    );
  }
}

export default MainComponent;
