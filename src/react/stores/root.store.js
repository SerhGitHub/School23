import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './basic.store';

import {
  SELECT_TAB_MENU_ITEM,
} from '../constants/constants';

let selectedRootMenuItem;

class RootStore extends BasicStore {

  getSelectedRootMenuItem() {
    return selectedRootMenuItem;
  }
}

let rootStoreInstance = new RootStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SELECT_TAB_MENU_ITEM:
      selectedRootMenuItem = action.data;
      rootStoreInstance.emitChange();
      break;
  }
  return true;
});

export default rootStoreInstance;



