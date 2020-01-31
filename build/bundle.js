(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.text = text;
exports.createElement = createElement;
exports.div = div;
exports.addId = addId;
exports.i = i;
exports.nav = nav;
exports.section = section;
exports.p = p;
exports.img = img;
exports.span = span;
exports.h1 = h1;
exports.article = article;
exports.h3 = h3;
exports.button = button;
exports.footer = footer;
exports.ul = ul;
exports.li = li;
exports.addClass = addClass;

function text(words) {
  return document.createTextNode(words);
}

function createElement(type) {
  var newElement = document.createElement(type);

  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }

  children.forEach(function (child) {
    return newElement.appendChild(child);
  });
  return newElement;
}

function div() {
  for (var _len2 = arguments.length, children = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    children[_key2] = arguments[_key2];
  }

  return createElement.apply(void 0, ['div'].concat(children));
}

function addId(element, id) {
  var newElement = element.cloneNode(true);
  return Object.assign(newElement, {
    id: id
  });
}

function i() {
  for (var _len3 = arguments.length, children = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    children[_key3] = arguments[_key3];
  }

  return createElement.apply(void 0, ['i'].concat(children));
}

function nav() {
  for (var _len4 = arguments.length, children = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    children[_key4] = arguments[_key4];
  }

  return createElement.apply(void 0, ['nav'].concat(children));
}

function section() {
  for (var _len5 = arguments.length, children = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(void 0, ['section'].concat(children));
}

function p() {
  for (var _len6 = arguments.length, children = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    children[_key6] = arguments[_key6];
  }

  return createElement.apply(void 0, ['p'].concat(children));
}

function img(source) {
  var image = createElement('img');
  image.src = source;
  return image;
}

function span() {
  for (var _len7 = arguments.length, children = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
    children[_key7] = arguments[_key7];
  }

  return createElement.apply(void 0, ['span'].concat(children));
}

function h1() {
  for (var _len8 = arguments.length, children = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
    children[_key8] = arguments[_key8];
  }

  return createElement.apply(void 0, ['h1'].concat(children));
}

function article() {
  for (var _len9 = arguments.length, children = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
    children[_key9] = arguments[_key9];
  }

  return createElement.apply(void 0, ['article'].concat(children));
}

function h3() {
  for (var _len10 = arguments.length, children = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
    children[_key10] = arguments[_key10];
  }

  return createElement.apply(void 0, ['h3'].concat(children));
}

function button() {
  for (var _len11 = arguments.length, children = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
    children[_key11] = arguments[_key11];
  }

  return createElement.apply(void 0, ['button'].concat(children));
}

function footer() {
  for (var _len12 = arguments.length, children = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
    children[_key12] = arguments[_key12];
  }

  return createElement.apply(void 0, ['footer'].concat(children));
}

function ul() {
  for (var _len13 = arguments.length, children = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
    children[_key13] = arguments[_key13];
  }

  return createElement.apply(void 0, ['ul'].concat(children));
}

function li() {
  for (var _len14 = arguments.length, children = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
    children[_key14] = arguments[_key14];
  }

  return createElement.apply(void 0, ['li'].concat(children));
}

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len15 = arguments.length, klasses = new Array(_len15 > 1 ? _len15 - 1 : 0), _key15 = 1; _key15 < _len15; _key15++) {
    klasses[_key15 - 1] = arguments[_key15];
  }

  klasses.forEach(function (klass) {
    return newElement.classList.add(klass);
  });
  return newElement;
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = app;

var _builders = require("../builders");

var _navbar = _interopRequireDefault(require("./navbar"));

var _hero = _interopRequireDefault(require("./hero"));

var _menu = _interopRequireDefault(require("./menu"));

var _bottom = _interopRequireDefault(require("./bottom"));

var _modal = _interopRequireDefault(require("./modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function app(store) {
  var modalEle = (0, _modal["default"])(store);
  var navbarEle = (0, _navbar["default"])();
  var heroEle = (0, _hero["default"])();
  var menuEle = (0, _menu["default"])(store);
  var bottomEle = (0, _bottom["default"])();
  var appEle = (0, _builders.addId)((0, _builders.div)(modalEle, navbarEle, heroEle, menuEle, bottomEle), 'app-container');
  return appEle;
}

},{"../builders":1,"./bottom":3,"./hero":4,"./menu":6,"./modal":9,"./navbar":11}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = bottom;

