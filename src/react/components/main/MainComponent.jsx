import React from 'react';
import { Link } from 'react-router';

import StyleStore from '../../stores/style/style.store';

import RootComponent from '../RootComponent';
import Carousel from './Carousel';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';

import {FOR_PARENTS, SOUNDS_LETTERS, TALK_IN_BELARUSIAN, WORLD_OF_MATHEMATIC, WORLD, WORLD_BEAUTIFUL} from '../../constants/constants';

const linksData = [
  {
    id: '1',
    link: `/${FOR_PARENTS}`,
    name: 'Родители и дети',
    img: 'link1.png',
    width: '35%'
  },
  {
    id: '2',
    link: `/${SOUNDS_LETTERS}`,
    name: 'Развитие речи',
    img: 'link2.png',
    width: '35%'
  },
  {
    id: '3',
    link: `/${TALK_IN_BELARUSIAN}`,
    name: 'Овладение родным языком',
    img: 'link3.png',
    width: '55%'
  },
  {
    id: '4',
    link: `/${WORLD_OF_MATHEMATIC}`,
    name: 'Формирование математических представлений',
    img: 'link4.png',
    width: '70%'
  },
  {
    id: '5',
    link: `/${WORLD_BEAUTIFUL}`,
    name: 'Знакомство с искусством',
    img: 'link5.png',
    width: '45%'
  },
  {
    id: '6',
    link: `/${WORLD}`,
    name: 'Расширение кругозора',
    img: 'link6.png',
    width: '45%'
  },
];

class MainComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
  }

  render() {
    const {backgroundImage, defaultColor} = this.state;
    let style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor, };
    const content = (
      <div className='card text-white bg-primary mb-3 main-content'>
        <div className='card-body' style={style}>
          <div style={{textAlign: 'center'}}>
            <img src={'text2.png'} style={{width: '50%'}}/>
            <img src={'text3.png'} style={{width: '100%'}}/>
            <br />
            {linksData.map(link => {
              return (
                <Link key={link.id} to={link.link}>
                  <img src={link.img} className='main-img' style={{width: link.width}}/>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo carousel={<Carousel />} content={content}/>
      </RootComponent>
    );
  }
}

export default MainComponent;
