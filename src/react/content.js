import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route} from 'react-router';

import RoutingService from './services/routing.service';

import MainComponent from './components/main/MainComponent';
import AboutProjectComponent from './components/main/AboutProjectComponent';
import Other from './components/other/Other';

import HomePsychologist from './components/home/psychologist/HomePsychologist';

import {
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
  FORUM_URL
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
            <Route path={`/${FORMIROVANIE_POSICII_SHKOLNIKA_URL}`} component={Other}/>
            <Route path={`/${PRIVICHKA_URL}`} component={Other}/>
            <Route path={`/${EMOCIONALNAY_GOTOVNOCCT_URL}`} component={Other}/>
            <Route path={`/${MOTIVACIY_UCHENIKA_URL}`} component={Other}/>
            <Route path={`/${FORNIROVANIE_VOLEVIH_KACHEVSTV_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeDoctor)}>
            <Route path={`${HOME_DOCTOR_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeTutor)}>
            <Route path={`${HOME_TUTOR_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeAssistant)}>
            <Route path={`${HOME_ASSISTANT_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initHomeMaster)}>
            <Route path={`${HOME_MASTER_URL}`} component={Other}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initForum)}>
            <Route path={`${FORUM_URL}`} component={Other}/>
          </Route>

          <Route path={`${OTHERS_URL}`} component={Other}/>

        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
