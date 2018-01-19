import React from 'react';
import PropTypes from 'prop-types';

import PsychService from '../../services/home/PsychService';

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
              return (
                <td key={`${index}`}>
                  <a href={value.file} target="_blank">{value.name}</a>
                  {
                    !value.data ? null : (
                      <span style={{paddingLeft: '10px', cursor: 'pointer', float: 'right'}} onClick={this.setImages.bind(this, value)}>
                        <img src='view.png' width={20}/>
                      </span>
                    )
                  }
                </td>
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

Table.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

export default Table;
