/**
 * Created by siarhei.rudzevich on 11/8/2017.
 */
import AppDispatcher from '../dispatcher/Dispatcher';

import {
  DESCRIPTION_FIELD,
  QUESTIONS,
  INIT_SUBJECT_CONTENT,
  INIT_QUESTION_CONTENT,
  DEACTIVATE_SUBJECT_CONTENT,
  DEACTIVATE_QUESTION_CONTENT
} from '../constants/constants';

export default {
  initSubject(description, questions) {
    AppDispatcher.handleViewAction({
      actionType: INIT_SUBJECT_CONTENT,
      data: {
        [DESCRIPTION_FIELD]: description,
        [QUESTIONS]: questions
      }
    });
  },
  deactivateSubject() {
    AppDispatcher.handleViewAction({
      actionType: DEACTIVATE_SUBJECT_CONTENT,
      data: false
    });
  },
  initQuestion(questions) {
    AppDispatcher.handleViewAction({
      actionType: INIT_QUESTION_CONTENT,
      data: questions
    });
  },
  deactivateQuestion() {
    AppDispatcher.handleViewAction({
      actionType: DEACTIVATE_QUESTION_CONTENT,
      data: false
    });
  }
};