var _builders = require("../builders");

function bottom() {
  var name = (0, _builders.p)((0, _builders.text)('Margarida Ramos'));
  var content = (0, _builders.addClass)((0, _builders.div)(name), 'content', 'is-centered');
  var container = (0, _builders.addClass)((0, _builders.div)(content), 'container');
  return (0, _builders.addClass)((0, _builders.footer)(container), 'footer');
}

},{"../builders":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = hero;

var _builders = require("../builders");

function hero() {
  var logo = (0, _builders.addClass)((0, _builders.img)('static/fancybear_white.png'), 'logo');
  var the = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('The')), 'hero-text-light');
  var fancyBear = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Fancy Bear')), 'hero-text-bold');
  var eateries = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)('Eateries')), 'hero-text-light');
  var container = (0, _builders.addClass)((0, _builders.div)(logo, the, fancyBear, eateries), 'container');
  var heroContent = (0, _builders.addClass)((0, _builders.div)(container), 'hero-content');
  return (0, _builders.addClass)((0, _builders.section)(heroContent), 'hero', 'splash');
}

},{"../builders":1}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = leftMenu;

var _builders = require("../builders");

var _helpers = require("../helpers");

var _menuList = _interopRequireDefault(require("./menuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function leftMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var appetizers = (0, _menuList["default"])('Appetizers', (0, _helpers.filterByType)(items, 'appetizer'));
  var burgers = (0, _menuList["default"])('Burgers', (0, _helpers.filterByType)(items, 'burger'));
  return (0, _builders.addClass)((0, _builders.div)(appetizers, burgers), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = menu;

var _builders = require("../builders");

var _helpers = require("../helpers");

var _leftMenu = _interopRequireDefault(require("./leftMenu"));

var _rightMenu = _interopRequireDefault(require("./rightMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function menu(store) {
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');
  store.on('SET_ITEMS', function (_ref) {
    var items = _ref.items;
    var leftSide = (0, _leftMenu["default"])(items);
    var rightSide = (0, _rightMenu["default"])(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    (0, _helpers.$)('#menu').children(columns);
  });
  store.on('ITEM_ADDED', function (_ref2) {
    var cart = _ref2.cart;

    var cartArray = _toConsumableArray(cart);

    var articles = cartArray.map(function (id) {
      return "article[data-key='".concat(id, "']");
    });
    var buttons = cartArray.map(function (id) {
      return "article[data-key='".concat(id, "'] button.add-to-cart");
    });
    (0, _helpers.$)(articles.join(', ')).addClass('in-cart');
    (0, _helpers.$)(buttons.join(', ')).attr('disabled', 'disabled');
  });
  return menuEle;
}

},{"../builders":1,"../helpers":13,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = menuItem;

var _builders = require("../builders");

var _helpers = require("../helpers");

function menuItem() {
  var itemData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = (0, _builders.addClass)((0, _builders.h3)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)("$".concat((0, _helpers.formatPrice)(itemData.price)))), 'price', 'is-pulled-right');
  var description = (0, _builders.addClass)((0, _builders.p)((0, _builders.text)(itemData.description)), 'desc');
  var addToCart = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Add to Cart')), 'button', 'is-pulled-right', 'add-to-cart');
  var mediaContent = (0, _builders.addClass)((0, _builders.div)(name, price, description, addToCart), 'media-content');
  var item = (0, _builders.addClass)((0, _builders.article)(mediaContent), 'media', 'menu_item');
  item.dataset.key = itemData.id;
  return item;
}

},{"../builders":1,"../helpers":13}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = menuList;

var _builders = require("../builders");

var _menuItem = _interopRequireDefault(require("./menuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function menuList(headline) {
  var items = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var menuItems = items.map(_menuItem["default"]);
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)(headline)), 'title');
  return (0, _builders.addClass)(_builders.div.apply(void 0, [title].concat(_toConsumableArray(menuItems))), 'collection');
}

},{"../builders":1,"./menuItem":7}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modal;

