webpackHotUpdate(0,{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _altContainer = __webpack_require__(164);\n\nvar _altContainer2 = _interopRequireDefault(_altContainer);\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _name = __webpack_require__(218);\n\nvar _name2 = _interopRequireDefault(_name);\n\nvar _LoginActions = __webpack_require__(219);\n\nvar _LoginActions2 = _interopRequireDefault(_LoginActions);\n\nvar _LoginStore = __webpack_require__(220);\n\nvar _LoginStore2 = _interopRequireDefault(_LoginStore);\n\nvar _alt = __webpack_require__(178);\n\nvar _alt2 = _interopRequireDefault(_alt);\n\nvar _altReact = __webpack_require__(222);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AltConnectToStoreExample = (function (_React$Component) {\n  _inherits(AltConnectToStoreExample, _React$Component);\n\n  function AltConnectToStoreExample() {\n    _classCallCheck(this, AltConnectToStoreExample);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(AltConnectToStoreExample).apply(this, arguments));\n  }\n\n  _createClass(AltConnectToStoreExample, [{\n    key: 'render',\n    value: function render() {\n      console.log(this.props);\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'ConnectToStoreExample'\n        ),\n        _react2.default.createElement(\n          'button',\n          { className: 'add-note', onClick: this.addNote },\n          '-a'\n        ),\n        _react2.default.createElement('div', null)\n      );\n    }\n  }, {\n    key: 'addNote',\n    value: function addNote() {\n      _LoginActions2.default.updatenote({ name: 'new name' });\n    }\n  }], [{\n    key: 'getStores',\n    value: function getStores() {\n      return [_LoginStore2.default];\n    }\n  }, {\n    key: 'getPropsFromStores',\n    value: function getPropsFromStores() {\n      return _LoginStore2.default.getState();\n    }\n  }]);\n\n  return AltConnectToStoreExample;\n})(_react2.default.Component);\n\nexports.default = (0, _altReact.connect)(AltConnectToStoreExample);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BbHRDb25uZWN0VG9TdG9yZUV4YW1wbGUuanN4P2FiOWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU0sd0JBQXdCO1lBQXhCLHdCQUF3Qjs7V0FBeEIsd0JBQXdCOzBCQUF4Qix3QkFBd0I7O2tFQUF4Qix3QkFBd0I7OztlQUF4Qix3QkFBd0I7OzZCQU1uQjtBQUNSLGFBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN0QixhQUNFOzs7UUFDQzs7OztTQUE4QjtRQUM3Qjs7WUFBUSxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBUTs7U0FBWTtRQUMvRCwwQ0FFTTtPQUNGLENBQ047S0FDSDs7OzhCQUNTO0FBQ1IsNkJBQWEsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFHLFVBQVUsRUFBQyxDQUFDLENBQUM7S0FDOUM7OztnQ0FsQmdCO0FBQUUsYUFBTyxzQkFBWTtLQUFDOzs7eUNBRVo7QUFBRSxhQUFPLHFCQUFXLFFBQVEsRUFBRTtLQUFFOzs7U0FKdkQsd0JBQXdCO0dBQVMsZ0JBQU0sU0FBUzs7a0JBd0J2QyxjQTFCTixPQUFPLEVBMEJPLHdCQUF3QixDQUFDIiwiZmlsZSI6IjIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRDb250YWluZXIgZnJvbSAnYWx0LWNvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hbWUgZnJvbSAnLi9uYW1lLmpzJztcbmltcG9ydCBMb2dpbkFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbnMnO1xuaW1wb3J0IExvZ2luU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0xvZ2luU3RvcmUnO1xuaW1wb3J0IGFsdCBmcm9tICcuLi9saWJzL2FsdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnYWx0LXJlYWN0JztcblxuY2xhc3MgQWx0Q29ubmVjdFRvU3RvcmVFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgZ2V0U3RvcmVzKCl7IHJldHVybiBbTG9naW5TdG9yZV19XG5cblx0c3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHsgcmV0dXJuIExvZ2luU3RvcmUuZ2V0U3RhdGUoKSB9XG5cbiAgcmVuZGVyKCkge1xuICBcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICBcdDxoMT5Db25uZWN0VG9TdG9yZUV4YW1wbGU8L2gxPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFkZC1ub3RlXCIgb25DbGljaz17dGhpcy5hZGROb3RlfT4tYTwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICBcdCAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBhZGROb3RlKCkge1xuICAgIExvZ2luQWN0aW9ucy51cGRhdGVub3RlKHtuYW1lIDogJ25ldyBuYW1lJ30pO1xuICB9XG4gICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChBbHRDb25uZWN0VG9TdG9yZUV4YW1wbGUpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vYXBwL2NvbXBvbmVudHMvQWx0Q29ubmVjdFRvU3RvcmVFeGFtcGxlLmpzeFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

})