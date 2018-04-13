import React from 'react';
import AppDispatcher from '../dispatcher/Dispatcher';
import { Link } from 'react-router';

import BasicStore from './basic.store';

import {
  CLEAN_CURRENT_SUBJECT,
  SET_SUBJECT_ITEM,
  SET_SUBJECTS_ITEM,
  ADD_SUBJECT_ITEM,
  FIRST_GREDER_2016,
  FIRST_GREDER_PARENTS,
  ADD_NEW_COMMENT,
  SAVE_NEW_COMMENT
} from '../constants/constants';

let newComment;
let currentSubject;
let subjects = [
  {
    id: '1',
    name: 'Современный первоклассник',
    text: (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Как узнать своих будущих учеников? Этим вопросом задаются все учителя первых классов накануне учебного года. Можно встретиться за круглым столом с педагогами ближайших к школе учреждений дошкольного образования, выпускники   которых чаще всего поступают в учреждение общего среднего. А если ребята приходят из разных, в том числе и далеко расположенных дошкольных учреждений?
        <br/>{'     '}С некоторыми иследования можно ознакомится по ссылке:{' '}
        <Link to={`/${FIRST_GREDER_2016}`}>{'Первоклассник – 2016  ГУО «Средняя школа №23 г.Гродно»'}</Link>
        <br/>{'     '}Так же проводилось анкетирование результаты которого можно просмотреть по ссылке:{' '}
        <Link to={`/${FIRST_GREDER_PARENTS}`}>{'Первоклассник: взгляд родителей и педагогов'}</Link>
      </p>
    ),
    user: {name: 'Teacher', id: '1'},
    answers: [],
    views: 12,
    refresh: '15.03.2018, 20:44'
  },/*
  {
    id: '2',
    name: 'Как организовать рабочее место первоклассника дома',
    text: '',
    user: {name: 'Teacher', id: '1'},
    answers: [],
    views: 21,
    refresh: '19.03.2018, 11:30'
  },
  {
    id: '3',
    name: 'В каком возрасте начинать обучение',
    text: '',
    user: {name: 'Teacher', id: '1'},
    answers: [],
    views: 25,
    refresh: '17.03.2018, 14:23'
  },
  {
    id: '4',
    name: 'Отзывы',
    text: '',
    user: {name: 'Teacher', id: '1'},
    answers: [],
    views: 12,
    refresh: '16.03.2018, 18:32'
  },*/
];

function saveNewComment(topic){
  let index = 0;
  let isFound = false;
  while(index < subjects.length && !isFound){
    if(subjects[index].id === topic.id){
      const createDate = new Date();
      newComment.createDate = createDate;
      subjects[index].answers.push(newComment);
      isFound = true;
    }
    index++;
  }
  return subjects;
}

class ForumStore extends BasicStore {

  getCurrentSubject() {
    return currentSubject;
  }

  getSubjects() {
    return subjects;
  }

  getNewComment(){
    return newComment;
  }
}

let forumStoreInstance = new ForumStore();

AppDispatcher.register(function(payload) {
  const action = payload.action;
  switch(action.actionType) {
    case SET_SUBJECT_ITEM:
      currentSubject = action.data;
      forumStoreInstance.emitChange();
      break;
    case ADD_NEW_COMMENT:
      newComment = action.data;
      forumStoreInstance.emitChange();
      break;
    case SET_SUBJECTS_ITEM:
      subjects = action.data;
      forumStoreInstance.emitChange();
      break;
    case ADD_SUBJECT_ITEM:
      subjects.push(action.data);
      forumStoreInstance.emitChange();
      break;
    case SAVE_NEW_COMMENT:
      if(!!newComment && newComment !== '' ){
        subjects = saveNewComment(action.data);
        console.log('subjects', subjects);
      }
      forumStoreInstance.emitChange();
      break;
    case CLEAN_CURRENT_SUBJECT:
      currentSubject = null;
      newComment = null;
      forumStoreInstance.emitChange();
      break;
  }
  return true;
});

export default forumStoreInstance;



