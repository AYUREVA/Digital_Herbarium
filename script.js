const PLANTS = [
  {
    id: 1,
    name: "Рододендрон даурский",
    latin: "Rhododendron dauricum L.",
    date: "28 апреля 2026 г.",
    category: "flowers",
    image: "./images/rhododendron-dauricum.jpeg",
    rotation: -2.5,
    tapeTopLeft: "tape-yellow",
    tapeTopRight: "tape-clear",
    hasWaxSeal: true,
    hasBadge: true,
    badgeText: "Раннее цветение",
    note: "Листопадный или полувечнозеленый кустарник до 2 м высотой. Молодые побеги ржаво-бурого цвета. Листья мелкие, овальные, кожистые, на зиму скручиваются в трубочку и частично опадают. Цветки крупные, воронковидные, розово-фиолетовые. Цветет очень рано до распускания листьев. Лекарственное сырье: листья второго и третьего года жизни, которые собирают в период цветения и летом. Свойства и применение: кардиотоническое, диуретическое, противовоспалительное; применяется при сердечной недостаточности, отеках сердечного происхождения, ревматизме, как мочегонное, наружно — для ванн при радикулите. Противопоказания: беременность, лактация, некрозы тканей, тяжелые поражения почек и печени. Содержит гликозид андромедотоксин, угнетающий ЦНС, поэтому прием без точной дозировки под наблюдением врача опасен. Не является краснокнижным, но массовый сбор цветущих веток наносит большой ущерб популяциям.",
    habitat: "Светлые лиственничные и сосновые леса, каменистые склоны и осыпи",
    collector: "Егор Юрьев",
    locale: "Приморье: Тернейский, Красноармейский, Пожарский и Дальнегорский районы",
  },
  {
    id: 2,
    name: "Лимонник китайский",
    latin: "Schisandra chinensis (Turcz.) Baill.",
    date: "20 сентября 2026 г.",
    category: "flowers",
    image: "./images/schisandra-chinensis.jpeg",
    rotation: 1.8,
    tapeTopLeft: "tape-blue",
    tapeTopRight: "tape-yellow",
    hasBadge: true,
    badgeText: "Адаптоген",
    note: "Деревянистая лиана длиной до 10-15 м, обвивающая деревья. Стебель с шелушащейся корой. Листья эллиптические, с характерным лимонным запахом. Растение однодомное. Плоды — сочные красные ягоды, собранные в плотную кисть. Вкус мякоти кислый, кожицы — сладковатый, семян — горько-жгучий и терпкий. Все части растения имеют лимонный аромат. Лекарственное сырье: зрелые плоды и семена, собираемые в сентябре-октябре. Свойства и применение: мощный стимулятор ЦНС и адаптоген; повышает артериальное давление, усиливает остроту зрения, умственную и физическую работоспособность, применяется при переутомлении, сонливости, гипотонии и в период восстановления после болезней. Противопоказания: артериальная гипертензия, бессонница, нервное возбуждение, нарушения сердечной деятельности, эпилепсия, беременность и острые инфекционные заболевания. Не ядовит, но передозировка может вызвать перевозбуждение, тахикардию и бессонницу. Широко распространен и культивируется.",
    habitat: "Смешанные и широколиственные леса, опушки, прогалины, долины рек и ручьев",
    collector: "Егор Юрьев",
    locale: "Приморье: долины Уссури и Бикина, предгорья Сихотэ-Алиня, центральные и южные районы края",
  },
  {
    id: 3,
    name: "Зверобой продырявленный",
    latin: "Hypericum perforatum L.",
    date: "22 июня 2026 г.",
    category: "herbs",
    image: "./images/hypericum-perforatum.jpeg",
    rotation: -1.2,
    tapeTopLeft: "tape-green",
    tapeTopRight: "tape-clear",
    hasWaxSeal: true,
    hasBadge: true,
    badgeText: "Июнь-июль",
    note: "Многолетнее травянистое растение высотой до 60-80 см. Стебель двугранный. Листья супротивные, продолговатые, с многочисленными просвечивающими точками-железками. При растирании цветочного бутона между пальцами появляется фиолетовое окрашивание. Цветки ярко-желтые, собраны в щитковидное соцветие. Лекарственное сырье: верхушки цветущих растений длиной до 25-30 см, собранные в начале массового цветения в июне-июле. Свойства и применение: антидепрессант легкого и среднего действия, противовоспалительное, вяжущее, антисептическое и регенерирующее средство; применяется при тревожности, бессоннице, гастритах, энтеритах и колитах, а наружно — для полосканий, примочек и масляных повязок при ожогах, ранах и абсцессах. Противопоказания: тяжелая депрессия, фотодерматоз, беременность, лактация, прием антикоагулянтов и оральных контрацептивов. Не ядовит при курсовом применении, но обладает кумулятивным эффектом и может быть гепатотоксичным при длительном бесконтрольном употреблении. Широко распространен, не охраняется и легко возобновляется самосевом.",
    habitat: "Суходольные луга, лесные поляны, опушки, залежи и участки вдоль дорог",
    collector: "Егор Юрьев",
    locale: "Приморье: южные и центральные районы, включая Хасанский, Уссурийский, Ханкайский, Михайловский и Спасский районы",
  },
  {
    id: 4,
    name: "Щитовник мужской",
    latin: "Dryopteris filix-mas (L.) Schott",
    date: "18 сентября 2026 г.",
    category: "ferns",
    image: "./images/dryopteris-filix-mas.jpeg",
    rotation: 2.1,
    tapeTopLeft: "tape-pink",
    tapeTopRight: "tape-blue",
    hasBadge: true,
    badgeText: "Ядовит",
    note: "Крупный многолетний папоротник высотой до 1 м. Корневище толстое, короткое, косовосходящее, покрыто остатками листовых черешков и ржаво-бурыми чешуями. Вайи крупные, дваждыперистые, собраны в воронковидную розетку. Спорангии расположены на нижней стороне листьев и прикрыты почковидным покрывальцем. Лекарственное сырье: корневища, заготавливаемые осенью. Свойства и применение: противоглистное средство, наиболее эффективное против ленточных червей; действующие вещества парализуют мускулатуру паразита, после чего он изгоняется с помощью слабительного. В современной медицине почти не применяется из-за высокой токсичности и наличия более безопасных синтетических препаратов, но используется в ветеринарии. Противопоказания: беременность, лактация, сердечная недостаточность, болезни печени и почек, язва желудка, анемия, истощение, детский возраст. Сильно ядовит, препараты папоротника поражают нервную систему, сердечную мышцу, печень и почки, поэтому применение возможно только под строгим врачебным контролем в стационаре. Широко распространен в лесах, но заготовка и использование требуют крайней осторожности и специальных знаний.",
    habitat: "Тенистые влажные хвойные, смешанные и широколиственные леса, горные и предгорные районы",
    collector: "Егор Юрьев",
    locale: "Приморье: Лазовский, Чугуевский, Партизанский, Тернейский и Шкотовский районы",
  },
  {
    id: 5,
    name: "Адонис амурский",
    latin: "Adonis amurensis Regel & Radde",
    date: "9 апреля 2026 г.",
    category: "flowers",
    image: "./images/adonis-amurensis.jpeg",
    rotation: -0.8,
    tapeTopLeft: "tape-yellow",
    tapeTopRight: "tape-pink",
    hasWaxSeal: true,
    hasBadge: true,
    badgeText: "Ядовит",
    note: "Многолетнее травянистое растение высотой до 30-40 см с коротким корневищем. Цветет ранней весной, в апреле, до появления листьев. Цветки крупные, золотисто-желтые, одиночные, располагаются на верхушках побегов. После цветения развиваются ажурные, трижды перисто-рассеченные листья. Плод — многоорешек. Все растение ядовито. Лекарственное сырье: трава, включающая стебли, листья, цветки и незрелые плоды, собранная от начала цветения до осыпания плодов. Свойства и применение: кардиотоническое средство, близкое по действию к ландышу и наперстянке, с менее продолжительным эффектом и меньшей кумуляцией; усиливает и замедляет сердечные сокращения, успокаивает нервную систему и обладает диуретическим действием. Применяется при хронической сердечной недостаточности, неврозах сердца, вегето-сосудистой дистонии и почечных отеках. Противопоказания: язвенная болезнь, гастрит, энтероколит, нарушения проводимости сердца, гипертрофическая кардиомиопатия. Несовместим с препаратами наперстянки. Ядовит, симптомы отравления сходны с отравлением ландышем, поэтому лечение должно проводиться только под наблюдением врача. В природе местами обычен, но страдает от сбора на букеты и выкопки для садов, поэтому требует охраны и регулируемого сбора.",
    habitat: "Кедрово-широколиственные и смешанные леса, прогалины, опушки, кустарниковые заросли на богатых перегнойных почвах",
    collector: "Егор Юрьев",
    locale: "Приморье: Уссурийский, Шкотовский, Партизанский, Лазовский, Чугуевский и Анучинский районы",
  },
  {
    id: 6,
    name: "Девясил высокий",
    latin: "Inula helenium L.",
    date: "14 сентября 2026 г.",
    category: "herbs",
    image: "./images/inula-helenium.jpeg",
    rotation: 1.5,
    tapeTopLeft: "tape-clear",
    tapeTopRight: "tape-yellow",
    hasBadge: true,
    badgeText: "Корневища",
    note: "Крупное многолетнее травянистое растение высотой до 2-2.5 м с толстым мясистым темным корневищем, обладающим своеобразным ароматом. Стебель бороздчатый, ветвистый в верхней части. Листья крупные, эллиптические, сверху жесткоопушенные, снизу бархатистые. Соцветия — крупные желтые корзинки диаметром 5-8 см. Лекарственное сырье: корневища и корни, заготавливаемые осенью. Свойства и применение: отхаркивающее, противовоспалительное, желчегонное, мочегонное, противоязвенное средство; применяется при хронических заболеваниях дыхательных путей, гастритах, язвенной болезни, заболеваниях печени и желчного пузыря, геморрое. Обладает антигельминтным действием, особенно против аскарид. Противопоказания: тяжелые заболевания сердечно-сосудистой системы и почек, беременность, гастрит с пониженной секрецией, атонические запоры. Не ядовит, но в больших дозах может вызвать рвоту, диарею и спазмы. В природе местами редок, поэтому чаще используется сырье с культивируемых плантаций и приусадебных участков.",
    habitat: "Влажные луга, разреженные леса, берега рек и лесные поляны",
    collector: "Егор Юрьев",
    locale: "Приморье: Уссурийский, Ханкайский, Михайловский, Спасский и Черниговский районы",
  },
  {
    id: 7,
    name: "Бадан толстолистный",
    latin: "Bergenia crassifolia (L.) Fritsch",
    date: "17 апреля 2026 г.",
    category: "herbs",
    image: "./images/bergenia-crassifolia.jpeg",
    rotation: -1.9,
    tapeTopLeft: "tape-blue",
    tapeTopRight: "tape-green",
    hasWaxSeal: true,
    hasBadge: true,
    badgeText: "Чигирский чай",
    note: "Многолетнее вечнозеленое травянистое растение с мощным ползучим поверхностным корневищем. Листья крупные, кожистые, блестящие, округлые, собраны в прикорневую розетку; осенью и зимой приобретают красно-бурую окраску. Цветки колокольчатые, розовые или лилово-розовые, собраны в густое метельчатое соцветие на безлистном цветоносе. Цветет ранней весной. Лекарственное сырье: старые перезимовавшие листья, прошедшие естественную ферментацию, реже корневища. Свойства и применение: вяжущее, противовоспалительное, кровоостанавливающее, антисептическое, мочегонное и умеренное гипотензивное средство; используется при заболеваниях ЖКТ, в гинекологии, наружно — для полосканий и спринцеваний. Из ферментированных листьев заваривают знаменитый чигирский или монгольский чай с тонизирующими свойствами. Противопоказания: склонность к запорам, тромбофлебит, повышенная свертываемость крови, гипотония. Не ядовит, но длительный прием в больших дозах может спровоцировать запор. Широко распространен в горах и не охраняется, однако при сборе листьев нельзя повреждать молодые розетки.",
    habitat: "Каменистые склоны, скалы, осыпи, каменноберезовые и хвойные леса Сихотэ-Алиня",
    collector: "Егор Юрьев",
    locale: "Приморье: Тернейский, Красноармейский, Чугуевский и Пожарский районы",
  },
  {
    id: 8,
    name: "Облепиха крушиновидная",
    latin: "Hippophae rhamnoides L.",
    date: "3 октября 2026 г.",
    category: "trees",
    image: "./images/hippophae-rhamnoides.jpeg",
    rotation: 2.8,
    tapeTopLeft: "tape-pink",
    tapeTopRight: "tape-clear",
    hasBadge: true,
    badgeText: "Витаминное",
    note: "Двудомный колючий кустарник или небольшое дерево высотой до 3-5 м. Листья линейно-ланцетные, сверху серовато-зеленые, снизу серебристые от звездчатых чешуек. Цветки невзрачные. Плоды — сочные оранжевые или желтые костянки, густо облепляющие ветви, с кислым вкусом. Лекарственное сырье: плоды, семена и облепиховое масло, получаемое из мякоти плодов и семян. Свойства и применение: поливитаминное, ранозаживляющее, противовоспалительное, иммуномодулирующее и радиопротекторное средство. Масло применяется при ожогах, обморожениях, пролежнях, трофических язвах, лучевых поражениях кожи, эрозиях и кольпитах. Внутрь используется при язвенной болезни желудка и двенадцатиперстной кишки, гипо- и авитаминозах. Противопоказания: острые заболевания печени, желчного пузыря и поджелудочной железы, желчнокаменная болезнь для приема масла внутрь, склонность к диарее. Не ядовита. В природе редка, но как культурное растение широко выращивается в садах, на дачных участках и в лесозащитных полосах.",
    habitat: "Песчаные берега и галечники рек, а чаще культивируемые сады, лесополосы и приусадебные участки",
    collector: "Егор Юрьев",
    locale: "Приморье: редка в диком виде, встречается у Раздольной; широко культивируется по всему краю",
  },
];

