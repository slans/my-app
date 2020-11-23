import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

interface PropsSearchBar {
	search: string;
	stocked: boolean;
	onChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onChangeStocked: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar(props: PropsSearchBar) {
	const { search, stocked, onChangeSearch, onChangeStocked } = props;
	return (
		<>
			<FormGroup>
				<Label for='searchProduct'>Поиск</Label>
				<Input
					type='text'
					value={search}
					onChange={onChangeSearch}
					name='searchProduct'
					id='searchProduct'
					placeholder='Поиск по продуктам'
				/>
			</FormGroup>
			<FormGroup check>
				<Input
					type='checkbox'
					checked={stocked}
					onChange={onChangeStocked}
					name='check'
					id='exampleCheck'
				/>
				<Label for='exampleCheck' check>
					Only show products in stock
				</Label>
			</FormGroup>
		</>
	);
}

export default SearchBar;
