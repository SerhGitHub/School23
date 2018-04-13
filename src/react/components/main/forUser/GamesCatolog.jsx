import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../../stores/style/style.store';
import AudioStore from '../../../stores/home/audio.store';

import AudioService from '../../../services/home/AudioService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import TableData from '../../shared/TableData';
import Jumbotron from '../../shared/Jumbotron';

const data = [
  {
    id: '1',
    values: [
      {
        name: 'Гласные и согласные'
      },
      {
        name: ''
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
        name: 'Гласные звуки'
      },
    ],
  },
];

class GamesCatolog extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    AudioStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    AudioStore.removeChangeListener(this.onChange);
  }

  back(){
    AudioService.cleanUrl();
  }

  render() {
    const {backgroundImage, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            <TableData data={data} ths={['Раздел «В мире звуков и букв»']} title={'Каталог игр'}/>
          </Jumbotron>
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

GamesCatolog.propTypes = {};

export default GamesCatolog;