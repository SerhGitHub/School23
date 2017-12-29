import React from 'react';
import { Link } from 'react-router';

import RootStore from '../stores/root.store';

import {
  OBVIUS_ID,
  MAIN_ID,
  PSYCHOLOGICALLY_ID,
} from '../constants/constants';

const MENU = [
  {
    id: MAIN_ID,
    isGroup: true,
    name: 'Главная',
    url: '/',
    children: [
      {
        id: '1_1',
        name: 'О проекте',
        url: '/aboutProject'
      },
      {
        id: '1_2',
        name: 'О нас',
        url: '/'
      },
    ]
  },
  {
    id: OBVIUS_ID,
    isGroup: true,
    name: 'Очевидное-невероятное',
    url: '/obvious',
    children: [
      {
        id: '2_1',
        name: 'Из сада в школу',
        fullName: 'Из сада в школу (модель выпускника детского сада)',
        url: '/kindergartenToSchool'
      },
      {
        id: '2_2',
        name: 'Интерес к чтению',
        fullName: 'Роль семьи в формировании интереса детей к чтению',
        url: 'interestInReading'
      },
      {
        id: '2_3',
        name: 'Трудолюбие',
        fullName: 'Роль семьи в формировании трудолюбия',
        url: 'diligence'
      },
      {
        id: '2_4',
        name: 'Взгляд на первоклассника',
        fullName: 'Первоклассник: взгляд родителей и педагогов',
        url: 'lookAtFirstFrom'
      },
      {
        id: '2_5',
        name: 'Первоклассник - 2016',
        fullName: 'Первоклассник - 2016',
        url: 'firstFrom2016'
      },
      {
        id: '2_6',
        name: 'Каб было лягчэй вучыцца',
        fullName: 'Каб было лягчэй вучыцца',
        url: 'howEasyLean'
      },
      {
        id: '2_7',
        name: 'Преемственность',
        fullName: 'Организация работы по преемственности дошкольного и I ступени общего среднего образования',
        url: 'continuity'
      },
      {
        id: '2_8',
        name: 'Экспериментальная работа',
        fullName: 'Результаты участия в экспериментальной работе',
        url: 'experimentalWork'
      },
    ]
  },
  {
    id: PSYCHOLOGICALLY_ID,
    isGroup: true,
    name: 'Психолог',
    url: '/psychologist',
    children: [
      {
        id: '3_1',
        name: 'Готовы ли родители к школе',
        fullName: 'Готовы ли родители к школе',
        url: 'doParentsReadyForSchool'
      },
      {
        id: '3_2',
        name: 'Тесты для родителей',
        fullName: 'Тесты для родителей',
        url: 'testsForParents'
      },
      {
        id: '3_3',
        isGroup: true,
        name: 'Готов ли к школе?',
        fullName: 'Готов ли ваш ребёнок',
        children: [
          {
            id: '3_3_1',
            name: 'Психологически',
            fullName: 'Психологическая готовность к школе',
            url: 'psychologically'
          },
          {
            id: '3_3_2',
            name: 'Интеллектуально',
            fullName: 'Интеллектуальная готовность',
            url: 'intellectually',
          },
          {
            id: '3_3_3',
            name: 'Социально',
            fullName: 'Социальная готовность',
            url: '/socially'
          },
          {
            id: '3_3_4',
            name: 'Личностно',
            fullName: 'Личностная готовность',
            url: '/personally',
          },
          {
            id: '3_3_5',
            name: 'Эмоционально-волевая',
            fullName: 'Эмоционально-волевая готовность',
            url: '/emotionally',
          },
        ]
      },
    ]
  },
  /* {
   id: '4',
   isGroup: true,
   name: 'Доктор',
   children: [
   {
   id: '1',
   name: 'Физическая готовность'
   },
   ]
   },
   {
   id: '5',
   isGroup: true,
   name: 'Репетитор',
   children: [
   {
   id: '1',
   name: 'Мастерим из бумаги',
   fullName: 'Мастерим из бумаги',
   },
   {
   id: '2',
   name: 'Поделки из природного материалы',
   fullName: 'Поделки из природного материалы'
   },
   {
   id: '3',
   name: 'Глина, пластилин, ...',
   fullName: 'Глина, пластилин, моделин, соленое тесто'
   },
   {
   id: '4',
   name: 'Юные художники',
   fullName: 'Юные художники'
   },
   {
   id: '5',
   name: 'Расширяем кругозор >',
   fullName: 'Расширяем кругозор >'
   },
   {
   id: '6',
   name: 'В мире математики >',
   fullName: 'В мире математики >'
   },
   {
   id: '8',
   name: 'Учимся красиво говорить >',
   fullName: 'Учимся красиво говорить >'
   },
   ]
   },
   {
   id: '6',
   isGroup: true,
   name: 'Помощник',
   children: [
   {
   id: '1',
   name: 'Помощь по дому'
   },
   {
   id: '2',
   name: 'Выращивание растений'
   },
   {
   id: '3',
   name: 'Уход за домашними питомцами'
   },
   {
   id: '4',
   name: 'Приготовление простых блюд'
   },
   {
   id: '5',
   name: 'Мастерим с папой'
   },
   ]
   },
   {
   id: '7',
   isGroup: true,
   name: 'Мастер',
   children: [
   {
   id: '1',
   name: 'Мастерим из бумаги'
   },
   {
   id: '2',
   name: 'Поделки из природного материалы'
   },
   {
   id: '3',
   name: 'Глина, пластилин, ...',
   fullName: 'Глина, пластилин, моделин, соленое тесто',
   },
   {
   id: '4',
   name: 'Юные художники'
   },
   ]
   },
   {
   id: '8',
   isGroup: true,
   name: 'Форум',
   children: [
   {
   id: '1',
   isGroup: true,
   isLeftPosition: true,
   name: 'Современный первоклассник',
   children: [
   {
   id: '1',
   name: 'Глазами учителей'
   },
   {
   id: '2',
   name: 'Глазами родителей'
   },
   ]
   },
   {
   id: '2',
   name: 'Современный родитель',
   isGroup: true,
   children: [
   {
   id: '1',
   name: 'Глазами учителей'
   },
   {
   id: '2',
   name: 'Глазами родителей'
   },
   ]
   },
   ]
   },*/
];

class RootComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  isActive(item) {
    return (item === RootStore.getSelectedRootMenuItem());
  }

  getCurrentState() {
    return {
      menu: MENU
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    RootStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    RootStore.removeChangeListener(this.onChange);
  }

  getMenuProperties(){
    return MENU;
  }

  getChildMenu(item, isClickOnDropdown){
    return (
      <li key={item.id} className='nav-item dropdown'>
        {
          isClickOnDropdown ?
            <a className={'nav-link dropdown-toggle'} data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' href='#'>{item.name}</a>
            :
            <a className={'nav-link dropdown-toggle'} href='#'>{item.name}</a>
        }
        <div className='dropdown-menu' x-placement='bottom-start' style={{position: 'absolute', transform: 'translate3d(235px, 0px, 0px)', top: '0px', left: '0px', willChange: 'transform', border: 'none'}}>
          {
            item.children && item.children.length > 0 ? item.children.map(child => {
                return <Link key={child.id} className='dropdown-item nav-link' to={child.url ? child.url : '/'}>{child.name}</Link>
              }) : null
          }
        </div>
      </li>
    );
  }

  getNavigationItems(isClickOnDropdown){
    const menu = this.getMenuProperties();
    return menu && menu.length > 0 ? menu.map(item => {
      return (
        <li key={item.id} className='nav-item dropdown'>
          {
            isClickOnDropdown ?
              <a className={`nav-link${this.isActive(item.id) ? ' active' : ''} dropdown-toggle`} data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' href='#' style={{textTransform: 'uppercase', textAlign: 'left'}}>{item.name}</a>
              :
              <a className={`nav-link${this.isActive(item.id) ? ' active' : ''} dropdown-toggle`} href='#' style={{textTransform: 'uppercase', textAlign: 'left'}}>{item.name}</a>
          }
          <div className='dropdown-menu' x-placement='bottom-start' style={{position: 'absolute', transform: 'translate3d(0px, 24px, 0px)', top: '0px', left: '0px', willChange: 'transform', border: 'none', width: '240px'}}>
            {
              item.children && item.children.length > 0 ? item.children.map(child => {
                  return child.isGroup ?
                    this.getChildMenu(child, isClickOnDropdown)
                    : <Link key={child.id} className='dropdown-item nav-link' to={child.url ? child.url : '/'}>{child.name}</Link>
                }) : null
            }
          </div>
        </li>
      );
      }) : null;
  }

  openChildrenInSmallNav(id){
    let {menu} = this.state;
    let index = 0;
    let isFound = false;
    while (index < menu.length && !isFound){
      if(menu[index].id === id){
        menu[index].showChildren = !menu[index].showChildren;
        isFound = true;
      } else {
        if(menu[index].isGroup){
          menu[index].children.forEach((item, itemIn) => {
            if(item.id === id){
              menu[index].children[itemIn].showChildren = !menu[index].children[itemIn].showChildren;
              isFound = true;
            }
          })
        }
      }
      index++;
    }
    this.setState(this.state);
  }

  getSmallMenu(menu, paddingLeft){
    return menu.map(item => {
      return (
        <div className={'smallNavItem'}>
          <div className={'sm-nav-link'} style={{paddingLeft: `${paddingLeft}px`}} onClick={this.openChildrenInSmallNav.bind(this, item.id)}>
            {
              item.isGroup ?
                `${item.name} >`
              :
                <Link style={{color: 'white'}} key={item.id} to={item.url ? item.url : '/'}>{item.name}</Link>
            }

          </div>
          {
            item.isGroup && item.showChildren ?
              this.getSmallMenu(item.children, paddingLeft + 5)
              : null
          }
        </div>
      );
    });
  }

  render() {
    const {menu} = this.state;
    const navigationItems = this.getNavigationItems();
    const smallNavigationItems = this.getSmallMenu(menu, 0);
    return (
      <div style={{textAlign: '-webkit-center', marginTop: '20px'}}>
        <div style={{width: '80%', maxWidth: '1280px'}}>
          <nav className='navbar navbar-expand-sm navbar-dark bg-primary' style={{borderRadius: '10px', fontSize: '13px'}}>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor02' aria-controls='navbarColor02' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav mr-auto'>
                {navigationItems}
              </ul>
            </div>
            <div className='navbar-collapse collapse' id='navbarColor02' style={{textAlign: 'left'}}>
              <ul className='navbar-nav mr-auto other-nav'>
                {smallNavigationItems}
              </ul>
            </div>
          </nav>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default RootComponent;
