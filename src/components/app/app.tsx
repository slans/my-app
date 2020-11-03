import React, { Component } from 'react';

interface MyProps {
	children: any;
}
interface AppState {
	clickAmount: number;
}

export default class App extends Component<MyProps, AppState> {
	state = {
		clickAmount: 1,
	};

	handleClick = () => {
		this.setState(({ clickAmount }) => ({
			clickAmount: ++clickAmount,
		}));
	};

	render() {
		return (
			<>
				<div>{this.props.children}</div>
				<span onClick={this.handleClick}>Click</span>
			</>
		);
	}
}
