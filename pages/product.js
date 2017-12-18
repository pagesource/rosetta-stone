import React from 'react'
import Page from '../components/page'
import Product from '../components/product'
import fetch from '../lib/fetch-product'

export default class extends React.Component {
	static async getInitialProps({query}) {
		const props = await fetch(query.id)
		return props
	}

	render() {
		const {product} = this.props
		return <Page>
			<Product product={product} />
		</Page>
	}
}
