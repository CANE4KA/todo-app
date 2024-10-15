import { FC } from 'react'

import { ITodoList } from '../../models/ITodoList'

import { ToDoList, TodoListContainer } from './TodoList.styles'
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
		<TodoListContainer>
			<ToDoList className='failed'>{todosMap(true)}</ToDoList>
			<ToDoList className='completed'>{todosMap(false)}</ToDoList>
		</TodoListContainer>
	)
}
