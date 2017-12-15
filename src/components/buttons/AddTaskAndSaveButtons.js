import React from 'react';

const AddTaskAndSaveButtons = ({ fields, dirty, saveTasks, formValues }) => (
	<div className="container add_tasks_and_save">
		<div className="pull-left tasks_title">Tasks</div>
		<div className="pull-right">
			<button
				type="button"
				className="btn add_task_button"
				aria-pressed="true"
				onClick={() => fields.unshift({})}
			>
				Add Task
			</button>
			<button
				type="button"
				className="btn save_button"
				disabled={!dirty}
				onClick={() => saveTasks(formValues)}
			>
				Save
			</button>
		</div>
	</div>
);

export default AddTaskAndSaveButtons;
