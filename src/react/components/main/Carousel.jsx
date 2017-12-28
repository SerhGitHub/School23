import React from 'react';

class Carousel extends React.Component {

  getCaruselItems(){
    return [
      {
        id: '1',
        img: '1.jpg',
        title: 'Заголовок для первой картинке',
        alt: ''
      },
      {
        id: '2',
        img: '2.jpg',
        title: 'Заголовок для второй картинке',
        alt: ''
      },
      {
        id: '3',
        img: '3.jpg',
        title: 'Заголовок для третьей картинке',
        alt: ''
      },
    ];
  }

  render() {
    return (
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner' role='listbox' style={{display: 'inline-block'}}>
          {
            this.getCaruselItems().map((item, index) => {
              return (
                <div key={item.id} className={`carousel-item${index == 0 ? ' active' : ''}`}>
                  <img className='d-block' src={item.img} alt={item.alt}/>
                  <div className='caption'>
                    <div className='caption-title'>
                      {item.title}
                    </div>
                  </div>
                </div>
                );
            })
          }
        </div>
        <a className='carousel-control-prev' href='#carouselExampleIndicators' role='button' data-slide='prev'>
          <span className='carousel-control-prev-icon' aria-hidden='true'/>
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselExampleIndicators' role='button' data-slide='next'>
          <span className='carousel-control-next-icon' aria-hidden='true'/>
          <span className='sr-only'>Next</span>
        </a>
        <ol className='carousel-indicators'>
          <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active'/>
          <li data-target='#carouselExampleIndicators' data-slide-to='1'/>
          <li data-target='#carouselExampleIndicators' data-slide-to='2'/>
        </ol>
      </div>
    );
  }
}

export default Carousel;
