/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import AppDispatcher from '../dispatcher/Dispatcher';
import {
  SELECT_TAB
} from '../constants/constants';

export default {
  selectAnotherTab(newTab) {
    AppDispatcher.handleViewAction({
      actionType: SELECT_TAB,
      data: newTab
    });
  }
};
