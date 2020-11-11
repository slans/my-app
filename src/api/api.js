import axios from 'axios';

export default axios.create({
	base: 'https://jsonplaceholder.typicode.com/',
});
