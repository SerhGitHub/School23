/**
 * Created by siarhei.rudzevich on 11/8/2017.
 */
import AppDispatcher from '../dispatcher/Dispatcher';

import {
  DESCRIPTION_FIELD,
  QUESTIONS,
  CHANGE_INDEX_QUESTION,
  INIT_SUBJECT_CONTENT,
  INIT_QUESTION_CONTENT,
  DEACTIVATE_SUBJECT_CONTENT,
  DEACTIVATE_QUESTION_CONTENT,
  DEACTIVATE_INDEX_QUESTION,
  ID_FIELD
} from '../constants/constants';

export default {
  initSubject(id, description, questions) {
    AppDispatcher.handleViewAction({
      actionType: INIT_SUBJECT_CONTENT,
      data: {
        [DESCRIPTION_FIELD]: description,
        [QUESTIONS]: questions,
        [ID_FIELD]: id
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
  },
  changeQuestion(index) {
    AppDispatcher.handleViewAction({
      actionType: CHANGE_INDEX_QUESTION,
      data: index
    });
  },
  deactivateIndexQuestion() {
    AppDispatcher.handleViewAction({
      actionType: DEACTIVATE_INDEX_QUESTION,
      data: false
    });
  }
};
