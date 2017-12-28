import AppDispatcher from '../dispatcher/Dispatcher';

import {
  SELECT_TAB_MENU_ITEM,
} from '../constants/constants';

let RootAction = {
  selectMenuItem(data) {
    AppDispatcher.handleViewAction({
      actionType: SELECT_TAB_MENU_ITEM,
      data: data
    });
  }
};

export default RootAction;
