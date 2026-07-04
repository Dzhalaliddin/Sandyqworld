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

async function saveBookingToCloud(booking) {
  try {
    const res = await fetch(JSONBIN_URL + '/latest', { headers: { 'X-Master-Key': JSONBIN_KEY } });
    const data = await res.json();
    const bookings = data.record.bookings || [];
    bookings.push(booking);
    await fetch(JSONBIN_URL, {
      method: 'PUT',
      headers: { 'X-Master-Key': JSONBIN_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ bookings: bookings, orders: data.record.orders || [] })
    });
    return true;
  } catch(e) {
    console.warn('Ошибка сохранения брони в облако:', e);
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    return false;
  }
}

// ============================================================
//  ДАННЫЕ МЕНЮ SANDYQ АЛМАТЫ (ВСЕ КАТЕГОРИИ)
// ============================================================
// ВНИМАНИЕ: menuData теперь в index.html, здесь только вспомогательные функции
// Все данные меню хранятся в index.html для упрощения

// ============================================================
//  ПЕРЕМЕННЫЕ СОСТОЯНИЯ
// ============================================================
let currentLang = 'ru';
let cart = [];
let currentCategory = 'salads';
const toggleStates = {};

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
  
  // Инициализация переключателей после рендера
  document.querySelectorAll('.toggle-group').forEach(group => {
    const itemId = group.dataset.itemId;
    const btns = group.querySelectorAll('.toggle-btn');
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        const value = this.dataset.value;
        btns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        toggleStates[itemId] = value === 'withHead';
        updateTogglePrice(itemId);
        // Обновляем цену в корзине если товар уже там
        const cartItem = cart.find(c => c.id === parseInt(itemId));
        if (cartItem) {
          const item = findItemById(parseInt(itemId));
          if (item && item.hasToggle) {
            cartItem.price = toggleStates[itemId] ? item.price : item.priceWithoutHead;
            updateCart();
            saveCartToStorage();
          }
        }
      });
    });
  });
}

