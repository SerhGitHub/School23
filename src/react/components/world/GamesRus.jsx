import React from 'react';
import { Link } from 'react-router';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import Jumbotron from '../shared/Jumbotron';
import LinksTable from '../shared/LinksTable';

import {MENU, WORLD, GAMES_RUS} from '../../constants/constants';

class GamesRus extends React.Component {

  getData(){
    let index = 0;
    let isFound = false;
    let data = [];
    while(index < MENU.length && !isFound){
      if(MENU[index].id === WORLD){
        let index_ = 0;
        while(index_ < MENU[index].children.length && !isFound){
          if(MENU[index].children[index_].id === GAMES_RUS){
            data = MENU[index].children[index_].children;
            isFound = true;
          }
          index_++;
        }
      }
      index++;
    }
    return data;
  }

  render() {
    const data = this.getData();
    const content = (
      <AuthSuccess>
        <Jumbotron>
          <div className='back-button' style={{right: '25px', paddingTop: '5px'}}>
            <Link to={`/${WORLD}`}><img src='back.png' width={60}/></Link>
          </div>
          <LinksTable data={data} ths={['Игры']}/>
        </Jumbotron>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

export default GamesRus;
