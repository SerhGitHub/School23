import React from 'react';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import Jumbotron from '../shared/Jumbotron';
import LinksTable from '../shared/LinksTable';

import {MENU, WORLD_BEAUTIFUL} from '../../constants/constants';

class WorldBeautiful extends React.Component {

  getData(){
    let index = 0;
    let isFound = false;
    let data = [];
    while(index < MENU.length && !isFound){
      if(MENU[index].id === WORLD_BEAUTIFUL){
        data = MENU[index].children;
        isFound = true;
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
          <LinksTable data={data} ths={['Меню']}/>;
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

export default WorldBeautiful;
