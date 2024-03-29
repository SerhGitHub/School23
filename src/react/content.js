import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route} from 'react-router';

import RoutingService from './services/routing.service';

import MainComponent from './components/main/MainComponent';
import AboutProjectComponent from './components/main/AboutProjectComponent';
import Other from './components/other/Other';

import HomeAssistant from './components/home/assistant/HomeAssistant';
import HomeDoctor from './components/home/doctor/HomeDoctor';
import HomeMaster from './components/home/master/HomeMaster';
import HomeTutor from './components/home/tutor/HomeTutor';
import Forum from './components/forum/Forum';

import HomePsychologist from './components/home/psychologist/HomePsychologist';
import SchoolOfCommunicationForChildrenAndAdults from './components/home/psychologist/SchoolCommunication/SchoolOfCommunicationForChildrenAndAdults';
import HowToBehaveAtAParty from './components/home/psychologist/SchoolCommunication/HowToBehaveAtAParty';
import HowToReceiveGuests from './components/home/psychologist/SchoolCommunication/HowToReceiveGuests';
import HowToMakeFriendsWithStrangers from './components/home/psychologist/SchoolCommunication/HowToMakeFriendsWithStrangers';
import DisputeWithoutQuarrel from './components/home/psychologist/SchoolCommunication/DisputeWithoutQuarrel';
import EmotionalColoringOfSpeech from './components/home/psychologist/SchoolCommunication/EmotionalColoringOfSpeech';
import EmotionsAndCommunication from './components/home/psychologist/SchoolCommunication/EmotionsAndCommunication';
import FacialExpressionsAndGestures from './components/home/psychologist/SchoolCommunication/FacialExpressionsAndGestures';
import ListeningSpeaking from './components/home/psychologist/SchoolCommunication/ListeningSpeaking';
import OralSpeech from './components/home/psychologist/SchoolCommunication/OralSpeech';
import RequestAndRefusal from './components/home/psychologist/SchoolCommunication/RequestAndRefusal';
import TalkingOnThePhone from './components/home/psychologist/SchoolCommunication/TalkingOnThePhone';

import InTheWorldOfNature from './components/home/tutor/expandOurHorizons/InTheWorldOfNature';
import WorkOfPeople from './components/home/tutor/expandOurHorizons/WorkOfPeople';
import TheWorld from './components/home/tutor/expandOurHorizons/TheWorld';

import SolveExamples from './components/home/tutor/inTheWorldOfMathematics/SolveExamples';
import OrientInTimeAndSpace from './components/home/tutor/inTheWorldOfMathematics/OrientInTimeAndSpace';

import LearningToCompose from './components/home/tutor/learningToSpeakBeautifully/LearningToCompose';
import PlayingWithWords from './components/home/tutor/learningToSpeakBeautifully/PlayingWithWords';

import FavoriteWorks from './components/home/tutor/learningToRead/FavoriteWorks';
import LearningTheAlphbet from './components/home/tutor/learningToRead/LearningTheAlphbet';

import Hygiene from './components/home/doctor/physicalReadiness/Hygiene';
import DailyRegime from './components/home/doctor/physicalReadiness/DailyRegime';
import Hardening from './components/home/doctor/physicalReadiness/Hardening';
import HyperactiveChild from './components/home/doctor/HyperactiveChild';

import FormationStudentsPosition from './components/home/psychologist/personalReadiness/FormationStudentsPosition';
import Habits from './components/home/psychologist/personalReadiness/Habits';

import AggressiveChild from './components/home/psychologist/emotionalVolitionalWillingness/AggressiveChild';

import BelarusianCartoons from './components/home/tutor/weTalk/BelarusianCartoons';
import ListeningToFairyTales from './components/home/tutor/weTalk/ListeningToFairyTales';
import ListenAndSing from './components/home/tutor/weTalk/ListenAndSing';

import BreathingExercises from './components/home/doctor/speechApparatus/BreathingExercises';

import ArticulatoryGymnastics from './components/home/tutor/articulatoryGymnastics/ArticulatoryGymnastics';

import TonguesAndTongueTwisters from './components/home/tutor/tonguesAndTongueTwisters/TonguesAndTongueTwisters';
import TongueTwisters from './components/home/tutor/tonguesAndTongueTwisters/TongueTwisters';
import PagodaInPictures from './components/home/tutor/tonguesAndTongueTwisters/PagodaInPictures';

