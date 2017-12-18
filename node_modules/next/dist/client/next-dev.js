'use strict';

require('react-hot-loader/patch');

var _onDemandEntriesClient = require('./on-demand-entries-client');

var _onDemandEntriesClient2 = _interopRequireDefault(_onDemandEntriesClient);

var _webpackHotMiddlewareClient = require('./webpack-hot-middleware-client');

var _webpackHotMiddlewareClient2 = _interopRequireDefault(_webpackHotMiddlewareClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var next = window.next = require('./');

next.default().then(function (emitter) {
  (0, _onDemandEntriesClient2.default)();
  (0, _webpackHotMiddlewareClient2.default)();

  var lastScroll = void 0;

  emitter.on('before-reactdom-render', function (_ref) {
    var Component = _ref.Component,
        ErrorComponent = _ref.ErrorComponent;

    // Remember scroll when ErrorComponent is being rendered to later restore it
    if (!lastScroll && Component === ErrorComponent) {
      var _window = window,
          pageXOffset = _window.pageXOffset,
          pageYOffset = _window.pageYOffset;

      lastScroll = {
        x: pageXOffset,
        y: pageYOffset
      };
    }
  });

  emitter.on('after-reactdom-render', function (_ref2) {
    var Component = _ref2.Component,
        ErrorComponent = _ref2.ErrorComponent;

    if (lastScroll && Component !== ErrorComponent) {
      // Restore scroll after ErrorComponent was replaced with a page component by HMR
      var _lastScroll = lastScroll,
          x = _lastScroll.x,
          y = _lastScroll.y;

      window.scroll(x, y);
      lastScroll = null;
    }
  });
}).catch(function (err) {
  console.error(err.message + '\n' + err.stack);
});