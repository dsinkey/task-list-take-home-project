import React, { Component } from 'react';

class Toast extends Component {
	render() {
		const {
			backgroundColor,
			onDismissClick,
			borderColor,
			message,
			color
		} = this.props;

		return (
			<div
				className="toast_content"
				style={{
					backgroundColor: backgroundColor,
					borderColor: borderColor,
					color: color
				}}
				role="alert"
			>
				{message}
				<button
					type="button"
					className="close"
					data-dismiss="alert"
					aria-label="Close"
					onClick={onDismissClick}
					style={{ color: color }}
				>
					<span style={{ color: color }}>&times;</span>
				</button>
			</div>
		);
	}

	shouldComponentUpdate() {
		return false;
	}
}

export default Toast;
