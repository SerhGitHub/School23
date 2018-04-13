import React from 'react';
import PropTypes from 'prop-types';

import ForumService from '../../services/ForumService';

class NewForumComment extends React.Component {

  onChange = (e) => {
    let comment = {};
    comment.message = e.target.value;
    ForumService.addNewComment(comment);
  };

  render() {
    const {onSave} = this.props;
    return (
      <div className='row forum-new-comment' style={{width: '105%'}}>
        <div style={{margin: '5px', width: '100%'}}>
          <textarea onChange={this.onChange} placeholder={'Ваш комментарий'} style={{width: '100%', borderRadius: '5px', minHeight: '150px'}}/>
        </div>
        <div style={{margin: '5px', width: '100%', textAlign: 'right'}}>
          <button className={'btn btn-primary'} onClick={onSave}>Сохранить</button>
        </div>
      </div>
    );
  }
}

NewForumComment.propTypes = {
  onSave: PropTypes.func
};

export default NewForumComment;
