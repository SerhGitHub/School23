import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SHOW_REGISTRATION_WINDOW,
  SHOW_SING_WINDOW,
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
  }
};

export default AuthAction;
