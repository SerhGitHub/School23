import React from 'react';
import PropTypes from 'prop-types';
import {ClipLoader} from 'react-spinners';

import {COLOR_FOR_SPINNER} from '../../constants/constants';

class Spinner extends React.Component {
  render() {
    const {size} = this.props;
    return (
      <div className='sweet-loading' style={{textAlign: 'center'}}>
        <ClipLoader color={COLOR_FOR_SPINNER} loading={true} size={size}/>
      </div>
    );
  }
}

Spinner.propTypes = {
  size: PropTypes.number
};

export default Spinner;

