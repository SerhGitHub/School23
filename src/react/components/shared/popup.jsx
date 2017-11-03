import React from 'react';
import PropTypes from 'prop-types';
import {Modal, ModalClose} from 'react-modal-bootstrap';

import CrudButton from '../shared/CrudButton';

class Popup extends React.Component {

  constructor(props) {
    super(props);
  }

  close(){
    this.props.close(true);
  }

  render() {
    const {children, isVisible, title} = this.props;
    const customClass = `btn btn-default pull-right`;
    return (
      <Modal isOpen={isVisible} onRequestHide={this.close}>
        <div className='modal-header'>
          <ModalClose onClick={this.close.bind(this, true)}/>
          <h4 className='modal-title'>{title}</h4>
        </div>
        <div className='modal-body' style={{padding: '0px 15px 0px 15px'}}>
          {children}
          {/*<CrudButton iconClassName={'fa-ban'} customClassName={customClass} onClick={this.close.bind(this, true)} label={'Cancel'} tooltip={'cancel'}/>*/}
        </div>
      </Modal>
    );
  }
}

Popup.propTypes = {
  close: PropTypes.func,
  isVisible: PropTypes.bool,
  title: PropTypes.string
};

export default Popup;

