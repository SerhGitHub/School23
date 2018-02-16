import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route} from 'react-router';

import RoutingService from './services/routing.service';

import MainComponent from './components/main/MainComponent';
import AboutProjectComponent from './components/main/AboutProjectComponent';
import Other from './components/other/Other';

import HomeAssistant from './components/home/assistant/HomeAssistant';
import HomeDoctor from './components/home/doctor/HomeDoctor';
import HomeMaster from './components/home/master/HomeMaster';
import HomeTutor from './components/home/tutor/HomeTutor';
import Forum from './components/forum/Forum';

import HomePsychologist from './components/home/psychologist/HomePsychologist';
import SchoolOfCommunicationForChildrenAndAdults from './components/home/psychologist/SchoolCommunication/SchoolOfCommunicationForChildrenAndAdults';
import HowToBehaveAtAParty from './components/home/psychologist/SchoolCommunication/HowToBehaveAtAParty';
import HowToReceiveGuests from './components/home/psychologist/SchoolCommunication/HowToReceiveGuests';
import HowToMakeFriendsWithStrangers from './components/home/psychologist/SchoolCommunication/HowToMakeFriendsWithStrangers';
import DisputeWithoutQuarrel from './components/home/psychologist/SchoolCommunication/DisputeWithoutQuarrel';
import EmotionalColoringOfSpeech from './components/home/psychologist/SchoolCommunication/EmotionalColoringOfSpeech';
import EmotionsAndCommunication from './components/home/psychologist/SchoolCommunication/EmotionsAndCommunication';
import FacialExpressionsAndGestures from './components/home/psychologist/SchoolCommunication/FacialExpressionsAndGestures';
import ListeningSpeaking from './components/home/psychologist/SchoolCommunication/ListeningSpeaking';
import OralSpeech from './components/home/psychologist/SchoolCommunication/OralSpeech';
import RequestAndRefusal from './components/home/psychologist/SchoolCommunication/RequestAndRefusal';
import TalkingOnThePhone from './components/home/psychologist/SchoolCommunication/TalkingOnThePhone';

import InTheWorldOfNature from './components/home/tutor/expandOurHorizons/InTheWorldOfNature';
import WorkOfPeople from './components/home/tutor/expandOurHorizons/WorkOfPeople';
import TheWorld from './components/home/tutor/expandOurHorizons/TheWorld';

import SolveExamples from './components/home/tutor/inTheWorldOfMathematics/SolveExamples';
import OrientInTimeAndSpace from './components/home/tutor/inTheWorldOfMathematics/OrientInTimeAndSpace';
import TheWorldOfGeometry from './components/home/tutor/inTheWorldOfMathematics/TheWorldOfGeometry';
import WorldOfNumbers from './components/home/tutor/inTheWorldOfMathematics/WorldOfNumbers';

import LearningToCompose from './components/home/tutor/learningToSpeakBeautifully/LearningToCompose';
import PlayingWithWords from './components/home/tutor/learningToSpeakBeautifully/PlayingWithWords';

import FavoriteWorks from './components/home/tutor/learningToRead/FavoriteWorks';
import SoundsAndLetters from './components/home/tutor/learningToRead/SoundsAndLetters';
import LearningTheAlphbet from './components/home/tutor/learningToRead/LearningTheAlphbet';

import Hygiene from './components/home/doctor/physicalReadiness/Hygiene';
import DailyRegime from './components/home/doctor/physicalReadiness/DailyRegime';
import Hardening from './components/home/doctor/physicalReadiness/Hardening';
import HyperactiveChild from './components/home/doctor/HyperactiveChild';

import FormationStudentsPosition from './components/home/psychologist/personalReadiness/FormationStudentsPosition';
import Habits from './components/home/psychologist/personalReadiness/Habits';

import AggressiveChild from './components/home/psychologist/emotionalVolitionalWillingness/AggressiveChild';

import BelarusianCartoons from './components/home/tutor/weTalk/BelarusianCartoons';
import ListeningToFairyTales from './components/home/tutor/weTalk/ListeningToFairyTales';
import ListenAndSing from './components/home/tutor/weTalk/ListenAndSing';

import BreathingExercises from './components/home/doctor/speechApparatus/BreathingExercises';

import ArticulatoryGymnastics from './components/home/tutor/articulatoryGymnastics/ArticulatoryGymnastics';

import TonguesAndTongueTwisters from './components/home/tutor/tonguesAndTongueTwisters/TonguesAndTongueTwisters';
import TongueTwisters from './components/home/tutor/tonguesAndTongueTwisters/TongueTwisters';
import PagodaInPictures from './components/home/tutor/tonguesAndTongueTwisters/PagodaInPictures';

