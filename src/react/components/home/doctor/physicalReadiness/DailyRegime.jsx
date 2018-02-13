import React from 'react';

import BaseTextComponent from '../../../shared/BaseTextComponent';

class DailyRegime extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Медики считают, что для младших школьников, чья нервная система еще не совсем окрепла и предел истощаемости нервных клеток довольно низок, особенно важно соблюдать режим дня. Режим дня ребенка — это сон, пребывание на свежем воздухе, учебная деятельность в школе и дома, отдых, прием пищи, личная гигиена.
        <br/>{'     '}Для того чтобы режим дня стал основой стиля жизни школьника, необходимо включить в распорядок дня все виды деятельности ребенка. Их выполнение должно быть регулярным.
        <br/>{'     '}Чтобы избежать переутомления, ребенок должен уметь организовать деятельность так, чтобы возникающее утомление, которое проявляется в усталости, высокой отвлекаемости, резком ухудшении почерка, снижении активного внимания, двигательном беспокойстве и др., полностью исчезло за время отдыха. Например, чередовать выполнение устных и письменных заданий, делать физ- культпаузы, правильно сидеть и т. д.
        <br/>{'     '}Учеными установлено, что отличная и хорошая успеваемость в 65 % случаев отмечается у школьников, которые соблюдают норму сна, и только в 35 % — среди недосыпающих. Сон — полноценный отдых, который необходим каждому человеку. В возрасте 6—7 лет суточная норма сна составляет 11 часов, в 8—10 лет — 10 часов. При недосыпании качество умственной работы снижается почти в два раза.
        <br/>{'     '}Если вы хотите видеть своего ребенка успевающим, то следует позаботиться о его сне: устранить или не допустить возникновения внешних и внутренних помех для сна. Внешние помехи — спертый воздух в комнате, табачный дым, слишком яркий свет, чрезмерно громкие звуки; внутренние помехи — перевозбуждение, эмоциональное напряжение, угнетенное состояние. Перед сном не следует пугать детей, выяснять отношения. Быстро заснуть ребенку помогут спокойные игры или чтение, проветривание в комнате, выполнение гигиенических процедур и другие привычные действия.
        <br/>{'     '}Прежде всего, вы должны выработать целесообразный режим дня, подходящий именно вашему ребенку. “Любое правило жизни должно быть введено в семье не потому, что кто-то другой завел его у себя, и не потому, что с таким правилом жить приятнее, а исключительно потому, что это необходимо для достижения поставленной вами разумной цели” (А. С. Макаренко).
        <br/>{'     '}Приобщить ребенка к распорядку может помочь игра. Эффективен в таких случаях “прием руководителя”, когда сын или дочь напоминают взрослым о необходимости выполнения основных элементов режима дня (“А теперь пора чистить зубы!”, “Мама, пора заправлять кровати!” и т. д.).
        <br/>{'     '}Результат будет еще лучше, если вы:
        <br/>{'     '}•	на протяжении первых 2—3 месяцев будете выполнять основные моменты распорядка дня ребенка вместе с ним;
        <br/>{'     '}•	не будете отступать от режима во время выходных дней, каникул;
        <br/>{'     '}•	будете чаще хвалить детей за выполнение или даже стремление соблюдать режим дня. Ситуация успеха стимулирует желание неоднократно пережить чувство удовлетворения собственными делами.
        <br/>
        <br/>
        <br/>{'     '}По материалам журнала «Пачатковая школа»//Рюкзачок для пап и мам. - 2008. -    №7. – с. 1-2.

      </p>
    );
  }

  getEpigraph(){
    return (
      <p>
        Однажды Сократа спросили: “Что является для человека денным и важным в жизни — богатство или слава?” Великий мудрец ответил: “Ни богатство, ни слава еще не делают человека счастливым. Здоровый нищий счастливее больного короля”. Здоровье человека - это не только физическая активность, отказ от вредных привычек, но и правильное питание, соблюдение режима дня и правил гигиены.
      </p>
    );
  }

  render() {
    const data = this.getData();
    const epigraph = this.getEpigraph();
    return (
      <BaseTextComponent title={'Режим дня'} data={data} epigraph={epigraph}/>
    );
  }
}

export default DailyRegime;
