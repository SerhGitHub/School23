import AppDispatcher from '../../dispatcher/Dispatcher';

import {
  CLEAN_VIDEO_URL,
  SET_VIDEO_URL,
} from '../../constants/constants';

let VideoAction = {
  setUrl(data) {
    AppDispatcher.handleViewAction({
      actionType: SET_VIDEO_URL,
      data: data
    });
  },
  cleanUrl() {
    AppDispatcher.handleViewAction({
      actionType: CLEAN_VIDEO_URL,
      data: true
    });
  },
};

export default VideoAction;
