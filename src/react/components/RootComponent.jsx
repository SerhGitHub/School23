import React from 'react';
import PropTypes from 'prop-types';
import LTEBox from './LTEBox.jsx'

import Footer from './pageElements/Footer';
import Header from './pageElements/Header';
import Sidebar from './pageElements/Sidebar';

import BlockContent from '../components/block/block-content';
import BlockQuestion from '../components/block/block-question';

import SubjectStore from '../stores/SubjectStore';

import {
  DEVELOPMENT_TAB,
  TEACHING_TAB,
  SCIENCE_TAB
} from '../constants/constants';
class RootComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getCurrentState();
  }

  componentDidMount() {
    SubjectStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SubjectStore.removeChangeListener(this.onChange);
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  getCurrentState() {
    return {
      subject: SubjectStore.getCurrentSubject()
    };
  }

  render() {
    const {subject} = this.state;
    const header = <Header />;
    const footer = <Footer />;
    const sidebar = <Sidebar />;
    const content = !subject.isActive ? (
      <span>
        <span style={{padding: '20px'}}>
          <BlockContent activeTab={DEVELOPMENT_TAB} subject={subject}/>
        </span>
        <span style={{padding: '20px'}}>
          <BlockContent activeTab={TEACHING_TAB} subject={subject}/>
        </span>
        <span style={{padding: '20px'}}>
          <BlockContent activeTab={SCIENCE_TAB} subject={subject}/>
        </span>
      </span>
      ) : <BlockQuestion subject={subject}/>;
    return (
      <span>
        <LTEBox topColor={'custom2'} width={11} header={header} footer={footer} sidebar={sidebar}>
          {content}
        </LTEBox>
      </span>
    );
  }
}

export default RootComponent;
