import { useDispatch, useSelector } from 'react-redux'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Form } from '../components/form/Form'
import { TodoList } from '../components/todoList/TodoList'

import { createAction, deleteAction, updateAction } from '../feature/todoList'
import { RootState } from '../store'

export const ToDoList = () => {
	const todoList = useSelector((state: RootState) => state.todoList.todos)
	const dispatch = useDispatch()

	const createTodo = (text: string) => {
		dispatch(createAction(text))
		toast('Task created')
	}

	const updateTodo = (id: string) => {
		dispatch(updateAction(id))
		toast('Task modified')
	}

	const deleteTodo = (id: string) => {
		dispatch(deleteAction(id))
		toast('Task deleted')
	}

	return (
		<>
			<Form createTodo={createTodo} />
			<TodoList
				todos={todoList}
				updateTodo={updateTodo}
				deleteTodo={deleteTodo}
			/>
			<ToastContainer
				position='bottom-right'
				autoClose={2000}
				transition={Slide}
			/>
		</>
	)
}
