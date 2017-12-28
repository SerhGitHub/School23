import EventEmitter from 'events';

import {
  EVENT_CHANGE
} from '../constants/constants';

class BasicStore extends EventEmitter {

  emitChange() {
    this.emit(EVENT_CHANGE);
  }

  addChangeListener(callback) {
    this.on(EVENT_CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(EVENT_CHANGE, callback);
  }
}

export default BasicStore



