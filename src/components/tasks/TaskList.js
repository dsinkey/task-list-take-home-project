import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, FieldArray, formValueSelector } from 'redux-form';
import Tasks from './Tasks';
import { getTasks, saveTasks } from '../../actions';

class TaskList extends Component {
	componentDidMount() {
		this.props.actions.getTasks();
	}

	render() {
		const { tasks, formValues } = this.props;
		const { saveTasks } = this.props.actions;
		return (
			<form>
				<FieldArray
					name="tasks"
					tasks={tasks}
					saveTasks={saveTasks}
					formValues={formValues}
					component={Tasks}
				/>
			</form>
		);
	}
}

TaskList = reduxForm({
	form: 'tasksForm',
	enableReinitialize: true
})(TaskList);

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({ getTasks, saveTasks }, dispatch)
});

const selector = formValueSelector('tasksForm');

const mapStateToProps = state => {
	const tasks = state.tasks;
	const toasts = state.toasts;
	const formValues = selector(state, 'tasks');
	const initialValues = {
		tasks: state.tasks
	};
	return { tasks, toasts, formValues, initialValues };
};

TaskList = connect(mapStateToProps, mapDispatchToProps)(TaskList);

export default TaskList;
