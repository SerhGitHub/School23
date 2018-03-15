import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SET_TEST,
  SET_ANSWER_IN_QUESTION,
  SET_QUESTION
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
};

export default CustomTestAction;
