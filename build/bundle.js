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

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  return {
    on: on,
    children: children,
    addClass: addClass,
    removeClass: removeClass
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9ib3R0b20uanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbGVmdE1lbnUuanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51LmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbWVudUl0ZW0uanMiLCJzcmMvanMvY29tcG9uZW50cy9tZW51TGlzdC5qcyIsInNyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbW9kYWxJdGVtLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvcmlnaHRNZW51LmpzIiwic3JjL2pzL2hlbHBlcnMuanMiLCJzcmMvanMvaW5kZXguanMiLCJzcmMvanMvc2V0dXBfbGlzdGVuZXJzLmpzIiwic3JjL2pzL3N0YXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sU0FBUyxJQUFULENBQWMsS0FBZCxFQUFxQjtBQUN4QixTQUFPLFFBQVEsQ0FBQyxjQUFULENBQXdCLEtBQXhCLENBQVA7QUFDSDs7QUFFTSxTQUFTLGFBQVQsQ0FBdUIsSUFBdkIsRUFBMEM7QUFDN0MsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBbkI7O0FBRDZDLG9DQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFFN0MsRUFBQSxRQUFRLENBQUMsT0FBVCxDQUFpQixVQUFBLEtBQUs7QUFBQSxXQUFJLFVBQVUsQ0FBQyxXQUFYLENBQXVCLEtBQXZCLENBQUo7QUFBQSxHQUF0QjtBQUNBLFNBQU8sVUFBUDtBQUNIOztBQUVNLFNBQVMsR0FBVCxHQUEwQjtB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RkQ7QUFHSDtBQUNKOztBQUVELFNBQU87QUFDSCxJQUFBLEVBQUUsRUFBRixFQURHO0FBRUgsSUFBQSxPQUFPLEVBQVA7QUFGRyxHQUFQO0FBSUgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gdGV4dCh3b3Jkcykge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHdvcmRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgLi4uY2hpbGRyZW4pIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBuZXdFbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2RpdicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZElkKGVsZW1lbnQsIGlkKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXdFbGVtZW50LCB7aWR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdpJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbmF2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnbmF2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgncCcsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGltZyhzb3VyY2UpIHtcclxuICAgIGNvbnN0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWFnZS5zcmMgPSBzb3VyY2U7XHJcbiAgICByZXR1cm4gaW1hZ2VcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwYW4oLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdzcGFuJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDEoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGUoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdhcnRpY2xlJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaDMoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdoMycsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1dHRvbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb290ZXIoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdmb290ZXInLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bCguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3VsJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGkoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdsaScsIC4uLmNoaWxkcmVuKTtcclxufVxyXG4gIFxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbWVudCwgLi4ua2xhc3Nlcykge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAga2xhc3Nlcy5mb3JFYWNoKGtsYXNzID0+IG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChrbGFzcykpO1xyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iLCJpbXBvcnQge2RpdiwgYWRkSWR9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcbmltcG9ydCBoZXJvIGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBib3R0b20gZnJvbSAnLi9ib3R0b20nO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSAnLi9tb2RhbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHAoc3RvcmUpIHtcclxuICAgIGNvbnN0IG1vZGFsRWxlID0gbW9kYWwoc3RvcmUpO1xyXG4gICAgY29uc3QgbmF2YmFyRWxlID0gbmF2YmFyKCk7XHJcbiAgICBjb25zdCBoZXJvRWxlID0gaGVybygpO1xyXG4gICAgY29uc3QgbWVudUVsZSA9IG1lbnUoc3RvcmUpO1xyXG4gICAgY29uc3QgYm90dG9tRWxlID0gYm90dG9tKCk7IFxyXG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG1vZGFsRWxlLCBuYXZiYXJFbGUsIGhlcm9FbGUsIG1lbnVFbGUsIGJvdHRvbUVsZSksICdhcHAtY29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGFwcEVsZTsgICAgXHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGFkZENsYXNzLCBkaXYsIGZvb3RlciwgdGV4dCwgcCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJvdHRvbSgpIHtcclxuICBjb25zdCBuYW1lID0gcCh0ZXh0KCdNYXJnYXJpZGEgUmFtb3MnKSk7XHJcbiAgY29uc3QgY29udGVudCA9IGFkZENsYXNzKGRpdihuYW1lKSwgJ2NvbnRlbnQnLCAnaXMtY2VudGVyZWQnKTtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGNvbnRlbnQpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhmb290ZXIoY29udGFpbmVyKSwgJ2Zvb3RlcicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiwgaW1nLCBwLCBzZWN0aW9uLCB0ZXh0IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVybygpIHtcclxuICAgIGNvbnN0IGxvZ28gPSBhZGRDbGFzcyhpbWcoJ3N0YXRpYy9mYW5jeWJlYXJfd2hpdGUucG5nJyksICdsb2dvJyk7XHJcbiAgICBjb25zdCB0aGUgPSBhZGRDbGFzcyhwKHRleHQoJ1RoZScpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG4gICAgY29uc3QgZmFuY3lCZWFyID0gYWRkQ2xhc3MocCh0ZXh0KCdGYW5jeSBCZWFyJykpLCAnaGVyby10ZXh0LWJvbGQnKTtcclxuICAgIGNvbnN0IGVhdGVyaWVzID0gYWRkQ2xhc3MocCh0ZXh0KCdFYXRlcmllcycpKSwgJ2hlcm8tdGV4dC1saWdodCcpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGFkZENsYXNzKGRpdihsb2dvLCB0aGUsIGZhbmN5QmVhciwgZWF0ZXJpZXMpLCAnY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgaGVyb0NvbnRlbnQgPSBhZGRDbGFzcyhkaXYoY29udGFpbmVyKSwgJ2hlcm8tY29udGVudCcpO1xyXG5cclxuICAgIHJldHVybiBhZGRDbGFzcyhzZWN0aW9uKGhlcm9Db250ZW50KSwgJ2hlcm8nLCAnc3BsYXNoJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2IH0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJCeVR5cGUgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IG1lbnVMaXN0IGZyb20gJy4vbWVudUxpc3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGVmdE1lbnUoaXRlbXMgPSBbXSkge1xyXG4gIGNvbnN0IGFwcGV0aXplcnMgPSBtZW51TGlzdCgnQXBwZXRpemVycycsIGZpbHRlckJ5VHlwZShpdGVtcywgJ2FwcGV0aXplcicpKTtcclxuICBjb25zdCBidXJnZXJzID0gbWVudUxpc3QoJ0J1cmdlcnMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdidXJnZXInKSk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYoYXBwZXRpemVycywgYnVyZ2VycyksICdjb2x1bW4nLCAnaXMtNicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFkZElkLCBkaXYsIHNlY3Rpb24gfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCB7ICQgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuaW1wb3J0IGxlZnRNZW51IGZyb20gJy4vbGVmdE1lbnUnO1xyXG5pbXBvcnQgcmlnaHRNZW51IGZyb20gJy4vcmlnaHRNZW51JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoc3RvcmUpIHtcclxuICAgIGNvbnN0IG1lbnVFbGUgPSBhZGRJZChhZGRDbGFzcyhkaXYoKSwgJ2NvbnRhaW5lcicpLCAnbWVudScpO1xyXG4gIFxyXG4gICAgc3RvcmUub24oJ1NFVF9JVEVNUycsICh7IGl0ZW1zIH0pID0+IHtcclxuICAgICAgY29uc3QgbGVmdFNpZGUgPSBsZWZ0TWVudShpdGVtcyk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0U2lkZSA9IHJpZ2h0TWVudShpdGVtcyk7XHJcbiAgICAgIGNvbnN0IGNvbHVtbnMgPSBhZGRDbGFzcyhzZWN0aW9uKGxlZnRTaWRlLCByaWdodFNpZGUpLCAnY29sdW1ucycpO1xyXG4gICAgICAkKCcjbWVudScpLmNoaWxkcmVuKGNvbHVtbnMpO1xyXG4gICAgfSk7XHJcbiAgXHJcbiAgICByZXR1cm4gbWVudUVsZTtcclxuICB9IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGFydGljbGUsIGJ1dHRvbiwgZGl2LCBoMywgcCwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVJdGVtKGl0ZW1EYXRhID0ge30pIHtcclxuICBjb25zdCBuYW1lID0gYWRkQ2xhc3MoaDModGV4dChpdGVtRGF0YS5uYW1lKSksICduYW1lJyk7XHJcbiAgY29uc3QgcHJpY2UgPSBhZGRDbGFzcyhzcGFuKHRleHQoYCQke2Zvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKX1gKSksICdwcmljZScsICdpcy1wdWxsZWQtcmlnaHQnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZENsYXNzKHAodGV4dChpdGVtRGF0YS5kZXNjcmlwdGlvbikpLCAnZGVzYycpO1xyXG4gIGNvbnN0IGFkZFRvQ2FydCA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdBZGQgdG8gQ2FydCcpKSwgJ2J1dHRvbicsICdpcy1wdWxsZWQtcmlnaHQnLCAnYWRkLXRvLWNhcnQnKTtcclxuXHJcbiAgY29uc3QgbWVkaWFDb250ZW50ID0gYWRkQ2xhc3MoZGl2KG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbiwgYWRkVG9DYXJ0KSwgJ21lZGlhLWNvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgaXRlbSA9IGFkZENsYXNzKGFydGljbGUobWVkaWFDb250ZW50KSwgJ21lZGlhJywgJ21lbnVfaXRlbScpO1xyXG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBoMSwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IG1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW0nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudUxpc3QoaGVhZGxpbmUsIGl0ZW1zID0gW10pIHtcclxuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobWVudUl0ZW0pO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGFkZENsYXNzKGgxKHRleHQoaGVhZGxpbmUpKSwgJ3RpdGxlJyk7XHJcblxyXG4gIHJldHVybiBhZGRDbGFzcyhkaXYodGl0bGUsIC4uLm1lbnVJdGVtcyksICdjb2xsZWN0aW9uJyk7XHJcbn0iLCJpbXBvcnQgeyBhZGRDbGFzcywgYWRkSWQsIGJ1dHRvbiwgZGl2LCBoMSwgaSwgcCwgc2VjdGlvbiwgdGV4dCwgdWwgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcbmltcG9ydCBtb2RhbEl0ZW0gZnJvbSAnLi9tb2RhbEl0ZW0nO1xyXG5pbXBvcnQgeyR9IGZyb20gJy4uL2hlbHBlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoc3RvcmUpIHtcclxuICBjb25zdCBjbG9zZSA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2Nsb3NlJyksICdjbG9zZScpO1xyXG4gIGNvbnN0IHRpdGxlID0gYWRkQ2xhc3MoaDEodGV4dCgnQ2FydCcpKSwgJ3RpdGxlJyk7XHJcblxyXG4gIGNvbnN0IGNhcnRDb250YWluZXIgPSBhZGRJZChkaXYocCh0ZXh0KCdZb3VyIGNhcnQgaXMgZW1wdHkuJykpKSwgJ2NhcnQtaXRlbXMnKTtcclxuICBjb25zdCBjaGVja291dEJ1dHRvbiA9IGFkZENsYXNzKGJ1dHRvbih0ZXh0KCdDaGVja291dCcpKSwgJ2J1dHRvbicsICdpcy1mdWxsd2lkdGgnKTtcclxuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGFkZENsYXNzKGRpdihjbG9zZSwgdGl0bGUsIGNhcnRDb250YWluZXIsIGNoZWNrb3V0QnV0dG9uKSwgJ21vZGFsLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IG1vZGFsRWxlID0gYWRkSWQoYWRkQ2xhc3Moc2VjdGlvbihtb2RhbENvbnRhaW5lciksICdtb2RhbCcpLCAnbW9kYWwnKTtcclxuXHJcbiAgc3RvcmUub24oJ1RPR0dMRV9TSE9XX0NBUlQnLCAoeyBjYXJ0VmlzaWJsZSB9KSA9PiB7XHJcbiAgICBjb25zdCBlbGUgPSAkKCcjbW9kYWwnKTtcclxuICAgIGlmIChjYXJ0VmlzaWJsZSkge1xyXG4gICAgICBlbGUuYWRkQ2xhc3MoJ3Nob3cnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVsZS5yZW1vdmVDbGFzcygnc2hvdycpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIFxyXG4gIHJldHVybiBtb2RhbEVsZTtcclxufSIsImltcG9ydCB7IGFkZENsYXNzLCBpLCBsaSwgc3BhbiwgdGV4dCB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsSXRlbShpdGVtRGF0YSkge1xyXG4gIGNvbnN0IG5hbWUgPSBhZGRDbGFzcyhzcGFuKHRleHQoaXRlbURhdGEubmFtZSkpLCAnbmFtZScpO1xyXG4gIGNvbnN0IHByaWNlID0gYWRkQ2xhc3Moc3Bhbih0ZXh0KGZvcm1hdFByaWNlKGl0ZW1EYXRhLnByaWNlKSkpLCAncHJpY2UnLCAnaXMtcHVsbGVkLXJpZ2h0Jyk7XHJcbiAgY29uc3QgcmVtb3ZlQnV0dG9uID0gYWRkQ2xhc3MoaSgpLCAnZmEnLCAnZmEtdGltZXMnLCAncmVtb3ZlJyk7XHJcblxyXG4gIGNvbnN0IGl0ZW0gPSBhZGRDbGFzcyhsaShuYW1lLCBwcmljZSwgcmVtb3ZlQnV0dG9uKSwgJ21lbnUtaXRlbScpO1xyXG4gIGl0ZW0uZGF0YXNldC5rZXkgPSBpdGVtRGF0YS5pZDtcclxuXHJcbiAgcmV0dXJuIGl0ZW07XHJcbn0iLCJpbXBvcnQge2FkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW59IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XHJcblxyXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcclxuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xyXG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xyXG59IiwiaW1wb3J0IHsgYWRkQ2xhc3MsIGRpdiB9IGZyb20gJy4uL2J1aWxkZXJzJztcclxuaW1wb3J0IHsgZmlsdGVyQnlUeXBlIH0gZnJvbSAnLi4vaGVscGVycyc7XHJcbmltcG9ydCBtZW51TGlzdCBmcm9tICcuL21lbnVMaXN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJpZ2h0TWVudShpdGVtcyA9IFtdKSB7XHJcbiAgY29uc3Qgc291cFNhbGFkID0gbWVudUxpc3QoJ1NvdXBzIGFuZCBTYWxhZHMnLCBmaWx0ZXJCeVR5cGUoaXRlbXMsICdzb3VwX3NhbGFkJykpO1xyXG4gIGNvbnN0IGRlc3NlcnRzID0gbWVudUxpc3QoJ0Rlc3NlcnRzJywgZmlsdGVyQnlUeXBlKGl0ZW1zLCAnZGVzc2VydCcpKTtcclxuXHJcbiAgcmV0dXJuIGFkZENsYXNzKGRpdihzb3VwU2FsYWQsIGRlc3NlcnRzKSwgJ2NvbHVtbicsICdpcy02Jyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gZmlsdGVyQnlUeXBlKG1hcCwgdHlwZSkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hcClcclxuICAgICAgLmZpbHRlcihrZXkgPT4gbWFwW2tleV0udHlwZSA9PT0gdHlwZSlcclxuICAgICAgLm1hcChrZXkgPT4gbWFwW2tleV0pO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQcmljZShwcmljZSkge1xyXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQocHJpY2UpLnRvRml4ZWQoMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAkKHF1ZXJ5KSB7XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpKTtcclxuICBcclxuICAgIGZ1bmN0aW9uIGNoaWxkcmVuKHRvQWRkKSB7XHJcbiAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICB3aGlsZSAoZWxlLmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAgIGVsZS5hcHBlbmRDaGlsZCh0b0FkZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xyXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goZWxlID0+IHtcclxuICAgICAgICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkQ2xhc3Moa2xhc3MpIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChrbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3Moa2xhc3MpIHtcclxuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZSA9PiB7XHJcbiAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShrbGFzcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb24sXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgYWRkQ2xhc3MsXHJcbiAgICAgICAgcmVtb3ZlQ2xhc3MsXHJcbiAgICB9O1xyXG4gIH0iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICcuL3N0YXRlJ1xyXG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi9idWlsZGVycyc7XHJcbmltcG9ydCBzZXR1cExpc3RlbmVycyBmcm9tICcuL3NldHVwX2xpc3RlbmVycyc7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBldmVudCwgZGF0YSkge1xyXG4gICAgc3dpdGNoIChldmVudCl7XHJcbiAgICAgICAgY2FzZSAnU0VUX0lURU1TJzpcclxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogZGF0YS5pdGVtcy5yZWR1Y2UoKHRvdGFsLCBpdGVtKSA9PlxyXG4gICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCB0b3RhbCwgeyBbaXRlbS5pZF06IGl0ZW0gfSlcclxuICAgICAgICAgICAgICAgICAgLCB7fSksXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnVE9HR0xFX1NIT1dfQ0FSVCc6XHJcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgY2FydFZpc2libGU6ICFzdGF0ZS5jYXJ0VmlzaWJsZSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XHJcblxyXG5mZXRjaCgnZm9vZC5qc29uJylcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ocmVzQm9keSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgICAgICBib2R5Lmluc2VydEJlZm9yZShhcHAoc3RvcmUpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgIHN0b3JlLnRyaWdnZXIoJ1NFVF9JVEVNUycsIHtpdGVtczogcmVzQm9keX0pO1xyXG4gICAgICAgIHNldHVwTGlzdGVuZXJzKHN0b3JlKTtcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyAkIH0gZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0b3JlKSB7XHJcbiAgICAkKCcjY2FydC1pY29uLCAjY2xvc2UnKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgc3RvcmUudHJpZ2dlcignVE9HR0xFX1NIT1dfQ0FSVCcpO1xyXG4gICAgfSlcclxufSIsImNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcclxuICAgIGl0ZW1zOiB7fSxcclxuICAgIGNhcnQ6IChuZXcgU2V0KCkpLFxyXG4gICAgY2FydFZpc2libGU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RvcmUocmVkdWNlcikge1xyXG4gICAgY29uc3QgbGlzdGVuZXJzID0ge307XHJcbiAgICBsZXQgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0U3RhdGUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uKGV2ZW50LCBjYikge1xyXG4gICAgICAgIGlmICghbGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdLnB1c2goY2IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQsIGRhdGEgPSB7fSkge1xyXG4gICAgICAgIHN0YXRlID0gcmVkdWNlcihzdGF0ZSwgZXZlbnQsIGRhdGEpO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXJzW2V2ZW50XSkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnNbZXZlbnRdLmZvckVhY2goY2IgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2Ioc3RhdGUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvbixcclxuICAgICAgICB0cmlnZ2VyXHJcbiAgICB9O1xyXG59Il19
