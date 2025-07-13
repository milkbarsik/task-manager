import type { Itask } from "../../store/tasks-store"

export const Category = [
	'Feature',
	'Documentation',
	'Refactor',
	'Test'
]

export const Status = [
	'To Do',
	'In Progress',
	'Done'
]

export const Priority = [
	'Low',
	'Medium',
	'High'
]

export const emtyTask: Itask = {
	id: -1,
	title: '',
	category: Category[0],
	status: Status[0],
	priority: Priority[0]
}

export const validateData = (task: Itask) => {
	if (task.id <= 0 || !task.id) {
		throw new Error('something went wrong');
	} else if (task.title === '') {
		throw new Error('title cant be empty');
	} else if (task.category === '') {
		throw new Error('category cant be empty');
	} else if (task.status === '') {
		throw new Error('status cant be empty');
	} else if (task.priority === '') {
		throw new Error('priority cant be empty');
	}
}