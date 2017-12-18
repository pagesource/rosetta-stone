import Link from 'next/link'

export default({type, products, totalPage = 1, page = 1}) => (
	<div>
		<ul>
		{
			Object.keys(products).map(key => (
				<Link href={`/product?id=${key}`}>
					<li key={key}>
						<span className="picture">
							<img src={products[key].url} alt />
						</span>
						<span className="item">
							<div><a>{products[key].name}</a></div>
							<div className="info">
								<span>
									<a>{products[key].price}</a>
								</span>
							</div>
						</span>
					</li>
				</Link>	
			))
		}
		</ul>
		<footer>
		{/* {
			page <= totalPage &&
				<Link href={`${type}?page=${Number(page) + 1}`}><a>More</a></Link>
		} */}
		</footer>
		<style jsx>{`
			ul {
				padding: 0;
			}

			li {
				list-style-type: none;
				position: relative;
				padding: 20px 30px 20px 80px;
				border-bottom: 1px solid #eee;
				line-height: 20px;
			}

			.picture {
				position: absolute;
				top: 35%;
				left: 0;
				width: 80px;
				text-align: center;
				margin-top: -10px;
			}

			img {
				height: 50px;
			}

			.item {
				flex-grow: 100;
				text-align: left;
			}

			.info a {
				color: navy;
			}

			footer {
				padding: 15px
			}

			footer a {
				color: #0e0e0e;
				text-decoration: none;
			}
		`}</style>
	</div>
)
