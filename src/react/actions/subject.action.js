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

export default {
  initSubject(label, questions) {
    AppDispatcher.handleViewAction({
      actionType: INIT_SUBJECT_CONTENT,
      data: {
        [LABEL_FIELD]: label,
        [QUESTIONS]: questions
      }
    });
  },
  deactivateSubject() {
    AppDispatcher.handleViewAction({
      actionType: DEACTIVATE_SUBJECT_CONTENT,
      data: false
    });
  }
};
