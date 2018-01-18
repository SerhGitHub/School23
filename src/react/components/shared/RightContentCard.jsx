import React from 'react';
import PropTypes from 'prop-types';

class RightContentCard extends React.Component {

  render() {
    return (
      <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' style={{padding: '0px', display: 'inline-block'}}>
        {this.props.children}
      </div>
    );
  }
}

export default RightContentCard;
