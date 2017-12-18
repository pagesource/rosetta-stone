import fetch from './fetch'

export default async function fetchProducts(type, page, count = 30) {
	const products = await fetch(`${type}${page > 0 ? `/${page}` : ''}`)
	const length = await fetch(`length/${type}`)

	return {
		type,
		products,
		page,
		totalPage: Number(length / count)
	}
}
