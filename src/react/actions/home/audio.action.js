import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CLEAN_AUDIO_URL,
  SET_AUDIO_URL,
} from '../../constants/constants';

let AudioAction = {
  setUrl(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_AUDIO_URL,
      data: data
    });
  },
  cleanUrl() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_AUDIO_URL,
      data: true
    });
  },
};

export default AudioAction;
