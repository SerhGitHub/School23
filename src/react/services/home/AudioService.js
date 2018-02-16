import AudioAction from '../../actions/home/audio.action';

export default {

  setUrl(data) {
    AudioAction.setUrl(data);
  },

  cleanUrl() {
    AudioAction.cleanUrl();
  },
}


