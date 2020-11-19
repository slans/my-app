import React from 'react';
import { Table } from 'reactstrap';
import { Products } from '../../../utils/model';
import CategoryRow from './category-row/category-row';
import ProductRow from './product-row/product-row';

interface PropsProductTable {
	products: Products[];
}

function ProductTable(props: PropsProductTable) {
	const { products } = props;

	return (
		<Table>
			<thead>
				<tr>
					<th scope='col'>Name</th>
					<th scope='col'>Price</th>
				</tr>
			</thead>
			<tbody>{getTableBody(products)}</tbody>
		</Table>
	);
}

const getTableBody = (products: Products[]) => {
	let prevCategory = '';
	return products.reduce((result: any, item, idx) => {
		const { category, name, price, stocked } = item;
		if (category !== prevCategory) {
			prevCategory = category;
			result.push(
				<CategoryRow category={category} key={`cat-${idx}`} />,
				<ProductRow name={name} stocked={stocked} price={price} key={idx} />
			);
			return result;
		}
		result.push(<ProductRow name={name} stocked={stocked} price={price} key={idx} />);
		return result;
	}, []);
};

export default ProductTable;
