import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  SHOW_REGISTRATION_WINDOW,
  SHOW_SING_WINDOW,
} from '../constants/constants';

let showRegistrationWindow = false;
let showSingWindow = false;

class AuthStore extends BasicStore {

  isShowRegistrationWindow() {
    return showRegistrationWindow;
  }

  isShowSingWindow() {
    return showSingWindow;
  }
}

let authStoreInstance = new AuthStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SHOW_REGISTRATION_WINDOW:
      showRegistrationWindow = action.data;
      authStoreInstance.emitChange();
      break;
    case SHOW_SING_WINDOW:
      showSingWindow = action.data;
      authStoreInstance.emitChange();
      break;
  }
  return true;
});

export default authStoreInstance;



