import React, { Component } from 'react';
import './app.scss';
import Main from '../main/main';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Footer from '../footer/footer';
import { Route, Switch } from 'react-router-dom';
import Players from '../players/players';
import Player from '../players/player/player';

class App extends Component {
	state = {};

	render() {
		return (
			<>
				<Header />
				<Sidebar />
				<Main>
					<Switch>
						<Route exact path='/players' component={Players} />
						<Route exact path='/players/:playerId' component={Player} />
					</Switch>
				</Main>
				<Footer />
			</>
		);
	}
}

export default App;
