import React from 'react';
import PropTypes from 'prop-types';

import NavigationActions from '../../actions/Navigation';

import {
  LABEL_FIELD,
  TAB_FIELD,
  TABS
} from '../../constants/constants'

class TabList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onChange = () => {
    this.setState(this.state);
  };

  isActiveTab = (tab) => {
    return tab === this.props.activeTab;
  };

  getTabClassName(tab) {
    let className = this.isActiveTab(tab) ? 'active tab-item-active' : 'tab-item-disabled';
    className = `${className} cursor-pointer`;
    return className;
  }

  onTabSelection(tavName) {
    NavigationActions.selectAnotherTab(tavName)
  }

  getTabs(){
    return TABS.map((item) => {
      const tab = item[TAB_FIELD];
      const label = item[LABEL_FIELD];
      return (
        <li key={tab} className={this.getTabClassName(tab)} onClick={this.onTabSelection.bind(this,tab)}>
          {
            <a>{label}</a>
          }
        </li>
      );
    });
  }

  render() {
    const tabs = this.getTabs();
    return (
      <ul className='nav nav-tabs'>
        {tabs}
      </ul>
    );
  }
}

TabList.propTypes = {
  activeTab: PropTypes.string,
  params: PropTypes.object
};

export default TabList;
