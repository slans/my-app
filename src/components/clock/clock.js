import React from 'react';

export default function Clock(props) {
	return <div>Current time: {props.time.toLocaleTimeString()}</div>;
}
