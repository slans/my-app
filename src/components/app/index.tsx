import React, { Component } from 'react';
import './app.scss';
import Main from '../main';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Utils from '../../utils/utils';

const utils = new Utils();

class App extends Component {
	state = {
		currentNumber: 0,
		numbers: [1, 2, 3, 4, 5, 6],
	};

	handleMainBtnClick = (num: number) => {
		this.setState({ currentNumber: num });
	};

	handleDeleteNumber = (num: number) => {
		const { numbers } = this.state;
		const idx = numbers.findIndex((number) => number === num);
		const newNumbers = utils.deleteItemFromArray(numbers, idx);
		this.setState({ numbers: newNumbers });
	};

	handleAddNumber = (num: number) => {
		const { numbers } = this.state;
		const newNumbers = utils.addItemToArray(numbers, num);
		this.setState({ numbers: newNumbers });
	};

	render() {
		console.log('currentNumber', this.state.currentNumber);
		const propsMain = {
			activeClass: this.state.currentNumber,
			onBtnClick: this.handleMainBtnClick,
			numbers: this.state.numbers,
			onDeleteNumber: this.handleDeleteNumber,
			onAddNumber: this.handleAddNumber,
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
