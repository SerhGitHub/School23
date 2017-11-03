import React from 'react';
import PropTypes from 'prop-types';
import LTEBox from './LTEBox.jsx'
import AllTabsView from './tabs/AllTabsView.jsx'

import Footer from './pageElements/Footer.jsx';
import Header from './pageElements/Header.jsx';
import Sidebar from './pageElements/Sidebar.jsx';

import InitializationActions from '../actions/Initialization.js';

class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    InitializationActions.initApplication()
  }

  render() {
    const header = <Header />;
    const footer = <Footer />;
    const sidebar = <Sidebar />;
    return (
      <LTEBox topColor={'custom2'} width={11} header={header} footer={footer} sidebar={sidebar}>
        <AllTabsView/>
      </LTEBox>
    );
  }
}

export default RootComponent;
