import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';
import TestStore from '../../stores/home/test.store';

import TestService from '../../services/home/TestService';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import TableForTests from '../shared/TableForTests';
import Jumbotron from '../shared/Jumbotron';

class BaseTestComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    TestService.cleanUrl();
    const catalogUrl = TestStore.getUrlFromCatolog();
    if(catalogUrl){
      TestService.setUrl(catalogUrl);
      TestService.cleanUrlFromCatalog();
    }
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: TestStore.getUrl(),
      text: TestStore.getText(),
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

  back = () => {
    TestService.cleanUrl();
  };

  render() {
    const {data, isRightBack, link, title} = this.props;
    const {backgroundImage, defaultColor, text, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const styleForIframe = {border: '0px', width: '100%', height: '500px'};
    const textContent = text ? <div style={{padding: '10px'}}>{text}</div> : null;
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            {
              url ? (
                  <div>
                    <div className='back-button' style={isRightBack ? {right: '10px'} : null} onClick={this.back}><img src='back.png' width={60}/></div>
                    <iframe src={url} style={styleForIframe} webkitallowfullscreen='true' mozallowfullscreen='true'/>
                    {textContent}
                  </div>
                ) : (
                  <TableForTests ths={[title]} data={data} link={link}/>
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

BaseTestComponent.propTypes = {
  data: PropTypes.array,
  isRightBack: PropTypes.bool,
  title: PropTypes.string,
  link: PropTypes.string
};

export default BaseTestComponent;
