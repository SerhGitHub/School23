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
  FOR_PARENTS,
  SOUNDS_LETTERS,
  TALK_IN_BELARUSIAN,
  WORLD,
  WORLD_OF_MATHEMATIC,
  WORLD_BEAUTIFUL,
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

  initParents(props) {
    commonPageInitialization(true, FOR_PARENTS, props.location.pathname);
  },

  initSoundsAndLetters(props) {
    commonPageInitialization(true, SOUNDS_LETTERS, props.location.pathname);
  },

  initTalkInBelarusian(props) {
    commonPageInitialization(true, TALK_IN_BELARUSIAN, props.location.pathname);
  },

  initWorld(props) {
    commonPageInitialization(true, WORLD, props.location.pathname);
  },

  initWorldOfMathematic(props) {
    commonPageInitialization(true, WORLD_OF_MATHEMATIC, props.location.pathname);
  },

  initWorldBeautiful(props) {
    commonPageInitialization(true, WORLD_BEAUTIFUL, props.location.pathname);
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


