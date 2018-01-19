import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CLEAN_IMAGES_HOME_PSYCH,
  SET_IMAGES_HOME_PSYCH,
} from '../../constants/constants';

let path = '';
let images = [];

class Psych extends BasicStore {

  getPath(){
    return path;
  }

  getImages(){
    return images;
  }
}

let psychStoreInstance = new Psych();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_IMAGES_HOME_PSYCH:
      path = action.data.path;
      images = action.data.images;
      psychStoreInstance.emitChange();
      break;
    case CLEAN_IMAGES_HOME_PSYCH:
      path = '';
      images = [];
      psychStoreInstance.emitChange();
      break;
  }
  return true;
});

export default psychStoreInstance;



