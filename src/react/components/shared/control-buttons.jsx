import React from 'react';

class ControlButtonsComponent extends React.Component {
  render() {
    return (
      <section className='bottom-toolbar'>
        <div className='row'>{this.props.children}</div>
      </section>
    );
  }
}

ControlButtonsComponent.propTypes = {};

export default ControlButtonsComponent;