var _builders = require("../builders");

var _modalItem = _interopRequireDefault(require("./modalItem"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function modal(store) {
  var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');
  var cartContainer = (0, _builders.addId)((0, _builders.div)((0, _builders.p)((0, _builders.text)('Your cart is empty.'))), 'cart-items');
  var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');
  var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');
  var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');
  store.on('TOGGLE_SHOW_CART', function (_ref) {
    var cartVisible = _ref.cartVisible;
    var ele = (0, _helpers.$)('#modal');

    if (cartVisible) {
      ele.addClass('show');
    } else {
      ele.removeClass('show');
    }
  });
  store.on('ITEM_ADDED', function (_ref2) {
    var items = _ref2.items,
        cart = _ref2.cart;

    var cartArray = _toConsumableArray(cart);

    var cartItems = cartArray.map(function (itemId) {
      return (0, _modalItem["default"])(items[itemId]);
    });
    var cartList = (0, _builders.addClass)(_builders.ul.apply(void 0, _toConsumableArray(cartItems)), 'menu');
    (0, _helpers.$)('#cart-items').children(cartList);
  });
  return modalEle;
}

},{"../builders":1,"../helpers":13,"./modalItem":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = modalItem;

var _builders = require("../builders");

var _helpers = require("../helpers");

function modalItem(itemData) {
  var name = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)(itemData.name)), 'name');
  var price = (0, _builders.addClass)((0, _builders.span)((0, _builders.text)((0, _helpers.formatPrice)(itemData.price))), 'price', 'is-pulled-right');
  var removeButton = (0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'remove');
  var item = (0, _builders.addClass)((0, _builders.li)(name, price, removeButton), 'menu-item');
  item.dataset.key = itemData.id;
  return item;
}

},{"../builders":1,"../helpers":13}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = navbar;

var _builders = require("../builders");

function navbar() {
  var navLeft = (0, _builders.addClass)((0, _builders.div)(), 'navbar-left');
  var cartIcon = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-shopping-cart'), 'cart-icon');
  var cartItems = (0, _builders.addClass)((0, _builders.span)(), 'cart-items');
  var navbarItem = (0, _builders.addClass)((0, _builders.div)(cartIcon, cartItems), 'navbar-item');
  var navRight = (0, _builders.addClass)((0, _builders.div)(navbarItem), 'navbar-right', 'cart');
  return (0, _builders.addClass)((0, _builders.nav)(navLeft, navRight), 'navbar');
}

},{"../builders":1}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = rightMenu;

var _builders = require("../builders");

var _helpers = require("../helpers");

var _menuList = _interopRequireDefault(require("./menuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function rightMenu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var soupSalad = (0, _menuList["default"])('Soups and Salads', (0, _helpers.filterByType)(items, 'soup_salad'));
  var desserts = (0, _menuList["default"])('Desserts', (0, _helpers.filterByType)(items, 'dessert'));
  return (0, _builders.addClass)((0, _builders.div)(soupSalad, desserts), 'column', 'is-6');
}

},{"../builders":1,"../helpers":13,"./menuList":8}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterByType = filterByType;
exports.formatPrice = formatPrice;
exports.$ = $;

function filterByType(map, type) {
  return Object.keys(map).filter(function (key) {
    return map[key].type === type;
  }).map(function (key) {
    return map[key];
  });
}

function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

function $(query) {
  var elements = Array.prototype.slice.call(document.querySelectorAll(query));

  function children(toAdd) {
    elements.forEach(function (ele) {
      while (ele.firstChild) {
        ele.removeChild(ele.firstChild);
      }

      ele.appendChild(toAdd);
    });
  }

  function on(event, cb) {
    elements.forEach(function (ele) {
      ele.addEventListener(event, cb);
    });
  }

  function addClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.add(klass);
    });
  }

  function removeClass(klass) {
    elements.forEach(function (ele) {
      ele.classList.remove(klass);
    });
  }

  function attr(attribute, value) {
    elements.forEach(function (ele) {
      if (value === false) {
        ele.removeAttribute(attribute);
      } else {
        ele.setAttribute(attribute, value);
      }
    });
  }

  return {
    on: on,
    children: children,
    addClass: addClass,
    removeClass: removeClass,
    attr: attr
  };
}

},{}],14:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./components/app"));

