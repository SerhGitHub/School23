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

  getEpigraph(main, auth){
    return (
      <p style={{textAlign: 'right', fontSize: '16px', padding: '0px', margin: '0px'}}>
        <i>
          {main}
          <br/>{auth}
        </i>
      </p>
    );
  }

  getCaruselItems(){
    return [
      {
        id: '1',
        img: '1.jpg',
        title: 'КАК ПОНЯТЬ СВОЕГО РЕБЕНКА?',
        epigraph: this.getEpigraph('Будьте сами и человеком, и младенцем, чтобы учить ребенка.', 'В. Одоевский'),
        alt: ''
      },
      {
        id: '2',
        img: '2.jpg',
        title: 'КАК РАЗВИВАТЬ РЕЧЬ?',
        epigraph: this.getEpigraph('Язык – это среда, в которой объединяется «Я» и мир.', 'Х. Гадамер'),
        alt: ''
      },
      {
        id: '3',
        img: '3.jpg',
        title: 'ЯК АВАЛОДАЦЬ РОДНАЙ МОВАЙ?',
        epigraph: this.getEpigraph('Трэба любіць, ведаць і шанаваць мову свайго народа і ўмець  дасканала   валодаць ёю.', 'Я. Колас'),
        alt: ''
      },
      {
        id: '4',
        img: '4.jpg',
        title: 'ЧТО ПРЕДСТАВЛЯЕТ СОБОЙ ОКРУЖАЮЩИЙ МИР?',
        epigraph: this.getEpigraph('Жизнь для ребенка - один огромный эксперимент.', 'А. Адлер'),
        alt: ''
      },
      /*{
        id: '5',
        img: '5.jpg',
        title: 'ЧТО ДЛЯ МЕНЯ МАТЕМАТИКА?',
        epigraph: this.getEpigraph('Математика - это дверь и ключ к наукам.', 'Р. Бэкон'),
        alt: ''
      },
      {
        id: '6',
        img: '6.jpg',
        title: 'ЧТО ТАКОЕ «МИР ПРЕКРАСНОГО»?',
        epigraph: this.getEpigraph('Дети должны жить в мире красоты, игры, сказки, музыки, рисунка, фантазии, творчества.', 'В. Сухомлинский'),
        alt: ''
      },
      {
        id: '7',
        img: '7.jpg',
        title: 'ЧТО ТАКОЕ «МИР ПРЕКРАСНОГО»?',
        epigraph: this.getEpigraph('Дети должны жить в мире красоты, игры, сказки, музыки, рисунка, фантазии, творчества.', 'В. Сухомлинский'),
        alt: ''
      }*/
    ];
  }

  render() {
    const {backgroundImage, defaultColor} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`, opacity: '0.4'} : {backgroundColor: defaultColor, opacity: '0.4'};
    return (
      <div id='carouselExampleIndicators' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner' role='listbox' style={{display: 'inline-block', borderRadius: '20px'}}>
          {
            this.getCaruselItems().map((item, index) => {
              return (
                <div key={item.id} className={`carousel-item${index == 0 ? ' active' : ''}`}>
                  <img className='d-block' src={item.img} alt={item.alt} style={{width: '100%'}}/>
                  <div className='caption' style={style}>
                    <div className='caption-title' style={{padding: '0px 0px 0px 10px', fontWeight: 'bolder'}}>
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
          <li data-target='#carouselExampleIndicators' data-slide-to='3'/>{/*
          <li data-target='#carouselExampleIndicators' data-slide-to='4'/>
          <li data-target='#carouselExampleIndicators' data-slide-to='5'/>
          <li data-target='#carouselExampleIndicators' data-slide-to='6'/>*/}
        </ol>
      </div>
    );
  }
}

export default Carousel;
