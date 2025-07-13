import { Link } from 'react-router';
import type { Itask } from '../../../../../store/tasks-store';
import styles from './task-card.module.css';
import TagPanel from './tad-panel/tag-panel';

const TaskCard = ({task}: {task: Itask}) => {
	return (
		<Link className={styles.wrapper} to={`task/${task.id}`}>
			<h3 className={styles.title}>{task.title}</h3>
			<p className={styles.description}>{task.description}</p>
			<div className={styles.tagBlock}>
				<TagPanel tag='category' text={task.category} />
				<TagPanel tag='status' text={task.status} />
				<TagPanel tag='priority' text={task.priority} />
			</div>
		</Link>
	)
}

export default TaskCard;