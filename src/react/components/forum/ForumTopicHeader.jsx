import React from 'react';
import PropTypes from 'prop-types';

import UserInfo from '../forum/UserInfo';

import {INPUT_CLASS_NAME, LABEL_CLASS_NAME} from './ForumConstants';

class ForumTopicHeader extends React.Component {

  render() {
    const {topic} = this.props;
    return (
      <div className='row forum-block'>
        <span className={`${LABEL_CLASS_NAME} forum-topic-header-label`}>
          <UserInfo user={topic.user}/>
        </span>
        <span className={`${INPUT_CLASS_NAME} forum-topic-header-input`}>
          {topic.text}
        </span>
      </div>
    );
  }
}

ForumTopicHeader.propTypes = {
  topic: PropTypes.object
};

export default ForumTopicHeader;
