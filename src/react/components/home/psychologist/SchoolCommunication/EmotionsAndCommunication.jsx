import React from 'react';

import StyleStore from '../../../../stores/style/style.store';

import AuthSuccess from '../../../auth/AuthSuccess';
import RootComponent from '../../../RootComponent';
import ContentAndUserInfo from '../../../shared/ContentAndUserInfo';
import ImagesBox from '../../../shared/ImagesBox';

class EmotionsAndCommunication extends React.Component {
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
    const path ='EmociiObshenay';
    const images = ['0001.jpg', '0002.jpg', '0003.jpg'];
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content' style={style}>
            <ImagesBox path={`pdfImg/${path}`} images={images}/>
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

export default EmotionsAndCommunication;
