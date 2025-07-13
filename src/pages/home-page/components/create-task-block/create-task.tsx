import { Link } from 'react-router';
import styles from './create-task.module.css'

const CreateTask = ({id} : {id: number}) => {
	return (
		<div className={styles.wrapper}>
			<h3>You're as free as the wind</h3>
			<Link to={`task/${id}`}>Create task</Link>
		</div>
	)
}

export default CreateTask;