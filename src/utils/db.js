//main page countries list
import croatia from '../assets/images/countries/croatia.webp'
import nigeria from '../assets/images/countries/Nigeria.webp'
import ontario from '../assets/images/countries/Ontario.webp'
import brazil from '../assets/images/countries/brazil.webp'
import china from '../assets/images/countries/china.webp'
import denmark from '../assets/images/countries/denmark.webp'
import dominican from '../assets/images/countries/dominican-republic.webp'
import greece from '../assets/images/countries/greece.webp'
import hawaii from '../assets/images/countries/hawaii.webp'
import japan from '../assets/images/countries/japan.webp'
import jordan from '../assets/images/countries/jordan.webp'
import nambia from '../assets/images/countries/nambia.webp'

//stories page stories list
import hawaiiStories from '../assets/images/stories/the-best-time-to-visit-hawaii.webp';
import puertoRicoStories from '../assets/images/stories/10-ways-to see-puerto-rico-on-a-budget.webp';
import sanAntonioStories from '../assets/images/stories/6-best-day-trip-to-san-antonio-texas.webp';
import pragueStories from '../assets/images/stories/5-of-the-best-places-to-visit-as-a-disabled.webp';
import budapestStories from '../assets/images/stories/fun-visit-to-budapest.webp';
import athensStories from '../assets/images/stories/how-to-move-around-athens.webp';

//croatia sights photos
import Split from '../assets/images/croatia/split.webp'
import PlitviceNationalPark from '../assets/images/croatia/Plitvice.webp'
import Porec from '../assets/images/croatia/porec.webp';
import Sibenik from '../assets/images/croatia/sibenik.webp';
import Ravinj from '../assets/images/croatia/ravinj.webp';
import Rijeka from '../assets/images/croatia/rijeka.webp';
import Zagreb from '../assets/images/croatia/zagreb.webp';
import Dubrovnik from '../assets/images/croatia/dubrovnic.webp';
import ZagrebZoo from '../assets/images/croatia/zagrebZoo.webp';
import GrandParkHotel from '../assets/images/croatia/grandParkHotel.webp';
import DalmatianCoast from '../assets/images/croatia/dalmatianCoast.webp';
import PulaCity from '../assets/images/croatia/pulaCity.webp';

//croatia stories photos
import aWonderfullJourneyToCroatia from '../assets/images/stories/a-wonderfull-journey-to-croatia.webp';
import aSoloTripAcrossEurope from '../assets/images/stories/a-solo-trip-across-europe.webp';

const sights = [
  {
    name: 'Сплит',
    value: 'Split',
    photo: Split,
  },
  {
    name: 'Пореч',
    value: 'Porec',
    photo: Porec,
  },
  {
    name: 'Шибеник',
    value: 'Sibenik',
    photo: Sibenik,
  },
  {
    name: 'Ровинь',
    value: 'Ravinj',
    photo: Ravinj,
  },
  {
    name: 'Риека',
    value: 'Rijeka',
    photo: Rijeka,
  },
  {
    name: 'Загреб',
    value: 'Zagreb',
    photo: Zagreb,
  },
]


const stories = [
  {
    title: 'Замечательное путешествие в Хорватию',
    href: 'a-wonderfull-journey-to-croatia',
    short: 'Хорватия — страна, которая кажется вырванной из страниц фэнтезийного романа. Здесь каждый городок хранит свою историю, а природа настолько красива, что порой трудно поверить, что это не декорация для какого-нибудь фильма.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Риека, Хорватия',
    photo: aWonderfullJourneyToCroatia,
  },
  {
    title: 'Одиночное путешествие по Европе',
    href: 'a-solo-trip-across-europe',
    short: 'Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.',
    time: '27 фев, 2024 • ⏲ 5 мин',
    place: 'Пореч, Хорватия',
    photo: aSoloTripAcrossEurope,
  },
  {
    title: 'Одиночное путешествие по Европе',
    href: 'a-solo-trip-across-europe',
    short: 'Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.',
    time: '27 фев, 2024 • ⏲ 5 мин',
    place: 'Пореч, Хорватия',
    photo: aSoloTripAcrossEurope,
  },
]

