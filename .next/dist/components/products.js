"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = require("next/node_modules/babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var type = _ref.type,
	    products = _ref.products,
	    _ref$totalPage = _ref.totalPage,
	    totalPage = _ref$totalPage === undefined ? 1 : _ref$totalPage,
	    _ref$page = _ref.page,
	    page = _ref$page === undefined ? 1 : _ref$page;
	return _react2.default.createElement("div", {
		"data-jsx": 234476408
	}, _react2.default.createElement("ul", {
		"data-jsx": 234476408
	}, (0, _keys2.default)(products).map(function (key) {
		return _react2.default.createElement(_link2.default, { href: "/product?id=" + key }, _react2.default.createElement("li", { key: key, "data-jsx": 234476408
		}, _react2.default.createElement("span", { className: "picture", "data-jsx": 234476408
		}, _react2.default.createElement("img", { src: products[key].url, alt: true, "data-jsx": 234476408
		})), _react2.default.createElement("span", { className: "item", "data-jsx": 234476408
		}, _react2.default.createElement("div", {
			"data-jsx": 234476408
		}, _react2.default.createElement("a", {
			"data-jsx": 234476408
		}, products[key].name)), _react2.default.createElement("div", { className: "info", "data-jsx": 234476408
		}, _react2.default.createElement("span", {
			"data-jsx": 234476408
		}, _react2.default.createElement("a", {
			"data-jsx": 234476408
		}, products[key].price))))));
	})), _react2.default.createElement("footer", {
		"data-jsx": 234476408
	}), _react2.default.createElement(_style2.default, {
		styleId: 234476408,
		css: "ul[data-jsx=\"234476408\"]{padding:0}li[data-jsx=\"234476408\"]{list-style-type:none;position:relative;padding:20px 30px 20px 80px;border-bottom:1px solid #eee;line-height:20px}.picture[data-jsx=\"234476408\"]{position:absolute;top:35%;left:0;width:80px;text-align:center;margin-top:-10px}img[data-jsx=\"234476408\"]{height:50px}.item[data-jsx=\"234476408\"]{-webkit-flex-grow:100;-ms-flex-grow:100;flex-grow:100;text-align:left}.info[data-jsx=\"234476408\"] a[data-jsx=\"234476408\"]{color:navy}footer[data-jsx=\"234476408\"]{padding:15px}footer[data-jsx=\"234476408\"] a[data-jsx=\"234476408\"]{color:#0e0e0e;text-decoration:none}"
	}));
};