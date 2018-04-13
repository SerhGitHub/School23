import React from 'react';
import PropTypes from 'prop-types';

import ForumService from '../../services/ForumService';

class TableForForum extends React.Component {

  setUrl(item){
    ForumService.setCurrentSubject(item);
  }

  getTrs(){
    const {data, defaultColor} = this.props;
    return data.map(item => {
      return (
        <tr key={item.id}>
          <td>
            <a onClick={this.setUrl.bind(this, item)} className='forum-topic' style={{fontWeight: 'bold', cursor: 'pointer', color: defaultColor}}>{item.name}</a>
          </td>
          <td>
            {item.answers.length}
          </td>
          <td>
            {item.views}
          </td>
          <td style={{fontWeight: 'bold', color: defaultColor}}>
            {item.user.name}
          </td>
          <td>
            {item.refresh}
          </td>
        </tr>
      );
    });
  }

  render() {
    const trs = this.getTrs();
    return (
      <div className='table-home-psych'>
        <table className='table table-hover'>
          <thead>
          <tr>
            <th scope='col'>{'Тема'}</th>
            <th scope='col'>{'Ответы'}</th>
            <th scope='col'>{'Просмотры'}</th>
            <th scope='col'>{'Автор'}</th>
            <th scope='col'>{'Обновления'}</th>
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

TableForForum.propTypes = {
  data: PropTypes.array.isRequired,
  defaultColor: PropTypes.string
};

export default TableForForum;
