import React from 'react';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import Table from '../../shared/Table';

const ths = ['Школа общения для детей и взрослых', 'Искусство красноречия'];
const data = [
  {
    id: '1',
    values: [{name: ''}, {name: 'Устная речь', file: 'https://drive.google.com/file/d/1LKsZXIdcQ0hagYtGb_4VHbbjPVDDiHJ7/view?usp=sharing'}]
  },
  {
    id: '2',
    values: [{name: ''}, {name: 'Слушаем. Говорим', file: 'https://drive.google.com/file/d/1W439r4VEC-KFerdVzfATyB5j1t9YbKsi/view?usp=sharing'}]
  },
  {
    id: '3',
    values: [{name: ''}, {name: 'Эмоции и общение', file: 'https://drive.google.com/file/d/1ElKcVbM3q713CGx5L0pDQ0cmiRUhdX9_/view?usp=sharing'}]
  },
  {
    id: '4',
    values: [{name: ''}, {name: 'Эмоциональная окраска речи', file: 'https://drive.google.com/file/d/1xiC_qcTj1HLoiZcFRvKyKmqmKcW0mQjd/view?usp=sharing'}]
  },
  {
    id: '5',
    values: [{name: ''}, {name: 'Мимика и жесты', file: 'https://drive.google.com/file/d/1jeup5VFsCCTGcy-gVCXRx6fFSUEcduVm/view?usp=sharing'}]
  },
  {
    id: '6',
    values: [{name: ''}, {name: 'Просьба и отказ', file: 'https://drive.google.com/file/d/1pCF59AU0bvmgeSz8xob2GmJVZEWVkQk2/view?usp=sharing'}]
  },
  {
    id: '7',
    values: [{name: ''}, {name: 'Спор без ссоры', file: 'https://drive.google.com/file/d/1ikXeS8tbWgmZA7r1zrCIbl0TT9_BUHMJ/view?usp=sharing'}]
  },
  {
    id: '8',
    values: [{name: ''}, {name: 'Как принимать гостей', file: 'https://drive.google.com/file/d/1aD0ylO4mOus2bS27j-a8xeVaV3pwmLPp/view?usp=sharing'}]
  },
  {
    id: '9',
    values: [{name: ''}, {name: 'Как вести себя в гостях', file: 'https://drive.google.com/file/d/1f8wcNNc548u7T48UFBL9exkWGMwyk7Z1/view?usp=sharing'}]
  },
  {
    id: '10',
    values: [{name: ''}, {name: 'Как подружиться с незнакомыми ребятами', file: 'https://drive.google.com/file/d/1x-tZ1b-8wyEqQaMgKVmLNssi2zitPDOA/view?usp=sharing'}]
  },
  {
    id: '11',
    values: [{name: ''}, {name: 'Разговор по телефону', file: 'https://drive.google.com/file/d/1ZwY3CvttGpO4BCmEz997gd3W1avoKKgk/view?usp=sharing'}]
  },
];

class HomePsychologist extends React.Component {

  getTable(){
    return <Table ths={ths} data={data}/>;
  }

  render() {
    const table = this.getTable();
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron' style={{marginTop: '10px'}}>
            <div style={{textAlign: 'center'}}><h1>Список материалов из журнала «Рюкзачок».</h1></div>
            {table}
          </div>
          {/*<div className='jumbotron' style={{marginTop: '10px', padding: '0px', height: '400px'}}>
            <iframe style={{width: '100%', height: '100%'}} src={`http://docs.google.com/viewer?url=${'https://drive.google.com/file/d/1ZwY3CvttGpO4BCmEz997gd3W1avoKKgk/view'}&embedded=true`}/>
          </div> Нужно подумать как использовать google docs*/}
        </div>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

export default HomePsychologist;
