import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CHANGE_BACKGROUND_IMAGE,
} from '../../constants/constants';

let backgroundImage = null;
let defaultColor = '#78C2AD!important';
let allBackgroundImages = [
  {
    name: 'background01',
    url: 'background01.png',
  },
  {
    name: 'background02',
    url: 'background02.png',
  },
  {
    name: 'background03',
    url: 'background03.png',
  },
  {
    name: 'background04',
    url: 'background04.png',
  },
  {
    name: 'background05',
    url: 'background05.png',
  },
  {
    name: 'background06',
    url: 'background06.png',
  },
  {
    name: 'background07',
    url: 'background07.png',
  },
  {
    name: 'background08',
    url: 'background08.png',
  },
  {
    name: 'background09',
    url: 'background09.png',
  },
];

class StyleStore extends BasicStore {

  getBackgroundImage(){
    return backgroundImage;
  }

  getDefaultColor(){
    return defaultColor;
  }

  getAllimages(){
    return allBackgroundImages;
  }
}

let styleStoreInstance = new StyleStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case CHANGE_BACKGROUND_IMAGE:
      backgroundImage = action.data;
      styleStoreInstance.emitChange();
      break;
  }
  return true;
});

export default styleStoreInstance;