import {
  Aggressive_child,
  MAIN_ID,
  ABOUT_PROJECT_ID,
  ABOUT_US_URL,
  AUTHORS_URL,
  HOME_PSYCHOLOGICALLY_URL,
  FROM_CHILD_ROOM_TO_SCHOOL_URL,
  DO_PARENTS_READY_TO_SCHOOL_URL,
  TESTS_FOR_PARENTS_URL,
  PSICHOLOGICHESKAY_GOTOVNOST_URL,
  INTELECTUALNAY_GOTOVNOST_URL,
  SOCIALNAY_GOTOVNOST_URL,
  IN_FAMILY_URL,
  IN_PARENTS_URL,
  IN_FRIENDS_URL,
  IN_OTHERS_URL,
  LICHNOSTNAY_URL,
  FORMIROVANIE_POSICII_SHKOLNIKA_URL,
  PRIVICHKA_URL,
  EMOCIONALNAY_GOTOVNOCCT_URL,
  MOTIVACIY_UCHENIKA_URL,
  FORNIROVANIE_VOLEVIH_KACHEVSTV_URL,
  OTHERS_URL,
  HOME_DOCTOR_URL,
  HOME_ASSISTANT_URL,
  HOME_TUTOR_URL,
  HOME_MASTER_URL,
  FORUM_URL,
  SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS,
  DISPUTE_WITHOUT_QUARREL,
  EMOTIONAL_COLORING_OF_SPEECH,
  EMOTIONS_ADN_COMMUNICATION,
  FACIAL_EXPRESSIONS_AND_GESTURES,
  HOW_TO_BEHAVE_AT_A_PARTY,
  HOW_TO_MAKE_FRIENDS_WITH_STRANGERS,
  HOW_TO_RECEIVE_GUESTS,
  LISTENING_SPEAKING,
  ORAL_SPEECH,
  REQUEST_AND_REFUSAL,
  TALKING_ON_THE_PHONE,
  IN_THE_WORLD_OF_NATURE,
  WORK_OF_PEOPLE,
  THE_WORLD,
  World_of_numbers,
  Solve_examples,
  The_World_of_Geometry,
  Orient_in_time_and_space,
  Playing_with_words,
  Learning_to_compose,
  Sounds_and_letters,
  Learning_the_alphabet,
  Favorite_works,
  Fizicheskay_gotovnost,
  HYGIENE,
  Daily_regime,
  It_is_interesting,
  HARDENING,
  Hyperactive_child,
  Belarusian_cartoons,
  Listening_to_fairy_tales,
  Listen_and_sing,
  Breathing_exercises,
  Articulatory_gymnastics,
  Tongues_and_tongue_twisters,
  Tongue_twisters1,
  Pagoda_in_pictures,
} from './constants/constants';
//These libraries can really be a part of extension, but for performance reasons you can use standalone dependencies

global.jQuery = require('jquery/dist/jquery.min.js');
global.$ = global.jQuery;
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('./styles/style.css');
require('./styles/bootstarp.css');

const appHistory = hashHistory;

function onNewInnerRouteEnter(loadCommonData) {
  function loadData(nextState) {
    if (loadCommonData) {
      loadCommonData(nextState);
    }
  }
  return function (nextState) {
    loadData(nextState);
  }
}

