import styles from './tag-panel.module.css';

const TagPanel = ({tag, text}: {tag: string, text: string}) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.tag}>
				{tag}:
			</div>
			<div className={styles.text}>
				{text}
			</div>
		</div>
	)
}

export default TagPanel;