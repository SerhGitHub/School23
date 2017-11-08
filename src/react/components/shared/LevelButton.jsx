import React from 'react';
import PropTypes from 'prop-types';

class LevelButton extends React.Component {

  onClick = () => {
    const {onClick} = this.props;
    onClick && onClick();
  };

  render() {
    const {disabled, customClassName, iconClassName, label, level, tooltip} = this.props;
    const levelClassName = disabled ? 'level-disabled' : level == '1' ? 'level1' : level == '2' ? 'level2' : 'level3';
    return (
      <button className={`${customClassName} blue-tooltip level-button ${levelClassName}`} data-toggle='tooltip' data-html='true' data-placement='top' title={tooltip} disabled={disabled} onClick={this.onClick} style={{paddingLeft: '5px', paddingRight: '5px'}}>
        <i className={iconClassName} />
        {label}
      </button>
    );
  }
}

LevelButton.propTypes = {
  customClassName: PropTypes.string,
  disabled: PropTypes.bool,
  iconClassName: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  tooltip: PropTypes.string,
  level: PropTypes.string
};

export default LevelButton;

