import { GET_TASKS } from '../actions/types';

export default function(state = [], action) {
	const { payload, type } = action;

	switch (type) {
		case GET_TASKS:
			return payload;
		default:
			return state;
	}
}
