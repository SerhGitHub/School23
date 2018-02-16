import React from 'react';
import PropTypes from 'prop-types';

class CustomCarousel extends React.Component {

  getCaruselItems(){
    const {images} = this.props;
    return images.map((img, index) => {
      return {
        id: `${index}`,
        img: img.link,
        alt: '',
      };
    });
  }

  render() {
    return (
      <div id='carouselExampleSlidesOnly' className='carousel slide' data-ride='carousel' data-interval='1000'>
        <div className='carousel-inner' style={{display: 'inline-block', borderRadius: '20px'}}>
          {
            this.getCaruselItems().map((item, index) => {
              return (
                <div key={item.id} className={`carousel-item${index === 0 ? ' active' : ''}`}>
                  <img className='d-block' src={item.img} alt={item.alt} style={{width: '100%', height: '100%'}}/>
                </div>
                );
            })
          }
        </div>
      </div>
    );
  }
}

CustomCarousel.propTypes = {
  images: PropTypes.array,
};

export default CustomCarousel;
