import React, { Component } from 'react';
import Utils from '../../utils/utils';
import BoilingVerdict from './boiling-verdict/boiling-verdict';
import TempInput from './temp-input/temp-input';

interface StateTempCalculator {
	temperature: string;
	scale: string;
}

export class TempCalculator extends Component<{}, StateTempCalculator> {
	state = {
		temperature: '',
		scale: 'c',
	};

	handleTempChange = (temperature: string, scale: string) => {
		this.setState({
			temperature,
			scale,
		});
	};

	render() {
		const { temperature, scale } = this.state;
		const celsius = scale === 'f' ? Utils.convertToCelsius(Number(temperature)) : temperature;
		const fahrenheit = scale === 'c' ? Utils.convertToFahrenheit(Number(temperature)) : temperature;

		return (
			<>
				<TempInput temperature={celsius} scale='c' handleTempChange={this.handleTempChange} />
				<TempInput temperature={fahrenheit} scale='f' handleTempChange={this.handleTempChange} />
				<BoilingVerdict temperature={Number(celsius)} />
			</>
		);
	}
}

export default TempCalculator;
