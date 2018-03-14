import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_TEST_URL,
  SET_TEST_URL,
  SET_TEST_TEXT,
} from '../../constants/constants';

let url = null;
let text = null;

class Test extends BasicStore {

  getUrl(){
    return url;
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
    case SET_TEST_TEXT:
      text = action.data;
      testStoreInstance.emitChange();
      break;
    case CLEAN_TEST_URL:
      url = null;
      text = null;
      testStoreInstance.emitChange();
      break;
  }
  return true;
});

export default testStoreInstance;



