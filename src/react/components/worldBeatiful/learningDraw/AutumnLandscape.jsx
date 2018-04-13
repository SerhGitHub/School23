import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {Learning_Draw} from '../../../constants/constants';

const BACK_LINK = Learning_Draw;

class AutumnLandscape extends React.Component {

  getData(){
    const width = '50%';
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Материалы:
        <br/>{'     '}Акварель
        <br/>{'     '}гуашь
        <br/>{'     '}ватман формата А-3.,
        <br/>{'     '}нейлоновые кисти под номерами 2, 3, 5.
        <br/><img src={'autumn_land_1.png'} style={{width: width}}/>
        <br/>{'     '}Последовательность выполнения:
        <br/>{'     '}Лист бумаги располагаем вертикально. Рисуем карандашом солнечный диск. Больше карандаш нам не понадобится.
        <br/><img src={'autumn_land_2.png'} style={{width: width}}/>
        <br/>{'     '}Фон нашей работы мы будем выполнять акварелью.
        <br/>{'     '}Крупными кольцами выполняем небо от солнечного диска к краям (постепенно увеличивая радиус и утемняя цвет). Цвета кругов последовательно – желтый (солнце), бледно-голубой, голубой, синий, изумрудно-зеленый.
        <br/><img src={'autumn_land_3.png'} style={{width: width}}/>
        <br/>{'     '}Размываем границы между "кольцами", делая переходы более плавными.
        <br/><img src={'autumn_land_4.png'} style={{width: width}}/>
        <br/><img src={'autumn_land_5.png'} style={{width: width}}/>
        <br/>{'     '}Далее мы будем работать гуашью.
        <br/>{'     '}Намечаем контуры рощи на дальнем берегу оранжевым цветом.
        <br/><img src={'autumn_land_6.png'} style={{width: width}}/>
        <br/>{'     '}Заполняем контуры рощи оранжевым цветом.
        <br/><img src={'autumn_land_7.png'} style={{width: width}}/>
        <br/>{'     '}Тонкой кистью рисуем стволы и основные ветви деревьев.
        <br/><img src={'autumn_land_8.png'} style={{width: width}}/>
        <br/>{'     '}Светло желтым цветом, достаточно крупными пятнами начинаем прорисовывать кроны деревьев.
        <br/><img src={'autumn_land_9.png'} style={{width: width}}/>
        <br/>{'     '}Добавляем красных и оранжевых листьев (тонкой кистью, мелкими пятнами) на кронах деревьев.
        <br/><img src={'autumn_land_10.png'} style={{width: width}}/>
        <br/>{'     '}Прорисовываем стволы и ветви крупных кустов на дальнем берегу.
        <br/><img src={'autumn_land_11.png'} style={{width: width}}/>
        <br/>{'     '}Добавляем листву на кустах, желтым и оранжевым цветами.
        <br/><img src={'autumn_land_12.png'} style={{width: width}}/>
        <br/>{'     '}Охристым цветам прорисовываем кромку дальнего берега.
        <br/><img src={'autumn_land_13.png'} style={{width: width}}/>
        <br/>{'     '}Длинными мазками - оранжевого цвета, рисуем отражение рощи в воде, попутно имитируя волны.
        <br/><img src={'autumn_land_14.png'} style={{width: width}}/>
        <br/>{'     '}Черно – коричневым цветом усиливаем границу между берегом и отражением в воде (мазки имитируют рябь на воде).
        <br/><img src={'autumn_land_15.png'} style={{width: width}}/>
        <br/>{'     '}Тонкой кистью, синим и голубым цветами, рисуем волны в воде (можно добавить легких оранжевых бликов).
        <br/><img src={'autumn_land_16.png'} style={{width: width}}/>
        <br/>{'     '}Коричневым цветом рисуем край берега на переднем плане.
        <br/><img src={'autumn_land_17.png'} style={{width: width}}/>
        <br/>{'     '}Черно – коричневым цветом рисуем стволы деревьев на переднем плане.
        <br/><img src={'autumn_land_18.png'} style={{width: width}}/>
        <br/>{'     '}Тонкой кистью рисуем основные ветви деревьев и мелкие веточки.
        <br/><img src={'autumn_land_19.png'} style={{width: width}}/>
        <br/>{'     '}Красным цветом рисуем листья.
        <br/><img src={'autumn_land_20.png'} style={{width: width}}/>
        <br/>{'     '}Добавляем немного желтых и бело-желтых листьев.
        <br/><img src={'autumn_land_21.png'} style={{width: width}}/>
        <br/>{'     '}Для создания цветового акцента добавляем совсем немного коричневых листьев.
        <br/><img src={'autumn_land_22.png'} style={{width: width}}/>
        <br/>{'     '}Прорисовываем камыши на кромке берега и в воде черно – коричневым цветом.
        <br/><img src={'autumn_land_23.png'} style={{width: width}}/>
        <br/>{'     '}Добавляем листья камышей на переднем плане более светлыми цветами - оранжевым, желтым и охристым.
        <br/><img src={'autumn_land_24.png'} style={{width: width}}/>
        <br/>{'     '}Наша работа завершена. Удачи вам в творчестве.
        <br/><img src={'autumn_land_25.png'} style={{width: width}}/>
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Осенний пейзаж'} backLink={BACK_LINK}/>
    );
  }
}

export default AutumnLandscape;
