import React from 'react';
import Page from '../components/page';

export default class extends React.Component {
	static async getInitialProps() {
		return {};
	}

	render() {
		return (
			<Page>
				<div>
					<img src="static/img/icons/icon-512x512.png" alt />
					<style jsx>{`
						img {
							position: absolute;
							top: 50%;
							left: 50%;
							width: 100px;
							height: 100px;
							margin-top: -50px;
							margin-left: -50px;
						}
					`}</style>
				</div>
			</Page>
		);
	}
}
