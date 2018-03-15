import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import StyleStore from '../../stores/style/style.store';
import TestStore from '../../stores/home/test.store';

import TestService from '../../services/home/TestService';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import Jumbotron from '../shared/Jumbotron';

class BaseTextComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    TestService.cleanUrl();
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: TestStore.getUrl(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    TestStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    TestStore.removeChangeListener(this.onChange);
  }

  back(){
    TestService.cleanUrl();
  }

  getEpigraph(){
    const {epigraph} = this.props;
    return epigraph ? (
      <div style={{textAlign: 'right', width: '50%', marginLeft: '50%'}}>
        <i>{epigraph}</i>
      </div>
    ) : null;
  }

  getVideos(videos){
    return videos.map((url, index) => {
      return (
        <iframe key={url} frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media"
                title="YouTube video player" style={{minHeight: '500px', width: '100%'}}
                src={`https://www.youtube.com/embed/${url}?${index === 0 ? 'autoplay=1&' : ''}enablejsapi=1&widgetid=3`}
        />
      );
    }
    );
  }

  render() {
    const {data, links, title, video} = this.props;
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const titleContent = title ? <h1>{title}</h1> : null;
    const epigraph = this.getEpigraph();
    const videos = video ? this.getVideos(video) : null;
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            <div style={{padding: '10px'}}>
              {epigraph}
              {titleContent}
              {videos}
              {data}
              <div style={{textAlign: 'right'}}>
                <Link to={`/`} >
                  <img src={'key.jpg'} width={70} height={30}/>
                </Link>
              </div>
            </div>
          </Jumbotron>
        </div>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content} links={links}/>
      </RootComponent>
    );
  }
}

BaseTextComponent.propTypes = {
  data: PropTypes.array,
  links: PropTypes.array,
  title: PropTypes.string,
  epigraph: PropTypes.string,
  video: PropTypes.array
};

export default BaseTextComponent;