const CATEGORY_DEFS = [
  { id: "all", label: "Все образцы", icon: "🌿" },
  { id: "flowers", label: "Цветы", icon: "🌸" },
  { id: "trees", label: "Деревья", icon: "🌳" },
  { id: "ferns", label: "Папоротники", icon: "🌿" },
  { id: "herbs", label: "Травы и коренья", icon: "🌱" },
];

const NAV_TABS = ["Коллекция"];

const state = {
  activeCategory: "all",
  activeTab: "Коллекция",
  searchQuery: "",
  selectedPlantId: null,
  addFormOpen: false,
};

const root = document.getElementById("root");

function waxSealMarkup() {
  return `
    <div class="wax-seal">
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 8 C58 6, 68 10, 74 16 C82 20, 88 28, 90 36 C94 44, 94 54, 90 62 C86 70, 80 78, 72 83 C64 88, 54 92, 45 90 C36 88, 28 82, 22 76 C14 70, 8 62, 7 53 C5 44, 8 34, 14 26 C20 18, 30 10, 40 8 Z" fill="#7a1515"></path>
        <path d="M50 14 C56 13, 64 16, 69 22 C75 27, 79 35, 80 42 C82 50, 80 58, 76 65 C72 72, 65 77, 57 79 C49 81, 41 80, 34 76 C27 72, 22 65, 20 58 C17 50, 18 42, 22 36 C26 28, 34 20, 42 16 Z" fill="#8f1c1c"></path>
        <ellipse cx="38" cy="30" rx="8" ry="5" fill="rgba(255,200,180,0.18)" transform="rotate(-20, 38, 30)"></ellipse>
        <g fill="none" stroke="#f5e0c0" stroke-width="1.4" opacity="0.85">
          <circle cx="50" cy="50" r="22" stroke-width="1" opacity="0.7"></circle>
          <circle cx="50" cy="50" r="17" stroke-width="0.7" opacity="0.5"></circle>
          <path d="M50 32 Q54 40 50 50 Q46 40 50 32Z"></path>
          <path d="M50 68 Q54 60 50 50 Q46 60 50 68Z"></path>
          <path d="M32 50 Q40 54 50 50 Q40 46 32 50Z"></path>
          <path d="M68 50 Q60 54 50 50 Q60 46 68 50Z"></path>
          <circle cx="50" cy="29" r="1.2" fill="#f5e0c0" stroke="none"></circle>
          <circle cx="50" cy="71" r="1.2" fill="#f5e0c0" stroke="none"></circle>
          <circle cx="71" cy="50" r="1.2" fill="#f5e0c0" stroke="none"></circle>
          <circle cx="29" cy="50" r="1.2" fill="#f5e0c0" stroke="none"></circle>
        </g>
        <path id="sealArc" d="M50,50 m -20,0 a 20,20 0 1,1 40,0" fill="none"></path>
        <text font-size="5.5" fill="#f5e0c0" opacity="0.80" font-family="serif" letter-spacing="1.5">
          <textPath href="#sealArc" startOffset="8%">✦ HERBARIUM BOTANICUM ✦</textPath>
        </text>
      </svg>
    </div>
  `;
}

