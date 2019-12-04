import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CLEAN_TEST_URL,
  SET_TEST_URL,
  SET_TEST_URL_FROM_CATALOG,
  SET_TEST_TEXT,
  CLEAN_TEST_URL_FROM_CATALOG,
} from '../../constants/constants';

let TestAction = {
  setUrl(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_TEST_URL,
      data: data
    });
  },
  setUrlForCatolog(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_TEST_URL_FROM_CATALOG,
      data: data
    });
  },
  setText(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_TEST_TEXT,
      data: data
    });
  },
  cleanUrl() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_TEST_URL,
      data: true
    });
  },
  cleanUrlFromCatalog() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_TEST_URL_FROM_CATALOG,
      data: true
    });
  },
};

export default TestAction;
