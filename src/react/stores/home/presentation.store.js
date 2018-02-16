import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_PRESENTATION_URL,
  SET_PRESENTATION_URL,
} from '../../constants/constants';

let url = null;
let images;
let isVideo;

class PresentationStore extends BasicStore {

  getUrl(){
    return url;
  }

  isVideo(){
    return isVideo;
  }

  getImages(){
    return images;
  }
}

let presentationStoreInstance = new PresentationStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_PRESENTATION_URL:
      url = action.data.url;
      images = action.data.images;
      isVideo = action.data.isVideo;
      presentationStoreInstance.emitChange();
      break;
    case CLEAN_PRESENTATION_URL:
      url = null;
      images = null;
      isVideo = null;
      presentationStoreInstance.emitChange();
      break;
  }
  return true;
});

export default presentationStoreInstance;



