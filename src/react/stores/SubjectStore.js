/**
 * Created by siarhei.rudzevich on 11/8/2017.
 */

import AppDispatcher from '../dispatcher/Dispatcher';

import {
  LABEL_FIELD,
  QUESTIONS,
  INIT_SUBJECT_CONTENT,
  INIT_QUESTION_CONTENT,
  DEACTIVATE_SUBJECT_CONTENT,
  DEACTIVATE_QUESTION_CONTENT,
  LEVEL_FIELD,
  DESCRIPTION_FIELD
} from '../constants/constants';

import BasicStore from './BaseStore';

let currentSubject = {
  isActive: false,
  [DESCRIPTION_FIELD]: '',
  level1: [],
  level2: [],
  level3: []
};

let currentQuestions;

class CurrentSubjectStore extends BasicStore {

  getCurrentSubject() {
    return currentSubject;
  }

  getCurrentQuestions() {
    return currentQuestions;
  }
}

const currentSubjectStoreInstance = new CurrentSubjectStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_SUBJECT_CONTENT:
      currentSubject.isActive = true;
      currentSubject[DESCRIPTION_FIELD] = action.data[DESCRIPTION_FIELD];
      currentSubject.level1 = [];
      currentSubject.level2 = [];
      currentSubject.level3 = [];
      if (action.data[QUESTIONS] && action.data[QUESTIONS].length > 0) {
        action.data[QUESTIONS].forEach((question) => {
          currentSubject[`level${question[LEVEL_FIELD]}`].push(question);
        });
      }
      currentSubjectStoreInstance.emitChange();
      break;
    case INIT_QUESTION_CONTENT:
      currentQuestions = action.data;
      currentSubjectStoreInstance.emitChange();
      break;
    case DEACTIVATE_SUBJECT_CONTENT:
      currentSubject.isActive = false;
      currentSubject[LABEL_FIELD] = '';
      currentSubject[QUESTIONS] = [];
      currentSubjectStoreInstance.emitChange();
      break;
    case DEACTIVATE_QUESTION_CONTENT:
      currentQuestions = null;
      currentSubjectStoreInstance.emitChange();
      break;
  }
  return true;
});

export default currentSubjectStoreInstance;

