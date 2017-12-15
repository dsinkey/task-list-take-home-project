import axios from 'axios';
import {
	saveSuccessToastOptions,
	saveErrorToastOptions,
	getTasksErrorOptions,
	createToast
} from '../factories/createToast';
import { GET_TASKS, ADD_TOAST, REMOVE_TOAST } from './types';

export const getTasks = () => async dispatch => {
	axios
		.get('http://cfassignment.herokuapp.com/dustinsinkey/tasks')
		.then(success)
		.catch(fail);

	function success(res) {
		dispatch({ type: GET_TASKS, payload: res.data.tasks });
	}

	function fail(error) {
		dispatch({
			type: ADD_TOAST,
			payload: createToast(getTasksErrorOptions)
		});
	}
};

export const saveTasks = tasks => async dispatch => {
	const tasksObject = { tasks: tasks };
	axios
		.post(
			'http://cfassignment.herokuapp.com/dustinsinkey/tasks',
			tasksObject
		)
		.then(success)
		.catch(fail);

	function success(res) {
		dispatch({
			type: ADD_TOAST,
			payload: createToast(saveSuccessToastOptions)
		});
	}

	function fail(error) {
		dispatch({
			type: ADD_TOAST,
			payload: createToast(saveErrorToastOptions)
		});
	}
};

export const removeToast = id => {
	return {
		payload: id,
		type: REMOVE_TOAST
	};
};