import IndicatorsOfParentalReadiness from './components/home/psychologist/IndicatorsOfParentalReadiness/IndicatorsOfParentalReadiness';
import ReadinessForSchool from './components/home/psychologist/IndicatorsOfParentalReadiness/ReadinessForSchool';
import FrequentMisconceptionsOfParents from './components/home/psychologist/IndicatorsOfParentalReadiness/FrequentMisconceptionsOfParents';
import HowToPrepareAChildForSchool from './components/home/psychologist/IndicatorsOfParentalReadiness/HowToPrepareAChildForSchool';
import TestForParentsAtSchool from './components/home/psychologist/IndicatorsOfParentalReadiness/TestForParentsAtSchool';
import TestChildReadyToSchool from './components/home/psychologist/IndicatorsOfParentalReadiness/TestChildReadyToSchool';
import AManSteps from './components/home/psychologist/IndicatorsOfParentalReadiness/AManSteps';
import MemoToParentsOfFuture from './components/home/psychologist/IndicatorsOfParentalReadiness/MemoToParentsOfFuture';
import HowParentsCanHelpAChild from './components/home/psychologist/IndicatorsOfParentalReadiness/HowParentsCanHelpAChild';

import Parents from './components/parents/Parents';
import HealthyChild from './components/parents/healthyChild/HealthyChild';
import LeftHand from './components/parents/healthyChild/LeftHand';
import LeadingHand from './components/parents/healthyChild/LeadingHand';
import BirthPupil from './components/parents/healthyChild/BirthPupil';
import SecretsOfEducation from './components/parents/healthyChild/SecretsOfEducation';
import FingerGymnastics from './components/parents/healthyChild/FingerGymnastics';
import ParentsReadyToSchool from './components/parents/parentsReadyToSchool/ParentsReadyToSchool';
import TestsForParents from './components/parents/TestsForParents';
import Genius from './components/parents/Genius';

import SoundsAndLetters from './components/soundsAndLetters/SoundsAndLetters';
import SpeechIndicators from './components/soundsAndLetters/SpeechIndicators';
import ArticulatoryExercises from './components/soundsAndLetters/articulatoryExercises/ArticulatoryExercises';
import GamesWithLetters from './components/soundsAndLetters/gamesWithLetters/GamesWithLetters';

import TalkInBelarusian from './components/talkInBelarusian/TalkInBelarusian';
import TongueTwistersBel from './components/talkInBelarusian/TongueTwistersBel';
import Puzzels from './components/talkInBelarusian/Puzzels';
import Counters from './components/talkInBelarusian/Counters';
import ThematicIssues from './components/talkInBelarusian/learningToReson/ThematicIssues';
import DQuestions from './components/talkInBelarusian/learningToReson/DQuestions';
import WantAllKnow from './components/talkInBelarusian/learningToReson/WantAllKnow';
import TalkForYou from './components/talkInBelarusian/learningToReson/TalkForYou';
import LearningToReason from './components/talkInBelarusian/learningToReson/LearningToReason';
import Games from './components/talkInBelarusian/learningToReson/Games';

import World from './components/world/World';
import QuestionsForChildSix from './components/world/QuestionsForChildSix';
import GamesRus from './components/world/GamesRus';

import WorldOfMathematic from './components/worldOfMathematic/WorldOfMathematic';
import IndicatorsMathDev from './components/worldOfMathematic/IndicatorsMathDev';
import GamesMath from './components/worldOfMathematic/GamesMath';

import WorldBeautiful from './components/worldBeatiful/WorldBeautiful';
import GamesBeautiful from './components/worldBeatiful/GamesBeautiful';
import Cartoons from './components/worldBeatiful/Cartoons';
import LearningToSculpt from './components/worldBeatiful/leaningToSculpt/LearningToSculpt';
import MoldPlasticine from './components/worldBeatiful/leaningToSculpt/MoldPlasticine';
import MoldWithChildren from './components/worldBeatiful/leaningToSculpt/MoldWithChildren';
import Bird from './components/worldBeatiful/leaningToSculpt/Bird';
import Dinosaurs from './components/worldBeatiful/leaningToSculpt/Dinosaurs';
import Pony from './components/worldBeatiful/leaningToSculpt/Pony';
import Smeshariki from './components/worldBeatiful/leaningToSculpt/Smeshariki';
import Ship from './components/worldBeatiful/leaningToSculpt/Ship';

import AboutUs from './components/main/AboutUs';
import Guest from './components/main/Guest';

import PerfectingTheSpeech from './components/soundsAndLetters/PerfectingTheSpeech';
import ArtExercises from './components/soundsAndLetters/ArtExercises';

