import React from 'react';

interface PropsBoilingVerdict {
	temperature: number;
}

function BoilingVerdict(props: PropsBoilingVerdict) {
	const { temperature } = props;
	const possibility = temperature >= 100 ? 'is' : 'is not';

	return <div>The water {possibility} boiling</div>;
}

export default BoilingVerdict;
