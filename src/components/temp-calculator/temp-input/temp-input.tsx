import React from 'react';

const scaleTemps: { [key: string]: string } = {
	c: 'Celsius',
	f: 'Fahrenheit',
};

interface PropsTempInput {
	temperature: string;
	scale: string;
	handleTempChange: (temperature: string, scale: string) => void;
}

function TempInput(props: PropsTempInput) {
	const { temperature, scale, handleTempChange } = props;

	const tempChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		handleTempChange(value, scale);
	};

	return (
		<fieldset>
			<legend>Enter temperature in {scaleTemps[scale]}</legend>
			<input type='number' value={temperature} onChange={tempChange} />
		</fieldset>
	);
}

export default TempInput;
