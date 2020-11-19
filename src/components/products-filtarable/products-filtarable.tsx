import React, { Component } from 'react';

interface StateProductsFilterable {
	search: string;
	inStock: boolean;
}

export class ProductsFilterable extends Component<{}, StateProductsFilterable> {
	state = {
		search: '',
		inStock: false,
	};

	render() {
		return <>{/* <SearchBar /> */}</>;
	}
}

export default ProductsFilterable;
