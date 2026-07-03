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
//  TELEGRAM ОТПРАВКА
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

// ============================================================
//  ОБЛАЧНОЕ ХРАНЕНИЕ (JSONbin)
// ============================================================
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

// ============================================================
//  ДАННЫЕ МЕНЮ SANDYQ АЛМАТЫ
// ============================================================
const menuData = {
  salads: {
    name: { ru: 'Салаты', kk: 'Салаттар', en: 'Salads' }, icon: 'fa-leaf',
    items: [
      { id: 1, name: { ru: 'Салат из свежих овощей', kk: 'Балғын көкөніс салаты', en: 'Fresh Vegetable Salad' }, price: 3390, image: 'images/salad-fresh.jpg', category: 'salads' },
      { id: 2, name: { ru: 'Салат «Костұра»', kk: 'Ысталған жылқы етімен «Костұра» салаты', en: 'Salad "Qostura"' }, price: 5590, image: 'images/salad-kostyra.jpg', category: 'salads' },
      { id: 3, name: { ru: 'Салат «Сандық» в имбирном соусе', kk: 'Зімбір тұздығымен «Сандық» салаты', en: 'Salad "Sandyq"' }, price: 5590, image: 'images/salad-sandyq.jpg', category: 'salads' },
      { id: 4, name: { ru: 'Баклажаны в соусе из курта', kk: 'Кұрт тұздығындағы баклажан', en: 'Eggplant in qurt sauce' }, price: 4490, image: 'images/eggplant-qurt.jpg', category: 'salads' },
      { id: 5, name: { ru: 'Ассорти овощей', kk: 'Сарымсақ майымен көкөністер', en: 'Vegetables garlic butter' }, price: 5590, image: 'images/seasonal-vegetables.jpg', category: 'salads' }
    ]
  },
  deli: {
    name: { ru: 'Деликатесы', kk: 'Тіскебасарлар', en: 'Delicacies' }, icon: 'fa-star',
    items: [
      { id: 6, name: { ru: '«Құйрық май» с кумысом', kk: '«Құйрық май»', en: '«Kuiryk May»' }, price: 2290, image: 'images/kuiryk-may.jpg', category: 'deli' },
      { id: 7, name: { ru: '«Шеке»', kk: '«Шеке»', en: '«Sheke»' }, price: 6690, image: 'images/sheke.jpg', category: 'deli' },
      { id: 8, name: { ru: '«Жілік май»', kk: '«Жілік май»', en: '«Zhylyk May»' }, price: 7290, image: 'images/zhilyk-may.jpg', category: 'deli' },
      { id: 9, name: { ru: '«Ұйқы ашар»', kk: '«Ұйқы ашар»', en: '«Uyky ashar»' }, price: 6690, image: 'images/uyky-ashar.jpg', category: 'deli' },
      { id: 10, name: { ru: '«Құйрық бауыр»', kk: '«Құйрық бауыр»', en: '«Quiryq bauyr»' }, price: 7290, image: 'images/quiryq-bauyr.jpg', category: 'deli' },
      { id: 11, name: { ru: '«Үлпершек»', kk: '«Үлпершек»', en: '«Ulpershek»' }, price: 7290, image: 'images/ulpershek.jpg', category: 'deli' },
      { id: 12, name: { ru: 'Осетровая икра', kk: 'Бекіре уылдырығы', en: 'Sturgeon caviar' }, price: 7790, image: 'images/sturgeon-caviar.jpg', category: 'deli' }
    ]
  },
  soups: {
    name: { ru: 'Супы', kk: 'Сорпалар', en: 'Soups' }, icon: 'fa-utensil-spoon',
    items: [
      { id: 13, name: { ru: 'Суп «Жібек жолы»', kk: '«Жібек жолы»', en: '«Zhibek Zholy»' }, price: 4490, image: 'images/zhibek-zholy.jpg', category: 'soups' },
      { id: 14, name: { ru: 'Коже «Nomad»', kk: '«Nomad» көже', en: '"Nomad Kozhe"' }, price: 5590, image: 'images/nomad-kozhe.jpg', category: 'soups' },
      { id: 15, name: { ru: 'Суп из индейки', kk: 'Күркетауық сорпасы', en: 'Turkey soup' }, price: 4490, image: 'images/turkey-soup.jpg', category: 'soups' },
      { id: 16, name: { ru: 'Суп из перепелки', kk: 'Бөдене сорпасы', en: 'Quail soup' }, price: 5090, image: 'images/quail-soup.jpg', category: 'soups' },
      { id: 17, name: { ru: '«Жарма көже»', kk: '«Жарма көже»', en: '«Zharma kozhe»' }, price: 3390, image: 'images/zharma-kozhe.jpg', category: 'soups' },
      { id: 18, name: { ru: '«Көл кеспе»', kk: '«Көл кеспе»', en: '«Kol kespe»' }, price: 4490, image: 'images/kol-kespe.jpg', category: 'soups' }
    ]
  },
  main: {
    name: { ru: 'Основные блюда', kk: 'Негізгі тағамдар', en: 'Main Dishes' }, icon: 'fa-fire',
    items: [
      { id: 19, name: { ru: '«Қазақ ет» (Бешбармақ)', kk: '«Қазақ ет»', en: '«Qazaq et»' }, price: 7990, image: 'images/qazaq-et.jpg', category: 'main' },
      { id: 20, name: { ru: '«Борша ет» на камнях', kk: '«Борша ет»', en: '"Borsha et"' }, price: 8890, image: 'images/borsha-et.jpg', category: 'main' },
      { id: 21, name: { ru: '«Борша ет» Шоу', kk: '«Борша ет» Шоу', en: '"Borsha et" Show' }, price: 27990, image: 'images/borsha-et-show.jpg', category: 'show' },
      { id: 22, name: { ru: '«Бал қуырдақ»', kk: '«Бал қуырдақ»', en: '«Bal kuyrdak»' }, price: 7790, image: 'images/bal-kuyrdak.jpg', category: 'main' },
      { id: 23, name: { ru: '«Ши қуырдақ»', kk: '«Ши қуырдақ»', en: '«Shi kuyrdak»' }, price: 7790, image: 'images/shi-kuyrdak.jpg', category: 'main' },
      { id: 24, name: { ru: '«Бұқпа» из говядины', kk: '«Бұқпа»', en: '«Bugpa»' }, price: 8890, image: 'images/bugpa.jpg', category: 'main' },
      { id: 25, name: { ru: '«Қымыз қабырға»', kk: '«Қымыз қабырға»', en: '"Qymyz Qabyrga"' }, price: 8890, image: 'images/qymyz-qabyrga.jpg', category: 'main' },
      { id: 26, name: { ru: 'Томленая шея баранины Шоу', kk: 'Бұқтырылған қой мойны', en: 'Braised lamb neck' }, price: 28990, image: 'images/lamb-neck.jpg', category: 'show' },
      { id: 27, name: { ru: '«Қақталған қазы»', kk: '«Қақталған қазы»', en: '"Kaktalgan kazy"' }, price: 8890, image: 'images/kaktalgan-kazy.jpg', category: 'main' },
      { id: 28, name: { ru: 'Горная форель', kk: 'Тау бақтақ балығы', en: 'Mountain trout' }, price: 7290, image: 'images/trout.jpg', category: 'main' },
      { id: 29, name: { ru: '«Нан салма»', kk: '«Нан салма»', en: '"Nan salma"' }, price: 6690, image: 'images/nan-salma.jpg', category: 'main' }
    ]
  },
  show: {
    name: { ru: 'Блюда Шоу', kk: 'Шоу тағамдар', en: 'Show Dishes' }, icon: 'fa-theater-masks',
    items: [
      { id: 21, name: { ru: '«Борша ет» Шоу', kk: '«Борша ет» Шоу', en: '"Borsha et" Show' }, price: 27990, image: 'images/borsha-et-show.jpg', category: 'show' },
      { id: 26, name: { ru: 'Томленая шея баранины Шоу', kk: 'Бұқтырылған қой мойны', en: 'Braised lamb neck' }, price: 28990, image: 'images/lamb-neck.jpg', category: 'show' }
    ]
  },
  bakery: {
    name: { ru: 'Выпечка', kk: 'Нан-тоқаш', en: 'Bakery' }, icon: 'fa-bread-slice',
    items: [
      { id: 30, name: { ru: 'Бауырсаки с вареньем', kk: 'Бауырсақтар', en: 'Baursak' }, price: 2290, image: 'images/baursak-jam.jpg', category: 'bakery' },
      { id: 31, name: { ru: 'Баурсаки с сыром', kk: 'Ірімшік бауырсақ', en: 'Baursak cheese' }, price: 2290, image: 'images/baursak-cheese.jpg', category: 'bakery' },
      { id: 32, name: { ru: '«Мыжыма»', kk: '«Мыжыма»', en: '«Myzhyma»' }, price: 2290, image: 'images/myzhyma.jpg', category: 'bakery' },
      { id: 33, name: { ru: '«Бәрәміш»', kk: '«Бәрәміш»', en: '"Baramysh"' }, price: 2290, image: 'images/baramysh.jpg', category: 'bakery' },
      { id: 34, name: { ru: '«Таба нан»', kk: '«Таба нан»', en: '"Taba nan"' }, price: 2890, image: 'images/taba-nan.jpg', category: 'bakery' },
      { id: 35, name: { ru: '«Қаттама»', kk: '«Қаттама»', en: '«Kattama»' }, price: 2890, image: 'images/kattama.jpg', category: 'bakery' },
      { id: 36, name: { ru: '«Нан астау»', kk: '«Нан астау»', en: '«Nan astau»' }, price: 9990, image: 'images/nan-astau.jpg', category: 'bakery' }
    ]
  },
  desserts: {
    name: { ru: 'Десерты', kk: 'Тәттілер', en: 'Desserts' }, icon: 'fa-cake',
    items: [
      { id: 37, name: { ru: '«Чизкейк» из тары', kk: '«Чизкейк»', en: '«Cheesecake»' }, price: 4490, image: 'images/cheesecake.jpg', category: 'desserts' },
      { id: 38, name: { ru: 'Финик с орехами', kk: 'Құрма', en: 'Stuffed dates' }, price: 3990, image: 'images/stuffed-dates.jpg', category: 'desserts' },
      { id: 39, name: { ru: 'Сладости «Сандық»', kk: '«Сандық» тәттілері', en: 'Sweets «Sandyq»' }, price: 5590, image: 'images/sandyq-sweets.jpg', category: 'desserts' },
      { id: 40, name: { ru: 'Десерт «Сүмесүт»', kk: '«Сүмесүт»', en: '"Sumesut"' }, price: 4490, image: 'images/sumesut.jpg', category: 'desserts' },
      { id: 41, name: { ru: 'Хрустящий пирог', kk: 'Үй бәліші', en: 'Crispy pie' }, price: 3990, image: 'images/homemade-pie.jpg', category: 'desserts' },
      { id: 42, name: { ru: '«Төңкерме»', kk: '«Төңкерме»', en: '«Tonkerme»' }, price: 3390, image: 'images/tonkerme.jpg', category: 'desserts' },
      { id: 43, name: { ru: '«Майсөк»', kk: '«Майсөк»', en: '«Maisok»' }, price: 3390, image: 'images/maisok.jpg', category: 'desserts' },
      { id: 44, name: { ru: '"Алматинский апорт"', kk: '"Алматы апорты"', en: '"Almaty aport"' }, price: 3990, image: 'images/almaty-aport.jpg', category: 'desserts' },
      { id: 45, name: { ru: 'Мороженое', kk: 'Балмұздақ', en: 'Ice Cream' }, price: 2290, image: 'images/ice-cream.jpg', category: 'desserts' }
    ]
  },
  party: {
    name: { ru: 'На компанию', kk: 'Ұжымдық', en: 'Group' }, icon: 'fa-users',
    items: [
      { id: 46, name: { ru: '«Сый табақ» (5-6)', kk: '«Сый табақ»', en: '"Syy tabak"' }, price: 72990, image: 'images/syy-tabak.jpg', category: 'party' },
      { id: 47, name: { ru: '«Хан сырбаз» (5-6)', kk: '«Хан сырбаз»', en: '"Khan syrbaz"' }, price: 105990, image: 'images/khan-syrbaz.jpg', category: 'party' },
      { id: 48, name: { ru: '«Қарын көмбе» (5-6)', kk: '«Қарын көмбе»', en: '"Karyn kombe"' }, price: 99990, image: 'images/karyn-kombe.jpg', category: 'party' },
      { id: 49, name: { ru: '«Бел көтерер» (5-6)', kk: '«Бел көтерер»', en: '"Bel koterer"' }, price: 99990, image: 'images/bel-koterer.jpg', category: 'party' },
      { id: 50, name: { ru: '«Бекіре» с овощами', kk: '«Бекіре»', en: '"Bekire"' }, price: 105990, image: 'images/bekire.jpg', category: 'party' }
    ]
  },
  drinks: {
    name: { ru: 'Напитки', kk: 'Сусындар', en: 'Drinks' }, icon: 'fa-wine-glass-alt',
    items: [
      { id: 51, name: { ru: 'Шубат', kk: 'Шұбат', en: 'Shubat' }, price: 1790, image: 'images/shubat.jpg', category: 'drinks' },
      { id: 52, name: { ru: 'Шалап', kk: 'Шалап', en: 'Shalap' }, price: 1990, image: 'images/shalap.jpg', category: 'drinks' },
      { id: 53, name: { ru: 'Кумыс', kk: 'Қымыз', en: 'Kumis' }, price: 1500, image: 'images/kymyz.jpg', category: 'drinks' }
    ]
  },
  garnish: {
    name: { ru: 'Гарниры', kk: 'Гарнирлер', en: 'Sides' }, icon: 'fa-carrot',
    items: [
      { id: 54, name: { ru: 'Кус-кус', kk: 'Құс-құс', en: 'Couscous' }, price: 1790, image: 'images/couscous.jpg', category: 'garnish' },
      { id: 55, name: { ru: 'Булгур', kk: 'Бұлғыр', en: 'Bulgur' }, price: 1790, image: 'images/bulgur.jpg', category: 'garnish' },
      { id: 56, name: { ru: 'Молодой картофель', kk: 'Жас картоп', en: 'New potatoes' }, price: 1790, image: 'images/potatoes.jpg', category: 'garnish' }
    ]
  },
  tea: {
    name: { ru: 'Чаи', kk: 'Шайлар', en: 'Tea' }, icon: 'fa-mug-hot',
    items: [
      { id: 57, name: { ru: 'Turkistan', kk: 'Turkistan', en: 'Turkistan' }, price: 3390, image: 'images/tea-turkistan.jpg', category: 'tea' },
      { id: 58, name: { ru: 'Sandyq шай', kk: 'Sandyq шай', en: 'Sandyq tea' }, price: 3390, image: 'images/tea-sandyq.jpg', category: 'tea' }
    ]
  },
  sauces: {
    name: { ru: 'Соусы', kk: 'Тұздықтар', en: 'Sauces' }, icon: 'fa-droplet',
    items: [
      { id: 59, name: { ru: 'Степные травы', kk: 'Дала шөптері', en: 'Steppe herbs' }, price: 690, image: 'images/sauce-herbs.jpg', category: 'sauces' },
      { id: 60, name: { ru: 'Гранатовый', kk: 'Анар', en: 'Pomegranate' }, price: 690, image: 'images/sauce-pomegranate.jpg', category: 'sauces' }
    ]
  }
};

