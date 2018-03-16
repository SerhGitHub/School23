import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  SET_SUBJECT_ITEM,
  SET_SUBJECTS_ITEM,
  ADD_SUBJECT_ITEM,
} from '../constants/constants';

let currentSubject;
let subjects = [];

class ForumStore extends BasicStore {

  getCurrentSubject() {
    return currentSubject;
  }

  getSubjects() {
    return subjects;
  }
}

let forumStoreInstance = new ForumStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_SUBJECT_ITEM:
      currentSubject = action.data;
      forumStoreInstance.emitChange();
      break;
    case SET_SUBJECTS_ITEM:
      subjects = action.data;
      forumStoreInstance.emitChange();
      break;
    case ADD_SUBJECT_ITEM:
      subjects.push(action.data);
      forumStoreInstance.emitChange();
      break;
  }
  return true;
});

export default forumStoreInstance;



