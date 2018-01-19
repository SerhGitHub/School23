import React from 'react';

import PsychStore from '../../../stores/home/psych.store';
import StyleStore from '../../../stores/style/style.store';

import PsychService from '../../../services/home/PsychService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import Table from '../../shared/Table';
import ImagesBox from '../../shared/ImagesBox';

const ths = ['Школа общения для детей и взрослых', 'Искусство красноречия'];
const data = [
  {
    id: '1',
    values: [
      {
        name: ''
      },
      {
        name: 'Устная речь',
        file: 'https://drive.google.com/file/d/1LKsZXIdcQ0hagYtGb_4VHbbjPVDDiHJ7/view?usp=sharing',
        data: {
          path: 'UstnayRech',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        }
      },
    ],
  },
  {
    id: '2',
    values: [
      {
        name: ''
      },
      {
        name: 'Слушаем. Говорим',
        file: 'https://drive.google.com/file/d/1W439r4VEC-KFerdVzfATyB5j1t9YbKsi/view?usp=sharing',
        data: {
          path: 'SlushaemGovorim',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        },
      }
    ],
  },
  {
    id: '3',
    values: [
      {
        name: ''
      },
      {
        name: 'Эмоции и общение',
        file: 'https://drive.google.com/file/d/1ElKcVbM3q713CGx5L0pDQ0cmiRUhdX9_/view?usp=sharing',
        data: {
          path: 'EmociiObshenay',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        },
      },
    ],
  },
  {
    id: '4',
    values: [
      {
        name: ''
      },
      {
        name: 'Эмоциональная окраска речи',
        file: 'https://drive.google.com/file/d/1xiC_qcTj1HLoiZcFRvKyKmqmKcW0mQjd/view?usp=sharing',
        data: {
          path: 'Emocionalnay',
          images: ['0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg'],
        },
      },
    ],
  },
  {
    id: '5',
    values: [
      {
        name: ''
      },
      {
        name: 'Мимика и жесты',
        file: 'https://drive.google.com/file/d/1jeup5VFsCCTGcy-gVCXRx6fFSUEcduVm/view?usp=sharing',
        data: {
          path: 'MimikaJesti',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        },
      },
    ],
  },
  {
    id: '6',
    values: [
      {
        name: ''
      },
      {
        name: 'Просьба и отказ',
        file: 'https://drive.google.com/file/d/1pCF59AU0bvmgeSz8xob2GmJVZEWVkQk2/view?usp=sharing',
        data: {
          path: 'ProsbaOtkaz',
          images: ['0001.jpg', '0002.jpg'],
        },
      },
    ],
  },
  {
    id: '7',
    values: [
      {
        name: ''
      },
      {
        name: 'Спор без ссоры',
        file: 'https://drive.google.com/file/d/1ikXeS8tbWgmZA7r1zrCIbl0TT9_BUHMJ/view?usp=sharing',
        data: {
          path: 'SporBezSori',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        },
      },
    ],
  },
  {
    id: '8',
    values: [
      {
        name: ''
      },
      {
        name: 'Как принимать гостей',
        file: 'https://drive.google.com/file/d/1aD0ylO4mOus2bS27j-a8xeVaV3pwmLPp/view?usp=sharing',
        data: {
          path: 'KakPriminatGostei',
          images: ['0001.jpg', '0002.jpg'],
        },
      },
    ],
  },
  {
    id: '9',
    values: [
      {
        name: ''
      },
      {
        name: 'Как вести себя в гостях',
        file: 'https://drive.google.com/file/d/1f8wcNNc548u7T48UFBL9exkWGMwyk7Z1/view?usp=sharing',
        data: {
          path: 'KakVestiSebay',
          images: ['0001.jpg', '0002.jpg'],
        },
      },
    ],
  },
  {
    id: '10',
    values: [
      {
        name: ''
      },
      {
        name: 'Как подружиться с незнакомыми ребятами',
        file: 'https://drive.google.com/file/d/1x-tZ1b-8wyEqQaMgKVmLNssi2zitPDOA/view?usp=sharing',
        data: {
          path: 'KakPodrujitsay',
          images: ['0001.jpg', '0002.jpg', '0003.jpg'],
        },
      },
    ],
  },
  {
    id: '11',
    values: [
      {
        name: ''
      },
      {
        name: 'Разговор по телефону',
        file: 'https://drive.google.com/file/d/1ZwY3CvttGpO4BCmEz997gd3W1avoKKgk/view?usp=sharing',
        data: {
          path: 'RazgovorPoTelefonu',
          images: ['0001.jpg', '0002.jpg', '0003.jpg', '0004.jpg'],
        },
      },
    ],
  },
];

class HomePsychologist extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      path: PsychStore.getPath(),
      images: PsychStore.getImages(),
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    PsychStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    PsychStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
  }

  getTable(){
    return <Table ths={ths} data={data}/>;
  }

  backToTable(){
    PsychService.cleanImages();
  }

  render() {
    const {backgroundImage, defaultColor, path, images} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const table = this.getTable();
    const content = (
      <AuthSuccess>
        <div>
          <div className='jumbotron home-psych-main-content' style={style}>
            {
              path ? (
                <div>
                  <div className='back-button' onClick={this.backToTable.bind(this)}><img src='back.png' width={60}/></div>
                  <ImagesBox path={`pdfImg/${path}`} images={images}/>
                </div>
                ) :
                (
                  <span>
                    <div style={{textAlign: 'center'}}><h1>Список материалов из журнала «Рюкзачок».</h1></div>
                    {table}
                  </span>
                )
            }
          </div>
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
