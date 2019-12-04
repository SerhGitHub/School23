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
    user: {name: 'Teacher', id: '1', status: 23},
    answers: [
      {
        id: '1',
        user: {
          name: 'Любовь', status: 2
        },
        message: 'На самом  деле  современные дети не интересуются книжками, только гаджеты им подавай!'
      },
      {
        id: '3',
        user: {
          name: 'Ирина', status: 3
        },
        message: 'Родителям полезно такое знать. Некоторые задумаются, как надо проводить время со своими детьми. Спасибо за информацию.'
      },
      {
        id: '2',
        user: {
          name: 'Светлана', status: 6
        },
        message: 'Не надо осуждать современных детей из-за их любви к гаджетам и отсутствия интереса к книжкам. Неужели мы, их родители, так сильно от них в этом отличаемся? Просто время сейчас такое и это надо учитывать.   '
      },
    ],
    views: 12,
    refresh: '15.03.2018, 20:44'
  },
  {
    id: '2',
    name: 'Как организовать рабочее место первоклассника дома',
    text: (
      <p style={{textAlign: 'left'}}>
        {'     '}К началу учебного года родителям будущего школьника следует подумать не только о школьной форме, но и о том, как организовать рабочее место для своего первоклашки. Я считаю, что следующие рекомендации являются основополагающими. Например, комнату надо разделить на две зоны: игровую и  учебную. Рабочее место должно быть тихим и уютным, мебель – удобной!
      </p>
    ),
    user: {name: 'Teacher', id: '1', status: 23},
    answers: [
      {
        id: '1',
        user: {
          name: 'Алёна', status: 2
        },
        message: 'Из опыта советую: не покупайте стул на колёсиках! Никакой работы не будет: то сам катается, то стул виноват, что пишет плохо! :)'
      },
      {
        id: '2',
        user: {
          name: 'Катя', status: 2
        },
        message: 'Хотим купить  ученическую парту. В магазине посмотрели, что   регулируется по высоте и стол, и стул, и очень красочная мебель, что хорошо для детской комнаты.'
      },
      {
        id: '3',
        user: {
          name: 'Лена', status: 2
        },
        message: 'Мы решили купить обычный письменный стол использовать с ящиками. Пусть приучается сразу свои вещи содержать в порядке.'
      },
      {
        id: '4',
        user: {
          name: 'Мария', status: 2
        },
        message: 'Купили парту-трансформер. Ребёнку очень нравится, даже уроки сейчас на ней стал делать с большим удовольствием. Размеры регулируются, поэтому теоретически и после поступления в ВУЗ будет служить.'
      },
    ],
    views: 21,
    refresh: '19.03.2018, 11:30'
  },
   {
    id: '3',
    name: 'В каком возрасте начинать обучение',
    text: (
      <p style={{textAlign: 'left'}}>
        {'     '}Приобретение новых знаний — один из важнейших процессов в жизни человека, независимо от его возраста. Но если взрослый приобретает знания самостоятельно, то ребёнку без помощи просто не обойтись.

        Задача внимательных и любящих родителей — методично развивать интеллект вашего чадо, постоянно заинтересовывая его новыми разделами знаний. Но учить следует так, чтобы не утомлять ребёнка и не вызывать протест. Если мама и папа освоят эту премудрость, то ребенок будет проявлять всё больший и больший интерес к занятиям, а значит, вырастет разносторонней и гармонично развитой личностью.
        Здесь хотелось бы обсудить в каком возросте лучше начинать подготовку ребёнка к школе.
      </p>
    ),
    user: {name: 'Teacher', id: '1', status: 23},
    answers: [
      {
        id: '1',
        user: {
          name: 'Ольга', status: 2
        },
        message: 'Лучше с 6 лет походить на подготовку, привыкнуть к школе. Или в художественную школу походить этот год. Пусть ребёнок поймёт, что такое занятия, уроки. Конечно, каждый выбирает сам. Да и дети разные.'
      },
      {
        id: '2',
        user: {
          name: 'Юля', status: 2
        },
        message: 'Есть дети, которым в 6 лет в школу рано, есть те, которым в 7 поздно. Сходите к психологу вместе с ребёнком… А тесты и статьи на этом сайте! Прочитайте. Сравните со своим ребёнком и делайте вывод!'
      },
      {
        id: '3',
        user: {
          name: 'Светлана', status: 2
        },
        message: 'В мае сыну 6 лет. Вот думаем: пойдёт с 7 лет, плюс 11 лет школы. Закончит ровно в 18. Вот и решили с 6 лет школьниками стать.'
      },
      {
        id: '4',
        user: {
          name: 'Александра', status: 2
        },
        message: 'Всё индивидуально. Кому-то и в шесть лет в первом классе скучно… А отдавать ребёнка с 6 лет или даже с 5,5 лет в школу только потому, что ему ещё 11 лет учиться – это глупо!'
      },
      {
        id: '5',
        user: {
          name: 'Маша', status: 2
        },
        message: 'По-моему, всё-таки шесть лет – оптимальный возраст для начала обучения, несмотря на индивидуальные особенности развития конкретного ребёнка. '
      },
    ],
    views: 25,
    refresh: '17.03.2018, 14:23'
  },
  {
    id: '4',
    name: 'Отзывы',
    text: (
      <p style={{textAlign: 'left'}}>
        {'     '}Здесь можно оставлять отзывы. Хотелось бы увидеть ваши предложения, комментарии про материал, который был полезен. Что не совсем понравилось. Большое спасибо за ваш интерес к нашему сайту.
      </p>
    ),
    user: {name: 'Teacher', id: '1', status: 23},
    answers: [
      {
        id: '1',
        user: {
          name: 'Ольга', status: 2
        },
        message: 'Сайт полезный. Дочке очень понравились  игры. С удовольствием занимается, несмотря на то, что бывают и ошибки'
      },
      {
        id: '2',
        user: {
          name: 'Елена', status: 2
        },
        message: 'Нам в саду воспитательница сайт  подсказала. Зашли. Посмотрели. В восторге! Столько материала! А какие интересные игры. Мне самой интересно. Играю вместе с дочкой.'
      },
      {
        id: '3',
        user: {
          name: 'Юля', status: 2
        },
        message: 'Сайт спадабаўся. Знайшлі шмат карыснага для стварэння беларускамоўнага  асяроддзя падчас выхавання дзіця.'
      },
    ],
    views: 12,
    refresh: '16.03.2018, 18:32'
  }
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
