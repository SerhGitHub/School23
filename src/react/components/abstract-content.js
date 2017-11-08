import $ from 'jquery';
import React from 'react';

class AbstractContentComponent extends React.Component {

  resetMinimumHeight() {
    const verySmallValueToGetRidOfRightScroll = 23;
    $(this.wrapper).css('min-height', ($(window).height() - $('.main-header').outerHeight() - $('.main-footer').outerHeight() - verySmallValueToGetRidOfRightScroll));
  }

  componentDidMount() {
    this.resetMinimumHeight();
  }

  componentDidUpdate() {
    this.resetMinimumHeight();
  }

  render() {
    return (
      <div className='content-wrapper' ref={(wrapper) => {this.wrapper = wrapper;}} style={{background: 'url(img/background/children.jpg)'}}>
        {this.props.children}
      </div>
    );
  }
}

export default AbstractContentComponent;

