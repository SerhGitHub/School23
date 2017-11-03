import React from 'react';
import PropTypes from 'prop-types';

import OperationStore from '../../stores/flux-obj-operation.store';
import Spinner from '../shared/spinner';

import TabContent from './tab-content/tab-content';
import {getCurrentObjects} from '../../utils/dto-functions';

import {
  BUTTONS_FIELD,
  DATA_SYSTEMS_ID,
  TAB_CONTENT_SETTINGS,
  VIEW_TAB_FIELD
} from '../../constants/constants';

class Tab extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = this.getCurrentState(props);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this.getCurrentState(nextProps));
  }

  componentDidMount() {
    OperationStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    OperationStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(this.getCurrentState(this.props));
  };

  getCurrentState(props) {
    const allData = OperationStore.getOperationObject(props.activeTab);
    const data = getCurrentObjects(allData, DATA_SYSTEMS_ID);
    return {
      data: data
    };
  }

  render() {
    const {activeTab} = this.props;
    const {data} = this.state;
    const viewTab = TAB_CONTENT_SETTINGS[activeTab][VIEW_TAB_FIELD];
    const buttons = TAB_CONTENT_SETTINGS[activeTab][BUTTONS_FIELD];
    return data ? (
      <div>
        <TabContent data={data} viewTab={viewTab} activeTab={activeTab} buttons={buttons}/>
      </div>
    ) : <Spinner />;
  }
}

Tab.propTypes = {
  activeTab: PropTypes.string
};

export default Tab;
