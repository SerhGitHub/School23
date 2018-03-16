import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  ADMIN,
  CREATE_USER,
  LOGOUT,
  SHOW_REGISTRATION_WINDOW,
  SHOW_SING_WINDOW,
  SHOW_CONSULTATION_WINDOW,
  TEACHER
} from '../constants/constants';

const customUser = {username: 'teacher', password: 'test', role: 'test'};
const customUsers = {
  teacher: {
    username: 'teacher',
    password: 'test',
    role: TEACHER,
    roleLabel: 'Учитель'
  },
  admin: {
    username: 'admin',
    password: 'admin',
    role: ADMIN,
    roleLabel: 'Администратор'
  },
};

let showRegistrationWindow = false;
let showSingWindow = false;
let users = new Map();
let user;
let showConsultationWindow = false;

class AuthStore extends BasicStore {

  isShowRegistrationWindow() {
    return showRegistrationWindow;
  }

  isShowSingWindow() {
    return showSingWindow;
  }

  isShowConsultationWindow() {
    return showConsultationWindow;
  }

  getUserByUsername(username){
    return users.get(username);
  }

  getCustomUser(){
    return customUser;
  }

  getUser(){
    return user;
  }

  getCustomUsers(){
    return customUsers;
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
    case SHOW_CONSULTATION_WINDOW:
      showConsultationWindow = action.data;
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
        password: password,
        role: customUsers[username].role,
        roleLabel: customUsers[username].roleLabel
      };
      authStoreInstance.emitChange();
      break;
  }
  return true;
});

export default authStoreInstance;



