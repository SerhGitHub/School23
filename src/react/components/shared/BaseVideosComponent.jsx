import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';
import VideoStore from '../../stores/home/video.store';

import VideoService from '../../services/home/VideoService';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import TableForVideo from '../shared/TableForVideo';
import Jumbotron from '../shared/Jumbotron';

class BaseVideosComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    VideoService.cleanUrl();
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: VideoStore.getUrl(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    VideoStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    VideoStore.removeChangeListener(this.onChange);
  }

  back(){
    VideoService.cleanUrl();
  }

  render() {
    const {data, title} = this.props;
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            {
              url ? (
                  <div>
                    <div className='back-button' onClick={this.back.bind(this)}><img src='back.png' width={60}/></div>
                    <iframe frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media"
                            title="YouTube video player" style={{minHeight: '500px', width: '100%'}}
                            src={`https://www.youtube.com/embed/${url}?autoplay=1&enablejsapi=1&widgetid=3`}
                            />
                  </div>
                ) : (
                  <TableForVideo ths={[title]} data={data}/>
                )
            }
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

BaseVideosComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default BaseVideosComponent;
