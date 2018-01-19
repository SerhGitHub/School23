import React from 'react';
import PropTypes from 'prop-types';

class ImagesBox extends React.Component {

  getImages(){
    const {images, path} = this.props;
    return images.map(img => {
      return <img src={`${path}/${img}`} width={'100%'} />
    });
  }

  render() {
    const images = this.getImages();
    return (
      <div>
        {images}
      </div>
    );
  }
}

ImagesBox.propTypes = {
  images: PropTypes.array,
  path: PropTypes.array,
};

export default ImagesBox;
