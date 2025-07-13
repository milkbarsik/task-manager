import type { Itask } from "./tasks-store"

export const TasksServices = {
	setTasks: (tasks: Itask[]): Itask[] => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
		return tasks;
	},

	setLastTaskId: (lastTaskId: number): number => {
		localStorage.setItem('lastTaskId', JSON.stringify(lastTaskId));
		return lastTaskId;
	},

	getTasks: (): Itask[] => {
		const tasks = localStorage.getItem('tasks');
		if (tasks !== null) {
			return JSON.parse(tasks);
		} else {
			return [];
		}
	},

	getLastTaskId: (): number => {
		const id = localStorage.getItem('lastTaskId');
		if (id !== null) {
			return Number(id);
		} else {
			return 0;
		}
	}
}