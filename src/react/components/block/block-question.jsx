import React from 'react';
import PropTypes from 'prop-types';

import SubjectAction from '../../actions/subject.action';

import CrudButton from '../../components/shared/CrudButton';
import LevelButton from '../../components/shared/LevelButton';
import BlockForVariantAnswer from '../../components/shared/blockForVariantAnswer';

import SubjectStore from '../../stores/SubjectStore';

import {
  TAB_CONTENT_SETTINGS,
  LINKS,
  LABEL_FIELD,
  ICON_FIELD,
  WIDTH_FIELD,
  HEIGHT_FIELD,
  BACKGROUND_FIELD,
  DESCRIPTION_FIELD,
  ID_FIELD,
  IMAGE_FIELD,
  VARIANTS_OF_ANSWERS,
  SIZE_FIELD
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
      currentQuestions: SubjectStore.getCurrentQuestions(),
      indexQuestion: SubjectStore.getIndexQuestion()
    };
  }

  getLabelQuestion(question){
    return (
      <div className='levels-label'>
        <label>{question[LABEL_FIELD]}</label>
      </div>
    );
  }

  getImgQuestion(question){
    const {subject} = this.props;
    return (
      <div className='levels-label'>
        <img src={`img/variants/${subject[ID_FIELD]}_${question[ID_FIELD]}/${question[IMAGE_FIELD]}`} width={question[SIZE_FIELD][WIDTH_FIELD]} height={question[SIZE_FIELD][HEIGHT_FIELD]}/>
      </div>
    );
  }

  getVariants(question){
    const {subject} = this.props;
    return question[VARIANTS_OF_ANSWERS].map((item) => {
      return (
        <div style={{padding: '10px', display: 'inline-block'}}>
          <BlockForVariantAnswer url={`img/variants/${subject[ID_FIELD]}_${question[ID_FIELD]}/${item[IMAGE_FIELD]}`} sizeImg={{width: '120', height: '120'}}/>
        </div>
      );
    });
  }

  getQuestionContent(){
    const {currentQuestions, indexQuestion} = this.state;
    let question;
    if (indexQuestion) {
      question = indexQuestion + 1 < currentQuestions.length ? currentQuestions[indexQuestion + 1] : null;
      SubjectAction.changeQuestion(indexQuestion + 1);
    } else {
      question = currentQuestions.length > 0 ? currentQuestions[0] : null;
      SubjectAction.changeQuestion(0);
    }
    const label = this.getLabelQuestion(question);
    const img = this.getImgQuestion(question);
    const variants = this.getVariants(question);
    return (
      <span>
        <button className={`header-content pull-left`} onClick={this.backSubject}>
          <img src='img/arrow.png' width={'50px'} height={'50px'}/>
        </button>
        {label}
        {img}
        <div style={{textAlign: 'center', paddingTop: '15px'}}>
          {variants}
        </div>
      </span>
    );
  }

  onClick = (questions) => {
    SubjectAction.initQuestion(questions);
  };

  backHome = () => {
    SubjectAction.deactivateSubject();
    SubjectAction.deactivateIndexQuestion();
    SubjectAction.deactivateQuestion();
  };

  backSubject = () => {
    SubjectAction.deactivateIndexQuestion();
    SubjectAction.deactivateQuestion();
  };

  render() {
    const {subject} = this.props;
    const {currentQuestions} = this.state;
    const content = currentQuestions ? this.getQuestionContent() : (
      <span>
        <button className={`header-content pull-left`} onClick={this.backHome}>
          <img src='img/arrow.png' width={'50px'} height={'50px'}/>
        </button>
        <div className='levels-label'>
          <label>{subject[DESCRIPTION_FIELD]}</label>
        </div>
        <span style={{padding: '20px'}}>
          <LevelButton label={'1 Уровень'} level={'1'} disabled={!(subject.level1 && subject.level1.length > 0)} onClick={this.onClick.bind(this, subject.level1)}/>
        </span>
        <span style={{padding: '20px'}}>
          <LevelButton label={'2 Уровень'} level={'2'} disabled={!(subject.level2 && subject.level2.length > 0)} onClick={this.onClick.bind(this, subject.level2)}/>
        </span>
        <span style={{padding: '20px'}}>
          <LevelButton label={'3 Уровень'} level={'3'} disabled={!(subject.level3 && subject.level3.length > 0)} onClick={this.onClick.bind(this, subject.level3)}/>
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
