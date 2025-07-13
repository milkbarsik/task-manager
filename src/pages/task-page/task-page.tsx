import { useLocation, useNavigate } from 'react-router';
import styles from './task-page.module.css'
import { useEffect, useState, type ChangeEvent } from 'react';
import { useTasks, type Itask } from '../../store/tasks-store';
import { Input, type RadioChangeEvent } from 'antd';
import { Category, emtyTask, Priority, Status, validateData } from './consts';
import MyRadio from '../../components/my-radio/my-radio';
import { useError } from '../../hooks/useError/useError';

const { TextArea } = Input;

const TaskPage = () => {

	const {tasks, setTask, changeTask, deleteTask} = useTasks();
	const id = Number(useLocation().pathname.split('/').at(-1));
	const navigate = useNavigate();

	const [localTask, setLocalTask] = useState<Itask>({...emtyTask, id: id});
	const [isNewTask, setIsNewTask] = useState<boolean>(true);

	const {fetchError, error} = useError();

	useEffect(() => {
		const currentTask = tasks.find(el => el.id === id);
		if (currentTask) {
			setIsNewTask(false);
			setLocalTask(currentTask);
		}
		return () => {
			setLocalTask({...emtyTask, id: id})
			setIsNewTask(true);
		}
	}, [id, tasks]);

	const onchange = (prop: string) => {
		return (e: RadioChangeEvent | ChangeEvent<HTMLTextAreaElement>) => {
			setLocalTask({...localTask, [prop]: e.target.value})
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<h2 style={{textAlign: 'center'}}>Your task</h2>
				<div className={styles.inputBlock}>
					<h5>title</h5>
					<TextArea
						style={{transition: '0.4s'}}
						placeholder='title'
						value={localTask.title}
						onChange={onchange('title')}
						autoSize
					/>
				</div>
				<div className={styles.inputBlock}>
					<h5>description</h5>
					<TextArea
						style={{transition: '0.4s'}}
						placeholder='description'
						value={localTask.description}
						onChange={onchange('description')}
						autoSize
					/>
				</div>
				<div className={styles.inputBlock}>
					<h5>category</h5>
					<MyRadio values={Category} currentValue={localTask.category} setState={onchange('category')}/>
				</div>
				<div className={styles.inputBlock}>
					<h5>status</h5>
					<MyRadio values={Status} currentValue={localTask.status} setState={onchange('status')}/>
				</div>
				<div className={styles.inputBlock}>
					<h5>priority</h5>
					<MyRadio values={Priority} currentValue={localTask.priority} setState={onchange('priority')}/>
				</div>
				{
					error && <p className={styles.error}>{error}</p>
				}
				<div className={styles.buttonBlock}>
					<button
					className={styles.button}
						onClick={() => {
								fetchError(() => {
									validateData(localTask);
									isNewTask ? setTask(localTask) : changeTask(localTask);
									navigate('/');
								});
							}
						}
					>
						save
					</button>
					<button
						style={{marginLeft: 'auto'}}
						disabled={isNewTask}
						className={styles.button}
						onClick={() => {
							const approve = confirm('Are you sure you want to delete the task ?')
							if (approve) {
								deleteTask(localTask);
								navigate('/');
							}
						}}
					>
						delete
					</button>
					<button
						className={styles.button}
						onClick={() => {
							navigate('/');
						}}
					>
						cancel
					</button>
				</div>
			</div>
		</div>
	)
}

export default TaskPage;