import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SET_SUBJECT_ITEM,
  SET_SUBJECTS_ITEM,
  ADD_SUBJECT_ITEM,
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
  }
};

export default ForumAction;
