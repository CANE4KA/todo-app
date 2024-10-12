import cn from 'clsx'
import { FC } from 'react'

import styles from './TodoListItem.module.scss'

import { ITodoItem } from '../../../models/ITodoItem'

export const TodoListItem: FC<ITodoItem> = ({
	todo,
	id,
	updateTodo,
	deleteTodo
}) => {
	return (
		<li className={styles.wrapper}>
			<span>{todo.text}</span>
			<div className={styles.buttons}>
				<button
					className={styles.trash}
					onClick={() => deleteTodo(id)}
				></button>
				<button
					className={cn({
						[styles.check]: todo.isCheck,
						[styles.uncheck]: !todo.isCheck
					})}
					onClick={() => updateTodo(id)}
				></button>
			</div>
		</li>
	)
}
