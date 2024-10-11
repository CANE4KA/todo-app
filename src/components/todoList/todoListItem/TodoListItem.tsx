import styles from './TodoListItem.module.scss'

export const TodoListItem = () => {
	return (
		<li className={styles.wrapper}>
			<span>Первый элемент</span>
			<div className={styles.buttons}>
				<button className={styles.trash}></button>
				<button className={styles.check}></button>
			</div>
		</li>
	)
}
