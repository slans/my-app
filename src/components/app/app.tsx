import React, { Component } from 'react';
import Clock from '../clock/clock';

interface MyProps {}
interface AppState {
	time: Date;
}

export default class App extends Component<MyProps, AppState> {
	state = {
		time: new Date(),
	};

	changeTime = () => {
		setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);
	};

	render() {
		const { time } = this.state;
		this.changeTime();
		return <Clock time={time} />;
	}
}
