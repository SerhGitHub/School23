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
  CHANGE_INDEX_QUESTION,
  DEACTIVATE_INDEX_QUESTION,
  LEVEL_FIELD,
  DESCRIPTION_FIELD,
  ID_FIELD
} from '../constants/constants';

import BasicStore from './BaseStore';

let currentSubject = {
  isActive: false,
  [ID_FIELD]: '',
  [DESCRIPTION_FIELD]: '',
  level1: [],
  level2: [],
  level3: []
};

let currentQuestions;
let indexQuestion;

class CurrentSubjectStore extends BasicStore {

  getCurrentSubject() {
    return currentSubject;
  }

  getCurrentQuestions() {
    return currentQuestions;
  }

  getIndexQuestion() {
    return indexQuestion;
  }
}

const currentSubjectStoreInstance = new CurrentSubjectStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_SUBJECT_CONTENT:
      currentSubject.isActive = true;
      currentSubject[ID_FIELD] = action.data[ID_FIELD];
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
      currentSubject[ID_FIELD] = '';
      currentSubjectStoreInstance.emitChange();
      break;
    case DEACTIVATE_QUESTION_CONTENT:
      currentQuestions = null;
      currentSubjectStoreInstance.emitChange();
      break;
    case CHANGE_INDEX_QUESTION:
      indexQuestion = action.data;
      currentSubjectStoreInstance.emitChange();
      break;
    case DEACTIVATE_INDEX_QUESTION:
      indexQuestion = null;
      currentSubjectStoreInstance.emitChange();
      break;
  }
  return true;
});

export default currentSubjectStoreInstance;