function cornerDecoMarkup() {
  return `
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 56 Q4 4 56 4" stroke="#8b6914" stroke-width="1.2" fill="none"></path>
      <path d="M4 56 Q4 20 40 4" stroke="#8b6914" stroke-width="0.6" fill="none" opacity="0.5"></path>
      <circle cx="4" cy="56" r="3" fill="#8b6914" opacity="0.5"></circle>
      <circle cx="56" cy="4" r="3" fill="#8b6914" opacity="0.5"></circle>
      <path d="M14 46 Q18 30 34 14" stroke="#8b6914" stroke-width="0.5" fill="none" opacity="0.3"></path>
      <path d="M4 44 Q10 40 16 44 Q10 48 4 44Z" fill="#8b6914" opacity="0.35"></path>
      <path d="M18 4 Q22 10 18 16 Q14 10 18 4Z" fill="#8b6914" opacity="0.35"></path>
    </svg>
  `;
}

function deckledEdgesMarkup() {
  return `
    <svg aria-hidden="true" style="position: fixed; top: 0; left: 0; right: 0; width: 100%; height: 28px; z-index: 997; pointer-events: none; display: block;" viewBox="0 0 1440 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L0,10 Q18,28 36,16 Q54,4 72,20 Q90,28 108,14 Q126,4 144,18 Q162,28 180,12 Q198,4 216,20 Q234,28 252,14 Q270,4 288,18 Q306,28 324,16 Q342,6 360,22 Q378,28 396,12 Q414,4 432,18 Q450,28 468,16 Q486,6 504,20 Q522,28 540,14 Q558,4 576,18 Q594,28 612,16 Q630,6 648,20 Q666,28 684,12 Q702,4 720,18 Q738,28 756,16 Q774,6 792,20 Q810,28 828,14 Q846,4 864,18 Q882,28 900,16 Q918,6 936,22 Q954,28 972,14 Q990,4 1008,18 Q1026,28 1044,16 Q1062,6 1080,20 Q1098,28 1116,12 Q1134,4 1152,18 Q1170,28 1188,16 Q1206,6 1224,20 Q1242,28 1260,14 Q1278,4 1296,18 Q1314,28 1332,16 Q1350,6 1368,20 Q1386,28 1440,18 L1440,0 Z" fill="rgba(28,16,6,0.16)"></path>
      <path d="M0,0 L0,6 Q22,18 44,10 Q66,2 88,14 Q110,22 132,8 Q154,2 176,14 Q198,22 220,8 Q242,2 264,16 Q286,22 308,10 Q330,2 352,16 Q374,24 396,10 Q418,2 440,14 Q462,24 484,10 Q506,2 528,16 Q550,22 572,10 Q594,2 616,16 Q638,24 660,10 Q682,2 704,14 Q726,24 748,10 Q770,2 792,14 Q814,24 836,12 Q858,2 880,16 Q902,24 924,10 Q946,2 968,16 Q990,24 1012,10 Q1034,2 1056,14 Q1078,24 1100,10 Q1122,2 1144,16 Q1166,24 1188,10 Q1210,2 1232,14 Q1254,24 1276,10 Q1298,2 1320,16 Q1342,24 1364,10 Q1386,2 1440,12 L1440,0 Z" fill="rgba(18,10,4,0.10)"></path>
    </svg>
    <svg aria-hidden="true" style="position: fixed; bottom: 0; left: 0; right: 0; width: 100%; height: 28px; z-index: 997; pointer-events: none; display: block; transform: rotate(180deg);" viewBox="0 0 1440 28" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0,0 L0,10 Q18,28 36,16 Q54,4 72,20 Q90,28 108,14 Q126,4 144,18 Q162,28 180,12 Q198,4 216,20 Q234,28 252,14 Q270,4 288,18 Q306,28 324,16 Q342,6 360,22 Q378,28 396,12 Q414,4 432,18 Q450,28 468,16 Q486,6 504,20 Q522,28 540,14 Q558,4 576,18 Q594,28 612,16 Q630,6 648,20 Q666,28 684,12 Q702,4 720,18 Q738,28 756,16 Q774,6 792,20 Q810,28 828,14 Q846,4 864,18 Q882,28 900,16 Q918,6 936,22 Q954,28 972,14 Q990,4 1008,18 Q1026,28 1044,16 Q1062,6 1080,20 Q1098,28 1116,12 Q1134,4 1152,18 Q1170,28 1188,16 Q1206,6 1224,20 Q1242,28 1260,14 Q1278,4 1296,18 Q1314,28 1332,16 Q1350,6 1368,20 Q1386,28 1440,18 L1440,0 Z" fill="rgba(28,16,6,0.16)"></path>
    </svg>
    <div aria-hidden="true" style="position: fixed; top: 0; left: 0; bottom: 0; width: 36px; background: linear-gradient(to right, rgba(28,16,6,0.15), rgba(28,16,6,0.04), transparent); pointer-events: none; z-index: 996;"></div>
    <div aria-hidden="true" style="position: fixed; top: 0; right: 0; bottom: 0; width: 36px; background: linear-gradient(to left, rgba(28,16,6,0.15), rgba(28,16,6,0.04), transparent); pointer-events: none; z-index: 996;"></div>
  `;
}

