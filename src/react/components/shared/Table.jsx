import React from 'react';
import PropTypes from 'prop-types';

import {
  VISIBLE_IN_READONLY
} from '../../constants/constants';

class Table extends React.Component {

  getHeader(){
    const {viewTab} = this.props;
    return viewTab ? (
      <tr>
        {viewTab.map((th, index) => {
          return th[VISIBLE_IN_READONLY] ? (
            <th key={`th_${index}`}>{th.label}</th>
          ) : null;
        })}
      </tr>
    ) : null;
  }

	render() {
	  const header = this.getHeader();
		return (
      <div>
        <table className='table no-margin table-bordered table-hover table-responsive header-dark'>
          <thead>
          {header}
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
		);
	}
}

Table.propTypes = {
  viewTab: PropTypes.array
};


export default Table;