import LearningToMakeOfPaper from './components/worldBeatiful/leaningToMakeOfPaper/LearningToMakeOfPaper';
import MaterialsForPaperApplications from './components/worldBeatiful/leaningToMakeOfPaper/MaterialsForPaperApplications';
import Crafts from './components/worldBeatiful/crafts/Crafts';
import MakingCaterpillar from './components/worldBeatiful/crafts/MakingCaterpillar';
import LearningDraw from './components/worldBeatiful/learningDraw/LearningDraw';
import InteractiveColoringPages from './components/worldBeatiful/learningDraw/InteractiveColoringPages';

import TestsForParentsTemp from './components/parents/TestsForParentsTemp';
import FirstGrader2016 from './components/forum/FirstGrader2016';
import FirstGraderParents from './components/forum/FirstGraderParents';

import ApplicationsFromNaturalMaterials from './components/worldBeatiful/crafts/ApplicationsFromNaturalMaterials';
import BreakfastApplication from './components/worldBeatiful/leaningToMakeOfPaper/BreakfastApplication';
import AutumnLeaves from './components/worldBeatiful/leaningToMakeOfPaper/AutumnLeaves';
import Glade from './components/worldBeatiful/leaningToMakeOfPaper/Glade';
import Lilac from './components/worldBeatiful/leaningToMakeOfPaper/Lilac';
import Hedgehog from './components/worldBeatiful/leaningToMakeOfPaper/Hedgehog';
import Chick from './components/worldBeatiful/leaningToMakeOfPaper/Chick';
import Ladybug from './components/worldBeatiful/leaningToMakeOfPaper/Ladybug';
import Puppies from './components/worldBeatiful/leaningToMakeOfPaper/Puppies';
import Bouquet from './components/worldBeatiful/leaningToMakeOfPaper/Bouquet';
import AppFromCircles from './components/worldBeatiful/leaningToMakeOfPaper/AppFromCircles';
import AppFromNapkins from './components/worldBeatiful/leaningToMakeOfPaper/AppFromNapkins';
import FlowerBasket from './components/worldBeatiful/leaningToMakeOfPaper/FlowerBasket';
import Snowdrops from './components/worldBeatiful/leaningToMakeOfPaper/Snowdrops';
import BenefitOfDrawing from './components/worldBeatiful/learningDraw/BenefitOfDrawing';
import StepByStepAnimals from './components/worldBeatiful/learningDraw/StepByStepAnimals';
import StepByStepCar from './components/worldBeatiful/learningDraw/StepByStepCar';
import StepByStepFlower from './components/worldBeatiful/learningDraw/StepByStepFlower';
import StepByStepMan from './components/worldBeatiful/learningDraw/StepByStepMan';
import StepByStepCold from './components/worldBeatiful/learningDraw/StepByStepCold';
import AutumnLandscape from './components/worldBeatiful/learningDraw/AutumnLandscape';

import FunFrog from './components/worldBeatiful/crafts/FunFrog';
import PicturesOfNatural from './components/worldBeatiful/crafts/PicturesOfNatural';
import ChristmasTreeFromChestnuts from './components/worldBeatiful/crafts/ChristmasTreeFromChestnuts';
import CraftsFromChestnutsAndAcorns from './components/worldBeatiful/crafts/CraftsFromChestnutsAndAcorns';
import ShellScrews from './components/worldBeatiful/crafts/ShellScrews';
import PistachkovoeTree from './components/worldBeatiful/crafts/PistachkovoeTree';
import HumansFromShishek from './components/worldBeatiful/crafts/HumansFromShishek';
import StickAcroneSeason from './components/worldBeatiful/crafts/StickAcroneSeason';
import ForUser from './components/main/forUser/ForUser';
import Features from './components/main/forUser/Features';
import Used from './components/main/forUser/Used';
import Tech from './components/main/forUser/Tech';
import GamesCatolog from './components/main/forUser/GamesCatolog';

import PuzzlesSAL from './components/soundsAndLetters/gamesWithLetters/PuzzlesSAL';
import FavoriteHeroes from './components/soundsAndLetters/gamesWithLetters/FavoriteHeroes';
import DevelopingTheSpeech from './components/soundsAndLetters/gamesWithLetters/DevelopingTheSpeech';
import LearningTheAlphabet from './components/soundsAndLetters/gamesWithLetters/LearningTheAlphabet';
import LearnSyllables from './components/soundsAndLetters/gamesWithLetters/LearnSyllables';
import VowelsAndConsonants from './components/soundsAndLetters/gamesWithLetters/VowelsAndConsonants';

