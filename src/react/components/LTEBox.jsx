import React from 'react';
import PropTypes from 'prop-types';

import AbstractContent from '../components/abstract-content';

import {BOX_TOPS} from '../constants/constants';

class LTEBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.getCurrentState();
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  getCurrentState() {
    return {
      BOX_TOPS: BOX_TOPS
    };
  }

	render() {
    const {BOX_TOPS} = this.state;
    const {children, footer, header, sidebar, topColor, topSolid} = this.props;
		const boxWidth = 'col-sm-12 col-md-12 col-lg-12 col-xl-12';
		const boxTopColor = BOX_TOPS[topColor.toLowerCase()] || BOX_TOPS[''];
		const boxClasses = `box ${boxTopColor}${topSolid ? ' box-solid' : ''}`;
		return (
      <div className='skin-blue-light'>
        <div className="box-header with-border">
          {typeof(header === 'string') ? (<span className="box-title">{header}</span>) : header}
        </div>
        <AbstractContent>
          <div className='row'>
            <div className={boxWidth} style={{paddingTop: '15px', paddingBottom: '15px'}}>
              {sidebar}
            </div>
          </div>
          <div className='row' style={{paddingTop: '20px'}}>
            <div className={boxWidth}>
              <div className={boxClasses}>
                <div className='box-body'>
                  {children}
                </div>
              </div>
            </div>
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
