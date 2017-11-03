/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */

import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SELECT_TAB
} from '../constants/constants';

import BasicStore from './BaseStore';

let currentTab;

class CurrentTabStore extends BasicStore {

  getCurrentTab() {
    return currentTab;
  }
}

const currentTabStoreInstance = new CurrentTabStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case SELECT_TAB:
      currentTab = action.data;
      currentTabStoreInstance.emitChange();
      break;
  }

  return true;
});

export default currentTabStoreInstance;

