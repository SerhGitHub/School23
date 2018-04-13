import React from 'react';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import Jumbotron from '../../shared/Jumbotron';
import LinksTable from '../../shared/LinksTable';

import {MENU, WORLD_BEAUTIFUL, LEANING_TO_SCULPT} from '../../../constants/constants';

class LearningToSculpt extends React.Component {

  getData(){
    let index = 0;
    let isFound = false;
    let data = [];
    while(index < MENU.length && !isFound){
      if(MENU[index].id === WORLD_BEAUTIFUL){
        let childIndex = 0;
        let childIsFound = false;
        while(childIndex < MENU[index].children.length && !childIsFound){
          if(MENU[index].children[childIndex].id === LEANING_TO_SCULPT){
            data = MENU[index].children[childIndex].children;
            childIsFound = true;
          }
          childIndex++;
        }
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
          <LinksTable data={data} ths={['Учимся лепить']}/>
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

export default LearningToSculpt;
