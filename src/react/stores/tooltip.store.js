import BasicStore from './BaseStore'

import tooltips from '../constants/tooltip-messages.hjson';

class TooltipStore extends BasicStore {

  getFromTab(tab, name) {
    if(tooltips && tooltips[tab]) {
      return tooltips[tab][name];
    }
    return null;
  }
}

let tooltipStoreInstance = new TooltipStore();
export default tooltipStoreInstance;
