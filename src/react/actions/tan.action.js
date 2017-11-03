/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import AppDispatcher from '../dispatcher/Dispatcher';
import {
  INIT_TAB_CONTENT,
  INIT_CURRENT_TAB
} from '../constants/constants';

export default {
  initializeTabs(tabs) {
    AppDispatcher.handleViewAction({
      actionType: INIT_TAB_CONTENT,
      data: tabs
    });
  },
  changeCurrentTab(tab) {
    AppDispatcher.handleViewAction({
      actionType: INIT_CURRENT_TAB,
      data: tab
    });
  }
};
