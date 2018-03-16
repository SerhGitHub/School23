import React from 'react';
import PropTypes from 'prop-types';
import { SketchPicker } from 'react-color';

import StyleStore from '../../stores/style/style.store';
import AuthStore from '../../stores/auth.store';
import ForumStore from '../../stores/forum.store';

import ForumService from '../../services/ForumService';

class Subject extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      user: AuthStore.getCustomUser(),
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      subject: ForumStore.getCurrentSubject()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    AuthStore.addChangeListener(this.onChange);
    StyleStore.addChangeListener(this.onChange);
    ForumStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    AuthStore.removeChangeListener(this.onChange);
    StyleStore.removeChangeListener(this.onChange);
    ForumStore.removeChangeListener(this.onChange);
  }

  getMainImageOptions(){
    const {mainImages, currentMainImg} = this.state;
    return mainImages.map(img => {
      return (
        <option key={img.name} value={img.url} selected={currentMainImg === img.url}>{img.name}</option>
      );
    });
  }

  back = () => {
    ForumService.setCurrentSubject(null);
  };

  render() {
    const {defaultColor, backgroundImage, subject, user} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const inputClassName = 'col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8';
    const labelClassName = 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4';
    return (
      <span>
        <div className='back-button' onClick={this.back}><img src='back.png' width={60}/></div>
        <h1>{subject.name}</h1>
        <div className='row'>
          <span className={labelClassName}>
            {user.role}
          </span>
          <span className={inputClassName}>
            {subject.text}
          </span>
        </div>
      </span>
    );
  }
}

export default Subject;
