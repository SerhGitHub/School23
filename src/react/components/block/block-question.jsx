import React from 'react';
import PropTypes from 'prop-types';

import CrudButton from '../../components/shared/CrudButton';
import LevelButton from '../../components/shared/LevelButton';

import SubjectStore from '../../stores/SubjectStore';

import {
  TAB_CONTENT_SETTINGS,
  LINKS,
  LABEL_FIELD,
  ICON_FIELD,
  WIDTH_FIELD,
  HEIGHT_FIELD,
  BACKGROUND_FIELD,
  DESCRIPTION_FIELD
} from '../../../react/constants/constants';

class BlockContent extends React.Component {
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
      currentQuestion: SubjectStore.getCurrentQuestions()
    };
  }

  render() {
    const {subject} = this.props;
    console.log("subject", subject);
    const {currentQuestion} = this.state;
    const content = currentQuestion ? null : (
      <span>
        <div className='levels-label'>
          <label>{subject[DESCRIPTION_FIELD]}</label>
        </div>
        <span style={{padding: '20px'}}>
          <LevelButton label={'1 Уровень'} level={'1'} disabled={!(subject.level1 && subject.level1.length > 0)} />
        </span>
        <span style={{padding: '20px'}}>
          <LevelButton label={'2 Уровень'} level={'2'} disabled={!(subject.level2 && subject.level2.length > 0)} />
        </span>
        <span style={{padding: '20px'}}>
          <LevelButton label={'3 Уровень'} level={'3'} disabled={!(subject.level3 && subject.level3.length > 0)} />
        </span>
      </span>
    );
    return (
      <div className='question-content' style={{background: 'url(img/background/cluds.png)'}}>
        {content}
      </div>
    );
  }
}

BlockContent.propTypes = {
  subject: PropTypes.object
};

export default BlockContent;
