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

function app() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var modalEle = (0, _modal["default"])();
  var navbarEle = (0, _navbar["default"])();
  var heroEle = (0, _hero["default"])();
  var menuEle = (0, _menu["default"])(items);
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

var _leftMenu = _interopRequireDefault(require("./leftMenu"));

var _rightMenu = _interopRequireDefault(require("./rightMenu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function menu() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var leftSide = (0, _leftMenu["default"])(items);
  var rightSide = (0, _rightMenu["default"])(items);
  var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(columns), 'container'), 'menu');
  return menuEle;
}

},{"../builders":1,"./leftMenu":5,"./rightMenu":12}],7:[function(require,module,exports){
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function modal() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var close = (0, _builders.addId)((0, _builders.addClass)((0, _builders.i)(), 'fa', 'fa-times', 'close'), 'close');
  var title = (0, _builders.addClass)((0, _builders.h1)((0, _builders.text)('Cart')), 'title');
  var cart;

  if (items.length === 0) {
    cart = (0, _builders.p)((0, _builders.text)('Your cart is empty.'));
  } else {
    var modalItems = items.map(_modalItem["default"]);
    cart = (0, _builders.addClass)(_builders.ul.apply(void 0, _toConsumableArray(modalItems)), 'menu');
  }

  var cartContainer = (0, _builders.addId)((0, _builders.div)(cart), 'cart-items');
  var checkoutButton = (0, _builders.addClass)((0, _builders.button)((0, _builders.text)('Checkout')), 'button', 'is-fullwidth');
  var modalContainer = (0, _builders.addClass)((0, _builders.div)(close, title, cartContainer, checkoutButton), 'modal-container');
  var modalEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.section)(modalContainer), 'modal'), 'modal');
  return modalEle;
}

},{"../builders":1,"./modalItem":10}],10:[function(require,module,exports){
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

function filterByType(items, type) {
  return items.filter(function (item) {
    return item.type === type;
  });
}

function formatPrice(price) {
  return parseFloat(price).toFixed(2);
}

},{}],14:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./components/app"));

var _state = require("./state");

var _builders = require("./builders");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function reducer(state, event, data) {
  switch (event) {
    case 'FOO':
      return Object.assign({}, state, {
        name: 'Margarida'
      });

    case 'BAR':
      return Object.assign({}, state, data);

    default:
      return state;
  }
}

