import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../../stores/style/style.store';
import PresentationStore from '../../../stores/home/presentation.store';

import PresentationService from '../../../services/home/PresentationService';

import AuthSuccess from '../../auth/AuthSuccess';
import RootComponent from '../../RootComponent';
import ContentAndUserInfo from '../../shared/ContentAndUserInfo';
import TableForPresentation from '../../shared/TableForPresentation';
import CustomCarousel from '../../shared/CustomCarousel';
import Jumbotron from '../../shared/Jumbotron';

class BasePresentationComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    PresentationService.cleanUrl();
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: PresentationStore.getUrl(),
      images: PresentationStore.getImages(),
      isVideo: PresentationStore.isVideo()
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    PresentationStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    PresentationStore.removeChangeListener(this.onChange);
  }

  back(){
    PresentationService.cleanUrl();
  }

  render() {
    const {data, title} = this.props;
    const {backgroundImage, defaultColor, images, isVideo, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            {
              url ? (
                    <div>
                      <div className='back-button' onClick={this.back.bind(this)}><img src='back.png' width={60}/></div>
                      {
                        isVideo ? (
                            <iframe frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media"
                                    title="YouTube video player" style={{minHeight: '500px', width: '100%'}}
                                    src={`https://www.youtube.com/embed/${url}?autoplay=1&enablejsapi=1&widgetid=3`}
                            />
                          ) : (
                            <span>
                              {/*<CustomCarousel images={images}/>*/}
                              <img src={images[0].link} style={{width: '100%'}}/>
                              <audio controls>
                                <source src={url}/>
                              </audio>
                            </span>
                          )
                      }
                    </div>
                  ) : (
                  <TableForPresentation ths={[title]} data={data}/>
                )
            }
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

BasePresentationComponent.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string
};

export default BasePresentationComponent;
