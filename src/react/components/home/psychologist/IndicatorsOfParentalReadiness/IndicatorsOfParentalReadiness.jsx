import React from 'react';

import BaseTextComponent from '../../../shared/BaseTextComponent';

import {INDICATORS_OF_PARENTAL_READINESS} from '../../../../constants/links';

class IndicatorsOfParentalReadiness extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        <p style={{textAlign: 'center'}}>
          <b>А пора ли нам в школу?</b>
        </p>
        {'     '}О готовности к поступлению ребёнка в школу говорят многие учителя и психологи. А готовы ли мы, родители, к таким серьёзным изменениям в жизни нашего ребёнка? Готовы ли мы перестроить свой привычный быт, свои отношения с сыном или дочкой. Сможем ли мы помочь ребёнку комфортно перейти от игры к новой ступеньке его жизни - учёбе?
        <br/>{'     '}Давайте попробуем на нашем очередном родительском собрании ответить для себя на эти вопросы. А проходить оно будет не в виде лекции, а в форме самостоятельной практической работы.
        <br/>{'     '}Прежде всего предлагаем максимально правдиво для самих себя ответить на вопросы анкеты.
        <br/>
        <p style={{textAlign: 'center'}}>
          <b>Анкета для родителей "Снова в школу"</b>
        </p>
        {'     '}•	 Как вы считаете, готов ли ваш ребёнок к поступлению в школу?
        <br/>{'     '}•	 Позаботились ли вы о том, чтобы получить как можно больше информации о школах шаговой      доступности?
        <br/>{'     '}•	 Учитываете ли вы при выборе школы для ребёнка его увлечения и пожелания?
        <br/>{'     '}•	 Советовались ли вы при выборе школы с врачами, воспитателями, методистами, педагогами, психологами, логопедами?
        <br/>{'     '}•	 А лично вы проводите дома дополнительные занятия с вашим ребёнком для повышения его готовности к поступлению в школу?
        <br/>{'     '}•	Часто ли вы с ребенком опаздываете (в детский сад, в гости, на занятия и т. д.)?
        <br/>{'     '}•	Планируете ли вы оставить на время работу (взять отпуск, отгулы и т. п.) либо изменить график рабочего дня для того, чтобы иметь возможность провожать ребёнка на занятия и встречать его из школы?
        <br/>{'     '}•	Имеет ли дома ваш ребёнок своё место (например, шкаф, полка), за порядок в котором он   отвечает самостоятельно?
        <br/>{'     '}•	Есть ли у ребёнка постоянные обязанности в семье?
        <br/>{'     '}•	Готова ли ваша семья материально к поступлению ребёнка в школу?
        <br/>{'     '}•	Планируете ли вы выделить ребёнку собственное рабочее место (личная комната, зонирование комнаты, личный письменный стол) с началом его учебы?
        <br/>{'     '}•	Считаете ли вы необходимым иметь дома компьютер с выходом в Интернет для более комфортного и продуктивного обучения современного школьника?
        <br/>{'     '}•	Сможете ли вы уделять ребёнку дополнительное время в течение хотя бы первого года обучения?
        <br/>{'     '}Посчитайте количество ваших положительных и отрицательных ответов.
        <br/>{'     '}Если многие из Ваших ответов  были отрицательными, не расстраивайтесь и не волнуйтесь. Вернитесь к анкете и постарайтесь ещё раз проанализировать вопросы.  Возможно они помогут вам что-то изменить в привычном ритме жизни и подготовиться всей семьёй к поступлению вашего ребёнка в школу.
        <br/>{'     '}Далее на бумаге попробуйте составить список необходимых изменений, которые нужно внести в вашу привычную жизнь, в семейные воспитательные моменты.
        <br/>{'     '}Осипова И.Л.
        <br/>{'     '}Источник: https://урок.рф/library/anketa_dlya_roditelej_snova_v_shkolu_174004.html
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
      <BaseTextComponent title={'Показатели родительской готовности к поступлению ребёнка в школу'} data={data} epigraph={epigraph} links={INDICATORS_OF_PARENTAL_READINESS}/>
    );
  }
}

export default IndicatorsOfParentalReadiness;