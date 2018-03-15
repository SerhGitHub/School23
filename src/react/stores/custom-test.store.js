import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  SET_TEST,
  SET_ANSWER_IN_QUESTION,
  SET_QUESTION
} from '../constants/constants';

function setAnswerInQuestion(currentTest, id, isTrue){
  if(currentTest){
    let index = 0;
    let isFound = false;
    while(index < currentTest.questions.length && !isFound){
      if(currentTest.questions[index].id === id){
        currentTest.questions[index].answer = isTrue;
        isFound = true;
      }
      index++;
    }
  }
  return currentTest;
}

let currentTest;
let currentQuestion;

class CustomTestStore extends BasicStore {

  getCurrentTest() {
    return currentTest;
  }

  getCurrentQuestion() {
    return currentQuestion;
  }
}

let customTestStoreInstance = new CustomTestStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_TEST:
      currentTest = action.data;
      customTestStoreInstance.emitChange();
      break;
    case SET_QUESTION:
      currentQuestion = action.data;
      customTestStoreInstance.emitChange();
      break;
    case SET_ANSWER_IN_QUESTION:
      currentTest = setAnswerInQuestion(currentTest, action.data.id, action.data.isTrue);
      customTestStoreInstance.emitChange();
      break;
  }
  return true;
});

export default customTestStoreInstance;



