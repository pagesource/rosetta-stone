const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')

const ruby = require('./ruby')

const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()
const serve = (subpath, cache) => express.static(
	path.resolve(__dirname, subpath),
	{maxAge: cache && !dev ? 1000 * 60 * 60 * 24 * 30 : 0}
)

app.prepare()
	.then(() => {
		const server = express()

		server.use(compression({threshold: 0}))
		server.use('/static', serve('./static', true))
		server.use('/service-worker.js', serve('./.next/service-worker.js', true))
		server.use('/manifest.json', serve('./static/manifest.json', true))

		server.get('/ruby/*', (req, res) => {
			ruby.fetch(req.path)
				.then(data => {
					res.send(typeof data === 'number' ? String(data) : data)
				})
				.catch(err => {
					console.error(err)
					res.status(500).send(err.toString())
				})
		})

		server.get('*', (req, res) => {
			return handle(req, res)
		})

		server.listen(3000, err => {
			if (err) {
				throw err
			}

			console.log('> Ready on http://localhost:3000')
		})
	})
