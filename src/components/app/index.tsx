import React, { Component } from 'react';
import './app.scss';
import Main from '../main';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';

class App extends Component {
	state = {
		currentNumber: 0,
	};

	handleMainBtnClick = (num: number) => {
		this.setState({ currentNumber: num });
	};

	render() {
		console.log('currentNumber', this.state.currentNumber);
		const propsMain = {
			activeClass: this.state.currentNumber,
			onBtnClick: this.handleMainBtnClick,
		};
		return (
			<>
				<Header />
				<Sidebar />
				<Main {...propsMain} />
				<Footer />
			</>
		);
	}
}

export default App;
