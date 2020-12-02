import React, { Component } from 'react';
import API from '../../api/api';
import { Todo } from '../../utils/model';

function TodosList(props: { todos: Array<Todo> }) {
	const { todos } = props;
	const elementsTodos = todos.map((item) => {
		return (
			<div className='todo-item' key={item.id}>
				<span>UserId: {item.userId}</span>
				<span>Id: {item.id}</span>
				<span>Title: {item.title}</span>
				<span>Completed: {item.completed}</span>
			</div>
		);
	});

	return <div className='todos-list'>{elementsTodos}</div>;
}

class TodosListContainer extends Component<{ userId: number }> {
	state = {
		todos: [] as Todo[],
	};

	async componentDidMount() {
		const { userId } = this.props;
		const todos = await API.getTodosByUserId(userId);
		this.setState({ todos });
	}

	render() {
		return <TodosList todos={this.state.todos} />;
	}
}

export default TodosListContainer;
