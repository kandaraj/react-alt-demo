webpackHotUpdate(0,{

/***/ 221:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = undefined;\n\nvar _altContainer = __webpack_require__(164);\n\nvar _altContainer2 = _interopRequireDefault(_altContainer);\n\nvar _react = __webpack_require__(5);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _name = __webpack_require__(218);\n\nvar _name2 = _interopRequireDefault(_name);\n\nvar _LoginActions = __webpack_require__(219);\n\nvar _LoginActions2 = _interopRequireDefault(_LoginActions);\n\nvar _LoginStore = __webpack_require__(220);\n\nvar _LoginStore2 = _interopRequireDefault(_LoginStore);\n\nvar _alt = __webpack_require__(178);\n\nvar _alt2 = _interopRequireDefault(_alt);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar AltConnectToStoreExample = (function (_React$Component) {\n  _inherits(AltConnectToStoreExample, _React$Component);\n\n  function AltConnectToStoreExample() {\n    _classCallCheck(this, AltConnectToStoreExample);\n\n    return _possibleConstructorReturn(this, Object.getPrototypeOf(AltConnectToStoreExample).apply(this, arguments));\n  }\n\n  _createClass(AltConnectToStoreExample, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h1',\n          null,\n          'ConnectToStoreExample'\n        ),\n        _react2.default.createElement(\n          'button',\n          { className: 'add-note', onClick: this.addNote },\n          '-a'\n        ),\n        _react2.default.createElement('div', null)\n      );\n    }\n  }, {\n    key: 'addNote',\n    value: function addNote() {\n      _LoginActions2.default.updatenote({ name: 'new name' });\n    }\n  }], [{\n    key: 'getStores',\n    value: function getStores() {\n      return [_LoginStore2.default];\n    }\n  }, {\n    key: 'getPropsFromStores',\n    value: function getPropsFromStores() {\n      return _LoginStore2.default.getState();\n    }\n  }]);\n\n  return AltConnectToStoreExample;\n})(_react2.default.Component);\n\nexports.default = AltConnectToStoreExample;\nexports.default = _alt2.default.utils.connectToStores(AltConnectToStoreExample);//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9BbHRDb25uZWN0VG9TdG9yZUV4YW1wbGUuanN4P2FiOWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRcUIsd0JBQXdCO1lBQXhCLHdCQUF3Qjs7V0FBeEIsd0JBQXdCOzBCQUF4Qix3QkFBd0I7O2tFQUF4Qix3QkFBd0I7OztlQUF4Qix3QkFBd0I7OzZCQUtsQztBQUNQLGFBQ0U7OztRQUNDOzs7O1NBQThCO1FBQzdCOztZQUFRLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFROztTQUFZO1FBQy9ELDBDQUVNO09BQ0YsQ0FDTjtLQUNIOzs7OEJBQ1M7QUFDUiw2QkFBYSxVQUFVLENBQUMsRUFBQyxJQUFJLEVBQUcsVUFBVSxFQUFDLENBQUMsQ0FBQztLQUM5Qzs7O2dDQWhCZ0I7QUFBRSxhQUFPLHNCQUFZO0tBQUM7Ozt5Q0FFWjtBQUFFLGFBQU8scUJBQVcsUUFBUSxFQUFFO0tBQUU7OztTQUp4Qyx3QkFBd0I7R0FBUyxnQkFBTSxTQUFTOztrQkFBaEQsd0JBQXdCO2tCQXNCOUIsY0FBSSxLQUFLLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFDIiwiZmlsZSI6IjIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbHRDb250YWluZXIgZnJvbSAnYWx0LWNvbnRhaW5lcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hbWUgZnJvbSAnLi9uYW1lLmpzJztcbmltcG9ydCBMb2dpbkFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbkFjdGlvbnMnO1xuaW1wb3J0IExvZ2luU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0xvZ2luU3RvcmUnO1xuaW1wb3J0IGFsdCBmcm9tICcuLi9saWJzL2FsdCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWx0Q29ubmVjdFRvU3RvcmVFeGFtcGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRzdGF0aWMgZ2V0U3RvcmVzKCl7IHJldHVybiBbTG9naW5TdG9yZV19XG5cblx0c3RhdGljIGdldFByb3BzRnJvbVN0b3JlcygpIHsgcmV0dXJuIExvZ2luU3RvcmUuZ2V0U3RhdGUoKSB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIFx0PGgxPkNvbm5lY3RUb1N0b3JlRXhhbXBsZTwvaDE+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLW5vdGVcIiBvbkNsaWNrPXt0aGlzLmFkZE5vdGV9Pi1hPC9idXR0b24+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIFx0IFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgYWRkTm90ZSgpIHtcbiAgICBMb2dpbkFjdGlvbnMudXBkYXRlbm90ZSh7bmFtZSA6ICduZXcgbmFtZSd9KTtcbiAgfVxuICAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC51dGlscy5jb25uZWN0VG9TdG9yZXMoQWx0Q29ubmVjdFRvU3RvcmVFeGFtcGxlKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2FwcC9jb21wb25lbnRzL0FsdENvbm5lY3RUb1N0b3JlRXhhbXBsZS5qc3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9");

/***/ }

})