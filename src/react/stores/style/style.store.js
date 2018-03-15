import AppDispatcher from '../../dispatcher/Dispatcher';

import BasicStore from '../basic.store';

import {
  CHANGE_BACKGROUND_IMAGE,
  CHANGE_MAIN_BACKGROUND_IMAGE,
  CHANGE_DEFAULT_COLOR
} from '../../constants/constants';

let backgroundImage = null;
let mainBackgroundImage = null;
let defaultColor = '#020655';
let allBackgroundImages = [
  {
    name: 'background01',
    url: 'background01.png',
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
let allMainBackgroundImages = [
  {
    name: 'default',
    url: 'mainBackgrounddefault.jpg',
  },
  {
    name: '1',
    url: 'mainBackground1.jpg',
  },
  {
    name: '4',
    url: 'mainBackground4.jpg',
  },
  {
    name: '5',
    url: 'mainBackground5.jpg',
  },
  {
    name: '8',
    url: 'mainBackground8.jpg',
  },
  {
    name: '10',
    url: 'mainBackground10.jpg',
  },
  {
    name: '12',
    url: 'mainBackground12.jpg',
  },
  {
    name: '13',
    url: 'mainBackground13.jpg',
  },
  {
    name: '14',
    url: 'mainBackground14.jpg',
  },
  {
    name: '16',
    url: 'mainBackground16.jpg',
  },
  {
    name: '17',
    url: 'mainBackground17.jpg',
  },
  {
    name: '18',
    url: 'mainBackground18.jpg',
  },
  {
    name: '19',
    url: 'mainBackground19.jpg',
  },
];

class StyleStore extends BasicStore {

  getBackgroundImage(){
    return backgroundImage;
  }

  getMainBackgroundImage(){
    return mainBackgroundImage;
  }

  getDefaultColor(){
    return defaultColor;
  }

  getAllimages(){
    return allBackgroundImages;
  }

  getAllMainimages(){
    return allMainBackgroundImages;
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
    case CHANGE_MAIN_BACKGROUND_IMAGE:
      mainBackgroundImage = action.data;
      styleStoreInstance.emitChange();
      break;
    case CHANGE_DEFAULT_COLOR:
      defaultColor = action.data;
      styleStoreInstance.emitChange();
      break;
  }
  return true;
});

export default styleStoreInstance;



