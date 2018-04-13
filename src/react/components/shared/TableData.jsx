import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import PsychService from '../../services/home/PsychService';

class TableData extends React.Component {

  getThs(){
    const {ths} = this.props;
    return ths.map(value => {
      return (
        <th key={value} scope='col'>{value}</th>
      );
    });
  }

  onChange(file){
    this.props.onChange(file);
  }

  setImages(value){
    PsychService.setImages(value.data);
  }

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          {
            item.values.map((value, index) => {
              return value.isLink ? (
                  <Link key={`key_${index}`} to={value.url}>{value.name}</Link>
                ) : <span key={`key_${index}`}>{value.name}</span>;
            })
          }
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

TableData.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default TableData;
