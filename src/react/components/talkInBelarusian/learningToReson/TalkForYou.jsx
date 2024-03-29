import React from 'react';

import BaseTextComponent from '../../shared/BaseTextComponent';

import {LEARNING_TO_REASON} from '../../../constants/constants';

const BACK_LINK = LEARNING_TO_REASON;

class TalkForYou extends React.Component {

  getData(){
    return (
      <p style={{textAlign: 'left', whiteSpace: 'pre-wrap'}}>
        {'     '}Як цябе завуць?
        <br/>{'     '}Як тваё прозвішча?
        <br/>{'     '}Як завуць тваю маму (бабулю, сястрычку, выхавальніцу)?
        <br/>{'     '}Як завуць твайго тату (дзядулю, браціка)?
        <br/>{'     '}Ты ходзіш у школу (у садок)?
        <br/>{'     '}Ты любіш цырк (тэатр, кветкі, птушак)?
        <br/>{'     '}Ты любіш плаваць (бегаць па дарожцы, ляпіць снежную бабу, слухаць казкі, маляваць дрэвы, мыць посуд, працаваць у агародзе, складваць цацкі, наводзіць парадак у свім пакоі, дапамагаць сваёй маме ў працы, рана ўставать, хадзіць у дзіцячы сад)?
        <br/>{'     '}Ты умееш чытаць (пісаць, маляваць звяркоў, надзяваць паліто, зашпільваць гузікі, абуваць боцікі, прычэсвацца грабянцом, спяваць сваёй ляльцы калыханку)?
        <br/>{'     '}Ваш дом драўляны ці цагляны (высокі ці нізкі, на першым ці на другім паверсе)?
        <br/>{'     '}Ваша сям'я вялікая ці малая?
        <br/>{'     '}Ваша кватэра светлая ці цёмная?
        <br/>{'     '}Твая мама высокая ці нізкая?
        <br/>{'     '}Твая бабуля маладая ці старая?
        <br/>{'     '}Твая мама спявае табе калыханкі ці не?
        <br/>{'     '}Твой тата гуляе ў футбол ці не?
        <br/>{'     '}Твой тата спявае песнi ці не?
        <br/>{'     '}Твой брацік гуляе з табою ці не?
        <br/>{'     '}Твая сястрычка дапамагае матулі ці не?
        <br/>{'     '}Ты рада, калі цябе хваліць мама?
        <br/>{'     '}Ты рада, калі табе купяць новую цацку?
        <br/>{'     '}Ты цешышся, калі бачыш свайго дзядулю?
        <br/>{'     '}Ты радуешся, калі да цябе прыходзяць сябры?
        <br/>{'     '}Ты любіш, калі тата бярэ з сабой цябе гуляць?
        <br/>{'     '}Ты задаволены, калі зробіш нешта сам?
        <br/>{'     '}Ты мыеш pyкi перад ядой?
        <br/>{'     '}Ты любіш спяваць?
        <br/>{'     '}Ты можаш намаляваць жабу?
        <br/>{'     '}Ты робіш ранішнюю зарадку?
        <br/>{'     '}Ты любіш хадзіць у тэатр?
        <br/>{'     '}Ты умееш ездзіць на веласіпедзе?
        <br/>{'     '}Ты ведаеш, дзе жыве слон?
        <br/>{'     '}Ты ведаеш, як завуць бацькоў твайго сябра?
        <br/>{'     '}Ты можаш скакаць на адной назе?
        <br/>{'     '}Ты крыўдзіш слабейшых?
        <br/>{'     '}Ты быў на моры?
        <br/>{'     '}Ты лятаў на самалёце?
        <br/>{'     '}Ты бачыў кенгуру?
        <br/>{'     '}Ты вялікі ці маленькі?
        <br/>{'     '}Ты умееш плаваць?
        <br/>{'     '}Ты ведаеш, дзе знаходзіцца хлебны магазін?
        <br/>{'     '}Ты любіш салодкае ці кіслае?
        <br/>{'     '}Ты любіш мёд? Чаму?
        <br/>{'     '}Ты баішся пераходзіць вуліцу? Чаму?
        <br/>{'     '}Ты быў у лялечным тэатры?
        <br/>{'     '}Ты можаш намаляваць зорачку?
        <br/>{'     '}Ты любіш піць каву ці чай?
        <br/>{'     '}Ты хлопчык ці дзяўчынка?
        <br/>{'     '}Ты любш спяваць ці скакаць?
        <br/>{'     '}Ты ўстаеш рана ці позна?
        <br/>{'     '}Ты кладзешся спаць рана ці позна?
        <br/>{'     '}Ты жывеш у Беларусі ці ў Pacii?
        <br/>{'     '}Ты жывеш у горадзе ці ў вёсцы?
        <br/>{'     '}Ты ходзіш у садок пешшу ці ездзіш якім-небудзь транспартам?
        <br/>{'     '}У вашай вёсцы шмат садоў?
        <br/>{'     '}У вашай вёсцы шмат дзяцей?
        <br/>{'     '}У вашым садзе ёсць грушы?
        <br/>{'     '}У вашым агародзе растуць лімоны?
        <br/>{'     '}У вашым горадзе ёсць цэрквы i касцёлы?
        <br/>{'     '}У вашай хатняй бiблiятэцы ёсць беларускія кнігі?
        <br/>{'     '}У вашым доме ёсць беларускія часопісы?
        <br/>{'     '}Твая мама дазваляе табе бегаць басанож ці не?
        <br/>{'     '}Твой тата чытае газеты ці не?
        <br/>{'     '}Ці падабаецца табе, як ідзе дождж (падае снег, свеціць сонейка)?
        <br/>{'     '}Ці радуешся ты, як бачыш вясёлку? Ці любіў ты глядзець на хмары?
        <br/>{'     '}Ці ёсць у цябе любімая казка?
        <br/>{'     '}Ці ёсць у цябе лялька (цацка-машына, звярок-пестунок)?
        <br/>{'     '}Ці ёсць у вас дома тэлефон?
        <br/>{'     '}Ці любіш ты ездзіць у вёску?
        <br/>{'     '}Які твой адрас (нумар вашага дома, вашай кватэры, вашага тэлефона, адрас твайго садка)?
        <br/>{'     '}Які колер табе лепш падабаецца?
        <br/>{'     '}Якія ты любіш гульні?
        <br/>{'     '}Якія кветкі ты ведаеш?
        <br/>{'     '}Якое надвор'е ты любіў? Сонечнае? Пахмурнае? Дажджлівае?
        <br/>{'     '}Якое свята ты любіш? Новы Год? Купалле? Вялікдзень? Каляды?
        <br/>{'     '}Ты умееш катацца на веласіпедзе (засцілаць свой ложак, шыць лялькам сукенкі, мыць посуд, скакаць на адной назе, гатаваць вячэру, лятаць)?
        <br/>{'     '}Ты умееш гаварыць на замежнай мове? Па-англійску? Па-французску?
        <br/>{'     '}Колькі табе гадоў? Колькі гадоў  тваёй маме (тату)?
        <br/>{'     '}Колькі пальцаў на адной руцэ?
        <br/>{'     '}Колькі ў цябе машын?
        <br/>{'     '}Колькі ў цябе сястрычак (братоў, бабуль)?
        <br/>{'     '}Колькі ў цябе рук (ног, вачэй)?
        <br/>{'     '}Колькі беларускіх вершыкаў ты ведаеш?
        <br/>{'     '}Колькі раз ты паваліўся ў гэту зіму?
        <br/>{'     '}Ці хацеў бы ты быць вучоным (футбалістам, клоунам, касманаўтам, паэтам, пісьменнікам)?
        <br/>{'     '}Ці хацеў бы ты ведаць шмат казак (бачыць мора)?
        <br/>{'     '}Ці хацела б ты быць актрысай (балерынай, спявачкай, настаўніцай)?
        <br/>{'     '}Ці часта ты плачаш?
        <br/>{'     '}Цi шмат ты гуляеш на свежым паветры?
        <br/>{'     '}Ці доўга ты спіш у нядзельку?
        <br/>{'     '}Ці добра ты умееш расказваць вершыкі?
        <br/>{'     '}Што ты poбіш paніцай (вечарам)? Што ты любіш paбіць у нядзелю?
        <br/>{'     '}Што ты бачыў (бачыла) па дарозе ў садок? Што ты pабіў (рабіла) учора вечарам?
        <br/>{'     '}Якога колеру твая кашуля (сукенка, спаднічка, твае вочы, твае валасы, тваё паліто)?
        <br/>{'     '}Каму ты любіш расказваць вершы?
        <br/>{'     '}Каму ты хацеў бы (хацела б) зрабіць падарунак? Які?
        <br/>{'     '}Каму ты купіў цукерак, як заробіш  грошай?
        <br/>{'     '}Каму ты гаворыш «дабранач», калі ідзеш спаць?
        <br/>{'     '}Каму ты кажаш «добры дзень» («дзень добры»), як устаеш рана?
        <br/>{'     '}3 кім ты ідзеш у садок (з садка)?
        <br/>{'     '}3 кім ты ходзіш на прагулку?
        <br/>{'     '}3 кім ты глядзіш тэлевізар (размаўляеш па тэлефоне, гуляеш дома, гуляеш у садку)?
        <br/>{'     '}3 якой дзяўчынкай (хлопчыкам) ты любіў гуляць у садку?
        <br/>{'     '}Твой брат жанаты ці нежанаты? (чытае табе казкі ці не)?
        <br/>{'     '}Твая сястра спявае табе калыханку?
        <br/>{'     '}Твае сябры часта прыходзяць да цябе ў госці?
        <br/>{'     '}Калі ты быў у кіно апошні раз? Калі твая мама ідзе спаць? Kaлi твой тата адпачьшае?
        <br/>{'     '}Навошта мы купляем адзенне (прадукты)?
        <br/>{'     '}Навошта людзям жыллё (школы, дзіцячыя садкі, тэатры)?
        <br/>{'     '}Навошта людзі мыюцца (прыгожа апранаюцца, падстрыгаюцца, мыюць посуд, садзяць дрэвы, гадуюць свніей, будуюць хаты)?
        <br/>{'     '}Хто працуе у бiблiятэцы (вучыць дзяцей у школе, лечыць людзей, будуе дамы)?
        <br/>{'     '}Дзе працуе твая мама?
        <br/>{'     '}Дзе працуе твой тата?
        <br/>{'     '}Дзе жыве твая бабуля? У вёсцы ці ў горадзе?
        <br/>{'     '}Дзе вучыцца твой брат? У школе? Ва універсітэце? У акадэміі? У тэхнікуме?

        <br/>{'     '}Крыніца: Марціновіч Л.С., Юрэвіч Т.У., Іўліева Л.У. Сцяжынка. – Мн.: Нар.асвета, 1994. – 319с.
      </p>
    );
  }

  render() {
    const data = this.getData();
    return (
      <BaseTextComponent data={data} title={'Адкажы пра сябе'} backLink={BACK_LINK}/>
    );
  }
}

export default TalkForYou;
