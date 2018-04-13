import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  SET_TEST,
  SET_ANSWER_IN_QUESTION,
  SET_QUESTION,
  SET_BEFOR_QUESTION,
  SET_NEXT_QUESTION
} from '../constants/constants';

function setAnswerInQuestion(currentTest, id){
  if(currentTest){
    let index = 0;
    let isFound = false;
    while(index < currentTest.questions.length && !isFound){
      if(currentTest.questions[index].id === currentQuestion.id){
        currentTest.questions[index].answer = id;
        isFound = true;
      }
      index++;
    }
  }
  return currentTest;
}

function setNextOrBeforQuestion(isSetNext){
  let question;
  if(currentTest){
    let index = 0;
    let isFound = false;
    while(index < currentTest.questions.length && !isFound){
      if(currentTest.questions[index].id === currentQuestion.id){
        question = isSetNext ? currentTest.questions[index + 1] : currentTest.questions[index - 1];
        isFound = true;
      }
      index++;
    }
  }
  return question;
}

function setToZeroAnswer(test){
  if(test){
    let index = 0;
    while(index < test.questions.length){
      test.questions[index].answer = null;
      index++;
    }
  }
  return test;
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
      if(!currentQuestion && currentTest){
        currentTest = setToZeroAnswer(currentTest);
        currentQuestion = currentTest.questions[0];
      }
      customTestStoreInstance.emitChange();
      break;
    case SET_QUESTION:
      currentQuestion = action.data;
      customTestStoreInstance.emitChange();
      break;
    case SET_BEFOR_QUESTION:
      currentQuestion = setNextOrBeforQuestion(false);
      customTestStoreInstance.emitChange();
      break;
    case SET_NEXT_QUESTION:
      currentQuestion = setNextOrBeforQuestion(true);
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



