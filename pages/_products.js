import React from 'react'
import fetch from '../lib/fetch-products'
import Page from '../components/page'
import Products from '../components/products'

export default class extends React.Component {
	static async getInitialProps({query, pathname}) {
		const page = query && query.page ? query.page : 0
		const props = await fetch(pathname.substr(1), Number(page))
		return props
	}

	render() {
		const {type, products, page, totalPage} = this.props
		return <Page>
			<Products type={type}
				products={products}
				page={page}
				totalPage={totalPage} />
		</Page>
	}
}
