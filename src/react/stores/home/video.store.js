import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_VIDEO_URL,
  SET_VIDEO_URL,
} from '../../constants/constants';

let url = null;

class VideoStore extends BasicStore {

  getUrl(){
    return url;
  }
}

let videoStoreInstance = new VideoStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_VIDEO_URL:
      url = action.data;
      videoStoreInstance.emitChange();
      break;
    case CLEAN_VIDEO_URL:
      url = null;
      videoStoreInstance.emitChange();
      break;
  }
  return true;
});

export default videoStoreInstance;