function backgroundDecorationsMarkup() {
  return `
    <div class="bg-decorations" aria-hidden="true">
      <div class="ink-blot ink-blot-1"></div>
      <div class="ink-blot ink-blot-2"></div>
      <div class="ink-blot ink-blot-3"></div>
      <div class="ink-blot ink-blot-4"></div>
      <div class="ink-blot ink-blot-5"></div>
      <svg class="bg-sketch" style="top: 8%; left: 4%; width: 80px; height: 80px;" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40 70 Q35 55 38 40 Q30 35 20 38 Q32 30 38 20 Q40 35 42 20 Q48 30 60 38 Q50 35 42 40 Q45 55 40 70Z" stroke="#3c2a10" stroke-width="0.8" fill="rgba(60,42,16,0.04)"></path><line x1="40" y1="40" x2="40" y2="70" stroke="#3c2a10" stroke-width="0.6"></line><path d="M30 50 Q36 47 40 50" stroke="#3c2a10" stroke-width="0.5" fill="none"></path><path d="M50 48 Q44 45 40 48" stroke="#3c2a10" stroke-width="0.5" fill="none"></path></svg>
      <svg class="bg-sketch" style="top: 22%; right: 3%; width: 70px; height: 90px; opacity: 0.065;" viewBox="0 0 70 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35 85 L35 20" stroke="#3c2a10" stroke-width="0.8"></path><path d="M35 60 Q20 50 15 35 Q28 45 35 42 Q42 45 55 35 Q50 50 35 60Z" stroke="#3c2a10" stroke-width="0.7" fill="rgba(60,42,16,0.04)"></path><path d="M35 38 Q22 28 18 15 Q30 28 35 26 Q40 28 52 15 Q48 28 35 38Z" stroke="#3c2a10" stroke-width="0.6" fill="rgba(60,42,16,0.03)"></path><ellipse cx="35" cy="16" rx="4" ry="6" stroke="#3c2a10" stroke-width="0.5"></ellipse></svg>
      <svg class="bg-sketch" style="top: 55%; left: 2%; width: 65px; height: 65px; opacity: 0.06;" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="34" rx="8" ry="12" stroke="#3c2a10" stroke-width="0.7" fill="rgba(60,42,16,0.03)"></ellipse><ellipse cx="32" cy="26" rx="5" ry="5" stroke="#3c2a10" stroke-width="0.6" fill="rgba(60,42,16,0.03)"></ellipse><line x1="30" y1="30" x2="18" y2="22" stroke="#3c2a10" stroke-width="0.5"></line><line x1="30" y1="34" x2="16" y2="34" stroke="#3c2a10" stroke-width="0.5"></line><line x1="30" y1="38" x2="18" y2="46" stroke="#3c2a10" stroke-width="0.5"></line><line x1="34" y1="30" x2="46" y2="22" stroke="#3c2a10" stroke-width="0.5"></line><line x1="34" y1="34" x2="48" y2="34" stroke="#3c2a10" stroke-width="0.5"></line><line x1="34" y1="38" x2="46" y2="46" stroke="#3c2a10" stroke-width="0.5"></line><line x1="30" y1="22" x2="22" y2="14" stroke="#3c2a10" stroke-width="0.4"></line><line x1="34" y1="22" x2="42" y2="14" stroke="#3c2a10" stroke-width="0.4"></line><circle cx="22" cy="14" r="1" fill="#3c2a10" opacity="0.3"></circle><circle cx="42" cy="14" r="1" fill="#3c2a10" opacity="0.3"></circle></svg>
      <svg class="bg-sketch" style="top: 75%; right: 4%; width: 90px; height: 70px; opacity: 0.055;" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 60 Q25 45 40 40 Q55 35 70 25 Q75 20 80 12" stroke="#3c2a10" stroke-width="0.9" fill="none"></path><path d="M40 40 Q32 30 28 20" stroke="#3c2a10" stroke-width="0.6" fill="none"></path><path d="M55 35 Q60 28 58 18" stroke="#3c2a10" stroke-width="0.6" fill="none"></path><circle cx="28" cy="20" r="3.5" stroke="#3c2a10" stroke-width="0.5" fill="rgba(60,42,16,0.06)"></circle><circle cx="25" cy="15" r="3.5" stroke="#3c2a10" stroke-width="0.5" fill="rgba(60,42,16,0.06)"></circle><circle cx="32" cy="14" r="3.5" stroke="#3c2a10" stroke-width="0.5" fill="rgba(60,42,16,0.06)"></circle><circle cx="58" cy="18" r="3" stroke="#3c2a10" stroke-width="0.5" fill="rgba(60,42,16,0.06)"></circle><circle cx="55" cy="13" r="3" stroke="#3c2a10" stroke-width="0.5" fill="rgba(60,42,16,0.06)"></circle></svg>
      <div class="page-annotation" style="top: 14%; left: 9%; transform: rotate(-2deg); font-size: 0.68rem;">см. также: табл. XLIV</div>
      <div class="page-annotation" style="top: 42%; right: 8%; transform: rotate(1.5deg); font-size: 0.60rem;">ср. т. III, стр. 217</div>
      <div class="page-annotation" style="top: 68%; left: 5%; transform: rotate(-1deg); font-size: 0.65rem;">✓ подтверждено — авг. 1889</div>
      <div class="page-annotation" style="top: 85%; right: 10%; transform: rotate(2deg); font-size: 0.58rem;">? уточнить среду</div>
    </div>
  `;
}

