'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{ href: '/', label: 'Ruby' }, { href: '/fashion', label: 'Fashion' }, { href: '/electronics', label: 'Electronics' }];

exports.default = function () {
	return _react2.default.createElement('nav', {
		'data-jsx': 2264215236
	}, _react2.default.createElement('header', {
		'data-jsx': 2264215236
	}, links.map(function (link, i) {
		return _react2.default.createElement('span', { key: 'nav-link-' + i, 'data-jsx': 2264215236
		}, _react2.default.createElement(_link2.default, { href: link.href }, _react2.default.createElement('a', {
			'data-jsx': 2264215236
		}, link.label)));
	})), _react2.default.createElement(_style2.default, {
		styleId: 2264215236,
		css: 'nav[data-jsx="2264215236"]{text-align:center;background-color:black;color:white;padding:12px;position:fixed;z-index:1000;top:0;left:0;right:0}header[data-jsx="2264215236"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;margin:0}span[data-jsx="2264215236"]{padding:6px 8px}a[data-jsx="2264215236"]{color:white;text-decoration:none;font-size:16px}@media (max-width:600px){header[data-jsx="2264215236"]{-webkit-box-pack:none;-webkit-justify-content:none;-ms-flex-pack:none;justify-content:none}}'
	}));
};