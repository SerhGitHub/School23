import React from 'react';
import PropTypes from 'prop-types';

import CustomTestService from '../../services/CustomTestService';

class TableForCustomTest extends React.Component {

  getThs(){
    const {ths} = this.props;
    return ths.map(value => {
      return (
        <th key={value} scope='col'>{value}</th>
      );
    });
  }

  setUrl(item){
    CustomTestService.setTest(item);
  }

  getContent(item){
    return (
      <td>
        <a onClick={this.setUrl.bind(this, item)} style={{cursor: 'pointer'}}>{item.name}</a>
        <span style={{paddingLeft: '10px', cursor: 'pointer', float: 'right'}} onClick={this.setUrl.bind(this, item)}>
          <img src='view.png' width={20}/>
        </span>
      </td>
    );
  }

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          {this.getContent(item)}
        </tr>
      );
    });
  }

  render() {
    const ths = this.getThs();
    const trs = this.getTrs();
    return (
      <div className='table-home-psych'>
        <table className='table table-hover'>
          <thead>
          <tr>
            {ths}
          </tr>
          </thead>
          <tbody>
          {trs}
          </tbody>
        </table>
      </div>
    );
  }
}

TableForCustomTest.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default TableForCustomTest;
