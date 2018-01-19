import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  SET_IMAGES_HOME_PSYCH,
  CLEAN_IMAGES_HOME_PSYCH,
} from '../../constants/constants';

let PsychAction = {
  setImages(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_IMAGES_HOME_PSYCH,
      data: data
    });
  },
  cleanImages() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_IMAGES_HOME_PSYCH,
      data: true
    });
  },
};

export default PsychAction;