const categoryTimeMap = {
  salads: { icon: '🥗', timeKey: 'salads' },
  deli: { icon: '⭐', timeKey: 'deli' },
  soups: { icon: '🍲', timeKey: 'soups' },
  main: { icon: '🔥', timeKey: 'hot' },
  show: { icon: '🎭', timeKey: 'show' },
  bakery: { icon: '🍞', timeKey: 'bakery' },
  desserts: { icon: '🍰', timeKey: 'desserts' },
  party: { icon: '👥', timeKey: 'party' },
  drinks: { icon: '🥤', timeKey: 'drinks' },
  garnish: { icon: '🥕', timeKey: 'garnish' },
  tea: { icon: '🍵', timeKey: 'tea' },
  sauces: { icon: '💧', timeKey: 'sauces' }
};

const langDict = {
  ru: { salads:'Салаты', deli:'Деликатесы', soups:'Супы', main:'Основные', show:'Блюда Шоу', bakery:'Выпечка', desserts:'Десерты', party:'Компания', drinks:'Напитки', garnish:'Гарниры', tea:'Чаи', sauces:'Соусы', cart_title:'Заказ', cart_empty:'Корзина пуста', checkout_btn:'Оформить', guest_name:'Имя', guest_phone:'Телефон', order_date:'Дата', serving_time:'Время', special_requests:'Пожелания', cancel:'Отмена', confirm:'Подтвердить', subtotal:'Сумма', service:'Сервис 15%', total:'Итого', add:'Добавить', search_results:'Поиск', search_placeholder:'Поиск...', back:'Назад' },
  kk: { salads:'Салаттар', deli:'Тіскебасарлар', soups:'Сорпалар', main:'Негізгі', show:'Шоу тағамдар', bakery:'Нан-тоқаш', desserts:'Тәттілер', party:'Ұжымдық', drinks:'Сусындар', garnish:'Гарнирлер', tea:'Шайлар', sauces:'Тұздықтар', cart_title:'Тапсырыс', cart_empty:'Бос', checkout_btn:'Рәсімдеу', guest_name:'Аты', guest_phone:'Телефон', order_date:'Күні', serving_time:'Уақыт', special_requests:'Тілектер', cancel:'Болдырмау', confirm:'Растау', subtotal:'Сома', service:'Қызмет 15%', total:'Барлығы', add:'Қосу', search_results:'Іздеу', search_placeholder:'Іздеу...', back:'Артқа' },
  en: { salads:'Salads', deli:'Delicacies', soups:'Soups', main:'Main', show:'Show Dishes', bakery:'Bakery', desserts:'Desserts', party:'Group', drinks:'Drinks', garnish:'Sides', tea:'Tea', sauces:'Sauces', cart_title:'Order', cart_empty:'Empty', checkout_btn:'Checkout', guest_name:'Name', guest_phone:'Phone', order_date:'Date', serving_time:'Time', special_requests:'Notes', cancel:'Cancel', confirm:'Confirm', subtotal:'Subtotal', service:'Service 15%', total:'Total', add:'Add', search_results:'Search', search_placeholder:'Search...', back:'Back' }
};

