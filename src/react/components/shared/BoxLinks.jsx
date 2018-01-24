import React from 'react';
import PropTypes from 'prop-types';

import TestService from '../../services/home/TestService';

class BoxLinks extends React.Component {

  setUrl(item){
    console.log("item", item);
    TestService.setUrl(item.link);
  }

  getBoxLinks(){
    const {data} = this.props;
    return data.map(item => {
      const style = {backgroundImage: `url(${item.img})`};
      return (
        <div className='box-link' style={style} onClick={this.setUrl.bind(this, item)}>
          <b>{item.name}</b>
        </div>
      );
    });
  }

  render() {
    const links = this.getBoxLinks();
    return (
      <div>
        {links}
      </div>
    );
  }
}

BoxLinks.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string,
};

export default BoxLinks;
