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
}

function timeout(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default new API();
