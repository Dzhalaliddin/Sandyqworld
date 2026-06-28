// ===== ДАННЫЕ МЕНЮ SANDYQ АЛМАТЫ =====
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
      { id: 21, name: { ru: '«Борша ет» Шоу', kk: '«Борша ет» Шоу', en: '"Borsha et" Show' }, price: 27990, image: 'images/borsha-et-show.jpg', category: 'main' },
      { id: 22, name: { ru: '«Бал қуырдақ»', kk: '«Бал қуырдақ»', en: '«Bal kuyrdak»' }, price: 7790, image: 'images/bal-kuyrdak.jpg', category: 'main' },
      { id: 23, name: { ru: '«Ши қуырдақ»', kk: '«Ши қуырдақ»', en: '«Shi kuyrdak»' }, price: 7790, image: 'images/shi-kuyrdak.jpg', category: 'main' },
      { id: 24, name: { ru: '«Бұқпа» из говядины', kk: '«Бұқпа»', en: '«Bugpa»' }, price: 8890, image: 'images/bugpa.jpg', category: 'main' },
      { id: 25, name: { ru: '«Қымыз қабырға»', kk: '«Қымыз қабырға»', en: '"Qymyz Qabyrga"' }, price: 8890, image: 'images/qymyz-qabyrga.jpg', category: 'main' },
      { id: 26, name: { ru: 'Томленая шея баранины Шоу', kk: 'Бұқтырылған қой мойны', en: 'Braised lamb neck' }, price: 28990, image: 'images/lamb-neck.jpg', category: 'main' },
      { id: 27, name: { ru: '«Қақталған қазы»', kk: '«Қақталған қазы»', en: '"Kaktalgan kazy"' }, price: 8890, image: 'images/kaktalgan-kazy.jpg', category: 'main' },
      { id: 28, name: { ru: 'Горная форель', kk: 'Тау бақтақ балығы', en: 'Mountain trout' }, price: 7290, image: 'images/trout.jpg', category: 'main' },
      { id: 29, name: { ru: '«Нан салма»', kk: '«Нан салма»', en: '"Nan salma"' }, price: 6690, image: 'images/nan-salma.jpg', category: 'main' }
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
  salads: { icon: '🥗', timeKey: 'salads' }, deli: { icon: '⭐', timeKey: 'deli' },
  soups: { icon: '🍲', timeKey: 'soups' }, main: { icon: '🔥', timeKey: 'hot' },
  bakery: { icon: '🍞', timeKey: 'bakery' }, desserts: { icon: '🍰', timeKey: 'desserts' },
  party: { icon: '👥', timeKey: 'party' }, drinks: { icon: '🥤', timeKey: 'drinks' },
  garnish: { icon: '🥕', timeKey: 'garnish' }, tea: { icon: '🍵', timeKey: 'tea' },
  sauces: { icon: '💧', timeKey: 'sauces' }
};

const langDict = {
  ru: { salads:'Салаты',deli:'Деликатесы',soups:'Супы',main:'Основные',bakery:'Выпечка',desserts:'Десерты',party:'Компания',drinks:'Напитки',garnish:'Гарниры',tea:'Чаи',sauces:'Соусы',cart_title:'Заказ',cart_empty:'Корзина пуста',checkout_btn:'Оформить',guest_name:'Имя',guest_phone:'Телефон',order_date:'Дата',serving_time:'Время',special_requests:'Пожелания',cancel:'Отмена',confirm:'Подтвердить',subtotal:'Сумма',service:'Сервис 15%',total:'Итого',add:'Добавить',search_results:'Поиск',search_placeholder:'Поиск...' },
  kk: { salads:'Салаттар',deli:'Тіскебасарлар',soups:'Сорпалар',main:'Негізгі',bakery:'Нан-тоқаш',desserts:'Тәттілер',party:'Ұжымдық',drinks:'Сусындар',garnish:'Гарнирлер',tea:'Шайлар',sauces:'Тұздықтар',cart_title:'Тапсырыс',cart_empty:'Бос',checkout_btn:'Рәсімдеу',guest_name:'Аты',guest_phone:'Телефон',order_date:'Күні',serving_time:'Уақыт',special_requests:'Тілектер',cancel:'Болдырмау',confirm:'Растау',subtotal:'Сома',service:'Қызмет 15%',total:'Барлығы',add:'Қосу',search_results:'Іздеу',search_placeholder:'Іздеу...' },
  en: { salads:'Salads',deli:'Deli',soups:'Soups',main:'Main',bakery:'Bakery',desserts:'Desserts',party:'Group',drinks:'Drinks',garnish:'Sides',tea:'Tea',sauces:'Sauces',cart_title:'Order',cart_empty:'Empty',checkout_btn:'Checkout',guest_name:'Name',guest_phone:'Phone',order_date:'Date',serving_time:'Time',special_requests:'Notes',cancel:'Cancel',confirm:'Confirm',subtotal:'Subtotal',service:'Service 15%',total:'Total',add:'Add',search_results:'Search',search_placeholder:'Search...' }
};

