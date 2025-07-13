import type { JSX } from "react";
import HomePage from "../../pages/home-page/home-page";
import TaskPage from "../../pages/task-page/task-page";

interface Iroutes {
	path: string;
	Component: () => JSX.Element
}

export const routes: Iroutes[] = [
	{
		path: '/',
		Component: HomePage
	},
	{
		path: '/task/:id',
		Component: TaskPage
	}
]