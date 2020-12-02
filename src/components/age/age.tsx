import React from 'react';
import { Todo } from '../../utils/model';

export default function Age(props: { age: number; name: string; todo: Todo }) {
	const { age, name, todo } = props;

	return (
		<>
			<p>
				User age: {age}, his name is: {name}
			</p>
			<p>
				Todo item: {todo.id} {todo.title}
			</p>
		</>
	);
}
