import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Crafts_Of_Natural_Material} from '../../../constants/constants';

const BACK_LINK = Crafts_Of_Natural_Material;

class PistachkovoeTree extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Мастер класс очень простой и захватывающий для детей. Дети с удовольствием сделают эту поделку в детском саду или в школе на уроках труда.<br/><img src={'shell_screws_1.png'} style={{width: width}}/>
        <br/><img src={'pistach_tree_1.png'} style={{width: width}}/>
        <br/><img src={'pistach_tree_2.png'} style={{width: width}}/>
        <br/><img src={'pistach_tree_3.png'} style={{width: width}}/>
        <br/><img src={'pistach_tree_4.png'} style={{width: width}}/>
        <br/><img src={'pistach_tree_5.png'} style={{width: width}}/>
        <br/>{'     '}Источник:  http://ejka.ru/blog/priroda/4172.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Фисташковое дерево'} backLink={BACK_LINK}/>
    );
  }
}

export default PistachkovoeTree;
