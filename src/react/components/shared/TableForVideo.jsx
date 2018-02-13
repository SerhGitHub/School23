import React from 'react';
import PropTypes from 'prop-types';

import VideoService from '../../services/home/VideoService';

class TableForVideo extends React.Component {

  getThs(){
    const {ths} = this.props;
    return ths.map(value => {
      return (
        <th key={value} scope='col'>{value}</th>
      );
    });
  }

  setUrl(item){
    VideoService.setUrl(item.link);
  }

  getTrs(){
    const {data} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          <td>
            <a onClick={this.setUrl.bind(this, item)} style={{cursor: 'pointer'}}>{item.name}</a>
            <span style={{paddingLeft: '10px', cursor: 'pointer', float: 'right'}} onClick={this.setUrl.bind(this, item)}>
              <img src='view.png' width={20}/>
            </span>
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

TableForVideo.propTypes = {
  data: PropTypes.array.isRequired,
  ths: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default TableForVideo;
