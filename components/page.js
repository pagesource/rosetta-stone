import Head from 'next/head'
import Link from 'next/link'
import Nav from './nav'

export default ({children}) => (
	<main className="root">
		<Nav />
		<div className="tiles">
			{children}
		</div>
		<style jsx>{`
			:global(body) {
				margin: 0;
				font-family: Helvetica,sans-serif;
			}

			.tiles {
				width: 100%;
				color: #333;
				padding-top: 50px;
			}

			@media (max-width: 600px) {
				.tiles {
					padding: 1px;
					padding-top: 50px;
					width: auto;
				}
			}
		`}</style>
	</main>
)