let currentLang = 'ru', cart = [], currentCategory = 'salads';

// ===== НАВИГАЦИЯ =====
function switchCategory(catKey) {
  currentCategory = catKey;
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('search-input').value = '';
  document.getElementById('search-clear').style.display = 'none';
  document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`.category-tab[data-cat="${catKey}"]`);
  if (tab) tab.classList.add('active');
  moveDrop(catKey);
  renderCategoryPage(catKey);
}

function moveDrop(catKey) {
  const tab = document.querySelector(`.category-tab[data-cat="${catKey}"]`);
  const drop = document.getElementById('categories-drop');
  const nav = document.getElementById('categories-nav');
  if (tab && drop && nav) {
    const nr = nav.getBoundingClientRect(), tr = tab.getBoundingClientRect();
    drop.style.left = (tr.left - nr.left) + 'px';
    drop.style.width = tr.width + 'px';
  }
}

function searchMenu() {
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear');
  const results = document.getElementById('search-results');
  const page = document.getElementById('category-page');
  if (q.length > 0) {
    clearBtn.style.display = 'block'; page.style.display = 'none'; results.style.display = 'block';
    let found = [];
    for (const key in menuData) {
      const cat = menuData[key];
      const items = [...(cat.items||[]), ...(cat.subcategories ? Object.values(cat.subcategories).flatMap(s=>s.items) : [])];
      found.push(...items.filter(i => (i.name[currentLang]||i.name.ru).toLowerCase().includes(q)));
    }
    document.getElementById('search-count').textContent = `(${found.length})`;
    document.getElementById('search-grid').innerHTML = found.length ? found.map(renderItem).join('') : '<p style="color:rgba(255,255,255,0.5);text-align:center;padding:40px;">Ничего не найдено</p>';
  } else {
    clearBtn.style.display = 'none'; results.style.display = 'none'; page.style.display = 'block';
  }
}

function clearSearch() {
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('search-clear').style.display = 'none';
  document.getElementById('category-page').style.display = 'block';
}

function renderCategoryPage(catKey) {
  const page = document.getElementById('category-page');
  if (!page) return;
  page.style.display = 'block';
  const cat = menuData[catKey];
  if (!cat) return;
  let h = `<div class="category-page-header"><i class="fas ${cat.icon}"></i> ${cat.name[currentLang]}</div>`;
  if (cat.subcategories) {
    for (const sk in cat.subcategories) {
      h += `<div class="subcategory-title">${cat.subcategories[sk].name[currentLang]}</div><div class="menu-grid">${cat.subcategories[sk].items.map(renderItem).join('')}</div>`;
    }
  } else if (cat.items) {
    h += `<div class="menu-grid">${cat.items.map(renderItem).join('')}</div>`;
  }
  page.innerHTML = h;
}

