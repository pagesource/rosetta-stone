'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('next/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('next/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('next/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('next/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('next/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next/dist/server/document.js');

var _document2 = _interopRequireDefault(_document);

var _server = require('styled-jsx/server');

var _server2 = _interopRequireDefault(_server);

var _serviceWorker = require('./service-worker');

var _serviceWorker2 = _interopRequireDefault(_serviceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Document) {
	(0, _inherits3.default)(_class, _Document);

	function _class() {
		(0, _classCallCheck3.default)(this, _class);

		return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
	}

	(0, _createClass3.default)(_class, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement('html', { lang: 'en' }, _react2.default.createElement(_document.Head, null, _react2.default.createElement('meta', { charset: 'utf-8' }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('meta', { name: 'theme-color', content: '#000000' }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico' }), _react2.default.createElement('link', { rel: 'manifest', href: '/manifest.json' }), _react2.default.createElement('title', null, 'E-commerce PWA with Next.js')), _react2.default.createElement('body', { className: 'custom_class' }, _react2.default.createElement(_document.Main, null), _react2.default.createElement(_document.NextScript, null), _react2.default.createElement(_serviceWorker2.default, null)));
		}
	}], [{
		key: 'getInitialProps',
		value: function getInitialProps(_ref) {
			var renderPage = _ref.renderPage;

			var _renderPage = renderPage(),
			    html = _renderPage.html,
			    head = _renderPage.head,
			    errorHtml = _renderPage.errorHtml,
			    chunks = _renderPage.chunks;

			var styles = (0, _server2.default)();
			return { html: html, head: head, errorHtml: errorHtml, chunks: chunks, styles: styles };
		}
	}]);

	return _class;
}(_document2.default);

exports.default = _class;