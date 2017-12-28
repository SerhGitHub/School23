import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route} from 'react-router';

import RoutingService from './services/routing.service';

import MainComponent from './components/main/MainComponent';
import AboutProjectComponent from './components/main/AboutProjectComponent';
import KindergartenToSchool from './components/obvious/KindergartenToSchool';
import FirstFrom2016 from './components/obvious/FirstFrom2016';
import ExperimentalWork from './components/obvious/ExperimentalWork';
import Continuity from './components/obvious/Continuity';
import HowEasyLean from './components/obvious/HowEasyLean';
import Diligence from './components/obvious/Diligence';
import InterestInReading from './components/obvious/InterestInReading';
import LookAtFirstFrom from './components/obvious/LookAtFirstFrom';
import Emotionally from './components/psychologist/Emotionally';
import Obvious from './components/obvious/Obvious';
import Intellectually from './components/psychologist/Intellectually';
import Socially from './components/psychologist/Socially';
import DoParentsReadyForSchool from './components/psychologist/DoParentsReadyForSchool';
import Personally from './components/psychologist/Personally';
import Psychologically from './components/psychologist/Psychologically';
import TestsForParents from './components/psychologist/TestsForParents';
import Psychologist from './components/psychologist/Psychologist';

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
            <Route path={'/aboutProject'} component={AboutProjectComponent}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initObvious)}>
            <Route path={'/obvious'} component={Obvious}/>
            <Route path={'/kindergartenToSchool'} component={KindergartenToSchool}/>
            <Route path={'/interestInReading'} component={InterestInReading}/>
            <Route path={'/diligence'} component={Diligence}/>
            <Route path={'/lookAtFirstFrom'} component={LookAtFirstFrom}/>
            <Route path={'/firstFrom2016'} component={FirstFrom2016}/>
            <Route path={'/howEasyLean'} component={HowEasyLean}/>
            <Route path={'/continuity'} component={Continuity}/>
            <Route path={'/experimentalWork'} component={ExperimentalWork}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initPsychologist)}>
            <Route path={'/psychologist'} component={Psychologist}/>
            <Route path={'/doParentsReadyForSchool'} component={DoParentsReadyForSchool}/>
            <Route path={'/testsForParents'} component={TestsForParents}/>
            <Route path={'/psychologically'} component={Psychologically}/>
            <Route path={'/socially'} component={Socially}/>
            <Route path={'/intellectually'} component={Intellectually}/>
            <Route path={'/personally'} component={Personally}/>
            <Route path={'/emotionally'} component={Emotionally}/>
          </Route>

        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
