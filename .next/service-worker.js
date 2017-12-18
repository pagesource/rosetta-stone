importScripts('https://unpkg.com/workbox-sw@2.0.2-rc1/build/importScripts/workbox-sw.prod.v2.0.2-rc1-2.0.2-rc1.0.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.2/firebase-database.js')
importScripts('https://unpkg.com/firebase-hackernews@2.11.0/dist/firebase-hackernews-sw.js')

const workboxSW = new WorkboxSW({clientsClaim: true})

// set precahe listed item
workboxSW.precache([
  "/_next/44f2134768b39abc89d1589a25091fcf/app.js",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/_document",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/_error",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/_products",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/electronics",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/fashion",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/product",
  "/_next/930aa9fe-e5a8-4185-b088-440921e14eea/page/service-worker"
])

// cache very first page by sw
workboxSW.router.registerRoute(
	'/',
	workboxSW.strategies.staleWhileRevalidate()
)

hackernews.init(firebase, {
	watch: true
})
