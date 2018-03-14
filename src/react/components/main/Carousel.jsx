import React from 'react';

import StyleStore from '../../stores/style/style.store';

class Carousel extends React.Component {

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

  getCaruselItems(){
    return [
      {
        id: '1',
        img: '1.jpg',
        title: 'КАК ПОНЯТЬ СВОЕГО РЕБЕНКА?',
        epigraph: (
          <p style={{textAlign: 'right'}}>
            <i>
              Будьте сами и человеком, и младенцем, чтобы учить ребенка.
              <br/>В. Одоевский
            </i>
          </p>
        ),
        alt: ''
      },
      {
        id: '2',
        img: '2.jpg',
        title: 'КАК РАЗВИВАТЬ РЕЧЬ?',
        epigraph: (
          <p style={{textAlign: 'right'}}>
            <i>
              Язык – это среда, в которой объединяется «Я» и мир.
              <br/>Х. Гадамер
            </i>
          </p>
        ),
        alt: ''
      },
      {
        id: '3',
        img: '3.jpg',
        title: 'ЯК АВАЛОДАЦЬ РОДНАЙ МОВАЙ?',
        epigraph: (
          <p style={{textAlign: 'right'}}>
            <i>
              Трэба любіць, ведаць і шанаваць мову свайго народа і ўмець  дасканала   валодаць ёю.
              <br/>Я. Колас
            </i>
          </p>
        ),
        alt: ''
      },
      {
        id: '4',
        img: '4.jpg',
        title: 'ЧТО ПРЕДСТАВЛЯЕТ СОБОЙ ОКРУЖАЮЩИЙ МИР?',
        epigraph: (
          <p style={{textAlign: 'right'}}>
            <i>
              Жизнь для ребенка - один огромный эксперимент.
              <br/>А. Адлер
            </i>
          </p>
        ),
        alt: ''
      },
    ];
  }

  render() {
    const {backgroundImage, defaultColor} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    return (
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner' role='listbox' style={{display: 'inline-block', borderRadius: '20px'}}>
          {
            this.getCaruselItems().map((item, index) => {
              return (
                <div key={item.id} className={`carousel-item${index == 0 ? ' active' : ''}`}>
                  <img className='d-block' src={item.img} alt={item.alt} style={{width: '100%', height: '100%'}}/>
                  <div className='caption' style={style}>
                    <div className='caption-title' style={{padding: '10px 8px 5px'}}>
                      {item.title}
                    </div>
                    <div className='caption-body'>
                      {item.epigraph}
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
