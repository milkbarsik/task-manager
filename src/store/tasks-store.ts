import { create } from "zustand";
import { TasksServices } from "./task-services";

export type Itask = {
	id: number;
	title: string;
	description?: string;
	category: string;
	status: string;
	priority: string;
}

interface IUseTasks {
	tasks: Itask[];
	lastId: number;

	init: () => void;

	setTask: (task: Itask) => void;
	getTask: (id: number) => Itask | undefined;

	getAllTasks: () => Itask[];

	changeTask: (task: Itask) => void;

	deleteTask: (task: Itask) => void;
}

export const useTasks = create<IUseTasks>((set, get) => ({
	tasks: [],
	lastId: 0,

	init: () => {
		set((state) => ({
			...state,
			tasks: TasksServices.getTasks(),
			lastId: TasksServices.getLastTaskId()
		}))
	},
	
	setTask: (task: Itask) => set((state) => ({
		...state,
		tasks: TasksServices.setTasks([...state.tasks, {...task, id: state.lastId + 1}]),
		lastId: TasksServices.setLastTaskId(state.lastId + 1)
	})),

	getTask: (id: number) => get().tasks.find(el => el.id === id),

	getAllTasks: () => get().tasks,

	changeTask: (task: Itask) => set((state) => ({
		...state,
		tasks: TasksServices.setTasks([...state.tasks.map(el => el.id === task.id ? task : el)])
	})),

	deleteTask: (task: Itask) => set((state) => ({...state, tasks: TasksServices.setTasks([...state.tasks.filter(el => el.id !== task.id)])}))
}))