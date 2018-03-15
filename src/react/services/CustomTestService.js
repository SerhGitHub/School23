import CustomTestAction from '../actions/custom-test.action';

export default {
  setTest(data) {
    CustomTestAction.setTest(data);
  },
  setAnswerInQuestion(id, isTrue) {
    CustomTestAction.setAnswerInQuestion(id, isTrue);
  },
  setQuestion(question) {
    CustomTestAction.setQuestion(question);
  }
}