function renderItem(item) {
  const name = item.name[currentLang] || item.name.ru;
  const ci = cart.find(c => c.id === item.id);
  const qty = ci ? ci.quantity : 0;
  return `<div class="menu-item" id="item-${item.id}">
    <img src="${item.image || 'https://via.placeholder.com/300x200?text=Sandyq'}" alt="${name}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200?text=Sandyq'" loading="lazy">
    <div class="menu-item-content">
      <div class="menu-item-title">${name}</div>
      <div class="menu-item-footer">
        <span class="menu-item-price">${item.price.toLocaleString()} ₸</span>
        ${qty > 0 ? `<div class="quantity-control"><button class="quantity-btn" onclick="changeQuantity(${item.id},-1)">−</button><span class="quantity-num">${qty}</span><button class="quantity-btn" onclick="changeQuantity(${item.id},1)">+</button></div>` : `<button class="add-btn" id="add-btn-${item.id}" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`}
      </div>
      <div class="rider-trail" id="trail-${item.id}"></div>
    </div>
  </div>`;
}

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-lang-key]').forEach(el => { const k = el.getAttribute('data-lang-key'); if (langDict[lang]?.[k]) el.textContent = langDict[lang][k]; });
  document.getElementById('search-input').placeholder = langDict[lang]?.search_placeholder || 'Поиск...';
  if (document.getElementById('search-input').value.trim()) searchMenu(); else renderCategoryPage(currentCategory);
  updateCart();
}

function findItemById(id) {
  for (const key in menuData) {
    const cat = menuData[key];
    const all = [...(cat.items||[]), ...(cat.subcategories ? Object.values(cat.subcategories).flatMap(s=>s.items) : [])];
    const f = all.find(i => i.id === id); if (f) return f;
  }
  return null;
}

// ===== КАРАВАН С GIF =====
const GIF_URL = 'sprites/horse.gif'; // ← ВАШ GIF

function addToCart(id) {
  const item = findItemById(id);
  if (!item) return;
  const existing = cart.find(c => c.id === id);
  if (!existing) { cart.push({ ...item, quantity: 1 }); animateCaravan(id, 1); }
  else { existing.quantity += 1; animateCaravan(id, existing.quantity); }
  setTimeout(() => { updateCart(); refreshView(); showToast('✅ Добавлено', 'success'); }, 3500);
}

function changeQuantity(id, d) {
  const ci = cart.find(c => c.id === id);
  if (ci) {
    const oldQty = ci.quantity;
    ci.quantity += d;
    if (ci.quantity <= 0) {
      cart = cart.filter(c => c.id !== id);
    } else if (d > 0) {
      // Запускаем караван при нажатии +
      setTimeout(() => {
        animateCaravan(id, ci.quantity, oldQty);
      }, 50);
    }
  }
  updateCart();
  refreshView();
}
function animateCaravan(id, totalQty, oldQty) {
  const card = document.getElementById('item-' + id);
  if (!card) return;

  const trail = document.getElementById('trail-' + id);
  if (trail) {
    trail.style.width = '100%';
    trail.style.opacity = '1';
    trail.style.background = 'linear-gradient(90deg, transparent, #f7971e, #ff6b35, #f7971e, transparent)';
    setTimeout(() => { trail.style.opacity = '0'; }, 5000);
  }

  // Создаём ОДНОГО коня
  const horse = document.createElement('img');
  horse.src = GIF_URL;
  horse.style.cssText = `
    position: absolute;
    bottom: 6px;
    left: 5%;
    width: 80px;
    z-index: 30;
    transition: left 4s ease-out;
    filter: drop-shadow(0 0 15px rgba(247,151,30,0.6));
  `;
  card.appendChild(horse);

  // Запускаем движение
  setTimeout(() => {
    horse.style.left = '55%';
  }, 100);

  // Удаляем через 4 секунды
  setTimeout(() => {
    horse.style.opacity = '0';
    setTimeout(() => horse.remove(), 500);
  }, 4000);
}}}}function removeFromCart(id) { cart = cart.filter(c => c.id !== id); updateCart(); refreshView(); }
function refreshView() { if (document.getElementById('search-input').value.trim()) searchMenu(); else renderCategoryPage(currentCategory); }

