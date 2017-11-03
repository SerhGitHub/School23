/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */

import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './BaseStore';

import {
  ADD_DATA,
  CLOSE_POPUP,
  SHOW_POPUP
} from '../constants/constants';

let showPopup = false;
let data = {};

class PopupStore extends BasicStore {

  showPopup(){
    return showPopup;
  }

  getDataByField(field){
    return data ? data[field] : null;
  }

}

const storeInstance = new PopupStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case SHOW_POPUP:
      showPopup = action.data.show;
      storeInstance.emitChange();
      break;
    case CLOSE_POPUP:
      showPopup = false;
      storeInstance.emitChange();
      break;
    case ADD_DATA:
      data[action.data.field] = action.data.data;
      storeInstance.emitChange();
      break;
  }
  return true;
});

export default storeInstance;

