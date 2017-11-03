import React from 'react';
import PropTypes from 'prop-types';

class TabContent extends React.Component {

  render() {
    return (
      <div>
        Здесь должно быть меню
      </div>
    );
  }
}

TabContent.propTypes = {
  activeTab: PropTypes.string,
  buttons: PropTypes.array,
  data: PropTypes.array,
  viewTab: PropTypes.array
};

export default TabContent;
