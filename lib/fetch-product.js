import fetch from './fetch'

export default async function fetchProduct(id) {
	const product = await fetch(`product/${id}`)

	return {
		id,
		product
	}
}
