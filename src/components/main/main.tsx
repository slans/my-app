import React, { Component } from 'react';
import API from '../../api/api';
import { Todo } from '../app/model';
import TempCalculator from '../temp-calculator/temp-calculator';

const api = new API();
interface MainState {
	todos: Array<Todo> | [];
}
class Main extends Component<{}, MainState> {
	state = {
		todos: [] as Array<Todo>,
	};

	async componentDidMount() {
		const todos: Array<Todo> = await api.getTodos();

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
		return (
			<div className='main'>
				{todos.length && this.getTodosElementsByUserId(1)}
				<TempCalculator />
			</div>
		);
	}
}

export default Main;
