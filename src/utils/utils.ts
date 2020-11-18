class Utils {
	deleteItemFromArray(arr: Array<any>, idx: any) {
		return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
	}

	addItemToArray(arr: Array<any>, item: any) {
		return [...arr, item];
	}

	convertToCelsius(fahrenheit: number) {
		if (fahrenheit === 0) return '';
		const result = (fahrenheit - 32) * (5 / 9);
		return String(result);
	}

	convertToFahrenheit(celsius: number) {
		if (celsius === 0) return '';
		const result = celsius + 9 / 5 + 32;
		return String(result);
	}
}

export default new Utils();
