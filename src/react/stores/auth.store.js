import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  CREATE_USER,
  LOGOUT,
  SHOW_REGISTRATION_WINDOW,
  SHOW_SING_WINDOW,
} from '../constants/constants';

let showRegistrationWindow = false;
let showSingWindow = false;
let users = new Map();
let user;

class AuthStore extends BasicStore {

  isShowRegistrationWindow() {
    return showRegistrationWindow;
  }

  isShowSingWindow() {
    return showSingWindow;
  }

  getUserByUsername(username){
    return users.get(username);
  }

  getUser(){
    return user;
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
    case LOGOUT:
      user = null;
      authStoreInstance.emitChange();
      break;
    case CREATE_USER:
      const {username, password} = action.data;
      users.set(username, password);
      user = {
        username: username,
        password: password
      };
      authStoreInstance.emitChange();
      break;
  }
  return true;
});

export default authStoreInstance;



