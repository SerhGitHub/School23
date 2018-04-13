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
  },
  addNewComment(data) {
    ForumAction.addNewComment(data);
  },
  saveNewComment(topic) {
    ForumAction.saveNewComment(topic);
  },
  cleanSubject() {
    ForumAction.cleanSubject();
  }
}


