import React from 'react';

interface PropsMain {
	activeClass: number;
	onBtnClick: (num: number) => void;
}

function Main({ activeClass, onBtnClick }: PropsMain) {
	const btnsArr = [
		{ label: 'Кликни', id: 1 },
		{ label: 'Нажми', id: 2 },
		{ label: 'Надави', id: 3 },
	];

	const btnsFunc = (item: any) => {
		const clazz = activeClass === item.id ? 'active' : '';
		return (
			<button key={item.id} className={clazz} onClick={() => onBtnClick(item.id)}>
				{item.label}
			</button>
		);
	};

	const btnsElements = btnsArr.map(btnsFunc);

	return <div className='main'>{btnsElements}</div>;
}

export default Main;
