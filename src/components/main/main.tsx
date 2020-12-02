import React, { Component } from 'react';
import API from '../../api/api';
import { Todo } from '../../utils/model';
interface MainState {
	todos: Array<Todo> | [];
}
class Main extends Component<{}, MainState> {
	state = {
		todos: [] as Array<Todo>,
	};

	async componentDidMount() {
		const todos: Array<Todo> = await API.getTodos();

		this.setState({ todos });
	}

	render() {
		return <div className='main'></div>;
	}
}

export default Main;
