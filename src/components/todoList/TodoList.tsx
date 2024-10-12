import cn from 'clsx'
import { FC } from 'react'

import styles from './TodoList.module.scss'

import { ITodoList } from '../../models/ITodoList'

import { TodoListItem } from './todoListItem/TodoListItem'

export const TodoList: FC<ITodoList> = ({ todos, updateTodo, deleteTodo }) => {
	const todosMap = (isCheck: boolean) =>
		todos.map(
			(todo, index) =>
				(isCheck ? !todo.isCheck : todo.isCheck) && (
					<TodoListItem
						key={index}
						todo={todo}
						id={index}
						deleteTodo={deleteTodo}
						updateTodo={updateTodo}
					/>
				)
		)

	return (
		<div className={styles.container}>
			<ul className={cn(styles.list, styles.failed)}>{todosMap(true)}</ul>
			<ul className={cn(styles.list, styles.completed)}>{todosMap(false)}</ul>
		</div>
	)
}
