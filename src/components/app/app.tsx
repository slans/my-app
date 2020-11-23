import React, { Component } from 'react';
import './app.scss';
import Main from '../main/main';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';

class App extends Component {
	state = {};

	render() {
		return (
			<>
				<Header />
				<Sidebar />
				<Main>
					<h1>Title</h1>
				</Main>
				<Footer />
			</>
		);
	}
}

export default App;
