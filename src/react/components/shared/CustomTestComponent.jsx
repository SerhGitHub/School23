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
    this.setState({...this.getCurrentState(), finish: null});
    CustomTestService.setQuestion(null);
    CustomTestService.setTest(null);
  };

  setQuestion = (question) => {
    CustomTestService.setQuestion(question);
  };

  getQuestionsLinks(){
    const {currentTest} = this.state;
    return currentTest.questions.map((question, index) => {
      return (
        <div onClick={this.setQuestion.bind(this, question)} className='question-menu' style={{cursor: 'pointer', fontSize: '13px'}}>
          <img src={'question.png'} width={20} height={20}/>
          {`Вопрос ${index + 1}`}
        </div>
      );
    });
  }

  setAnswer = (ans) => {
    CustomTestService.setAnswerInQuestion(ans.id, ans.isTrue);
  };

  getAnswers(test, question){
    return test.answers.map(ans => {
      const value = question.answer && question.answer === ans.id;
      return (
        <div style={{marginRight: '10px'}}><input type='radio' checked={value} onChange={this.setAnswer.bind(this, ans)}/>{ans.name}</div>
      );
    });
  }

  getButton(img, func, label, disabled){
    return (
      <button onClick={func} disabled={disabled} style={{backgroundColor: '#99bbe8', borderRadius: '5px'}}>
        <img src={img} width={20} height={20}/>{label}
      </button>
    );
  }

  setBeforQuestion = () => {
    CustomTestService.setBeforQuestion();
  };

  setNextQuestion = () => {
    CustomTestService.setNextQuestion();
  };

  finishTest = () => {
    const {currentTest} = this.state;
    let index = 0;
    let count = 0;
    while(index < currentTest.questions.length){
      if(currentTest.questions[index].answer === '1'){
        count++;
      }
      index++;
    }
    const result = `Набрано балов: ${count} из ${currentTest.questions.length}`;
    this.setState({...this.getCurrentState(), finish: result});
  };

  getButtons(){
    const {currentQuestion, currentTest} = this.state;
    const firstGroupClassName = 'col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8';
    const secondGroupClassName = 'col-xs-3 col-sm-3 col-md-3 col-lg-3 col-xl-3';
    const beforFunc = currentQuestion.id === '1' ? null : this.setBeforQuestion;
    const nextFunc = currentQuestion.id === `${currentTest.questions.length}` ? null : this.setNextQuestion;
    return (
      <div className='row'>
        <span className={firstGroupClassName} style={{textAlign: 'left'}}>
          {this.getButton('befor.png', beforFunc, ' Предыдущий', !beforFunc)}
          {this.getButton('next.png', nextFunc, ' Следующий', !nextFunc)}
        </span>
        <span className={secondGroupClassName} style={{textAlign: 'right'}}>
          {this.getButton('finish.png', this.finishTest, ' Закончить')}
        </span>
      </div>
    );
  }

  render() {
    const {tests, isRightBack, title} = this.props;
    const {backgroundImage, currentTest, currentQuestion, defaultColor, url, finish} = this.state;
    const style = backgroundImage ? {backgroundImage: `url(${backgroundImage})`} : {backgroundColor: defaultColor};
    const textContent = currentTest && currentTest.text ? <div style={{padding: '10px'}}>{currentTest.text}</div> : null;
    const inputClassName = 'col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8';
    const labelClassName = 'col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4';
    const content = (
      <AuthSuccess>
        <div>
          <Jumbotron style={style}>
            {
              currentTest ? (
                  <div>
                    <div className='back-button' style={isRightBack ? {right: '10px'} : null} onClick={this.back}><img src='back.png' width={40}/></div>
                    <h2>{currentTest.name}</h2>
                    {
                      finish ? (
                        <h4>{finish}</h4>
                        ) : (
                        <div className='row' style={{padding: '15px', color: 'black'}}>
                          <span className={labelClassName} style={{textAlign: 'left', maxWidth: '150px', border: '2px solid #99bbe8'}}>
                            {this.getQuestionsLinks()}
                          </span>
                          <span className={inputClassName} style={{textAlign: 'left', border: '2px solid #99bbe8'}}>
                            <div style={{fontWeight: 'bold'}}>{`Вопрос ${currentQuestion.id}`}</div>
                            <label>{currentQuestion.name}</label>
                            {this.getAnswers(currentTest, currentQuestion)}
                            {this.getButtons()}
                          </span>
                        </div>
                        )
                    }
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
