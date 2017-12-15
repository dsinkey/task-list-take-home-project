import React from 'react';
import { Field } from 'redux-form';
import Input from '../input/Input';
import AddTaskAndSaveButtons from '../buttons/AddTaskAndSaveButtons';

const Tasks = ({ fields, meta: { dirty }, saveTasks, formValues }) => {
	return (
		<div className="container">
			<AddTaskAndSaveButtons
				fields={fields}
				dirty={dirty}
				formValues={formValues}
				saveTasks={saveTasks}
			/>
			{fields.map((task, index) => {
				return (
					<div className="card card_styles" key={index}>
						<div className="card-block">
							<Field
								className="pull-left"
								component={Input}
								type="text"
								name={`${task}.name`}
								index={index}
							/>
							<i
								className="fa fa-trash-o pull-right trash_can_styles"
								aria-hidden="true"
								onClick={() => fields.remove(index)}
							/>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Tasks;
