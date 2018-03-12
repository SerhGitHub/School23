import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {

  render() {
    const {children, style} = this.props;
    const contentStyle = {...style, backgroundColor: 'white', backgroundImage: 'none'};
    return (
      <div className='jumbotron home-psych-main-content' style={contentStyle}>
        {children}
      </div>
    );
  }
}

Jumbotron.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
};

export default Jumbotron;
