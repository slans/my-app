class Utils {
	deleteItemFromArray(arr: Array<any>, idx: any) {
		return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
	}
	addItemToArray(arr: Array<any>, item: any) {
		return [...arr, item];
	}
}

export default Utils;
