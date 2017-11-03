/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */

import {
  EVENT_CHANGE
} from '../constants/constants';

import EventEmitter from 'events';

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
