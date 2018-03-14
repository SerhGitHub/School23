import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

class MoldPlasticine extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Предлагаем вам несколько схем, с помощью которых вы сможете сделать забавных животных из пластилина вместе с ребенком.
        <br/>{'     '}Веселая корова идеально подойдет для идей поделок на сельскохозяйственную тему.
        <br/><img src={'mold_1.png'} style={{width: width}}/>
        <br/>{'     '}Вы можете сделать целую ферму из пластилина вместе с ребёнком, изучая при этом всех домашних животных.
        <br/><img src={'mold_2.png'} style={{width: width}}/>
        <br/>{'     '}Мышка из пластилина делается намного проще, так как состоит из меньшего количества деталей.
        <br/><img src={'mold_3.png'} style={{width: width}}/>
        <br/>{'     '}Вместе с малышом попробуйте сделать лягушку. Может у него не получится сделать ей такую же мордочку как на фото, поэтому доверьте ребёнку изготовление шариков и полосок из пластилина, а поделку потом просто соберите самостоятельно.
        <br/><img src={'mold_4.png'} style={{width: width}}/>
        <br/>{'     '}Если у вас есть домашнее животное, то детям будет интересно сделать его макет из пластилина. Веселая собачка доставит немало радости вашему чаду.
        <br/><img src={'mold_5.png'} style={{width: width}}/>
        <br/>{'     '}Можно попробовать вылепить целый зоопарк, в котором будет жираф, ослик и даже гривастый лев.
        <br/><img src={'mold_6.png'} style={{width: width}}/>
        <br/>{'     '}Не будьте слишком требовательными к детским поделкам из пластилина, ведь их цель не только получить красивое изделие, но и оказать положительно влияние на развитие малыша.
        <br/><img src={'mold_7.png'} style={{width: width}}/>
        <br/>{'     '}Если пластилин смешался, ничего страшного. Из него получится оригинальный торт.
        <br/><img src={'mold_8.png'} style={{width: width}}/>
        <br/>{'     '}Лепка из пластилина поможет вашему ребёнку проявлять творческие способности. Со временем он научится делать более сложные фигуры своими руками.
        <br/><img src={'mold_9.png'} style={{width: width}}/>
        <br/>{'     '}Схема котика из пластилина
        <br/><img src={'mold_10.png'} style={{width: width}}/>
        <br/>{'     '}Поросёнок из пластилина
        <br/><img src={'mold_11.png'} style={{width: width}}/>
        <br/>{'     '}Лошадка из пластилина
        <br/><img src={'mold_12.png'} style={{width: width}}/>
        <br/>{'     '}Пластилиновый  ослик
        <br/><img src={'mold_13.png'} style={{width: width}}/>
        <br/>{'     '}Как слепить льва из пластилина

        <br/>{'     '}Источник: http://www.svoimi-rukamy.com/lepim_iz_plastiltna_s_detmi_poshagovo.html
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Лепим из пластилина'}/>
    );
  }
}

export default MoldPlasticine;