function renderPlantCard(plant) {
  const marginTop = Math.abs(plant.id % 3) * 6;

  return `
    <div role="listitem">
      <div
        class="plant-card"
        data-plant-id="${plant.id}"
        style="transform: rotate(${plant.rotation}deg); margin-top: ${marginTop}px;"
        role="button"
        tabindex="0"
        aria-label="Открыть образец: ${plant.name}"
      >
        <div class="tape ${plant.tapeTopLeft} tape-tl"></div>
        <div class="tape ${plant.tapeTopRight} tape-tr"></div>
        <div class="polaroid">
          ${plant.hasBadge && plant.badgeText ? `<div class="specimen-badge">${plant.badgeText}</div>` : ""}
          <div class="polaroid-img-wrap">
            <img src="${plant.image}" alt="${plant.name} (${plant.latin})" class="polaroid-img" loading="lazy" />
          </div>
          <div class="polaroid-caption">
            <div class="polaroid-title">${plant.name}</div>
            <div class="polaroid-date">${plant.date}</div>
          </div>
          ${plant.hasWaxSeal ? waxSealMarkup() : ""}
        </div>
        <div class="paper-tag">
          <div class="paper-tag-text">${plant.name}</div>
          <div class="paper-tag-latin">${plant.latin}</div>
        </div>
      </div>
    </div>
  `;
}

