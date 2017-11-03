import React from 'react';

export const DEVELOPMENT_TAB = 'development';
export const TEACHING_TAB = 'teaching';
export const SCIENCE_TAB = 'science';
export const QA_RULES_TAB = 'qualityRules';
export const NOTIFICATIONS_TAB = 'notifications';

export const EDIT_TAB = 'EDIT_TAB';

export const VIEW_ACTION = 'VIEW_ACTION';
export const SELECT_TAB = 'SELECT_TAB';
export const INIT_TAB_CONTENT = 'INIT_MENU_ITEMS';
export const INIT_CURRENT_TAB = 'INIT_CURRENT_DATA_SYSTEM';
export const EVENT_CHANGE = 'change';

export const SHOW_POPUP = 'SHOW_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const ADD_DATA = 'ADD_DATA';

export const INIT_PROCEDURES_API = 'INIT_PROCEDURES_API';
export const GET = 'get';
export const SAVE = 'save';
export const DELETE = 'delete';
export const GET_DATA_SYSTEMS = 'getDataSystems';
export const PROCEDURE_API = 'proceduresApi';

export const CANCEL_OPERATION_OBJ = 'CANCEL_OPERATION_OBJ';
export const INIT_OPERATION_OBJ = 'INIT_OPERATION_OBJ';
export const RESET_OPERATION_OBJ = 'RESET_OPERATION_OBJ';
export const SWITCH_VIEW_MODE = 'SWITCH_VIEW_MODE';
export const UPDATE_OPERATION_OBJ = 'UPDATE_OPERATION_OBJ';

export const CODE_DELETE_BUTTON = 46;
export const CODE_ENTER_BUTTON = 13;
export const CODE_TAB_BUTTON = 9;

//Type of the element on tabs
export const INPUT = 'input';
export const TEXT = 'text';
export const OTHER = 'other';
export const SELECT = 'select';
export const CHECKBOX = 'checkbox';
export const LIST = 'list';
export const BUTTON = 'button';
export const POPUP = 'popup';

export const VISIBLE_IN_READONLY = 'visibleInReadonly';
export const HIDE_FOR_NEW_RECORD = 'hideForNewRecord';

export const ID_FIELD = 'id';
export const TYPE_FIELD = 'type';
export const LABEL_FIELD = 'label';
export const PLACEHOLDER_FIELD = 'placeholder';
export const BTN_FIELD = 'btn';
export const COMMENT_FIELD = 'comment';
export const IS_WITHOUT_LABEL_FIELD = 'isWithoutLabel';
export const IS_EDIT_FIELD = 'isEdit';
export const ICON_FIELD = 'icon';
export const CODE_FIELD = 'unicode';
export const IS_NEW_FIELD = 'isNew';
export const NAME_FIELD = 'name';
export const BUTTONS_FIELD = 'buttons';
export const DATA_SYSTEMS_ID = 'ds_id';
export const FIELD_FOR_ICON = 'iconField';
export const VIEW_FIELD = 'view';
export const FIELD_NOT_SAVE_FOR_NEW_OBJECT = 'fieldForSave';

export const VALUE_FIELD = 'value';
export const STATUS_FIELD = 'status';
export const DISABLED_FIELD = 'disabled';
export const STATUS_ADD = 'add';
export const STATUS_REMOVED = 'removed';
export const STATUS_NORMAL = 'normal';
export const POPUP_FIELD = 'popup';

export const SAVE_BUTTON_TYPE = 'save';
export const RESET_BUTTON_TYPE = 'reset';
export const REQUERY_BUTTON_TYPE = 'reQuery';
export const DELETE_BUTTON_TYPE = 'delete';
export const ADD_BUTTON_TYPE = 'add';
export const COPY_BUTTON_TYPE = 'copy';

export const ONLY_OLD_OBJECT_FIELD = 'onlyOldObject';

/*
 * Buttons settings
 */
