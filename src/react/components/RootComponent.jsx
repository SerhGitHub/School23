import React from 'react';
import { Link } from 'react-router';

import RootStore from '../stores/root.store';
import StyleStore from '../stores/style/style.store';

import {
  MENU,
} from '../constants/constants';

const NAV_WIDTH = {width: '220px'};
const NAV_ITEM_STYLE = {textTransform: 'uppercase'};

class RootComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
    document.getElementById('html').style.backgroundImage = `url(mainBackgrounddefault.jpg)`;
  }

  isActive(item) {
    return (item === RootStore.getSelectedRootMenuItem());
  }

  getCurrentState() {
    return {
      menu: MENU,
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    RootStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    RootStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
  }

  getMenuProperties(){
    return MENU;
  }

  getChildMenu(item, style){
    return (
      <li key={item.id} className='nav-item dropdown' >
        <Link className={'nav-link dropdown-toggle'} to={item.url} style={{textTransform: 'uppercase'}}>{item.name}</Link>
        <div className='dropdown-menu navigation-items-child-dropdown-menu' x-placement='bottom-start' style={style}>
          {
            item.children && item.children.length > 0 ? item.children.map(child => {
                return <Link key={child.id} className='dropdown-item nav-link whiteSpace' to={child.url ? child.url : '/'} style={NAV_ITEM_STYLE}>{child.name}</Link>
              }) : null
          }
        </div>
      </li>
    );
  }

  getNavigationItems(style){
    const menu = this.getMenuProperties();
    let navStyle = {textTransform: 'uppercase', textAlign: 'left', color: 'white'};
    return menu && menu.length > 0 ? menu.map(item => {
      navStyle = this.isActive(item.id) ? {...navStyle, fontWeight: 'bolder', fontSize: '15px'} : {...navStyle, fontWeight: 'normal', fontSize: '14px'};
      return (
        <li key={item.id} className='nav-item dropdown'>
          <Link className={`nav-link${this.isActive(item.id) ? ' active' : ''} dropdown-toggle`} to={item.url} style={navStyle}>{item.name}</Link>
          <div className='dropdown-menu navigation-items-dropdown-menu' x-placement='bottom-start' style={style}>
            {
              item.children && item.children.length > 0 ? item.children.map(child => {
                  return child.isGroup ?
                    this.getChildMenu(child, style)
                    : <Link key={child.id} className='dropdown-item nav-link whiteSpace' to={child.url ? child.url : '/'} style={NAV_ITEM_STYLE}>{child.name}</Link>
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
      const {children, id, name, url} = item;
      return (
        <div className={'smallNavItem'} style={{fontSize: '11px', fontFamily: 'PT Sans'}}>
          <div className={'sm-nav-link'} style={{marginLeft: `${paddingLeft}px`}} onClick={this.openChildrenInSmallNav.bind(this, id)}>
            {
              item.isGroup ?
                <Link style={{color: 'white'}} key={id} to={url ? url : '/'}>{`${name} >`}</Link>
              :
                <Link style={{color: 'white'}} key={id} to={url ? url : '/'}>{name}</Link>
            }
          </div>
          {
            item.isGroup && item.showChildren ?
              this.getSmallMenu(children, paddingLeft + 10)
              : null
          }
        </div>
      );
    });
  }

  render() {
    const {menu, defaultColor, backgroundImage} = this.state;
    const navbarStyle = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const navigationItems = this.getNavigationItems(navbarStyle);
    const smallNavigationItems = this.getSmallMenu(menu, 0, navbarStyle);
    return (
      <div id='mainBody' style={{textAlign: '-webkit-center', backgroundImage: 'url(mainBackgrounddefault.jpg)'}}>
        <span style={{color: 'yellow', fontSize: '28px', fontWeight: 'bolder', textShadow: `${defaultColor} 0 0px 8px`}}>{'ШКОЛА для будущих первоклассников и классных их родителей «ЗОЛОТОЙ КЛЮЧИК»'}</span>
        <div style={{width: '98%'}}>
          <nav className='navbar navbar-expand-sm navbar-dark main-navbar' style={navbarStyle}>
            <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor02' aria-controls='navbarColor02' aria-expanded='false' aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'/>
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
