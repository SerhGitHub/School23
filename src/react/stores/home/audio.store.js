import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_AUDIO_URL,
  SET_AUDIO_URL,
} from '../../constants/constants';

let url = null;

class AudioStore extends BasicStore {

  getUrl(){
    return url;
  }
}

let audioStoreInstance = new AudioStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_AUDIO_URL:
      url = action.data;
      audioStoreInstance.emitChange();
      break;
    case CLEAN_AUDIO_URL:
      url = null;
      audioStoreInstance.emitChange();
      break;
  }
  return true;
});

export default audioStoreInstance;



