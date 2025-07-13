import { Link } from 'react-router';
import styles from './header.module.css';
import { useTasks } from '../../store/tasks-store';

const Header = () => {

	const {lastId} = useTasks();

	return (
		<header className={styles.wrapper}>
			<nav className={styles.navigation}>
				<Link to={'/'}>Home</Link>
				<Link to={`/task/${lastId + 1}`}>Create task</Link>
			</nav>
		</header>
	)
}

export default Header;