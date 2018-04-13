import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SET_TEST,
  SET_ANSWER_IN_QUESTION,
  SET_QUESTION,
  SET_BEFOR_QUESTION,
  SET_NEXT_QUESTION
} from '../constants/constants';

let CustomTestAction = {
  setTest(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_TEST,
      data: data
    });
  },
  setAnswerInQuestion(id, isTrue) {
    AppDispatcher.handleViewAction({
      actionType: SET_ANSWER_IN_QUESTION,
      data: {id, isTrue}
    });
  },
  setQuestion(question) {
    AppDispatcher.handleViewAction({
      actionType: SET_QUESTION,
      data: question
    });
  },
  setBeforQuestion() {
    AppDispatcher.handleViewAction({
      actionType: SET_BEFOR_QUESTION,
      data: true
    });
  },
  setNextQuestion() {
    AppDispatcher.handleViewAction({
      actionType: SET_NEXT_QUESTION,
      data: true
    });
  }
};

export default CustomTestAction;
