import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../../stores/style/style.store';
import TestStore from '../../../stores/home/test.store';

import TestService from '../../../services/home/TestService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import TableForTests from '../../shared/TableForTests';

class BaseTestComponent extends React.Component {

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
    const {data, title} = this.props;
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const styleForIframe = {border: '0px', width: '100%', height: '500px'};
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content' style={style}>
            {
              url ? (
                  <div>
                    <div className='back-button' onClick={this.back.bind(this)}><img src='back.png' width={60}/></div>
                    <iframe src={url} style={styleForIframe} webkitallowfullscreen='true' mozallowfullscreen='true'/>
                  </div>
                ) : (
                  <TableForTests ths={[title]} data={data}/>
                )
            }
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

BaseTestComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default BaseTestComponent;
