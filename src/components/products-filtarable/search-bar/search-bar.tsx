import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

function SearchBar() {
	return (
		<>
			<FormGroup>
				<Label for='searchProduct'>Поиск</Label>
				<Input type='text' name='searchProduct' id='searchProduct' placeholder='Введите текст' />
			</FormGroup>
			<FormGroup check>
				<Input type='checkbox' name='check' id='exampleCheck' />
				<Label for='exampleCheck' check>
					Only show products in stock
				</Label>
			</FormGroup>
		</>
	);
}

export default SearchBar;
