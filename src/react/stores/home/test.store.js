import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_TEST_URL,
  SET_TEST_URL,
  SET_TEST_TEXT,
  SET_TEST_URL_FROM_CATALOG,
  CLEAN_TEST_URL_FROM_CATALOG
} from '../../constants/constants';

let url = null;
let urlFromCatalog = null;
let text = null;

class Test extends BasicStore {

  getUrl(){
    return url;
  }

  getUrlFromCatolog(){
    return urlFromCatalog;
  }

  getText(){
    return text;
  }
}

let testStoreInstance = new Test();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_TEST_URL:
      url = action.data;
      testStoreInstance.emitChange();
      break;
    case SET_TEST_URL_FROM_CATALOG:
      urlFromCatalog = action.data;
      testStoreInstance.emitChange();
      break;
    case SET_TEST_TEXT:
      text = action.data;
      testStoreInstance.emitChange();
      break;
    case CLEAN_TEST_URL:
      url = null;
      text = null;
      testStoreInstance.emitChange();
      break;
    case CLEAN_TEST_URL_FROM_CATALOG:
      urlFromCatalog = null;
      testStoreInstance.emitChange();
      break;
  }
  return true;
});

export default testStoreInstance;



