import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../../stores/style/style.store';
import AudioStore from '../../../stores/home/audio.store';

import AudioService from '../../../services/home/AudioService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import TableForAudio from '../../shared/TableForAudio';

class BaseAudioComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    AudioService.cleanUrl();
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: AudioStore.getUrl(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    AudioStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    AudioStore.removeChangeListener(this.onChange);
  }

  back(){
    AudioService.cleanUrl();
  }

  render() {
    const {data, title} = this.props;
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content' style={style}>
            <TableForAudio ths={[title]} data={data}/>
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

BaseAudioComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default BaseAudioComponent;
