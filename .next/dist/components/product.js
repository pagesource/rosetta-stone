'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var product = _ref.product;
	return _react2.default.createElement('div', {
		'data-jsx': 1198126346
	}, _react2.default.createElement('img', { src: product.url, alt: true, 'data-jsx': 1198126346
	}), _react2.default.createElement('ul', {
		'data-jsx': 1198126346
	}, _react2.default.createElement('li', {
		'data-jsx': 1198126346
	}, product.name), _react2.default.createElement('li', { className: 'rating', 'data-jsx': 1198126346
	}, product.rating, ' \u2605'), _react2.default.createElement('li', { className: 'price', 'data-jsx': 1198126346
	}, product.price), _react2.default.createElement('li', { className: product.available === 'true' ? 'in-stock' : 'out-of-stock', 'data-jsx': 1198126346
	}, product.available === 'true' ? 'In stock' : 'Out of stock')), _react2.default.createElement(_style2.default, {
		styleId: 1198126346,
		css: 'ul[data-jsx="1198126346"]{padding:0}img[data-jsx="1198126346"]{display:block;margin-left:auto;margin-right:auto;padding-top:20px;height:300px}li[data-jsx="1198126346"]{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:5px;padding:0 20px}.rating[data-jsx="1198126346"]{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-left:20px;margin-bottom:2px;border-radius:3px;padding:2px 4px;font-size:14px;background-color:green;color:white}.price[data-jsx="1198126346"]{color:navy}.in-stock[data-jsx="1198126346"]{color:green}.out-of-stock[data-jsx="1198126346"]{color:red}'
	}));
};