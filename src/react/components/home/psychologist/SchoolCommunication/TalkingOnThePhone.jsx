import React from 'react';

import StyleStore from '../../../../stores/style/style.store';

import AuthSuccess from '../../../auth/AuthSuccess';
import RootComponent from '../../../RootComponent';
import ContentAndUserInfo from '../../../shared/ContentAndUserInfo';
import ImagesBox from '../../../shared/ImagesBox';
import Jumbotron from '../../../shared/Jumbotron';

class TalkingOnThePhone extends React.Component {
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
    const path = 'RazgovorPoTelefonu';
    const images = ['0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg'];
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron>
            <ImagesBox path={`pdfImg/${path}`} images={images}/>
          </Jumbotron>
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

export default TalkingOnThePhone;
