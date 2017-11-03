/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import AppDispatcher from '../dispatcher/Dispatcher';

import {
  ADD_DATA,
  CLOSE_POPUP,
  SHOW_POPUP
} from '../constants/constants';

export default {
  showPopup(data) {
    AppDispatcher.handleViewAction({
      actionType: SHOW_POPUP,
      data: data
    });
  },
  closePopup() {
    AppDispatcher.handleViewAction({
      actionType: CLOSE_POPUP,
      data: false
    });
  },
  addData(data, field) {
    AppDispatcher.handleViewAction({
      actionType: ADD_DATA,
      data: {content: data, field: field}
    });
  }
};
