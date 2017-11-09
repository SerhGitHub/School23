import React from 'react';
import PropTypes from 'prop-types';

class BlockForVariantAnswer extends React.Component {

  onClick = () => {
    const {onClick} = this.props;
    onClick && onClick();
  };

  render() {
    const {sizeImg, url} = this.props;
    return (
      <div className={'variant-class'}>
        <img src={`${url}`} width={sizeImg.width} height={sizeImg.height}/>
      </div>
    );
  }
}

BlockForVariantAnswer.propTypes = {
  url: PropTypes.string,
  sizeImg: PropTypes.object
};

export default BlockForVariantAnswer;

