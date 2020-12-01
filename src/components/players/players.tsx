import React from 'react';
import api from '../../api/api';

export default function Players() {
	const playersEls = api.getAllPlayers().map((player, idx) => {
		return <li key={`${idx}`}>{`${player.number}. ${player.name}, position: ${player.position}`}</li>;
	});
	return <ul>{playersEls}</ul>;
}
