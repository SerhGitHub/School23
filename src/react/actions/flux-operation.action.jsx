import AppDispatcher from '../dispatcher/Dispatcher';

import {
  CANCEL_OPERATION_OBJ,
  INIT_OPERATION_OBJ,
  RESET_OPERATION_OBJ,
  SWITCH_VIEW_MODE,
  UPDATE_OPERATION_OBJ
} from '../constants/constants';

export default {
  initOperationObj(entityName, data, ignoreChanges, alwaysUnchanged, isEditable) {
    AppDispatcher.handleViewAction({
      actionType: INIT_OPERATION_OBJ,
      data: {
        entity: entityName,
        information: data,
        ignoreChanges : ignoreChanges,
        alwaysUnchanged : alwaysUnchanged,
        isEditable : isEditable
      }
    });
  },
  updateOperationObj(entityName, fieldName, data) {
    AppDispatcher.handleViewAction({
      actionType: UPDATE_OPERATION_OBJ,
      data: {
        entity: entityName,
        field: fieldName,
        information: data
      }
    });
  },
  switchEntityMode(entityName, readonly) {
    AppDispatcher.handleViewAction({
      actionType: SWITCH_VIEW_MODE,
      data: {
        entity: entityName,
        readonly: readonly
      }
    });
  },

  resetOperationObj(entityName, resetMode) {
    AppDispatcher.handleViewAction({
      actionType: RESET_OPERATION_OBJ,
      data: {
        entity: entityName,
        resetMode: resetMode
      }
    });
  },
  cancelOperationObj(entityName) {
    AppDispatcher.handleViewAction({
      actionType: CANCEL_OPERATION_OBJ,
      data: {
        entity: entityName
      }
    });
  }
};
