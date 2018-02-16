import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';
import TestStore from '../../stores/home/test.store';

import TestService from '../../services/home/TestService';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';

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

  render() {
    const {data, epigraph, links, title} = this.props;
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content' style={style}>
            <div style={{padding: '10px'}}>
              <div style={{textAlign: 'right'}}>
                <div style={{width: '50%', marginLeft: '50%'}}>
                  <i>{epigraph}</i>
                </div>
              </div>
              <h1>{title}</h1>
              {data}
            </div>
          </div>
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
};

export default BaseTextComponent;
