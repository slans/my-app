import React, { Component } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import API from '../../api/api';
import { Products } from '../../utils/model';
import ProductTable from './products-table/products-table';
import SearchBar from './search-bar/search-bar';

const api = new API();
interface StateProductsFilterable {
	search: string;
	stocked: boolean;
	products: Products[] | [];
	loading: boolean;
}

export class ProductsFilterable extends Component<{}, StateProductsFilterable> {
	state = {
		search: '',
		stocked: false,
		products: [],
		loading: false,
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const products = await api.getProducts();
		this.setState({
			loading: false,
			products,
		});
	}

	render() {
		const { loading, products } = this.state;
		if (loading) return <Spinner color='primary' />;

		if (products.length) {
			return (
				<>
					<Row>
						<Col lg='3'>
							<SearchBar />
							<ProductTable products={products} />
						</Col>
					</Row>
				</>
			);
		}

		return <div></div>;
	}
}

export default ProductsFilterable;
