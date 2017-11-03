import React from 'react';
import PropTypes from 'prop-types';

import PopupAction from '../../actions/popup.action';

import {cloneObject} from '../../utils/dto-functions';
import FontAwesomeIcon from '../shared/FontAwesomeIcon';

import {
  CODE_DELETE_BUTTON,
  STATUS_ADD,
  STATUS_FIELD,
  STATUS_NORMAL,
  STATUS_REMOVED,
  VALUE_FIELD
} from '../../constants/constants';

class ListLabel extends React.Component {

  onChange = (index, e) => {
    let {list} = this.props;
    const {onChange} = this.props;
    if(index == list.length) {
      list.push({[VALUE_FIELD]: e.target.value, [STATUS_FIELD]: STATUS_NORMAL});
    } else {
      list[index][VALUE_FIELD] =  e.target.value;
    }
    onChange({target: {value: list}});
  };

  getLabel(index, icon){
    const {id, isChanged, label, labelClassName, tooltip, withoutLabel} = this.props;
    const customLabel = withoutLabel ? null : (
      <label htmlFor={id} data-toggle='tooltip' data-html='true' title={tooltip} className={'control-label blue-tooltip'}>
        <span className={(isChanged ? 'attention-label' : '')}>{label}</span>
      </label>
    );
    const currentLabel = index == 0 ? (
      <span>
        {customLabel}
        {icon ? <FontAwesomeIcon key={`listLabel_${index}`} icon={icon} rightMargin={true} additionalStyling={'pull-right padding-t-10'}/> : null}
      </span>
      ) : icon ? <FontAwesomeIcon key={`listLabel_${index}`} icon={icon} rightMargin={true} additionalStyling={'pull-right padding-t-10'}/> : null;
    return (
      <span className={labelClassName} style={{paddingRight: '0px'}}>
        {currentLabel}
      </span>
    );
  }

  onKeyDown(inputIndex, e){
    const {list} = this.props;
    if(e.keyCode == CODE_DELETE_BUTTON && inputIndex != list.length){
      const {onChange} = this.props;
      let newList = [];
      list.forEach((item, index) => {
         if(inputIndex != index){
           newList.push(item);
         }
      });
      onChange({target: {value: newList}});
    }
  }

  getInput(input, index){
    const {inputClassName, rowClassName} = this.props;
    const placeholder = input.placeholder ? input.placeholder : '';
    const value = input[VALUE_FIELD];
    const icon = input[STATUS_FIELD] == STATUS_ADD ? 'fa-star' : input[STATUS_FIELD] == STATUS_REMOVED ? 'fa-star-o' : null;
    const label = this.getLabel(index, icon);
    return (
      <div key={`div_${index}`} className={rowClassName} style={{marginBottom: '0px'}}>
        {label}
        <span key={`span_${index}`} className={inputClassName} style={{padding: '10 0 10 0', marginBottom: '0px'}}>
          <input onKeyDown={this.onKeyDown.bind(this, index)} key={`input_${index}`} id={`input_${index}`} maxLength={200} className={'form-control'} value={value} placeholder={placeholder} onChange={this.onChange.bind(this, index)}/>
        </span>
      </div>
    );
  }

  getInputListWithSpecificData(array){
    const {id, inputClassName, rowClassName} = this.props;
    let index = 0;
    let content = [];
    while(index < 4 && index < array.length){
      const input = array[index];
      const placeholder = input.placeholder ? input.placeholder : '';
      const value = input[VALUE_FIELD];
      const icon = input[STATUS_FIELD] == STATUS_ADD ? 'fa-star' : input[STATUS_FIELD] == STATUS_REMOVED ? 'fa-star-o' : null;
      const label = this.getLabel(index, icon);
      content.push(
        <div key={`div_${index}`} className={rowClassName} style={{marginBottom: '0px'}}>
          {label}
          <span key={`span_${index}`} className={inputClassName} style={{padding: '10 0 10 0', marginBottom: '0px'}}>
          <input key={`input_${index}`} id={id} maxLength={200} className={'form-control'} value={value} onClick={this.showPopup} onKeyDown={this.showPopup} placeholder={placeholder}/>
        </span>
        </div>
      );
      index++;
    }
    return content;
  }

  showPopup = () => {
    const data = {
      show: true
    };
    PopupAction.showPopup(data);
  };

  getInputList(){
    const {list, view} = this.props;
    let array = list ? cloneObject(list) : [];
    array.push({[VALUE_FIELD]: '', placeholder: '...'});
    let content;
    if(view){
      content = this.getInputListWithSpecificData(array);
    } else {
      content = array.map((input, index) => {
        return this.getInput(input, index);
      });
    }
    return content;
  }

	render() {
    const list = this.getInputList();
		return (
		  <span>
        {list}
      </span>
    );
	}
}

ListLabel.propTypes = {
  id: PropTypes.string,
  isChanged: PropTypes.bool,
  inputClassName: PropTypes.string,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  list: PropTypes.array,
  onChange: PropTypes.func,
  rowClassName: PropTypes.string,
  tooltip: PropTypes.string,
  type: PropTypes.string,
  view: PropTypes.object,
  withoutLabel: PropTypes.bool
};


export default ListLabel;
