import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalClose} from 'react-modal-bootstrap';

import AuthService from '../../services/AuthService';
import AuthStore from '../../stores/auth.store';

const OPTIONS = [
  {
    id: '1',
    value: 'Учитель начальных классов'
  },
  {
    id: '2',
    value: 'Учитель-дефектолог'
  },
  {
    id: '3',
    value: 'Педагог-психолог'
  }
];

class ConsultationWindow extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      showWindow: AuthStore.isShowConsultationWindow(),
      option: OPTIONS[0].value,
      question: '',
      email: '',
      date: new Date()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
  }

  onSubmit = () => {
    const {option, question, email, date} = this.state;
    AuthService.showConsultationWindow(false);
  };

  close = () => {
    AuthService.showConsultationWindow(false);
  };

  getOptions(){
    return OPTIONS.map(option => <option key={option.id} value={option.value}>{option.value}</option>);
  }

  onSelectChange = () => {
    const menu = $(this.menuElement);
    const value = menu.val();
    this.state.option = value;
    this.setState(this.state);
  };

  onQuestionChange = () => {
    this.state.question = e.target.value;
    this.setState(this.state);
  };

  onEmailChange = () => {
    this.state.email = e.target.value;
    this.setState(this.state);
  };

  render() {
    const {showWindow, question, option, email} = this.state;
    const options = this.getOptions();
    const style = {marginBottom: '10px', textAlign: 'left'};
    const labelClassName = 'col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5';
    const inputClassName = 'col-xs-7 col-sm-7 col-md-7 col-lg-7 col-xl-7';
    return (
    <Modal isOpen={showWindow} onRequestHide={this.close} size='modal-lg'>
      <div className='modal-header'>
        <h4 className='modal-title' style={{color: 'black'}}>{'Здесь вы сможете обратиться за онлайн консультацией'}</h4>
        <ModalClose onClick={this.close}/>
      </div>
      <div className='modal-body' style={{color: 'black'}}>
        <div className='row' style={style}>
          <span className={labelClassName}>
            <label>{'Направление консультации'}</label>
          </span>
          <span className={inputClassName}>
            <select value={option} className={'form-control'} ref={(menuElement) => {this.menuElement = menuElement}} onChange={this.onSelectChange}>
              {options}
              </select>
          </span>
        </div>
        <div className='row' style={style}>
          <span className={labelClassName}>
            <label>{'Вопрос '}</label>
          </span>
          <span className={inputClassName}>
            <input className={'form-control'} type='text' value={question} onChange={this.onQuestionChange} id='quest' autofocus/>
          </span>
        </div>
        <div className='row' style={style}>
          <span className={labelClassName}>
            <label>{'Электронный адрес для обратной связи'}</label>
          </span>
          <span className={inputClassName}>
            <input className={'form-control'} type='text' value={email} onChange={this.onEmailChange} id='email' autofocus/>
          </span>
        </div>
        <div style={{textAlign: 'right'}}>
          <button type='button' className='btn btn-primary' onClick={this.onSubmit}>{'Отправить'}</button>
        </div>
      </div>
    </Modal>
    );
  }
}

ConsultationWindow.contextTypes = {
  router: PropTypes.object.isRequired
};

export default ConsultationWindow;
