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
      mainImages: StyleStore.getAllMainimages(),
      currentImg: StyleStore.getBackgroundImage(),
      currentMainImg: StyleStore.getMainBackgroundImage(),
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

  changeImage = (e) => {
    const val = e.target.value;
    StyleService.setBackgroundImage(val);
  };

  changeMainImage = (e) => {
    const val = e.target.value;
    document.getElementById('html').style.backgroundImage = `url(${val})`;
    document.getElementById('mainBody').style.backgroundImage = `url(${val})`;
    StyleService.setMainBackgroundImage(val);
  };

  getImageOptions(){
    const {images, currentImg} = this.state;
    return images.map(img => {
      return (
        <option key={img.name} value={img.url} selected={currentImg === img.url}>{img.name}</option>
      );
    });
  }

  getMainImageOptions(){
    const {mainImages, currentMainImg} = this.state;
    return mainImages.map(img => {
      return (
        <option key={img.name} value={img.url} selected={currentMainImg === img.url}>{img.name}</option>
      );
    });
  }

  render() {
    const options = this.getImageOptions();
    const mainOptions = this.getMainImageOptions();
    const {defaultColor, backgroundImage} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    return (
      <div className='card bg-light mb-3' style={{color: 'white'}}>
        <div className='card-body' style={{padding: '0px', borderRadius: '5px', ...style}}>
          <div className='card-header card-box-shadow' style={style}>Установки для сайта</div>
          <div className='form-group' style={{marginTop: '15px', padding: '5px', ...style}}>
            <label for='background'>Фоны для блоков сайта</label>
            <select className='form-control' id='background' onChange={this.changeImage}>
              {options}
            </select>
          </div>
          <div className='form-group' style={{padding: '5px'}}>
            <label for='backgroundMain'>Фон сайта</label>
            <select className='form-control' id='backgroundMain' onChange={this.changeMainImage}>
              {mainOptions}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Style;
