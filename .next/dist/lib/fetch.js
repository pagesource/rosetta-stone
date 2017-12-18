'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('next/node_modules/babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('next/node_modules/babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(pathname) {
		var inNode, host, ufetch, url, res, data;
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						inNode = typeof window === 'undefined';
						host = inNode ? 'http://localhost:3000' : '';
						ufetch = inNode ? _isomorphicFetch2.default : fetch;
						url = host + '/ruby/' + pathname;
						_context.next = 6;
						return ufetch(url);

					case 6:
						res = _context.sent;
						_context.next = 9;
						return res.json();

					case 9:
						data = _context.sent;
						return _context.abrupt('return', data);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	function localfetch(_x) {
		return _ref.apply(this, arguments);
	}

	return localfetch;
}();