'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _fetch = require('./fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(id) {
		var product;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return (0, _fetch2.default)('product/' + id);

					case 2:
						product = _context.sent;
						return _context.abrupt('return', {
							id: id,
							product: product
						});

					case 4:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function fetchProduct(_x) {
		return _ref.apply(this, arguments);
	}

	return fetchProduct;
}();