import HealthyLifestyle from './components/world/HealthyLifestyle';
import MyMotherland from './components/world/MyMotherland';
import TheWorldAround from './components/world/TheWorldAround';
import LivingAndInanimateNature from './components/world/LivingAndInanimateNature';

import TheWorldOfGeometry from './components/worldOfMathematic/TheWorldOfGeometry';
import LearningToCompare from './components/worldOfMathematic/LearningToCompare';
import LearningToSolveProblems from './components/worldOfMathematic/LearningToSolveProblems';
import LearningToAddAndSubtract from './components/worldOfMathematic/LearningToAddAndSubtract';
import WorldOfNumbers from './components/worldOfMathematic/WorldOfNumbers';
import PuzzlesM from './components/worldOfMathematic/PuzzlesM';
import LearningToNavigateInTime from './components/worldOfMathematic/LearningToNavigateInTime';

import PuzzlesB from './components/worldBeatiful/PuzzlesB';
import ArtisticWork from './components/worldBeatiful/ArtisticWork';
import MusicalArt from './components/worldBeatiful/MusicalArt';
import ArtB from './components/worldBeatiful/ArtB';
import LearningToDraw from './components/worldBeatiful/LearningToDraw';

import PuzzlesBel from './components/talkInBelarusian/learningToReson/PuzzlesBel';
import RazgadaiZ from './components/talkInBelarusian/learningToReson/RazgadaiZ';
import NarodnaeAs from './components/talkInBelarusian/learningToReson/NarodnaeAs';
import USvetePrirodi from './components/talkInBelarusian/learningToReson/USvetePrirodi';

