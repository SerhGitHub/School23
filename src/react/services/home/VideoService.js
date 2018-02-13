import VideoAction from '../../actions/home/video.action';

export default {

  setUrl(data) {
    VideoAction.setUrl(data);
  },

  cleanUrl() {
    VideoAction.cleanUrl();
  },
}


