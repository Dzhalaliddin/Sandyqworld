// ============================================================
//  КОНФИГУРАЦИЯ
// ============================================================
const TELEGRAM_BOT_TOKEN = '1745757539:AAEUlkcpb8z7X7s8deuAJPD1saXM92YmOXA';
const TELEGRAM_CHAT_ID = '-1004480995803';
const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;
const JSONBIN_KEY = '$2a$10$AxIfA8p7dq6td0BYtWWuhecnyqCJbsTGoo.oWIds3H01C43GvLGuu';
const JSONBIN_BIN_ID = '6a411873f5f4af5e293d0edd';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;
const GIF_URL = 'sprites/horse.gif';

// ============================================================
//  ПЕРЕВОДЫ
// ============================================================
const langDict = {
  ru: {
    salads:'Салаты', deli:'Деликатесы', delicacies:'Деликатесы', soups:'Супы', main:'Основные', mains:'Основные', show:'Блюда Шоу',
    bakery:'Выпечка', desserts:'Десерты', party:'Блюда на компанию', drinks:'Напитки',
    garnish:'Гарниры', tea:'Чаи', teaAdditives:'Добавки к чаю', traditionalDrinks:'Традиционные напитки',
    coldDrinks:'Холодные напитки', fresh:'Фреши', lemonades:'Лимонады', sauces:'Соусы', teaSets:'Чайные сеты',
    subtitle:'Қазақ асханасы · Казахская кухня',
    address:'📍 Абылайхана 55 / Алимжанова 55',
    search_placeholder:'Поиск блюд...',
    welcome:'🍽️ Добро пожаловать в Sandyq',
    hero_desc:'Элитный этно-ресторан казахской кухни в самом сердце Алматы',
    music_live:'🎵 Живая этно-музыка: Пт, Сб, Вс — 20:00–22:00',
    popular:'🏆 Популярные блюда',
    cart_title:'🛒 Заказ',
    cart_empty:'Корзина пуста',
    checkout_btn:'🌟 Оформить заказ',
    subtotal:'Сумма',
    service:'Сервис 15%',
    total:'Итого',
    add:'Добавить',
    checkout_title:'Оформление заказа',
    guest_name:'Имя гостя',
    guest_phone:'Телефон',
    order_date:'📅 Дата заказа',
    serving_time:'⏰ Время подачи',
    special_requests:'Особые пожелания',
    cancel:'Отмена',
    confirm:'Подтвердить',
    working_hours:'🕐 Кухня: 12:00–23:00 | Колл-центр: 10:00–22:00',
    search_results:'Результаты поиска',
    back:'Назад к категориям',
    withHead:'С головой',
    withoutHead:'Без головы',
    persons5_6:'На 5-6 персон',
    wishlist:'Избранное',
    history:'📋 История заказов',
    repeat:'Повторить заказ',
    delete_history:'Удалить историю',
    download_pdf:'Скачать PDF',
    reviews:'⭐ Отзывы',
    leave_review:'Оставить отзыв',
    send:'Отправить',
    map_title:'📍 Sandyq — Абылайхана 55 / Алимжанова 55',
    oferta:'📄 Договор оферты',
    contacts:'📞 Контакты',
    call_center:'Колл-центр: 10:00–22:00',
    schedule:'🕐 График работы',
    kitchen:'Кухня: 12:00–23:00',
    restaurant_hours:'Ресторан: 12:00–00:00',
    social:'🌐 Мы в соцсетях',
    copyright:'© 2026 Sandyq. Все права защищены.',
    events:'📅 События',
    small:'0.8л',
    large:'1.2л',
    small200:'0.2л',
    large1l:'1л',
    small05:'0.5л',
    large075:'0.75л',
    cookingTime:'⏱ Время приготовления'
  },
  kk: {
    salads:'Салаттар', deli:'Тіскебасарлар', delicacies:'Тіскебасарлар', soups:'Сорпалар', main:'Негізгі', mains:'Негізгі', show:'Шоу тағамдар',
    bakery:'Нан-тоқаш', desserts:'Тәттілер', party:'Ұжымдық мәзір', drinks:'Сусындар',
    garnish:'Гарнирлер', tea:'Шайлар', teaAdditives:'Шай қоспалары', traditionalDrinks:'Дәстүрлі сусындар',
    coldDrinks:'Салқын сусындар', fresh:'Фрештер', lemonades:'Лимонадтар', sauces:'Тұздықтар', teaSets:'Шай сеттері',
    subtitle:'Қазақ асханасы',
    address:'📍 Абылайхан 55 / Әлімжанова 55',
    search_placeholder:'Тағамдарды іздеу...',
    welcome:'🍽️ Sandyq-қа қош келдіңіз',
    hero_desc:'Алматының жүрегіндегі элиталық этно-мейрамхана',
    music_live:'🎵 Жанды этно-әуен: Жм, Сб, Жс — 20:00–22:00',
    popular:'🏆 Танымал тағамдар',
    cart_title:'🛒 Тапсырыс',
    cart_empty:'Себет бос',
    checkout_btn:'🌟 Тапсырыс беру',
    subtotal:'Сома',
    service:'Қызмет 15%',
    total:'Барлығы',
    add:'Қосу',
    checkout_title:'Тапсырысты рәсімдеу',
    guest_name:'Қонақтың аты',
    guest_phone:'Телефон',
    order_date:'📅 Тапсырыс күні',
    serving_time:'⏰ Беру уақыты',
    special_requests:'Ерекше тілектер',
    cancel:'Болдырмау',
    confirm:'Растау',
    working_hours:'🕐 Асхана: 12:00–23:00 | Колл-орталық: 10:00–22:00',
    search_results:'Іздеу нәтижелері',
    back:'Категорияларға оралу',
    withHead:'Басымен',
    withoutHead:'Басыз',
    persons5_6:'5-6 адамға',
    wishlist:'Таңдаулы',
    history:'📋 Тапсырыстар тарихы',
    repeat:'Қайта тапсырыс',
    delete_history:'Тарихты жою',
    download_pdf:'PDF жүктеу',
    reviews:'⭐ Пікірлер',
    leave_review:'Пікір қалдыру',
    send:'Жіберу',
    map_title:'📍 Sandyq — Абылайхан 55 / Әлімжанова 55',
    oferta:'📄 Оферта келісімі',
    contacts:'📞 Байланыс',
    call_center:'Колл-орталық: 10:00–22:00',
    schedule:'🕐 Жұмыс кестесі',
    kitchen:'Асхана: 12:00–23:00',
    restaurant_hours:'Мейрамхана: 12:00–00:00',
    social:'🌐 Әлеуметтік желілер',
    copyright:'© 2026 Sandyq. Барлық құқықтар қорғалған.',
    events:'📅 Іс-шаралар',
    small:'0,8 л',
    large:'1,2 л',
    small200:'0,2 л',
    large1l:'1 л',
    small05:'0,5 л',
    large075:'0,75 л',
    cookingTime:'⏱ Дайындау уақыты'
  },
  en: {
    salads:'Salads', deli:'Delicacies', delicacies:'Delicacies', soups:'Soups', main:'Main', mains:'Main', show:'Show Dishes',
    bakery:'Bakery', desserts:'Desserts', party:'Group Menu', drinks:'Drinks',
    garnish:'Sides', tea:'Tea', teaAdditives:'Tea Additives', traditionalDrinks:'Traditional Drinks',
    coldDrinks:'Cold Drinks', fresh:'Fresh Juices', lemonades:'Lemonades', sauces:'Sauces', teaSets:'Tea Sets',
    subtitle:'Kazakh cuisine',
    address:'📍 Abylai Khan 55 / Alimzhanova 55',
    search_placeholder:'Search dishes...',
    welcome:'🍽️ Welcome to Sandyq',
    hero_desc:'Elite ethno-restaurant of Kazakh cuisine in the heart of Almaty',
    music_live:'🎵 Live ethno-music: Fri, Sat, Sun — 8:00–10:00 PM',
    popular:'🏆 Popular dishes',
    cart_title:'🛒 Order',
    cart_empty:'Cart is empty',
    checkout_btn:'🌟 Checkout',
    subtotal:'Subtotal',
    service:'Service 15%',
    total:'Total',
    add:'Add',
    checkout_title:'Checkout',
    guest_name:'Guest name',
    guest_phone:'Phone',
    order_date:'📅 Order date',
    serving_time:'⏰ Serving time',
    special_requests:'Special requests',
    cancel:'Cancel',
    confirm:'Confirm',
    working_hours:'🕐 Kitchen: 12:00–23:00 | Call center: 10:00–22:00',
    search_results:'Search results',
    back:'Back to categories',
    withHead:'With head',
    withoutHead:'Without head',
    persons5_6:'For 5-6 persons',
    wishlist:'Favorites',
    history:'📋 Order history',
    repeat:'Repeat order',
    delete_history:'Delete history',
    download_pdf:'Download PDF',
    reviews:'⭐ Reviews',
    leave_review:'Leave a review',
    send:'Send',
    map_title:'📍 Sandyq — Abylai Khan 55 / Alimzhanova 55',
    oferta:'📄 Offer agreement',
    contacts:'📞 Contacts',
    call_center:'Call center: 10:00–22:00',
    schedule:'🕐 Working hours',
    kitchen:'Kitchen: 12:00–23:00',
    restaurant_hours:'Restaurant: 12:00–00:00',
    social:'🌐 Social media',
    copyright:'© 2026 Sandyq. All rights reserved.',
    events:'📅 Events',
    small:'0.8L',
    large:'1.2L',
    small200:'0.2L',
    large1l:'1L',
    small05:'0.5L',
    large075:'0.75L',
    cookingTime:'⏱ Cooking time'
  }
};

