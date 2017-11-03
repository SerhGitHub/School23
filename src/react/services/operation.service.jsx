import OperationAction from '../actions/operation.action';
import FluxOperationAction from '../actions/flux-operation.action';

import {buildEntityById} from '../utils/dto-functions';

export default {
  updateOperationObj(data) {
    OperationAction.updateOperationObj(data);
  },
  initOperationObj(data) {
    OperationAction.initOperationObj(data);
  },
  initOperationViaFlux(entityName, data, ignoreChanges, alwaysUnchanged, isEditable) {
    FluxOperationAction.initOperationObj(entityName, data, ignoreChanges, alwaysUnchanged, isEditable);
  },
  updateOperationViaFlux(entityName, fieldName, data) {
    FluxOperationAction.updateOperationObj(entityName, fieldName, data)
  },
  switchEntityMode(entityName, readonly) {
    FluxOperationAction.switchEntityMode(entityName, readonly)
  },
  resetOperationViaFlux(entityName, resetMode) {
    FluxOperationAction.resetOperationObj(entityName, resetMode);
  },
  cancelOperationViaFlux(entityName) {
    FluxOperationAction.cancelOperationObj(entityName);
  },
  initializeEntitiesForEditing(array, ENTITY) {
    if(array && array.length > 0){
      array.forEach(item => {
        this.initOperationViaFlux(buildEntityById(ENTITY, item.id), item);
      });
    }
    this.initOperationViaFlux(ENTITY, array);
  }
}
