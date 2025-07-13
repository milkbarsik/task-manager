import styles from './task-list.module.css';
import { useTasks } from '../../../../store/tasks-store';
import TaskCard from './task-card/task-card';

const TaskList = () => {

	const {tasks} = useTasks();

	return (
		<div className={styles.wrapper}>
			<div className={styles.tasksBlock}>
				{
					tasks.sort((a, b) => a.id - b.id).map((el) => {
						return <TaskCard key={el.id} task={el}/>
					})
				}
			</div>
		</div>
	)
}

export default TaskList;