import TaskList from './components/task-list/task-list';
import styles from './home-page.module.css'
import { useTasks } from '../../store/tasks-store';
import CreateTask from './components/create-task-block/create-task';

const HomePage = () => {

	const {tasks, lastId} = useTasks();

	return (
		<main className={styles.wrapper}>
			<h1>Your tasks</h1>
			{
				tasks.length !== 0 && <TaskList />
			}
			{
				tasks.length === 0 && <CreateTask id={lastId + 1}/>
			}
		</main>
	)
}

export default HomePage;