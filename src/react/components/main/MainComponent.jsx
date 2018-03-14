import React from 'react';

import StyleStore from '../../stores/style/style.store';

import RootComponent from '../RootComponent';
import Carousel from './Carousel';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';

class MainComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
  }

  render() {
    const {backgroundImage, defaultColor} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <div className='card text-white bg-primary mb-3 main-content'>
        <div className='card-body' style={style}>
          <h4 className='card-title'>ШКОЛА для будущих первоклассников и классных их родителей «ЗОЛОТОЙ КЛЮЧИК».</h4>
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
