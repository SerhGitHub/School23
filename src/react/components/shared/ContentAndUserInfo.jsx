import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../shared/UserInfo';
import RightContentCard from '../shared/RightContentCard';
import FriendlyLinks from '../shared/FriendlyLinks';

class ContentAndUserInfo extends React.Component {

  render() {
    const {carousel, content} = this.props;
    return (
      <div>
        {
          carousel ? (
              <div className='jumbotron' style={{maxWidth: '1280px', marginTop: '10px', marginBottom: '10px', background: '#78C2AD', padding: '5px',}}>
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
          <RightContentCard>
            <FriendlyLinks />
          </RightContentCard>
        </div>
      </div>
    );
  }
}

ContentAndUserInfo.propTypes = {
  carousel: PropTypes.node,
  content: PropTypes.node,
};


export default ContentAndUserInfo;