var _state = require("./state");

var _builders = require("./builders");

var _setup_listeners = _interopRequireDefault(require("./setup_listeners"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function reducer(state, event, data) {
  switch (event) {
    case 'SET_ITEMS':
      return Object.assign({}, state, {
        items: data.items.reduce(function (total, item) {
          return Object.assign({}, total, _defineProperty({}, item.id, item));
        }, {})
      });

    case 'TOGGLE_SHOW_CART':
      return Object.assign({}, state, {
        cartVisible: !state.cartVisible
      });

    case 'ITEM_ADDED':
      return Object.assign({}, state, {
        cart: new Set(state.cart).add(data.item)
      });

    default:
      return state;
  }
}

var store = (0, _state.createStore)(reducer);
fetch('food.json').then(function (res) {
  return res.json();
}).then(function (resBody) {
  var body = document.querySelector('body');
  body.insertBefore((0, _app["default"])(store), body.childNodes[0]);
  store.trigger('SET_ITEMS', {
    items: resBody
  });
  (0, _setup_listeners["default"])(store);
});

},{"./builders":1,"./components/app":2,"./setup_listeners":15,"./state":16}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _helpers = require("./helpers");

function _default(store) {
  (0, _helpers.$)('#cart-icon, #close').on('click', function () {
    store.trigger('TOGGLE_SHOW_CART');
  });

  function getParentWithKey(element) {
    var parent = element.parentElement;

    while (parent && !parent.dataset.key) {
      parent = parent.parentElement;
    }

    return parent;
  }

  (0, _helpers.$)('.add-to-cart').on('click', function (e) {
    var parent = getParentWithKey(e.currentTarget);
    var key = parseInt(parent.dataset.key, 10);
    store.trigger('ITEM_ADDED', {
      item: key
    });
  });
}

},{"./helpers":13}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
var defaultState = {
  items: {},
  cart: new Set(),
  cartVisible: false
};

