import React, { Component } from 'react';
import API from '../../api/api';
import { Todo } from '../../utils/model';
import ProductsFilterable from '../products-filtarable/products-filtarable';
import TempCalculator from '../temp-calculator/temp-calculator';
interface MainState {
	todos: Array<Todo> | [];
}
class Main extends Component<{ children: any }, MainState> {
	state = {
		todos: [] as Array<Todo>,
	};

	async componentDidMount() {
		const todos: Array<Todo> = await API.getTodos();

		this.setState({ todos });
	}

	getTodosElementsByUserId = (userId: number) => {
		const { todos } = this.state;
		const elementsTodos = todos
			.filter((item) => item.userId === userId)
			.map((item) => {
				return (
					<div className='todo-item' key={item.id}>
						<span>UserId: {item.userId}</span>
						<span>Id: {item.id}</span>
						<span>Title: {item.title}</span>
					</div>
				);
			});
		return elementsTodos;
	};

	render() {
		const { todos } = this.state;
		const { children } = this.props;
		return (
			<div className='main'>
				{children}
				{/* {todos.length && this.getTodosElementsByUserId(1)}
				<TempCalculator />
				<ProductsFilterable /> */}
			</div>
		);
	}
}

export default Main;
