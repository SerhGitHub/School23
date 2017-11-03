/**
 * Created by siarhei.rudzevich on 11/3/2017.
 */
import NavigationAction from './Navigation';

import {
  DEVELOPMENT_TAB
} from '../constants/constants';

export default {
  initApplication() {
    NavigationAction.selectAnotherTab(DEVELOPMENT_TAB);
  }
};
