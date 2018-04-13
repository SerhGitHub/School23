import AppDispatcher from '../dispatcher/Dispatcher';

import {
  CLEAN_CURRENT_SUBJECT,
  SET_SUBJECT_ITEM,
  SET_SUBJECTS_ITEM,
  ADD_SUBJECT_ITEM,
  ADD_NEW_COMMENT,
  SAVE_NEW_COMMENT
} from '../constants/constants';

let ForumAction = {
  setCurrentSubject(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_SUBJECT_ITEM,
      data: data
    });
  },
  setSubjects(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_SUBJECTS_ITEM,
      data: data
    });
  },
  addSubject(data) {
    AppDispatcher.handleViewAction({
      actionType: ADD_SUBJECT_ITEM,
      data: data
    });
  },
  saveNewComment(topic) {
    AppDispatcher.handleViewAction({
      actionType: SAVE_NEW_COMMENT,
      data: topic
    });
  },
  addNewComment(comment) {
    AppDispatcher.handleViewAction({
      actionType: ADD_NEW_COMMENT,
      data: comment
    });
  },
  cleanSubject() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_CURRENT_SUBJECT,
      data: true
    });
  }
};

export default ForumAction;
