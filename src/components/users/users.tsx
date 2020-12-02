import React from 'react';
import usersData from '../../utils/users-data';

export default function Users() {
	console.log('usersData', usersData);
	return (
		<div>
			{usersData.map((item, idx) => {
				return <p key={idx}>{`${idx}. ${item.name}`}</p>;
			})}
		</div>
	);
}
