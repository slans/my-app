import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from '../../../api/api';

interface MatchParams {
	playerId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export default function Player(props: Props) {
	const { playerId } = props.match.params;
	const player = api.getPlayer(parseInt(playerId));
	return <div>{`${player!.number}. ${player!.name}, position: ${player!.position}`}</div>;
}