function renderItem(item) {
  const ci = cart.find(c => c.id === item.id);
  const qty = ci ? ci.quantity : 0;
  const desc = item.desc ? item.desc[currentLang] : '';
  const isLight = document.body.classList.contains('light-theme');
  const info = item.info ? item.info[currentLang] : '';
  const preorder = item.preorder ? item.preorder[currentLang] : '';
  
  // Проверяем, есть ли у товара переключатель
  if (item.hasToggle) {
    const isWithHead = toggleStates[item.id] !== undefined ? toggleStates[item.id] : true;
    const currentPrice = isWithHead ? item.price : item.priceWithoutHead;
    const priceLabel = isWithHead ? langDict[currentLang]?.withHead : langDict[currentLang]?.withoutHead;
    
    return `<div class="menu-item" id="item-${item.id}">
      <img src="${item.image || 'https://via.placeholder.com/300x200'}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200'">
      <div class="menu-item-content">
        <div class="menu-item-title" style="color:${isLight ? '#2a1508' : '#fff'}">${item.name[currentLang] || item.name.ru}</div>
        ${info ? `<div class="party-info-badge">👥 ${info}</div>` : ''}
        ${preorder ? `<div class="preorder-badge">${preorder}</div>` : ''}
        <div class="menu-item-desc" style="color:${isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'}">${desc}</div>
        <div class="menu-item-footer">
          <div class="price-with-toggle">
            <span class="menu-item-price" id="price-${item.id}">${currentPrice.toLocaleString()} ₸</span>
            <span class="price-label" id="label-${item.id}">${priceLabel}</span>
          </div>
          <div class="toggle-and-btn">
            <div class="toggle-group" data-item-id="${item.id}">
              <button class="toggle-btn ${isWithHead ? 'active' : ''}" data-value="withHead">${langDict[currentLang]?.withHead || 'С головой'}</button>
              <button class="toggle-btn ${!isWithHead ? 'active' : ''}" data-value="withoutHead">${langDict[currentLang]?.withoutHead || 'Без головы'}</button>
            </div>
            ${qty > 0 ? 
              `<div class="quantity-control">
                <button class="quantity-btn" onclick="changeQuantity(${item.id},-1)" style="border-color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};color:${isLight ? '#2a1508' : '#fff'}">−</button>
                <span class="quantity-num" style="color:${isLight ? '#2a1508' : '#fff'}">${qty}</span>
                <button class="quantity-btn" onclick="changeQuantity(${item.id},1)" style="border-color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};color:${isLight ? '#2a1508' : '#fff'}">+</button>
              </div>` : 
              `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
            }
          </div>
        </div>
        <div class="rider-trail" id="trail-${item.id}"></div>
      </div>
    </div>`;
  }
  
  // Обычный товар (без переключателя)
  return `<div class="menu-item" id="item-${item.id}">
    <img src="${item.image || 'https://via.placeholder.com/300x200'}" class="menu-item-image" onerror="this.src='https://via.placeholder.com/300x200'">
    <div class="menu-item-content">
      <div class="menu-item-title" style="color:${isLight ? '#2a1508' : '#fff'}">${item.name[currentLang] || item.name.ru}</div>
      ${info ? `<div class="party-info-badge">👥 ${info}</div>` : ''}
      ${preorder ? `<div class="preorder-badge">${preorder}</div>` : ''}
      ${desc ? `<div class="menu-item-desc" style="color:${isLight ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.5)'}">${desc}</div>` : ''}
      <div class="menu-item-footer">
        <span class="menu-item-price">${item.price.toLocaleString()} ₸</span>
        ${qty > 0 ? 
          `<div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity(${item.id},-1)" style="border-color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};color:${isLight ? '#2a1508' : '#fff'}">−</button>
            <span class="quantity-num" style="color:${isLight ? '#2a1508' : '#fff'}">${qty}</span>
            <button class="quantity-btn" onclick="changeQuantity(${item.id},1)" style="border-color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'};color:${isLight ? '#2a1508' : '#fff'}">+</button>
          </div>` : 
          `<button class="add-btn" onclick="addToCart(${item.id})">${langDict[currentLang]?.add || 'Добавить'}</button>`
        }
      </div>
      <div class="rider-trail" id="trail-${item.id}"></div>
    </div>
  </div>`;
}

// ============================================================
//  ОБНОВЛЕНИЕ ЦЕНЫ ПРИ ПЕРЕКЛЮЧЕНИИ
// ============================================================
function updateTogglePrice(itemId) {
  const item = findItemById(parseInt(itemId));
  if (!item || !item.hasToggle) return;
  
  const isWithHead = toggleStates[itemId] !== undefined ? toggleStates[itemId] : true;
  const currentPrice = isWithHead ? item.price : item.priceWithoutHead;
  const priceLabel = isWithHead ? langDict[currentLang]?.withHead : langDict[currentLang]?.withoutHead;
  
  const priceEl = document.getElementById(`price-${itemId}`);
  if (priceEl) priceEl.textContent = currentPrice.toLocaleString() + ' ₸';
  
  const labelEl = document.getElementById(`label-${itemId}`);
  if (labelEl) labelEl.textContent = priceLabel;
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
  
  let price = item.price;
  if (item.hasToggle) {
    const isWithHead = toggleStates[id] !== undefined ? toggleStates[id] : true;
    price = isWithHead ? item.price : item.priceWithoutHead;
  }
  
  const ex = cart.find(c => c.id === id);
  if (!ex) {
    cart.push({ ...item, quantity: 1, price: price });
  } else {
    ex.quantity += 1;
    ex.price = price;
  }
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
  const countEl = document.getElementById('cart-count');
  const totalEl = document.getElementById('total-sum');
  const contentEl = document.getElementById('cart-content');
  const summaryEl = document.getElementById('cart-summary');
  
  if (!countEl || !totalEl || !contentEl) return;
  
  const isLight = document.body.classList.contains('light-theme');
  const textColor = isLight ? '#2a1508' : '#fff';
  const mutedColor = isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.7)';
  const goldColor = isLight ? '#c49a2a' : '#f7971e';
  
  countEl.textContent = cart.reduce((s, i) => s + i.quantity, 0);
  
  const sub = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const serv = Math.round(sub * 0.15);
  const tot = sub + serv;
  
  totalEl.textContent = `${langDict[currentLang]?.total || 'Итого'}: ${tot.toLocaleString()} ₸`;
  totalEl.style.color = goldColor;
  
  if (summaryEl) {
    if (cart.length) {
      summaryEl.innerHTML = `
        <div class="cart-summary-row"><span>${langDict[currentLang]?.subtotal || 'Сумма'}:</span><span>${sub.toLocaleString()} ₸</span></div>
        <div class="cart-summary-row"><span>${langDict[currentLang]?.service || 'Сервис 15%'}:</span><span>${serv.toLocaleString()} ₸</span></div>
        <div class="cart-summary-row total" style="color:${goldColor}"><span>${langDict[currentLang]?.total || 'Итого'}:</span><span>${tot.toLocaleString()} ₸</span></div>
      `;
    } else {
      summaryEl.innerHTML = '';
    }
  }
  
  const backBtn = window.innerWidth <= 480 ? `<button class="back-btn" onclick="toggleCart()" style="color:${goldColor}">← Продолжить покупки</button>` : '';
  
  if (cart.length) {
    contentEl.innerHTML = backBtn + cart.map(i => {
      const itemName = i.name[currentLang] || i.name.ru || 'Блюдо';
      let extraInfo = '';
      if (i.hasToggle) {
        const isWithHead = toggleStates[i.id] !== undefined ? toggleStates[i.id] : true;
        extraInfo = isWithHead ? ' 🐑' : '';
      }
      return `
        <div class="cart-item">
          <div class="cart-item-info">
            <div class="cart-item-name" style="color:${textColor}">${itemName}${extraInfo} ×${i.quantity}</div>
            <div style="color:${mutedColor}">${(i.price * i.quantity).toLocaleString()} ₸</div>
          </div>
          <div class="cart-item-actions">
            <button onclick="changeQuantity(${i.id},-1)" style="background:#f7971e;color:#fff;">−</button>
            <button onclick="changeQuantity(${i.id},1)" style="background:#2ecc71;color:#fff;">+</button>
            <button onclick="removeFromCart(${i.id})" style="background:#e74c3c;color:#fff;">×</button>
          </div>
        </div>
      `;
    }).join('');
  } else {
    contentEl.innerHTML = `
      <div class="empty-cart">
        <i class="fas fa-shopping-basket" style="color:${isLight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.2)'}"></i>
        <p style="color:${isLight ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)'}">${langDict[currentLang]?.cart_empty || 'Корзина пуста'}</p>
      </div>
    `;
  }
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
//  ОФОРМЛЕНИЕ ЗАКАЗА (с ограничением времени 12:00-23:00)
// ============================================================
function openCheckout() {
  if (!cart.length) { showToast('❌ Корзина пуста!', 'error'); return; }
  const cats = [...new Set(cart.map(i => i.category))];
  const sched = document.getElementById('time-schedule');
  if (sched) {
    sched.innerHTML = cats.map(cat => {
      const tk = (categoryTimeMap[cat] || { timeKey: cat }).timeKey;
      let hours = '';
      // Только с 12:00 до 23:00
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
      category: i.category,
      hasToggle: i.hasToggle || false
    })),
    times,
    special: document.getElementById('special-requests')?.value || '',
    subtotal: sub,
    service: serv,
    total: tot,
    timestamp: new Date().toISOString()
  };
  
  const orders = JSON.parse(localStorage.getItem('orders') || '[]');
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
  
  const cloudOk = await saveOrderToCloud(order);
  const tgOk = await sendOrderToTelegram(order);
  
  cart = [];
  updateCart();
  refreshView();
  saveCartToStorage();
  closeCheckout();
  
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
