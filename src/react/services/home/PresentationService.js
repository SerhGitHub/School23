import PresentationAction from '../../actions/home/presentation.action';

export default {

  setData(url, images, isVideo) {
    PresentationAction.setData(url, images, isVideo);
  },

  cleanUrl() {
    PresentationAction.cleanUrl();
  },
}


