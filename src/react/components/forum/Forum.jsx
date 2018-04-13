import React from 'react';

import ForumStore from '../../stores/forum.store';
import UserStore from '../../stores/user.store';
import StyleStore from '../../stores/style/style.store';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import TableForForum from '../shared/TableForForum';
import ForumTopic from './ForumTopic';
import Jumbotron from '../shared/Jumbotron';

class Forum extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      currentSubject: ForumStore.getCurrentSubject(),
      subjects: ForumStore.getSubjects(),
      defaultColor: StyleStore.getDefaultColor()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    ForumStore.addChangeListener(this.onChange);
    UserStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ForumStore.removeChangeListener(this.onChange);
    UserStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
  }

  render() {
    const {currentSubject, defaultColor, subjects} = this.state;
    const content = (
      <AuthSuccess>
        <Jumbotron>
          {
            currentSubject ?
              (
                <ForumTopic topic={currentSubject} defaultColor={defaultColor}/>
              ) : (
                <TableForForum data={subjects} defaultColor={defaultColor}/>
              )
          }
        </Jumbotron>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

export default Forum;
