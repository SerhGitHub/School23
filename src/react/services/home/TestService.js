import TestAction from '../../actions/home/test.action';

export default {

  setUrl(data) {
    TestAction.setUrl(data);
  },

  setUrlForCatolog(data) {
    TestAction.setUrlForCatolog(data);
  },

  setText(data) {
    TestAction.setText(data);
  },

  cleanUrl() {
    TestAction.cleanUrl();
  },

  cleanUrlFromCatalog() {
    TestAction.cleanUrlFromCatalog();
  },
}


