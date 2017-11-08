import React from 'react';

export const DEVELOPMENT_TAB = 'development';
export const TEACHING_TAB = 'teaching';
export const SCIENCE_TAB = 'science';

export const VIEW_ACTION = 'VIEW_ACTION';
export const SELECT_TAB = 'SELECT_TAB';
export const INIT_TAB_CONTENT = 'INIT_MENU_ITEMS';
export const INIT_SUBJECT_CONTENT = 'INIT_SUBJECT_CONTENT';
export const INIT_QUESTION_CONTENT = 'INIT_QUESTION_CONTENT';
export const DEACTIVATE_SUBJECT_CONTENT = 'DEACTIVATE_SUBJECT_CONTENT';
export const DEACTIVATE_QUESTION_CONTENT = 'DEACTIVATE_QUESTION_CONTENT';
export const INIT_CURRENT_TAB = 'INIT_CURRENT_DATA_SYSTEM';
export const EVENT_CHANGE = 'change';

export const SHOW_POPUP = 'SHOW_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const ADD_DATA = 'ADD_DATA';

export const GET = 'get';
export const SAVE = 'save';
export const DELETE = 'delete';
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

export const ID_FIELD = 'id';
export const TYPE_FIELD = 'type';
export const LABEL_FIELD = 'label';
export const PLACEHOLDER_FIELD = 'placeholder';
export const BTN_FIELD = 'btn';
export const COMMENT_FIELD = 'comment';
export const IS_EDIT_FIELD = 'isEdit';
export const ICON_FIELD = 'icon';
export const CODE_FIELD = 'unicode';
export const IS_NEW_FIELD = 'isNew';
export const NAME_FIELD = 'name';
export const BUTTONS_FIELD = 'buttons';
export const DATA_SYSTEMS_ID = 'ds_id';

export const VALUE_FIELD = 'value';
export const STATUS_FIELD = 'status';
export const STATUS_ADD = 'add';
export const STATUS_REMOVED = 'removed';
export const STATUS_NORMAL = 'normal';
export const POPUP_FIELD = 'popup';

export const SAVE_BUTTON_TYPE = 'save';

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

export const VIEW_TAB_FIELD = 'viewTab';
export const LINKS = 'links';
export const QUESTIONS = 'questions';
export const VARIANTS_OF_ANSWERS = 'answers';
export const IS_TRUE = 'isTrue';
export const IMAGE_FIELD = 'image';
export const WIDTH_FIELD = 'width';
export const HEIGHT_FIELD = 'height';
export const BACKGROUND_FIELD = 'background';
export const LEVEL_FIELD = 'level';
export const DESCRIPTION_FIELD = 'description';

export const TAB_CONTENT_SETTINGS = {
  [DEVELOPMENT_TAB]: {
    [LABEL_FIELD]: 'Развиваем навыки',
    [ICON_FIELD]: {
      [LABEL_FIELD]: 'pyramid.png',
      [WIDTH_FIELD]: '100',
      [HEIGHT_FIELD]: '150'
    },
    [BACKGROUND_FIELD]: '#a4d300',
    [LINKS]: [
      {
        [ID_FIELD]: 11,
        [LABEL_FIELD]: 'Внимание',
        [DESCRIPTION_FIELD]: 'Задания для развития внимания у детей',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: [
          {
            [ID_FIELD]: 1,
            [LEVEL_FIELD]: 1,
            [LABEL_FIELD]: 'Найди точно такую же картинку как образец',
            [IMAGE_FIELD]: 'red_circle.png',
            [VARIANTS_OF_ANSWERS]: [
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'green_circle.png'
              },
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'green_triangle.png'
              },
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'red_oval.png'
              },
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'red_square.png'
              },
              {
                [IS_TRUE]: true,
                [IMAGE_FIELD]: 'red_circle.png'
              },
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'yellow_oval.png'
              },
            ]
          }
        ]
      },
      {
        [ID_FIELD]: 12,
        [LABEL_FIELD]: 'Память',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 13,
        [LABEL_FIELD]: 'Логика',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 14,
        [LABEL_FIELD]: 'Пространство и время',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 15,
        [LABEL_FIELD]: 'Речь',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      }
    ]
  },
  [TEACHING_TAB]: {
    [LABEL_FIELD]: 'Получаем новые знания',
    [ICON_FIELD]: {
      [LABEL_FIELD]: 'knowledge.png',
      [WIDTH_FIELD]: '100',
      [HEIGHT_FIELD]: '150'
    },
    [BACKGROUND_FIELD]: '#0085c3',
    [LINKS]: [
      {
        [ID_FIELD]: 21,
        [LABEL_FIELD]: 'Счет и цифры',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [LEVEL_FIELD]: 1,
        [QUESTIONS]: [
          {
            [ID_FIELD]: 1,
            [LABEL_FIELD]: 'Выбери знак, который можно поставить между картинками: «равно» или «не равно».',
            [IMAGE_FIELD]: 'myachiki.png',
            [VARIANTS_OF_ANSWERS]: [
              {
                [IS_TRUE]: false,
                [IMAGE_FIELD]: 'unequally.png'
              },
              {
                [IS_TRUE]: true,
                [IMAGE_FIELD]: 'equally.png'
              }
            ]
          }
        ]
      },
      {
        [ID_FIELD]: 22,
        [LABEL_FIELD]: 'Буквы и чтение',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      }
    ]
  },
  [SCIENCE_TAB]: {
    [LABEL_FIELD]: 'Наука',
    [ICON_FIELD]: {
      [LABEL_FIELD]: 'science.png',
      [WIDTH_FIELD]: '180',
      [HEIGHT_FIELD]: '150'
    },
    [BACKGROUND_FIELD]: '#fb6834',
    [LINKS]: [
      {
        [ID_FIELD]: 31,
        [LABEL_FIELD]: 'Биология',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 32,
        [LABEL_FIELD]: 'География',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 33,
        [LABEL_FIELD]: 'Физика',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 34,
        [LABEL_FIELD]: 'Химия',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      },
      {
        [ID_FIELD]: 35,
        [LABEL_FIELD]: 'Культура',
        [DESCRIPTION_FIELD]: '',
        [ICON_FIELD]: 'check',
        [QUESTIONS]: []
      }
    ]
  }
};

export const COLOR_FOR_SPINNER = '#3c8dbc';
export const COLOR_FOR_BACKGROUND = '#f1f0ec';

