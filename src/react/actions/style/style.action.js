import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CHANGE_BACKGROUND_IMAGE,
  CHANGE_MAIN_BACKGROUND_IMAGE
} from '../../constants/constants';

let StyleAction = {
  setBackgroundImage(img) {
    AppDispatcher.handleViewAction({
      actionType: CHANGE_BACKGROUND_IMAGE,
      data: img
    });
  },
  setMainBackgroundImage(img) {
    AppDispatcher.handleViewAction({
      actionType: CHANGE_MAIN_BACKGROUND_IMAGE,
      data: img
    });
  }
};

export default StyleAction;