let currentLang = 'ru';
let cart = [];
let currentCategory = 'salads';

// ============================================================
//  ТЕМА
// ============================================================
function toggleTheme() {
  document.body.classList.toggle('light-theme');
  const icon = document.getElementById('theme-icon');
  const isLight = document.body.classList.contains('light-theme');
  icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}
(function() {
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    document.getElementById('theme-icon').className = 'fas fa-sun';
  }
})();

// ============================================================
//  НАВИГАЦИЯ
// ============================================================
function buildNav() {
  const nav = document.getElementById('categories-nav');
  const mobileCards = document.getElementById('mobile-cat-cards');
  let h = '<div class="categories-drop" id="categories-drop"></div>';
  let cards = '';
  const order = ['salads','deli','soups','main','show','bakery','desserts','party','drinks','garnish','tea','sauces'];
  for (const k of order) {
    const cat = menuData[k];
    if (!cat) continue;
    h += `<button class="category-tab" data-cat="${k}" onclick="switchCategory('${k}')"><i class="fas ${cat.icon}"></i> <span data-lang-key="${k}">${cat.name[currentLang]}</span></button>`;
    cards += `<div class="mobile-cat-card" onclick="switchCategory('${k}')"><i class="fas ${cat.icon}"></i>${cat.name[currentLang]}</div>`;
  }
  nav.innerHTML = h;
  if (mobileCards) mobileCards.innerHTML = cards;
}

