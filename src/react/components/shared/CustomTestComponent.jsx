import React from 'react';
import PropTypes from 'prop-types';

import StyleStore from '../../stores/style/style.store';
import TestStore from '../../stores/home/test.store';
import CustomTestStore from '../../stores/custom-test.store';

import TestService from '../../services/home/TestService';
import CustomTestService from '../../services/CustomTestService';

import AuthSuccess from '../auth/AuthSuccess';
import RootComponent from '../RootComponent';
import ContentAndUserInfo from '../shared/ContentAndUserInfo';
import TableForCustomTest from '../shared/TableForCustomTest';
import Jumbotron from '../shared/Jumbotron';

class CustomTestComponent extends React.Component {

  constructor(props, context) {
    super(props, context);
    TestService.cleanUrl();
    this.state = this.getCurrentState();
  }

  getCurrentState() {
    return {
      defaultColor: StyleStore.getDefaultColor(),
      backgroundImage: StyleStore.getBackgroundImage(),
      url: TestStore.getUrl(),
      text: TestStore.getText(),
      currentTest: CustomTestStore.getCurrentTest(),
      currentQuestion: CustomTestStore.getCurrentQuestion(),
    };
  }

  onChange = () => {
    this.setState(this.getCurrentState());
  };

  componentDidMount() {
    StyleStore.addChangeListener(this.onChange);
    TestStore.addChangeListener(this.onChange);
    CustomTestStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    StyleStore.removeChangeListener(this.onChange);
    TestStore.removeChangeListener(this.onChange);
    CustomTestStore.removeChangeListener(this.onChange);
  }

  back = () => {
    CustomTestService.setTest(null);
  };

  setQuestion = (question) => {
    CustomTestService.setQuestion(question);
  };

  getQuestionsLinks(){
    const {currentTest} = this.state;
    return currentTest.questions.map((question, index) => {
      return (
        <div onClick={this.setQuestion.bind(this, question)} style={{color: 'blue', cursor: 'pointer'}}>
          <img src={'question.png'} width={30} height={30}/>
          {`Вопрос ${index + 1}`}
        </div>
      );
    });
  }

  setAnswer = (ans) => {
    CustomTestService.setAnswerInQuestion(ans.id, ans.isTrue);
  };

  getAnswers(question){
    return question.answers.map(ans => {
      return (
        <span style={{marginRight: '10px'}}><input type='radio' onChange={this.setAnswer.bind(this, ans)}/>{ans.name}</span>
      );
    });
  }

  render() {
    const {tests, isRightBack, title} = this.props;
    const {backgroundImage, currentTest, currentQuestion, defaultColor, url} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const textContent = currentTest.text ? <div style={{padding: '10px'}}>{currentTest.text}</div> : null;
    const inputClassName = 'col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8';
    const labelClassName = 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4';
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            {
              currentTest ? (
                  <div>
                    <div className='back-button' style={isRightBack ? {right: '10px'} : null} onClick={this.back}><img src='back.png' width={60}/></div>
                    <div className='row'>
                      <span className={labelClassName}>
                        {this.getQuestionsLinks()}
                      </span>
                      <span className={inputClassName}>
                        <label>{currentQuestion.name}</label>
                        {this.getAnswers(currentQuestion)}
                      </span>
                    </div>
                    {textContent}
                  </div>
                ) : (
                  <TableForCustomTest ths={[title]} data={tests}/>
                )
            }
          </Jumbotron>
        </div>
      </AuthSuccess>
    );
    return (
      <RootComponent>
        <ContentAndUserInfo content={content}/>
      </RootComponent>
    );
  }
}

CustomTestComponent.propTypes = {
  data: PropTypes.array,
  isRightBack: PropTypes.bool,
  tests: PropTypes.array,
  title: PropTypes.string
};

export default CustomTestComponent;
