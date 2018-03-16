import React from 'react';
import PropTypes from 'prop-types';

import AuthStore from '../../stores/auth.store';
import StyleStore from '../../stores/style/style.store';

import UserInfo from '../shared/UserInfo';
import Style from '../shared/Style';
import RightContentCard from '../shared/RightContentCard';
import FriendlyLinks from '../shared/FriendlyLinks';

import {ADMIN} from '../../constants/constants';

class ContentAndUserInfo extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      user: AuthStore.getUser(),
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
  }

  render() {
    const {user, defaultColor, backgroundImage} = this.state;
    const {carousel, content, links} = this.props;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    return (
      <div >
        {
          carousel ? (
              <div className='jumbotron custom-carousel' style={style}>
                {carousel}
              </div>
            ) : null
        }
        <div className='col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-9' style={{float: 'left', padding: '0px 2px 0px 0px', display: 'inline-block'}}>
          {content}
        </div>
        <div className='col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3' style={{float: 'right', padding: `${carousel ? '0px' : '10px'} 2px 0px 0px`, display: 'inline-block'}}>
          <RightContentCard>
            <UserInfo />
          </RightContentCard>
          {
            links ? (
                <RightContentCard>
                  <FriendlyLinks data={links}/>
                </RightContentCard>
              ) : null
          }
          {
            user && user.role === ADMIN ? (
                <RightContentCard>
                  <Style />
                </RightContentCard>
            ) : null
          }
        </div>
      </div>
    );
  }
}

ContentAndUserInfo.propTypes = {
  links: PropTypes.array,
  carousel: PropTypes.node,
  content: PropTypes.node,
};


export default ContentAndUserInfo;
