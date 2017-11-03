import React from 'react';
import PropTypes from 'prop-types';

class CheckboxElement extends React.Component {
	render() {
	  const {comment, id, inputClassName, isChanged, isReadonly, isWithoutLabel, label, labelClassName, onChange, rowClassName, tooltip, value} = this.props;
	  const labelForContent = isWithoutLabel ? null : (
        <span className={labelClassName} style={{paddingTop: '0px'}}>
          <label htmlFor={id} data-toggle='tooltip' data-html='true' className={'control-label blue-tooltip'}>
            {label}
          </label>
        </span>
      );
		return (
      <div className={rowClassName}>
        {labelForContent}
        <span className={inputClassName} style={{paddingBottom: '5px', paddingLeft: isWithoutLabel ? '23px' : '0px'}}>
          <input disabled={isReadonly} id={id} type='checkbox' checked={value} onChange={onChange} style={{marginLeft: '0px'}} />
          <span style={{paddingLeft: '10px'}}>
            <label htmlFor={id} data-toggle='tooltip' data-html='true' title={tooltip} className={'control-label blue-tooltip'}>
              <span className={(isChanged ? 'attention-label' : '')}>{comment}</span>
            </label>
          </span>
        </span>
      </div>
		);
	}
}

CheckboxElement.propTypes = {
  comment: PropTypes.string,
  id: PropTypes.string,
  inputClassName: PropTypes.string,
  isChanged: PropTypes.bool,
  isReadonly: PropTypes.string,
  isWithoutLabel: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  rowClassName: PropTypes.string,
  type: PropTypes.string,
  tooltip: PropTypes.string,
  value: PropTypes.bool
};


export default CheckboxElement;
