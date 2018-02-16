import React from 'react';
import PropTypes from 'prop-types';

class FriendlyLinks extends React.Component {

  getLinks(){
    const {data} = this.props;
    return data.map((link, index) => {
      return (
        <p id={link.id}><a href={link.url}>{index + 1}. {link.label}</a></p>
      );
    });
  }

  render() {
    const {data} = this.props;
    const links = data && data.length > 0 ? this.getLinks() : null;
    return (
      <div className='card bg-light mb-3'>
        <div className='card-body' style={{padding: '0px'}}>
          <div className='card-header'>Полезные ссылки</div>
          <div style={{textAlign: 'left', paddingLeft: '5px', paddingRight: '5px'}}>{links}</div>
        </div>
      </div>
    );
  }
}

FriendlyLinks.propTypes = {
  data: PropTypes.array,
};

export default FriendlyLinks;