import {
  U_svete_pirodi,
  Narodnae_as,
  Razgadai_zag,
  Puzzles_Bel,
  ART_,
  Learning_to_draw_,
  Musical_art_,
  Artistic_work_,
  Puzzles_B_,
  Learning_to_compare,
  Learning_to_solve_problems,
  Learning_to_add_and_subtract,
  Healthy_lifestyle,
  My_motherland,
  The_world_around,
  Living_and_inanimate_nature,
  Puzzles___,
  Favorite__heroes,
  Developing__the__speech,
  Learn_syllables,
  Learning_the_alphabet,
  Vowels_and_consonants,
  FUN_FROG,
  BOUQUET,
  LADYBUG,
  HEDGEHOG,
  CHICK,
  AUTUMN_LEAVES,
  LILAC,
  GLADE,
  BREAKFAST_APPLICATION,
  Applications_from_natural_materials,
  FIRST_GREDER_2016,
  LEARNIG_TO_MAKE_OF_PAPER,
  ART_EXERCISES,
  PERFECTING_THE_SPEECH,
  TEST_FOR_PARENTS,
  Aggressive_child,
  MAIN_ID,
  ABOUT_PROJECT_ID,
  ABOUT_US_URL,
  AUTHORS_URL,
  HOME_PSYCHOLOGICALLY_URL,
  FROM_CHILD_ROOM_TO_SCHOOL_URL,
  DO_PARENTS_READY_TO_SCHOOL_URL,
  TESTS_FOR_PARENTS_URL,
  PSICHOLOGICHESKAY_GOTOVNOST_URL,
  INTELECTUALNAY_GOTOVNOST_URL,
  SOCIALNAY_GOTOVNOST_URL,
  IN_FAMILY_URL,
  IN_PARENTS_URL,
  IN_FRIENDS_URL,
  IN_OTHERS_URL,
  LICHNOSTNAY_URL,
  FORMIROVANIE_POSICII_SHKOLNIKA_URL,
  PRIVICHKA_URL,
  EMOCIONALNAY_GOTOVNOCCT_URL,
  MOTIVACIY_UCHENIKA_URL,
  FORNIROVANIE_VOLEVIH_KACHEVSTV_URL,
  OTHERS_URL,
  HOME_DOCTOR_URL,
  HOME_ASSISTANT_URL,
  HOME_TUTOR_URL,
  HOME_MASTER_URL,
  FORUM_URL,
  SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS,
  DISPUTE_WITHOUT_QUARREL,
  EMOTIONAL_COLORING_OF_SPEECH,
  EMOTIONS_ADN_COMMUNICATION,
  FACIAL_EXPRESSIONS_AND_GESTURES,
  HOW_TO_BEHAVE_AT_A_PARTY,
  HOW_TO_MAKE_FRIENDS_WITH_STRANGERS,
  HOW_TO_RECEIVE_GUESTS,
  LISTENING_SPEAKING,
  ORAL_SPEECH,
  REQUEST_AND_REFUSAL,
  TALKING_ON_THE_PHONE,
  IN_THE_WORLD_OF_NATURE,
  WORK_OF_PEOPLE,
  THE_WORLD,
  World_of_numbers,
  Solve_examples,
  The_World_of_Geometry,
  Orient_in_time_and_space,
  Playing_with_words,
  Learning_to_compose,
  Sounds_and_letters,
  Favorite_works,
  Fizicheskay_gotovnost,
  HYGIENE,
  Daily_regime,
  It_is_interesting,
  HARDENING,
  Hyperactive_child,
  Belarusian_cartoons,
  Listening_to_fairy_tales,
  Listen_and_sing,
  Breathing_exercises,
  Articulatory_gymnastics,
  Tongues_and_tongue_twisters,
  Tongue_twisters1,
  Pagoda_in_pictures,
  Indicators_of_parental_readiness,
  Readiness_for_school,
  Frequent_misconceptions_of_parents,
  How_to_prepare_a_child_for_school,
  TestForParents_atSchool,
  TestForParents_ChildReadyToSchool,
  A_man_steps_into_the_school,
  Memo_to_parents_of_future_first_graders,
  How_parents_can_help_a_child,
  FOR_PARENTS,
  HEALTHY_CHILD,
  LEFT_HAND,
  LEADING_HAND,
  BIRTH_PUPIL,
  SECRETS_OF_EDUCATION,
  FINGER_GYMNASTICS,
  SOUNDS_LETTERS,
  SPEECH_INDICATORS,
  ARTICULATORY_EXERCISES,
  GAMES_WITH_LETTERS_AND_SOUNDS,
  TALK_IN_BELARUSIAN,
  Tongue_Twisters_Bel,
  PUZZELS,
  COUNTERS,
  TALK_FOR_YOU,
  WANT_ALL_KNOW,
  D_QUESTIONS,
  THEMATIC_ISSUES,
  LEARNING_TO_REASON,
  GAMES_BEL,
  WORLD,
  QUESTIONS_FOR_CHILD_SIX_YEAR,
  GAMES_RUS,
  WORLD_OF_MATHEMATIC,
  INDICATORS_OF_MATHEMATICAL_DEVELOPMENT,
  GAMES_MATH,
  WORLD_BEAUTIFUL,
  GAMES_BEAUTIFUL,
  CARTOONS,
  LEANING_TO_SCULPT,
  MOLD_PLASTICINE,
  MOLD_WITH_CHILDREN,
  BIRD,
  DINOSAURS,
  PONY,
  SMESHARIKI,
  SHIP,
  GUEST,
  GENIUS,
  Materials_For_Paper_Applications,
  Crafts_Of_Natural_Material,
  Making_caterpillar,
  Learning_Draw,
  Interactive_Coloring_Pages,
  TEST_FOR_PARENTS_NEW,
  FIRST_GREDER_PARENTS,
  PUPPIES,
  applications_from_circles,
  applications_from_napkins,
  Flower_Basket,
  SNOWDROPS,
  benefit_Of_Drawing,
  StepByStep_DrawingAnimals,
  StepByStep_Car,
  StepByStep_Flower,
  StepByStep_Man,
  StepByStep_Cold,
  Autumn_landscape,
  Pictures_of_natural_material,
  Christmas_tree_from_chestnuts,
  Crafts_from_chestnuts_and_acorns,
  SHELL_SCREWS,
  PISTACHKOVOE_TREE,
  HUMANS_FROM_SHISHEK,
  STICK_ACRONY_SEASON,
  FEATURES,
  FOR_USER,
  USED_SITE,
  TECH_H,
  GAMES_LOG,
  Puzzles_M,
  Learning_to_navigate_in_time,
} from './constants/constants';
//These libraries can really be a part of extension, but for performance reasons you can use standalone dependencies

