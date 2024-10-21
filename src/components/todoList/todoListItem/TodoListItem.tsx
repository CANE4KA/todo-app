import { FC } from 'react'

import { ITodoItem } from '../../../models/ITodoItem'

import check from '../../../assets/images/check.png'
import trash from '../../../assets/images/trash.png'
import unCheck from '../../../assets/images/uncheck.png'

import {
	TodoItemButton,
	TodoListItemButtons,
	TodoListItemWrapper
} from './TodoListItem.styled'

export const TodoListItem: FC<ITodoItem> = ({
	todo,
	id,
	updateTodo,
	deleteTodo
}) => {
	return (
		<TodoListItemWrapper>
			<span>{todo.text}</span>
			<TodoListItemButtons>
				<TodoItemButton
					$icon={trash}
					onClick={() => deleteTodo(id)}
				></TodoItemButton>
				<TodoItemButton
					$icon={todo.isCheck ? check : unCheck}
					onClick={() => updateTodo(id)}
				></TodoItemButton>
			</TodoListItemButtons>
		</TodoListItemWrapper>
	)
}
