import React from 'react';

function CategoryRow(props: { category: string }) {
	const { category } = props;
	return (
		<tr>
			<td colSpan={2}>{category}</td>
		</tr>
	);
}

export default CategoryRow;
