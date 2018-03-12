import React from 'react';

import BaseTextComponent from '../../../shared/BaseTextComponent';

import {INDICATORS_OF_PARENTAL_READINESS} from '../../../../constants/links';

class HowParentsCanHelpAChild extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}1) Организуйте распорядок дня:
        <br/>{'     '}• стабильный режим дня;
        <br/>{'     '}• полноценный сон;
        <br/>{'     '}• прогулки на воздухе.
        <br/>{'     '}2) Формируйте у ребенка умения общаться:
        <br/>{'     '}• Обратите внимание на то, умеет ли ваш ребенок вступать в контакт с новым взрослым, с другими детьми, умеет ли он взаимодействовать, сотрудничать.
        <br/>{'     '}3)Уделите особое внимание развитию произвольности:
        <br/>{'     '}• Учите ребенка управлять своими желаниями, эмоциями, поступками. Он должен уметь подчиняться правилам поведения, выполнять действия по образцу.
        <br/>{'     '}4)Ежедневно занимайтесь интеллектуальным развитием ребенка:
        <br/>{'     '}• Во время прогулок наблюдайте изменения в природе. Обращайте внимания на различные
        <br/>{'     '}явления природы (дождь, снег, радуга, листопад, туман, ветер, тучи, буря, рассвет, закат).
        <br/>{'     '}• Выучите названия времен года. Тренируйте умения определять время года на улице и картинках.
        <br/>{'     '}• Используя лото и книги, учите с ребенком названия: диких и домашних животных, птиц, полевых и садовых цветов, деревьев,  предметов посуды, предметов мебели, одежды, головных уборов, видов обуви, игрушек, школьных принадлежностей, частей тела, названия городов, названия любимых сказок и их героев.
        <br/>{'     '}<span style={{color: 'red'}}>Внимание! Ребенок 5-6 лет не может работать долго: 10-15 минут - вот предел, а потом он должен отдохнуть, отвлечься.  Потому все занятия должны быть рассчитаны на 10-15 минут.</span>
        <br/>{'     '}• Развивайте связную речь детей. Учите пересказывать сказки, содержания мультфильмов.
        <br/>{'     '}• Составляйте рассказы по картинкам.
        <br/>{'     '}• Следите за правильным произношением и  дикцией детей. Проговаривайте скороговорки.
        <br/>{'     '}• Можно заниматься с ребенком звуковым анализом простых слов (дом, лес, шар, суп).
        <br/>{'     '}Научите находить слова имеющие, например, звук «л».
        <br/>{'     '}• Знакомьте ребенка с буквами и их печатным изображением, а также звуком, обозначающим конкретную букву.
        <br/>{'     '}• Научите ребенка различать и правильно называть основные геометрические фигуры (круг, квадрат, треугольник, прямоугольник), сравнивать и различать предметы по величине (больший, меньший) и цвету.
        <br/>{'     '}• Научите ребенка считать до 10 и обратно, сравнивать количество предметов (больше, меньше, столько же). Познакомьте с изображением цифр (не надо учить их писать, только знать).
        <br/>{'     '}• Научите определять положение предметов на плоскости, знать слова, обозначающие местоположение,  и правильно понимать их значения: впереди, сзади, справа, слева, сверху, над, под, за, перед.
        <br/>{'     '}• Развитию мелкой моторики руки ребенка помогут рисование, штриховка, раскрашивание (небольших поверхностей), нанизывание бусинок, пуговиц, лепка, определение вслепую формы предметов (сначала самых простых, потом можно усложнять), игры с мелкими предметами (мозаика).
        <br/>{'     '}<span style={{color: 'red'}}>Внимание! При выполнении любых письменных заданий следите за правильным положением ручки (карандаша), тетради, позой школьника! Рука не должна быть сильно напряжена, а пальцы – чуть расслаблены.</span>
        <br/>{'     '}• Копируйте фигуры. Это задание способствует развитию координации, умению правильно воспринимать фигуры, расположенные на плоскости листа, различать прямые, кривые, наклонные линии,  соблюдать соотношение штрихов и положения фигур между собой.
        <br/>{'     '}<span style={{color: 'red'}}>Внимание! При выполнении графических заданий важны не быстрота, не количество сделанного, а точность выполнения даже самых простых упражнений.</span>
          <br/>{'     '}<span style={{color: 'red'}}>Продолжительность работы - 3-5 минут, затем отдых, переключение и, если не надоело, еще 3-5 минут работы. Не  переходите к следующим заданиям, если не освоены предыдущие (линии должны быть четкими, ровными, уверенными).</span>
      </p>
    );
  }

  getEpigraph(){
    return null;
  }

  render() {
    const data = this.getData();
    const epigraph = this.getEpigraph();
    return (
      <BaseTextComponent title={'Памятка для родителей. Как родители могут помочь ребенку избежать некоторых трудностей'} data={data} epigraph={epigraph} links={INDICATORS_OF_PARENTAL_READINESS}/>
    );
  }
}

export default HowParentsCanHelpAChild;
