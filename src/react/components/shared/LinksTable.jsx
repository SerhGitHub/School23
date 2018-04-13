import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class LinksTable extends React.Component {

  getThs(){
    const {ths} = this.props;
    return ths.map(value => {
      return (
        <th key={value} scope='col'>{value}</th>
      );
    });
  }

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      const link = item.isOtherSiteLink ? <a href={item.url} target='_blank'>{item.name}</a> : <Link to={item.url}>{item.name}</Link>;
      return (
        <tr key={item.id}>
          <td>
            {link}
          </td>
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

LinksTable.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default LinksTable;