function updateCart() {
  const ce = document.getElementById('cart-count'), te = document.getElementById('total-sum'), cte = document.getElementById('cart-content'), se = document.getElementById('cart-summary');
  if (!ce || !te || !cte) return;
  ce.textContent = cart.reduce((s,i) => s + i.quantity, 0);
  const sub = cart.reduce((s,i) => s + i.price*i.quantity, 0), serv = Math.round(sub*0.15), tot = sub+serv;
  te.textContent = `${langDict[currentLang]?.total || 'Итого'}: ${tot.toLocaleString()} ₸`;
  if (se && cart.length) se.innerHTML = `<div class="cart-summary-row"><span>${langDict[currentLang]?.subtotal}:</span><span>${sub.toLocaleString()} ₸</span></div><div class="cart-summary-row"><span>${langDict[currentLang]?.service}:</span><span>${serv.toLocaleString()} ₸</span></div><div class="cart-summary-row total"><span>${langDict[currentLang]?.total}:</span><span>${tot.toLocaleString()} ₸</span></div>`;
  else if (se) se.innerHTML = '';
  cte.innerHTML = cart.length ? cart.map(i => `<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">${(i.name[currentLang]||i.name.ru)} ×${i.quantity}</div><div>${(i.price*i.quantity).toLocaleString()} ₸</div></div><div class="cart-item-actions"><button onclick="changeQuantity(${i.id},-1)" style="background:#f7971e;">−</button><button onclick="changeQuantity(${i.id},1)" style="background:#2ecc71;">+</button><button onclick="removeFromCart(${i.id})" style="background:#e74c3c;">×</button></div></div>`).join('') : `<div class="empty-cart"><i class="fas fa-shopping-basket"></i><p>${langDict[currentLang]?.cart_empty}</p></div>`;
}
function toggleCart() { document.getElementById('cart-sidebar')?.classList.toggle('open'); }