global.jQuery = require('jquery/dist/jquery.min.js');
global.$ = global.jQuery;
require('font-awesome/css/font-awesome.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('./styles/style.css');
require('./styles/bootstarp.css');

const appHistory = hashHistory;

function onNewInnerRouteEnter(loadCommonData) {
  function loadData(nextState) {
    if (loadCommonData) {
      loadCommonData(nextState);
    }
  }
  return function (nextState) {
    loadData(nextState);
  }
}

ReactDOM.render(
  (
    <Router history={appHistory}>
      <Route>
        <Route >
          <Route onEnter={onNewInnerRouteEnter(RoutingService.initMain)}>
            <Route path={'/'} component={MainComponent}/>
            <Route path={`/${ABOUT_PROJECT_ID}`} component={AboutProjectComponent}/>
            <Route path={`/${ABOUT_US_URL}`} component={AboutUs}/>
            <Route path={`/${GUEST}`} component={Guest}/>
            <Route path={`/${FOR_USER}`} component={ForUser}/>
            <Route path={`/${FEATURES}`} component={Features}/>
            <Route path={`/${USED_SITE}`} component={Used}/>
            <Route path={`/${TECH_H}`} component={Tech}/>
            <Route path={`/${GAMES_LOG}`} component={GamesCatolog}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initParents)}>
            <Route path={`${FOR_PARENTS}`} component={Parents}/>
            <Route path={`${HEALTHY_CHILD}`} component={HealthyChild}/>
            <Route path={`/${Daily_regime}`} component={DailyRegime}/>
            <Route path={`/${HYGIENE}`} component={Hygiene}/>
            <Route path={`/${HARDENING}`} component={Hardening}/>
            <Route path={`/${Hyperactive_child}`} component={HyperactiveChild}/>
            <Route path={`/${PRIVICHKA_URL}`} component={Habits}/>
            <Route path={`/${LEFT_HAND}`} component={LeftHand}/>
            <Route path={`/${LEADING_HAND}`} component={LeadingHand}/>
            <Route path={`/${BIRTH_PUPIL}`} component={BirthPupil}/>
            <Route path={`/${SECRETS_OF_EDUCATION}`} component={SecretsOfEducation}/>
            <Route path={`${Articulatory_gymnastics}`} component={ArticulatoryGymnastics}/>
            <Route path={`/${Breathing_exercises}`} component={BreathingExercises}/>
            <Route path={`/${FINGER_GYMNASTICS}`} component={FingerGymnastics}/>

            <Route path={`/${DO_PARENTS_READY_TO_SCHOOL_URL}`} component={ParentsReadyToSchool}/>
            <Route path={`/${Indicators_of_parental_readiness}`} component={IndicatorsOfParentalReadiness}/>
            <Route path={`/${Frequent_misconceptions_of_parents}`} component={FrequentMisconceptionsOfParents}/>
            <Route path={`/${Memo_to_parents_of_future_first_graders}`} component={MemoToParentsOfFuture}/>
            <Route path={`/${How_parents_can_help_a_child}`} component={HowParentsCanHelpAChild}/>

            <Route path={`/${SCHOOL_OF_COMMUNICATION_FOR_CHILDREN_AND_ADULTS}`} component={SchoolOfCommunicationForChildrenAndAdults}/>
            <Route path={`/${LISTENING_SPEAKING}`} component={ListeningSpeaking}/>
            <Route path={`/${ORAL_SPEECH}`} component={OralSpeech}/>
            <Route path={`/${TALKING_ON_THE_PHONE}`} component={TalkingOnThePhone}/>
            <Route path={`/${EMOTIONAL_COLORING_OF_SPEECH}`} component={EmotionalColoringOfSpeech}/>
            <Route path={`/${EMOTIONS_ADN_COMMUNICATION}`} component={EmotionsAndCommunication}/>
            <Route path={`/${FACIAL_EXPRESSIONS_AND_GESTURES}`} component={FacialExpressionsAndGestures}/>
            <Route path={`/${HOW_TO_BEHAVE_AT_A_PARTY}`} component={HowToBehaveAtAParty}/>
            <Route path={`/${HOW_TO_MAKE_FRIENDS_WITH_STRANGERS}`} component={HowToMakeFriendsWithStrangers}/>
            <Route path={`/${HOW_TO_RECEIVE_GUESTS}`} component={HowToReceiveGuests}/>
            <Route path={`/${REQUEST_AND_REFUSAL}`} component={RequestAndRefusal}/>
            <Route path={`/${DISPUTE_WITHOUT_QUARREL}`} component={DisputeWithoutQuarrel}/>

            <Route path={`/${TEST_FOR_PARENTS}`} component={TestsForParents}/>
            <Route path={`/${GENIUS}`} component={Genius}/>

            <Route path={`/${TEST_FOR_PARENTS_NEW}`} component={TestsForParentsTemp}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initSoundsAndLetters)}>
            <Route path={`/${SOUNDS_LETTERS}`} component={SoundsAndLetters}/>
            <Route path={`/${SPEECH_INDICATORS}`} component={SpeechIndicators}/>
            <Route path={`${Tongues_and_tongue_twisters}`} component={TonguesAndTongueTwisters}/>
            <Route path={`${Tongue_twisters1}`} component={TongueTwisters}/>
            <Route path={`${Pagoda_in_pictures}`} component={PagodaInPictures}/>
            <Route path={`${GAMES_WITH_LETTERS_AND_SOUNDS}`} component={GamesWithLetters}/>
            <Route path={`${PERFECTING_THE_SPEECH}`} component={PerfectingTheSpeech}/>
            <Route path={`${ART_EXERCISES}`} component={ArtExercises}/>

            <Route path={`${Puzzles___}`} component={PuzzlesSAL}/>
            <Route path={`${Favorite__heroes}`} component={FavoriteHeroes}/>
            <Route path={`${Developing__the__speech}`} component={DevelopingTheSpeech}/>
            <Route path={`${Learning_the_alphabet}`} component={LearningTheAlphabet}/>
            <Route path={`${Learn_syllables}`} component={LearnSyllables}/>
            <Route path={`${Vowels_and_consonants}`} component={VowelsAndConsonants}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initTalkInBelarusian)}>
            <Route path={`/${TALK_IN_BELARUSIAN}`} component={TalkInBelarusian}/>
            <Route path={`/${Tongue_Twisters_Bel}`} component={TongueTwistersBel}/>
            <Route path={`/${PUZZELS}`} component={Puzzels}/>
            <Route path={`/${COUNTERS}`} component={Counters}/>
            <Route path={`/${LEARNING_TO_REASON}`} component={LearningToReason}/>
            <Route path={`/${TALK_FOR_YOU}`} component={TalkForYou}/>
            <Route path={`/${WANT_ALL_KNOW}`} component={WantAllKnow}/>
            <Route path={`/${D_QUESTIONS}`} component={DQuestions}/>
            <Route path={`/${THEMATIC_ISSUES}`} component={ThematicIssues}/>
            <Route path={`${Belarusian_cartoons}`} component={BelarusianCartoons}/>
            <Route path={`${Listening_to_fairy_tales}`} component={ListeningToFairyTales}/>
            <Route path={`${Listen_and_sing}`} component={ListenAndSing}/>
            <Route path={`${GAMES_BEL}`} component={Games}/>

            <Route path={`${Puzzles_Bel}`} component={PuzzlesBel}/>
            <Route path={`${Razgadai_zag}`} component={RazgadaiZ}/>
            <Route path={`${Narodnae_as}`} component={NarodnaeAs}/>
            <Route path={`${U_svete_pirodi}`} component={USvetePrirodi}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initWorld)}>
            <Route path={`/${WORLD}`} component={World}/>
            <Route path={`/${QUESTIONS_FOR_CHILD_SIX_YEAR}`} component={QuestionsForChildSix}/>
            <Route path={`/${GAMES_RUS}`} component={GamesRus}/>
            <Route path={`/${Healthy_lifestyle}`} component={HealthyLifestyle}/>
            <Route path={`/${My_motherland}`} component={MyMotherland}/>
            <Route path={`/${The_world_around}`} component={TheWorldAround}/>
            <Route path={`/${Living_and_inanimate_nature}`} component={LivingAndInanimateNature}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initWorldOfMathematic)}>
            <Route path={`/${WORLD_OF_MATHEMATIC}`} component={WorldOfMathematic}/>
            <Route path={`/${INDICATORS_OF_MATHEMATICAL_DEVELOPMENT}`} component={IndicatorsMathDev}/>
            <Route path={`/${GAMES_MATH}`} component={GamesMath}/>

            <Route path={`/${The_World_of_Geometry}`} component={TheWorldOfGeometry}/>
            <Route path={`/${Learning_to_compare}`} component={LearningToCompare}/>
            <Route path={`/${Learning_to_solve_problems}`} component={LearningToSolveProblems}/>
            <Route path={`/${Learning_to_add_and_subtract}`} component={LearningToAddAndSubtract}/>
            <Route path={`/${World_of_numbers}`} component={WorldOfNumbers}/>
            <Route path={`/${Learning_to_navigate_in_time}`} component={LearningToNavigateInTime}/>
            <Route path={`/${Puzzles_M}`} component={PuzzlesM}/>
          </Route>

          <Route onEnter={onNewInnerRouteEnter(RoutingService.initWorldBeautiful)}>
            <Route path={`/${WORLD_BEAUTIFUL}`} component={WorldBeautiful}/>
            <Route path={`/${GAMES_BEAUTIFUL}`} component={GamesBeautiful}/>
            <Route path={`/${CARTOONS}`} component={Cartoons}/>
            <Route path={`/${LEANING_TO_SCULPT}`} component={LearningToSculpt}/>
            <Route path={`/${MOLD_PLASTICINE}`} component={MoldPlasticine}/>
            <Route path={`/${MOLD_WITH_CHILDREN}`} component={MoldWithChildren}/>
            <Route path={`/${BIRD}`} component={Bird}/>
            <Route path={`/${DINOSAURS}`} component={Dinosaurs}/>
            <Route path={`/${PONY}`} component={Pony}/>
            <Route path={`/${SMESHARIKI}`} component={Smeshariki}/>
            <Route path={`/${SHIP}`} component={Ship}/>
            <Route path={`/${LEARNIG_TO_MAKE_OF_PAPER}`} component={LearningToMakeOfPaper}/>
            <Route path={`/${Materials_For_Paper_Applications}`} component={MaterialsForPaperApplications}/>
            <Route path={`/${Crafts_Of_Natural_Material}`} component={Crafts}/>
            <Route path={`/${Making_caterpillar}`} component={MakingCaterpillar}/>
            <Route path={`/${Learning_Draw}`} component={LearningDraw}/>
            <Route path={`/${Interactive_Coloring_Pages}`} component={InteractiveColoringPages}/>
            <Route path={`/${Applications_from_natural_materials}`} component={ApplicationsFromNaturalMaterials}/>
            <Route path={`/${BREAKFAST_APPLICATION}`} component={BreakfastApplication}/>
            <Route path={`/${AUTUMN_LEAVES}`} component={AutumnLeaves}/>
            <Route path={`/${GLADE}`} component={Glade}/>
            <Route path={`/${LILAC}`} component={Lilac}/>
            <Route path={`/${HEDGEHOG}`} component={Hedgehog}/>
            <Route path={`/${CHICK}`} component={Chick}/>
            <Route path={`/${LADYBUG}`} component={Ladybug}/>
            <Route path={`/${PUPPIES}`} component={Puppies}/>
            <Route path={`/${BOUQUET}`} component={Bouquet}/>
            <Route path={`/${applications_from_circles}`} component={AppFromCircles}/>
            <Route path={`/${applications_from_napkins}`} component={AppFromNapkins}/>
            <Route path={`/${Flower_Basket}`} component={FlowerBasket}/>
            <Route path={`/${SNOWDROPS}`} component={Snowdrops}/>
            <Route path={`/${benefit_Of_Drawing}`} component={BenefitOfDrawing}/>
            <Route path={`/${StepByStep_DrawingAnimals}`} component={StepByStepAnimals}/>
            <Route path={`/${StepByStep_Car}`} component={StepByStepCar}/>
            <Route path={`/${StepByStep_Flower}`} component={StepByStepFlower}/>
            <Route path={`/${StepByStep_Man}`} component={StepByStepMan}/>
            <Route path={`/${StepByStep_Cold}`} component={StepByStepCold}/>
            <Route path={`/${Autumn_landscape}`} component={AutumnLandscape}/>

            <Route path={`/${FUN_FROG}`} component={FunFrog}/>
            <Route path={`/${Pictures_of_natural_material}`} component={PicturesOfNatural}/>
            <Route path={`/${Christmas_tree_from_chestnuts}`} component={ChristmasTreeFromChestnuts}/>
            <Route path={`/${Crafts_from_chestnuts_and_acorns}`} component={CraftsFromChestnutsAndAcorns}/>
            <Route path={`/${SHELL_SCREWS}`} component={ShellScrews}/>
            <Route path={`/${PISTACHKOVOE_TREE}`} component={PistachkovoeTree}/>
            <Route path={`/${HUMANS_FROM_SHISHEK}`} component={HumansFromShishek}/>
            <Route path={`/${STICK_ACRONY_SEASON}`} component={StickAcroneSeason}/>

            <Route path={`/${Puzzles_B_}`} component={PuzzlesB}/>
            <Route path={`/${Artistic_work_}`} component={ArtisticWork}/>
            <Route path={`/${Musical_art_}`} component={MusicalArt}/>
            <Route path={`/${ART_}`} component={ArtB}/>
            <Route path={`/${Learning_to_draw_}`} component={LearningToDraw}/>
          </Route>


          <Route onEnter={onNewInnerRouteEnter(RoutingService.initForum)}>
            <Route path={`${FORUM_URL}`} component={Forum}/>
            <Route path={`${FIRST_GREDER_2016}`} component={FirstGrader2016}/>
            <Route path={`${FIRST_GREDER_PARENTS}`} component={FirstGraderParents}/>

          </Route>

          <Route path={`${OTHERS_URL}`} component={Other}/>

        </Route>
      </Route>
    </Router>
  ), document.getElementById('app'));
