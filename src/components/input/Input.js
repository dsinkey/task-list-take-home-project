import React, { Component } from 'react';

class Input extends Component {
	componentWillReceiveProps() {
		if (this.props.index === 0) {
			this.refs['0'].focus();
		}
	}
	render() {
		const { input, index } = this.props;
		return (
			<div>
				<input
					type="text"
					ref={index.toString()}
					className="pull-left input_component"
					{...input}
				/>
			</div>
		);
	}
}

export default Input;
