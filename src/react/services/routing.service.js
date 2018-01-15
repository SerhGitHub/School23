import RootService from '../services/RootService';

import {
  MAIN_ID,
  OBVIUS_ID,
  PSYCHOLOGICALLY_ID,
  HOME_DOCTOR_URL,
  HOME_PSYCHOLOGICALLY_URL,
  FORUM_URL,
  HOME_MASTER_URL,
  HOME_ASSISTANT_URL,
  HOME_TUTOR_URL,
} from '../constants/constants';


function commonPageInitialization(shouldSelectHeader, selectedHeaderItem) {

  if(shouldSelectHeader) {
    RootService.selectMenuItem(selectedHeaderItem);
  }
}

export default {

  initHomeDoctor(props) {
    commonPageInitialization(true, HOME_DOCTOR_URL, props.location.pathname);
  },

  initForum(props) {
    commonPageInitialization(true, FORUM_URL, props.location.pathname);
  },

  initHomeMaster(props) {
    commonPageInitialization(true, HOME_MASTER_URL, props.location.pathname);
  },

  initHomeTutor(props) {
    commonPageInitialization(true, HOME_TUTOR_URL, props.location.pathname);
  },

  initHomeAssistant(props) {
    commonPageInitialization(true, HOME_ASSISTANT_URL, props.location.pathname);
  },

  initMain(props) {
    commonPageInitialization(true, MAIN_ID, props.location.pathname);
  },

  initHomePsychologically(props) {
    commonPageInitialization(true, HOME_PSYCHOLOGICALLY_URL, props.location.pathname);
  },
}


