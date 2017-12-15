import React, { Component } from 'react';
import Header from './Header';
import TaskList from './tasks/TaskList';
import Toasts from './toast/Toasts';

class App extends Component {
	render() {
		return (
			<div className="app_styles">
				<Header />
				<TaskList />
				<Toasts />
			</div>
		);
	}
}

export default App;
