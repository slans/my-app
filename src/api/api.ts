import axios from 'axios';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

const products = [
	{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
	{ category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
	{ category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
	{ category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
	{ category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
	{ category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];

const players = [
	{ number: 1, name: 'Ben Blocker', position: 'G' },
	{ number: 2, name: 'Dave Defender', position: 'D' },
	{ number: 3, name: 'Sam Sweeper', position: 'D' },
	{ number: 4, name: 'Matt Midfielder', position: 'M' },
	{ number: 5, name: 'William Winger', position: 'M' },
	{ number: 6, name: 'Fillipe Forward', position: 'F' },
];

class API {
	getTodos = async () => {
		try {
			const response = await api.get('todos');
			if (response.status === 200) {
				return response.data;
			}
		} catch (err) {
			console.error(err.response);
		}
	};

	getProducts = async () => {
		try {
			await timeout(1000);
			return products;
		} catch (error) {
			return [];
		}
	};

	getAllPlayers = () => {
		return players;
	};
	getPlayer = (id: number) => {
		return players.find((item) => item.number === id);
	};
}

function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default new API();
