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
  var modalEle = (0, _modal["default"])();
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

function menu(store) {
  var menuEle = (0, _builders.addId)((0, _builders.addClass)((0, _builders.div)(), 'container'), 'menu');
  store.on('SET_ITEMS', function (_ref) {
    var items = _ref.items;
    var leftSide = (0, _leftMenu["default"])(items);
    var rightSide = (0, _rightMenu["default"])(items);
    var columns = (0, _builders.addClass)((0, _builders.section)(leftSide, rightSide), 'columns');
    (0, _helpers.$)('#menu').children(columns);
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

  return {
    children: children
  };
}

},{}],14:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./components/app"));

var _state = require("./state");

var _builders = require("./builders");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFNBQU8sUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUM3QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjs7QUFENkMsb0NBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUU3QyxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsS0FBSztBQUFBLFdBQUksVUFBVSxDQUFDLFdBQVgsQ0FBdUIsS0FBdkIsQ0FBSjtBQUFBLEdBQXRCO0FBQ0EsU0FBTyxVQUFQO0FBQ0g7O0FBRU0sU0FBUyxHQUFULEdBQTBCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUM3QixTQUFPLGFBQWEsTUFBYixVQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNIOztBQUVNLFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFBNEI7QUFDL0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7QUFDQSxTQUFPLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxFQUEwQjtBQUFDLElBQUEsRUFBRSxFQUFGO0FBQUQsR0FBMUIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFDM0IsU0FBTyxhQUFhLE1BQWIsVUFBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzdCLFNBQU8sYUFBYSxNQUFiLFVBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxPQUFULEdBQThCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUNqQyxTQUFPLGFBQWEsTUFBYixVQUFjLFNBQWQsU0FBNEIsUUFBNUIsRUFBUDtBQUNIOztBQUVNLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFDM0IsU0FBTyxhQUFhLE1BQWIsVUFBYyxHQUFkLFNBQXNCLFFBQXRCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsQ0FBYSxNQUFiLEVBQXFCO0FBQ3hCLE1BQU0sS0FBSyxHQUFHLGFBQWEsQ0FBQyxLQUFELENBQTNCO0FBQ0EsRUFBQSxLQUFLLENBQUMsR0FBTixHQUFZLE1BQVo7QUFDQSxTQUFPLEtBQVA7QUFDSDs7QUFFTSxTQUFTLElBQVQsR0FBMkI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzlCLFNBQU8sYUFBYSxNQUFiLFVBQWMsTUFBZCxTQUF5QixRQUF6QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxFQUFULEdBQXlCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUM1QixTQUFPLGFBQWEsTUFBYixVQUFjLElBQWQsU0FBdUIsUUFBdkIsRUFBUDtBQUNIOztBQUVNLFNBQVMsT0FBVCxHQUE4QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFDakMsU0FBTyxhQUFhLE1BQWIsVUFBYyxTQUFkLFNBQTRCLFFBQTVCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxzQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzVCLFNBQU8sYUFBYSxNQUFiLFVBQWMsSUFBZCxTQUF1QixRQUF2QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxNQUFULEdBQTZCO0FBQUEsc0NBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUNoQyxTQUFPLGFBQWEsTUFBYixVQUFjLFFBQWQsU0FBMkIsUUFBM0IsRUFBUDtBQUNIOztBQUdNLFNBQVMsTUFBVCxHQUE2QjtBQUFBLHNDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFDaEMsU0FBTyxhQUFhLE1BQWIsVUFBYyxRQUFkLFNBQTJCLFFBQTNCLEVBQVA7QUFDSDs7QUFFTSxTQUFTLEVBQVQsR0FBeUI7QUFBQSxzQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzVCLFNBQU8sYUFBYSxNQUFiLFVBQWMsSUFBZCxTQUF1QixRQUF2QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxFQUFULEdBQXlCO0FBQUEsc0NBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUM1QixTQUFPLGFBQWEsTUFBYixVQUFjLElBQWQsU0FBdUIsUUFBdkIsRUFBUDtBQUNIOztBQUVNLFNBQVMsUUFBVCxDQUFrQixPQUFsQixFQUF1QztBQUMxQyxNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUixDQUFrQixJQUFsQixDQUFuQjs7QUFEMEMsc0NBQVQsT0FBUztBQUFULElBQUEsT0FBUztBQUFBOztBQUUxQyxFQUFBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLFVBQUEsS0FBSztBQUFBLFdBQUksVUFBVSxDQUFDLFNBQVgsQ0FBcUIsR0FBckIsQ0FBeUIsS0FBekIsQ0FBSjtBQUFBLEdBQXJCO0FBQ0EsU0FBTyxVQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUM5RUQ7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFZSxTQUFTLEdBQVQsQ0FBYSxLQUFiLEVBQW9CO0FBQy9CLE1BQU0sUUFBUSxHQUFHLHdCQUFqQjtBQUNBLE1BQU0sU0FBUyxHQUFHLHlCQUFsQjtBQUNBLE1BQU0sT0FBTyxHQUFHLHVCQUFoQjtBQUNBLE1BQU0sT0FBTyxHQUFHLHNCQUFLLEtBQUwsQ0FBaEI7QUFDQSxNQUFNLFNBQVMsR0FBRyx5QkFBbEI7QUFDQSxNQUFNLE1BQU0sR0FBRyxxQkFBTSxtQkFBSSxRQUFKLEVBQWMsU0FBZCxFQUF5QixPQUF6QixFQUFrQyxPQUFsQyxFQUEyQyxTQUEzQyxDQUFOLEVBQTZELGVBQTdELENBQWY7QUFFQSxTQUFPLE1BQVA7QUFDSDs7Ozs7Ozs7OztBQ2hCRDs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDL0IsTUFBTSxJQUFJLEdBQUcsaUJBQUUsb0JBQUssaUJBQUwsQ0FBRixDQUFiO0FBQ0EsTUFBTSxPQUFPLEdBQUcsd0JBQVMsbUJBQUksSUFBSixDQUFULEVBQW9CLFNBQXBCLEVBQStCLGFBQS9CLENBQWhCO0FBRUEsTUFBTSxTQUFTLEdBQUcsd0JBQVMsbUJBQUksT0FBSixDQUFULEVBQXVCLFdBQXZCLENBQWxCO0FBRUEsU0FBTyx3QkFBUyxzQkFBTyxTQUFQLENBQVQsRUFBNEIsUUFBNUIsQ0FBUDtBQUNEOzs7Ozs7Ozs7O0FDVEQ7O0FBRWUsU0FBUyxJQUFULEdBQWdCO0FBQzNCLE1BQU0sSUFBSSxHQUFHLHdCQUFTLG1CQUFJLDRCQUFKLENBQVQsRUFBNEMsTUFBNUMsQ0FBYjtBQUNBLE1BQU0sR0FBRyxHQUFHLHdCQUFTLGlCQUFFLG9CQUFLLEtBQUwsQ0FBRixDQUFULEVBQXlCLGlCQUF6QixDQUFaO0FBQ0EsTUFBTSxTQUFTLEdBQUcsd0JBQVMsaUJBQUUsb0JBQUssWUFBTCxDQUFGLENBQVQsRUFBZ0MsZ0JBQWhDLENBQWxCO0FBQ0EsTUFBTSxRQUFRLEdBQUcsd0JBQVMsaUJBQUUsb0JBQUssVUFBTCxDQUFGLENBQVQsRUFBOEIsaUJBQTlCLENBQWpCO0FBRUEsTUFBTSxTQUFTLEdBQUcsd0JBQVMsbUJBQUksSUFBSixFQUFVLEdBQVYsRUFBZSxTQUFmLEVBQTBCLFFBQTFCLENBQVQsRUFBOEMsV0FBOUMsQ0FBbEI7QUFFQSxNQUFNLFdBQVcsR0FBRyx3QkFBUyxtQkFBSSxTQUFKLENBQVQsRUFBeUIsY0FBekIsQ0FBcEI7QUFFQSxTQUFPLHdCQUFTLHVCQUFRLFdBQVIsQ0FBVCxFQUErQixNQUEvQixFQUF1QyxRQUF2QyxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUNiRDs7QUFDQTs7QUFDQTs7OztBQUVlLFNBQVMsUUFBVCxHQUE4QjtBQUFBLE1BQVosS0FBWSx1RUFBSixFQUFJO0FBQzNDLE1BQU0sVUFBVSxHQUFHLDBCQUFTLFlBQVQsRUFBdUIsMkJBQWEsS0FBYixFQUFvQixXQUFwQixDQUF2QixDQUFuQjtBQUNBLE1BQU0sT0FBTyxHQUFHLDBCQUFTLFNBQVQsRUFBb0IsMkJBQWEsS0FBYixFQUFvQixRQUFwQixDQUFwQixDQUFoQjtBQUVBLFNBQU8sd0JBQVMsbUJBQUksVUFBSixFQUFnQixPQUFoQixDQUFULEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBQVA7QUFDRDs7Ozs7Ozs7OztBQ1REOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRWUsU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUNoQyxNQUFNLE9BQU8sR0FBRyxxQkFBTSx3QkFBUyxvQkFBVCxFQUFnQixXQUFoQixDQUFOLEVBQW9DLE1BQXBDLENBQWhCO0FBRUEsRUFBQSxLQUFLLENBQUMsRUFBTixDQUFTLFdBQVQsRUFBc0IsZ0JBQWU7QUFBQSxRQUFaLEtBQVksUUFBWixLQUFZO0FBQ25DLFFBQU0sUUFBUSxHQUFHLDBCQUFTLEtBQVQsQ0FBakI7QUFDQSxRQUFNLFNBQVMsR0FBRywyQkFBVSxLQUFWLENBQWxCO0FBQ0EsUUFBTSxPQUFPLEdBQUcsd0JBQVMsdUJBQVEsUUFBUixFQUFrQixTQUFsQixDQUFULEVBQXVDLFNBQXZDLENBQWhCO0FBQ0Esb0JBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsT0FBcEI7QUFDRCxHQUxEO0FBT0EsU0FBTyxPQUFQO0FBQ0Q7Ozs7Ozs7Ozs7QUNoQkg7O0FBQ0E7O0FBRWUsU0FBUyxRQUFULEdBQWlDO0FBQUEsTUFBZixRQUFlLHVFQUFKLEVBQUk7QUFDOUMsTUFBTSxJQUFJLEdBQUcsd0JBQVMsa0JBQUcsb0JBQUssUUFBUSxDQUFDLElBQWQsQ0FBSCxDQUFULEVBQWtDLE1BQWxDLENBQWI7QUFDQSxNQUFNLEtBQUssR0FBRyx3QkFBUyxvQkFBSywrQkFBUywwQkFBWSxRQUFRLENBQUMsS0FBckIsQ0FBVCxFQUFMLENBQVQsRUFBd0QsT0FBeEQsRUFBaUUsaUJBQWpFLENBQWQ7QUFDQSxNQUFNLFdBQVcsR0FBRyx3QkFBUyxpQkFBRSxvQkFBSyxRQUFRLENBQUMsV0FBZCxDQUFGLENBQVQsRUFBd0MsTUFBeEMsQ0FBcEI7QUFDQSxNQUFNLFNBQVMsR0FBRyx3QkFBUyxzQkFBTyxvQkFBSyxhQUFMLENBQVAsQ0FBVCxFQUFzQyxRQUF0QyxFQUFnRCxpQkFBaEQsRUFBbUUsYUFBbkUsQ0FBbEI7QUFFQSxNQUFNLFlBQVksR0FBRyx3QkFBUyxtQkFBSSxJQUFKLEVBQVUsS0FBVixFQUFpQixXQUFqQixFQUE4QixTQUE5QixDQUFULEVBQW1ELGVBQW5ELENBQXJCO0FBRUEsTUFBTSxJQUFJLEdBQUcsd0JBQVMsdUJBQVEsWUFBUixDQUFULEVBQWdDLE9BQWhDLEVBQXlDLFdBQXpDLENBQWI7QUFDQSxFQUFBLElBQUksQ0FBQyxPQUFMLENBQWEsR0FBYixHQUFtQixRQUFRLENBQUMsRUFBNUI7QUFFQSxTQUFPLElBQVA7QUFDRDs7Ozs7Ozs7OztBQ2ZEOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFZSxTQUFTLFFBQVQsQ0FBa0IsUUFBbEIsRUFBd0M7QUFBQSxNQUFaLEtBQVksdUVBQUosRUFBSTtBQUNyRCxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBTixDQUFVLG9CQUFWLENBQWxCO0FBRUEsTUFBTSxLQUFLLEdBQUcsd0JBQVMsa0JBQUcsb0JBQUssUUFBTCxDQUFILENBQVQsRUFBNkIsT0FBN0IsQ0FBZDtBQUVBLFNBQU8sd0JBQVMsNkJBQUksS0FBSiw0QkFBYyxTQUFkLEdBQVQsRUFBbUMsWUFBbkMsQ0FBUDtBQUNEOzs7Ozs7Ozs7O0FDVEQ7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVlLFNBQVMsS0FBVCxHQUEyQjtBQUFBLE1BQVosS0FBWSx1RUFBSixFQUFJO0FBQ3hDLE1BQU0sS0FBSyxHQUFHLHFCQUFNLHdCQUFTLGtCQUFULEVBQWMsSUFBZCxFQUFvQixVQUFwQixFQUFnQyxPQUFoQyxDQUFOLEVBQWdELE9BQWhELENBQWQ7QUFDQSxNQUFNLEtBQUssR0FBRyx3QkFBUyxrQkFBRyxvQkFBSyxNQUFMLENBQUgsQ0FBVCxFQUEyQixPQUEzQixDQUFkO0FBRUEsTUFBSSxJQUFKOztBQUNBLE1BQUksS0FBSyxDQUFDLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEIsSUFBQSxJQUFJLEdBQUcsaUJBQUUsb0JBQUsscUJBQUwsQ0FBRixDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQU4sQ0FBVSxxQkFBVixDQUFuQjtBQUNBLElBQUEsSUFBSSxHQUFHLHdCQUFTLDhDQUFNLFVBQU4sRUFBVCxFQUE0QixNQUE1QixDQUFQO0FBQ0Q7O0FBRUQsTUFBTSxhQUFhLEdBQUcscUJBQU0sbUJBQUksSUFBSixDQUFOLEVBQWlCLFlBQWpCLENBQXRCO0FBQ0EsTUFBTSxjQUFjLEdBQUcsd0JBQVMsc0JBQU8sb0JBQUssVUFBTCxDQUFQLENBQVQsRUFBbUMsUUFBbkMsRUFBNkMsY0FBN0MsQ0FBdkI7QUFDQSxNQUFNLGNBQWMsR0FBRyx3QkFBUyxtQkFBSSxLQUFKLEVBQVcsS0FBWCxFQUFrQixhQUFsQixFQUFpQyxjQUFqQyxDQUFULEVBQTJELGlCQUEzRCxDQUF2QjtBQUNBLE1BQU0sUUFBUSxHQUFHLHFCQUFNLHdCQUFTLHVCQUFRLGNBQVIsQ0FBVCxFQUFrQyxPQUFsQyxDQUFOLEVBQWtELE9BQWxELENBQWpCO0FBRUEsU0FBTyxRQUFQO0FBQ0Q7Ozs7Ozs7Ozs7QUNyQkQ7O0FBQ0E7O0FBRWUsU0FBUyxTQUFULENBQW1CLFFBQW5CLEVBQTZCO0FBQzFDLE1BQU0sSUFBSSxHQUFHLHdCQUFTLG9CQUFLLG9CQUFLLFFBQVEsQ0FBQyxJQUFkLENBQUwsQ0FBVCxFQUFvQyxNQUFwQyxDQUFiO0FBQ0EsTUFBTSxLQUFLLEdBQUcsd0JBQVMsb0JBQUssb0JBQUssMEJBQVksUUFBUSxDQUFDLEtBQXJCLENBQUwsQ0FBTCxDQUFULEVBQWtELE9BQWxELEVBQTJELGlCQUEzRCxDQUFkO0FBQ0EsTUFBTSxZQUFZLEdBQUcsd0JBQVMsa0JBQVQsRUFBYyxJQUFkLEVBQW9CLFVBQXBCLEVBQWdDLFFBQWhDLENBQXJCO0FBRUEsTUFBTSxJQUFJLEdBQUcsd0JBQVMsa0JBQUcsSUFBSCxFQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FBVCxFQUF3QyxXQUF4QyxDQUFiO0FBQ0EsRUFBQSxJQUFJLENBQUMsT0FBTCxDQUFhLEdBQWIsR0FBbUIsUUFBUSxDQUFDLEVBQTVCO0FBRUEsU0FBTyxJQUFQO0FBQ0Q7Ozs7Ozs7Ozs7QUNaRDs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDN0IsTUFBTSxPQUFPLEdBQUcsd0JBQVMsb0JBQVQsRUFBZ0IsYUFBaEIsQ0FBaEI7QUFFQSxNQUFNLFFBQVEsR0FBRyxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0Isa0JBQXBCLENBQU4sRUFBK0MsV0FBL0MsQ0FBakI7QUFDQSxNQUFNLFNBQVMsR0FBRyx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLE1BQU0sVUFBVSxHQUFHLHdCQUFTLG1CQUFJLFFBQUosRUFBYyxTQUFkLENBQVQsRUFBbUMsYUFBbkMsQ0FBbkI7QUFDQSxNQUFNLFFBQVEsR0FBRyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7QUFFQyxTQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNKOzs7Ozs7Ozs7O0FDWEQ7O0FBQ0E7O0FBQ0E7Ozs7QUFFZSxTQUFTLFNBQVQsR0FBK0I7QUFBQSxNQUFaLEtBQVksdUVBQUosRUFBSTtBQUM1QyxNQUFNLFNBQVMsR0FBRywwQkFBUyxrQkFBVCxFQUE2QiwyQkFBYSxLQUFiLEVBQW9CLFlBQXBCLENBQTdCLENBQWxCO0FBQ0EsTUFBTSxRQUFRLEdBQUcsMEJBQVMsVUFBVCxFQUFxQiwyQkFBYSxLQUFiLEVBQW9CLFNBQXBCLENBQXJCLENBQWpCO0FBRUEsU0FBTyx3QkFBUyxtQkFBSSxTQUFKLEVBQWUsUUFBZixDQUFULEVBQW1DLFFBQW5DLEVBQTZDLE1BQTdDLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7O0FDVE0sU0FBUyxZQUFULENBQXNCLEdBQXRCLEVBQTJCLElBQTNCLEVBQWlDO0FBQ3BDLFNBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxHQUFaLEVBQ0osTUFESSxDQUNHLFVBQUEsR0FBRztBQUFBLFdBQUksR0FBRyxDQUFDLEdBQUQsQ0FBSCxDQUFTLElBQVQsS0FBa0IsSUFBdEI7QUFBQSxHQUROLEVBRUosR0FGSSxDQUVBLFVBQUEsR0FBRztBQUFBLFdBQUksR0FBRyxDQUFDLEdBQUQsQ0FBUDtBQUFBLEdBRkgsQ0FBUDtBQUdEOztBQUVJLFNBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUMvQixTQUFPLFVBQVUsQ0FBQyxLQUFELENBQVYsQ0FBa0IsT0FBbEIsQ0FBMEIsQ0FBMUIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsQ0FBVCxDQUFXLEtBQVgsRUFBa0I7QUFDckIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLFNBQU4sQ0FBZ0IsS0FBaEIsQ0FBc0IsSUFBdEIsQ0FBMkIsUUFBUSxDQUFDLGdCQUFULENBQTBCLEtBQTFCLENBQTNCLENBQWpCOztBQUVBLFdBQVMsUUFBVCxDQUFrQixLQUFsQixFQUF5QjtBQUN2QixJQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsR0FBRyxFQUFJO0FBQ3RCLGFBQU8sR0FBRyxDQUFDLFVBQVgsRUFBdUI7QUFDckIsUUFBQSxHQUFHLENBQUMsV0FBSixDQUFnQixHQUFHLENBQUMsVUFBcEI7QUFDRDs7QUFFRCxNQUFBLEdBQUcsQ0FBQyxXQUFKLENBQWdCLEtBQWhCO0FBQ0QsS0FORDtBQU9EOztBQUVELFNBQU87QUFDTCxJQUFBLFFBQVEsRUFBUjtBQURLLEdBQVA7QUFHRDs7Ozs7QUMxQkg7O0FBQ0E7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsT0FBVCxDQUFpQixLQUFqQixFQUF3QixLQUF4QixFQUErQixJQUEvQixFQUFxQztBQUNqQyxVQUFRLEtBQVI7QUFDSSxTQUFLLFdBQUw7QUFDSSxhQUFPLE1BQU0sQ0FBQyxNQUFQLENBQWMsRUFBZCxFQUFrQixLQUFsQixFQUF5QjtBQUM1QixRQUFBLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQVgsQ0FBa0IsVUFBQyxLQUFELEVBQVEsSUFBUjtBQUFBLGlCQUN2QixNQUFNLENBQUMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBbEIsc0JBQTRCLElBQUksQ0FBQyxFQUFqQyxFQUFzQyxJQUF0QyxFQUR1QjtBQUFBLFNBQWxCLEVBRUgsRUFGRztBQURxQixPQUF6QixDQUFQOztBQUtKO0FBQ0ksYUFBTyxLQUFQO0FBUlI7QUFVSDs7QUFFRCxJQUFNLEtBQUssR0FBRyx3QkFBWSxPQUFaLENBQWQ7QUFFQSxLQUFLLENBQUMsV0FBRCxDQUFMLENBQ0ssSUFETCxDQUNVLFVBQUEsR0FBRztBQUFBLFNBQUksR0FBRyxDQUFDLElBQUosRUFBSjtBQUFBLENBRGIsRUFFSyxJQUZMLENBRVUsVUFBQSxPQUFPLEVBQUk7QUFDYixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsRUFBQSxJQUFJLENBQUMsWUFBTCxDQUFrQixxQkFBSSxLQUFKLENBQWxCLEVBQThCLElBQUksQ0FBQyxVQUFMLENBQWdCLENBQWhCLENBQTlCO0FBQ0EsRUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLFdBQWQsRUFBMkI7QUFBQyxJQUFBLEtBQUssRUFBRTtBQUFSLEdBQTNCO0FBQ0gsQ0FOTDs7Ozs7Ozs7O0FDbkJBLElBQU0sWUFBWSxHQUFHO0FBQ2pCLEVBQUEsS0FBSyxFQUFFLEVBRFU7QUFFakIsRUFBQSxJQUFJLEVBQUcsSUFBSSxHQUFKLEVBRlU7QUFHakIsRUFBQSxXQUFXLEVBQUU7QUFISSxDQUFyQjs7QUFNTyxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDakMsTUFBTSxTQUFTLEdBQUcsRUFBbEI7QUFDQSxNQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsWUFBbEIsQ0FBWjs7QUFFQSxXQUFTLEVBQVQsQ0FBWSxLQUFaLEVBQW1CLEVBQW5CLEVBQXVCO0FBQ25CLFFBQUksQ0FBQyxTQUFTLENBQUMsS0FBRCxDQUFkLEVBQXVCO0FBQ25CLE1BQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVCxHQUFtQixFQUFuQjtBQUNIOztBQUVELElBQUEsU0FBUyxDQUFDLEtBQUQsQ0FBVCxDQUFpQixJQUFqQixDQUFzQixFQUF0QjtBQUNIOztBQUVELFdBQVMsT0FBVCxDQUFpQixLQUFqQixFQUFtQztBQUFBLFFBQVgsSUFBVyx1RUFBSixFQUFJO0FBQy9CLElBQUEsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFELEVBQVEsS0FBUixFQUFlLElBQWYsQ0FBZjs7QUFFQSxRQUFJLFNBQVMsQ0FBQyxLQUFELENBQWIsRUFBc0I7QUFDbEIsTUFBQSxTQUFTLENBQUMsS0FBRCxDQUFULENBQWlCLE9BQWpCLENBQXlCLFVBQUEsRUFBRSxFQUFJO0FBQzNCLFFBQUEsRUFBRSxDQUFDLEtBQUQsQ0FBRjtBQUNILE9BRkQ7QUFHSDtBQUNKOztBQUVELFNBQU87QUFDSCxJQUFBLEVBQUUsRUFBRixFQURHO0FBRUgsSUFBQSxPQUFPLEVBQVA7QUFGRyxHQUFQO0FBSUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7aWR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XHJcbiAgICByZXR1cm4gaW1hZ2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iLCJpbXBvcnQge2RpdiwgYWRkSWR9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoc3RvcmUpIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoKTtcclxuICAgIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xyXG4gICAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcclxuICAgIGNvbnN0IG1lbnVFbGUgPSBtZW51KHN0b3JlKTtcclxuICAgIGNvbnN0IGJvdHRvbUVsZSA9IGJvdHRvbSgpOyBcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihtb2RhbEVsZSwgbmF2YmFyRWxlLCBoZXJvRWxlLCBtZW51RWxlLCBib3R0b21FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHJldHVybiBhcHBFbGU7ICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBmb290ZXIsIHRleHQsIHAgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBib3R0b20oKSB7XHJcbiAgY29uc3QgbmFtZSA9IHAodGV4dCgnTWFyZ2FyaWRhIFJhbW9zJykpO1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBhZGRDbGFzcyhkaXYobmFtZSksICdjb250ZW50JywgJ2lzLWNlbnRlcmVkJyk7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjb250ZW50KSwgJ2NvbnRhaW5lcicpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZm9vdGVyKGNvbnRhaW5lciksICdmb290ZXInKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGltZywgcCwgc2VjdGlvbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhlcm8oKSB7XHJcbiAgICBjb25zdCBsb2dvID0gYWRkQ2xhc3MoaW1nKCdzdGF0aWMvZmFuY3liZWFyX3doaXRlLnBuZycpLCAnbG9nbycpO1xyXG4gICAgY29uc3QgdGhlID0gYWRkQ2xhc3MocCh0ZXh0KCdUaGUnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuICAgIGNvbnN0IGZhbmN5QmVhciA9IGFkZENsYXNzKHAodGV4dCgnRmFuY3kgQmVhcicpKSwgJ2hlcm8tdGV4dC1ib2xkJyk7XHJcbiAgICBjb25zdCBlYXRlcmllcyA9IGFkZENsYXNzKHAodGV4dCgnRWF0ZXJpZXMnKSksICdoZXJvLXRleHQtbGlnaHQnKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXIgPSBhZGRDbGFzcyhkaXYobG9nbywgdGhlLCBmYW5jeUJlYXIsIGVhdGVyaWVzKSwgJ2NvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnN0IGhlcm9Db250ZW50ID0gYWRkQ2xhc3MoZGl2KGNvbnRhaW5lciksICdoZXJvLWNvbnRlbnQnKTtcclxuXHJcbiAgICByZXR1cm4gYWRkQ2xhc3Moc2VjdGlvbihoZXJvQ29udGVudCksICdoZXJvJywgJ3NwbGFzaCcpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxlZnRNZW51KGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBhcHBldGl6ZXJzID0gbWVudUxpc3QoJ0FwcGV0aXplcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdhcHBldGl6ZXInKSk7XHJcbiAgY29uc3QgYnVyZ2VycyA9IG1lbnVMaXN0KCdCdXJnZXJzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnYnVyZ2VyJykpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KGFwcGV0aXplcnMsIGJ1cmdlcnMpLCAnY29sdW1uJywgJ2lzLTYnKTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBhZGRJZCwgZGl2LCBzZWN0aW9uIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyAkIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBsZWZ0TWVudSBmcm9tICcuL2xlZnRNZW51JztcclxuaW1wb3J0IHJpZ2h0TWVudSBmcm9tICcuL3JpZ2h0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KHN0b3JlKSB7XHJcbiAgICBjb25zdCBtZW51RWxlID0gYWRkSWQoYWRkQ2xhc3MoZGl2KCksICdjb250YWluZXInKSwgJ21lbnUnKTtcclxuICBcclxuICAgIHN0b3JlLm9uKCdTRVRfSVRFTVMnLCAoeyBpdGVtcyB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxlZnRTaWRlID0gbGVmdE1lbnUoaXRlbXMpO1xyXG4gICAgICBjb25zdCByaWdodFNpZGUgPSByaWdodE1lbnUoaXRlbXMpO1xyXG4gICAgICBjb25zdCBjb2x1bW5zID0gYWRkQ2xhc3Moc2VjdGlvbihsZWZ0U2lkZSwgcmlnaHRTaWRlKSwgJ2NvbHVtbnMnKTtcclxuICAgICAgJCgnI21lbnUnKS5jaGlsZHJlbihjb2x1bW5zKTtcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgcmV0dXJuIG1lbnVFbGU7XHJcbiAgfSIsImltcG9ydCB7IGFkZENsYXNzLCBhcnRpY2xlLCBidXR0b24sIGRpdiwgaDMsIHAsIHNwYW4sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7IGZvcm1hdFByaWNlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51SXRlbShpdGVtRGF0YSA9IHt9KSB7XHJcbiAgY29uc3QgbmFtZSA9IGFkZENsYXNzKGgzKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGAkJHtmb3JtYXRQcmljZShpdGVtRGF0YS5wcmljZSl9YCkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBhZGRDbGFzcyhwKHRleHQoaXRlbURhdGEuZGVzY3JpcHRpb24pKSwgJ2Rlc2MnKTtcclxuICBjb25zdCBhZGRUb0NhcnQgPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQWRkIHRvIENhcnQnKSksICdidXR0b24nLCAnaXMtcHVsbGVkLXJpZ2h0JywgJ2FkZC10by1jYXJ0Jyk7XHJcblxyXG4gIGNvbnN0IG1lZGlhQ29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24sIGFkZFRvQ2FydCksICdtZWRpYS1jb250ZW50Jyk7XHJcblxyXG4gIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhhcnRpY2xlKG1lZGlhQ29udGVudCksICdtZWRpYScsICdtZW51X2l0ZW0nKTtcclxuICBpdGVtLmRhdGFzZXQua2V5ID0gaXRlbURhdGEuaWQ7XHJcblxyXG4gIHJldHVybiBpdGVtO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaDEsIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnVJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVMaXN0KGhlYWRsaW5lLCBpdGVtcyA9IFtdKSB7XHJcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG1lbnVJdGVtKTtcclxuXHJcbiAgY29uc3QgdGl0bGUgPSBhZGRDbGFzcyhoMSh0ZXh0KGhlYWRsaW5lKSksICd0aXRsZScpO1xyXG5cclxuICByZXR1cm4gYWRkQ2xhc3MoZGl2KHRpdGxlLCAuLi5tZW51SXRlbXMpLCAnY29sbGVjdGlvbicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBidXR0b24sIGRpdiwgaDEsIGksIHAsIHNlY3Rpb24sIHRleHQsIHVsIH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbW9kYWxJdGVtIGZyb20gJy4vbW9kYWxJdGVtJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBjbG9zZSA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2Nsb3NlJyksICdjbG9zZScpO1xyXG4gIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XHJcblxyXG4gIGxldCBjYXJ0O1xyXG4gIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcclxuICAgIGNhcnQgPSBwKHRleHQoJ1lvdXIgY2FydCBpcyBlbXB0eS4nKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IG1vZGFsSXRlbXMgPSBpdGVtcy5tYXAobW9kYWxJdGVtKTtcclxuICAgIGNhcnQgPSBhZGRDbGFzcyh1bCguLi5tb2RhbEl0ZW1zKSwgJ21lbnUnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYoY2FydCksICdjYXJ0LWl0ZW1zJyk7XHJcbiAgY29uc3QgY2hlY2tvdXRCdXR0b24gPSBhZGRDbGFzcyhidXR0b24odGV4dCgnQ2hlY2tvdXQnKSksICdidXR0b24nLCAnaXMtZnVsbHdpZHRoJyk7XHJcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBhZGRDbGFzcyhkaXYoY2xvc2UsIHRpdGxlLCBjYXJ0Q29udGFpbmVyLCBjaGVja291dEJ1dHRvbiksICdtb2RhbC1jb250YWluZXInKTtcclxuICBjb25zdCBtb2RhbEVsZSA9IGFkZElkKGFkZENsYXNzKHNlY3Rpb24obW9kYWxDb250YWluZXIpLCAnbW9kYWwnKSwgJ21vZGFsJyk7XHJcblxyXG4gIHJldHVybiBtb2RhbEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XHJcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XHJcblxyXG4gIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xyXG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQge2FkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW59IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XHJcblxyXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcclxuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xyXG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgY29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xyXG4gIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcclxuXHJcbiAgcmV0dXJuIGFkZENsYXNzKGRpdihzb3VwU2FsYWQsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcclxuICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcclxuICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XHJcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hpbGRyZW4sXHJcbiAgICB9O1xyXG4gIH0iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3N0YXRlJ1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9idWlsZGVycyc7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSkge1xyXG4gICAgc3dpdGNoIChldmVudCl7XHJcbiAgICAgICAgY2FzZSAnU0VUX0lURU1TJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwgeyBbaXRlbS5pZF06IGl0ZW0gfSlcclxuICAgICAgICAgICAgICAgICAgLCB7fSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIpO1xyXG5cclxuZmV0Y2goJ2Zvb2QuanNvbicpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlc0JvZHkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICAgICAgYm9keS5pbnNlcnRCZWZvcmUoYXBwKHN0b3JlKSwgYm9keS5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICBzdG9yZS50cmlnZ2VyKCdTRVRfSVRFTVMnLCB7aXRlbXM6IHJlc0JvZHl9KTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4iLCJjb25zdCBkZWZhdWx0U3RhdGUgPSB7XHJcbiAgICBpdGVtczoge30sXHJcbiAgICBjYXJ0OiAobmV3IFNldCgpKSxcclxuICAgIGNhcnRWaXNpYmxlOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIpIHtcclxuICAgIGNvbnN0IGxpc3RlbmVycyA9IHt9O1xyXG4gICAgbGV0IHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFN0YXRlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbihldmVudCwgY2IpIHtcclxuICAgICAgICBpZiAoIWxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5wdXNoKGNiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiB0cmlnZ2VyKGV2ZW50LCBkYXRhID0ge30pIHtcclxuICAgICAgICBzdGF0ZSA9IHJlZHVjZXIoc3RhdGUsIGV2ZW50LCBkYXRhKTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyc1tldmVudF0pIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzW2V2ZW50XS5mb3JFYWNoKGNiID0+IHtcclxuICAgICAgICAgICAgICAgIGNiKHN0YXRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb24sXHJcbiAgICAgICAgdHJpZ2dlclxyXG4gICAgfTtcclxufSJdfQ==