ReactDOM.render(
  (
    <Router history={appHistory}>
      <Route>
        <Route >
          <Route onEnter={onNewInnerRouteEnter(RoutingService.initMain)}>
            <Route path={'/'} component={MainComponent}/>
            <Route path={`/${ABOUT_PROJECT_ID}`} component={AboutProjectComponent}/>
            <Route path={`/${ABOUT_US_URL}`} component={Other}/>
            <Route path={`/${AUTHORS_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomePsychologically)}>
            <Route path={`/${HOME_PSYCHOLOGICALLY_URL}`} component={HomePsychologist}/>
            <Route path={`/${FROM_CHILD_ROOM_TO_SCHOOL_URL}`} component={Other}/>
            <Route path={`/${DO_PARENTS_READY_TO_SCHOOL_URL}`} component={Other}/>
            <Route path={`/${TESTS_FOR_PARENTS_URL}`} component={Other}/>
            <Route path={`/${PSICHOLOGICHESKAY_GOTOVNOST_URL}`} component={Other}/>
            <Route path={`/${INTELECTUALNAY_GOTOVNOST_URL}`} component={Other}/>
            <Route path={`/${SOCIALNAY_GOTOVNOST_URL}`} component={Other}/>
            <Route path={`/${IN_FAMILY_URL}`} component={Other}/>
            <Route path={`/${IN_PARENTS_URL}`} component={Other}/>
            <Route path={`/${IN_FRIENDS_URL}`} component={Other}/>
            <Route path={`/${IN_OTHERS_URL}`} component={Other}/>
            <Route path={`/${LICHNOSTNAY_URL}`} component={Other}/>
            <Route path={`/${EMOCIONALNAY_GOTOVNOCCT_URL}`} component={Other}/>
            <Route path={`/${MOTIVACIY_UCHENIKA_URL}`} component={Other}/>
            <Route path={`/${FORNIROVANIE_VOLEVIH_KACHEVSTV_URL}`} component={Other}/>
            <Route path={`/${SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS}`} component={SchoolOfCommunicationForChildrenAndAdults}/>
            <Route path={`/${DISPUTE_WITHOUT_QUARREL}`} component={DisputeWithoutQuarrel}/>
            <Route path={`/${EMOTIONAL_COLORING_OF_SPEECH}`} component={EmotionalColoringOfSpeech}/>
            <Route path={`/${EMOTIONS_ADN_COMMUNICATION}`} component={EmotionsAndCommunication}/>
            <Route path={`/${FACIAL_EXPRESSIONS_AND_GESTURES}`} component={FacialExpressionsAndGestures}/>
            <Route path={`/${HOW_TO_BEHAVE_AT_A_PARTY}`} component={HowToBehaveAtAParty}/>
            <Route path={`/${HOW_TO_MAKE_FRIENDS_WITH_STRANGERS}`} component={HowToMakeFriendsWithStrangers}/>
            <Route path={`/${HOW_TO_RECEIVE_GUESTS}`} component={HowToReceiveGuests}/>
            <Route path={`/${LISTENING_SPEAKING}`} component={ListeningSpeaking}/>
            <Route path={`/${ORAL_SPEECH}`} component={OralSpeech}/>
            <Route path={`/${REQUEST_AND_REFUSAL}`} component={RequestAndRefusal}/>
            <Route path={`/${TALKING_ON_THE_PHONE}`} component={TalkingOnThePhone}/>

            <Route path={`/${IN_THE_WORLD_OF_NATURE}`} component={InTheWorldOfNature}/>
            <Route path={`/${WORK_OF_PEOPLE}`} component={WorkOfPeople}/>
            <Route path={`/${THE_WORLD}`} component={TheWorld}/>

            <Route path={`/${World_of_numbers}`} component={WorldOfNumbers}/>
            <Route path={`/${Solve_examples}`} component={SolveExamples}/>
            <Route path={`/${The_World_of_Geometry}`} component={TheWorldOfGeometry}/>
            <Route path={`/${Orient_in_time_and_space}`} component={OrientInTimeAndSpace}/>

            <Route path={`/${Learning_to_compose}`} component={LearningToCompose}/>
            <Route path={`/${Playing_with_words}`} component={PlayingWithWords}/>

            <Route path={`/${Sounds_and_letters}`} component={SoundsAndLetters}/>
            <Route path={`/${Learning_the_alphabet}`} component={LearningTheAlphbet}/>
            <Route path={`/${Favorite_works}`} component={FavoriteWorks}/>


            <Route path={`/${FORMIROVANIE_POSICII_SHKOLNIKA_URL}`} component={FormationStudentsPosition}/>
            <Route path={`/${PRIVICHKA_URL}`} component={Habits}/>

            <Route path={`/${Aggressive_child}`} component={AggressiveChild}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeDoctor)}>
            <Route path={`${HOME_DOCTOR_URL}`} component={HomeDoctor}/>
            <Route path={`/${HYGIENE}`} component={Hygiene}/>
            <Route path={`/${Daily_regime}`} component={DailyRegime}/>
            <Route path={`/${HARDENING}`} component={Hardening}/>
            <Route path={`/${Hyperactive_child}`} component={HyperactiveChild}/>

            <Route path={`/${Breathing_exercises}`} component={BreathingExercises}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeTutor)}>
            <Route path={`${HOME_TUTOR_URL}`} component={HomeTutor}/>

            <Route path={`${Belarusian_cartoons}`} component={BelarusianCartoons}/>
            <Route path={`${Listening_to_fairy_tales}`} component={ListeningToFairyTales}/>
            <Route path={`${Listen_and_sing}`} component={ListenAndSing}/>

            <Route path={`${Articulatory_gymnastics}`} component={ArticulatoryGymnastics}/>

            <Route path={`${Tongues_and_tongue_twisters}`} component={TonguesAndTongueTwisters}/>
            <Route path={`${Tongue_twisters1}`} component={TongueTwisters}/>
            <Route path={`${Pagoda_in_pictures}`} component={PagodaInPictures}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeAssistant)}>
            <Route path={`${HOME_ASSISTANT_URL}`} component={HomeAssistant}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeMaster)}>
            <Route path={`${HOME_MASTER_URL}`} component={HomeMaster}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initForum)}>
            <Route path={`${FORUM_URL}`} component={Forum}/>
          </Route>

          <Route path={`${OTHERS_URL}`} component={Other}/>

        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
