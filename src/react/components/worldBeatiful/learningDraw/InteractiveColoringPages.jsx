import React from 'react';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import Jumbotron from '../../shared/Jumbotron';
import LinksTable from '../../shared/LinksTable';

class InteractiveColoringPages extends React.Component {

  getData(){
    return [
      {
        id: '1',
        url: 'https://zakraski.ru',
        name: 'Раскраски онлайн',
        isOtherSiteLink: true
      },
      {
        id: '2',
        url: 'http://www.igraemsa.ru/igry-dlja-detej/online-igry-dlja-malyshej/detskie-raskraski',
        name: 'Раскраски для малышей',
        isOtherSiteLink: true
      },
      {
        id: '3',
        url: 'http://www.ras-kraski.ru/',
        name: 'Мир раскрасок',
        isOtherSiteLink: true
      },
      {
        id: '4',
        url: 'https://solnet.ee/kladoteka/raskraski/',
        name: 'Раскраски',
        isOtherSiteLink: true
      }
    ];
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

export default InteractiveColoringPages;