function showCategoryCards() {
  document.getElementById('mobile-cat-cards').style.display = 'flex';
  document.getElementById('mobile-back-btn').style.display = 'none';
  document.getElementById('category-page').innerHTML = '';
}

function switchCategory(k) {
  currentCategory = k;
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').style.display = 'none';
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`.category-tab[data-cat="${k}"]`);
  if (tab) tab.classList.add('active');
  moveDrop(k);
  renderCategoryPage(k);
  if (window.innerWidth <= 768) {
    document.getElementById('mobile-cat-cards').style.display = 'none';
    document.getElementById('mobile-back-btn').style.display = 'block';
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
  document.getElementById('search-clear').style.display = q.length > 0 ? 'block' : 'none';
  const results = document.getElementById('search-results');
  const page = document.getElementById('category-page');
  if (q.length > 0) {
    page.style.display = 'none';
    results.style.display = 'block';
    let found = [];
    for (const k in menuData) {
      found.push(...menuData[k].items.filter(i => (i.name[currentLang] || i.name.ru || '').toLowerCase().includes(q)));
    }
    document.getElementById('search-count').textContent = `(${found.length})`;
    document.getElementById('search-grid').innerHTML = found.length ? found.map(renderItem).join('') : '<p style="text-align:center;opacity:0.5;padding:40px;">Ничего не найдено</p>';
  } else {
    results.style.display = 'none';
    page.style.display = 'block';
    renderCategoryPage(currentCategory);
  }
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('search-clear').style.display = 'none';
  document.getElementById('category-page').style.display = 'block';
  renderCategoryPage(currentCategory);
}

