import AppDispatcher from '../dispatcher/Dispatcher';

import {
  INIT_OPERATION_OBJ,
  UPDATE_OPERATION_OBJ
} from '../constants/constants';

let OperationAction = {

  initOperationObj(data) {
    AppDispatcher.handleViewAction({
      actionType: INIT_OPERATION_OBJ,
      data: data
    });
  },

  updateOperationObj(data) {
    AppDispatcher.handleViewAction({
      actionType: UPDATE_OPERATION_OBJ,
      data: data
    });
  }
};

export default OperationAction;
