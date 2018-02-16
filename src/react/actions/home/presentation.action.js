import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CLEAN_PRESENTATION_URL,
  SET_PRESENTATION_URL,
} from '../../constants/constants';

let PresentationAction = {
  setData(url, images, isVideo) {
    AppDispatcher.handleViewAction({
      actionType: SET_PRESENTATION_URL,
      data: {
        url: url,
        images: images,
        isVideo: isVideo
      }
    });
  },
  cleanUrl() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_PRESENTATION_URL,
      data: true
    });
  },
};

export default PresentationAction;