export const SAVE_BUTTON = {
  [LABEL_FIELD]: 'Save',
  [TYPE_FIELD]: SAVE_BUTTON_TYPE,
  [IS_EDIT_FIELD]: true,
  [BTN_FIELD]: 'btn-success',
  [ICON_FIELD]: 'fa-save'
};
export const RESET_BUTTON = {
  [LABEL_FIELD]: 'Reset',
  [TYPE_FIELD]: RESET_BUTTON_TYPE,
  [IS_EDIT_FIELD]: true,
  [BTN_FIELD]: 'btn-warning',
  [ICON_FIELD]: 'fa-undo',
  [DISABLED_FIELD]: true,
  [HIDE_FOR_NEW_RECORD]: true
};
export const REQUERY_BUTTON = {
  [LABEL_FIELD]: 'Requery',
  [TYPE_FIELD]: REQUERY_BUTTON_TYPE,
  [IS_EDIT_FIELD]: true,
  [BTN_FIELD]: 'btn-warning',
  [ICON_FIELD]: 'fa-undo',
  [ONLY_OLD_OBJECT_FIELD]: true
};
export const DELETE_BUTTON = {
  [LABEL_FIELD]: 'Delete',
  [TYPE_FIELD]: DELETE_BUTTON_TYPE,
  [IS_EDIT_FIELD]: true,
  [BTN_FIELD]: 'btn-danger',
  [ICON_FIELD]: 'fa-trash'
};
export const ADD_BUTTON = {
  [LABEL_FIELD]: 'Add',
  [IS_EDIT_FIELD]: true,
  [TYPE_FIELD]: ADD_BUTTON_TYPE,
  [BTN_FIELD]: 'btn-primary',
  [ICON_FIELD]: 'fa-plus'
};
export const COPY_BUTTON = {
  [LABEL_FIELD]: 'Copy',
  [TYPE_FIELD]: COPY_BUTTON_TYPE,
  [BTN_FIELD]: 'btn-primary',
  [ICON_FIELD]: 'fa-plus',
  [HIDE_FOR_NEW_RECORD]: true
};

/*
 * Tabs settings
 * The buttons object must be the last element of the array
 */
export const SETTINGS_FOR_THE_DEVELOPMENT_TAB = [
  {
    [ID_FIELD]: NAME_FIELD,
    [TYPE_FIELD]: INPUT,
    [LABEL_FIELD]: 'Connection Name',
    [VISIBLE_IN_READONLY]: true,
  },
  {
    [ID_FIELD]: BUTTONS_FIELD,
    [TYPE_FIELD]: BUTTON,
    [BUTTONS_FIELD]: [SAVE_BUTTON, RESET_BUTTON, DELETE_BUTTON, COPY_BUTTON],
    [FIELD_NOT_SAVE_FOR_NEW_OBJECT]: true
  }
];
export const SETTINGS_FOR_THE_TEACNING_TAB = [
  {
    [ID_FIELD]: NAME_FIELD,
    [TYPE_FIELD]: INPUT,
    [LABEL_FIELD]: 'Name',
    [VISIBLE_IN_READONLY]: true
  },
  {
    [ID_FIELD]: BUTTONS_FIELD,
    [TYPE_FIELD]: BUTTON,
    [BUTTONS_FIELD]: [SAVE_BUTTON, RESET_BUTTON, DELETE_BUTTON, COPY_BUTTON],
    [FIELD_NOT_SAVE_FOR_NEW_OBJECT]: true
  }
];
export const SETTINGS_FOR_THE_SCIENCE_TAB = [
  {
    [ID_FIELD]: NAME_FIELD,
    [TYPE_FIELD]: INPUT,
    [LABEL_FIELD]: 'List Name',
    [VISIBLE_IN_READONLY]: true
  },
  {
    [ID_FIELD]: BUTTONS_FIELD,
    [TYPE_FIELD]: BUTTON,
    [BUTTONS_FIELD]: [SAVE_BUTTON, RESET_BUTTON, DELETE_BUTTON, COPY_BUTTON, REQUERY_BUTTON],
    [FIELD_NOT_SAVE_FOR_NEW_OBJECT]: true
  }
];

export const BOX_TOPS = {
  blue: 'box-primary',
  red: 'box-danger',
  green: 'box-success',
  'light-blue': 'box-info',
  orange: 'box-warning',
  gray: 'box-default',
  custom1: 'box-custom1',		// requires LTEBox.css be loaded
  custom2: 'box-custom2',		// requires LTEBox.css be loaded
  '': 'box-default'
};

export const TAB_FIELD = 'tab';

/*
 * Tabs settings
 */
export const TABS = [
  {
    [TAB_FIELD]: DEVELOPMENT_TAB,
    [LABEL_FIELD]: 'Развитие'
  },
  {
    [TAB_FIELD]: TEACHING_TAB,
    [LABEL_FIELD]: 'Обучение'
  },
  {
    [TAB_FIELD]: SCIENCE_TAB,
    [LABEL_FIELD]: 'Наука'
  }
];

export const VIEW_TAB_FIELD = 'viewTab';

export const TAB_CONTENT_SETTINGS = {
  [DEVELOPMENT_TAB]: {
    [VIEW_TAB_FIELD]: SETTINGS_FOR_THE_DEVELOPMENT_TAB,
  },
  [TEACHING_TAB]: {
    [VIEW_TAB_FIELD]: SETTINGS_FOR_THE_TEACNING_TAB
  },
  [SCIENCE_TAB]: {
    [VIEW_TAB_FIELD]: SETTINGS_FOR_THE_SCIENCE_TAB
  }
};


export const COLOR_FOR_SPINNER = '#3c8dbc';