// ============================================================
//  ДАННЫЕ МЕНЮ АЛМАТЫ
// ============================================================
const menuDataAlmaty = {
  salads: {
    name: { ru: 'Салаты', kk: 'Salattar', en: 'Salads' },
    icon: 'fa-leaf',
    items: [
      { id: 1, name: { ru: 'Салат из свежих овощей', kk: 'Balǵyn kökönis salaty', en: 'Fresh Vegetable Salad' }, price: 3690, image: 'salad-fresh.jpg', category: 'salads' },
      { id: 2, name: { ru: 'Салат «Костұра»', kk: 'Qostura salaty', en: 'Salad "Qostura"' }, price: 5590, image: 'salad-kostyra.jpg', category: 'salads' },
      { id: 3, name: { ru: 'Салат «Сандық» в имбирном соусе', kk: 'Zımbır tuzdyǵymen Sandyq salaty', en: 'Salad "Sandyq"' }, price: 6590, image: 'salad-sandyq.jpg', category: 'salads' },
      { id: 4, name: { ru: 'Баклажаны в соусе из курта', kk: 'Qurt tuzdyǵyndaǵy baqyldan', en: 'Eggplant in qurt sauce' }, price: 4490, image: 'eggplant-qurt.jpg', category: 'salads' },
      { id: 5, name: { ru: 'Ассорти овощей', kk: 'Kökönister assortisi', en: 'Vegetables assortment' }, price: 5590, image: 'seasonal-vegetables.jpg', category: 'salads' }
    ]
  },
  deli: {
    name: { ru: 'Деликатесы', kk: 'Tiskebasarlyq', en: 'Delicacies' },
    icon: 'fa-star',
    items: [
      { id: 6, name: { ru: '«Құйрық май» с кумысом', kk: 'Quyryq may', en: '"Quyryq May"' }, price: 2990, image: 'kuiryk-may.jpg', category: 'deli' },
      { id: 7, name: { ru: '«Шеке»', kk: 'Sheke', en: '"Sheke"' }, price: 7990, image: 'sheke.jpg', category: 'deli' },
      { id: 8, name: { ru: '«Жілік май»', kk: 'Jilik may', en: '"Zhylyk May"' }, price: 8090, image: 'zhilyk-may.jpg', category: 'deli' },
      { id: 9, name: { ru: '«Ұйқы ашар»', kk: 'Uıqy ashar', en: '"Uyky ashar"' }, price: 7990, image: 'uyky-ashar.jpg', category: 'deli' },
      { id: 10, name: { ru: '«Құйрық бауыр»', kk: 'Quyryq bauyr', en: '"Quiryq bauyr"' }, price: 8090, image: 'quiryq-bauyr.jpg', category: 'deli' },
      { id: 11, name: { ru: '«Үлпершек»', kk: 'Úlpershek', en: '"Ulpershek"' }, price: 8090, image: 'ulpershek.jpg', category: 'deli' },
      { id: 12, name: { ru: 'Ми Палау', kk: 'Mi Palau', en: '"Mi Palau"' }, price: 3990, image: 'mi-palau.jpg', category: 'deli' },
      { id: 13, name: { ru: 'Осетровая икра', kk: 'Bekire uyldyryǵy', en: 'Sturgeon caviar' }, price: 8890, image: 'sturgeon-caviar.jpg', category: 'deli' }
    ]
  },
  soups: {
    name: { ru: 'Супы', kk: 'Sorpalar', en: 'Soups' },
    icon: 'fa-utensil-spoon',
    items: [
      { id: 14, name: { ru: 'Суп «Жібек жолы»', kk: 'Jibek joly sorpasy', en: '"Zhibek Zholy" soup' }, price: 4490, image: 'zhibek-zholy.jpg', category: 'soups' },
      { id: 15, name: { ru: 'Коже «Nomad»', kk: 'Köje "Nomad"', en: '"Nomad" Kozhe' }, price: 5590, image: 'nomad-kozhe.jpg', category: 'soups' },
      { id: 16, name: { ru: 'Суп из индейки', kk: 'Kürketaýyq sorpasy', en: 'Turkey soup' }, price: 4490, image: 'turkey-soup.jpg', category: 'soups' },
      { id: 17, name: { ru: 'Суп из перепелки', kk: 'Bödene sorpasy', en: 'Quail soup' }, price: 5090, image: 'quail-soup.jpg', category: 'soups' },
      { id: 18, name: { ru: '«Жарма көже»', kk: 'Jarma köje', en: '"Zharma kozhe"' }, price: 4490, image: 'zharma-kozhe.jpg', category: 'soups' },
      { id: 19, name: { ru: '«Көл кеспе»', kk: 'Köl kespe', en: '"Kol kespe"' }, price: 4490, image: 'kol-kespe.jpg', category: 'soups' }
    ]
  },
  main: {
    name: { ru: 'Основные блюда', kk: 'Negızgı taǵamdar', en: 'Main Dishes' },
    icon: 'fa-fire',
    items: [
      { id: 20, name: { ru: '«Қазақ ет» (Бешбармақ)', kk: 'Qazaq etı', en: '"Qazaq Et"' }, price: 9990, image: 'qazaq-et.jpg', category: 'main' },
      { id: 21, name: { ru: '«Борша ет» на камнях', kk: 'Tasta ázırlengen "Borsha et"', en: '"Borsha Et" on stones' }, price: 9990, image: 'borsha-et.jpg', category: 'main' },
      { id: 22, name: { ru: '«Бал қуырдақ»', kk: 'Bal quyrdaq', en: '"Bal Kuyrdak"' }, price: 8990, image: 'bal-kuyrdak.jpg', category: 'main' },
      { id: 23, name: { ru: '«Ши қуырдақ»', kk: 'Shi quyrdaq', en: '"Shi Kuyrdak"' }, price: 8990, image: 'shi-kuyrdak.jpg', category: 'main' },
      { id: 24, name: { ru: '«Бұқпа» из говядины', kk: 'Sıyr etınen "Būqpa"', en: '"Buqpa" from beef' }, price: 9990, image: 'bugpa.jpg', category: 'main' },
      { id: 25, name: { ru: '«Қымыз қабырға»', kk: 'Qymyz qabyrǵa', en: '"Qymyz Qabyrga"' }, price: 10990, image: 'qymyz-qabyrga.jpg', category: 'main' },
      { id: 26, name: { ru: 'Томленая шея баранины (Шоу программа)', kk: 'Buqtyrylǵan qoı moıny (Shou)', en: 'Braised lamb neck (Show)' }, price: 39990, image: 'lamb-neck.jpg', category: 'main' },
      { id: 27, name: { ru: '«Қақталған қазы»', kk: 'Qaqtalǵan qazy', en: '"Kaktalgan Kazy"' }, price: 10990, image: 'kaktalgan-kazy.jpg', category: 'main' },
      { id: 28, name: { ru: 'Горная форель', kk: 'Tauly forel', en: 'Mountain trout' }, price: 7990, image: 'trout.jpg', category: 'main' },
      { id: 29, name: { ru: '«Нан салма»', kk: 'Nan salma', en: '"Nan Salma"' }, price: 7990, image: 'nan-salma.jpg', category: 'main' }
    ]
  },
  party: {
    name: { ru: 'Блюда на компанию', kk: 'Újymdyq taǵamdar', en: 'Group Menu' },
    icon: 'fa-users',
    items: [
      { id: 30, name: { ru: '«Сый табақ» (5-6)', kk: 'Syı tabaq (5-6)', en: '"Syy Tabak" (5-6)' }, price: 75990, priceWithoutHead: 59990, hasToggle: true, image: 'syy-tabak.jpg', category: 'party', desc: { ru: 'С головой / Без головы', kk: 'Qoy basymen / Basyz', en: 'With / Without head' }, preorder: { ru: '🔴 Предзаказ за 2-3 дня', kk: '🔴 Aldın ala tapsyrys 2-3 kún', en: '🔴 Pre-order 2-3 days' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' } },
      { id: 31, name: { ru: '«Той табақ» (5-6)', kk: 'Toı tabaq (5-6)', en: '"Toy Tabak" (5-6)' }, price: 75990, priceWithoutHead: 59990, hasToggle: true, image: 'toy-tabak.jpg', category: 'party', desc: { ru: 'С головой / Без головы', kk: 'Qoy basymen / Basyz', en: 'With / Without head' }, preorder: { ru: '🟡 Заказ за 1 день', kk: '🟡 Tapsyrys 1 kún', en: '🟡 Order 1 day' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' } },
      { id: 32, name: { ru: '«Қарын көмбе» (5-6)', kk: 'Qaryn kómbe (5-6)', en: '"Karyn Kombe" (5-6)' }, price: 104990, image: 'karyn-kombe.jpg', category: 'party', preorder: { ru: '🔴 Предзаказ за 2-3 дня', kk: '🔴 Aldın ala tapsyrys 2-3 kún', en: '🔴 Pre-order 2-3 days' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' } },
      { id: 33, name: { ru: '«Бел көтерер» (5-6)', kk: 'Bel kóterer (5-6)', en: '"Bel Koterer" (5-6)' }, price: 104990, image: 'bel-koterer.jpg', category: 'party', preorder: { ru: '🟠 Предзаказ за 1-2 дня', kk: '🟠 Aldın ala tapsyrys 1-2 kún', en: '🟠 Pre-order 1-2 days' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' } },
      { id: 34, name: { ru: '«Бекіре» с овощами (5-6)', kk: 'Bekıre (5-6)', en: '"Bekire" (5-6)' }, price: 139990, image: 'bekire.jpg', category: 'party', preorder: { ru: '🟠 Предзаказ за 1-2 дня', kk: '🟠 Aldın ala tapsyrys 1-2 kún', en: '🟠 Pre-order 1-2 days' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' } }
    ]
  },
  show: {
    name: { ru: 'Блюда Шоу', kk: 'Shou taǵamdar', en: 'Show Dishes' },
    icon: 'fa-theater-masks',
    items: [
      { id: 26, name: { ru: 'Томленая шея баранины (Шоу)', kk: 'Buqtyrylǵan qoı moıny (Shou)', en: 'Braised lamb neck (Show)' }, price: 39990, image: 'lamb-neck.jpg', category: 'show' }
    ]
  },
  bakery: {
    name: { ru: 'Выпечка', kk: 'Nan toqaş', en: 'Bakery' },
    icon: 'fa-bread-slice',
    items: [
      { id: 35, name: { ru: 'Бауырсаки с вареньем', kk: 'Tätti tosappen bauyrsaq', en: 'Baursak with jam' }, price: 2990, image: 'baursak-jam.jpg', category: 'bakery' },
      { id: 36, name: { ru: 'Бауырсаки с творожным сыром', kk: 'Irımşıkten bauyrsaq', en: 'Baursak with cream cheese' }, price: 2990, image: 'baursak-cheese.jpg', category: 'bakery' },
      { id: 37, name: { ru: '«Мыжыма»', kk: 'Myjyma', en: '"Myzhyma"' }, price: 2990, image: 'myzhyma.jpg', category: 'bakery' },
      { id: 38, name: { ru: '«Бәрәміш» с мясом', kk: 'Etpen beramiş', en: '"Beramish" with meat' }, price: 2990, image: 'baramysh.jpg', category: 'bakery' },
      { id: 39, name: { ru: '«Таба нан»', kk: 'Taba nan', en: '"Taba Nan"' }, price: 3990, image: 'taba-nan.jpg', category: 'bakery' },
      { id: 40, name: { ru: '«Қаттама»', kk: 'Qaftama', en: '"Kattama"' }, price: 3990, image: 'kattama.jpg', category: 'bakery' },
      { id: 41, name: { ru: '«Нан астау»', kk: 'Nan astau', en: '"Nan Astau"' }, price: 10990, image: 'nan-astau.jpg', category: 'bakery' }
    ]
  },
  desserts: {
    name: { ru: 'Десерты', kk: 'Tättıler', en: 'Desserts' },
    icon: 'fa-cake',
    items: [
      { id: 42, name: { ru: '«Чизкейк» из тары', kk: 'Tarydan "Chizkeik"', en: '"Cheesecake" from millet' }, price: 4990, image: 'cheesecake.jpg', category: 'desserts' },
      { id: 43, name: { ru: 'Финик с орехами и балкаймак', kk: 'Balqaimaqpen jańǵaqty qurma', en: 'Stuffed dates with nuts and balqaimak' }, price: 4990, image: 'stuffed-dates.jpg', category: 'desserts' },
      { id: 44, name: { ru: 'Сладости «Сандық»', kk: 'Sandyq tättılerı', en: '"Sandyq" sweets' }, price: 6990, image: 'sandyq-sweets.jpg', category: 'desserts' },
      { id: 45, name: { ru: '«Сүймесіт»', kk: 'Sūmesıt', en: '"Sumesit"' }, price: 4990, image: 'sumesut.jpg', category: 'desserts' },
      { id: 46, name: { ru: 'Хрустящий домашний пирог', kk: 'Qytyrlaq úı bälışı', en: 'Crispy homemade pie' }, price: 4990, image: 'homemade-pie.jpg', category: 'desserts' },
      { id: 47, name: { ru: '«Төңкерме» из обжаренной пшеницы', kk: 'Quvrylgan bıdaıdan "Tóńkerme"', en: '"Tonkerme" from roasted wheat' }, price: 3990, image: 'tonkerme.jpg', category: 'desserts' },
      { id: 48, name: { ru: '«Майсөк» с муссом', kk: 'Musspen "Maisök"', en: '"Maisok" with mousse' }, price: 3990, image: 'maisok.jpg', category: 'desserts' },
      { id: 49, name: { ru: '«Алматинский апорт»', kk: '"Almaty aport" deserti', en: '"Almaty Aport" dessert' }, price: 4990, image: 'almaty-aport.jpg', category: 'desserts' },
      { id: 50, name: { ru: 'Мороженое', kk: 'Balmuzdaq', en: 'Ice cream' }, price: 2990, image: 'ice-cream.jpg', category: 'desserts' }
    ]
  },
  garnish: {
    name: { ru: 'Гарниры', kk: 'Garnirler', en: 'Sides' },
    icon: 'fa-carrot',
    items: [
      { id: 51, name: { ru: 'Кус-кус', kk: 'Kus-kus', en: 'Couscous' }, price: 1990, image: 'couscous.jpg', category: 'garnish' },
      { id: 52, name: { ru: 'Булгур', kk: 'Bulgur', en: 'Bulgur' }, price: 1990, image: 'bulgur.jpg', category: 'garnish' },
      { id: 53, name: { ru: 'Молодой картофель', kk: 'Jas kartop', en: 'New potatoes' }, price: 1990, image: 'potatoes.jpg', category: 'garnish' },
      { id: 54, name: { ru: 'Белая кукуруза', kk: 'Aq júgeri', en: 'White corn' }, price: 1990, image: 'white-corn.jpg', category: 'garnish' },
      { id: 55, name: { ru: 'Пшеница со сливочным маслом', kk: 'Sary mai qosylǵan bidai', en: 'Wheat with butter' }, price: 1990, image: 'wheat.jpg', category: 'garnish' },
      { id: 56, name: { ru: 'Овощи на гриле', kk: 'Otqa pısken kökönister', en: 'Grilled vegetables' }, price: 1990, image: 'grilled-vegetables.jpg', category: 'garnish' }
    ]
  },
  tea: {
    name: { ru: 'Чаи', kk: 'Şailar', en: 'Tea' },
    icon: 'fa-mug-hot',
    items: [
      { id: 57, name: { ru: 'Turkistan', kk: 'Turkistan', en: 'Turkistan' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-turkistan.jpg', category: 'tea' },
      { id: 58, name: { ru: 'Sandyq', kk: 'Sandyq', en: 'Sandyq' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-sandyq.jpg', category: 'tea' },
      { id: 59, name: { ru: 'Jetisu', kk: 'Jetisu', en: 'Jetisu' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-jetisu.jpg', category: 'tea' },
      { id: 60, name: { ru: 'Tary shai', kk: 'Tary shai', en: 'Tary shai' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-tary.jpg', category: 'tea' },
      { id: 61, name: { ru: 'Zhibek joly', kk: 'Jibek joly', en: 'Zhibek joly' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-zhibek.jpg', category: 'tea' },
      { id: 62, name: { ru: 'Jidek', kk: 'Jidek', en: 'Jidek' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-jidek.jpg', category: 'tea' },
      { id: 63, name: { ru: 'Tau shai', kk: 'Tau shai', en: 'Tau shai' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-tau.jpg', category: 'tea' },
      { id: 64, name: { ru: 'Shyrganaq', kk: 'Shyrganaq', en: 'Shyrganaq' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'tea-shyrganaq.jpg', category: 'tea' },
      { id: 65, name: { ru: 'Qara shai', kk: 'Qara shai', en: 'Qara shai' }, price: 2490, priceLarge: 3590, hasSizeToggle: true, image: 'tea-qara.jpg', category: 'tea' },
      { id: 66, name: { ru: 'Kok shai', kk: 'Kok shai', en: 'Kok shai' }, price: 2490, priceLarge: 3590, hasSizeToggle: true, image: 'tea-kok.jpg', category: 'tea' }
    ]
  },
  teaAdditives: {
    name: { ru: 'Добавки к чаю', kk: 'Shai qospalary', en: 'Tea Additives' },
    icon: 'fa-leaf',
    items: [
      { id: 67, name: { ru: 'Құрма / Финики', kk: 'Qurma', en: 'Dates' }, price: 990, image: 'tea-dates.jpg', category: 'teaAdditives' },
      { id: 68, name: { ru: 'Тосап / Варенье', kk: 'Tosap', en: 'Jam' }, price: 590, image: 'tea-jam.jpg', category: 'teaAdditives' },
      { id: 69, name: { ru: 'Бал / Мед', kk: 'Bal', en: 'Honey' }, price: 590, image: 'tea-honey.jpg', category: 'teaAdditives' },
      { id: 70, name: { ru: 'Лимон', kk: 'Limon', en: 'Lemon' }, price: 590, image: 'tea-lemon.jpg', category: 'teaAdditives' },
      { id: 71, name: { ru: 'Науат / Нават', kk: 'Navat', en: 'Navat' }, price: 590, image: 'tea-navat.jpg', category: 'teaAdditives' },
      { id: 72, name: { ru: 'Сүт / Молоко', kk: 'Sút', en: 'Milk' }, price: 590, image: 'tea-milk.jpg', category: 'teaAdditives' },
      { id: 73, name: { ru: 'Жалбыз / Мята', kk: 'Jalbyz', en: 'Mint' }, price: 590, image: 'tea-mint.jpg', category: 'teaAdditives' }
    ]
  },
  teaSets: {
    name: { ru: 'Чайные сеты', kk: 'Shai setterı', en: 'Tea Sets' },
    icon: 'fa-gift',
    items: [
      { id: 74, name: { ru: 'Шай сеті (Інжір, аджуа, пісте, бадам, жүзім, бал)', kk: 'Shai setı (Injir, ajua, pıste, adam, júzim, bal)', en: 'Tea Sweets (Figs, ajua, pistachios, almonds, grapes, honey)' }, price: 11990, image: 'tea-set.jpg', category: 'teaSets' }
    ]
  },
  traditionalDrinks: {
    name: { ru: 'Традиционные напитки', kk: 'Dástúrli susyndar', en: 'Traditional Drinks' },
    icon: 'fa-wine-glass-alt',
    items: [
      { id: 75, name: { ru: 'Шұбат', kk: 'Shūbat', en: 'Shubat' }, price: 1790, priceLarge: 5590, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'shubat.jpg', category: 'traditionalDrinks' },
      { id: 76, name: { ru: 'Шалап', kk: 'Shalap', en: 'Shalap' }, price: 1990, priceLarge: 3390, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'shalap.jpg', category: 'traditionalDrinks' },
      { id: 77, name: { ru: 'Қымыз', kk: 'Qymyz', en: 'Kumis' }, price: 1790, priceLarge: 5590, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'kymyz.jpg', category: 'traditionalDrinks' }
    ]
  },
  coldDrinks: {
    name: { ru: 'Холодные напитки', kk: 'Salqyn susyndar', en: 'Cold Drinks' },
    icon: 'fa-wine-bottle',
    items: [
      { id: 78, name: { ru: 'Жантақ қосылған салқын шай', kk: 'Jantaq qosylǵan salqyn shai', en: 'Cold tea with camel thorn' }, price: 1990, priceLarge: 3590, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'cold-tea.jpg', category: 'coldDrinks' },
      { id: 79, name: { ru: 'Мүкжидек сусыны', kk: 'Mükjidek susyny', en: 'Cranberry juice' }, price: 2590, priceLarge: 4490, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'cranberry.jpg', category: 'coldDrinks' },
      { id: 80, name: { ru: 'Tassay', kk: 'Tassay', en: 'Tassay' }, price: 1490, priceLarge: 1990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '0.75л', image: 'tassay.jpg', category: 'coldDrinks' },
      { id: 81, name: { ru: 'Tassay Excellent', kk: 'Tassay Excellent', en: 'Tassay Excellent' }, price: 2590, image: 'tassay-excellent.jpg', category: 'coldDrinks' },
      { id: 82, name: { ru: 'Coca-Cola / Zero', kk: 'Coca-Cola / Zero', en: 'Coca-Cola / Zero' }, price: 1290, image: 'coca-cola.jpg', category: 'coldDrinks' }
    ]
  },
  fresh: {
    name: { ru: 'Фреши', kk: 'Freşter', en: 'Fresh Juices' },
    icon: 'fa-apple-alt',
    items: [
      { id: 83, name: { ru: 'Алма', kk: 'Alma', en: 'Apple' }, price: 3590, priceLarge: 6590, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'fresh-apple.jpg', category: 'fresh' },
      { id: 84, name: { ru: 'Апельсин', kk: 'Apelsin', en: 'Orange' }, price: 3990, priceLarge: 6990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'fresh-orange.jpg', category: 'fresh' },
      { id: 85, name: { ru: 'Грейпфрут', kk: 'Greıpfryt', en: 'Grapefruit' }, price: 3390, priceLarge: 6590, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'fresh-grapefruit.jpg', category: 'fresh' },
      { id: 86, name: { ru: 'Алма+Апельсин', kk: 'Alma+Apelsin', en: 'Apple+Orange' }, price: 3990, priceLarge: 6990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'fresh-mix.jpg', category: 'fresh' }
    ]
  },
  lemonades: {
    name: { ru: 'Лимонады', kk: 'Limonattar', en: 'Lemonades' },
    icon: 'fa-glass-whiskey',
    items: [
      { id: 87, name: { ru: 'Ананас-щавель', kk: 'Ananas-sháuel', en: 'Pineapple-sorrel' }, price: 2990, priceLarge: 4290, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'lemonade-pineapple.jpg', category: 'lemonades' },
      { id: 88, name: { ru: 'Апельсин-киви', kk: 'Apelsin-kıvı', en: 'Orange-kiwi' }, price: 2990, priceLarge: 4290, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'lemonade-orange-kiwi.jpg', category: 'lemonades' }
    ]
  },
  sauces: {
    name: { ru: 'Соусы', kk: 'Tūzdyqtar', en: 'Sauces' },
    icon: 'fa-droplet',
    items: [
      { id: 89, name: { ru: 'Соус со степными травами', kk: 'Dala shopterınen ázırlengen tuzdyq', en: 'Steppe herb sauce' }, price: 990, image: 'sauce-herbs.jpg', category: 'sauces' },
      { id: 90, name: { ru: 'Гранатовый соус', kk: 'Anar tuzdyǵy', en: 'Pomegranate sauce' }, price: 990, image: 'sauce-pomegranate.jpg', category: 'sauces' },
      { id: 91, name: { ru: 'Кефирный соус', kk: 'Aıran tuzdyǵy', en: 'Kefir sauce' }, price: 990, image: 'sauce-kefir.jpg', category: 'sauces' },
      { id: 92, name: { ru: 'Соус на основе овощей', kk: 'Kökönıs tuzdyǵy', en: 'Vegetable based sauce' }, price: 990, image: 'sauce-vegetable.jpg', category: 'sauces' },
      { id: 93, name: { ru: 'Острый соус', kk: 'Ashy kökönıs tuzdyǵy', en: 'Spicy vegetable based sauce' }, price: 990, image: 'sauce-spicy.jpg', category: 'sauces' },
      { id: 94, name: { ru: 'Сметана', kk: 'Qaımaq', en: 'Sour cream' }, price: 990, image: 'sauce-sour-cream.jpg', category: 'sauces' },
      { id: 95, name: { ru: 'Имбирный соус', kk: 'Zımbır tuzdyǵy', en: 'Ginger sauce' }, price: 990, image: 'sauce-ginger.jpg', category: 'sauces' },
      { id: 96, name: { ru: 'Соус из курта', kk: 'Qurt tuzdyǵy', en: 'Kurt sauce' }, price: 990, image: 'sauce-kurt.jpg', category: 'sauces' }
    ]
  }
};

// ============================================================
//  ДАННЫЕ МЕНЮ АСТАНЫ
// ============================================================
const menuDataAstana = {
  salads: {
    name: { ru: 'Салаты', kk: 'Salattar', en: 'Salads' },
    icon: 'fa-leaf',
    items: [
      { id: 101, name: { ru: 'Салат из свежих овощей', kk: 'Balǵyn kökönis salaty', en: 'Fresh Vegetable Salad' }, price: 3590, image: 'astana/salad-fresh.jpg', category: 'salads' },
      { id: 102, name: { ru: 'Салат «Қостура»', kk: 'Qostura salaty', en: 'Salad "Qostura"' }, price: 5990, desc: { ru: 'с подкопченой кониной', kk: 'Ystalǵan jylqy etimen', en: 'with smoked horsemeat' }, image: 'astana/salad-kostyra.jpg', category: 'salads' },
      { id: 103, name: { ru: 'Салат «Сандық»', kk: 'Sandyq salaty', en: 'Salad "Sandyq"' }, price: 5990, desc: { ru: 'в имбирном соусе', kk: 'Zımbır tuzdyǵynda', en: 'in ginger sauce' }, image: 'astana/salad-sandyq.jpg', category: 'salads' },
      { id: 104, name: { ru: 'Хрустящие баклажаны', kk: 'Qytyrlaq baqyldan', en: 'Crispy eggplant' }, price: 4990, desc: { ru: 'в соусе из курта', kk: 'Qurt tuzdyǵynda', en: 'in qurt sauce' }, image: 'astana/eggplant-qurt.jpg', category: 'salads' },
      { id: 105, name: { ru: 'Ассорти из сезонных овощей', kk: 'Mausymdyq kökönister assortisi', en: 'Seasonal vegetable assortment' }, price: 6290, desc: { ru: 'с соусом из курта', kk: 'Qurt tuzdyǵymen', en: 'with qurt sauce' }, image: 'astana/seasonal-vegetables.jpg', category: 'salads' }
    ]
  },
  delicacies: {
    name: { ru: 'Деликатесы', kk: 'Tiskebasarlyq', en: 'Delicacies' },
    icon: 'fa-star',
    items: [
      { id: 106, name: { ru: 'Подкопченый «Құйрық май»', kk: 'Quyryq may', en: '"Quyryq May"' }, price: 2590, desc: { ru: 'с кумысом', kk: 'Qymyzben', en: 'with kumis' }, image: 'astana/kuiryk-may.jpg', category: 'delicacies' },
      { id: 107, name: { ru: '«Шеке»', kk: 'Sheke', en: '"Sheke"' }, price: 8990, image: 'astana/sheke.jpg', category: 'delicacies' },
      { id: 108, name: { ru: '«Жілік май»', kk: 'Jilik may', en: '"Zhylyk May"' }, price: 7590, image: 'astana/zhilyk-may.jpg', category: 'delicacies' },
      { id: 109, name: { ru: '«Ұйқы ашар» копченая конина', kk: 'Ystalǵan jylqy eti "Uıqy ashar"', en: '"Uyky Ashar" smoked horsemeat' }, price: 7890, desc: { ru: 'на можжевельнике', kk: 'Arsha jyparaǵynda', en: 'on juniper' }, image: 'astana/uyky-ashar.jpg', category: 'delicacies' },
      { id: 110, name: { ru: '«Құйрық бауыр»', kk: 'Quyryq bauyr', en: '"Quyryq Bauyr"' }, price: 7290, image: 'astana/quiryq-bauyr.jpg', category: 'delicacies' },
      { id: 111, name: { ru: '«Үлпершек» сердце барашка', kk: 'Qoı júregi "Úlpershek"', en: '"Ulpershek" lamb heart' }, price: 7990, image: 'astana/ulpershek.jpg', category: 'delicacies' },
      { id: 112, name: { ru: '«Ми палау»', kk: 'Mi Palau', en: '"Mi Palau"' }, price: 3990, image: 'astana/mi-palau.jpg', category: 'delicacies' },
      { id: 113, name: { ru: 'Осетровая икра с творожным кремом', kk: 'Bekire uyldyryǵy sýzbeli kremmen', en: 'Sturgeon caviar with cream cheese' }, price: 8990, image: 'astana/sturgeon-caviar.jpg', category: 'delicacies' }
    ]
  },
  soups: {
    name: { ru: 'Супы', kk: 'Sorpalar', en: 'Soups' },
    icon: 'fa-utensil-spoon',
    items: [
      { id: 114, name: { ru: 'Суп «Жібек жолы»', kk: 'Jibek joly sorpasy', en: '"Zhibek Zholy" soup' }, price: 4990, desc: { ru: 'с нутом и овощами', kk: 'Nýtpen jáne kökönistermen', en: 'with chickpeas and vegetables' }, image: 'astana/zhibek-zholy.jpg', category: 'soups' },
      { id: 115, name: { ru: 'Көже «Nomad»', kk: 'Köje "Nomad"', en: '"Nomad" Kozhe' }, price: 5890, desc: { ru: 'с вяленой кониной', kk: 'Qaqtalǵan jylqy etimen', en: 'with dried horsemeat' }, image: 'astana/nomad-kozhe.jpg', category: 'soups' },
      { id: 116, name: { ru: 'Суп из индейки и белой кукурузы', kk: 'Aq júgeri kürketaýyq sorpasy', en: 'Turkey and white corn soup' }, price: 4990, image: 'astana/turkey-soup.jpg', category: 'soups' },
      { id: 117, name: { ru: 'Суп из перепелки', kk: 'Bödene sorpasy', en: 'Quail soup' }, price: 6290, image: 'astana/quail-soup.jpg', category: 'soups' },
      { id: 118, name: { ru: '«Қол кеспе» с подкопченной кониной', kk: 'Ystalǵan jylqy etimen "Qol kespe"', en: '"Qol Kespe" with smoked horsemeat' }, price: 4990, image: 'astana/kol-kespe.jpg', category: 'soups' },
      { id: 119, name: { ru: 'Суп «Томыртқа»', kk: '"Tomyrtqa" sorpasy', en: '"Tomyrtqa" soup' }, price: 4990, image: 'astana/tomyrtqa.jpg', category: 'soups' },
      { id: 120, name: { ru: 'Жарма көже с топленым маслом', kk: 'Qaıyrılǵan mai qosylǵan Jarma köje', en: 'Zharma Kozhe with melted butter' }, price: 3590, image: 'astana/zharma-kozhe.jpg', category: 'soups' }
    ]
  },
  mains: {
    name: { ru: 'Основные блюда', kk: 'Negızgı taǵamdar', en: 'Main Dishes' },
    icon: 'fa-fire',
    items: [
      { id: 121, name: { ru: '«Қазақ еті» («Бешбармак»)', kk: 'Qazaq etı (Beshbarmaq)', en: '"Qazaq Et" (Beshbarmak)' }, price: 8690, desc: { ru: 'в стиле парога', kk: 'Paroǵa úlgisinde', en: 'in paroga style' }, image: 'astana/qazaq-et.jpg', category: 'mains' },
      { id: 122, name: { ru: '«Бал қуырдақ» из конины', kk: 'Bal quyrdaq', en: '"Bal Kuyrdak" from horsemeat' }, price: 8990, image: 'astana/bal-kuyrdak.jpg', category: 'mains' },
      { id: 123, name: { ru: '«Нан салма»', kk: 'Nan salma', en: '"Nan Salma"' }, price: 7290, desc: { ru: 'с домашним овощным соусом', kk: 'Úı kökönıs tuzdyǵymen', en: 'with homemade vegetable sauce' }, image: 'astana/nan-salma.jpg', category: 'mains' },
      { id: 124, name: { ru: '«Бұқпа» из говядины с овощами на гриле', kk: 'Būqpa', en: '"Buqpa" from beef with grilled vegetables' }, price: 9590, image: 'astana/bugpa.jpg', category: 'mains' },
      { id: 125, name: { ru: '«Қымыз қабырға» бараньи ребра в кумысе', kk: 'Qymyzdaǵy qoı qabyrǵasy "Qymyz qabyrǵa"', en: '"Qymyz Qabyrga" lamb ribs in kumis' }, price: 9590, image: 'astana/qymyz-qabyrga.jpg', category: 'mains' },
      { id: 126, name: { ru: '«Борша ет» телятина на камнях', kk: 'Tasta ázırlengen sıyr etınen "Borsha et"', en: '"Borsha Et" veal on stones' }, price: 9190, image: 'astana/borsha-et.jpg', category: 'mains' },
      { id: 127, name: { ru: '«Қақталған қазы» из конины', kk: 'Qaqtalǵan qazy', en: '"Kaktalgan Kazy" from horsemeat' }, price: 9590, desc: { ru: 'с соусом из курта', kk: 'Qurt tuzdyǵymen', en: 'with qurt sauce' }, image: 'astana/kaktalgan-kazy.jpg', category: 'mains' },
      { id: 128, name: { ru: 'Томленая шея баранины (Шоу программа)', kk: 'Moıyn shou', en: 'Braised lamb neck (Show program)' }, price: 34990, desc: { ru: '(4-5 персон)', kk: '(4-5 adam)', en: '(4-5 persons)' }, image: 'astana/lamb-neck.jpg', category: 'mains' },
      { id: 129, name: { ru: 'Горная форель', kk: 'Tauly forel', en: 'Mountain trout' }, price: 7290, image: 'astana/trout.jpg', category: 'mains' }
    ]
  },
  party: {
    name: { ru: 'Блюда на компанию', kk: 'Újymdyq taǵamdar', en: 'Group Menu' },
    icon: 'fa-users',
    items: [
      { id: 130, name: { ru: '«Сый табақ» из томленой баранины', kk: 'Syı tabaq', en: '"Syy Tabak" from braised lamb' }, price: 85990, desc: { ru: '(5-6 персон), ⏱ 40-50 мин', kk: '(5-6 adam), ⏱ 40-50 min', en: '(5-6 persons), ⏱ 40-50 min' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '40-50 мин', kk: '40-50 min', en: '40-50 min' }, image: 'astana/syy-tabak.jpg', category: 'party' },
      { id: 131, name: { ru: '«Бел көтерер» из говядины', kk: 'Bel kóterer', en: '"Bel Koterer" from beef' }, price: 119990, desc: { ru: '(5-6 персон), ⏱ 40-50 мин', kk: '(5-6 adam), ⏱ 40-50 min', en: '(5-6 persons), ⏱ 40-50 min' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '40-50 мин', kk: '40-50 min', en: '40-50 min' }, image: 'astana/bel-koterer.jpg', category: 'party' },
      { id: 132, name: { ru: '«Қарын көмбе» из конины', kk: 'Qaryn kómbe', en: '"Karyn Kombe" from horsemeat' }, price: 115990, desc: { ru: '(5-6 персон), ⏱ 60-90 мин', kk: '(5-6 adam), ⏱ 60-90 min', en: '(5-6 persons), ⏱ 60-90 min' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '60-90 мин', kk: '60-90 min', en: '60-90 min' }, image: 'astana/karyn-kombe.jpg', category: 'party' },
      { id: 133, name: { ru: '«Той табақ» из конины', kk: 'Toı tabaq', en: '"Toy Tabak" from horsemeat' }, price: 82990, desc: { ru: '(5-6 персон), ⏱ 30-40 мин', kk: '(5-6 adam), ⏱ 30-40 min', en: '(5-6 persons), ⏱ 30-40 min' }, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '30-40 мин', kk: '30-40 min', en: '30-40 min' }, image: 'astana/toy-tabak.jpg', category: 'party' },
      { id: 134, name: { ru: '«Хан Сырбаз»', kk: 'Han Syrbaz', en: '"Khan Syrbaz"' }, price: 135990, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '40-50 мин', kk: '40-50 min', en: '40-50 min' }, image: 'astana/khan-syrbaz.jpg', category: 'party' },
      { id: 135, name: { ru: '«Бекіре» (Осетр)', kk: 'Bekıre', en: '"Bekire" (Sturgeon)' }, price: 129990, info: { ru: 'На 5-6 персон', kk: '5-6 adamǵa', en: 'For 5-6 persons' }, cookingTime: { ru: '40-50 мин', kk: '40-50 min', en: '40-50 min' }, image: 'astana/bekire.jpg', category: 'party' }
    ]
  },
  bakery: {
    name: { ru: 'Выпечка', kk: 'Nan toqaş', en: 'Bakery' },
    icon: 'fa-bread-slice',
    items: [
      { id: 150, name: { ru: 'Бауырсаки со сладким вареньем', kk: 'Tätti tosappen bauyrsaq', en: 'Baursak with sweet jam' }, price: 2290, image: 'astana/baursak-jam.jpg', category: 'bakery' },
      { id: 151, name: { ru: 'Бауырсаки с творожным сыром', kk: 'Irımşıkten bauyrsaq', en: 'Baursak with cream cheese' }, price: 2590, image: 'astana/baursak-cheese.jpg', category: 'bakery' },
      { id: 152, name: { ru: '«Мыжыма»', kk: 'Myjyma', en: '"Myzhyma"' }, price: 2590, image: 'astana/myzhyma.jpg', category: 'bakery' },
      { id: 153, name: { ru: '«Бәрәміш» с мясом', kk: 'Etpen "Beramiş"', en: '"Beramish" with meat' }, price: 3590, image: 'astana/baramysh.jpg', category: 'bakery' },
      { id: 154, name: { ru: '«Таба нан» с горным медом и маслом', kk: 'Taba nan', en: '"Taba Nan" with mountain honey and butter' }, price: 2890, image: 'astana/taba-nan.jpg', category: 'bakery' },
      { id: 155, name: { ru: '«Қаттама»', kk: 'Qaftama', en: '"Kattama"' }, price: 2590, image: 'astana/kattama.jpg', category: 'bakery' },
      { id: 156, name: { ru: '«Нан астау» большой', kk: 'Nan astau ülken', en: '"Nan Astau" large' }, price: 9990, image: 'astana/nan-astau-large.jpg', category: 'bakery' },
      { id: 157, name: { ru: '«Нан астау» мини', kk: 'Nan astau mini', en: '"Nan Astau" mini' }, price: 6990, image: 'astana/nan-astau-mini.jpg', category: 'bakery' }
    ]
  },
  desserts: {
    name: { ru: 'Десерты', kk: 'Tättıler', en: 'Desserts' },
    icon: 'fa-cake',
    items: [
      { id: 158, name: { ru: '«Чизкейк» из жареного тары и талкана', kk: 'Qýyrylǵan tary men talkannan "Chizkeik"', en: '"Cheesecake" from fried millet and talkan' }, price: 3590, image: 'astana/cheesecake.jpg', category: 'desserts' },
      { id: 159, name: { ru: 'Фаршированный финик с орехами и балкаймак', kk: 'Balqaimaqpen ūsynylatyn quvrylǵan jańǵaq', en: 'Stuffed dates with nuts and balqaimak' }, price: 4290, image: 'astana/stuffed-dates.jpg', category: 'desserts' },
      { id: 160, name: { ru: 'Сладости «Сандық»', kk: 'Sandyq tättılerı', en: '"Sandyq" sweets' }, price: 6590, image: 'astana/sandyq-sweets.jpg', category: 'desserts' },
      { id: 161, name: { ru: '«Майсөк» с муссом', kk: 'Musspen "Maisök"', en: '"Maisok" with mousse' }, price: 3590, image: 'astana/maisok.jpg', category: 'desserts' },
      { id: 162, name: { ru: 'Десерт «Алматинский апорт»', kk: 'Almaty aport deserti', en: '"Almaty Aport" dessert' }, price: 3590, image: 'astana/almaty-aport.jpg', category: 'desserts' },
      { id: 163, name: { ru: '«Төңкерме» из обжаренной пшеницы', kk: 'Quvrylgan bıdaıdan ázırlengen "Tóńkerme"', en: '"Tonkerme" from roasted wheat' }, price: 3390, image: 'astana/tonkerme.jpg', category: 'desserts' },
      { id: 164, name: { ru: 'Хрустящий домашний пирог', kk: 'Xrustıaşqy úı bälışı', en: 'Crispy homemade pie' }, price: 3590, image: 'astana/homemade-pie.jpg', category: 'desserts' },
      { id: 165, name: { ru: '«Сүймесіт»', kk: 'Sūmesıt', en: '"Sumesit"' }, price: 4490, image: 'astana/sumesut.jpg', category: 'desserts' },
      { id: 166, name: { ru: 'Мороженое', kk: 'Balmuzdaq', en: 'Ice cream' }, price: 2290, image: 'astana/ice-cream.jpg', category: 'desserts' }
    ]
  },
  tea: {
    name: { ru: 'Чаи', kk: 'Şailar', en: 'Tea' },
    icon: 'fa-mug-hot',
    items: [
      { id: 167, name: { ru: 'Turkistan', kk: 'Turkistan', en: 'Turkistan' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-turkistan.jpg', category: 'tea' },
      { id: 168, name: { ru: 'Sandyq', kk: 'Sandyq', en: 'Sandyq' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-sandyq.jpg', category: 'tea' },
      { id: 169, name: { ru: 'Jetisu', kk: 'Jetisu', en: 'Jetisu' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-jetisu.jpg', category: 'tea' },
      { id: 170, name: { ru: 'Tary shai', kk: 'Tary shai', en: 'Tary shai' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-tary.jpg', category: 'tea' },
      { id: 171, name: { ru: 'Zhibek joly', kk: 'Jibek joly', en: 'Zhibek joly' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-zhibek.jpg', category: 'tea' },
      { id: 172, name: { ru: 'Jidek', kk: 'Jidek', en: 'Jidek' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-jidek.jpg', category: 'tea' },
      { id: 173, name: { ru: 'Tau shai', kk: 'Tau shai', en: 'Tau shai' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-tau.jpg', category: 'tea' },
      { id: 174, name: { ru: 'Shyrganaq', kk: 'Shyrganaq', en: 'Shyrganaq' }, price: 3890, priceLarge: 4490, hasSizeToggle: true, image: 'astana/tea-shyrganaq.jpg', category: 'tea' },
      { id: 175, name: { ru: 'Qara shai', kk: 'Qara shai', en: 'Qara shai' }, price: 2490, priceLarge: 3590, hasSizeToggle: true, image: 'astana/tea-qara.jpg', category: 'tea' },
      { id: 176, name: { ru: 'Kok shai', kk: 'Kok shai', en: 'Kok shai' }, price: 2490, priceLarge: 3590, hasSizeToggle: true, image: 'astana/tea-kok.jpg', category: 'tea' }
    ]
  },
  teaAdditives: {
    name: { ru: 'Добавки к чаю', kk: 'Shai qospalary', en: 'Tea Additives' },
    icon: 'fa-leaf',
    items: [
      { id: 177, name: { ru: 'Құрма / Финики', kk: 'Qurma', en: 'Dates' }, price: 990, image: 'astana/tea-dates.jpg', category: 'teaAdditives' },
      { id: 178, name: { ru: 'Тосап / Варенье', kk: 'Tosap', en: 'Jam' }, price: 590, image: 'astana/tea-jam.jpg', category: 'teaAdditives' },
      { id: 179, name: { ru: 'Бал / Мед', kk: 'Bal', en: 'Honey' }, price: 590, image: 'astana/tea-honey.jpg', category: 'teaAdditives' },
      { id: 180, name: { ru: 'Лимон', kk: 'Limon', en: 'Lemon' }, price: 590, image: 'astana/tea-lemon.jpg', category: 'teaAdditives' },
      { id: 181, name: { ru: 'Науат / Нават', kk: 'Navat', en: 'Navat' }, price: 590, image: 'astana/tea-navat.jpg', category: 'teaAdditives' },
      { id: 182, name: { ru: 'Сүт / Молоко', kk: 'Sút', en: 'Milk' }, price: 590, image: 'astana/tea-milk.jpg', category: 'teaAdditives' },
      { id: 183, name: { ru: 'Жалбыз / Мята', kk: 'Jalbyz', en: 'Mint' }, price: 590, image: 'astana/tea-mint.jpg', category: 'teaAdditives' }
    ]
  },
  teaSets: {
    name: { ru: 'Чайные сеты', kk: 'Shai setterı', en: 'Tea Sets' },
    icon: 'fa-gift',
    items: [
      { id: 184, name: { ru: 'Шай сеті (Інжір, аджуа, пісте, бадам, жүзім, бал)', kk: 'Shai setı (Injir, ajua, pıste, adam, júzim, bal)', en: 'Tea Sweets (Figs, ajua, pistachios, almonds, grapes, honey)' }, price: 11990, image: 'astana/tea-set.jpg', category: 'teaSets' }
    ]
  },
  traditionalDrinks: {
    name: { ru: 'Традиционные напитки', kk: 'Dástúrli susyndar', en: 'Traditional Drinks' },
    icon: 'fa-wine-glass-alt',
    items: [
      { id: 185, name: { ru: 'Шұбат', kk: 'Shūbat', en: 'Shubat' }, price: 1790, priceLarge: 5590, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'astana/shubat.jpg', category: 'traditionalDrinks' },
      { id: 186, name: { ru: 'Шалап', kk: 'Shalap', en: 'Shalap' }, price: 1990, priceLarge: 3390, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'astana/shalap.jpg', category: 'traditionalDrinks' },
      { id: 187, name: { ru: 'Қымыз', kk: 'Qymyz', en: 'Kumis' }, price: 1790, priceLarge: 5590, hasSizeToggle: true, sizeLabelSmall: '0.2л', sizeLabelLarge: '1л', image: 'astana/kymyz.jpg', category: 'traditionalDrinks' }
    ]
  },
  coldDrinks: {
    name: { ru: 'Холодные напитки', kk: 'Salqyn susyndar', en: 'Cold Drinks' },
    icon: 'fa-wine-bottle',
    items: [
      { id: 188, name: { ru: 'Жантақ қосылған салқын шай', kk: 'Jantaq qosylǵan salqyn shai', en: 'Cold tea with camel thorn' }, price: 1990, priceLarge: 3590, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'astana/cold-tea.jpg', category: 'coldDrinks' },
      { id: 189, name: { ru: 'Мүкжидек сусыны', kk: 'Mükjidek susyny', en: 'Cranberry juice' }, price: 2590, priceLarge: 4490, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'astana/cranberry.jpg', category: 'coldDrinks' },
      { id: 190, name: { ru: 'Tassay', kk: 'Tassay', en: 'Tassay' }, price: 1490, priceLarge: 1990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '0.75л', image: 'astana/tassay.jpg', category: 'coldDrinks' },
      { id: 191, name: { ru: 'Tassay Excellent', kk: 'Tassay Excellent', en: 'Tassay Excellent' }, price: 2590, image: 'astana/tassay-excellent.jpg', category: 'coldDrinks' },
      { id: 192, name: { ru: 'Coca-Cola / Zero', kk: 'Coca-Cola / Zero', en: 'Coca-Cola / Zero' }, price: 1290, image: 'astana/coca-cola.jpg', category: 'coldDrinks' }
    ]
  },
  fresh: {
    name: { ru: 'Фреши', kk: 'Freşter', en: 'Fresh Juices' },
    icon: 'fa-apple-alt',
    items: [
      { id: 193, name: { ru: 'Алма', kk: 'Alma', en: 'Apple' }, price: 3590, priceLarge: 6590, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'astana/fresh-apple.jpg', category: 'fresh' },
      { id: 194, name: { ru: 'Апельсин', kk: 'Apelsin', en: 'Orange' }, price: 3990, priceLarge: 6990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'astana/fresh-orange.jpg', category: 'fresh' },
      { id: 195, name: { ru: 'Грейпфрут', kk: 'Greıpfryt', en: 'Grapefruit' }, price: 3390, priceLarge: 6590, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'astana/fresh-grapefruit.jpg', category: 'fresh' },
      { id: 196, name: { ru: 'Алма+Апельсин', kk: 'Alma+Apelsin', en: 'Apple+Orange' }, price: 3990, priceLarge: 6990, hasSizeToggle: true, sizeLabelSmall: '0.5л', sizeLabelLarge: '1л', image: 'astana/fresh-mix.jpg', category: 'fresh' }
    ]
  },
  lemonades: {
    name: { ru: 'Лимонады', kk: 'Limonattar', en: 'Lemonades' },
    icon: 'fa-glass-whiskey',
    items: [
      { id: 197, name: { ru: 'Ананас-щавель', kk: 'Ananas-sháuel', en: 'Pineapple-sorrel' }, price: 2990, priceLarge: 4290, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'astana/lemonade-pineapple.jpg', category: 'lemonades' },
      { id: 198, name: { ru: 'Апельсин-киви', kk: 'Apelsin-kıvı', en: 'Orange-kiwi' }, price: 2990, priceLarge: 4290, hasSizeToggle: true, sizeLabelSmall: '0.8л', sizeLabelLarge: '1.2л', image: 'astana/lemonade-orange-kiwi.jpg', category: 'lemonades' }
    ]
  },
  sauces: {
    name: { ru: 'Соусы', kk: 'Tūzdyqtar', en: 'Sauces' },
    icon: 'fa-droplet',
    items: [
      { id: 199, name: { ru: 'Соус со степными травами', kk: 'Dala shopterınen ázırlengen tuzdyq', en: 'Steppe herb sauce' }, price: 890, image: 'astana/sauce-herbs.jpg', category: 'sauces' },
      { id: 200, name: { ru: 'Гранатовый соус', kk: 'Anar tuzdyǵy', en: 'Pomegranate sauce' }, price: 890, image: 'astana/sauce-pomegranate.jpg', category: 'sauces' },
      { id: 201, name: { ru: 'Кефирный соус', kk: 'Aıran tuzdyǵy', en: 'Kefir sauce' }, price: 890, image: 'astana/sauce-kefir.jpg', category: 'sauces' },
      { id: 202, name: { ru: 'Соус на основе овощей', kk: 'Kökönıs tuzdyǵy', en: 'Vegetable based sauce' }, price: 890, image: 'astana/sauce-vegetable.jpg', category: 'sauces' },
      { id: 203, name: { ru: 'Острый соус', kk: 'Ashy kökönıs tuzdyǵy', en: 'Spicy vegetable based sauce' }, price: 890, image: 'astana/sauce-spicy.jpg', category: 'sauces' },
      { id: 204, name: { ru: 'Сметана', kk: 'Qaımaq', en: 'Sour cream' }, price: 890, image: 'astana/sauce-sour-cream.jpg', category: 'sauces' },
      { id: 205, name: { ru: 'Имбирный соус', kk: 'Zımbır tuzdyǵy', en: 'Ginger sauce' }, price: 890, image: 'astana/sauce-ginger.jpg', category: 'sauces' },
      { id: 206, name: { ru: 'Соус из курта', kk: 'Qurt tuzdyǵy', en: 'Kurt sauce' }, price: 890, image: 'astana/sauce-kurt.jpg', category: 'sauces' }
    ]
  }
};

const categoryTimeMap = {
  salads: { icon: '🥗', timeKey: 'salads' },
  deli: { icon: '⭐', timeKey: 'deli' },
  delicacies: { icon: '⭐', timeKey: 'deli' },
  soups: { icon: '🍲', timeKey: 'soups' },
  main: { icon: '🔥', timeKey: 'hot' },
  mains: { icon: '🔥', timeKey: 'hot' },
  show: { icon: '🎭', timeKey: 'show' },
  bakery: { icon: '🍞', timeKey: 'bakery' },
  desserts: { icon: '🍰', timeKey: 'desserts' },
  party: { icon: '👥', timeKey: 'party' },
  drinks: { icon: '🥤', timeKey: 'drinks' },
  garnish: { icon: '🥕', timeKey: 'garnish' },
  tea: { icon: '🍵', timeKey: 'tea' },
  teaAdditives: { icon: '🍵', timeKey: 'tea' },
  teaSets: { icon: '🎁', timeKey: 'tea' },
  traditionalDrinks: { icon: '🥤', timeKey: 'drinks' },
  coldDrinks: { icon: '🥤', timeKey: 'drinks' },
  fresh: { icon: '🍹', timeKey: 'drinks' },
  lemonades: { icon: '🍹', timeKey: 'drinks' },
  sauces: { icon: '💧', timeKey: 'sauces' }
};

let currentLang = 'ru';
let cart = [];
let currentCategory = 'salads';
const toggleStates = {};
let sizeStates = {};
let selectedRating = 0;
let wishlist = JSON.parse(localStorage.getItem('sandyq_wishlist') || '[]');
let currentCity = 'almaty';

// ============================================================
//  ДАННЫЕ ГОРОДОВ
// ============================================================
const cityData = {
  almaty: {
    name: 'Алматы',
    address: '📍 Абылайхана 55 / Алимжанова 55',
    heroDesc: 'Элитный этно-ресторан казахской кухни в самом сердце Алматы',
    phone: '+7 (775) 007-32-82',
    whatsapp: '+7 (701) 851-21-41',
    googleMaps: 'https://maps.app.goo.gl/kuqBpjWYo7bCNpZSA',
    gisMaps: 'https://go.2gis.com/AxNic',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.85123456789!2d76.928400!3d43.236500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzExLjQiTiA3NsKwNTUnNDIuMyJF!5e0!3m2!1sru!2skz!4v1234567890',
    restaurant: 'Sandyq Алматы, Абылайхана 55',
    menu: menuDataAlmaty
  },
  astana: {
    name: 'Астана',
    address: '📍 Сарайшык 34/3',
    heroDesc: 'Элитный этно-ресторан казахской кухни в центре Астаны',
    phone: '+7 (775) 007-32-82',
    whatsapp: '+7 (701) 851-21-41',
    googleMaps: 'https://maps.app.goo.gl/xxxxx',
    gisMaps: 'https://go.2gis.com/xxxxx',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2507.123456789!2d71.430000!3d51.090000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDU0JzI0LjAiTiA3McKwMjUnNDguMCJF!5e0!3m2!1sru!2skz!4v1234567890',
    restaurant: 'Sandyq Астана, Сарайшык 34/3',
    menu: menuDataAstana
  }
};

function getCurrentMenu() {
  return cityData[currentCity].menu;
}

// ============================================================
//  ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ГОРОДА
// ============================================================
function switchCity(city) {
  currentCity = city;
  const data = cityData[city];
  
  document.querySelectorAll('.city-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.city === city);
  });
  
  const addressEl = document.getElementById('city-address');
  if (addressEl) addressEl.textContent = data.address;
  
  const footerAddress = document.getElementById('footer-address');
  if (footerAddress) footerAddress.textContent = data.address;
  
  const badge = document.getElementById('city-badge');
  if (badge) badge.textContent = data.name;
  
  const heroDesc = document.getElementById('city-hero-desc');
  if (heroDesc) heroDesc.textContent = data.heroDesc;
  
  const mapTitle = document.getElementById('map-title');
  if (mapTitle) mapTitle.textContent = `📍 Sandyq — ${data.address}`;
  
  const mapGoogle = document.getElementById('map-google');
  if (mapGoogle) mapGoogle.href = data.googleMaps;
  
  const map2gis = document.getElementById('map-2gis');
  if (map2gis) map2gis.href = data.gisMaps;
  
  const mapIframe = document.getElementById('map-iframe');
  if (mapIframe) mapIframe.src = data.mapEmbed;
  
  const phoneEl = document.getElementById('contact-phone');
  if (phoneEl) {
    phoneEl.textContent = data.phone;
    phoneEl.href = `tel:${data.phone.replace(/[\s\-\(\)]/g, '')}`;
  }
  
  const whatsappEl = document.getElementById('contact-whatsapp');
  if (whatsappEl) {
    whatsappEl.textContent = data.whatsapp;
    whatsappEl.href = `https://wa.me/${data.whatsapp.replace(/[\s\-\(\)]/g, '')}`;
  }
  
  // Очищаем корзину и размеры при смене города
  cart = [];
  sizeStates = {};
  saveCartToStorage();
  updateCart();
  
  // Перерисовываем меню
  buildNav();
  renderCategoryPage(currentCategory);
  renderTopDishes();
  
  localStorage.setItem('sandyq_city', city);
}

// Загружаем сохранённый город
(function() {
  const savedCity = localStorage.getItem('sandyq_city');
  if (savedCity && cityData[savedCity]) {
    switchCity(savedCity);
  }
})();

// ============================================================
//  TELEGRAM / JSONBIN
// ============================================================
async function sendOrderToTelegram(order) {
  const message = `🍽️ <b>НОВЫЙ ЗАКАЗ #${String(order.id).slice(-6)}</b>\n📍 <b>${order.restaurant}</b>\n👤 ${order.guest.name}\n📞 ${order.guest.phone}\n📅 ${order.date||'—'}\n💰 ${order.total.toLocaleString()} ₸`;
  try {
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        reply_markup: JSON.stringify({
          inline_keyboard: [[{ text: '🔗 Открыть админку', url: 'https://dzhalaliddin.github.io/Sandyqworld/admin.html' }]]
        })
      })
    });
    return true;
  } catch(e) { return false; }
}

async function sendReviewToTelegram(review) {
  const message = `⭐ <b>НОВЫЙ ОТЗЫВ</b>\n📝 ${review.text}\n👤 ${review.name}\n⭐ ${review.rating}/5\n📅 ${new Date(review.date).toLocaleString('ru')}`;
  try {
    await fetch(`${TELEGRAM_API}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    return true;
  } catch(e) { return false; }
}

async function saveOrderToCloud(order) {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', { headers: { 'X-Master-Key': JSONBIN_KEY } });
    const data = await res.json();
    const orders = data.record.orders || [];
    orders.push(order);
    await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ orders, bookings: data.record.bookings || [] })
    });
    return true;
  } catch(e) {
    console.warn('Ошибка облака, сохраняю локально:', e);
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
    return false;
  }
}

async function saveReviewToCloud(review) {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', { headers: { 'X-Master-Key': JSONBIN_KEY } });
    const data = await res.json();
    const reviews = data.record.reviews || [];
    reviews.push(review);
    await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ reviews, orders: data.record.orders || [], bookings: data.record.bookings || [] })
    });
    return true;
  } catch(e) {
    console.warn('Ошибка сохранения отзыва в облако:', e);
    const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    return false;
  }
}

// ============================================================
//  ТЕМА
// ============================================================
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const icon = document.getElementById('theme-icon');
  const isLight = document.body.classList.contains('light-theme');
  icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  updateCart();
}

(function() {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.className = 'fas fa-sun';
  }
})();

// ============================================================
//  ЯЗЫК
// ============================================================
function setLanguage(l) {
  currentLang = l;
  
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
  
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const key = el.getAttribute('data-lang-key');
    if (langDict[l]?.[key]) {
      el.textContent = langDict[l][key];
    }
  });
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.placeholder = langDict[l]?.search_placeholder || 'Поиск блюд...';
  }
  
  buildNav();
  renderCategoryPage(currentCategory);
  updateCart();
  renderTopDishes();
  renderEvents();
}

// ============================================================
//  НАВИГАЦИЯ
// ============================================================
function buildNav() {
  const nav = document.getElementById('categories-nav');
  const mobileCards = document.getElementById('mobile-cat-cards');
  if (!nav || !mobileCards) return;
  
  const menu = getCurrentMenu();
  const categoryKeys = Object.keys(menu);
  
  let h = '<div class="categories-drop" id="categories-drop"></div>';
  let cards = '';
  
  for (const k of categoryKeys) {
    const cat = menu[k];
    if (!cat) continue;
    h += `<button class="category-tab" data-cat="${k}" onclick="switchCategory('${k}')"><i class="fas ${cat.icon}"></i> <span data-lang-key="${k}">${cat.name[currentLang]}</span></button>`;
    cards += `<div class="mobile-cat-card" onclick="switchCategory('${k}')"><i class="fas ${cat.icon}"></i>${cat.name[currentLang]}</div>`;
  }
  nav.innerHTML = h;
  mobileCards.innerHTML = cards;
}

function showCategoryCards() {
  const mobileCards = document.getElementById('mobile-cat-cards');
  const backBtn = document.getElementById('mobile-back-btn');
  const categoryPage = document.getElementById('category-page');
  if (mobileCards) mobileCards.style.display = 'flex';
  if (backBtn) backBtn.style.display = 'none';
  if (categoryPage) categoryPage.innerHTML = '';
}

function switchCategory(k) {
  currentCategory = k;
  const searchResults = document.getElementById('search-results');
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const categoryPage = document.getElementById('category-page');
  
  if (searchResults) searchResults.style.display = 'none';
  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`.category-tab[data-cat="${k}"]`);
  if (tab) tab.classList.add('active');
  moveDrop(k);
  renderCategoryPage(k);
  
  if (window.innerWidth <= 768) {
    const mobileCards = document.getElementById('mobile-cat-cards');
    const backBtn = document.getElementById('mobile-back-btn');
    if (mobileCards) mobileCards.style.display = 'none';
    if (backBtn) backBtn.style.display = 'block';
  }
}

function moveDrop(k) {
  const tab = document.querySelector(`.category-tab[data-cat="${k}"]`);
  const drop = document.getElementById('categories-drop');
  const nav = document.getElementById('categories-nav');
  if (tab && drop && nav) {
    const nr = nav.getBoundingClientRect();
    const tr = tab.getBoundingClientRect();
    drop.style.left = (tr.left - nr.left) + 'px';
    drop.style.width = tr.width + 'px';
    drop.style.top = (tr.top - nr.top) + 'px';
    drop.style.height = tr.height + 'px';
  }
}

// ============================================================
//  ПОИСК
// ============================================================
function searchMenu() {
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  const searchClear = document.getElementById('search-clear');
  if (searchClear) searchClear.style.display = q.length > 0 ? 'block' : 'none';
  
  const results = document.getElementById('search-results');
  const page = document.getElementById('category-page');
  const menu = getCurrentMenu();
  
  if (q.length > 0) {
    if (page) page.style.display = 'none';
    if (results) {
      results.style.display = 'block';
      let found = [];
      for (const k in menu) {
        found.push(...menu[k].items.filter(i => (i.name[currentLang] || i.name.ru || '').toLowerCase().includes(q)));
      }
      const countEl = document.getElementById('search-count');
      if (countEl) countEl.textContent = `(${found.length})`;
      const grid = document.getElementById('search-grid');
      if (grid) {
        grid.innerHTML = found.length ? found.map(renderItem).join('') : '<p style="text-align:center;opacity:0.5;padding:40px;">Ничего не найдено</p>';
      }
    }
  } else {
    if (results) results.style.display = 'none';
    if (page) {
      page.style.display = 'block';
      renderCategoryPage(currentCategory);
    }
  }
}

function clearSearch() {
  const searchInput = document.getElementById('search-input');
  const searchClear = document.getElementById('search-clear');
  const results = document.getElementById('search-results');
  const page = document.getElementById('category-page');
  
  if (searchInput) searchInput.value = '';
  if (searchClear) searchClear.style.display = 'none';
  if (results) results.style.display = 'none';
  if (page) {
    page.style.display = 'block';
    renderCategoryPage(currentCategory);
  }
}

// ============================================================
//  ПЕРЕКЛЮЧАТЕЛЬ РАЗМЕРА
// ============================================================
function toggleSizeOption(itemId, value) {
  sizeStates[itemId] = value;
  updateSizePrice(itemId);
  updateItemCard(parseInt(itemId));
}

function updateSizePrice(itemId) {
  const item = findItemById(parseInt(itemId));
  if (!item || !item.hasSizeToggle) return;
  
  const isLarge = sizeStates[itemId] === 'large';
  const currentPrice = isLarge ? item.priceLarge : item.price;
  const priceLabel = isLarge ? (item.sizeLabelLarge || langDict[currentLang]?.large) : (item.sizeLabelSmall || langDict[currentLang]?.small);
  
  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) priceEl.textContent = currentPrice.toLocaleString() + ' ₸';
  
  const labelEl = document.getElementById(`label-${itemId}`);
  if (labelEl) labelEl.textContent = priceLabel;
}

// ============================================================
//  ПЕРЕКЛЮЧАТЕЛЬ "С ГОЛОВОЙ / БЕЗ ГОЛОВЫ"
// ============================================================
function toggleHeadOption(itemId, value) {
  const isWithHead = value === 'withHead';
  toggleStates[itemId] = isWithHead;
  
  const item = findItemById(parseInt(itemId));
  if (!item) return;
  
  const currentPrice = isWithHead ? item.price : item.priceWithoutHead;
  const priceLabel = isWithHead ? langDict[currentLang]?.withHead : langDict[currentLang]?.withoutHead;
  
  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) priceEl.textContent = currentPrice.toLocaleString() + ' ₸';
  
  const labelEl = document.getElementById(`label-${itemId}`);
  if (labelEl) labelEl.textContent = priceLabel;
  
  const card = document.getElementById(`item-${itemId}`);
  if (card) {
    const btns = card.querySelectorAll('.toggle-btn');
    btns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.value === value);
    });
  }
  
  const variant = isWithHead ? 'withHead' : 'withoutHead';
  const cartItem = cart.find(c => c.id === parseInt(itemId) && c.variant === variant);
  if (cartItem) {
    cartItem.price = currentPrice;
    updateCart();
    saveCartToStorage();
  }
  
  updateItemCard(parseInt(itemId));
}

// ============================================================
//  ПОИСК ТОВАРА ПО ID
// ============================================================
function findItemById(id) {
  const menu = getCurrentMenu();
  for (const k in menu) {
    const f = menu[k].items.find(i => i.id === id);
    if (f) return f;
  }
  return null;
}

// ============================================================
//  ОТРИСОВКА МЕНЮ
// ============================================================
function renderCategoryPage(k) {
  const pg = document.getElementById('category-page');
  const menu = getCurrentMenu();
  const c = menu[k];
  if (!pg || !c) return;
  
  pg.style.display = 'block';
  pg.innerHTML = `<div class="category-page-header"><i class="fas ${c.icon}"></i> ${c.name[currentLang]}</div><div class="menu-grid">${c.items.map(renderItem).join('')}</div>`;
}

function renderItem(item) {
  const isLight = document.body.classList.contains('light-theme');
  const desc = item.desc ? item.desc[currentLang] : '';
  const info = item.info ? item.info[currentLang] : '';
  const preorder = item.preorder ? item.preorder[currentLang] : '';
  const cookingTime = item.cookingTime ? item.cookingTime[currentLang] : '';
  const isLiked = wishlist.includes(item.id);

  // Товар с переключателем размера
  if (item.hasSizeToggle) {
    const isLarge = sizeStates[item.id] !== undefined ? sizeStates[item.id] === 'large' : false;
    const currentPrice = isLarge ? item.priceLarge : item.price;
    const priceLabel = isLarge ? (item.sizeLabelLarge || langDict[currentLang]?.large) : (item.sizeLabelSmall || langDict[currentLang]?.small);
    const variant = isLarge ? 'large' : 'small';
    const cartItem = cart.find(c => c.id === item.id && c.variant === variant);
    const qty = cartItem ? cartItem.quantity : 0;

    return `<div class="menu-item" id="item-${item.id}">
      <img src="images/${item.image}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <div class="menu-item-content">
        <div class="menu-item-title" style="color:${isLight ? '#2a1508' : '#fff'}">${item.name[currentLang] || item.name.ru}</div>
        ${desc ? `<div class="menu-item-desc" style="color:${isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'}">${desc}</div>` : ''}
        <div class="menu-item-footer">
          <div class="price-with-toggle">
            <span class="menu-item-price" id="price-${item.id}">${currentPrice.toLocaleString()} ₸</span>
            <span class="price-label" id="label-${item.id}">${priceLabel}</span>
          </div>
          <div class="item-actions">
            <div class="item-actions-left">
              <div class="toggle-group" data-item-id="${item.id}">
                <button class="toggle-btn ${!isLarge ? 'active' : ''}" data-value="small" onclick="toggleSizeOption(${item.id}, 'small')">${item.sizeLabelSmall || langDict[currentLang]?.small || 'Малый'}</button>
                <button class="toggle-btn ${isLarge ? 'active' : ''}" data-value="large" onclick="toggleSizeOption(${item.id}, 'large')">${item.sizeLabelLarge || langDict[currentLang]?.large || 'Большой'}</button>
              </div>
            </div>
            <div class="item-actions-right">
              ${qty > 0 ?
                `<div class="quantity-control">
                  <button class="quantity-btn" onclick="changeQuantity(${item.id},-1,'${variant}')">−</button>
                  <span class="quantity-num">${qty}</span>
                  <button class="quantity-btn" onclick="changeQuantity(${item.id},1,'${variant}')">+</button>
                </div>` :
                `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
              }
              <button class="wishlist-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id})">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="rider-trail" id="trail-${item.id}"></div>
      </div>
    </div>`;
  }

  // Товар с переключателем (С головой/Без головы)
  if (item.hasToggle) {
    const isWithHead = toggleStates[item.id] !== undefined ? toggleStates[item.id] : true;
    const currentPrice = isWithHead ? item.price : item.priceWithoutHead;
    const priceLabel = isWithHead ? langDict[currentLang]?.withHead : langDict[currentLang]?.withoutHead;
    const variant = isWithHead ? 'withHead' : 'withoutHead';
    const cartItem = cart.find(c => c.id === item.id && c.variant === variant);
    const qty = cartItem ? cartItem.quantity : 0;

    return `<div class="menu-item" id="item-${item.id}">
      <img src="images/${item.image}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      <div class="menu-item-content">
        <div class="menu-item-title" style="color:${isLight ? '#2a1508' : '#fff'}">${item.name[currentLang] || item.name.ru}</div>
        ${info ? `<div class="party-info-badge">👥 ${info}</div>` : ''}
        ${preorder ? `<div class="preorder-badge">${preorder}</div>` : ''}
        ${cookingTime ? `<div class="cooking-time-badge">⏱ ${cookingTime}</div>` : ''}
        <div class="menu-item-desc" style="color:${isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'}">${desc}</div>
        <div class="menu-item-footer">
          <div class="price-with-toggle">
            <span class="menu-item-price" id="price-${item.id}">${currentPrice.toLocaleString()} ₸</span>
            <span class="price-label" id="label-${item.id}">${priceLabel}</span>
          </div>
          <div class="item-actions">
            <div class="item-actions-left">
              <div class="toggle-group" data-item-id="${item.id}">
                <button class="toggle-btn ${isWithHead ? 'active' : ''}" data-value="withHead" onclick="toggleHeadOption(${item.id}, 'withHead')">${langDict[currentLang]?.withHead || 'С головой'}</button>
                <button class="toggle-btn ${!isWithHead ? 'active' : ''}" data-value="withoutHead" onclick="toggleHeadOption(${item.id}, 'withoutHead')">${langDict[currentLang]?.withoutHead || 'Без головы'}</button>
              </div>
            </div>
            <div class="item-actions-right">
              ${qty > 0 ?
                `<div class="quantity-control">
                  <button class="quantity-btn" onclick="changeQuantity(${item.id},-1,'${variant}')">−</button>
                  <span class="quantity-num">${qty}</span>
                  <button class="quantity-btn" onclick="changeQuantity(${item.id},1,'${variant}')">+</button>
                </div>` :
                `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
              }
              <button class="wishlist-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id})">
                <i class="fas fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="rider-trail" id="trail-${item.id}"></div>
      </div>
    </div>`;
  }

  // Обычный товар
  const ci = cart.find(c => c.id === item.id);
  const qty = ci ? ci.quantity : 0;

  return `<div class="menu-item" id="item-${item.id}">
    <img src="images/${item.image}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
    <div class="menu-item-content">
      <div class="menu-item-title" style="color:${isLight ? '#2a1508' : '#fff'}">${item.name[currentLang] || item.name.ru}</div>
      ${info ? `<div class="party-info-badge">👥 ${info}</div>` : ''}
      ${preorder ? `<div class="preorder-badge">${preorder}</div>` : ''}
      ${cookingTime ? `<div class="cooking-time-badge">⏱ ${cookingTime}</div>` : ''}
      ${desc ? `<div class="menu-item-desc" style="color:${isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'}">${desc}</div>` : ''}
      <div class="menu-item-footer">
        <span class="menu-item-price">${item.price.toLocaleString()} ₸</span>
        <div class="item-actions">
          <div class="item-actions-left">
            ${qty > 0 ?
              `<div class="quantity-control">
                <button class="quantity-btn" onclick="changeQuantity(${item.id},-1,'')">−</button>
                <span class="quantity-num">${qty}</span>
                <button class="quantity-btn" onclick="changeQuantity(${item.id},1,'')">+</button>
              </div>` :
              `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
            }
          </div>
          <div class="item-actions-right">
            <button class="wishlist-btn ${isLiked ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${item.id})">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="rider-trail" id="trail-${item.id}"></div>
    </div>
  </div>`;
}

// ============================================================
//  ОБНОВЛЕНИЕ КАРТОЧКИ
// ============================================================
function updateItemCard(id) {
  const item = findItemById(id);
  if (!item) return;
  const card = document.getElementById(`item-${id}`);
  if (!card) return;
  const footer = card.querySelector('.menu-item-footer');
  if (!footer) return;
  const isLight = document.body.classList.contains('light-theme');

  let actions = footer.querySelector('.item-actions');
  if (!actions) {
    actions = document.createElement('div');
    actions.className = 'item-actions';
    footer.appendChild(actions);
  }

  // Товар с переключателем размера
  if (item.hasSizeToggle) {
    const isLarge = sizeStates[id] !== undefined ? sizeStates[id] === 'large' : false;
    const currentPrice = isLarge ? item.priceLarge : item.price;
    const priceLabel = isLarge ? (item.sizeLabelLarge || langDict[currentLang]?.large) : (item.sizeLabelSmall || langDict[currentLang]?.small);
    const variant = isLarge ? 'large' : 'small';
    const cartItem = cart.find(c => c.id === id && c.variant === variant);
    const qty = cartItem ? cartItem.quantity : 0;
    
    const priceEl = document.getElementById(`price-${id}`);
    if (priceEl) priceEl.textContent = currentPrice.toLocaleString() + ' ₸';
    const labelEl = document.getElementById(`label-${id}`);
    if (labelEl) labelEl.textContent = priceLabel;
    
    actions.innerHTML = `
      <div class="item-actions-left">
        <div class="toggle-group" data-item-id="${id}">
          <button class="toggle-btn ${!isLarge ? 'active' : ''}" data-value="small" onclick="toggleSizeOption(${id}, 'small')">${item.sizeLabelSmall || langDict[currentLang]?.small || 'Малый'}</button>
          <button class="toggle-btn ${isLarge ? 'active' : ''}" data-value="large" onclick="toggleSizeOption(${id}, 'large')">${item.sizeLabelLarge || langDict[currentLang]?.large || 'Большой'}</button>
        </div>
      </div>
      <div class="item-actions-right">
        ${qty > 0 ?
          `<div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${id},-1,'${variant}')">−</button>
            <span class="quantity-num">${qty}</span>
            <button class="quantity-btn" onclick="changeQuantity(${id},1,'${variant}')">+</button>
          </div>` :
          `<button class="add-btn" onclick="addToCart(${id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
        }
        <button class="wishlist-btn ${wishlist.includes(id) ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    `;
    return;
  }

  // Товар с переключателем (С головой/Без головы)
  if (item.hasToggle) {
    const isWithHead = toggleStates[id] !== undefined ? toggleStates[id] : true;
    const currentPrice = isWithHead ? item.price : item.priceWithoutHead;
    const priceLabel = isWithHead ? langDict[currentLang]?.withHead : langDict[currentLang]?.withoutHead;
    const variantName = isWithHead ? 'withHead' : 'withoutHead';
    const cartItem = cart.find(c => c.id === id && c.variant === variantName);
    const qty = cartItem ? cartItem.quantity : 0;
    
    const priceEl = document.getElementById(`price-${id}`);
    if (priceEl) priceEl.textContent = currentPrice.toLocaleString() + ' ₸';
    const labelEl = document.getElementById(`label-${id}`);
    if (labelEl) labelEl.textContent = priceLabel;
    
    actions.innerHTML = `
      <div class="item-actions-left">
        <div class="toggle-group" data-item-id="${id}">
          <button class="toggle-btn ${isWithHead ? 'active' : ''}" data-value="withHead" onclick="toggleHeadOption(${id}, 'withHead')">${langDict[currentLang]?.withHead || 'С головой'}</button>
          <button class="toggle-btn ${!isWithHead ? 'active' : ''}" data-value="withoutHead" onclick="toggleHeadOption(${id}, 'withoutHead')">${langDict[currentLang]?.withoutHead || 'Без головы'}</button>
        </div>
      </div>
      <div class="item-actions-right">
        ${qty > 0 ?
          `<div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${id},-1,'${variantName}')">−</button>
            <span class="quantity-num">${qty}</span>
            <button class="quantity-btn" onclick="changeQuantity(${id},1,'${variantName}')">+</button>
          </div>` :
          `<button class="add-btn" onclick="addToCart(${id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
        }
        <button class="wishlist-btn ${wishlist.includes(id) ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${id})">
          <i class="fas fa-heart"></i>
        </button>
      </div>
    `;
    return;
  }

  // Обычный товар
  const cartItem = cart.find(c => c.id === id);
  const qty = cartItem ? cartItem.quantity : 0;
  
  actions.innerHTML = `
    <div class="item-actions-left">
      ${qty > 0 ?
        `<div class="quantity-control">
          <button class="quantity-btn" onclick="changeQuantity(${id},-1,'')">−</button>
          <span class="quantity-num">${qty}</span>
          <button class="quantity-btn" onclick="changeQuantity(${id},1,'')">+</button>
        </div>` :
        `<button class="add-btn" onclick="addToCart(${id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
      }
    </div>
    <div class="item-actions-right">
      <button class="wishlist-btn ${wishlist.includes(id) ? 'liked' : ''}" onclick="event.stopPropagation(); toggleWishlist(${id})">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  `;
}

// ============================================================
//  КОРЗИНА
// ============================================================
function addToCart(id) {
  const item = findItemById(id);
  if (!item) return;
  
  let price = item.price;
  let variant = '';
  if (item.hasSizeToggle) {
    const isLarge = sizeStates[id] !== undefined ? sizeStates[id] === 'large' : false;
    price = isLarge ? item.priceLarge : item.price;
    variant = isLarge ? 'large' : 'small';
  } else if (item.hasToggle) {
    const isWithHead = toggleStates[id] !== undefined ? toggleStates[id] : true;
    price = isWithHead ? item.price : item.priceWithoutHead;
    variant = isWithHead ? 'withHead' : 'withoutHead';
  }
  
  const ex = cart.find(c => c.id === id && c.variant === variant);
  if (!ex) {
    cart.push({ ...item, quantity: 1, price: price, variant: variant });
  } else {
    ex.quantity += 1;
    ex.price = price;
  }
  
  saveCartToStorage();
  updateCart();
  updateItemCard(id);
  runHorse(id);
  showToast('✅ Добавлено в корзину: ' + (item.name[currentLang] || item.name.ru));
}

function changeQuantity(id, d, variant) {
  const ci = cart.find(c => c.id === id && c.variant === variant);
  if (!ci) return;
  ci.quantity += d;
  if (ci.quantity <= 0) {
    cart = cart.filter(c => !(c.id === id && c.variant === variant));
  } else if (d > 0) {
    runHorse(id);
  }
  saveCartToStorage();
  updateCart();
  updateItemCard(id);
}

function removeFromCart(id, variant) {
  cart = cart.filter(c => !(c.id === id && c.variant === variant));
  saveCartToStorage();
  updateCart();
  updateItemCard(id);
}

function saveCartToStorage() {
  try { localStorage.setItem('sandyq_cart', JSON.stringify(cart)); } catch(e) {}
}

function loadCartFromStorage() {
  try {
    const data = localStorage.getItem('sandyq_cart');
    if (data) {
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed)) { cart = parsed; return true; }
    }
  } catch(e) {}
  return false;
}

function updateCart() {
  const countEl = document.getElementById('cart-count');
  const cartCountEl = document.getElementById('cartCount');
  const totalEl = document.getElementById('total-sum');
  const contentEl = document.getElementById('cart-content');
  const summaryEl = document.getElementById('cart-summary');
  const footerEl = document.getElementById('cart-footer');
  
  if (!contentEl) return;
  
  const isLight = document.body.classList.contains('light-theme');
  const textColor = isLight ? '#2a1508' : '#fff';
  const mutedColor = isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)';
  
  const totalCount = cart.reduce((s, i) => s + i.quantity, 0);
  if (countEl) countEl.textContent = totalCount;
  if (cartCountEl) cartCountEl.textContent = totalCount;
  
  const sub = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const serv = Math.round(sub * 0.15);
  const tot = sub + serv;
  
  if (totalEl) {
    totalEl.textContent = `${langDict[currentLang]?.total || 'Итого'}: ${tot.toLocaleString()} ₸`;
  }
  
  if (summaryEl) {
    if (cart.length) {
      summaryEl.innerHTML = `
        <div class="cart-summary-row"><span>${langDict[currentLang]?.subtotal || 'Сумма'}:</span><span>${sub.toLocaleString()} ₸</span></div>
        <div class="cart-summary-row"><span>${langDict[currentLang]?.service || 'Сервис 15%'}:</span><span>${serv.toLocaleString()} ₸</span></div>
        <div class="cart-summary-row total"><span>${langDict[currentLang]?.total || 'Итого'}:</span><span>${tot.toLocaleString()} ₸</span></div>
      `;
    } else {
      summaryEl.innerHTML = '';
    }
  }
  
  if (footerEl) {
    footerEl.style.display = cart.length > 0 ? 'block' : 'none';
  }
  
  if (cart.length > 0) {
    contentEl.innerHTML = cart.map(item => {
      const itemName = item.name[currentLang] || item.name.ru || 'Блюдо';
      let extraInfo = '';
      if (item.hasSizeToggle) {
        extraInfo = item.variant === 'large' ? ' 📏' : '';
      } else if (item.hasToggle) {
        extraInfo = item.variant === 'withHead' ? ' 🐑' : '';
      }
      return `
        <div class="cart-item" data-id="${item.id}" data-variant="${item.variant || ''}">
          <div class="cart-item-info">
            <div class="cart-item-name" style="color:${textColor}">${itemName}${extraInfo}</div>
            <div style="color:${mutedColor};font-size:0.85rem;">
              ${item.price.toLocaleString()} ₸ × ${item.quantity} = ${(item.price * item.quantity).toLocaleString()} ₸
            </div>
          </div>
          <div class="cart-item-actions">
            <button onclick="changeQuantity(${item.id},-1,'${item.variant || ''}')" style="background:#f7971e;color:#fff;">−</button>
            <span class="qty" style="color:${textColor}">${item.quantity}</span>
            <button onclick="changeQuantity(${item.id},1,'${item.variant || ''}')" style="background:#2ecc71;color:#fff;">+</button>
            <button onclick="removeFromCart(${item.id},'${item.variant || ''}')" style="background:#e74c3c;color:#fff;">×</button>
          </div>
        </div>
      `;
    }).join('');
  } else {
    contentEl.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-basket" style="color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};font-size:3rem;display:block;margin-bottom:10px;"></i>
        <p style="color:${isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}">${langDict[currentLang]?.cart_empty || 'Корзина пуста'}</p>
      </div>
    `;
  }
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  const overlay = document.getElementById('cart-overlay');
  if (sidebar) sidebar.classList.toggle('open');
  if (overlay) overlay.classList.toggle('active');
  document.body.style.overflow = sidebar?.classList.contains('open') ? 'hidden' : '';
}

// ============================================================
//  АНИМАЦИЯ ЛОШАДКИ
// ============================================================
function runHorse(id) {
  const card = document.getElementById('item-' + id);
  if (!card) return;
  const trail = document.getElementById('trail-' + id);
  if (trail) {
    trail.style.width = '100%';
    trail.style.opacity = '1';
    trail.style.background = 'linear-gradient(90deg,transparent,#f7971e,#ff6b35,#f7971e,transparent)';
    trail.style.boxShadow = '0 0 20px #f7971e,0 0 40px #ff4444';
    setTimeout(() => { trail.style.opacity = '0'; trail.style.boxShadow = 'none'; }, 5000);
  }
  const horse = document.createElement('img');
  horse.src = GIF_URL;
  horse.style.cssText = 'position:absolute;bottom:6px;left:5%;width:80px;z-index:30;transition:left 3s ease-out;filter:drop-shadow(0 0 10px rgba(247,151,30,0.6));';
  card.appendChild(horse);
  requestAnimationFrame(() => { horse.style.left = '55%'; });
  for (let d = 0; d < 8; d++) {
    setTimeout(() => {
      const dust = document.createElement('div');
      dust.style.cssText = 'position:absolute;bottom:3px;left:' + (8 + d * 8) + '%;width:4px;height:4px;background:rgba(210,180,140,0.6);border-radius:50%;z-index:25;animation:dustParticle 0.7s ease-out forwards;';
      card.appendChild(dust);
      setTimeout(() => dust.remove(), 700);
    }, d * 120);
  }
  setTimeout(() => { horse.style.opacity = '0'; setTimeout(() => horse.remove(), 500); }, 2800);
}

// ============================================================
//  WISHLIST (ИЗБРАННОЕ)
// ============================================================
function toggleWishlist(id) {
  const index = wishlist.indexOf(id);
  if (index > -1) {
    wishlist.splice(index, 1);
  } else {
    wishlist.push(id);
  }
  localStorage.setItem('sandyq_wishlist', JSON.stringify(wishlist));
  updateWishlistButton(id);
  updateWishlistCount();
  showToast(wishlist.includes(id) ? '❤️ Добавлено в избранное' : '💔 Убрано из избранного');
}

function updateWishlistButton(id) {
  const isLiked = wishlist.includes(id);
  const btn = document.querySelector(`#item-${id} .wishlist-btn`);
  if (btn) {
    btn.classList.toggle('liked', isLiked);
  }
}

function updateWishlistCount() {
  const count = document.getElementById('wishlist-count');
  if (count) {
    count.textContent = wishlist.length;
    count.style.display = wishlist.length > 0 ? 'block' : 'none';
  }
}

function showWishlist() {
  const items = wishlist.map(id => findItemById(id)).filter(Boolean);
  const pg = document.getElementById('category-page');
  if (!pg) return;
  if (!items.length) { 
    showToast('💔 Избранное пусто', 'error'); 
    return; 
  }
  pg.style.display = 'block';
  pg.innerHTML = `<div class="category-page-header"><i class="fas fa-heart" style="color:#e74c3c;"></i> ${langDict[currentLang]?.wishlist || 'Избранное'}</div><div class="menu-grid">${items.map(renderItem).join('')}</div>`;
  const results = document.getElementById('search-results');
  if (results) results.style.display = 'none';
}

// ============================================================
//  ИСТОРИЯ ЗАКАЗОВ (С PDF)
// ============================================================
function downloadOrderPDF(index) {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders[index];
  if (!order) return;

  const cityInfo = cityData[order.city || 'almaty'];
  const restaurantName = cityInfo ? cityInfo.name : 'Sandyq';
  const restaurantAddress = cityInfo ? cityInfo.address : 'Абылайхана 55 / Алимжанова 55';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Заказ #${String(order.id).slice(-6)}</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; padding: 40px; background: #fff; color: #2a1508; }
        .header { text-align: center; border-bottom: 3px solid #f7971e; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { font-size: 2.2rem; color: #f7971e; letter-spacing: 4px; font-family: 'Playfair Display', serif; }
        .header .sub { color: #888; font-size: 0.9rem; margin-top: 5px; }
        .order-info { display: flex; justify-content: space-between; background: #f8f4ef; padding: 15px 20px; border-radius: 8px; margin-bottom: 25px; flex-wrap: wrap; gap: 10px; }
        .order-info .label { color: #888; font-size: 0.8rem; }
        .order-info .value { font-weight: 600; font-size: 1rem; }
        table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
        th { background: #f7971e; color: white; padding: 12px 15px; text-align: left; font-weight: 600; }
        td { padding: 10px 15px; border-bottom: 1px solid #eee; }
        tr:nth-child(even) { background: #faf8f6; }
        .total-row { font-weight: 700; font-size: 1.1rem; }
        .total-row td { border-top: 2px solid #f7971e; }
        .footer { margin-top: 30px; text-align: center; color: #aaa; font-size: 0.8rem; border-top: 1px solid #eee; padding-top: 20px; }
        .badge { display: inline-block; background: #f7971e; color: white; padding: 2px 12px; border-radius: 12px; font-size: 0.7rem; margin-left: 8px; }
        .city-badge-pdf { display: inline-block; background: #2ecc71; color: white; padding: 2px 12px; border-radius: 12px; font-size: 0.7rem; margin-left: 8px; }
        @media print { .no-print { display: none; } }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🍽️ Sandyq</h1>
        <div class="sub">${restaurantName} · ${restaurantAddress}</div>
      </div>
      <div class="order-info">
        <div><div class="label">Номер заказа</div><div class="value">#${String(order.id).slice(-6)} <span class="badge">${order.city === 'astana' ? 'Астана' : 'Алматы'}</span></div></div>
        <div><div class="label">Дата</div><div class="value">${new Date(order.timestamp || order.date).toLocaleString('ru')}</div></div>
        <div><div class="label">Гость</div><div class="value">${order.guest?.name || '—'}</div></div>
        <div><div class="label">Телефон</div><div class="value">${order.guest?.phone || '—'}</div></div>
      </div>
      <table>
        <thead><tr><th>Блюдо</th><th style="text-align:center">Кол-во</th><th style="text-align:right">Цена</th><th style="text-align:right">Сумма</th></tr></thead>
        <tbody>
          ${(order.items || []).map(item => `
            <tr>
              <td>${item.name?.ru || item.name || 'Блюдо'} ${item.variant === 'large' ? '📏' : ''} ${item.variant === 'withHead' ? '🐑' : ''}</td>
              <td style="text-align:center">${item.quantity}</td>
              <td style="text-align:right">${(item.price || 0).toLocaleString()} ₸</td>
              <td style="text-align:right">${((item.price || 0) * (item.quantity || 1)).toLocaleString()} ₸</td>
            </tr>
          `).join('')}
          <tr class="total-row"><td colspan="3" style="text-align:right">Подытог:</td><td style="text-align:right">${(order.subtotal || 0).toLocaleString()} ₸</td></tr>
          <tr><td colspan="3" style="text-align:right;color:#888;">Сервис 15%:</td><td style="text-align:right;color:#888;">${(order.service || 0).toLocaleString()} ₸</td></tr>
          <tr class="total-row"><td colspan="3" style="text-align:right;font-size:1.2rem;color:#f7971e;">ИТОГО:</td><td style="text-align:right;font-size:1.2rem;color:#f7971e;">${(order.total || 0).toLocaleString()} ₸</td></tr>
        </tbody>
      </table>
      ${order.special ? `<div style="background:#f8f4ef;padding:12px 16px;border-radius:8px;margin-bottom:20px;"><strong>💬 Особые пожелания:</strong> ${order.special}</div>` : ''}
      ${order.times && Object.keys(order.times).length > 0 ? `
        <div style="background:#f8f4ef;padding:12px 16px;border-radius:8px;margin-bottom:20px;">
          <strong>⏰ Время подачи:</strong><br>
          ${Object.entries(order.times).map(([key, value]) => `<span style="display:inline-block;margin-right:15px;">${key}: ${value}</span>`).join('')}
        </div>
      ` : ''}
      <div class="footer"><p>Спасибо за заказ! Ждём вас снова в Sandyq 🍽️</p><p style="margin-top:5px;">${restaurantName} · ${restaurantAddress} · 📞 ${cityInfo?.phone || '+7 (775) 007-32-82'}</p><p style="margin-top:5px;font-size:0.7rem;">Сгенерировано автоматически</p></div>
      <div style="text-align:center;margin-top:20px;" class="no-print">
        <button onclick="window.print()" style="padding:10px 30px;background:#f7971e;color:white;border:none;border-radius:8px;font-size:1rem;cursor:pointer;">🖨️ Печать / Сохранить PDF</button>
      </div>
    </body>
    </html>
  `;

  const win = window.open('', '_blank', 'width=900,height=700');
  win.document.write(html);
  win.document.close();
  setTimeout(() => { win.focus(); win.print(); }, 1000);
}

function showOrderHistory() {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const container = document.getElementById('history-content');
  if (!container) return;
  
  if (!orders.length) {
    container.innerHTML = '<div class="empty-orders"><p>📭 История заказов пуста</p></div>';
    document.getElementById('history-modal').classList.add('open');
    return;
  }
  
  container.innerHTML = [...orders].reverse().slice(0, 30).map((o, idx) => {
    const realIdx = orders.length - 1 - idx;
    const cityName = o.city === 'astana' ? 'Астана' : 'Алматы';
    return `
      <div class="order-history-item">
        <div class="order-history-header">
          <span class="order-history-id">#${String(o.id).slice(-6)} <span class="city-badge-small">${cityName}</span></span>
          <span class="order-history-date">${new Date(o.timestamp).toLocaleString('ru')}</span>
        </div>
        <div class="order-history-items">${(o.items || []).map(i => `${i.name?.ru || 'Блюдо'} ×${i.quantity}`).join(', ')}</div>
        <div class="order-history-total">💰 ${(o.total || 0).toLocaleString()} ₸</div>
        <div class="order-history-actions">
          <button class="repeat-btn" onclick="repeatOrder(${realIdx})">🔄 ${langDict[currentLang]?.repeat || 'Повторить'}</button>
          <button class="download-pdf-btn" onclick="downloadOrderPDF(${realIdx})">📄 ${langDict[currentLang]?.download_pdf || 'Скачать PDF'}</button>
          <button class="delete-history-btn" onclick="deleteOrder(${realIdx})">🗑️ ${langDict[currentLang]?.delete_history || 'Удалить'}</button>
        </div>
      </div>
    `;
  }).join('');
  document.getElementById('history-modal').classList.add('open');
}

function repeatOrder(index) {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const order = orders[index];
  if (!order) return;
  (order.items || []).forEach(item => {
    const menuItem = findItemById(item.id);
    if (menuItem) {
      const ex = cart.find(c => c.id === item.id && c.variant === (item.variant || ''));
      if (!ex) cart.push({ ...menuItem, quantity: item.quantity, price: item.price, variant: item.variant || '' });
      else ex.quantity += item.quantity;
    }
  });
  updateCart();
  saveCartToStorage();
  document.getElementById('history-modal').classList.remove('open');
  showToast('✅ Заказ добавлен в корзину!', 'success');
}

function deleteOrder(index) {
  if (!confirm('Удалить этот заказ из истории?')) return;
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
  showOrderHistory();
  showToast('🗑️ Заказ удалён', 'success');
}

// ============================================================
//  ТОП-3
// ============================================================
function getTopDishes(limit = 3) {
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const count = {};
  orders.forEach(o => (o.items || []).forEach(i => {
    const key = i.id;
    count[key] = (count[key] || 0) + (i.quantity || 1);
  }));
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, limit).map(([id]) => findItemById(parseInt(id))).filter(Boolean);
}

function renderTopDishes() {
  const container = document.getElementById('top-dishes-grid');
  if (!container) return;
  const topDishes = getTopDishes(3);
  if (!topDishes.length) {
    container.innerHTML = '<p style="color:rgba(255,255,255,0.3);text-align:center;padding:10px;">Пока нет данных</p>';
    return;
  }
  container.innerHTML = topDishes.map((item, idx) => `
    <div class="top-dish-card" onclick="switchCategory('${item.category}'); setTimeout(() => document.getElementById('item-${item.id}')?.scrollIntoView({ behavior: 'smooth' }), 300);">
      <div class="top-dish-rank">#${idx + 1}</div>
      <div class="top-dish-name">${item.name[currentLang] || item.name.ru}</div>
      <div class="top-dish-price">${item.price.toLocaleString()} ₸</div>
    </div>
  `).join('');
}

// ============================================================
//  СОБЫТИЯ
// ============================================================
function getUpcomingEvents() {
  const today = new Date();
  const events = [];
  const isAstana = currentCity === 'astana';
  
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const day = d.getDay();
    
    let time = '';
    let title = '';
    
    if (isAstana) {
      if (day >= 1 && day <= 4) {
        time = '20:00–21:00';
        title = '🎵 Живая этно-музыка';
      } else if (day === 5 || day === 6 || day === 0) {
        time = '20:00–22:00';
        title = '🎵 Живая этно-музыка';
      }
    } else {
      if (day === 5 || day === 6 || day === 0) {
        time = '20:00–22:00';
        title = '🎵 Живая этно-музыка';
      }
    }
    
    if (title) {
      events.push({
        date: d,
        dayName: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][day],
        title: title,
        time: time
      });
    }
  }
  return events.slice(0, 8);
}

function renderEvents() {
  const container = document.getElementById('events-container');
  if (!container) return;
  const events = getUpcomingEvents();
  if (!events.length) { container.innerHTML = ''; return; }
  const musicLabel = langDict[currentLang]?.music_live || 'Живая этно-музыка: Пт, Сб, Вс — 20:00–22:00';
  container.innerHTML = `
    <div style="margin-top:30px;border-top:1px solid rgba(255,255,255,0.06);padding-top:20px;">
      <h2 style="color:#f7971e;margin-bottom:14px;font-size:1.2rem;text-align:center;">${langDict[currentLang]?.events || '📅 События'} — ${musicLabel}</h2>
      <div class="events-block">${events.map(e => `
        <div class="event-card">
          <div class="event-date">${e.date.toLocaleDateString('ru', { day: 'numeric', month: 'long' })} (${e.dayName})</div>
          <div class="event-title">${e.title}</div>
          <div class="event-time">⏰ ${e.time}</div>
        </div>
      `).join('')}</div>
    </div>
  `;
}

// ============================================================
//  КАРТА
// ============================================================
function showMap() {
  document.getElementById('map-modal').classList.add('open');
}

// ============================================================
//  ОТЗЫВЫ
// ============================================================
function selectRating(rating) {
  selectedRating = rating;
  document.querySelectorAll('#rating-selector span').forEach(el => {
    const r = parseInt(el.dataset.rating);
    el.classList.toggle('active', r <= rating);
  });

  if (rating >= 4) {
    const url = 'https://2gis.kz/almaty/branches/70000001057699051/firm/70000001057699052/76.939196%2C43.262844/tab/reviews/addreview';
    window.open(url, '_blank');
    showToast('✅ Спасибо! Перейдите в 2ГИС для оценки', 'success');
    setTimeout(() => {
      selectedRating = 0;
      document.querySelectorAll('#rating-selector span').forEach(el => el.classList.remove('active'));
    }, 2000);
    const nameInput = document.getElementById('review-name');
    const textInput = document.getElementById('review-text');
    const submitBtn = document.querySelector('#reviews-modal .btn-primary');
    if (nameInput) { nameInput.style.display = 'block'; nameInput.placeholder = 'Ваше имя (по желанию)'; }
    if (textInput) { textInput.style.display = 'block'; textInput.placeholder = 'Дополнительный отзыв (по желанию)'; }
    if (submitBtn) submitBtn.style.display = 'inline-block';
    return;
  }

  const nameInput = document.getElementById('review-name');
  const textInput = document.getElementById('review-text');
  const submitBtn = document.querySelector('#reviews-modal .btn-primary');
  if (nameInput) { nameInput.style.display = 'block'; nameInput.placeholder = 'Ваше имя'; }
  if (textInput) { textInput.style.display = 'block'; textInput.placeholder = 'Расскажите, что пошло не так?'; }
  if (submitBtn) submitBtn.style.display = 'inline-block';
}

function submitReview() {
  const nameInput = document.getElementById('review-name');
  const textInput = document.getElementById('review-text');
  if (!nameInput || !textInput) return;
  
  const name = nameInput.value.trim() || 'Аноним';
  const text = textInput.value.trim();

  if (selectedRating >= 4) {
    if (!text) {
      showToast('✅ Спасибо за оценку!', 'success');
      nameInput.value = '';
      textInput.value = '';
      selectedRating = 0;
      document.querySelectorAll('#rating-selector span').forEach(el => el.classList.remove('active'));
      const modal = document.getElementById('reviews-modal');
      if (modal) modal.classList.remove('open');
      return;
    }
  }

  if (!text && selectedRating <= 3) {
    showToast('❌ Пожалуйста, напишите отзыв!', 'error');
    return;
  }

  const review = {
    name: name,
    text: text || 'Оценка без комментария',
    rating: selectedRating,
    date: new Date().toISOString()
  };

  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
  saveReviewToCloud(review);
  sendReviewToTelegram(review);

  nameInput.value = '';
  textInput.value = '';
  selectedRating = 0;
  document.querySelectorAll('#rating-selector span').forEach(el => el.classList.remove('active'));
  const modal = document.getElementById('reviews-modal');
  if (modal) modal.classList.remove('open');

  showToast('✅ Спасибо за ваш отзыв!', 'success');
  renderReviews();
}

function renderReviews() {
  const container = document.getElementById('reviews-content');
  if (!container) return;
  const reviews = JSON.parse(localStorage.getItem('reviews') || '[]');
  if (!reviews.length) {
    container.innerHTML = '<p style="color:rgba(255,255,255,0.3);text-align:center;">Пока нет отзывов</p>';
    return;
  }
  container.innerHTML = [...reviews].reverse().slice(0, 10).map(r => `
    <div class="review-item">
      <div class="review-stars">${'⭐'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <div class="review-text">${r.text}</div>
      <div class="review-author">${r.name} · ${new Date(r.date).toLocaleDateString('ru')}</div>
    </div>
  `).join('');
}

function showReviews() {
  renderReviews();
  const nameInput = document.getElementById('review-name');
  const textInput = document.getElementById('review-text');
  const submitBtn = document.querySelector('#reviews-modal .btn-primary');
  if (nameInput) nameInput.style.display = 'none';
  if (textInput) textInput.style.display = 'none';
  if (submitBtn) submitBtn.style.display = 'none';
  const modal = document.getElementById('reviews-modal');
  if (modal) modal.classList.add('open');
}

// ============================================================
//  JIVO ЧАТ
// ============================================================
function openJivoChat() {
  const modal = document.getElementById('chatModal');
  const iframe = document.getElementById('chatIframe');
  
  if (modal) {
    modal.classList.add('active');
    if (iframe) {
      iframe.src = 'https://code.jivo.ru/chatpage/jcuKMCR6Cn';
    }
  } else {
    window.open('https://code.jivo.ru/chatpage/jcuKMCR6Cn', '_blank');
  }
}

function closeChatModal() {
  const modal = document.getElementById('chatModal');
  if (modal) {
    modal.classList.remove('active');
    // Очищаем iframe при закрытии
    const iframe = document.getElementById('chatIframe');
    if (iframe) {
      setTimeout(() => { iframe.src = 'about:blank'; }, 500);
    }
  }
}

// Закрытие по клику на оверлей
document.addEventListener('click', function(e) {
  const modal = document.getElementById('chatModal');
  if (modal && e.target === modal) {
    closeChatModal();
  }
});

// ============================================================
//  ПАРАЛЛАКС
// ============================================================
document.addEventListener('scroll', function() {
  const bg = document.getElementById('parallax-bg');
  if (bg) {
    const scrolled = window.pageYOffset;
    bg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// ============================================================
//  ВАЛИДАЦИЯ ТЕЛЕФОНА
// ============================================================
function validatePhone(phone) {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return /^\+7\d{10}$/.test(cleaned) || /^8\d{10}$/.test(cleaned) || /^\d{10}$/.test(cleaned);
}

// ============================================================
//  ОФОРМЛЕНИЕ ЗАКАЗА
// ============================================================
function openCheckout() {
  if (!cart.length) { showToast('❌ Корзина пуста!', 'error'); return; }
  const cats = [...new Set(cart.map(i => i.category))];
  const sched = document.getElementById('time-schedule');
  if (sched) {
    sched.innerHTML = cats.map(cat => {
      const tk = (categoryTimeMap[cat] || { timeKey: cat }).timeKey;
      let hours = '';
      for (let h = 12; h <= 22; h++) {
        const hh = String(h).padStart(2, '0');
        hours += `<option value="${hh}">${hh}</option>`;
      }
      const minutes = '<option value="00">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option>';
      return `<div class="time-category-group">
        <label>${(categoryTimeMap[cat] || { icon: '📦' }).icon} ${langDict[currentLang]?.[cat] || cat}</label>
        <div style="display:flex;gap:8px">
          <select id="time-h-${tk}" style="flex:1">${hours}</select>
          <span style="color:rgba(255,255,255,0.5);align-self:center">:</span>
          <select id="time-m-${tk}" style="flex:1">${minutes}</select>
        </div>
      </div>`;
    }).join('');
  }
  const dateInput = document.getElementById('order-date');
  if (dateInput) dateInput.value = new Date().toISOString().slice(0, 10);
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.add('open');
}

function closeCheckout() {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('open');
}

function showToast(message, type = 'success') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = message;
  t.className = `toast ${type} show`;
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
//  ОТПРАВКА ЗАКАЗА
// ============================================================
async function submitOrder() {
  const nameInput = document.getElementById('guest-name');
  const phoneInput = document.getElementById('guest-phone');
  const dateInput = document.getElementById('order-date');
  const specialInput = document.getElementById('special-requests');
  
  if (!nameInput || !phoneInput || !dateInput) {
    showToast('❌ Заполните все поля!', 'error');
    return;
  }
  
  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const date = dateInput.value;
  
  if (!name || !phone || !date) { showToast('❌ Заполните все поля!', 'error'); return; }
  if (!validatePhone(phone)) { showToast('❌ Введите корректный номер телефона!', 'error'); return; }

  const times = {};
  [...new Set(cart.map(i => i.category))].forEach(c => {
    const tk = (categoryTimeMap[c] || { timeKey: c }).timeKey;
    const h = document.getElementById('time-h-' + tk);
    const m = document.getElementById('time-m-' + tk);
    if (h && m) times[tk] = h.value + ':' + m.value;
  });

  const sub = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const serv = Math.round(sub * 0.15);
  const tot = sub + serv;
  
  const cityInfo = cityData[currentCity];
  
  const order = {
    id: Date.now(),
    restaurant: cityInfo.restaurant,
    city: currentCity,
    guest: { name, phone },
    date,
    items: cart.map(i => ({
      id: i.id, name: i.name, price: i.price, quantity: i.quantity,
      category: i.category, hasToggle: i.hasToggle || false, hasSizeToggle: i.hasSizeToggle || false, variant: i.variant || ''
    })),
    times,
    special: specialInput ? specialInput.value || '' : '',
    subtotal: sub, service: serv, total: tot,
    timestamp: new Date().toISOString()
  };

  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  const cloudOk = await saveOrderToCloud(order);
  const tgOk = await sendOrderToTelegram(order);

  cart = [];
  sizeStates = {};
  updateCart();
  saveCartToStorage();
  closeCheckout();
  if (nameInput) nameInput.value = '';
  if (phoneInput) phoneInput.value = '';
  if (specialInput) specialInput.value = '';
  document.querySelectorAll('#time-schedule select').forEach(el => el.value = '');

  if (tgOk && cloudOk) showToast('✅ Заказ отправлен в Telegram и сохранён в облаке!', 'success');
  else if (tgOk) showToast('✅ Заказ отправлен в Telegram (облако недоступно)', 'success');
  else if (cloudOk) showToast('✅ Заказ сохранён в облаке (Telegram недоступен)', 'success');
  else showToast('✅ Заказ сохранён локально', 'success');

  renderTopDishes();
}

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔄 Sandyq инициализация...');
  loadCartFromStorage();
  buildNav();
  
  if (document.getElementById('category-page')) {
    renderCategoryPage('salads');
  }
  
  updateCart();
  updateWishlistCount();
  renderTopDishes();
  renderEvents();
  setTimeout(function() { moveDrop('salads'); }, 100);
  console.log('✅ Sandyq готов!');
});

if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(function() {
    loadCartFromStorage();
    buildNav();
    if (document.getElementById('category-page')) {
      renderCategoryPage('salads');
    }
    updateCart();
    updateWishlistCount();
    renderTopDishes();
    renderEvents();
    moveDrop('salads');
  }, 50);
}

// Добавляем стиль для анимации пыли
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes dustParticle {
    0% { transform: translateY(0) scale(0.3); opacity: 0.9; }
    100% { transform: translateY(-25px) scale(3); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);
