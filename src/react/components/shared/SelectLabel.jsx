import React from 'react';
import PropTypes from 'prop-types';

class SelectLabel extends React.Component {

  getWithIconOption(option){
    if(option.icon){
      if(option.icon.name == 'fa-chain'){
        return (
          <option key={option.key} value={option.value}>
            &#xf0c1; {option.label}
          </option>
        );
      } if(option.icon.name == 'fa-chain-broken'){
        return (
          <option key={option.key} value={option.value}>
            &#xf127; {option.label}
          </option>
        );
      } else {
        return (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        );
      }
    } else{
      return (
        <option key={option.key} value={option.value}>
          {option.label}
        </option>
      );
    }
  }

  render() {
    const {id, isChanged, label, labelClassName, rowClassName, selectClassName, options, placeholder, onChange, tooltip, value} = this.props;
    const currentOptions = options ? options.map((option) => {
      return this.getWithIconOption(option);
    }) : [];
    return (
      <div className={rowClassName}>
        <span className={labelClassName}>
          <label htmlFor={id} data-toggle='tooltip' data-html='true' title={tooltip} className={'control-label blue-tooltip'}>
            <span className={(isChanged ? 'attention-label' : '')}>{label}</span>
          </label>
        </span>
        <span className={selectClassName}>
          {
            currentOptions && currentOptions.length > 0 ? (
              <select id={id} className={'form-control fontAwesome-select'} placeholder={placeholder} value={value} onChange={onChange}>
                {currentOptions}
              </select>
            ) : <div style={{paddingTop: '7px', color: 'gray'}}><i>No Values</i></div>
          }
        </span>
      </div>
    );
  }
}

SelectLabel.propTypes = {
  id: PropTypes.string,
  isChanged: PropTypes.bool,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  rowClassName: PropTypes.string,
  selectClassName: PropTypes.string,
  tooltip: PropTypes.string,
  value: PropTypes.strign
};

export default SelectLabel;
