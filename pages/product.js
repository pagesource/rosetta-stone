import React from "react";
import Page from "../components/page";
import Product from "../components/product";
import fetch from "../lib/fetch-product";
import AddToCart from "../components/cart/AddToCart";
import { ThemeProvider } from "theming";
import theme from "../theme";
export default class extends React.Component {
	static async getInitialProps({ query }) {
		const props = await fetch(query.id);
		return props;
	}

	render() {
		const { product } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Page>
					<Product product={product} />
					<AddToCart item={product} />
				</Page>
			</ThemeProvider>
		);
	}
}
