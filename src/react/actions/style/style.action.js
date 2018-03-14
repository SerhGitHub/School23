import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CHANGE_BACKGROUND_IMAGE,
  CHANGE_MAIN_BACKGROUND_IMAGE,
  CHANGE_DEFAULT_COLOR
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
  },
  setDefaultColor(color) {
    AppDispatcher.handleViewAction({
      actionType: CHANGE_DEFAULT_COLOR,
      data: color
    });
  }
};

export default StyleAction;
