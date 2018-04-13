import React from 'react';
import PropTypes from 'prop-types';

import ForumService from '../../services/ForumService';

import ForumTopicHeader from '../forum/ForumTopicHeader';
import NewForumComment from '../forum/NewForumComment';
import ForumComments from '../forum/ForumComments';

class ForumTopic extends React.Component {

  setUrl(item){
    ForumService.setCurrentSubject(item);
  }

  back = () => {
    ForumService.cleanSubject();
  };

  saveNewComment = () => {
    const {topic} = this.props;
    ForumService.saveNewComment(topic)
  };

  render() {
    const {defaultColor, topic} = this.props;
    return (
      <span>
        <div className='back-button' style={{right: '10px', paddingTop: '5px', zIndex: 2}} onClick={this.back}><img src='back.png' width={40}/></div>
        <div className='row' style={{width: '95%', padding: '10px', marginTop: '15px', marginLeft: '10px'}}>
          <div className='row forum-topic-title' style={{backgroundColor: defaultColor}}>{topic.name}</div>
          <ForumTopicHeader topic={topic}/>
          <ForumComments topic={topic}/>
          <NewForumComment onSave={this.saveNewComment}/>
        </div>
      </span>
    );
  }
}

ForumTopic.propTypes = {
  topic: PropTypes.object,
  defaultColor: PropTypes.string
};

export default ForumTopic;
