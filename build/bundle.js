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

function span() {
  for (var _len5 = arguments.length, children = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    children[_key5] = arguments[_key5];
  }

  return createElement.apply(void 0, ['span'].concat(children));
}

function addClass(element) {
  var newElement = element.cloneNode(true);

  for (var _len6 = arguments.length, klasses = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
    klasses[_key6 - 1] = arguments[_key6];
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function app() {
  var navbarEle = (0, _navbar["default"])();
  var appEle = (0, _builders.addId)((0, _builders.div)(navbarEle), 'app-container');
  return appEle;
}

},{"..//builders":1,"./navbar":3}],3:[function(require,module,exports){
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

},{"../builders":1}],4:[function(require,module,exports){
"use strict";

var _app = _interopRequireDefault(require("./components/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var body = document.querySelector('body');
body.insertBefore((0, _app["default"])(), body.childNodes[0]);

},{"./components/app":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYnVpbGRlcnMuanMiLCJzcmMvanMvY29tcG9uZW50cy9hcHAuanMiLCJzcmMvanMvY29tcG9uZW50cy9uYXZiYXIuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLFNBQVMsSUFBVCxDQUFjLEtBQWQsRUFBcUI7QUFDeEIsU0FBTyxRQUFRLENBQUMsY0FBVCxDQUF3QixLQUF4QixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxhQUFULENBQXVCLElBQXZCLEVBQTBDO0FBQzdDLE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLElBQXZCLENBQW5COztBQUQ2QyxvQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBRTdDLEVBQUEsUUFBUSxDQUFDLE9BQVQsQ0FBaUIsVUFBQSxLQUFLO0FBQUEsV0FBSSxVQUFVLENBQUMsV0FBWCxDQUF1QixLQUF2QixDQUFKO0FBQUEsR0FBdEI7QUFDQSxTQUFPLFVBQVA7QUFDSDs7QUFFTSxTQUFTLEdBQVQsR0FBMEI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzdCLFNBQU8sYUFBYSxNQUFiLFVBQWMsS0FBZCxTQUF3QixRQUF4QixFQUFQO0FBQ0g7O0FBRU0sU0FBUyxLQUFULENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QjtBQUMvQixNQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsU0FBUixDQUFrQixJQUFsQixDQUFuQjtBQUNBLFNBQU8sTUFBTSxDQUFDLE1BQVAsQ0FBYyxVQUFkLEVBQTBCO0FBQUMsSUFBQSxFQUFFLEVBQUY7QUFBRCxHQUExQixDQUFQO0FBQ0g7O0FBRU0sU0FBUyxDQUFULEdBQXdCO0FBQUEscUNBQVYsUUFBVTtBQUFWLElBQUEsUUFBVTtBQUFBOztBQUMzQixTQUFPLGFBQWEsTUFBYixVQUFjLEdBQWQsU0FBc0IsUUFBdEIsRUFBUDtBQUNEOztBQUVJLFNBQVMsR0FBVCxHQUEwQjtBQUFBLHFDQUFWLFFBQVU7QUFBVixJQUFBLFFBQVU7QUFBQTs7QUFDN0IsU0FBTyxhQUFhLE1BQWIsVUFBYyxLQUFkLFNBQXdCLFFBQXhCLEVBQVA7QUFDRDs7QUFFSSxTQUFTLElBQVQsR0FBMkI7QUFBQSxxQ0FBVixRQUFVO0FBQVYsSUFBQSxRQUFVO0FBQUE7O0FBQzlCLFNBQU8sYUFBYSxNQUFiLFVBQWMsTUFBZCxTQUF5QixRQUF6QixFQUFQO0FBQ0Q7O0FBRUksU0FBUyxRQUFULENBQWtCLE9BQWxCLEVBQXVDO0FBQzFDLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxTQUFSLENBQWtCLElBQWxCLENBQW5COztBQUQwQyxxQ0FBVCxPQUFTO0FBQVQsSUFBQSxPQUFTO0FBQUE7O0FBRTFDLEVBQUEsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsVUFBQSxLQUFLO0FBQUEsV0FBSSxVQUFVLENBQUMsU0FBWCxDQUFxQixHQUFyQixDQUF5QixLQUF6QixDQUFKO0FBQUEsR0FBckI7QUFDQSxTQUFPLFVBQVA7QUFDRDs7Ozs7Ozs7OztBQ25DSDs7QUFDQTs7OztBQUVlLFNBQVMsR0FBVCxHQUFlO0FBQzFCLE1BQU0sU0FBUyxHQUFHLHlCQUFsQjtBQUNBLE1BQU0sTUFBTSxHQUFHLHFCQUFNLG1CQUFJLFNBQUosQ0FBTixFQUFzQixlQUF0QixDQUFmO0FBRUEsU0FBTyxNQUFQO0FBQ0g7Ozs7Ozs7Ozs7QUNSRDs7QUFFZSxTQUFTLE1BQVQsR0FBa0I7QUFDN0IsTUFBTSxPQUFPLEdBQUcsd0JBQVMsb0JBQVQsRUFBZ0IsYUFBaEIsQ0FBaEI7QUFFQSxNQUFNLFFBQVEsR0FBRyxxQkFBTSx3QkFBUyxrQkFBVCxFQUFjLElBQWQsRUFBb0Isa0JBQXBCLENBQU4sRUFBK0MsV0FBL0MsQ0FBakI7QUFDQSxNQUFNLFNBQVMsR0FBRyx3QkFBUyxxQkFBVCxFQUFpQixZQUFqQixDQUFsQjtBQUNBLE1BQU0sVUFBVSxHQUFHLHdCQUFTLG1CQUFJLFFBQUosRUFBYyxTQUFkLENBQVQsRUFBbUMsYUFBbkMsQ0FBbkI7QUFDQSxNQUFNLFFBQVEsR0FBRyx3QkFBUyxtQkFBSSxVQUFKLENBQVQsRUFBMEIsY0FBMUIsRUFBMEMsTUFBMUMsQ0FBakI7QUFFQyxTQUFPLHdCQUFTLG1CQUFJLE9BQUosRUFBYSxRQUFiLENBQVQsRUFBaUMsUUFBakMsQ0FBUDtBQUNKOzs7OztBQ1hEOzs7O0FBRUEsSUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUNBLElBQUksQ0FBQyxZQUFMLENBQWtCLHNCQUFsQixFQUF5QixJQUFJLENBQUMsVUFBTCxDQUFnQixDQUFoQixDQUF6QiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImV4cG9ydCBmdW5jdGlvbiB0ZXh0KHdvcmRzKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUod29yZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0eXBlLCAuLi5jaGlsZHJlbikge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQoY2hpbGQpKTtcclxuICAgIHJldHVybiBuZXdFbGVtZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGl2KC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnZGl2JywgLi4uY2hpbGRyZW4pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkSWQoZWxlbWVudCwgaWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBlbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ld0VsZW1lbnQsIHtpZH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaSguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ2knLCAuLi5jaGlsZHJlbik7XHJcbiAgfVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5hdiguLi5jaGlsZHJlbikge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoJ25hdicsIC4uLmNoaWxkcmVuKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGFuKC4uLmNoaWxkcmVuKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCgnc3BhbicsIC4uLmNoaWxkcmVuKTtcclxuICB9XHJcbiAgXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzcyhlbGVtZW50LCAuLi5rbGFzc2VzKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50ID0gZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICBrbGFzc2VzLmZvckVhY2goa2xhc3MgPT4gbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGtsYXNzKSk7XHJcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcclxuICB9IiwiaW1wb3J0IHtkaXYsIGFkZElkfSBmcm9tICcuLi8vYnVpbGRlcnMnO1xyXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcCgpIHtcclxuICAgIGNvbnN0IG5hdmJhckVsZSA9IG5hdmJhcigpO1xyXG4gICAgY29uc3QgYXBwRWxlID0gYWRkSWQoZGl2KG5hdmJhckVsZSksICdhcHAtY29udGFpbmVyJyk7XHJcblxyXG4gICAgcmV0dXJuIGFwcEVsZTsgICAgXHJcbn0iLCJpbXBvcnQge2FkZENsYXNzLCBhZGRJZCwgZGl2LCBpLCBuYXYsIHNwYW59IGZyb20gJy4uL2J1aWxkZXJzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5hdmJhcigpIHtcclxuICAgIGNvbnN0IG5hdkxlZnQgPSBhZGRDbGFzcyhkaXYoKSwgJ25hdmJhci1sZWZ0Jyk7XHJcblxyXG4gICAgY29uc3QgY2FydEljb24gPSBhZGRJZChhZGRDbGFzcyhpKCksICdmYScsICdmYS1zaG9wcGluZy1jYXJ0JyksICdjYXJ0LWljb24nKTtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGFkZENsYXNzKHNwYW4oKSwgJ2NhcnQtaXRlbXMnKTtcclxuICAgIGNvbnN0IG5hdmJhckl0ZW0gPSBhZGRDbGFzcyhkaXYoY2FydEljb24sIGNhcnRJdGVtcyksICduYXZiYXItaXRlbScpO1xyXG4gICAgY29uc3QgbmF2UmlnaHQgPSBhZGRDbGFzcyhkaXYobmF2YmFySXRlbSksICduYXZiYXItcmlnaHQnLCAnY2FydCcpO1xyXG5cclxuICAgICByZXR1cm4gYWRkQ2xhc3MobmF2KG5hdkxlZnQsIG5hdlJpZ2h0KSwgJ25hdmJhcicpO1xyXG59IiwiaW1wb3J0IGFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbmJvZHkuaW5zZXJ0QmVmb3JlKGFwcCgpLCBib2R5LmNoaWxkTm9kZXNbMF0pO1xyXG5cclxuIl19