function createStore(reducer) {
  var listeners = {};
  var state = Object.assign({}, defaultState);

  function on(event, cb) {
    if (!listeners[event]) {
      listeners[event] = [];
    }

    listeners[event].push(cb);
  }

  function trigger(event) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    state = reducer(state, event, data);

    if (listeners[event]) {
      listeners[event].forEach(function (cb) {
        cb(state);
      });
    }
  }

  return {
    on: on,
    trigger: trigger
  };
}

},{}]},{},[14])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixTQUFPLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRDZDLG9DQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFFN0MsRUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFBLEtBQUs7QUFBQSxXQUFJLFVBQVUsQ0FBQyxXQUFYLENBQXVCLEtBQXZCLENBQUo7QUFBQSxHQUF0QjtBQUNBLFNBQU8sVUFBUDtBQUNIOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtB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ZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwge2lkfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgcmV0dXJuIGltYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHtkaXYsIGFkZElkfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcclxuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKHN0b3JlKSB7XHJcbiAgICBjb25zdCBtb2RhbEVsZSA9IG1vZGFsKHN0b3JlKTtcclxuICAgIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xyXG4gICAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcclxuICAgIGNvbnN0IG1lbnVFbGUgPSBtZW51KHN0b3JlKTtcclxuICAgIGNvbnN0IGJvdHRvbUVsZSA9IGJvdHRvbSgpOyBcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHJldHVybiBhcHBFbGU7ICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b20oKSB7XHJcbiAgY29uc3QgbmFtZSA9IHAodGV4dCgnTWFyZ2FyaWRhIFJhbW9zJykpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSksICdjb250ZW50JywgJ2lzLWNlbnRlcmVkJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xyXG4gICAgY29uc3QgdGhlID0gYWRkQ2xhc3MocCh0ZXh0KCdUaGUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuICAgIGNvbnN0IGZhbmN5QmVhciA9IGFkZENsYXNzKHAodGV4dCgnRmFuY3kgQmVhcicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XHJcbiAgICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBmYW5jeUJlYXIsIGVhdGVyaWVzKSwgJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRNZW51KGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XHJcbiAgY29uc3QgYnVyZ2VycyA9IG1lbnVMaXN0KCdCdXJnZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYnVyZ2VyJykpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XHJcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcclxuICBcclxuICAgIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XHJcbiAgICAgICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcclxuICAgICAgJCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgY2FydCB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xyXG4gICAgICAgIGNvbnN0IGFydGljbGVzID0gY2FydEFycmF5Lm1hcChpZCA9PiBgYXJ0aWNsZVtkYXRhLWtleT0nJHtpZH0nXWApO1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBjYXJ0QXJyYXkubWFwKGlkID0+IGBhcnRpY2xlW2RhdGEta2V5PScke2lkfSddIGJ1dHRvbi5hZGQtdG8tY2FydGApO1xyXG4gICAgICBcclxuICAgICAgICAkKGFydGljbGVzLmpvaW4oJywgJykpLmFkZENsYXNzKCdpbi1jYXJ0Jyk7XHJcbiAgICAgICAgJChidXR0b25zLmpvaW4oJywgJykpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcbiAgICB9KTtcclxuICBcclxuICAgIHJldHVybiBtZW51RWxlO1xyXG4gIH0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYXJ0aWNsZSwgYnV0dG9uLCBkaXYsIGgzLCBwLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUl0ZW0oaXRlbURhdGEgPSB7fSkge1xyXG4gIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhoMyh0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcclxuICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChgJCR7Zm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpfWApKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYWRkQ2xhc3MocCh0ZXh0KGl0ZW1EYXRhLmRlc2NyaXB0aW9uKSksICdkZXNjJyk7XHJcbiAgY29uc3QgYWRkVG9DYXJ0ID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0FkZCB0byBDYXJ0JykpLCAnYnV0dG9uJywgJ2lzLXB1bGxlZC1yaWdodCcsICdhZGQtdG8tY2FydCcpO1xyXG5cclxuICBjb25zdCBtZWRpYUNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBhZGRUb0NhcnQpLCAnbWVkaWEtY29udGVudCcpO1xyXG5cclxuICBjb25zdCBpdGVtID0gYWRkQ2xhc3MoYXJ0aWNsZShtZWRpYUNvbnRlbnQpLCAnbWVkaWEnLCAnbWVudV9pdGVtJyk7XHJcbiAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xyXG5cclxuICByZXR1cm4gaXRlbTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGgxLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbWVudUl0ZW0gZnJvbSAnLi9tZW51SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51TGlzdChoZWFkbGluZSwgaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtZW51SXRlbSk7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dChoZWFkbGluZSkpLCAndGl0bGUnKTtcclxuXHJcbiAgcmV0dXJuIGFkZENsYXNzKGRpdih0aXRsZSwgLi4ubWVudUl0ZW1zKSwgJ2NvbGxlY3Rpb24nKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgYnV0dG9uLCBkaXYsIGgxLCBpLCBwLCBzZWN0aW9uLCB0ZXh0LCB1bCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1vZGFsSXRlbSBmcm9tICcuL21vZGFsSXRlbSc7XHJcbmltcG9ydCB7JH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbChzdG9yZSkge1xyXG4gIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGFkZElkKGRpdihwKHRleHQoJ1lvdXIgY2FydCBpcyBlbXB0eS4nKSkpLCAnY2FydC1pdGVtcycpO1xyXG4gIGNvbnN0IGNoZWNrb3V0QnV0dG9uID0gYWRkQ2xhc3MoYnV0dG9uKHRleHQoJ0NoZWNrb3V0JykpLCAnYnV0dG9uJywgJ2lzLWZ1bGx3aWR0aCcpO1xyXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNsb3NlLCB0aXRsZSwgY2FydENvbnRhaW5lciwgY2hlY2tvdXRCdXR0b24pLCAnbW9kYWwtY29udGFpbmVyJyk7XHJcbiAgY29uc3QgbW9kYWxFbGUgPSBhZGRJZChhZGRDbGFzcyhzZWN0aW9uKG1vZGFsQ29udGFpbmVyKSwgJ21vZGFsJyksICdtb2RhbCcpO1xyXG5cclxuICBzdG9yZS5vbignVE9HR0xFX1NIT1dfQ0FSVCcsICh7IGNhcnRWaXNpYmxlIH0pID0+IHtcclxuICAgIGNvbnN0IGVsZSA9ICQoJyNtb2RhbCcpO1xyXG4gICAgaWYgKGNhcnRWaXNpYmxlKSB7XHJcbiAgICAgIGVsZS5hZGRDbGFzcygnc2hvdycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZWxlLnJlbW92ZUNsYXNzKCdzaG93Jyk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHN0b3JlLm9uKCdJVEVNX0FEREVEJywgKHsgaXRlbXMsIGNhcnQgfSkgPT4ge1xyXG4gICAgY29uc3QgY2FydEFycmF5ID0gWy4uLmNhcnRdO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gY2FydEFycmF5Lm1hcChpdGVtSWQgPT4gbW9kYWxJdGVtKGl0ZW1zW2l0ZW1JZF0pKTtcclxuICAgIGNvbnN0IGNhcnRMaXN0ID0gYWRkQ2xhc3ModWwoLi4uY2FydEl0ZW1zKSwgJ21lbnUnKTtcclxuICAgICQoJyNjYXJ0LWl0ZW1zJykuY2hpbGRyZW4oY2FydExpc3QpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbW9kYWxFbGU7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgaSwgbGksIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEl0ZW0oaXRlbURhdGEpIHtcclxuICBjb25zdCBuYW1lID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGl0ZW1EYXRhLm5hbWUpKSwgJ25hbWUnKTtcclxuICBjb25zdCBwcmljZSA9IGFkZENsYXNzKHNwYW4odGV4dChmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSkpKSwgJ3ByaWNlJywgJ2lzLXB1bGxlZC1yaWdodCcpO1xyXG4gIGNvbnN0IHJlbW92ZUJ1dHRvbiA9IGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ3JlbW92ZScpO1xyXG5cclxuICBjb25zdCBpdGVtID0gYWRkQ2xhc3MobGkobmFtZSwgcHJpY2UsIHJlbW92ZUJ1dHRvbiksICdtZW51LWl0ZW0nKTtcclxuICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcblxyXG4gIHJldHVybiBpdGVtO1xyXG59IiwiaW1wb3J0IHthZGRDbGFzcywgYWRkSWQsIGRpdiwgaSwgbmF2LCBzcGFufSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgICBjb25zdCBuYXZMZWZ0ID0gYWRkQ2xhc3MoZGl2KCksICduYXZiYXItbGVmdCcpO1xyXG5cclxuICAgIGNvbnN0IGNhcnRJY29uID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtc2hvcHBpbmctY2FydCcpLCAnY2FydC1pY29uJyk7XHJcbiAgICBjb25zdCBjYXJ0SXRlbXMgPSBhZGRDbGFzcyhzcGFuKCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgICBjb25zdCBuYXZiYXJJdGVtID0gYWRkQ2xhc3MoZGl2KGNhcnRJY29uLCBjYXJ0SXRlbXMpLCAnbmF2YmFyLWl0ZW0nKTtcclxuICAgIGNvbnN0IG5hdlJpZ2h0ID0gYWRkQ2xhc3MoZGl2KG5hdmJhckl0ZW0pLCAnbmF2YmFyLXJpZ2h0JywgJ2NhcnQnKTtcclxuXHJcbiAgICAgcmV0dXJuIGFkZENsYXNzKG5hdihuYXZMZWZ0LCBuYXZSaWdodCksICduYXZiYXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZpbHRlckJ5VHlwZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5pbXBvcnQgbWVudUxpc3QgZnJvbSAnLi9tZW51TGlzdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByaWdodE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IHNvdXBTYWxhZCA9IG1lbnVMaXN0KCdTb3VwcyBhbmQgU2FsYWRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnc291cF9zYWxhZCcpKTtcclxuICBjb25zdCBkZXNzZXJ0cyA9IG1lbnVMaXN0KCdEZXNzZXJ0cycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2Rlc3NlcnQnKSk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoc291cFNhbGFkLCBkZXNzZXJ0cyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckJ5VHlwZShtYXAsIHR5cGUpIHtcclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhtYXApXHJcbiAgICAgIC5maWx0ZXIoa2V5ID0+IG1hcFtrZXldLnR5cGUgPT09IHR5cGUpXHJcbiAgICAgIC5tYXAoa2V5ID0+IG1hcFtrZXldKTtcclxuICB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gJChxdWVyeSkge1xyXG4gICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSk7XHJcbiAgXHJcbiAgICBmdW5jdGlvbiBjaGlsZHJlbih0b0FkZCkge1xyXG4gICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgd2hpbGUgKGVsZS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICBlbGUucmVtb3ZlQ2hpbGQoZWxlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBlbGUuYXBwZW5kQ2hpbGQodG9BZGQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZENsYXNzKGtsYXNzKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoa2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgICBcclxuICAgIGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGtsYXNzKSB7XHJcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGUgPT4ge1xyXG4gICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoa2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBhdHRyKGF0dHJpYnV0ZSwgdmFsdWUpIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGVsZS5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvbixcclxuICAgICAgICBjaGlsZHJlbixcclxuICAgICAgICBhZGRDbGFzcyxcclxuICAgICAgICByZW1vdmVDbGFzcyxcclxuICAgICAgICBhdHRyLFxyXG4gICAgfTtcclxuICB9IiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9zdGF0ZSdcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgc2V0dXBMaXN0ZW5lcnMgZnJvbSAnLi9zZXR1cF9saXN0ZW5lcnMnO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQpe1xyXG4gICAgICAgIGNhc2UgJ1NFVF9JVEVNUyc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGRhdGEuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT5cclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRvdGFsLCB7IFtpdGVtLmlkXTogaXRlbSB9KVxyXG4gICAgICAgICAgICAgICAgICAsIHt9KSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXNlICdUT0dHTEVfU0hPV19DQVJUJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBjYXJ0VmlzaWJsZTogIXN0YXRlLmNhcnRWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnSVRFTV9BRERFRCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgY2FydDogKG5ldyBTZXQoc3RhdGUuY2FydCkpLmFkZChkYXRhLml0ZW0pLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG5mZXRjaCgnZm9vZC5qc29uJylcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzQm9keSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAoc3RvcmUpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHtpdGVtczogcmVzQm9keX0pO1xyXG4gICAgICAgIHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICAkKCcjY2FydC1pY29uLCAjY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xyXG4gICAgfSlcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRQYXJlbnRXaXRoS2V5KGVsZW1lbnQpIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBcclxuICAgICAgICB3aGlsZSAocGFyZW50ICYmICFwYXJlbnQuZGF0YXNldC5rZXkpIHtcclxuICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgJCgnLmFkZC10by1jYXJ0Jykub24oJ2NsaWNrJywgZSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0UGFyZW50V2l0aEtleShlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCBrZXkgPSBwYXJzZUludChwYXJlbnQuZGF0YXNldC5rZXksIDEwKTtcclxuICAgICAgICBzdG9yZS50cmlnZ2VyKCdJVEVNX0FEREVEJywgeyBpdGVtOiBrZXkgfSk7XHJcbiAgICAgIH0pO1xyXG59IiwiY29uc3QgZGVmYXVsdFN0YXRlID0ge1xyXG4gICAgaXRlbXM6IHt9LFxyXG4gICAgY2FydDogKG5ldyBTZXQoKSksXHJcbiAgICBjYXJ0VmlzaWJsZTogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyKSB7XHJcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB7fTtcclxuICAgIGxldCBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdGF0ZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb24oZXZlbnQsIGNiKSB7XHJcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpc3RlbmVyc1tldmVudF0ucHVzaChjYik7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlcihldmVudCwgZGF0YSA9IHt9KSB7XHJcbiAgICAgICAgc3RhdGUgPSByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lcnNbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyc1tldmVudF0uZm9yRWFjaChjYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYihzdGF0ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG9uLFxyXG4gICAgICAgIHRyaWdnZXJcclxuICAgIH07XHJcbn0iXX0=
