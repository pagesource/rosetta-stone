'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Service Worker snippets from https://github.com/codebusking/vue-hn-pwa-guide-kit/tree/master/build
// all of comments was removed to convenience reason

var swDevRegistration = 'self.addEventListener(\'install\', () => self.skipWaiting())\nself.addEventListener(\'activate\', () => {\n\tself.clients.matchAll({ type: \'window\' }).then(windowClients => {\n\t\tfor (let windowClient of windowClients) {\n\t\t\twindowClient.navigate(windowClient.url)\n\t\t}\n\t})\n})';

var swProdRegistration = '(function() {\n\t\'use strict\'\n\tconst isLocalhost = Boolean(window.location.hostname === \'localhost\' ||\n\t\t\twindow.location.hostname === \'[::1]\' ||\n\t\t\twindow.location.hostname.match(\n\t\t\t\t/^127(?:.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/\n\t\t\t)\n\t\t)\n\n\twindow.addEventListener(\'load\', function() {\n\t\tif (\'serviceWorker\' in navigator &&\n\t\t\t\t(window.location.protocol === \'https:\' || isLocalhost)) {\n\n\t\t\tnavigator.serviceWorker.register(\'service-worker.js\').then(function(registration) {\n\t\t\t\tconsole.log(\'ServiceWorker registration successful with scope: \', registration.scope);\n\t\t\t}).catch(function(e) {\n\t\t\t\tconsole.error(\'Error during service worker registration:\', e)\n\t\t\t})\n\n\t\t\tnavigator.serviceWorker.addEventListener(\'message\', async event => {\n\t\t\t\tconsole.log(\'ready to use hackernews()\', event)\n\t\t\t})\n\t\t}\n\t})\n})()';

exports.default = function () {
	return _react2.default.createElement('script', { dangerouslySetInnerHTML: {
			__html: process.env.NODE_ENV === 'production' ? swProdRegistration : swDevRegistration
		} });
};