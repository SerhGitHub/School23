import React from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

class BaseComponent extends React.Component {

  resetMinimumHeight() {
    const windowHeight = $(window).height();
    const additionalSpacing = windowHeight / 2;
    const maxHeightForThisWindow =  windowHeight - additionalSpacing;
    const scrollablePart = $('.central-scrollable-area');
    scrollablePart.css('overflow-y', 'auto');
    scrollablePart.css('overflow-x', 'hidden');
    scrollablePart.css('height', maxHeightForThisWindow);
  }

  componentDidMount() {
    this.resetMinimumHeight();
    window.addEventListener('resize', this.resetMinimumHeight);
    $(window).on('recalculateMainPanel', () => {
      this.resetMinimumHeight();
    });
  }

  componentDidUpdate() {
    this.resetMinimumHeight();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetMinimumHeight);
    $(window).off('recalculateMainPanel');
  }

  render() {
    const {columnClass} = this.props;
    return (
      <section className='content' style={{padding: '0px'}}>
        <div className='row' style={{padding: '0px'}}>
          <div className={columnClass} style={{padding: '0px'}}>{this.props.children}</div>
        </div>
      </section>
    );
  }
}

BaseComponent.propTypes = {
  columnClass: PropTypes.string.isRequired
};

export default BaseComponent;

