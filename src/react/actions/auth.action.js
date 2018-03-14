import AppDispatcher from '../dispatcher/Dispatcher';

import {
  CREATE_USER,
  LOGOUT,
  SHOW_REGISTRATION_WINDOW,
  SHOW_SING_WINDOW,
  SHOW_CONSULTATION_WINDOW,
} from '../constants/constants';

let AuthAction = {
  showRegistrationWindow(data) {
    AppDispatcher.handleViewAction({
      actionType: SHOW_REGISTRATION_WINDOW,
      data: data
    });
  },
  showSingWindow(data) {
    AppDispatcher.handleViewAction({
      actionType: SHOW_SING_WINDOW,
      data: data
    });
  },
  showConsultationWindow(data) {
    AppDispatcher.handleViewAction({
      actionType: SHOW_CONSULTATION_WINDOW,
      data: data
    });
  },
  createUser(username, password) {
    AppDispatcher.handleViewAction({
      actionType: CREATE_USER,
      data: {
        username: username,
        password: password,
      }
    });
  },
  logOut() {
    AppDispatcher.handleViewAction({
      actionType: LOGOUT,
      data: false
    });
  }
};

export default AuthAction;
