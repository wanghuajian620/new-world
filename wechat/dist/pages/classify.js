'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '博客'
    }, _this.data = {
      text: 'js'
    }, _this.methods = {
      js: function js() {
        var self = this;

        self.text = 'javascript';
      },
      client: function client() {
        var self = this;

        self.text = 'client';
      },
      server: function server() {
        var self = this;

        self.text = 'server';
      },
      jotting: function jotting() {
        var self = this;

        self.text = 'jotting';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/classify'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzaWZ5LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0IiwibWV0aG9kcyIsImpzIiwic2VsZiIsImNsaWVudCIsInNlcnZlciIsImpvdHRpbmciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFHUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCxZQUFJQyxPQUFPLElBQVg7O0FBRUFBLGFBQUtILElBQUwsR0FBWSxZQUFaO0FBQ0QsT0FMTztBQU9SSSxZQVBRLG9CQU9DO0FBQ1AsWUFBSUQsT0FBTyxJQUFYOztBQUVBQSxhQUFLSCxJQUFMLEdBQVksUUFBWjtBQUNELE9BWE87QUFZUkssWUFaUSxvQkFZQztBQUNQLFlBQUlGLE9BQU8sSUFBWDs7QUFFQUEsYUFBS0gsSUFBTCxHQUFZLFFBQVo7QUFDRCxPQWhCTztBQWlCUk0sYUFqQlEscUJBaUJFO0FBQ1IsWUFBSUgsT0FBTyxJQUFYOztBQUVBQSxhQUFLSCxJQUFMLEdBQVksU0FBWjtBQUNEO0FBckJPLEs7Ozs7OzZCQXVCRCxDQUFFOzs7O0VBOUJzQixlQUFLTyxJOztrQkFBbkJYLEsiLCJmaWxlIjoiY2xhc3NpZnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfljZrlrqInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICB0ZXh0OiAnanMnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBqcygpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuXG4gICAgICBzZWxmLnRleHQgPSAnamF2YXNjcmlwdCdcbiAgICB9LFxuXG4gICAgY2xpZW50KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG5cbiAgICAgIHNlbGYudGV4dCA9ICdjbGllbnQnXG4gICAgfSxcbiAgICBzZXJ2ZXIoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ3NlcnZlcidcbiAgICB9LFxuICAgIGpvdHRpbmcoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcblxuICAgICAgc2VsZi50ZXh0ID0gJ2pvdHRpbmcnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=