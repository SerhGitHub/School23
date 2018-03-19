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
  },
  {
    id: '2',
    link: `/${SOUNDS_LETTERS}`,
    name: 'Развитие речи',
  },
  {
    id: '3',
    link: `/${TALK_IN_BELARUSIAN}`,
    name: 'Овладение родным языком',
  },
  {
    id: '4',
    link: `/${WORLD_OF_MATHEMATIC}`,
    name: 'Формирование математических представлений',
  },
  {
    id: '5',
    link: `/${WORLD}`,
    name: 'Знакомство с искусством',
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
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <div className='card text-white bg-primary mb-3 main-content'>
        <div className='card-body' style={style}>
          <h4 className='card-title'>ШКОЛА для будущих первоклассников и классных их родителей «ЗОЛОТОЙ КЛЮЧИК».</h4>
          <img src={'key.jpg'} style={{width: '100%'}}/>

          {linksData.map(link => {
            return (
              <Link key={link.id} to={link.link}>
                <div style={{margin: '10px', fontSize: '28px', display: 'inline-block', padding: '15px', backgroundImage: `url(${'tree.png'})`, borderRadius: '20px'}}>
                  <span style={{color: 'white', fontSize: '28px', fontWeight: 'bolder', textShadow: `${defaultColor} 0 0px 8px`}}>{link.name}</span>
                </div>
              </Link>
            )
          })}
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
