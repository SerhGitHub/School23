import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CLEAN_TEST_URL,
  SET_TEST_URL,
} from '../../constants/constants';

let TestAction = {
  setUrl(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_TEST_URL,
      data: data
    });
  },
  cleanUrl() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_TEST_URL,
      data: true
    });
  },
};

export default TestAction;
