'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nav = require('./nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var children = _ref.children;
	return _react2.default.createElement('main', { className: 'root', 'data-jsx': 708199976
	}, _react2.default.createElement(_nav2.default, null), _react2.default.createElement('div', { className: 'tiles', 'data-jsx': 708199976
	}, children), _react2.default.createElement(_style2.default, {
		styleId: 708199976,
		css: 'body{margin:0;font-family:Helvetica,sans-serif}.tiles[data-jsx="708199976"]{width:100%;color:#333;padding-top:50px}@media (max-width:600px){.tiles[data-jsx="708199976"]{padding:1px;padding-top:50px;width:auto}}'
	}));
};