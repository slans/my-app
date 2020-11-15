import axios from 'axios';

const api = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/',
});

class API {
	getTodos = async () => {
		try {
			const response = await api.get('todos');
			if (response.status === 200) {
				return response.data;
			}
		} catch (err) {
			console.log('err', err.response);
		}
	};
}

export default API;
