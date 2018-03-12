import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';

class FriendlyLinks extends React.Component {

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

  getLinks(){
    const {data} = this.props;
    return data.map((link, index) => {
      return (
        <p id={link.id}><a href={link.url} target='_blank' style={{color: 'white'}}>{index + 1}. {link.label}</a></p>
      );
    });
  }

  render() {
    const {data} = this.props;
    const links = data && data.length > 0 ? this.getLinks() : null;
    const {defaultColor, backgroundImage} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    return links ? (
      <div className='card bg-light mb-3' style={{color: 'white'}}>
        <div className='card-body' style={{padding: '0px', borderRadius: '5px', ...style}}>
          <div className='card-header card-box-shadow' style={style}>Полезные ссылки</div>
          <div style={{textAlign: 'left', paddingLeft: '5px', paddingRight: '5px'}}>{links}</div>
        </div>
      </div>
    ) : null;
  }
}

FriendlyLinks.propTypes = {
  data: PropTypes.array,
};

export default FriendlyLinks;
