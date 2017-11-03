import React from 'react';
import PropTypes from 'prop-types';

class InputLabel extends React.Component {
	render() {
	  const {id, inputClassName, isChanged, label, labelClassName, onChange, placeholder, rowClassName, tooltip, type, value} = this.props;
		return (
      <div className={rowClassName}>
        <span className={labelClassName}>
          <label htmlFor={id} data-toggle='tooltip' data-html='true' title={tooltip} className={'blue-tooltip control-label'}>
            <span className={(isChanged ? 'attention-label' : '')}>{label}</span>
          </label>
        </span>
        <span className={inputClassName}>
          <input id={id} maxLength={200} className={'form-control'} type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        </span>
      </div>
		);
	}
}

InputLabel.propTypes = {
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  isChanged: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  rowClassName: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
};

export default InputLabel;
