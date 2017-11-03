import React from 'react';
import PropTypes from 'prop-types';

import CurrentTabStore from '../../stores/CurrentTabStore';

import Tab from './tab';
import TabList from './TabList';

class AllTabsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      currentTab : CurrentTabStore.getCurrentTab()
    }
  }

  componentDidMount() {
    CurrentTabStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CurrentTabStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  render() {
    const {currentTab} = this.state;
    return (
      <div>
        <TabList activeTab={currentTab}/>
        <div className='tab-content' style={{paddingTop: '10px'}}>
          <div>
            <Tab activeTab={currentTab}/>
          </div>
        </div>
      </div>
    );
  }
}

export default AllTabsView;