// ============================================================
//  ОТРИСОВКА МЕНЮ
// ============================================================
function renderCategoryPage(k) {
  const pg = document.getElementById('category-page');
  const c = menuData[k];
  if (!c) return;
  pg.style.display = 'block';
  pg.innerHTML = `<div class="category-page-header"><i class="fas ${c.icon}"></i> ${c.name[currentLang]}</div><div class="menu-grid">${c.items.map(renderItem).join('')}</div>`;
}

function renderItem(item) {
  const ci = cart.find(c => c.id === item.id);
  const qty = ci ? ci.quantity : 0;
  const desc = item.desc ? item.desc[currentLang] : '';
  return `<div class="menu-item" id="item-${item.id}">
    <img src="${item.image || 'https://via.placeholder.com/300x200'}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200'">
    <div class="menu-item-content">
      <div class="menu-item-title">${item.name[currentLang] || item.name.ru}</div>
      ${desc ? `<div class="menu-item-desc">${desc}</div>` : ''}
      <div class="menu-item-footer">
        <span class="menu-item-price">${item.price.toLocaleString()} ₸</span>
        ${qty > 0 ? 
          `<div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${item.id},-1)">−</button>
            <span class="quantity-num">${qty}</span>
            <button class="quantity-btn" onclick="changeQuantity(${item.id},1)">+</button>
          </div>` : 
          `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
        }
      </div>
      <div class="rider-trail" id="trail-${item.id}"></div>
    </div>
  </div>`;
}

// ============================================================
//  КОРЗИНА
// ============================================================
function findItemById(id) {
  for (const k in menuData) {
    const f = menuData[k].items.find(i => i.id === id);
    if (f) return f;
  }
  return null;
}

function addToCart(id) {
  const item = findItemById(id);
  if (!item) return;
  const ex = cart.find(c => c.id === id);
  if (!ex) cart.push({ ...item, quantity: 1 });
  else ex.quantity += 1;
  updateCart();
  refreshView();
  runHorse(id);
  saveCartToStorage();
}

function changeQuantity(id, d) {
  const ci = cart.find(c => c.id === id);
  if (!ci) return;
  ci.quantity += d;
  if (ci.quantity <= 0) cart = cart.filter(c => c.id !== id);
  else if (d > 0) runHorse(id);
  updateCart();
  refreshView();
  saveCartToStorage();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCart();
  refreshView();
  saveCartToStorage();
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

function refreshView() {
  if (document.getElementById('search-input').value.trim()) searchMenu();
  else renderCategoryPage(currentCategory);
}

// ============================================================
//  ОБНОВЛЕНИЕ КОРЗИНЫ
// ============================================================
function updateCart() {
  document.getElementById('cart-count').textContent = cart.reduce((s, i) => s + i.quantity, 0);
  const sub = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const serv = Math.round(sub * 0.15);
  const tot = sub + serv;
  document.getElementById('total-sum').textContent = `${langDict[currentLang]?.total || 'Итого'}: ${tot.toLocaleString()} ₸`;
  
  const summary = document.getElementById('cart-summary');
  if (summary && cart.length) {
    summary.innerHTML = `
      <div class="cart-summary-row"><span>${langDict[currentLang]?.subtotal}:</span><span>${sub.toLocaleString()} ₸</span></div>
      <div class="cart-summary-row"><span>${langDict[currentLang]?.service}:</span><span>${serv.toLocaleString()} ₸</span></div>
      <div class="cart-summary-row total"><span>${langDict[currentLang]?.total}:</span><span>${tot.toLocaleString()} ₸</span></div>
    `;
  } else if (summary) { summary.innerHTML = ''; }
  
  const backBtn = window.innerWidth <= 480 ? '<button class="back-btn" onclick="toggleCart()">← Продолжить покупки</button>' : '';
  document.getElementById('cart-content').innerHTML = cart.length ? 
    backBtn + cart.map(i => `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-name">${i.name.ru || ''} ×${i.quantity}</div>
          <div>${(i.price * i.quantity).toLocaleString()} ₸</div>
        </div>
        <div class="cart-item-actions">
          <button onclick="changeQuantity(${i.id},-1)" style="background:#e74c3c;">−</button>
          <button onclick="changeQuantity(${i.id},1)" style="background:#2ecc71;">+</button>
          <button onclick="removeFromCart(${i.id})" style="background:#e74c3c;">×</button>
        </div>
      </div>
    `).join('') : 
    `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>Корзина пуста</p></div>`;
}

function toggleCart() {
  const sidebar = document.getElementById('cart-sidebar');
  sidebar.classList.toggle('open');
  document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
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
//  ЯЗЫК
// ============================================================
function setLanguage(l) {
  currentLang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  document.querySelectorAll('[data-lang-key]').forEach(el => {
    const k = el.getAttribute('data-lang-key');
    if (langDict[l]?.[k]) el.textContent = langDict[l][k];
  });
  document.getElementById('search-input').placeholder = langDict[l]?.search_placeholder || 'Поиск...';
  buildNav();
  renderCategoryPage(currentCategory);
  updateCart();
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
      for (let h = 0; h < 24; h++) {
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
  document.getElementById('order-date').value = new Date().toISOString().slice(0, 10);
  document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckout() {
  document.getElementById('checkout-modal').classList.remove('open');
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
//  ОТПРАВКА ЗАКАЗА (ОБЛАКО + TELEGRAM)
// ============================================================
async function submitOrder() {
  const name = document.getElementById('guest-name').value.trim();
  const phone = document.getElementById('guest-phone').value.trim();
  const date = document.getElementById('order-date').value;
  
  if (!name || !phone || !date) {
    showToast('❌ Заполните все поля!', 'error');
    return;
  }
  
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
  
  const order = {
    id: Date.now(),
    restaurant: 'Sandyq Алматы, Абылайхана 55',
    guest: { name, phone },
    date,
    items: cart.map(i => ({
      id: i.id,
      name: i.name,
      price: i.price,
      quantity: i.quantity,
      category: i.category
    })),
    times,
    special: document.getElementById('special-requests')?.value || '',
    subtotal: sub,
    service: serv,
    total: tot,
    timestamp: new Date().toISOString()
  };
  
  // Сохраняем локально как резерв
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  // Отправляем в облако
  const cloudOk = await saveOrderToCloud(order);
  
  // Отправляем в Telegram
  const tgOk = await sendOrderToTelegram(order);
  
  // Очищаем корзину
  cart = [];
  updateCart();
  refreshView();
  saveCartToStorage();
  closeCheckout();
  
  // Сбрасываем поля
  document.getElementById('guest-name').value = '';
  document.getElementById('guest-phone').value = '';
  document.getElementById('special-requests').value = '';
  document.querySelectorAll('#time-schedule select').forEach(el => el.value = '');
  
  if (tgOk && cloudOk) {
    showToast('✅ Заказ отправлен в Telegram и сохранён в облаке!', 'success');
  } else if (tgOk) {
    showToast('✅ Заказ отправлен в Telegram (облако недоступно)', 'success');
  } else if (cloudOk) {
    showToast('✅ Заказ сохранён в облаке (Telegram недоступен)', 'success');
  } else {
    showToast('✅ Заказ сохранён локально', 'success');
  }
}

// ============================================================
//  ИНИЦИАЛИЗАЦИЯ
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  buildNav();
  renderCategoryPage('salads');
  updateCart();
  moveDrop('salads');
  window.addEventListener('resize', () => moveDrop(currentCategory));
  window.addEventListener('beforeunload', saveCartToStorage);
});