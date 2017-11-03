import OperationService from '../services/operation.service';

import {
  DELETE,
  GET,
  ID_FIELD,
  PROCEDURE_API,
  SAVE,
  TAB_CONTENT_SETTINGS,
  VIEW_TAB_FIELD,
} from '../constants/constants';

export default {

  initAllObjects(tab, id_question){
    const getObjects = TAB_CONTENT_SETTINGS[tab][PROCEDURE_API][GET];
    const data = [];
    OperationService.initializeEntitiesForEditing(data, tab);
  }

}
