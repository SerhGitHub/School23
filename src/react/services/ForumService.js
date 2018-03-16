import ForumAction from '../actions/forum.action';

export default {
  setCurrentSubject(data) {
    ForumAction.setCurrentSubject(data);
  },
  setSubjects(data) {
    ForumAction.setSubjects(data);
  },
  addSubject(data) {
    ForumAction.addSubject(data);
  }
}


