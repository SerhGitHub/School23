import React from 'react';
import PropTypes from 'prop-types';

import CrudButton from '../../components/shared/CrudButton';

import {
  TAB_CONTENT_SETTINGS,
  LINKS,
  LABEL_FIELD,
  ICON_FIELD,
  WIDTH_FIELD,
  HEIGHT_FIELD,
  BACKGROUND_FIELD
} from '../../../react/constants/constants';

class BlockContent extends React.Component {

  getLink(link){
    return (
      <span>
        <CrudButton isLink={true} label={link[LABEL_FIELD]} iconClassName={`fa fa-${link[ICON_FIELD]}`}/>
        <br/>
      </span>
    );
  }

  render() {
    const {activeTab} = this.props;
    const contentSettings = TAB_CONTENT_SETTINGS[activeTab];
    const links = contentSettings[LINKS].map((setting) => {
      return this.getLink(setting);
    });
    const content = (
      <span>
        <div>
          <img src={`img/blocks/${contentSettings[ICON_FIELD][LABEL_FIELD]}`} width={contentSettings[ICON_FIELD][WIDTH_FIELD]} height={contentSettings[ICON_FIELD][HEIGHT_FIELD]}/>
        </div>
        <label>
          {contentSettings[LABEL_FIELD]}
        </label>
        {links}
      </span>
    );
    return (
      <div className='block-content' style={{background: contentSettings[BACKGROUND_FIELD]}}>
        {content}
      </div>
    );
  }
}

BlockContent.propTypes = {
  activeTab: PropTypes.string,
  label: PropTypes.string,
  questions: PropTypes.array
};

export default BlockContent;