const otherSights = [
  {
    name: 'Плитвицкий Национальный Парк',
    value: 'Plitvice National Park',
    photo: PlitviceNationalPark,
  },
  {
    name: 'Ресторан Дубровник',
    value: 'Dubrovnik Restaurant',
    photo: Dubrovnik,
  },
  {
    name: 'Загребский Зоопарк',
    value: 'Zagreb Zoo',
    photo: ZagrebZoo,
  },
  {
    name: 'Grand Park Hotel',
    value: 'Grand Park Hotel',
    photo: GrandParkHotel,
  },
  {
    name: 'Далмация',
    value: 'The Dalmatian coast',
    photo: DalmatianCoast,
  },
  {
    name: 'Пула',
    value: 'The Pula City',
    photo: PulaCity,
  },
]

export const countriesList = [
  {
    name: 'Хорватия',
    continent: 'Европа',
    href: 'croatia',
    photo: croatia,
    description: 'Хорватия - это увлекательное место с широким спектром достопримечательностей, включая красивые прибрежные города, потрясающие национальные парки, очаровательные приморские городки и живописные острова. Страна обладает богатой историей и культурой, древними руинами, впечатляющей архитектурой и яркой культурной жизнью.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Нигерия',
    continent: 'Африка',
    href: 'nigeria',
    photo: nigeria,
    description: 'Нигерия — сердце Африки с невероятным культурным разнообразием, множеством этнических групп и уникальными природными ландшафтами: от тропических лесов до саванн. Это страна с быстро развивающимися мегаполисами и богатым музыкальным наследием.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Онтарио',
    continent: 'Северная Америка',
    href: 'ontario',
    photo: ontario,
    description: 'Онтарио — крупнейшая провинция Канады, сочетающая природные чудеса, такие как Ниагарский водопад, с оживлённой жизнью крупных городов, включая Торонто и Оттаву. Богатое культурное наследие делает её обязательной для посещения.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Бразилия',
    continent: 'Южная Америка',
    href: 'brazil',
    photo: brazil,
    description: 'Бразилия — страна ритма и природы. Амазонка, тропические пляжи, яркий карнавал и знаменитая статуя Христа в Рио-де-Жанейро делают её одной из самых колоритных и незабываемых стран мира.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Китай',
    continent: 'Азия',
    href: 'china',
    photo: china,
    description: 'Китай — страна с тысячелетней историей, великими династиями и культурой, оказавшей влияние на весь Восток. От Великой Китайской стены до современных мегаполисов — это место, где прошлое и будущее встречаются.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Дания',
    continent: 'Европа',
    href: 'denmark',
    photo: denmark,
    description: 'Дания — скандинавская жемчужина с уютными городами, современным дизайном и викингским прошлым. Здесь можно насладиться гармонией природы и прогрессивного общества.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Доминикана',
    continent: 'Северная Америка',
    href: 'dominican-republic',
    photo: dominican,
    description: 'Доминиканская Республика — это белоснежные пляжи, теплое Карибское море и ритмы меренге. Туристический рай с богатой историей и дружественной атмосферой.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Греция',
    continent: 'Европа',
    href: 'greece',
    photo: greece,
    description: 'Греция — колыбель западной цивилизации. Мифы, древние храмы, лазурное Эгейское море и невероятная кухня создают атмосферу, где оживает история.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Гавайи',
    continent: 'Северная Америка',
    href: 'hawaii',
    photo: hawaii,
    description: 'Гавайи — это рай на земле с вулканами, водопадами и волнами. Уникальное сочетание природы и культуры коренных народов делает это место по-настоящему волшебным.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Япония',
    continent: 'Азия',
    href: 'japan',
    photo: japan,
    description: 'Япония — страна контрастов: от неоновых улиц Токио до тишины храмов Киото. Традиции и технологии сосуществуют здесь в гармонии.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Иордания',
    continent: 'Азия',
    href: 'jordan',
    photo: jordan,
    description: 'Иордания — земля древности. Петра, пустыня Вади-Рам и Мёртвое море создают ощущение, что ты попал в другой мир. Гостеприимство и богатая история манят путешественников.',
    sights,
    stories,
    otherSights,
  },
  {
    name: 'Намибия',
    continent: 'Африка',
    href: 'nambia',
    photo: nambia,
    description: 'Намибия — страна пустынь и дикой природы. Здесь можно увидеть красные дюны Соссусфлея, слонов в Этоше и почувствовать дыхание настоящей Африки.',
    sights,
    stories,
    otherSights,
  },
];

