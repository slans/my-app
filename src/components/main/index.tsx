import React from 'react';

interface PropsMain {
	activeClass: number;
	onBtnClick: (num: number) => void;
	numbers: Array<number>;
	onDeleteNumber: (num: number) => void;
	onAddNumber: (num: number) => void;
}

function Main(props: PropsMain) {
	const { activeClass, onBtnClick, numbers, onDeleteNumber, onAddNumber } = props;

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

	return (
		<div className='main'>
			{btnsElements}
			<div>Numbers: {numbers}</div>
			<div>
				<button onClick={() => onDeleteNumber(6)}>Delete number</button>
				<button onClick={() => onAddNumber(7)}>Add number</button>
			</div>
		</div>
	);
}

export default Main;
