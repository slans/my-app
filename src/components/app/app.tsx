import React, { Component } from 'react';
import './app.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Main from '../main/main';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import TodosListContainer from '../todos-list/todos-list';
import TempCalculator from '../temp-calculator/temp-calculator';
import ProductsFilterable from '../products-filtarable/products-filtarable';
import Users from '../users/users';
import User from '../user/user';

class App extends Component {
	state = {};

	render() {
		return (
			<Router>
				<Header />
				<Sidebar />
				<Main />
				<Footer />
			</Router>
		);
	}
}

export default App;
