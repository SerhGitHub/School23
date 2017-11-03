/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */

import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './BaseStore';

import {
  INIT_TAB_CONTENT
} from '../constants/constants';

let tabContent;

class TabStore extends BasicStore {

  getTabContent() {
    return tabContent;
  }
}

const storeInstance = new TabStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_TAB_CONTENT:
      tabContent = action.data;
      storeInstance.emitChange();
      break;
  }

  return true;
});

export default storeInstance;

