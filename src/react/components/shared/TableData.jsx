import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import TestService from '../../services/home/TestService';

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

  setGame(link){
    TestService.setUrlForCatolog(link);
  }

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          {
            item.values.map((value, index) => {
              const tdProps = {
                className: 'td-games-padding',
                style: index === 0 ? {fontWeight: 'bold', fontSize: value.isColSpan ? '22px' : '16px', textAlign: value.isColSpan ? 'center' : 'left'} : null,
                width: `${index === 0 ? '30%' : '70%'}`,
                colSpan: value.isColSpan ? '2' : '1'
              };
              return value.url ? (
                  <td {...tdProps}>
                    <Link key={`key_${index}`} to={`/${value.url}`} onClick={value.link ? this.setGame.bind(this, value.link) : null}>{value.name}</Link>
                  </td>
                ) : <td {...tdProps}><span key={`key_${index}`}>{value.name}</span></td>;
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
