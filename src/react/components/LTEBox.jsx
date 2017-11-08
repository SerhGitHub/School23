import React from 'react';
import PropTypes from 'prop-types';

import AbstractContent from '../components/abstract-content';

import {
  COLOR_FOR_BACKGROUND
} from '../constants/constants';

class LTEBox extends React.Component {

	render() {
    const {children, footer, header} = this.props;
		return (
      <div className='skin-blue-light'>
        <div className="box-header with-border" style={{background: COLOR_FOR_BACKGROUND, textAlign: 'center', fontFamily: 'Monotype Corsiva'}}>
          {typeof(header === 'string') ? (<span className="box-title">{header}</span>) : header}
        </div>
        <AbstractContent>
          <div style={{textAlign: 'center', paddingTop: '20px', paddingLeft: '20px'}}>
            {children}
          </div>
        </AbstractContent>
        {footer}
      </div>
		);
	}
}

LTEBox.propTypes = {
  width: PropTypes.number,		// 1..12; Bootstrap 'col-xs-X' grid width value
  header: PropTypes.node,		// optional panel header content
  footer: PropTypes.node,		// optional panel footer content
  sidebar: PropTypes.node,
  topColor: PropTypes.string,	// panel top border/outline
  topSolid: PropTypes.bool		// panel header top border only, or solid background
};

LTEBox.defaultProps = {
  width: 3,
  topColor: '',
  topSolid: false
};

export default LTEBox;
