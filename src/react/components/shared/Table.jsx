import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {

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

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          {
            item.values.map((value, index) => {
              return (
                <td key={`${index}`}><a href={value.file} target="_blank">{value.name}</a></td>
              );
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
    );
  }
}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default Table;
