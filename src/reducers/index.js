import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import toasts from './toastsReducer';
import tasks from './tasksReducer';

export default combineReducers({
	form: reduxForm,
	tasks,
	toasts
});