var store = (0, _state.createStore)(reducer);
store.on('FOO', function (state) {
  console.log('in FOO calback');
  console.log(state);
});
store.on('BAR', function (state) {
  console.log('in BAR calback');
  console.log(state);
});
store.on('NOT_REAL', function (state) {
  console.log('in NOT_REAL calback');
  console.log(state);
});
store.trigger('BAR', {
  name: 'andre',
  job: 'web dev'
});
store.trigger('FOO');
store.trigger('NOT_REAL');
fetch('food.json').then(function (res) {
  return res.json();
}).then(function (resBody) {
  var body = document.querySelector('body');
  body.insertBefore((0, _app["default"])(resBody), body.childNodes[0]);
});

},{"./builders":1,"./components/app":2,"./state":15}],15:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFNBQU8sUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUM3QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjs7QUFENkMsb0NBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUU3QyxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsS0FBSztBQUFBLFdBQUksVUFBVSxDQUFDLFdBQVgsQ0FBdUIsS0FBdkIsQ0FBSjtBQUFBLEdBQXRCO0FBQ0EsU0FBTyxVQUFQO0FBQ0g7O0FBRU0sU0FBUyxHQUFULEdBQTBCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFB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ZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHRleHQod29yZHMpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3Jkcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIC4uLmNoaWxkcmVuKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcclxuICAgIGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gbmV3RWxlbWVudC5hcHBlbmRDaGlsZChjaGlsZCkpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdkaXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRJZChlbGVtZW50LCBpZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3RWxlbWVudCwge2lkfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3AnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbWcoc291cmNlKSB7XHJcbiAgICBjb25zdCBpbWFnZSA9IGNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1hZ2Uuc3JjID0gc291cmNlO1xyXG4gICAgcmV0dXJuIGltYWdlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGgxKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDEnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xlKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnYXJ0aWNsZScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGgzKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnaDMnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBidXR0b24oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdidXR0b24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9vdGVyKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZm9vdGVyJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdWwoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCd1bCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbGknLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHtkaXYsIGFkZElkfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBuYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5pbXBvcnQgaGVybyBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgYm90dG9tIGZyb20gJy4vYm90dG9tJztcclxuaW1wb3J0IG1vZGFsIGZyb20gJy4vbW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwKGl0ZW1zID1bXSkge1xyXG4gICAgY29uc3QgbW9kYWxFbGUgPSBtb2RhbCgpO1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xyXG4gICAgY29uc3QgbWVudUVsZSA9IG1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7IFxyXG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGhlcm9FbGUsIG1lbnVFbGUsIGJvdHRvbUVsZSksICdhcHAtY29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGFwcEVsZTsgICAgXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcclxuICBjb25zdCBuYW1lID0gcCh0ZXh0KCdNYXJnYXJpZGEgUmFtb3MnKSk7XHJcbiAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcclxuICAgIGNvbnN0IGxvZ28gPSBhZGRDbGFzcyhpbWcoJ3N0YXRpYy9mYW5jeWJlYXJfd2hpdGUucG5nJyksICdsb2dvJyk7XHJcbiAgICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG4gICAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcclxuICAgIGNvbnN0IGVhdGVyaWVzID0gYWRkQ2xhc3MocCh0ZXh0KCdFYXRlcmllcycpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcclxuICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KGl0ZW1zID0gW10pIHtcclxuICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xyXG4gICAgY29uc3QgcmlnaHRTaWRlID0gcmlnaHRNZW51KGl0ZW1zKTtcclxuICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xyXG4gICAgY29uc3QgbWVudUVsZSA9IGFkZElkKGFkZENsYXNzKGRpdihjb2x1bW5zKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xyXG5cclxuICAgIHJldHVybiBtZW51RWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcclxuICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcclxuXHJcbiAgY29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xyXG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoaGVhZGxpbmUpKSwgJ3RpdGxlJyk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IGNsb3NlID0gYWRkSWQoYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAnY2xvc2UnKSwgJ2Nsb3NlJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KCdDYXJ0JykpLCAndGl0bGUnKTtcclxuXHJcbiAgbGV0IGNhcnQ7XHJcbiAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgY2FydCA9IHAodGV4dCgnWW91ciBjYXJ0IGlzIGVtcHR5LicpKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgbW9kYWxJdGVtcyA9IGl0ZW1zLm1hcChtb2RhbEl0ZW0pO1xyXG4gICAgY2FydCA9IGFkZENsYXNzKHVsKC4uLm1vZGFsSXRlbXMpLCAnbWVudScpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FydENvbnRhaW5lciA9IGFkZElkKGRpdihjYXJ0KSwgJ2NhcnQtaXRlbXMnKTtcclxuICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcclxuXHJcbiAgcmV0dXJuIG1vZGFsRWxlO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGksIGxpLCBzcGFuLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxJdGVtKGl0ZW1EYXRhKSB7XHJcbiAgY29uc3QgbmFtZSA9IGFkZENsYXNzKHNwYW4odGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoZm9ybWF0UHJpY2UoaXRlbURhdGEucHJpY2UpKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICBjb25zdCByZW1vdmVCdXR0b24gPSBhZGRDbGFzcyhpKCksICdmYScsICdmYS10aW1lcycsICdyZW1vdmUnKTtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGxpKG5hbWUsIHByaWNlLCByZW1vdmVCdXR0b24pLCAnbWVudS1pdGVtJyk7XHJcbiAgaXRlbS5kYXRhc2V0LmtleSA9IGl0ZW1EYXRhLmlkO1xyXG5cclxuICByZXR1cm4gaXRlbTtcclxufSIsImltcG9ydCB7YWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3Bhbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XHJcblxyXG4gICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmlnaHRNZW51KGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBzb3VwU2FsYWQgPSBtZW51TGlzdCgnU291cHMgYW5kIFNhbGFkcycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ3NvdXBfc2FsYWQnKSk7XHJcbiAgY29uc3QgZGVzc2VydHMgPSBtZW51TGlzdCgnRGVzc2VydHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdkZXNzZXJ0JykpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KHNvdXBTYWxhZCwgZGVzc2VydHMpLCAnY29sdW1uJywgJ2lzLTYnKTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJCeVR5cGUoaXRlbXMsIHR5cGUpIHtcclxuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLnR5cGUgPT09IHR5cGUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0UHJpY2UocHJpY2UpIHtcclxuICAgIHJldHVybiBwYXJzZUZsb2F0KHByaWNlKS50b0ZpeGVkKDIpO1xyXG59IiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAnLi9zdGF0ZSdcclxuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vYnVpbGRlcnMnO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQpe1xyXG4gICAgICAgIGNhc2UgJ0ZPTyc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnTWFyZ2FyaWRhJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlICdCQVInOlxyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIGRhdGEpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcclxuXHJcbnN0b3JlLm9uKCdGT08nLCBzdGF0ZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnaW4gRk9PIGNhbGJhY2snKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxufSk7XHJcblxyXG5zdG9yZS5vbignQkFSJywgc3RhdGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luIEJBUiBjYWxiYWNrJyk7XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbn0pO1xyXG5cclxuc3RvcmUub24oJ05PVF9SRUFMJywgc3RhdGUgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2luIE5PVF9SRUFMIGNhbGJhY2snKTtcclxuICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxufSk7XHJcblxyXG5zdG9yZS50cmlnZ2VyKCdCQVInLCB7XHJcbiAgICBuYW1lOiAnYW5kcmUnLFxyXG4gICAgam9iOiAnd2ViIGRldidcclxufSk7XHJcblxyXG5zdG9yZS50cmlnZ2VyKCdGT08nKTtcclxuc3RvcmUudHJpZ2dlcignTk9UX1JFQUwnKTtcclxuXHJcbmZldGNoKCdmb29kLmpzb24nKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXNCb2R5ID0+IHtcclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgICAgIGJvZHkuaW5zZXJ0QmVmb3JlKGFwcChyZXNCb2R5KSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBpdGVtczoge30sXHJcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcclxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHt9O1xyXG4gICAgbGV0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0YXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcclxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcclxuICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNiID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb24sXHJcbiAgICAgICAgdHJpZ2dlclxyXG4gICAgfTtcclxufSJdfQ==
