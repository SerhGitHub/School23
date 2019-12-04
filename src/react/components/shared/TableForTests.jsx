import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

import TestService from '../../services/home/TestService';

class TableForTests extends React.Component {

  getThs(){
    const {ths} = this.props;
    return ths.map(value => {
      return (
        <th key={value} scope='col'>{value}</th>
      );
    });
  }

  setUrl(item){
    TestService.setUrl(item.link);
    TestService.setText(item.text);
  }

  getContent(item){
    return item.isHref ? (
        <td>
          <a href={item.link} target='_blank'>{item.name}</a>
        </td>
      ) : (
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
    const {link} = this.props;
    const ths = this.getThs();
    const trs = this.getTrs();
    const linkBack = link ? (
        <div className='back-button' style={{right: '25px', paddingTop: '5px'}}>
          <Link to={`/${link}`}><img src='back.png' width={60}/></Link>
        </div>
      ) : null;
    return (
      <div className='table-home-psych'>
        {linkBack}
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

TableForTests.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default TableForTests;
