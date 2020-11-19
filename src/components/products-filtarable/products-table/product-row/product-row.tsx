import React from 'react';
import classNames from 'classnames';

interface PropsProductRow {
	name: string;
	price: string;
	stocked: boolean;
}

function ProductRow(props: PropsProductRow) {
	const { name, price, stocked } = props;
	const rowClass = classNames('not-in-stock', !stocked);

	return (
		<tr className={rowClass}>
			<td>{name}</td>
			<td>{price}</td>
		</tr>
	);
}

export default ProductRow;