function openCheckout() {
  if (!cart.length) { showToast('❌ Корзина пуста!', 'error'); return; }
  const cats = [...new Set(cart.map(i => i.category))];
  const sched = document.getElementById('time-schedule');
  if (sched) sched.innerHTML = cats.map(cat => `<div class="time-category-group"><label>${(categoryTimeMap[cat]||{icon:'📦'}).icon} ${langDict[currentLang]?.[cat]||cat}</label><input type="time" id="time-${(categoryTimeMap[cat]||{timeKey:cat}).timeKey}"></div>`).join('');
  document.getElementById('order-date').value = new Date().toISOString().slice(0,10);
  document.getElementById('checkout-modal').classList.add('open');
}
function closeCheckout() { document.getElementById('checkout-modal').classList.remove('open'); }
function submitOrder() {
  const name = document.getElementById('guest-name').value.trim(), phone = document.getElementById('guest-phone').value.trim(), date = document.getElementById('order-date').value;
  if (!name || !phone || !date) { showToast('❌ Заполните все поля!', 'error'); return; }
  const times = {}; [...new Set(cart.map(i=>i.category))].forEach(c => { const tk = (categoryTimeMap[c]||{timeKey:c}).timeKey; const inp = document.getElementById('time-'+tk); if(inp) times[tk]=inp.value; });
  const sub = cart.reduce((s,i)=>s+i.price*i.quantity,0), serv = Math.round(sub*0.15);
  const order = { id: Date.now(), restaurant: 'Sandyq Алматы', guest:{name,phone}, date, items:cart.map(i=>({id:i.id,name:i.name,price:i.price,quantity:i.quantity,category:i.category})), times, special:document.getElementById('special-requests')?.value||'', subtotal:sub, service:serv, total:sub+serv, timestamp:new Date().toISOString() };
  localStorage.setItem('orders', JSON.stringify([...JSON.parse(localStorage.getItem('orders')||'[]'), order]));
  cart = []; updateCart(); refreshView(); closeCheckout();
  ['guest-name','guest-phone','special-requests'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  document.querySelectorAll('#time-schedule input').forEach(el=>el.value='');
  showToast('✅ Заказ отправлен!', 'success');
}
function showToast(msg, type='info') {
  const t = document.getElementById('toast'); if(!t) return;
  t.textContent = msg; t.className = `toast ${type} show`; clearTimeout(t._timeout); t._timeout = setTimeout(()=>t.classList.remove('show'),3000);
}

function loadOrders(filterDate = '') {
  const list = document.getElementById('orders-list'), count = document.getElementById('orders-count'), statsContainer = document.getElementById('stats-container'), dishesContainer = document.getElementById('dishes-stats');
  if (!list || !count) return;
  let orders = JSON.parse(localStorage.getItem('orders')||'[]');
  if (filterDate) orders = orders.filter(o => o.date === filterDate);
  count.textContent = orders.length;
  if (statsContainer && dishesContainer) {
    const rev = orders.reduce((s,o) => s + o.total, 0);
    const items = orders.reduce((s,o) => s + o.items.reduce((ss,i) => ss + i.quantity, 0), 0);
    statsContainer.innerHTML = `<div class="stat-card"><div class="stat-value">${orders.length}</div><div class="stat-label">Заказов</div></div><div class="stat-card"><div class="stat-value">${rev.toLocaleString()} ₸</div><div class="stat-label">Выручка</div></div><div class="stat-card"><div class="stat-value">${items}</div><div class="stat-label">Позиций</div></div>`;
    const map = {};
    orders.forEach(o => o.items.forEach(i => { const k = i.name.ru; if(!map[k]) map[k]={name:i.name,qty:0}; map[k].qty += i.quantity; }));
    dishesContainer.innerHTML = '<h4>📊 Статистика блюд</h4>' + Object.values(map).sort((a,b)=>b.qty-a.qty).map(d => `<div class="dish-stat-row"><span>${d.name.ru}</span><span class="dish-stat-qty">×${d.qty}</span></div>`).join('');
  }
  list.innerHTML = orders.length ? [...orders].reverse().map((o,idx) => `<div class="order-card"><div><b>#${o.id}</b> 👤 ${o.guest.name} 📞 ${o.guest.phone}</div><div>📅 ${o.date}</div>${o.items.map(i=>`<div class="order-item"><span>${i.name.ru} ×${i.quantity}</span><span>${(i.price*i.quantity).toLocaleString()} ₸</span></div>`).join('')}<div class="order-total">💰 ${o.total.toLocaleString()} ₸</div></div>`).join('') : '<div class="empty-orders">Нет заказов</div>';
}
function filterByDate() { loadOrders(document.getElementById('filter-date').value); }
function printOrder(idx) {
  const orders = JSON.parse(localStorage.getItem('orders')||'[]'), o = orders[idx];
  if(!o) return;
  const w = window.open('','','width=800,height=600');
  w.document.write(`<html><body style="font-family:Arial;padding:40px"><h1>Sandyq Алматы</h1><p>#${o.id} | 📅 ${o.date}</p><table style="width:100%;border-collapse:collapse"><tr><th>Блюдо</th><th>×</th><th>Цена</th><th>Сумма</th></tr>${o.items.map(i=>`<tr><td>${i.name.ru}</td><td>${i.quantity}</td><td>${i.price}₸</td><td>${(i.price*i.quantity)}₸</td></tr>`).join('')}</table><p style="font-size:1.2rem;font-weight:700;color:#f7971e;text-align:right">💰 Итого: ${o.total}₸</p></body></html>`);
  w.document.close(); w.print();
}
function deleteOrder(idx) { if(!confirm('Удалить?')) return; const o=JSON.parse(localStorage.getItem('orders')||'[]'); o.splice(idx,1); localStorage.setItem('orders',JSON.stringify(o)); loadOrders(document.getElementById('filter-date')?.value||''); }
function downloadAllOrders() { const o=JSON.parse(localStorage.getItem('orders')||'[]'); if(!o.length) return alert('Нет заказов'); const b=new Blob([JSON.stringify(o,null,2)],{type:'application/json'}); const a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download='orders.json'; a.click(); }
function clearAllOrders() { if(!confirm('Удалить ВСЕ?')) return; localStorage.setItem('orders','[]'); loadOrders(); }

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('category-page')) { renderCategoryPage('salads'); updateCart(); moveDrop('salads'); window.addEventListener('resize', () => moveDrop(currentCategory)); }
  if (document.getElementById('orders-list')) loadOrders();
});