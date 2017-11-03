import React from 'react';
import PropTypes from 'prop-types';

class CrudButton extends React.Component {

  onClick = () => {
    const {onClick} = this.props;
    onClick && onClick();
  };

  render() {
    const {disabled, customClassName, iconClassName, label, tooltip} = this.props;
    return (
      <button className={`${customClassName} blue-tooltip`} data-toggle='tooltip' data-html='true' data-placement='top' title={tooltip} disabled={disabled} onClick={this.onClick} style={{paddingLeft: '20px', paddingRight: '20px'}}>
        <i className={iconClassName} />
        {label}
      </button>
    );
  }
}

CrudButton.propTypes = {
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
  iconClassName: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  tooltip: PropTypes.string
};

export default CrudButton;

