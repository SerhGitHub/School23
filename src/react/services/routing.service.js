import RootService from '../services/RootService';

import {
  MAIN_ID,
  OBVIUS_ID,
  PSYCHOLOGICALLY_ID,
} from '../constants/constants';


function commonPageInitialization(shouldSelectHeader, selectedHeaderItem) {

  if(shouldSelectHeader) {
    RootService.selectMenuItem(selectedHeaderItem);
  }
}

export default {

  initPsychologist(props) {
    commonPageInitialization(true, PSYCHOLOGICALLY_ID, props.location.pathname);
  },

  initMain(props) {
    commonPageInitialization(true, MAIN_ID, props.location.pathname);
  },

  initObvious(props) {
    commonPageInitialization(true, OBVIUS_ID, props.location.pathname);
  },
}


