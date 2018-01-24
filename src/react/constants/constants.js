export const ABOUT_PROJECT_ID = 'aboutProject';
export const OBVIUS_ID = 'obvious';
export const MAIN_ID = 'main';
export const kindergartenToSchool_ID = 'kindergartenToSchool';
export const interestInReading_ID = 'interestInReading';
export const diligence_ID = 'diligence';
export const lookAtFirstFrom_ID = 'lookAtFirstFrom';
export const howEasyLean_ID = 'howEasyLean';
export const continuity_ID = 'continuity';
export const experimentalWork_ID = 'experimentalWork';
export const doParentsReadyForSchool_ID = 'doParentsReadyForSchool';
export const testsForParents_ID = 'testsForParents';
export const PSYCHOLOGICALLY_ID = 'psychologically';
export const socially_ID = 'socially';
export const intellectually_ID = 'intellectually';
export const personally_ID = 'personally';
export const emotionally_ID = 'emotionally';
export const ABOUT_US_URL = 'aboutUs';
export const AUTHORS_URL = 'authors';
export const HOME_PSYCHOLOGICALLY_URL = 'home_psychologically';
export const FROM_CHILD_ROOM_TO_SCHOOL_URL = 'toSchool';
export const DO_PARENTS_READY_TO_SCHOOL_URL = 'parentsReady';
export const TESTS_FOR_PARENTS_URL = 'testsForParents';
export const PSICHOLOGICHESKAY_GOTOVNOST_URL = 'psychologicallyReady';
export const INTELECTUALNAY_GOTOVNOST_URL = 'intelReady';
export const SOCIALNAY_GOTOVNOST_URL = 'socialReady';
export const IN_FAMILY_URL = 'inFamily';
export const IN_PARENTS_URL = 'inParents';
export const IN_FRIENDS_URL = 'inFriends';
export const IN_OTHERS_URL = 'inOthers';
export const LICHNOSTNAY_URL = 'personReady';
export const FORMIROVANIE_POSICII_SHKOLNIKA_URL = 'pupilPosition';
export const PRIVICHKA_URL = 'habits';
export const EMOCIONALNAY_GOTOVNOCCT_URL = 'emotionsReady';
export const MOTIVACIY_UCHENIKA_URL = 'motiovationPupil';
export const FORNIROVANIE_VOLEVIH_KACHEVSTV_URL = 'shaping';
export const OTHERS_URL = 'others';
export const HOME_DOCTOR_URL = 'homeDoctor';
export const HOME_TUTOR_URL = 'homeTutor';
export const HOME_ASSISTANT_URL = 'homeAssistant';
export const HOME_MASTER_URL = 'homeMaster';
export const FORUM_URL = 'forum';

//Home psychologist -> School Communication
export const SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS = 'adults';
export const DISPUTE_WITHOUT_QUARREL = 'dispute';
export const EMOTIONAL_COLORING_OF_SPEECH = 'emotional';
export const EMOTIONS_ADN_COMMUNICATION = 'emotions';
export const FACIAL_EXPRESSIONS_AND_GESTURES = 'facial';
export const HOW_TO_BEHAVE_AT_A_PARTY = 'atParty';
export const HOW_TO_MAKE_FRIENDS_WITH_STRANGERS = 'strangers';
export const HOW_TO_RECEIVE_GUESTS = 'guests';
export const LISTENING_SPEAKING = 'listening';
export const ORAL_SPEECH = 'speech';
export const REQUEST_AND_REFUSAL = 'refusal';
export const TALKING_ON_THE_PHONE = 'phone';

//Home tutor -> We expand our horizons
export const WE_EXPAND_OUR_HORIZONS = 'expandOurHorizons';
export const IN_THE_WORLD_OF_NATURE = 'InTheWorldOfNature';
export const WORK_OF_PEOPLE = 'WorkOfPeople';
export const THE_WORLD = 'TheWorld';
//Home tutor -> In the world of mathematics
export const In_the_world_of_mathematics = 'mathematics';
export const World_of_numbers = 'numbers';
export const Solve_examples = 'examples';
export const The_World_of_Geometry = 'geometry';
export const Orient_in_time_and_space = 'space';
//Home tutor -> Learning to speak beautifully
export const Learning_to_speak_beautifully = 'beautifully';
export const Playing_with_words = 'words';
export const Learning_to_compose = 'compose';
//Home tutor -> Learning to read
export const Learning_to_read = 'read';
export const Sounds_and_letters = 'letters';
export const Learning_the_alphabet = 'alphabet';
export const Favorite_works = 'FavoriteWorks';

