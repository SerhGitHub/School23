import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';

import StyleService from '../../services/style/StyleService';

class Style extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      images: StyleStore.getAllimages(),
      currentImg: StyleStore.getBackgroundImage(),
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

  changeImage = (e) => {
    StyleService.setBackgroundImage(e.target.value);
  };

  getImageOptions(){
    const {images, currentImg} = this.state;
    return images.map(img => {
      return (
        <option key={img.name} value={img.url} selected={currentImg === img.url}>{img.name}</option>
      );
    });
  }

  render() {
    const options = this.getImageOptions();
    return (
      <div className='card bg-light mb-3'>
        <div className='card-body' style={{padding: '0px'}}>
          <div className='card-header'>Установки для сайта</div>
          <div className='form-group' style={{padding: '5px'}}>
            <label for='background'>Фоны для сайта</label>
            <select className='form-control' id='background' onChange={this.changeImage}>
              {options}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Style;
