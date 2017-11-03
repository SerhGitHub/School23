import React from 'react';
import PropTypes from 'prop-types';

class ControlButtonsGroupComponent extends React.Component {

  render() {
    const {items} = this.props;
    const actionList = items ? (
      <span className='bottom-toolbar-menu'>
        {
          items.map((item, sidebarIterator) => {
            return <div key={sidebarIterator} className={'buttons-style'}> {item} </div>
          })
        }
      </span>
    ) : null;
    return (
      <span>{actionList}</span>
    );
  }
}

ControlButtonsGroupComponent.propTypes = {
  items: PropTypes.array.isRequired
};

export default ControlButtonsGroupComponent;
