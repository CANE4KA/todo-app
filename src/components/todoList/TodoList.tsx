import styles from './TodoList.module.scss'

import { TodoListItem } from './todoListItem/TodoListItem'

export const TodoList = () => {
	return (
		<div className={styles.container}>
			<ul className={`${styles.list} ${styles.failed}`}>
				<TodoListItem />
			</ul>
			<ul className={`${styles.list} ${styles.completed}`}>
				<TodoListItem />
			</ul>
		</div>
	)
}