function renderLightbox(plant) {
  if (!plant) {
    return '<div class="lightbox-overlay" id="lightboxOverlay" aria-hidden="true"></div>';
  }

  const categoryLabel = getCategoryLabel(plant.category);

  return `
    <div class="lightbox-overlay open" id="lightboxOverlay" role="dialog" aria-modal="true" aria-label="Сведения об образце: ${plant.name}">
      <div class="lightbox-card">
        <button class="lightbox-close" id="lightboxClose" aria-label="Закрыть">✕</button>
        <div class="tape tape-yellow" style="position: absolute; width: 60px; height: 16px; top: -8px; left: 20px; transform: rotate(-8deg);"></div>
        <div class="tape tape-blue" style="position: absolute; width: 50px; height: 14px; top: -7px; right: 40px; transform: rotate(6deg);"></div>
        <img src="${plant.image}" alt="${plant.name}" class="lightbox-img" />
        <h2 class="lightbox-title">${plant.name}</h2>
        <p class="lightbox-latin"><em>${plant.latin}</em> &mdash; Собрано ${plant.date}</p>
        ${plant.hasWaxSeal ? `<div style="position: absolute; top: 80px; right: 24px; transform: rotate(8deg);">${waxSealMarkup()}</div>` : ""}
        <p class="lightbox-body">${plant.note}</p>
        <div class="lightbox-meta">
          <div class="lightbox-meta-item">
            <label>Собиратель</label>
            <span>${plant.collector}</span>
          </div>
          <div class="lightbox-meta-item">
            <label>Местность</label>
            <span>${plant.locale}</span>
          </div>
          <div class="lightbox-meta-item">
            <label>Среда</label>
            <span>${plant.habitat}</span>
          </div>
          <div class="lightbox-meta-item">
            <label>Категория</label>
            <span>${categoryLabel}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderAddPlantModal() {
  if (!state.addFormOpen) {
    return '<div class="archive-overlay" id="addPlantOverlay" aria-hidden="true"></div>';
  }

  return `
    <div class="archive-overlay open" id="addPlantOverlay" role="dialog" aria-modal="true" aria-label="Форма добавления растения">
      <div class="archive-card">
        <button class="archive-close" id="addPlantClose" aria-label="Закрыть">✕</button>
        <div class="archive-tape archive-tape-left"></div>
        <div class="archive-tape archive-tape-right"></div>

        <p class="archive-eyebrow">Новая карточка коллекции</p>
        <h2 class="archive-title">Добавить в коллекцию</h2>
        <p class="archive-subtitle">Форма-плейсхолдер в стиле винтажного гербария. Она открывается для демонстрации, но ввод и сохранение пока отключены.</p>

        <form class="archive-form" aria-label="Заглушка формы добавления растения">
          <label class="archive-field">
            <span class="archive-label">Название растения</span>
            <input type="text" placeholder="Например: Рододендрон даурский" disabled />
          </label>

          <label class="archive-field">
            <span class="archive-label">Латинское название</span>
            <input type="text" placeholder="Rhododendron dauricum L." disabled />
          </label>

          <div class="archive-grid">
            <label class="archive-field">
              <span class="archive-label">Дата сбора</span>
              <input type="text" placeholder="28 апреля 2026 г." disabled />
            </label>

            <label class="archive-field">
              <span class="archive-label">Категория</span>
              <select disabled>
                <option>Цветы</option>
              </select>
            </label>
          </div>

          <label class="archive-field">
            <span class="archive-label">Район произрастания</span>
            <input type="text" placeholder="Приморье, Тернейский район" disabled />
          </label>

          <label class="archive-field">
            <span class="archive-label">Описание</span>
            <textarea rows="5" placeholder="Краткое описание растения, среды произрастания и свойств..." disabled></textarea>
          </label>

          <div class="archive-grid">
            <label class="archive-field">
              <span class="archive-label">Собиратель</span>
              <input type="text" placeholder="Ваше имя" disabled />
            </label>

            <label class="archive-field">
              <span class="archive-label">Статус / бейдж</span>
              <input type="text" placeholder="Редкий вид / Раннее цветение" disabled />
            </label>
          </div>

          <div class="archive-upload" aria-disabled="true">
            <span class="archive-upload-title">Фотография образца</span>
            <span class="archive-upload-note">Загрузка изображения будет доступна позже</span>
            <button type="button" class="archive-upload-button" disabled>Выбрать фото</button>
          </div>

          <div class="archive-actions">
            <button type="button" class="archive-secondary" id="addPlantCloseSecondary">Закрыть</button>
            <button type="submit" class="archive-primary" disabled>Сохранить карточку</button>
          </div>
        </form>
      </div>
    </div>
  `;
}

function getFilteredPlants() {
  const query = state.searchQuery.toLowerCase();

  return PLANTS.filter((plant) => {
    const matchesCategory = state.activeCategory === "all" || plant.category === state.activeCategory;
    const matchesSearch =
      !query ||
      plant.name.toLowerCase().includes(query) ||
      plant.latin.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });
}

function getSelectedPlant() {
  return PLANTS.find((plant) => plant.id === state.selectedPlantId) || null;
}

function getCategories() {
  return CATEGORY_DEFS.map((category) => {
    const count = category.id === "all"
      ? PLANTS.length
      : PLANTS.filter((plant) => plant.category === category.id).length;

    return { ...category, count };
  });
}

function getCollectionStats() {
  const totalSpecimens = PLANTS.length;
  const collectors = new Set(PLANTS.map((plant) => plant.collector.trim())).size;
  const regions = new Set(PLANTS.map((plant) => plant.locale.trim())).size;
  const sealed = PLANTS.filter((plant) => plant.hasWaxSeal).length;

  return {
    totalSpecimens,
    collectors,
    regions,
    sealed,
  };
}

function renderShell() {
  root.innerHTML = `
    ${deckledEdgesMarkup()}
    ${backgroundDecorationsMarkup()}
    <div id="lightboxMount"></div>
    <div id="addPlantMount"></div>
    <div class="herbarium-wrapper">
      <header class="herb-header">
        <div class="corner-deco corner-deco-tl" aria-hidden="true">${cornerDecoMarkup()}</div>
        <div class="corner-deco corner-deco-tr" aria-hidden="true">${cornerDecoMarkup()}</div>
        <div class="header-stamp" aria-hidden="true">
          <span>Основано</span>
          <span style="font-size: 0.7rem; font-weight: bold; display: block; margin-top: 2px;">MDCCCLXXXV</span>
          <span>Королевское</span>
          <span>Ботаническое</span>
          <span>Общество</span>
        </div>
        <p class="header-eyebrow">Королевское ботаническое общество — Том IV, № 12</p>
        <h1 class="header-title">Гербарий Исследователя</h1>
        <p class="header-subtitle">Собрание ботанических образцов и полевых наблюдений</p>
      </header>

      <nav class="herb-nav-wrapper" aria-label="Главная навигация" id="navTabs"></nav>
      <div class="nav-divider" aria-hidden="true"></div>

      <div class="search-section">
        <span class="search-label">Поиск образцов:</span>
        <div class="search-container">
          <input
            class="search-input"
            id="searchInput"
            type="text"
            placeholder="например: Rosa canina, Lavender…"
            aria-label="Поиск по образцам растений"
          />
          <span class="search-icon" aria-hidden="true">🔍</span>
        </div>
        <button class="collection-add-button" id="openAddPlantButton" type="button">Добавить в коллекцию</button>
      </div>

      <div class="herb-main-layout">
        <aside class="herb-sidebar" aria-label="Фильтр по категориям">
          <p class="sidebar-heading">Указатель по категориям</p>
          <div id="categoryTabs"></div>
          <div class="sidebar-divider" aria-hidden="true"></div>
          <p class="sidebar-note">
            "Natura nihil frustra facit."<br />
            <span style="font-size: 0.76rem; opacity: 0.7;">— Аристотель</span>
          </p>
          <div class="sidebar-divider" aria-hidden="true"></div>
          <div class="sidebar-stat">
            <span class="sidebar-stat-label">Всего образцов</span>
            <span class="sidebar-stat-value" id="statTotalSpecimens"></span>
          </div>
          <div class="sidebar-stat">
            <span class="sidebar-stat-label">Собирателей</span>
            <span class="sidebar-stat-value" id="statCollectors"></span>
          </div>
          <div class="sidebar-stat">
            <span class="sidebar-stat-label">Регионов</span>
            <span class="sidebar-stat-value" id="statRegions"></span>
          </div>
          <div class="sidebar-stat">
            <span class="sidebar-stat-label">С печатью</span>
            <span class="sidebar-stat-value" id="statSealed"></span>
          </div>
        </aside>

        <main>
          <div class="grid-section-header">
            <h2 class="grid-section-title" id="gridSectionTitle"></h2>
            <div class="grid-section-line" aria-hidden="true"></div>
            <span class="grid-section-count" id="gridSectionCount"></span>
          </div>
          <div id="gridMount"></div>
        </main>
      </div>

      <footer class="herb-footer">
        <div class="footer-flourish" aria-hidden="true">✦ ✧ ✦</div>
        <p class="footer-text">Гербарий Исследователя — Издание Королевского ботанического общества</p>
        <p class="footer-edition"><em>Четвёртое издание, MDCCCLXXXIX &nbsp;·&nbsp; Все образцы подтверждены полевой перепиской</em></p>
        <svg aria-hidden="true" viewBox="0 0 300 40" style="width: 280px; height: 36px; margin: 14px auto 0px; display: block; opacity: 0.18;" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M150 20 Q130 10 110 15 Q90 20 70 12 Q50 5 30 15 Q15 22 5 18" stroke="#5c4008" stroke-width="1"></path>
          <path d="M150 20 Q170 10 190 15 Q210 20 230 12 Q250 5 270 15 Q285 22 295 18" stroke="#5c4008" stroke-width="1"></path>
          <path d="M85 15 Q88 8 92 12" stroke="#5c4008" stroke-width="0.7"></path>
          <path d="M105 13 Q108 5 113 10" stroke="#5c4008" stroke-width="0.7"></path>
          <path d="M215 13 Q218 5 223 10" stroke="#5c4008" stroke-width="0.7"></path>
          <path d="M235 15 Q238 8 242 12" stroke="#5c4008" stroke-width="0.7"></path>
          <circle cx="150" cy="20" r="3" fill="#5c4008"></circle>
          <path d="M144 20 Q147 14 150 20 Q153 14 156 20" stroke="#5c4008" stroke-width="0.8"></path>
          <path d="M144 20 Q147 26 150 20 Q153 26 156 20" stroke="#5c4008" stroke-width="0.8"></path>
          <ellipse cx="150" cy="11" rx="3" ry="5" stroke="#5c4008" stroke-width="0.8"></ellipse>
          <ellipse cx="150" cy="29" rx="3" ry="5" stroke="#5c4008" stroke-width="0.8"></ellipse>
        </svg>
      </footer>
    </div>
    <div aria-hidden="true" style="position: fixed; left: 70px; top: 0; bottom: 0; display: flex; flex-direction: column; justify-content: space-evenly; align-items: center; pointer-events: none; z-index: 996; padding-top: 60px; padding-bottom: 60px; gap: 0;">
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
      <div style="width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid rgba(44,31,14,0.20); background: radial-gradient(ellipse, rgba(200,175,130,0.35) 0%, rgba(180,150,100,0.20) 100%); box-shadow: inset 0 1px 3px rgba(44,31,14,0.15); flex-shrink: 0;"></div>
    </div>
    <div aria-hidden="true" style="position: fixed; left: 88px; top: 0; bottom: 0; width: 1px; background: linear-gradient(to bottom, transparent 5%, rgba(140,60,50,0.12) 20%, rgba(140,60,50,0.12) 80%, transparent 95%); pointer-events: none; z-index: 995;"></div>
  `;
}

function updateNavTabs() {
  const nav = document.getElementById("navTabs");
  nav.innerHTML = NAV_TABS.map((tab) => `
    <button
      class="nav-tab${state.activeTab === tab ? " active" : ""}"
      data-tab="${tab}"
      aria-current="${state.activeTab === tab ? "page" : ""}"
    >${tab}</button>
  `).join("");
}

function updateCategoryTabs() {
  const categories = getCategories();
  const categoryTabs = document.getElementById("categoryTabs");
  categoryTabs.innerHTML = categories.map((cat) => `
    <div
      class="index-tab${state.activeCategory === cat.id ? " active" : ""}"
      data-category="${cat.id}"
      role="button"
      tabindex="0"
      aria-pressed="${String(state.activeCategory === cat.id)}"
    >
      <span class="index-tab-icon">${cat.icon}</span>
      ${cat.label}
      <span class="index-tab-count">${cat.count}</span>
    </div>
  `).join("");
}

function updateGrid() {
  const categories = getCategories();
  const filteredPlants = getFilteredPlants();
  const activeCategory = categories.find((category) => category.id === state.activeCategory);
  const gridTitle = document.getElementById("gridSectionTitle");
  const gridCount = document.getElementById("gridSectionCount");
  const gridMount = document.getElementById("gridMount");

  gridTitle.textContent = activeCategory ? activeCategory.label : "Все образцы";
  gridCount.textContent = `${filteredPlants.length} ${getSpecimenWord(filteredPlants.length)}`;

  if (!filteredPlants.length) {
    gridMount.innerHTML = `
      <div style="padding: 48px 24px; text-align: center; font-family: var(--font-handwriting); font-size: 1.1rem; color: var(--sepia); opacity: 0.65; font-style: italic;">
        По вашему запросу ничего не найдено.<br />
        <span style="font-size: 0.80rem; opacity: 0.7;">Попробуйте изменить запрос или выбрать другую категорию.</span>
      </div>
    `;
    return;
  }

  gridMount.innerHTML = `<div class="plant-grid" role="list">${filteredPlants.map(renderPlantCard).join("")}</div>`;
}

function updateSidebarStats() {
  const stats = getCollectionStats();

  document.getElementById("statTotalSpecimens").textContent = String(stats.totalSpecimens);
  document.getElementById("statCollectors").textContent = String(stats.collectors);
  document.getElementById("statRegions").textContent = String(stats.regions);
  document.getElementById("statSealed").textContent = String(stats.sealed);
}

function updateLightbox() {
  const lightboxMount = document.getElementById("lightboxMount");
  lightboxMount.innerHTML = renderLightbox(getSelectedPlant());

  const overlay = document.getElementById("lightboxOverlay");
  const closeButton = document.getElementById("lightboxClose");

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        state.selectedPlantId = null;
        updateLightbox();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      state.selectedPlantId = null;
      updateLightbox();
    });
  }
}

function updateAddPlantModal() {
  const addPlantMount = document.getElementById("addPlantMount");
  addPlantMount.innerHTML = renderAddPlantModal();

  const overlay = document.getElementById("addPlantOverlay");
  const closeButton = document.getElementById("addPlantClose");
  const closeSecondary = document.getElementById("addPlantCloseSecondary");

  if (overlay) {
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        state.addFormOpen = false;
        updateAddPlantModal();
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      state.addFormOpen = false;
      updateAddPlantModal();
    });
  }

  if (closeSecondary) {
    closeSecondary.addEventListener("click", () => {
      state.addFormOpen = false;
      updateAddPlantModal();
    });
  }
}

function getSpecimenWord(count) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return "образец";
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "образца";
  }

  return "образцов";
}

function getCategoryLabel(categoryId) {
  const match = getCategories().find((category) => category.id === categoryId);
  return match ? match.label : categoryId;
}

function bindEvents() {
  document.getElementById("searchInput").addEventListener("input", (event) => {
    state.searchQuery = event.target.value;
    updateGrid();
  });

  document.getElementById("openAddPlantButton").addEventListener("click", () => {
    state.addFormOpen = true;
    updateAddPlantModal();
  });

  document.getElementById("navTabs").addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) {
      return;
    }

    state.activeTab = button.dataset.tab;
    updateNavTabs();
  });

  document.getElementById("categoryTabs").addEventListener("click", (event) => {
    const tab = event.target.closest("[data-category]");
    if (!tab) {
      return;
    }

    state.activeCategory = tab.dataset.category;
    updateCategoryTabs();
    updateGrid();
  });

  document.getElementById("categoryTabs").addEventListener("keydown", (event) => {
    const tab = event.target.closest("[data-category]");
    if (!tab || event.key !== "Enter") {
      return;
    }

    state.activeCategory = tab.dataset.category;
    updateCategoryTabs();
    updateGrid();
  });

  document.getElementById("gridMount").addEventListener("click", (event) => {
    const card = event.target.closest("[data-plant-id]");
    if (!card) {
      return;
    }

    state.selectedPlantId = Number(card.dataset.plantId);
    updateLightbox();
  });

  document.getElementById("gridMount").addEventListener("keydown", (event) => {
    const card = event.target.closest("[data-plant-id]");
    if (!card || event.key !== "Enter") {
      return;
    }

    state.selectedPlantId = Number(card.dataset.plantId);
    updateLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (state.selectedPlantId !== null) {
        state.selectedPlantId = null;
        updateLightbox();
      }

      if (state.addFormOpen) {
        state.addFormOpen = false;
        updateAddPlantModal();
      }
    }
  });
}

renderShell();
updateNavTabs();
updateCategoryTabs();
updateSidebarStats();
updateGrid();
updateLightbox();
updateAddPlantModal();
bindEvents();
