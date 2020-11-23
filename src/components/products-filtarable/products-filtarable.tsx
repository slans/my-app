import React, { Component } from 'react';
import { Col, Row, Spinner } from 'reactstrap';
import API from '../../api/api';
import { Products } from '../../utils/model';
import ProductTable from './products-table/products-table';
import SearchBar from './search-bar/search-bar';

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
		const products = await API.getProducts();
		this.setState({
			loading: false,
			products,
		});
	}

	handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		this.setState({ search: value });
	};

	handleChangeStocked = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		this.setState({ stocked: checked });
	};

	filterOnSearch = (products: Products[], search: string) => {
		return products.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
	};

	filterOnStocked = (products: Products[]) => {
		return products.filter((item) => item.stocked);
	};

	render() {
		const { search, stocked, loading, products } = this.state;
		if (loading) return <Spinner color='primary' />;
		if (products.length) {
			let filteredProducts = search ? this.filterOnSearch(products, search) : products;
			filteredProducts = stocked ? this.filterOnStocked(filteredProducts) : filteredProducts;

			return (
				<Row>
					<Col lg='3'>
						<SearchBar
							onChangeSearch={this.handleSearch}
							search={search}
							onChangeStocked={this.handleChangeStocked}
							stocked={stocked}
						/>
						<ProductTable products={filteredProducts} />
					</Col>
				</Row>
			);
		}

		return <div></div>;
	}
}

export default ProductsFilterable;
