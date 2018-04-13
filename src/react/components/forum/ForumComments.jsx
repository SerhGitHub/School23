import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../forum/UserInfo';

import {INPUT_CLASS_NAME, LABEL_CLASS_NAME} from './ForumConstants';

function parseDate(date){
  var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  return date.toLocaleString("ru", options);
}

class ForumComments extends React.Component {

  getComments(){
    const {topic} = this.props;
    let isEvel = false;
    return topic.answers.map((comment, index) => {
      const user = comment.user ? comment.user : {};
      const message = comment.message;
      const createDate = comment.createDate ? parseDate(comment.createDate) : null;
      isEvel = !isEvel;
      return (
        <div key={`comment_${index}`} className={`row ${isEvel ? 'forum-comment-even' : 'forum-comment-uneven'}`}>
          <span className={`${LABEL_CLASS_NAME} forum-topic-header-label`} style={{borderRadius: '0px', borderTop: 'none'}}>
            <UserInfo user={user}/>
          </span>
          <span className={`${INPUT_CLASS_NAME} forum-topic-header-input`} style={{borderRadius: '0px', borderTop: 'none'}}>
            <div style={{color: 'gray', fontSize: '12px'}}>
              #{createDate}
            </div>
            <p>{message}</p>
          </span>
        </div>
      );
    });
  }

  render() {
    const comments = this.getComments();
    return (
      <div style={{width: '105%'}}>
        {comments}
      </div>
    );
  }
}

ForumComments.propTypes = {
  topic: PropTypes.object
};

export default ForumComments;
