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

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len8 = arguments.length, klasses = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
    klasses[_key8 - 1] = arguments[_key8];
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

var _builders = require("..//builders");

var _navbar = _interopRequireDefault(require("./navbar"));

var _hero = _interopRequireDefault(require("./hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function app() {
  var navbarEle = (0, _navbar["default"])();
  var heroEle = (0, _hero["default"])();
  var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle, heroEle), 'app-container');
  return appEle;
}

},{"..//builders":1,"./hero":3,"./navbar":4}],3:[function(require,module,exports){
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

},{"../builders":1}],4:[function(require,module,exports){
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

},{"../builders":1}],5:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var body = document.querySelector('body');
body.insertBefore((0, _app["default"])(), body.childNodes[0]);

},{"./components/app":2}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9oZXJvLmpzIiwic3JjL2pzL2NvbXBvbmVudHMvbmF2YmFyLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxTQUFTLElBQVQsQ0FBYyxLQUFkLEVBQXFCO0FBQ3hCLFNBQU8sUUFBUSxDQUFDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsYUFBVCxDQUF1QixJQUF2QixFQUEwQztBQUM3QyxNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBVCxDQUF1QixJQUF2QixDQUFuQjs7QUFENkMsb0NBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUU3QyxFQUFBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFVBQUEsS0FBSztBQUFBLFdBQUksVUFBVSxDQUFDLFdBQVgsQ0FBdUIsS0FBdkIsQ0FBSjtBQUFBLEdBQXRCO0FBQ0EsU0FBTyxVQUFQO0FBQ0g7O0FBRU0sU0FBUyxHQUFULEdBQTBCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUM3QixTQUFPLGFBQWEsTUFBYixVQUFjLEtBQWQsU0FBd0IsUUFBeEIsRUFBUDtBQUNIOztBQUVNLFNBQVMsS0FBVCxDQUFlLE9BQWYsRUFBd0IsRUFBeEIsRUFBNEI7QUFDL0IsTUFBTSxVQUFVLEdBQUcsT0FBTyxDQUFDLFNBQVIsQ0FBa0IsSUFBbEIsQ0FBbkI7QUFDQSxTQUFPLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxFQUEwQjtBQUFDLElBQUEsRUFBRSxFQUFGO0FBQUQsR0FBMUIsQ0FBUDtBQUNIOztBQUVNLFNBQVMsQ0FBVCxHQUF3QjtBQUFBLHFDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7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R0FBRyx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLE1BQU0sVUFBVSxHQUFHLHdCQUFTLG1CQUFJLFFBQUosRUFBYyxTQUFkLENBQVQsRUFBbUMsYUFBbkMsQ0FBbkI7QUFDQSxNQUFNLFFBQVEsR0FBRyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7QUFFQyxTQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNKOzs7OztBQ1hEOzs7O0FBRUEsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQUksQ0FBQyxZQUFMLENBQWtCLHNCQUFsQixFQUF5QixJQUFJLENBQUMsVUFBTCxDQUFnQixDQUFoQixDQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHtpZH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuYXYoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCduYXYnLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsIC4uLmNoaWxkcmVuKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHAoLi4uY2hpbGRyZW4pIHtcclxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KCdwJywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW1nKHNvdXJjZSkge1xyXG4gICAgY29uc3QgaW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltYWdlLnNyYyA9IHNvdXJjZTtcclxuICAgIHJldHVybiBpbWFnZVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3BhbiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCAuLi5jaGlsZHJlbik7XHJcbn1cclxuICBcclxuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW1lbnQsIC4uLmtsYXNzZXMpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIGtsYXNzZXMuZm9yRWFjaChrbGFzcyA9PiBuZXdFbGVtZW50LmNsYXNzTGlzdC5hZGQoa2xhc3MpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59IiwiaW1wb3J0IHtkaXYsIGFkZElkfSBmcm9tICcuLi8vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuaW1wb3J0IGhlcm8gZnJvbSAnLi9oZXJvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcclxuICAgIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xyXG4gICAgY29uc3QgaGVyb0VsZSA9IGhlcm8oKTtcclxuICAgIGNvbnN0IGFwcEVsZSA9IGFkZElkKGRpdihuYXZiYXJFbGUsIGhlcm9FbGUpLCAnYXBwLWNvbnRhaW5lcicpO1xyXG5cclxuICAgIHJldHVybiBhcHBFbGU7ICAgIFxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhZGRDbGFzcywgZGl2LCBpbWcsIHAsIHNlY3Rpb24sIHRleHQgfSBmcm9tICcuLi9idWlsZGVycyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZXJvKCkge1xyXG4gICAgY29uc3QgbG9nbyA9IGFkZENsYXNzKGltZygnc3RhdGljL2ZhbmN5YmVhcl93aGl0ZS5wbmcnKSwgJ2xvZ28nKTtcclxuICAgIGNvbnN0IHRoZSA9IGFkZENsYXNzKHAodGV4dCgnVGhlJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcbiAgICBjb25zdCBmYW5jeUJlYXIgPSBhZGRDbGFzcyhwKHRleHQoJ0ZhbmN5IEJlYXInKSksICdoZXJvLXRleHQtYm9sZCcpO1xyXG4gICAgY29uc3QgZWF0ZXJpZXMgPSBhZGRDbGFzcyhwKHRleHQoJ0VhdGVyaWVzJykpLCAnaGVyby10ZXh0LWxpZ2h0Jyk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gYWRkQ2xhc3MoZGl2KGxvZ28sIHRoZSwgZmFuY3lCZWFyLCBlYXRlcmllcyksICdjb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBoZXJvQ29udGVudCA9IGFkZENsYXNzKGRpdihjb250YWluZXIpLCAnaGVyby1jb250ZW50Jyk7XHJcblxyXG4gICAgcmV0dXJuIGFkZENsYXNzKHNlY3Rpb24oaGVyb0NvbnRlbnQpLCAnaGVybycsICdzcGxhc2gnKTtcclxufSIsImltcG9ydCB7YWRkQ2xhc3MsIGFkZElkLCBkaXYsIGksIG5hdiwgc3Bhbn0gZnJvbSAnLi4vYnVpbGRlcnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gICAgY29uc3QgbmF2TGVmdCA9IGFkZENsYXNzKGRpdigpLCAnbmF2YmFyLWxlZnQnKTtcclxuXHJcbiAgICBjb25zdCBjYXJ0SWNvbiA9IGFkZElkKGFkZENsYXNzKGkoKSwgJ2ZhJywgJ2ZhLXNob3BwaW5nLWNhcnQnKSwgJ2NhcnQtaWNvbicpO1xyXG4gICAgY29uc3QgY2FydEl0ZW1zID0gYWRkQ2xhc3Moc3BhbigpLCAnY2FydC1pdGVtcycpO1xyXG4gICAgY29uc3QgbmF2YmFySXRlbSA9IGFkZENsYXNzKGRpdihjYXJ0SWNvbiwgY2FydEl0ZW1zKSwgJ25hdmJhci1pdGVtJyk7XHJcbiAgICBjb25zdCBuYXZSaWdodCA9IGFkZENsYXNzKGRpdihuYXZiYXJJdGVtKSwgJ25hdmJhci1yaWdodCcsICdjYXJ0Jyk7XHJcblxyXG4gICAgIHJldHVybiBhZGRDbGFzcyhuYXYobmF2TGVmdCwgbmF2UmlnaHQpLCAnbmF2YmFyJyk7XHJcbn0iLCJpbXBvcnQgYXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHAnO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuYm9keS5pbnNlcnRCZWZvcmUoYXBwKCksIGJvZHkuY2hpbGROb2Rlc1swXSk7XHJcblxyXG4iXX0=
