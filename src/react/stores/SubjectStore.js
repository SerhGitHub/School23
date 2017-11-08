/**
 * Created by siarhei.rudzevich on 11/8/2017.
 */

import AppDispatcher from '../dispatcher/Dispatcher';

import {
  LABEL_FIELD,
  QUESTIONS,
  INIT_SUBJECT_CONTENT,
  DEACTIVATE_SUBJECT_CONTENT
} from '../constants/constants';

import BasicStore from './BaseStore';

let currentSubject = {
  isActive: false,
  [LABEL_FIELD]: '',
  [QUESTIONS]: []
};

class CurrentSubjectStore extends BasicStore {

  getCurrentSubject() {
    return currentSubject;
  }
}

const currentSubjectStoreInstance = new CurrentSubjectStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_SUBJECT_CONTENT:
      currentSubject.isActive = true;
      currentSubject[LABEL_FIELD] = action.data[LABEL_FIELD];
      currentSubject[QUESTIONS] = action.data[QUESTIONS];
      currentSubjectStoreInstance.emitChange();
      break;
    case DEACTIVATE_SUBJECT_CONTENT:
      currentSubject.isActive = false;
      currentSubject[LABEL_FIELD] = '';
      currentSubject[QUESTIONS] = [];
      currentSubjectStoreInstance.emitChange();
      break;
  }
  return true;
});

export default currentSubjectStoreInstance;