export const MENU = [
  {
    id: MAIN_ID,
    isGroup: true,
    name: 'Главная',
    url: '/',
    children: [
      {
        id: ABOUT_PROJECT_ID,
        name: 'О проекте',
        url: '/aboutProject'
      },
      {
        id: ABOUT_US_URL,
        isGroup: true,
        name: 'О нас',
        url: `/${ABOUT_US_URL}`,
        children: [
          {
            id: AUTHORS_URL,
            name: 'Авторы проекты',
            url: `/${AUTHORS_URL}`
          }
        ]
      },
    ]
  },
  {
    id: HOME_PSYCHOLOGICALLY_URL,
    isGroup: true,
    name: 'Домашний психолог',
    url: `/${HOME_PSYCHOLOGICALLY_URL}`,
    children: [
      {
        id: FROM_CHILD_ROOM_TO_SCHOOL_URL,
        name: 'Из сада в школу',
        fullName: 'Из сада в школу (модель выпускника детского сада)',
        url: `/${FROM_CHILD_ROOM_TO_SCHOOL_URL}`,
      },
      {
        id: DO_PARENTS_READY_TO_SCHOOL_URL,
        name: 'Готовы ли родители к школе',
        url: `/${DO_PARENTS_READY_TO_SCHOOL_URL}`,
      },
      {
        id: TESTS_FOR_PARENTS_URL,
        name: 'Тесты для родителей',
        url: `/${TESTS_FOR_PARENTS_URL}`,
      },
      {
        id: PSICHOLOGICHESKAY_GOTOVNOST_URL,
        name: 'Психологическая готовность к школе',
        url: `/${PSICHOLOGICHESKAY_GOTOVNOST_URL}`,
      },
      {
        id: INTELECTUALNAY_GOTOVNOST_URL,
        name: 'Интеллектуальная готовность',
        url: `/${INTELECTUALNAY_GOTOVNOST_URL}`,
      },
      {
        id: SOCIALNAY_GOTOVNOST_URL,
        isGroup: true,
        name: 'Социальная готовность',
        url: `/${SOCIALNAY_GOTOVNOST_URL}`,
        children: [
          {
            id: IN_FAMILY_URL,
            name: 'В кругу родных',
            url: `/${IN_FAMILY_URL}`,
          },
          {
            id: IN_PARENTS_URL,
            name: 'В кругу взрослых',
            url: `/${IN_PARENTS_URL}`,
          },
          {
            id: IN_FRIENDS_URL,
            name: 'В кругу сверстников',
            url: `/${IN_FRIENDS_URL}`,
          },
          {
            id: IN_OTHERS_URL,
            name: 'В кругу чужих',
            url: `/${IN_OTHERS_URL}`,
          },
        ]
      },
      {
        id: LICHNOSTNAY_URL,
        isGroup: true,
        name: 'Личностная готовность',
        url: `/${LICHNOSTNAY_URL}`,
        children: [
          {
            id: FORMIROVANIE_POSICII_SHKOLNIKA_URL,
            name: 'Формирование позиции школьника',
            url: `/${FORMIROVANIE_POSICII_SHKOLNIKA_URL}`,
          },
          {
            id: PRIVICHKA_URL,
            name: 'Привычки',
            url: `/${PRIVICHKA_URL}`,
          },
        ]
      },
      {
        id: EMOCIONALNAY_GOTOVNOCCT_URL,
        isGroup: true,
        name: 'Эмоционально-волевая готовность',
        url: `/${EMOCIONALNAY_GOTOVNOCCT_URL}`,
        children: [
          {
            id: MOTIVACIY_UCHENIKA_URL,
            name: 'Мотивация учения',
            url: `/${MOTIVACIY_UCHENIKA_URL}`,
          },
          {
            id: FORNIROVANIE_VOLEVIH_KACHEVSTV_URL,
            name: 'Формирование волевых качеств',
            url: `/${FORNIROVANIE_VOLEVIH_KACHEVSTV_URL}`,
          },
          {
            id: OTHERS_URL + '60',
            name: 'Агрессивный ребенок',
            url: `/${OTHERS_URL}`,
          },
        ]
      },
      {
        id: SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS,
        isGroup: true,
        name: 'Школа общения для детей и взрослых',
        url: `/${SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS}`,
        children: [
          {
            id: DISPUTE_WITHOUT_QUARREL,
            name: 'Спор без ссоры',
            url: `/${DISPUTE_WITHOUT_QUARREL}`,
          },
          {
            id: EMOTIONAL_COLORING_OF_SPEECH,
            name: 'Эмоциональная окраска речи',
            url: `/${EMOTIONAL_COLORING_OF_SPEECH}`,
          },
          {
            id: EMOTIONS_ADN_COMMUNICATION,
            name: 'Эмоции и общение',
            url: `/${EMOTIONS_ADN_COMMUNICATION}`,
          },
          {
            id: FACIAL_EXPRESSIONS_AND_GESTURES,
            name: 'Мимика и жесты',
            url: `/${FACIAL_EXPRESSIONS_AND_GESTURES}`,
          },
          {
            id: HOW_TO_BEHAVE_AT_A_PARTY,
            name: 'Как вести себя в гостях',
            url: `/${HOW_TO_BEHAVE_AT_A_PARTY}`,
          },
          {
            id: HOW_TO_MAKE_FRIENDS_WITH_STRANGERS,
            name: 'Как подружиться с незнакомыми ребятами',
            url: `/${HOW_TO_MAKE_FRIENDS_WITH_STRANGERS}`,
          },
          {
            id: HOW_TO_RECEIVE_GUESTS,
            name: 'Как принимать гостей',
            url: `/${HOW_TO_RECEIVE_GUESTS}`,
          },
          {
            id: LISTENING_SPEAKING,
            name: 'Слушаем. Говорим',
            url: `/${LISTENING_SPEAKING}`,
          },
          {
            id: ORAL_SPEECH,
            name: 'Устная речь',
            url: `/${ORAL_SPEECH}`,
          },
          {
            id: REQUEST_AND_REFUSAL,
            name: 'Просьба и отказ',
            url: `/${REQUEST_AND_REFUSAL}`,
          },
          {
            id: TALKING_ON_THE_PHONE,
            name: 'Разговор по телефону',
            url: `/${TALKING_ON_THE_PHONE}`,
          },
        ]
      },
    ]
  },
  {
    id: HOME_DOCTOR_URL,
    isGroup: true,
    name: 'Домашний доктор',
    url: `/${HOME_DOCTOR_URL}`,
    children: [
      {
        id: OTHERS_URL + '53',
        isGroup: true,
        name: 'Физическая готовность к школе',
        url: `/${OTHERS_URL}`,
        children: [
          {
            id: OTHERS_URL + '52',
            name: 'Это интересно',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '51',
            name: 'Режим дня',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '50',
            name: 'Гигиена',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '49',
            name: 'Закаливание',
            url: `/${OTHERS_URL}`,
          },
        ]
      },
      {
        id: OTHERS_URL + '48',
        isGroup: true,
        name: 'Гиперактивный ребенок',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '47',
        isGroup: true,
        name: 'Мышечный аппарат',
        url: `/${OTHERS_URL}`,
        children: [
          {
            id: OTHERS_URL + '46',
            name: 'Готовим руку к письму',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '45',
            name: 'Комплекс утренней гимнастики',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '44',
            name: 'Спортивные игры',
            url: `/${OTHERS_URL}`,
          },
        ]
      },
      {
        id: OTHERS_URL + '43',
        isGroup: true,
        name: 'Речевой аппарат',
        url: `/${OTHERS_URL}`,
        children: [
          {
            id: OTHERS_URL + '42',
            name: 'Дыхательная гимнастика',
            url: `/${OTHERS_URL}`,
          },
        ]
      },
      {
        id: OTHERS_URL + '41',
        name: 'Переутомление',
        url: `/${OTHERS_URL}`,
      },
    ]
  },
  {
    id: HOME_TUTOR_URL,
    isGroup: true,
    name: 'Домашний репетитор',
    url: `/${HOME_TUTOR_URL}`,
    children: [
      {
        id: WE_EXPAND_OUR_HORIZONS,
        isGroup: true,
        name: 'Расширяем кругозор',
        url: `/${WE_EXPAND_OUR_HORIZONS}`,
        children: [
          {
            id: IN_THE_WORLD_OF_NATURE,
            name: 'В мире природы',
            url: `/${IN_THE_WORLD_OF_NATURE}`,
          },
          {
            id: WORK_OF_PEOPLE,
            name: 'Труд людей',
            url: `/${WORK_OF_PEOPLE}`,
          },
          {
            id: THE_WORLD,
            name: 'Окружающий мир',
            url: `/${THE_WORLD}`,
          },
        ]
      },
      {
        id: In_the_world_of_mathematics,
        isGroup: true,
        name: 'В мире математики',
        url: `/${In_the_world_of_mathematics}`,
        children: [
          {
            id: World_of_numbers,
            name: 'Мир чисел',
            url: `/${World_of_numbers}`,
          },
          {
            id: Solve_examples,
            name: 'Решаем примеры',
            url: `/${Solve_examples}`,
          },
          {
            id: The_World_of_Geometry,
            name: 'Мир геометрии',
            url: `/${The_World_of_Geometry}`,
          },
          {
            id: Orient_in_time_and_space,
            name: 'Ориентируемся во времени и пространстве',
            url: `/${Orient_in_time_and_space}`,
          },
        ]
      },
      {
        id: Learning_to_speak_beautifully,
        isGroup: true,
        name: 'Учимся красиво говорить',
        url: `/${Learning_to_speak_beautifully}`,
        children: [
          {
            id: Playing_with_words,
            name: 'Играем со словами',
            url: `/${Playing_with_words}`,
          },
          {
            id: Learning_to_compose,
            name: 'Учимся сочинять',
            url: `/${Learning_to_compose}`,
          },
        ]
      },
      {
        id: Learning_to_read,
        isGroup: true,
        name: 'Учимся читать',
        url: `/${Learning_to_read}`,
        children: [
          {
            id: Sounds_and_letters,
            name: 'Звуки и буквы',
            url: `/${Sounds_and_letters}`,
          },
          {
            id: Learning_the_alphabet,
            name: 'Учим алфавит',
            url: `/${Learning_the_alphabet}`,
          },
          {
            id: Favorite_works,
            name: 'Любимые произведения',
            url: `/${Favorite_works}`,
          },
        ]
      },
    ]
  },
  {
    id: HOME_ASSISTANT_URL,
    isGroup: true,
    name: 'Домашний помощник',
    url: `/${HOME_ASSISTANT_URL}`,
    children: [
      {
        id: OTHERS_URL + '16',
        name: 'Роль семьи в формировании трудолюбия',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '15',
        name: 'Помощь по дому',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '14',
        name: 'Выращивание растений',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '13',
        name: 'Уход за домашними питомцами',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '12',
        name: 'Приготовление простых блюд',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '10',
        name: 'Мастерим с папой',
        url: `/${OTHERS_URL}`,
      },
    ]
  },
  {
    id: HOME_MASTER_URL,
    isGroup: true,
    name: 'Домашний мастер',
    url: `/${HOME_MASTER_URL}`,
    children: [
      {
        id: OTHERS_URL + '9',
        name: 'Поделки из бумаги',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '8',
        name: 'Поделки из природного материалы',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '7',
        name: 'Глина, пластилин, моделин, соленое тесто',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '6',
        name: 'Юные художники',
        url: `/${OTHERS_URL}`,
      },
    ]
  },
  {
    id: FORUM_URL,
    isGroup: true,
    name: 'Форум',
    url: `/${FORUM_URL}`,
    children: [
      {
        id: OTHERS_URL + '5',
        isGroup: true,
        name: 'Устами младенца',
        url: `/${OTHERS_URL}`,
        children: [
          {
            id: OTHERS_URL + '4',
            name: 'Школа - это',
            url: `/${OTHERS_URL}`,
          },
          {
            id: OTHERS_URL + '3',
            name: 'Современный учитель глазами детей',
            url: `/${OTHERS_URL}`,
          },
        ]
      },
      {
        id: OTHERS_URL + '2',
        name: 'Белорусский в 1 классе',
        url: `/${OTHERS_URL}`,
      },
      {
        id: OTHERS_URL + '1',
        name: 'Отзывы родителей',
        url: `/${OTHERS_URL}`,
      },
    ]
  },
];

//root actions consts
export const SELECT_TAB_MENU_ITEM = 'SELECT_TAB_MENU_ITEM';

//auth consts
export const SHOW_REGISTRATION_WINDOW = 'SHOW_REGISTRATION_WINDOW';
export const SHOW_SING_WINDOW = 'SHOW_SING_WINDOW';
export const CREATE_USER = 'CREATE_USER';
export const LOGOUT = 'LOGOUT';

export const EVENT_CHANGE = 'change';
export const VIEW_ACTION = 'VIEW_ACTION';

//HOME PSYCH
export const SET_IMAGES_HOME_PSYCH = 'SET_IMAGES_HOME_PSYCH';
export const CLEAN_IMAGES_HOME_PSYCH = 'CLEAN_IMAGES_HOME_PSYCH';

//STYLE
export const CHANGE_BACKGROUND_IMAGE = 'CHANGE_BACKGROUND_IMAGE';

//TEST
export const SET_TEST_URL = 'SET_TEST_URL';
export const CLEAN_TEST_URL = 'CLEAN_TEST_URL';
