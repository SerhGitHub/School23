import AppDispatcher from '../dispatcher/Dispatcher';

import BasicStore from './BaseStore';

import {
  INIT_OPERATION_OBJ,
  UPDATE_OPERATION_OBJ,
  RESET_OPERATION_OBJ,
  CANCEL_OPERATION_OBJ,
  SWITCH_VIEW_MODE
} from '../constants/constants';

let currentOperations = {};
let changes = {};

class ObjOperationStore extends BasicStore {

  getObjectsById(entity, id, fieldId){
    const allObjects = this.getOperationObject(entity);
    let data = [];
    if (allObjects && allObjects.length > 0) {
      allObjects.forEach((object) => {
        if(object[fieldId] == id) {
          data.push(object);
        }
      });
    }
    return data;
  }

  getUntouchedObject(entityName) {
    if(entityName) {
      return currentOperations[entityName] ? currentOperations[entityName].currentObjectBackup : undefined;
    } else {
      return undefined;
    }
  }

  getOperationObject(entityName) {
    if(entityName) {
      return currentOperations[entityName] ? currentOperations[entityName].currentObject : undefined;
    } else {
      return undefined;
    }
  }

  getChanges(entityName) {
    if(entityName) {
      return changes[entityName];
    } else {
      return undefined;
    }
  }

  isObjectChanged(entityName) {
    if(entityName) {
      return currentOperations[entityName] ? currentOperations[entityName].silentChanged : false;
    } else {
      return false;
    }
  }

  isChanged() {
    let hasChanges = false;
    for (var entity in currentOperations) {
      if (currentOperations.hasOwnProperty(entity)) {
        hasChanges = hasChanges || (currentOperations[entity] && currentOperations[entity].isChanged);
      }
    }
    return hasChanges;
  }

  isReadOnly(entityName) {
    if(entityName) {
      return currentOperations[entityName] ? currentOperations[entityName].readonly : true;
    } else {
      return true;
    }
  }
}

let objOperationStoreInstance = new ObjOperationStore();

AppDispatcher.register(function(payload) {
  let action = payload.action;
  switch(action.actionType) {
    case INIT_OPERATION_OBJ:
      if (action.data.entity) {
        let readOnly = !action.data.isEditable;
        let entityOperation = {};
        currentOperations[action.data.entity] = entityOperation;
        changes[action.data.entity] = {};
        entityOperation.currentObject = JSON.parse(JSON.stringify(action.data.information));
        entityOperation.currentObjectBackup = action.data.information;
        entityOperation.isChanged = false;
        entityOperation.readonly = readOnly;
        entityOperation.silentChanged = false;
        entityOperation.ignoreFieldChanges = action.data.ignoreChanges;
        entityOperation.alwaysUnchanged = action.data.alwaysUnchanged;
        objOperationStoreInstance.emitChange();
      }
      break;

    case RESET_OPERATION_OBJ :
      if(action.data.entity) {
        let entityOperation = currentOperations[action.data.entity];
        if(entityOperation){
          entityOperation.currentObject = JSON.parse(JSON.stringify(entityOperation.currentObjectBackup));
          changes[action.data.entity] = {};
          entityOperation.isChanged = false;
          entityOperation.silentChanged = false;
          if(action.data.resetMode) {
            entityOperation.readonly = true;
          }
          objOperationStoreInstance.emitChange();
        }
      }
      break;

    case UPDATE_OPERATION_OBJ:
      if(action.data.entity) {
        let entityOperation = currentOperations[action.data.entity];
        entityOperation.currentObject = action.data.information;
        if(!entityOperation.alwaysUnchanged){
          entityOperation.isChanged = true;
        }
        entityOperation.silentChanged = true;
        if(!entityOperation.ignoreFieldChanges){
          changes[action.data.entity][action.data.field] = true;
        }
        objOperationStoreInstance.emitChange();
      }
      break;

    case CANCEL_OPERATION_OBJ:
      if(action.data.entity) {
        currentOperations[action.data.entity] = undefined;
        changes[action.data.entity] = undefined;
        objOperationStoreInstance.emitChange();
      } else {
        currentOperations = {};
        changes = {};
      }
      break;
    case SWITCH_VIEW_MODE:
      if(action.data.entity && currentOperations[action.data.entity]) {
        currentOperations[action.data.entity].readonly = action.data.readonly;
        objOperationStoreInstance.emitChange();
      } else {
        currentOperations[action.data.entity] = {readonly: action.data.readonly};
        objOperationStoreInstance.emitChange();
      }
      break;
  }
  return true;
});

export default objOperationStoreInstance;