export const storiesList = [
  {
    title: 'Лучшее Время для Посещения Гаваи',
    href: 'the-best-time-to-visit-hawaii',
    short: 'Меня всегда интересовала духовность, поэтому я решил совершить годичное путешествие в Индию, чтобы изучить различные религиозные практики и традиции.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Гаваи, США',
    photo: hawaiiStories,
  },
  {
    title: '10 Способов Увидеть Пуэрто-Рико с Ограниченным Бюджетом',
    href: '10-ways-to see-puerto-rico-on-a-budget',
    short: 'Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Пуэрто-Рико, США',
    photo: puertoRicoStories,
  },
  {
    title: '6 Лучших Дней из Путешествия в Сан-Антонио, Техас',
    href: '6-best-day-trip-to-san-antonio-texas',
    short: 'Было прекрасное весеннее утро, когда я прибыл в Катманду, столицу Непала. Как только я вышел из аэропорта, меня поразили яркие краски и хаос на улицах.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Сан-Антонио, Техас',
    photo: sanAntonioStories,
  },
  {
    title: '5 Лучших Мест для Посещения Людьми с Ограниченными Возможностями',
    href: '5-of-the-best-places-to-visit-as-a-disabled',
    short: 'Я посетил Прагу, прекрасную столицу Чешской Республики, и одним из моих любимых мест в городе был холм Петрин. Холм Петрин - это зеленый оазис в самом сердце Праги.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Прага, Чехия',
    photo: pragueStories,
  },
  {
    title: 'Веселая Поездка в Будапешт',
    href: 'fun-visit-to-budapest',
    short: 'Меня всегда интересовала духовность, поэтому я решил совершить годичное путешествие в Индию, чтобы изучить различные религиозные практики и традиции.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Будапешт, Венгрия',
    photo: budapestStories,
  },
  {
    title: 'Как передвигаться по Афинам',
    href: 'how-to-move-around-athens',
    short: 'Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Афины, Греция',
    photo: athensStories,
  },
  {
    title: 'Замечательное путешествие в Хорватию',
    href: 'a-wonderfull-journey-to-croatia',
    short: 'Хорватия — страна, которая кажется вырванной из страниц фэнтезийного романа. Здесь каждый городок хранит свою историю, а природа настолько красива, что порой трудно поверить, что это не декорация для какого-нибудь фильма.',
    time: '27 фев, 2024 • ⏲ 8 мин',
    place: 'Риека, Хорватия',
    photo: aWonderfullJourneyToCroatia,
  },
  {
    title: 'Одиночное путешествие по Европе',
    href: 'a-solo-trip-across-europe',
    short: 'Я только что окончил колледж и решил отправиться в шестимесячное одиночное путешествие по Европе, прежде чем начать свою карьеру. Я путешествовал с рюкзаком по 15 разным странам, останавливаясь в хостелах и встречаясь с людьми.',
    time: '27 фев, 2024 • ⏲ 5 мин',
    place: 'Пореч, Хорватия',
    photo: aSoloTripAcrossEurope,
  },
];
