import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import usersData from '../../utils/users-data';

interface MatchParams {
	userId: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

export default function User(props: Props) {
	const { userId } = props.match.params;
	console.log('userId', typeof userId);
	return <div>{`User name: ${usersData[+userId - 1].name}`}</div>;
}
