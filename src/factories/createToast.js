let id = 0;

export const saveSuccessToastOptions = {
	backgroundColor: '#F6FFFC',
	borderColor: '#7CBFA8',
	color: '#7CBFA8',
	message: 'Tasks saved successfully'
};

export const saveErrorToastOptions = {
	backgroundColor: '#ffe5e5',
	borderColor: '#ff0000',
	color: '#ff0000',
	message: 'Error saving tasks'
};

export const getTasksErrorOptions = {
	backgroundColor: '#ffe5e5',
	borderColor: '#ff0000',
	color: '#ff0000',
	message: 'Error getting tasks'
};

export const createToast = function(options) {
	return {
		...options,
		id: id++
	};
};
