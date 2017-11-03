import React from 'react';
import PropTypes from 'prop-types';

class FontAwesomeIcon extends React.Component {
  render() {
    const {icon, label, rightMargin, additionalStyling} = this.props;
    const className = `${additionalStyling} fa ${icon} ${rightMargin ? ' margin-r-5' : ''}`;
    return (
      <span>
        <i className={className}/>
        {label}
      </span>
    );
  }
}

FontAwesomeIcon.propTypes = {
  additionalStyling: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string,
  rightMargin: PropTypes.bool
};

FontAwesomeIcon.defaultProps = {
  additionalStyling: ''
};

export default FontAwesomeIcon;

